import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiVite } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "Vite", icon: SiVite, color: "text-purple-400" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0b0b19] px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-purple-400">
            What I Know
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills.
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

          <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-400">
            Technologies and tools I use to build modern, responsive, and
            interactive web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-purple-500/[0.05] hover:shadow-xl hover:shadow-purple-500/10"
              >
                <Icon
                  className={`mb-5 text-5xl ${skill.color} transition duration-300 group-hover:scale-110`}
                />

                <h3 className="text-sm font-semibold text-gray-300 transition group-hover:text-white">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Always learning. Always improving.
          </p>
        </div>
      </div>
    </section>
  );
}
