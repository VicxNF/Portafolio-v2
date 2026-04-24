import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre-mi" className="min-h-screen flex items-center py-20 px-6 md:px-20 border-t border-industrial-700 bg-industrial-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
        
        <div className="relative group w-full max-w-[320px] md:max-w-[400px] mx-auto">
          <div className="absolute -inset-2 bg-vibe-red opacity-20 group-hover:opacity-40 transition-opacity blur-sm"></div>
          
          <img 
            src="/fotoperfil.png" 
            alt="Victor Navarro"
            className="relative border-2 border-industrial-700 w-full aspect-[4/5] object-cover object-top grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-700" 
          />
          
          <div className="absolute top-0 left-0 w-full h-full bg-vibe-red/10 mix-blend-overlay pointer-events-none"></div>
        </div>

        <div className="text-center md:text-left text-texto-base">
          <h2 className="text-4xl md:text-5xl font-glitch text-vibe-red mb-6 uppercase tracking-tighter">_SOBRE_MÍ</h2>
          <p className="font-mono text-base md:text-lg opacity-70 mb-4 uppercase tracking-tighter">
            &gt; Victor Manuel Navarro Fermin // Ingeniero en Informática
          </p>
          <p className="font-mono text-sm leading-relaxed mb-8 max-w-prose">
            Desarrollador Full-Stack de Santiago, Chile. Especializado en el ecosistema 
            <span className="text-vibe-toxic font-bold"> React, Next.js y TypeScript</span>. 
            Mi enfoque mezcla la gestión de proyectos ágiles con un código crudo y funcional.
            <br /><br />
            Fuera del código, me muevo por la distorsión: la musica, el anime y los videojuegos.
          </p>
          
          <div className="grid grid-cols-2 gap-4 font-mono text-[10px] uppercase">
            <div className="border border-industrial-700 p-2 text-center opacity-70">RESIDENCIA: SCL_CHILE</div>
            <div className="border border-industrial-700 p-2 text-center opacity-70">DISPONIBILIDAD: INMEDIATA</div>
            <div className="border border-industrial-700 p-2 text-center opacity-70">EXPERIENCIA: 2+ AÑOS</div>
            <div className="border border-industrial-700 p-2 text-center opacity-70">ESPECIALIDAD: FULL_STACK</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;