import { motion } from "framer-motion";
import { Award } from "lucide-react";

const EducationAchievements = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
  id="education"
  className={`relative 
    pt-16 sm:pt-20 md:pt-24 
    pb-6 sm:pb-8 md:pb-10 
    px-4 sm:px-6 
    ${
      isDark
        ? "bg-gradient-to-b from-black via-gray-950 to-black"
        : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100"
    }`}
>
      <div className="max-w-6xl mx-auto">

        {/* ================= EDUCATION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Education
            </span>
          </h2>

          <div className="relative max-w-4xl mx-auto">

            {/* Center Line */}
            <div className={`absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 ${isDark ? "bg-white/10" : "bg-black/10"
              }`} />

            <div className="space-y-10">
              {[
                {
                  title: "Bachelor of Technology – Computer Science Engineering",
                  score: "CGPA: 7.14",
                  year: "2023 – 2026",
                  desc: "Focused on full-stack development, scalable systems, and cloud technologies.",
                },
                {
                  title: "Higher Secondary Education (12th Grade)",
                  score: "82.67%",
                  year: "MHT-CET: 94.30 (PCB), 87.28 (PCM)",
                  desc: "Strong foundation in Mathematics, Physics, and Computer Science.",
                },
                {
                  title: "Secondary Education (10th Grade)",
                  score: "91.20%",
                  year: "Completed",
                  desc: "Developed strong logical thinking and academic fundamentals.",
                }
              ].map((item, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40, scale: 0.98 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex items-center justify-between relative"
                  >
                    {/* LEFT */}
                    <div className={`w-[46%] ${isLeft ? "block" : "hidden md:block"}`}>
                      {isLeft && (
                        <div className={`p-5 rounded-lg border transition duration-200 hover:shadow-sm ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/10"
                          }`}>
                          <p className="text-xs text-gray-400 mb-1">{item.year}</p>

                          <h3 className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-900"
                            }`}>
                            {item.title}
                          </h3>

                          <p className={`text-sm mt-2 ${isDark ? "text-gray-300" : "text-gray-700"
                            }`}>
                            {item.desc}
                          </p>

                          <span className="inline-block mt-3 text-xs px-2.5 py-0.5 border rounded-full text-cyan-400 border-cyan-400">
                            {item.score}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* CENTER DOT */}
                    <div className="w-8 flex justify-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-sm" />
                    </div>

                    {/* RIGHT */}
                    <div className={`w-[46%] ${!isLeft ? "block" : "hidden md:block"}`}>
                      {!isLeft && (
                        <div className={`p-5 rounded-lg border transition duration-200 hover:shadow-sm ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/10"
                          }`}>
                          <p className="text-xs text-gray-400 mb-1">{item.year}</p>

                          <h3 className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-900"
                            }`}>
                            {item.title}
                          </h3>

                          <p className={`text-sm mt-2 ${isDark ? "text-gray-300" : "text-gray-700"
                            }`}>
                            {item.desc}
                          </p>

                          <span className="inline-block mt-3 text-xs px-2.5 py-0.5 border rounded-full text-cyan-400 border-cyan-400">
                            {item.score}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Achievements
            </span>
          </h2>

          <div className="max-w-3xl mx-auto ">
            <div className={`backdrop-blur-xl border rounded-2xl p-6 sm:p-8 hover:scale-105 transition duration-300 shadow-lg ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/10"}`}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <div className="p-3 bg-yellow-500/10 border border-yellow-400/30 rounded-full">
                  <Award className="text-yellow-400" size={22} />
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                  Reliance Foundation Undergraduate Scholar
                </h3>
              </div>

              <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                2023
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
