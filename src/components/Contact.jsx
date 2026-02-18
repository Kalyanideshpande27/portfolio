import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="contact"
      className={`relative py-20 transition-colors duration-500 ${isDark ? "bg-black text-white" : "bg-gray-100 text-black"}`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Let's Build Something Meaningful
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`mt-6 text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          I'm always open to discussing new opportunities, collaborations,
          or innovative ideas. Let's connect and create something impactful.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kalyanideshpande2705@gmail.com"
            target="_blank"
            className="px-8 py-3 rounded-full 
                       bg-cyan-500 text-black font-semibold
                       hover:bg-cyan-400 transition-all duration-300"
          >
            Email Me
          </a>

          <a
            href="resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full 
                       border border-cyan-500 text-cyan-500
                       hover:bg-cyan-500 hover:text-black
                       transition-all duration-300"
          >
            View Resume
          </a>
        </motion.div>
      

      </div>
    </section>
  );
};

export default Contact;
