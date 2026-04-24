import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Python / Django", level: 75 },
  { name: "Angular", level: 60 },
  { name: "PostgreSQL", level: 70 },
  { name: "TailwindCSS", level: 95 },
];

const Skills = () => {
  return (
    <section id="habilidades" className="min-h-screen flex items-center py-16 md:py-20 px-6 md:px-20 bg-industrial-900 border-t border-industrial-800">
  <div className="max-w-4xl mx-auto w-full">
    <h2 className="text-3xl md:text-4xl font-glitch text-vibe-red mb-12 text-center uppercase">Habilidades_Técnicas</h2>
        
        <div className="grid gap-6">
        {skills.map((skill, index) => (
            <div key={index} className="w-full">
            <div className="flex justify-between font-mono text-[10px] md:text-xs mb-2 uppercase text-texto-base">
                <span>{skill.name}</span>
                <span className="text-vibe-red font-bold">{skill.level}%_DOMINIO</span>
            </div>
              {/* Barra de nivel estilo Industrial */}
              <div className="h-3 md:h-4 bg-industrial-800 border border-industrial-700 relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    className="h-full bg-vibe-red shadow-[0_0_15px_var(--color-vibe-red)]"
                ></motion.div>
                {/* Rayas decorativas de rack */}
                <div className="absolute inset-0 flex justify-between px-1 pointer-events-none opacity-20">
                  {[...Array(15)].map((_, i) => (
                    <div key={i} className="w-[1px] h-full bg-industrial-900"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;