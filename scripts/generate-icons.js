// One-off script to rasterize public/favicon.svg into the PNG icon sizes
// referenced from index.html and site.webmanifest (apple-touch-icon,
// favicon-32x32, favicon-16x16, android-chrome-192x192/512x512). Uses
// Puppeteer (already a devDependency for prerendering) instead of adding a
// new native image dependency. Run manually with `node scripts/generate-icons.js`
// whenever public/favicon.svg changes; output is committed to public/icons.

import puppeteer from "puppeteer";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(__dirname, "../public/favicon.svg");
const outDir = resolve(__dirname, "../public/icons");

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
];

async function main() {
  mkdirSync(outDir, { recursive: true });
  const svg = readFileSync(svgPath, "utf-8");
  const svgDataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    for (const { name, size } of sizes) {
      await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
      await page.setContent(
        `<html><body style="margin:0"><img src="${svgDataUrl}" width="${size}" height="${size}" /></body></html>`,
      );
      const el = await page.$("img");
      const buffer = await el.screenshot({ type: "png", omitBackground: false });
      writeFileSync(resolve(outDir, name), buffer);
      console.log(`Wrote public/icons/${name} (${size}x${size})`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error("Icon generation failed:", err);
  process.exit(1);
});
