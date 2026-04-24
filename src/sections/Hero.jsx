import { motion } from "framer-motion";
import AnimatedGlitchText from "../components/AnimatedGlitchText";

const Hero = ({ currentTheme }) => {

    const quotes = {
    "hybrid-theory": "Contra mi voluntad, me encuentro junto a mi propio reflejo..",
    meteora: "“Quiero encontrar algo que he deseado desde siempre. Un lugar al que pertenezca”",
    "minutes-to-midnight": "Y sea cual sea el dolor que pueda venir, hoy esto termina.",
    "a-thousand-suns": "La parte mas dificil de terminar es volver a empezar",
    "living-things": "En estas promesas rotas, en lo profundo, cada palabra se pierde en el eco",
    "the-hunting-party": "Porque no sabes lo que tienes hasta que lo pierdes.",
    "one-more-light": "¿A quién le importa si una luz más se apaga? Pues a mí me importa..",
    "from-zero": "A veces las cosas malas toman el lugar donde van las cosas buenas.",
  };


  return (
    <section id="inicio" className="flex flex-col items-center justify-center min-h-screen relative px-6">

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center w-full"
      >
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-glitch text-texto-base leading-[0.9] break-words uppercase">
          <AnimatedGlitchText text="VICTOR" className="mr-4 text-texto-base" /> 
          <span className="text-vibe-red block md:inline">NAVARRO</span>
        </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center font-mono text-[10px] md:text-sm uppercase">
                <span className="bg-vibe-red px-3 py-1 text-industrial-900 font-bold w-fit">Desarrollador Fullstack & Web</span>
            </div>
        </motion.div>

        <div className="mt-16 md:mt-20 border-l-2 border-vibe-red pl-4 md:pl-6 py-4 max-w-xs md:max-w-lg self-start md:ml-20">
             <motion.p 
          key={currentTheme} // Esto hace que la frase se anime al cambiar
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0.8, x: 0 }}
          className="font-mono text-sm italic text-texto-base opacity-100"
        >
          "{quotes[currentTheme]}"
        </motion.p>
        </div>
        </section>
  );
};

export default Hero;