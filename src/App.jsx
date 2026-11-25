import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Resume from "./sections/Resume";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <Projects theme={theme} />
        <Skills theme={theme} />
        <Resume theme={theme} />
        <Contact theme={theme} />
      </main>

      <Footer theme={theme} />
    </>
  );
}
