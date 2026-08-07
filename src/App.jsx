import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  // On initial load (including a hard refresh), the browser attempts to
  // scroll to any #hash in the URL before React has rendered the page, so
  // the target section doesn't exist yet and the jump silently fails.
  // Once fonts are loaded (avoiding a layout shift) and the app has
  // rendered, scroll to the matching section ourselves. Fonts are raced
  // against a short timeout so a slow/offline font load can't block the
  // scroll indefinitely.
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      }
    };

    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const timeout = new Promise((resolve) => setTimeout(resolve, 300));

    Promise.race([fontsReady, timeout]).then(scrollToHash);
  }, []);

  return (
    <div className="bg-steel-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
