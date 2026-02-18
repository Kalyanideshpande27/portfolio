const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${
      theme === "dark" 
        ? "bg-black/40 border-white/10" 
        : "bg-white/40 border-black/10"
    }`}>
      <div className="max-w-6xl mx-auto py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">Kalyani.dev</h1>
        <div className="flex items-center space-x-6 text-sm">
          <a href="#about" className={`hover:text-cyan-400 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>About</a>
          <a href="#skills" className={`hover:text-cyan-400 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Skills</a>
          <a href="#experience" className={`hover:text-cyan-400 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Experience</a>
          <a href="#projects" className={`hover:text-cyan-400 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Projects</a>
          <a href="#certificates" className={`hover:text-cyan-400 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Certificates</a>
          <a href="#contact" className={`hover:text-cyan-400 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Contact</a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-cyan-400 text-black hover:bg-cyan-300 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
