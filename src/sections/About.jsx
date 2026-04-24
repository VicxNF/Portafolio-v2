import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre-mi" className="py-16 md:py-20 px-6 md:px-20 border-t border-industrial-700 bg-industrial-900">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Foto con efecto Nu Metal */}
        <div className="relative group w-full max-w-md mx-auto md:max-w-none">
          <div className="absolute -inset-2 bg-vibe-red opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <img 
            src="/fotoperfil.png" 
            alt="Victor Navarro"
            className="relative border-2 border-industrial-700 w-full 
                      aspect-square md:aspect-[4/5] /* Cuadrada en movil, algo más alta en PC */
                      object-cover /* Evita que se estire */
                      object-top /* Enfoca la parte superior de la foto */
                      grayscale contrast-125 brightness-90 
                      group-hover:grayscale-0 transition-all duration-700" 
          />
          <div className="absolute top-0 left-0 w-full h-full bg-vibe-red/10 mix-blend-overlay"></div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-glitch text-vibe-red mb-12 text-center uppercase">_PERFIL_USUARIO</h2>
          <p className="font-mono text-base md:text-lg opacity-70 mb-4 uppercase tracking-tighter">
            &gt; Victor Manuel Navarro Fermin // Ingeniero en Informática
          </p>
          <p className="font-mono text-sm leading-relaxed">
            Desarrollador Full-Stack de Santiago, Chile. Especializado en el ecosistema 
            <span className="text-vibe-toxic font-bold"> React, Next.js y TypeScript</span>. 
            Mi enfoque mezcla la gestión de proyectos ágiles con un código crudo y funcional.
            <br /><br />
            Fuera del código, me muevo por la distorsión: la musica, el anime y los videojuegos.
          </p>
          
            <div className="mt-8 grid grid-cols-2 gap-4 font-mono text-[10px] uppercase text-texto-base">
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