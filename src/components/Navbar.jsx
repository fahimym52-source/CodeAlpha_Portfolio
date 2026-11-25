import { useState, useEffect } from "react";

import { Menu, X, Moon, Sun, ArrowRight, Diamond } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-white/5 ${theme === "dark" ? "bg-[#08091b]/80" : "bg-white/85"} backdrop-blur-xl`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-violet-700 text-xl font-bold text-white shadow-lg shadow-purple-500/20">
            F
          </span>
          <span
            className={`text-lg font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Fahimy
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.href.slice(1))}
                className={`relative py-2 text-sm transition-colors duration-300 hover:text-purple-400 ${
                  isActive
                    ? "text-purple-500"
                    : theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-700"
                }`}
              >
                {isActive && (
                  <Diamond
                    size={9}
                    fill="currentColor"
                    className="mr-1 inline"
                  />
                )}

                {link.name}

                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-purple-500" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-6 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-gray-300 transition hover:text-purple-400"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/40"
          >
            Hire Me
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        {/* Mobile Right Side */}
        <div className="flex items-center gap-5 md:hidden">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`transition ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`transition ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          className={`border-t px-6 py-5 backdrop-blur-xl md:hidden ${
            theme === "dark"
              ? "border-white/10 bg-[#08091b]/95"
              : "border-gray-200 bg-white/95"
          }`}
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href.slice(1));
                    setMenuOpen(false);
                  }}
                  className={`text-sm transition ${
                    isActive
                      ? "text-purple-500"
                      : theme === "dark"
                        ? "text-gray-300"
                        : "text-gray-700"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Hire Me
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
