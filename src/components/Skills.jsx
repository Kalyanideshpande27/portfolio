import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Responsive Design" },
      { name: "API Integration" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs" },
      { name: "JWT Authentication" },
      { name: "Middleware" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL" },
      { name: "Database Design" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt /> },
      { name: "Jira" },
      { name: "Postman" },
      { name: "VS Code" },
    ],
  },
];

const Skills = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      className={`relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${isDark ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-slate-50 via-gray-100 to-slate-100'}`}
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full md:block hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full md:block hidden lg:block"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`backdrop-blur-xl border rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 transition duration-300 ${isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white/90 border-gray-200/50 text-gray-800'}`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full border transition duration-300 ${isDark ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black' : 'bg-cyan-100 border-cyan-300/50 text-cyan-700 hover:bg-cyan-500 hover:text-white'}`}
                  >
                    {skill.icon && (
                      <span className={`text-base ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                        {skill.icon}
                      </span>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

