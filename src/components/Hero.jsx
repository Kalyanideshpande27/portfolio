import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = ({ theme }) => {
  // Typing animation state
  const [text, setText] = useState("");
  const roles = ["Full Stack Developer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Theme-aware styles
  const isDark = theme === "dark";

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = isDeleting ? 50 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setIsDeleting(true);
          setTimeout(() => { }, 2000);
        }
      } else {
        setText(text.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section className={`relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden px-4 lg:px-8 ${isDark ? "bg-black" : "bg-gray-100"}`}>

      {/* Background Glow Effects */}
      <div className="absolute top-20 -left-4 sm:left-4 w-64 h-64 sm:w-72 sm:h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-72 sm:h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto w-full grid gap-8 md:gap-12 md:grid-cols-2 items-center relative z-10 px-4 sm:px-6">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-12 md:mt-0 order-2 md:order-1"
        >
          <div className="relative">
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-2xl opacity-30 animate-pulse -z-10"></div>
            {/* Image Container */}
            <div className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 shadow-2xl ring-4 ring-transparent ${isDark ? "border-white/20" : "border-black/20"}`}>
              <img
                src="/kalyani.jpeg"
                alt="Kalyani"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 text-center md:text-left"
        >

          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Kalyani
            </span>
          </h1>

          {/* Typing Animation */}
          <h2 className={`mt-4 text-xl sm:text-2xl md:text-3xl font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
            <span className={isDark ? "text-gray-400" : "text-gray-600"}>I'm a </span>
            <span className="text-cyan-400">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          <p className={`mt-6 max-w-lg mx-auto md:mx-0 text-sm sm:text-base lg:text-lg leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Passionate about creating high-performance applications with
            modern technologies. I focus on clean architecture, performance,
            and beautiful user experiences.
          </p>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-3 sm:gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="https://github.com/Kalyanideshpande27"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-3 border rounded-xl transition-all duration-300 flex-shrink-0 ${isDark ? "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10" : "bg-black/5 border-black/10 text-gray-600 hover:text-gray-900 hover:border-cyan-400 hover:bg-cyan-500/10"}`}
            >
              <Github size={18} className="sm:size-20" />
            </a>
            <a
              href="https://www.linkedin.com/in/deshpande-kalyani/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-3 border rounded-xl transition-all duration-300 flex-shrink-0 ${isDark ? "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10" : "bg-black/5 border-black/10 text-gray-600 hover:text-gray-900 hover:border-cyan-400 hover:bg-cyan-500/10"}`}
            >
              <Linkedin size={18} className="sm:size-20" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kalyanideshpande2705@gmail.com"
              target="_blank"
              className={`p-2 sm:p-3 border rounded-xl transition-all duration-300 flex-shrink-0 ${isDark ? "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10" : "bg-black/5 border-black/10 text-gray-600 hover:text-gray-900 hover:border-cyan-400 hover:bg-cyan-500/10"}`}
            >
              <Mail size={18} className="sm:size-20" />
            </a>
            <span className="px-4 py-1.5 sm:px-3 sm:py-1 text-xs sm:text-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-full shadow-lg shadow-cyan-500/25 animate-pulse whitespace-nowrap">
              Open for Roles
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:items-start flex-wrap">
            <a
              href="#projects"
              className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 whitespace-nowrap w-full sm:w-auto text-sm sm:text-base"
            >
              Explore Builds
            </a>
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 sm:px-8 sm:py-3 border-2 border-cyan-400 rounded-xl text-cyan-400 font-semibold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 whitespace-nowrap w-full sm:w-auto text-sm sm:text-base"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className={`flex flex-col items-center gap-1 p-4 rounded-full backdrop-blur-sm ${isDark ? "text-gray-400 hover:text-cyan-400 bg-black/20" : "text-gray-500 hover:text-cyan-500 bg-white/70"} transition-colors`}
        >
          <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
          <ChevronDown size={16} />
        </motion.a>
      </motion.div>

    </section>
  );
};

export default Hero;
