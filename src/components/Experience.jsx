import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    company: "IR Smart Buildings",
    role: "Analista Administrativo",
    date: "Febrero 2026 - Abril 2026",
    desc: [
      "Gestión y control de ingresos asociados a gastos comunes.",
      "Emisión y gestión de cotizaciones solicitadas por la administración.",
      "Apoyo en la elaboración de informes financieros básicos."
    ]
  },
  {
    company: "ACL Tech",
    role: "Desarrollador Full Stack (Práctica)",
    date: "Diciembre 2024 - Febrero 2025",
    desc: [
      "Desarrollo de un sistema de gestión de vacantes laborales.",
      "Creación de Endpoints para consumo de datos del sistema.",
      "Documentación técnica de los Endpoints realizados."
    ]
  },
  {
    company: "DuocUC (Proyecto de Título)",
    role: "Ingeniero de Proyecto",
    date: "Agosto 2024 - Diciembre 2025",
    desc: [
      "Sistema de gestión de juntas vecinales para 3 comunas.",
      "Generación de contenido dinámico según la ubicación del usuario.",
      "Documentación completa del ciclo de vida de la aplicación."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="min-h-screen flex items-center py-20 px-6 md:px-20 border-t border-industrial-700 bg-industrial-900">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-5xl font-glitch text-vibe-red mb-12 uppercase tracking-tighter text-center md:text-left">
          EXPERIENCIA
        </h2>

        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-industrial-700 group hover:border-vibe-red transition-colors"
            >
              {/* Punto decorativo en la línea de tiempo */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-industrial-900 border-2 border-industrial-700 group-hover:border-vibe-red rounded-full transition-colors"></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
                <h3 className="text-xl md:text-2xl font-black text-texto-base uppercase tracking-tight">
                  {job.role}
                </h3>
                <span className="font-mono text-[10px] md:text-xs text-vibe-toxic bg-industrial-800 px-2 py-1 border border-industrial-700 uppercase">
                  {job.date}
                </span>
              </div>

              <h4 className="font-mono text-sm text-vibe-red mb-4 font-bold uppercase tracking-widest">
                // {job.company}
              </h4>

              <ul className="space-y-2">
                {job.desc.map((item, i) => (
                  <li key={i} className="font-mono text-xs md:text-sm text-texto-base opacity-70 flex gap-2">
                    <span className="text-vibe-red">&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;