import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact({ theme = "dark" }) {
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const headingStyle = isDark ? "text-white" : "text-gray-900";
  const paragraphStyle = isDark ? "text-gray-400" : "text-gray-600";

  const inputStyle = isDark
    ? "border-white/10 bg-[#111122] text-white placeholder:text-gray-600"
    : "border-gray-200 bg-white text-gray-900 placeholder:text-gray-400";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:fahimym52@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className={`px-6 py-24 transition-colors duration-300 ${
        isDark ? "bg-[#0b0b19]" : "bg-[#f8f9ff]"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
            Get In Touch
          </p>

          <h2 className={`text-4xl font-bold md:text-5xl ${headingStyle}`}>
            Contact <span className="text-purple-400">Me</span>
          </h2>

          <p className={`mx-auto mt-5 max-w-2xl ${paragraphStyle}`}>
            Have a project in mind or want to work together? Feel free to send
            me a message.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className={`mb-6 text-2xl font-bold ${headingStyle}`}>
              Let's Talk
            </h3>

            <p className={`mb-10 leading-8 ${paragraphStyle}`}>
              I'm always interested in new opportunities, creative projects, and
              collaborations. Let's create something amazing together.
            </p>

            <div className="space-y-7">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className={`font-semibold ${headingStyle}`}>Email</h4>
                  <p className={paragraphStyle}>fahimym52@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className={`font-semibold ${headingStyle}`}>Location</h4>
                  <p className={paragraphStyle}>Herat, Afghanistan</p>
                </div>
              </div>
            </div>

            <h4 className={`mb-5 mt-12 font-semibold ${headingStyle}`}>
              Follow Me
            </h4>

            <div className="flex gap-4">
              <a
                href="https://github.com/fahimym52-source"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={`flex h-12 w-12 items-center justify-center rounded-xl border text-xl transition hover:border-purple-500 hover:bg-purple-500 hover:text-white ${
                  isDark
                    ? "border-white/10 text-gray-300"
                    : "border-gray-200 text-gray-700"
                }`}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammad-fahimy-870373438/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={`flex h-12 w-12 items-center justify-center rounded-xl border text-xl transition hover:border-blue-500 hover:bg-blue-500 hover:text-white ${
                  isDark
                    ? "border-white/10 text-gray-300"
                    : "border-gray-200 text-gray-700"
                }`}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className={`rounded-2xl border p-8 shadow-xl shadow-purple-900/10 ${
              isDark
                ? "border-white/10 bg-white/[0.03]"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="mb-6">
              <label
                htmlFor="contact-name"
                className={`mb-2 block text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className={`w-full rounded-xl border px-5 py-4 outline-none transition focus:border-purple-500 ${inputStyle}`}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="contact-email"
                className={`mb-2 block text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className={`w-full rounded-xl border px-5 py-4 outline-none transition focus:border-purple-500 ${inputStyle}`}
              />
            </div>

            <div className="mb-7">
              <label
                htmlFor="contact-message"
                className={`mb-2 block text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Write your message..."
                className={`w-full resize-none rounded-xl border px-5 py-4 outline-none transition focus:border-purple-500 ${inputStyle}`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-4 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.02] hover:shadow-purple-500/40"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
