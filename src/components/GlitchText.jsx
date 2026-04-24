import { motion } from "framer-motion";

const GlitchText = ({ text, className }) => {
  return (
    <motion.div
      whileHover="hover"
      className={`relative inline-block cursor-pointer ${className}`}
    >
      {/* Texto Principal */}
      <span className="relative z-10">{text}</span>
      
      {/* Capa de Glitch Rojo */}
      <motion.span
        variants={{
          hover: { opacity: 1, x: -2, y: 1, transition: { repeat: Infinity, duration: 0.1 } }
        }}
        className="absolute top-0 left-0 text-vibe-red opacity-0 z-0"
      >
        {text}
      </motion.span>

      {/* Capa de Glitch Verde */}
      <motion.span
        variants={{
          hover: { opacity: 1, x: 2, y: -1, transition: { repeat: Infinity, duration: 0.1, delay: 0.05 } }
        }}
        className="absolute top-0 left-0 text-vibe-toxic opacity-0 z-0"
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default GlitchText;