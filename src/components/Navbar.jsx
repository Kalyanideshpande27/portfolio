import { useState, useRef, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ theme, toggleTheme }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-screen max-w-full backdrop-blur-md border-b overflow-x-hidden ${
        theme === "dark"
          ? "bg-black/60 border-white/10"
          : "bg-white/70 border-black/10"
      }`}
    >
      {/* Container */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-1">
        
        {/* Top Row */}
        <div className="flex items-center justify-between h-16 w-full">
          
          {/* Logo */}
          <h1 className="text-xl font-bold text-cyan-400 whitespace-nowrap">
            Kalyani.dev
          </h1>

          {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-1 text-sm ml-auto">
            {["About", "Skills", "Experience", "Projects", "Certificates", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-3 py-2 rounded-md font-medium transition whitespace-nowrap ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-cyan-400 hover:bg-white/10"
                    : "text-gray-700 hover:text-cyan-500 hover:bg-gray-200"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 shrink-0">
            
            {/* Theme Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition shrink-0 ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  : "bg-white border-gray-300 hover:bg-gray-100"
              }`}
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-gray-700" />
              )}
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800 shrink-0"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              <svg
                className="w-6 h-6 text-black dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-300 overflow-hidden w-full ${
          isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`px-4 py-4 space-y-2 w-full ${
            theme === "dark"
              ? "bg-black/90 border-t border-white/10"
              : "bg-white border-t border-gray-200"
          }`}
        >
          {["About", "Skills", "Experience", "Projects", "Certificates", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileOpen(false)}
              className={`block w-full px-4 py-3 rounded-lg text-base font-medium transition ${
                theme === "dark"
                  ? "text-gray-200 hover:bg-white/10 hover:text-cyan-400"
                  : "text-gray-800 hover:bg-gray-100 hover:text-cyan-500"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
