import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectCard = ({ project, theme }) => {
  const isDark = theme === "dark";

  return (
    <div className={`
      relative rounded-2xl overflow-hidden
      backdrop-blur-xl
      border shadow-lg
      hover:shadow-cyan-500/30
      transition-all duration-300
      ${isDark ? "bg-white/5 border-white/10" : "bg-white border-black/10"}
    `}>
      
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition">
        <div className="absolute -inset-1 bg-cyan-500/20 blur-2xl"></div>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 sm:h-72 object-contain"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative p-4 sm:p-6 space-y-3 sm:space-y-4">
        <h3 className={`text-lg sm:text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
          {project.title}
        </h3>

        <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="
                text-xs px-2 sm:px-3 py-1 rounded-full
                bg-cyan-500/10 text-cyan-300
                border border-cyan-400/20
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-2 sm:pt-3 text-sm font-medium">
          <a
            href={project.github}
            target="_blank"
            className={`flex items-center gap-2 hover:text-cyan-400 ${isDark ? "text-gray-300" : "text-gray-700"}`}
          >
            <FaGithub /> Code
          </a>

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              className={`flex items-center gap-2 hover:text-cyan-400 ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              <HiOutlineExternalLink /> Live
            </a>
          ) : (
            <span className={`flex items-center gap-2 cursor-not-allowed ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              <HiOutlineExternalLink /> Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
