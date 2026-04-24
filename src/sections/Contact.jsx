import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contacto" className="py-16 md:py-20 px-6 md:px-20 bg-industrial-900 border-t border-industrial-700 text-texto-base">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-glitch text-vibe-toxic mb-2 uppercase">Contacto_Directo</h2>
        <p className="font-mono text-[10px] md:text-xs text-gray-500 mb-10 tracking-[0.2em] md:tracking-[0.3em]">// ENVIANDO_SEÑAL_A_VCTR_OS</p>

        <form className="grid gap-6 text-left w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-vibe-red uppercase">_Nombre_Completo</label>
              <input 
                type="text" 
                placeholder="IDENTIFÍCATE..."
                className="bg-industrial-800 border border-industrial-700 p-3 font-mono text-sm text-texto-base focus:border-vibe-red outline-none transition-colors placeholder:opacity-30"
                />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] text-vibe-red uppercase">_Correo_Electrónico</label>
              <input 
                type="email" 
                placeholder="CONTACT_PROTOCOL@WEB.COM"
                className="bg-industrial-800 border border-industrial-700 p-3 font-mono text-sm text-texto-base focus:border-vibe-red outline-none transition-colors placeholder:opacity-30"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] text-vibe-red uppercase">_Contenido_Del_Mensaje</label>
            <textarea 
              rows="5"
              placeholder="ENTER MESSAGE..."
              className="bg-industrial-800 border border-industrial-700 p-3 font-mono text-sm text-texto-base focus:border-vibe-red outline-none transition-colors placeholder:opacity-30"
            ></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 15px rgba(185, 28, 28, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-vibe-red text-industrial-900 font-bold font-mono py-4 uppercase tracking-widest hover:opacity-80 transition-all w-full"
          >
            Enviar_Señal_Ahora
          </motion.button>
        </form>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 font-mono text-[10px] uppercase">
          <div className="flex flex-col italic border-b md:border-b-0 md:border-r border-industrial-700 pb-4 md:pb-0 md:pr-8">
            <span className="text-vibe-red">Direct_Line:</span>
            <span className="text-texto-base break-all">victormanuelnf12@gmail.com</span>
          </div>
          <div className="flex flex-col italic">
            <span className="text-vibe-red">Estado:</span>
            <span className="text-vibe-toxic animate-pulse">Señal_Activa</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;