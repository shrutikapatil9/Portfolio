/* jshint ignore:start */
/* jshint ignore:start */
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ParticlesBackground from "./ParticlesBackground";
import Portfolio from "./Portfolio";
import ScrollToTopButton from "./ScrollToTopButton";
import Loader from "./Loader";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // 🔁 Refresh AOS after slight delay to animate elements visible on load
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Simulate loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <ParticlesBackground />

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded shadow"
      >
        {darkMode ? "Light" : "Dark"} Mode
      </button>

      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-all duration-300">
        <ScrollToTopButton />
        <Portfolio />
      </div>
    </>
  );
}

export default App;

