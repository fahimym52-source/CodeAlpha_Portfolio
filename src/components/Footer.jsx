import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080812] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white">
            Fahimy<span className="text-purple-400">.</span>
          </a>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#home" className="transition hover:text-purple-400">
              Home
            </a>
            <a href="#about" className="transition hover:text-purple-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-purple-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-purple-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-purple-400">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/fahimym52-source"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-purple-500 hover:bg-purple-500 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mohammad Fahimy. All rights reserved.
          </p>

          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-500">
            Made with <FaHeart className="text-purple-500" /> using React &
            Tailwind CSS
          </p>
        </div>

        {/* Back to Top */}
        <a
          href="#home"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20 transition hover:scale-110"
        >
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}
