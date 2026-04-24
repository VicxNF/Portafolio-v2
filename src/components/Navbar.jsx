import GlitchText from "./GlitchText";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-10 py-4 border-b border-industrial-700 bg-industrial-900/90 backdrop-blur-md">
      <div className="font-glitch text-xl md:text-2xl text-vibe-red shrink-0">
        VCTR_OS
      </div>
      
      <div className="flex gap-3 md:gap-8 font-mono text-[10px] md:text-sm tracking-tighter">
        <a href="#proyectos" className="hover:text-vibe-red transition-colors">[ PROYECTOS ]</a>
        <a href="#habilidades" className="hover:text-vibe-red transition-colors">[ HABILIDADES ]</a>
        <a href="#sobre-mi" className="hover:text-vibe-red transition-colors">[ SOBRE_MÍ ]</a>
        <a href="#contacto" className="text-vibe-toxic">[ CONTACTO ]</a>
    </div>
    </nav>
  );
};

export default Navbar;