import React, { useState, useEffect  } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TracklistNav from "./components/TracklistNav";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";


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
      <main className="pt-20"> 
        <Hero currentTheme={currentTheme} /> 
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>

      <SocialLinks /> 
      <ThemeSwitcher currentTheme={currentTheme} onChangeTheme={changeTheme} />
    </div>
  );
}

export default App;