import { motion } from "framer-motion";
import { Award } from "lucide-react";

const EducationAchievements = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="education"
      className={`relative py-25 px-6 ${isDark ? "bg-gradient-to-b from-black via-gray-950 to-black" : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100"}`}
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= EDUCATION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Education
            </span>
          </h2>

          <div className={`relative border-l pl-8 space-y-12 ${isDark ? "border-white/10" : "border-black/10"}`}>

            {/* B.Tech */}
            <div className="relative">
              <div className={`absolute -left-[38px] top-1 w-6 h-6 rounded-full shadow-lg ${isDark ? "bg-cyan-400 shadow-cyan-400/30" : "bg-cyan-500 shadow-cyan-500/30"}`}></div>

              <div className={`backdrop-blur-xl border rounded-xl p-6 hover:border-cyan-400/30 transition ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/10"}`}>
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                    Bachelor of Technology – Computer Science Engineering
                  </h3>

                  {/* Percentage Badge */}
                  <span className="px-4 py-1 text-sm bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 rounded-full">
                    CGPA: 7.2
                  </span>
                </div>

                <p className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  2023 – 2026 (Pursuing)
                </p>

                <p className={`text-sm mt-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Focused on full-stack development, scalable system design,
                  cloud technologies, and performance optimization.
                </p>
              </div>
            </div>

            {/* 12th */}
            <div className="relative">
              <div className="absolute -left-[38px] top-1 w-6 h-6 bg-blue-500 rounded-full shadow-lg shadow-blue-500/30"></div>

              <div className={`backdrop-blur-xl border rounded-xl p-6 hover:border-blue-400/30 transition ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/10"}`}>
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                    Higher Secondary Education (12th Grade)
                  </h3>

                  <span className="px-4 py-1 text-sm bg-blue-500/10 border border-blue-400/30 text-blue-400 rounded-full">
                    82.67%
                  </span>
                </div>

                <p className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Completed | MHT-CET:  87.28(PCM), 94.30 (PCB)
                </p>

                <p className={`text-sm mt-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Science stream with strong foundation in Mathematics,
                  Physics, and Computer fundamentals.
                </p>
              </div>
            </div>

            {/* 10th */}
            <div className="relative">
              <div className="absolute -left-[38px] top-1 w-6 h-6 bg-purple-500 rounded-full shadow-lg shadow-purple-500/30"></div>

              <div className={`backdrop-blur-xl border rounded-xl p-6 hover:border-purple-400/30 transition ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/10"}`}>
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                    Secondary Education (10th Grade)
                  </h3>

                  <span className="px-4 py-1 text-sm bg-purple-500/10 border border-purple-400/30 text-purple-400 rounded-full">
                    91.20%
                  </span>
                </div>

                <p className={`text-sm mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Completed
                </p>

                <p className={`text-sm mt-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Built academic foundation and developed early interest
                  in logical thinking and technology.
                </p>
              </div>
            </div>

          </div>
        </motion.div>


        {/* ================= ACHIEVEMENTS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Achievements
            </span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className={`backdrop-blur-xl border rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-lg ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/10"}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-yellow-500/10 border border-yellow-400/30 rounded-full">
                  <Award className="text-yellow-400" size={22} />
                </div>
                <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                  Reliance Foundation Undergraduate Scholar
                </h3>
              </div>

              <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                2024
              </p>

              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Selected among top-performing undergraduate students across India
                based on academic excellence, merit, and leadership potential.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationAchievements;
