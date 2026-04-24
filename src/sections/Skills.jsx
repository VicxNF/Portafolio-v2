import React from 'react';
import { motion } from 'framer-motion';
// Iconos representativos (puedes cambiarlos por tus propios SVGs en el futuro)
import { 
  FileCode, Cpu, Database, Layout, 
  Terminal, Globe, Share2, Layers, 
  Type, Wind, Braces, Smartphone 
} from 'lucide-react';

const skillData = [
  { name: "HTML5", level: 4, icon: <Type size={20} /> },
  { name: "CSS3", level: 4, icon: <Layout size={20} /> },
  { name: "Python", level: 4, icon: <Cpu size={20} /> },
  { name: "Django", level: 4, icon: <Braces size={20} /> },
  { name: "TailwindCSS", level: 3, icon: <Wind size={20} /> },
  { name: "JavaScript", level: 3, icon: <Terminal size={20} /> },
  { name: "TypeScript", level: 3, icon: <FileCode size={20} /> },
  { name: "React", level: 3, icon: <Layers size={20} /> },
  { name: "Next.js", level: 3, icon: <Smartphone size={20} /> },
  { name: "Git", level: 3, icon: <Share2 size={20} /> },
  { name: "Angular", level: 3, icon: <Globe size={20} /> },
  { name: "PostgreSQL", level: 2, icon: <Database size={20} /> },
];

const Skills = () => {
  return (
    <section id="habilidades" className="min-h-screen flex items-center py-20 px-6 md:px-20 border-t border-industrial-700 bg-industrial-900">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-glitch text-vibe-red mb-16 uppercase tracking-tighter text-center md:text-left">
          HABILIDADES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {skillData.map((skill, index) => (
            <div key={index} className="flex items-center gap-6 group">
              
              <div className="flex-shrink-0 w-12 h-12 border-2 border-industrial-700 flex items-center justify-center text-texto-base group-hover:border-vibe-red group-hover:text-vibe-red transition-all duration-500 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] bg-industrial-800/50">
                {skill.icon}
              </div>

              <div className="flex-grow">
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-texto-base">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[9px] text-vibe-red opacity-60">
                    DOMINIO: +{skill.level}dB
                  </span>
                </div>

                <div className="flex gap-1.5 h-4 items-end">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0.2, opacity: 0.1 }}
                      whileInView={{ 
                        scaleY: 1, 
                        opacity: i < skill.level ? 1 : 0.1,
                        backgroundColor: i < skill.level ? 'var(--accent-color)' : '#444'
                      }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className={`flex-grow h-full border border-black/20 ${
                        i < skill.level ? 'shadow-[0_0_8px_var(--color-vibe-red)]' : ''
                      }`}
                    ></motion.div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-between font-mono text-[8px] opacity-20 uppercase tracking-[0.4em] border-t border-industrial-700/30 pt-4">
          <span>Processing_12_Channels</span>
          <span>Audio_Engine: LP_V4</span>
          <span>Latency: 0ms</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;