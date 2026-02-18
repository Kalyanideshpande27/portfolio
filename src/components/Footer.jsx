import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <footer className={`relative transition-colors duration-500 ${isDark ? "bg-black text-gray-400" : "bg-gray-100 text-gray-700"}`}>

      {/* Animated top gradient line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
        className="h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
      />

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400">
            Kalyani Deshpande
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Crafting scalable web applications with clean architecture,
            thoughtful UI, and meaningful impact.
          </p>

          <div className="mt-6">
            <span className="inline-block px-4 py-1 text-xs rounded-full 
              bg-green-500/10 text-green-500 border border-green-500/30">
              🟢 Open to Opportunities
            </span>
          </div>
        </div>

        {/* Center Navigation */}
        <div className="flex flex-col space-y-3 text-sm">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* Right Social Icons */}
        <div className="flex md:justify-end gap-6 text-2xl">
          <a
            href="https://github.com/Kalyanideshpande27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/deshpande-kalyani/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kalyanideshpande2705@gmail.com"
            className="hover:text-cyan-400 transition hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className={`border-t py-6 text-center text-xs ${isDark ? "border-white/10" : "border-gray-300"}`}>
        © {new Date().getFullYear()} Kalyani Deshpande. Designed & Built with React.
      </div>
    </footer>
  );
};

export default Footer;
