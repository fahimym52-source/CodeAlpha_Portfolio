import { useState } from "react";
import { Menu, X, Moon, ArrowRight, Diamond } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#08091b]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-violet-700 text-xl font-bold text-white shadow-lg shadow-purple-500/20">
            F
          </span>

          <span className="text-lg font-bold text-white">Fahimy</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative py-2 text-sm transition-colors duration-300 hover:text-purple-400 ${
                index === 0 ? "text-purple-400" : "text-gray-300"
              }`}
            >
              {index === 0 && (
                <Diamond size={9} fill="currentColor" className="mr-1 inline" />
              )}

              {link.name}

              {index === 0 && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-purple-500" />
              )}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-6 md:flex">
          <button
            type="button"
            aria-label="Theme icon"
            className="text-gray-300 transition hover:text-purple-400"
          >
            <Moon size={20} />
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
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#08091b]/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-300 transition hover:text-purple-400"
              >
                {link.name}
              </a>
            ))}

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
