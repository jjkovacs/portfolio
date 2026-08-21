// Prerenders the built SPA into fully-rendered static HTML.
//
// This is a single-page React app with no server-rendered content, so the
// raw dist/index.html only contains an empty <div id="root">. Crawlers that
// don't execute JavaScript (many social scrapers, some search bots, link
// preview generators, etc.) would otherwise see none of the actual page
// content. To fix that, we spin up a local static server for the built
// dist/ folder, load the page in headless Chrome via Puppeteer, wait for
// the React app (and its animations) to settle, then snapshot the fully
// rendered DOM and write it back over dist/index.html.
//
// The app remains a normal client-side SPA after this step — React
// hydrates over the prerendered markup on load exactly as it would over the
// empty shell, so behavior is unaffected. Only the initial HTML payload
// changes.

import { preview } from "vite";
import puppeteer from "puppeteer";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distIndexPath = resolve(__dirname, "../dist/index.html");

async function main() {
  const server = await preview({ preview: { port: 4173, strictPort: true } });
  const url = server.resolvedUrls.local[0];

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });

    // Give framer-motion entrance animations + font loading a moment to
    // settle so the snapshot reflects the final, stable DOM state.
    await new Promise((r) => setTimeout(r, 500));

    const renderedHtml = await page.content();

    // Preserve the original <head> (meta tags, JSON-LD, canonical, etc.)
    // exactly as authored, and only replace the <body> with the rendered
    // markup, so we don't depend on Puppeteer's serialization of <head>.
    const originalHtml = readFileSync(distIndexPath, "utf-8");
    const bodyMatch = renderedHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (!bodyMatch) {
      throw new Error("Could not extract <body> from rendered page");
    }

    const finalHtml = originalHtml.replace(
      /<body([^>]*)>[\s\S]*<\/body>/i,
      `<body$1>${bodyMatch[1]}</body>`,
    );

    writeFileSync(distIndexPath, finalHtml);
    console.log("Prerendered dist/index.html with static content.");
  } finally {
    await browser.close();
    await server.close();
  }
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
