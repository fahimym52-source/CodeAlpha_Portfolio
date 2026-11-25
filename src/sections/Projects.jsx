import {
  FaImages,
  FaCalculator,
  FaRobot,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "Image Gallery",
    image: "/images/projects/gallery.png",
    description:
      "A modern image gallery featuring categorized collections, interactive lightbox, and a responsive design.",
    technologies: ["JavaScript", "Tailwind CSS", "React", "Vite"],
    icon: FaImages,
    gradient: "from-purple-600 to-pink-500",
    demo: "https://code-alpha-image-gallery-omega-five.vercel.app/",
    github: "https://github.com/fahimym52-source/CodeAlpha_ImageGallery",
  },
  {
    number: "02",
    title: "Smart Calculator",
    image: "/images/projects/calculator.png",
    description:
      "A modern calculator with essential arithmetic operations, keyboard support, and light and dark themes.",
    technologies: ["JavaScript", "Tailwind CSS", "React", "Vite"],
    icon: FaCalculator,
    gradient: "from-blue-600 to-cyan-500",
    demo: "https://code-alpha-calculator-orpin.vercel.app/",
    github: "https://github.com/fahimym52-source/CodeAlpha_Calculator",
  },
  {
    number: "03",
    title: "React Agent Website",
    image: "/images/projects/agent.png",
    description:
      "A React-based web project. Explore the live website to discover its design and features.",
    technologies: ["JavaScript", "Tailwind CSS", "React", "Vite"],
    icon: FaRobot,
    gradient: "from-indigo-600 to-purple-500",
    demo: "https://react-agent-website.vercel.app/",
    github: "https://github.com/fahimym52-source/react-agent-website",
  },
];

export default function Projects({ theme = "dark" }) {
  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      className={`relative overflow-hidden px-6 py-24 transition-colors duration-300 ${
        isDark ? "bg-[#0b0b19]" : "bg-[#f8f9ff]"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-purple-400">
            My Recent Work
          </p>

          <h2
            className={`text-4xl font-bold md:text-5xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projects.
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

          <p
            className={`mx-auto mt-6 max-w-xl leading-7 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Here are some of my recent projects where I turn ideas into
            functional and creative web experiences.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.number}
                className={`group overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 ${
                  isDark
                    ? "border-white/10 bg-white/[0.03]"
                    : "border-gray-200 bg-white shadow-sm"
                }`}
              >
                {/* Project Preview */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-black/40 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                    PROJECT {project.number}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-7">
                  <div className="mb-3 flex items-center justify-between">
                    <h3
                      className={`text-xl font-bold transition group-hover:text-purple-400 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <div
                      className={`rounded-xl bg-gradient-to-r ${project.gradient} p-2 text-white`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <p
                    className={`mb-6 min-h-20 text-sm leading-7 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-7 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    className={`flex items-center gap-5 border-t pt-5 ${
                      isDark ? "border-white/10" : "border-gray-200"
                    }`}
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm font-semibold transition hover:text-purple-400 ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-xs" />
                    </a>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-sm font-semibold transition hover:text-purple-400 ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <FaGithub className="text-lg" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-14 text-center">
          <p
            className={`text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}
          >
            More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
