import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = ({ theme }) => {
  const [text, setText] = useState("");
  const roles = ["Full Stack Developer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const isDark = theme === "dark";

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = isDeleting ? 50 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setIsDeleting(true);
          setTimeout(() => {}, 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden overflow-x-hidden px-4 sm:px-6 md:px-10 lg:px-16 ${
        isDark ? "bg-black" : "bg-gray-100"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-12 relative z-10">

        {/* IMAGE (comes first on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-20 md:mt-0"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-2xl opacity-30 animate-pulse"></div>

            <div
              className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border shadow-2xl ${
                isDark ? "border-white/10" : "border-black/10"
              }`}
            >
              <img
                src="/kalyani.jpeg"
                alt="Kalyani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Kalyani
            </span>
          </h1>

          {/* Typing */}
          <h2
            className={`mt-4 text-xl sm:text-2xl md:text-3xl font-semibold ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            <span className={isDark ? "text-gray-400" : "text-gray-600"}>
              I am a{" "}
            </span>
            <span className="text-cyan-400">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          <p
            className={`mt-6 max-w-lg mx-auto md:mx-0 leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Passionate about creating high-performance applications with modern
            technologies. I focus on clean architecture, performance, and
            beautiful user experiences.
          </p>

          {/* SOCIAL */}
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4 flex-wrap">
            <a
              href="https://github.com/Kalyanideshpande27"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 border rounded-xl transition-all duration-300 ${
                isDark
                  ? "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10"
                  : "bg-black/5 border-black/10 text-gray-600 hover:text-gray-900 hover:border-cyan-500 hover:bg-cyan-500/10"
              }`}
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/deshpande-kalyani/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 border rounded-xl transition-all duration-300 ${
                isDark
                  ? "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10"
                  : "bg-black/5 border-black/10 text-gray-600 hover:text-gray-900 hover:border-cyan-500 hover:bg-cyan-500/10"
              }`}
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kalyanideshpande2705@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 border rounded-xl transition-all duration-300 ${
                isDark
                  ? "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10"
                  : "bg-black/5 border-black/10 text-gray-600 hover:text-gray-900 hover:border-cyan-500 hover:bg-cyan-500/10"
              }`}
            >
              <Mail size={20} />
            </a>

            <span className="px-3 py-1 text-sm bg-cyan-500 text-black rounded-full shadow-md shadow-cyan-500/30 animate-pulse">
              Open for Roles
            </span>
          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-cyan-500 text-black rounded-xl font-semibold hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 transition duration-300"
            >
              Explore Build
            </a>

            <a
              href="resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cyan-500 rounded-xl text-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-300"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;