const info = [
  {
    title: "My Specialty",
    value: "Front-End Developer",
    description: "Building modern web experiences",
  },
  {
    title: "My Approach",
    value: "Creative Problem Solver",
    description: "Turning ideas into reality",
  },
  {
    title: "My Goal",
    value: "Software Engineer",
    description: "Learning and growing every day",
  },
];

export default function About({ theme = "dark" }) {
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`relative overflow-hidden px-6 py-24 transition-colors duration-300 ${
        isDark ? "bg-[#0b0b19]" : "bg-[#f8f9ff]"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-purple-400">
            Get to know me
          </p>

          <h2
            className={`text-4xl font-bold md:text-5xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Me.
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </div>

        {/* Introduction */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h3
            className={`mb-6 text-2xl font-bold leading-relaxed md:text-3xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Turning Ideas Into Meaningful Digital Experiences.
          </h3>

          <p
            className={`leading-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            I'm Mohammad Fahimy, a passionate Front-End Developer who enjoys
            creating modern, responsive, and user-friendly websites. I love
            turning creative ideas into functional digital experiences.
          </p>

          <p
            className={`mt-4 leading-8 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I believe that great development comes from curiosity, creativity,
            and continuous learning. I'm always exploring new ideas, improving
            my skills, and challenging myself to become a better developer.
          </p>
        </div>

        {/* Personal Information Cards */}
        <div className="mb-10 grid gap-5 md:grid-cols-3">
          {info.map((item, index) => (
            <div
              key={index}
              className={`group rounded-2xl border p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:bg-purple-500/[0.05] ${
                isDark
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-20" />

              <p className="mb-3 text-sm font-medium text-purple-400">
                {item.title}
              </p>

              <h4
                className={`mb-3 text-lg font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {item.value}
              </h4>

              <p
                className={`text-sm ${
                  isDark ? "text-gray-500" : "text-gray-600"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 px-6 py-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-purple-400">
            My Philosophy
          </p>

          <h3
            className={`text-xl font-bold leading-relaxed md:text-2xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            "Keep Learning, Keep Building, Keep Growing."
          </h3>
        </div>
      </div>
    </section>
  );
}
