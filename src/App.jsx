import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EducationAchievements from "./components/EducationAchievements";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const { scrollYProgress } = useScroll();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-cyan-400 origin-left z-50"
      />
      <Background theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <EducationAchievements theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Experience theme={theme} />
      <Certificates theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </>
  );
};

export default App;
