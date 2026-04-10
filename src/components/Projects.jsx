import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      className={`relative py-16 sm:py-20 md:py-24 ${isDark ? "bg-gradient-to-b from-slate-950 to-slate-900" : "bg-gradient-to-b from-gray-200 to-gray-300"}`}
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
          Projects
        </h2>

        <p className={`text-center mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Selected real-world projects focused on healthcare, education,
          and full-stack development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
