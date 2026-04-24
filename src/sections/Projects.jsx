import { motion } from "framer-motion";

const projects = [
  {
    title: "LINKIN PARK ANALYZER",
    type: "APLICACIÓN_IA",
    description: "Análisis de sentimientos y letras con IA. Proyecto fullstack con estética industrial.",
    tech: ["React", "Flask", "AI"],
    link: "https://victornavarro.vercel.app/",
    github: "#",
    image: "/projects/linkin-park.jpg"
  },
  {
    title: "RECIPE FINDER",
    type: "CONSUMO DE API",
    description: "Buscador de recetas con filtros avanzados y persistencia de datos.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    github: "#",
    image: "/projects/recipe.jpg"
  },
  {
    title: "BODA ANDREA & YORGUIS",
    type: "PLATAFORMA WEB",
    description: "Web conmemorativa con gestión de invitados y galería. Diseño elegante y funcional.",
    tech: ["React", "Vite", "Cloud"],
    link: "#",
    github: "#",
    image: "/projects/boda.jpg"
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="min-h-screen py-16 md:py-20 px-6 md:px-20 bg-industrial-900">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 border-b border-zinc-800 pb-4 text-center md:text-left gap-4">
          <h2 className="text-3xl md:text-4xl font-glitch text-vibe-red mb-12 text-center uppercase">PROYECTOS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-industrial-800 border border-industrial-700 group relative overflow-hidden flex flex-col shadow-xl"
            >
            <div className="p-2 border-b border-industrial-700 flex justify-between items-center bg-industrial-900/50">
                <span className="font-mono text-[9px] text-vibe-toxic uppercase">{proj.type}</span>
                <div className="w-2 h-2 rounded-full bg-vibe-red animate-pulse"></div>
            </div>

              <div className="relative h-48 overflow-hidden bg-zinc-800">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-glitch text-lg md:text-xl text-vibe-red mb-2 uppercase">
                  {proj.title}
                </h3>
                <p className="font-mono text-[11px] text-texto-base opacity-70 mb-4 leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {proj.tech.map((t, i) => (
                        <span key={i} className="text-[9px] font-mono border border-industrial-700 px-2 py-0.5 text-texto-base opacity-50">
                        #{t}
                        </span>
                    ))}
                    </div>

                <div className="flex justify-between items-center border-t border-industrial-700 pt-4">
                <a href={proj.github} className="text-texto-base hover:text-vibe-red transition-colors font-mono text-[10px] uppercase">
                    [ GITHUB ]
                </a>
                <a href={proj.link} target="_blank" className="font-mono text-[10px] bg-vibe-red text-industrial-900 px-3 py-1 font-bold hover:scale-105 transition-transform uppercase">
                    LANZAR PROYECTO
                </a>
                </div>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;