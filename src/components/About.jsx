import { motion } from "framer-motion";

const About = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`relative pt-10 px-6 overflow-hidden ${isDark ? "bg-gradient-to-b from-black via-gray-950 to-black" : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100"}`}
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* SECTION LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 uppercase tracking-widest text-sm mb-6"
        >
          About Me
        </motion.p>

        {/* MAIN STATEMENT */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-6xl font-bold leading-tight mb-10 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          I Build Systems That
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Think. Scale. Perform.
          </span>
        </motion.h2>

        {/* SHORT INTRO */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`max-w-3xl mx-auto mb-20 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          I'm a Computer Science Engineering student passionate about transforming 
          ideas into scalable digital products. I don't just focus on writing code — 
          I focus on building architecture that lasts, interfaces that feel intuitive, 
          and systems that perform under pressure.
        </motion.p>

        {/* 3 CORE PILLARS */}
        <div className="grid md:grid-cols-3 gap-8 text-left">

          {/* PILLAR 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`border rounded-2xl p-8 hover:-translate-y-2 transition duration-300 ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Clean Architecture
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              I believe great software begins with strong structure. 
              I focus on modular design, reusable components, and 
              scalable backend systems.
            </p>
          </motion.div>

          {/* PILLAR 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`border rounded-2xl p-8 hover:-translate-y-2 transition duration-300 ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Performance First
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              From optimized database queries to smooth UI interactions, 
              I prioritize speed, efficiency, and responsiveness 
              in every project I build.
            </p>
          </motion.div>

          {/* PILLAR 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`border rounded-2xl p-8 hover:-translate-y-2 transition duration-300 ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Continuous Growth
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Technology evolves fast — and so do I. I constantly explore 
              new tools, cloud ecosystems, and advanced development 
              practices to stay ahead.
            </p>
          </motion.div>

        </div>

        {/* SIGNATURE LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`mt-20 italic ${isDark ? "text-gray-500" : "text-gray-400"}`}
        >
          More than just development — I engineer digital impact.
        </motion.p>

      </div>
    </section>
  );
};

export default About;
