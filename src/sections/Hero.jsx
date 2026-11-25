import { CodeXml, Send, Download, Mail } from "lucide-react";

import FahimyImage from "../assets/Fahimy.png";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070817] pt-20"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_45%,rgba(50,20,220,0.35),transparent_45%)]" />

      <div className="absolute -left-20 -top-32 h-80 w-80 rounded-full bg-purple-800/70 blur-3xl" />

      <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-blue-700/30 blur-3xl" />

      {/* Decorative Circles */}
      <div className="absolute left-[5%] top-[20%] h-2 w-2 rounded-full bg-purple-500" />

      <div className="absolute left-[48%] top-[25%] h-1 w-1 rounded-full bg-purple-500" />

      <div className="absolute right-[10%] top-[45%] h-3 w-3 rounded-full bg-blue-600" />

      {/* Code Icon */}
      <CodeXml
        size={65}
        className="absolute right-[8%] top-[22%] text-purple-600"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col items-center justify-center px-6 lg:flex-row lg:px-10">
        <div className="w-full max-w-2xl lg:w-[55%]">
          {/* Introduction */}
          <p className="mb-2 text-xl font-medium text-gray-200">Hello, I'm</p>

          {/* Name */}
          <h1 className="mb-3 whitespace-nowrap text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[54px] xl:text-[60px]">
            Mohammad{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Fahimy
            </span>
          </h1>

          {/* Job Title */}
          <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">
            Front-End Developer
            <span className="text-purple-500"> | </span>
            <span className="text-purple-500">React.js Enthusiast</span>
          </h2>

          {/* Description */}
          <p className="mb-7 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            I build modern, responsive and user-friendly web applications with
            React, Tailwind CSS and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="mb-7 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Send size={17} />
              View My Projects
              <span>→</span>
            </a>

            <a
              href="#resume"
              className="flex items-center gap-2 rounded-full border border-purple-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-purple-600"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/fahimym52-source"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white transition hover:bg-purple-600"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-white transition hover:bg-purple-600"
            >
              in
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-purple-600"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex w-full items-center justify-center lg:w-[45%] lg:justify-end">
          {/* Purple Glow */}
          <div className="absolute h-[350px] w-[350px] rounded-full bg-purple-700/40 blur-[100px]" />

          {/* Decorative Shape */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-br from-purple-700 to-blue-700 opacity-60 blur-3xl" />

          {/* Personal Image */}
          <img
            src={FahimyImage}
            alt="Mohammad Fahimy"
            className="relative z-10 w-full max-w-[560px] translate-y-6 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
