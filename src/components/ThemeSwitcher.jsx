import { Disc } from 'lucide-react';
import { motion } from 'framer-motion';  

const ThemeSwitcher = ({ currentTheme, onChangeTheme }) => {
  const themes = [
    'hybrid-theory', 
    'meteora', 
    'minutes-to-midnight', 
    'a-thousand-suns', 
    'living-things',
    'the-hunting-party',
    'one-more-light',
    'from-zero'
  ];
  
  const toggleTheme = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    onChangeTheme(themes[nextIndex]);
  };

  const getLabel = () => {
    if (currentTheme === 'hybrid-theory') return 'ALBUM: HYBRID THEORY';
    if (currentTheme === 'meteora') return 'ALBUM: METEORA';
    if (currentTheme === 'minutes-to-midnight') return 'ALBUM: MINUTES TO MIDNIGHT';
    if (currentTheme === 'a-thousand-suns') return 'ALBUM: A THOUSAND SUNS';
    if (currentTheme === 'living-things') return 'ALBUM: LIVING THINGS';
    if (currentTheme === 'the-hunting-party') return 'ALBUM: THE HUNTING PARTY';
    if (currentTheme === 'one-more-light') return 'ALBUM: ONE MORE LIGHT';
    if (currentTheme === 'from-zero') return 'ALBUM: FROM ZERO';
    return '';
  };

return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-center">
      <button 
        onClick={toggleTheme}
        className="relative group w-14 h-14 md:w-16 md:h-16 transition-transform hover:scale-110 active:scale-95"
      >
        {/* El Disco Sólido */}
        <motion.div
          key={currentTheme}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-full shadow-2xl relative flex items-center justify-center border-4" // border-4 para que el color del logo se note
            style={{ 
              backgroundColor: 'var(--cd-color)', 
              borderColor: 'var(--cd-border)', // <--- EL BORDE AHORA ES DINÁMICO
              transition: 'all 0.5s ease' 
            }}
        >
          {/* Brillo de material plástico (muy sutil para no romper el color sólido) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 rounded-full"></div>

          {/* El agujero del CD (el centro) */}
          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-industrial-900 border-2 border-black/20 flex items-center justify-center shadow-inner">
             {/* El anillo interior transparente */}
             <div className="w-1.5 h-1.5 rounded-full bg-white/5"></div>
          </div>
        </motion.div>

        {/* Glow atmosférico del color del disco */}
        <div 
          className="absolute -inset-2 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 -z-10"
          style={{ backgroundColor: 'var(--cd-color)' }}
        ></div>
      </button>
    </div>
  );
};

export default ThemeSwitcher;