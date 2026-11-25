import {
  FaGraduationCap,
  FaBriefcase,
  FaDownload,
  FaCode,
} from "react-icons/fa";

export default function Resume({ theme = "dark" }) {
  const isDark = theme === "dark";

  const cardStyle = isDark
    ? "border-white/10 bg-white/[0.03]"
    : "border-gray-200 bg-white shadow-sm";

  const headingStyle = isDark ? "text-white" : "text-gray-900";
  const paragraphStyle = isDark ? "text-gray-400" : "text-gray-600";
  const dotBorder = isDark ? "border-[#0b0b19]" : "border-[#f8f9ff]";

  return (
    <section
      id="resume"
      className={`px-6 py-24 transition-colors duration-300 ${
        isDark ? "bg-[#0b0b19]" : "bg-[#f8f9ff]"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
            My Journey
          </p>

          <h2 className={`text-4xl font-bold md:text-5xl ${headingStyle}`}>
            My <span className="text-purple-400">Resume</span>
          </h2>

          <p className={`mx-auto mt-5 max-w-2xl ${paragraphStyle}`}>
            My educational background and practical experience in front-end
            development.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Education */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
                <FaGraduationCap />
              </div>

              <h3 className={`text-2xl font-bold ${headingStyle}`}>
                Education
              </h3>
            </div>

            <div className="space-y-6 border-l-2 border-purple-500/30 pl-6">
              <div
                className={`relative rounded-2xl border p-6 transition hover:border-purple-500/50 ${cardStyle}`}
              >
                <span
                  className={`absolute -left-[33px] top-7 h-4 w-4 rounded-full border-4 bg-purple-500 ${dotBorder}`}
                ></span>

                <span className="text-sm font-semibold text-purple-400">
                  University
                </span>

                <h4 className={`mt-2 text-xl font-bold ${headingStyle}`}>
                  Software Engineering
                </h4>

                <p className={`mt-2 ${paragraphStyle}`}>Herat University</p>
              </div>

              <div
                className={`relative rounded-2xl border p-6 transition hover:border-purple-500/50 ${cardStyle}`}
              >
                <span
                  className={`absolute -left-[33px] top-7 h-4 w-4 rounded-full border-4 bg-purple-500 ${dotBorder}`}
                ></span>

                <span className="text-sm font-semibold text-purple-400">
                  2024
                </span>

                <h4 className={`mt-2 text-xl font-bold ${headingStyle}`}>
                  High School Diploma
                </h4>

                <p className={`mt-2 ${paragraphStyle}`}>Completed Grade 12</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                <FaBriefcase />
              </div>

              <h3 className={`text-2xl font-bold ${headingStyle}`}>
                Experience
              </h3>
            </div>

            <div className="space-y-6 border-l-2 border-blue-500/30 pl-6">
              <div
                className={`relative rounded-2xl border p-6 transition hover:border-blue-500/50 ${cardStyle}`}
              >
                <span
                  className={`absolute -left-[33px] top-7 h-4 w-4 rounded-full border-4 bg-blue-500 ${dotBorder}`}
                ></span>

                <span className="text-sm font-semibold text-blue-400">
                  Front-End Development
                </span>

                <h4 className={`mt-2 text-xl font-bold ${headingStyle}`}>
                  CodeAlpha Internship Projects
                </h4>

                <p className={`mt-3 leading-7 ${paragraphStyle}`}>
                  Developed practical projects using React, Tailwind CSS,
                  JavaScript and modern web technologies.
                </p>
              </div>

              <div
                className={`relative rounded-2xl border p-6 transition hover:border-blue-500/50 ${cardStyle}`}
              >
                <span
                  className={`absolute -left-[33px] top-7 h-4 w-4 rounded-full border-4 bg-blue-500 ${dotBorder}`}
                ></span>

                <span className="text-sm font-semibold text-blue-400">
                  Personal Development
                </span>

                <h4 className={`mt-2 text-xl font-bold ${headingStyle}`}>
                  Independent Projects
                </h4>

                <p className={`mt-3 leading-7 ${paragraphStyle}`}>
                  Building responsive web applications and improving front-end
                  development skills through hands-on projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume */}
        <div className="mt-16 text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-105 hover:shadow-purple-500/40"
          >
            <FaDownload />
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
