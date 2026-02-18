import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "FARMSEASY Pvt Ltd",
    duration: "Jan 2025 – Present",
    location: "Remote",
    responsibilities: [
      "Developed responsive frontend interfaces using React.js and Tailwind CSS.",
      "Built RESTful backend APIs using Node.js and Express.",
      "Managed and optimized MongoDB databases.",
      "Implemented data-driven features integrating basic machine learning models.",
      "Collaborated with cross-functional teams to improve system performance."
    ]
  }
];

const Experience = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section id="experience" className={`relative py-15 pb-1 px-6 ${isDark ? "bg-black" : "bg-gray-100"}`}>
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Experience
          </span>
        </h2>

        {/* Timeline Container */}
        <div className={`relative border-l pl-10 ${isDark ? "border-white/10" : "border-black/10"}`}>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-14 relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[13px] top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/40"></span>

              {/* Card */}
              <div className={`backdrop-blur-xl border rounded-2xl p-8 hover:border-cyan-400/30 transition duration-300 ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"}`}>

                {/* Role */}
                <h3 className={`text-2xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                  {exp.role}
                </h3>

                {/* Company + Duration */}
                <p className="text-cyan-400 mt-1">
                  {exp.company}
                </p>

                <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {exp.duration} • {exp.location}
                </p>

                {/* Responsibilities */}
                <ul className={`mt-5 space-y-3 text-sm list-disc list-inside ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  {exp.responsibilities.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
