import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Background = ({ theme }) => {
  const isDark = theme === "dark";
  
  const init = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={init}
      options={{
        background: { color: isDark ? "#020617" : "#f3f4f6" },
        particles: {
          number: { value: 60 },
          color: { value: "#22d3ee" },
          opacity: { value: 0.2 },
          size: { value: 2 },
          move: { enable: true, speed: 0.3 },
          links: {
            enable: true,
            color: "#22d3ee",
            opacity: 0.15
          }
        }
      }}
      className="fixed inset-0 -z-10"
    />
  );
};

export default Background;
