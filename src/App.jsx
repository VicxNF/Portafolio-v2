import React, { useState, useEffect  } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TracklistNav from "./components/TracklistNav";
import SocialLinks from "./components/SocialLinks";


function App() {

  const [currentTheme, setCurrentTheme] = useState("hybrid-theory");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  const changeTheme = (newTheme) => {
    setCurrentTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="bg-industrial-900 min-h-screen transition-all duration-500 selection:bg-vibe-red selection:text-white">
      <TracklistNav currentTheme={currentTheme} />
      <main className="pt-20"> {/* Espacio para el navbar fijo */}
        <Hero currentTheme={currentTheme} /> 
        <About />
        <Skills />
        <Projects />
      </main>

      <SocialLinks /> 
      <ThemeSwitcher currentTheme={currentTheme} onChangeTheme={changeTheme} />
      
      <footer className="py-20 text-center bg-industrial-900 border-t border-industrial-800 transition-colors duration-500">
        <div className="font-glitch text-2xl text-vibe-red mb-4 italic uppercase">
          VCTR_OS
        </div>
        <p className="font-mono text-[9px] text-texto-base opacity-60 uppercase tracking-[0.5em]">
          End of Transmission // {currentTheme.replace(/-/g, " ")} // 2024
        </p>
      </footer>
    </div>
  );
}

export default App;