import React from 'react';
import { motion } from 'framer-motion';

const TracklistNav = ({ currentTheme }) => {

  const tracks = [
    { id: '01', label: 'INICIO', href: '#inicio' },
    { id: '02', label: 'SOBRE_MÍ', href: '#sobre-mi' },
    { id: '03', label: 'EXPERIENCIA', href: '#experiencia' },
    { id: '04', label: 'HABILIDADES', href: '#habilidades' },
    { id: '05', label: 'PROYECTOS', href: '#proyectos' },
  ];

  const themeConfigs = {
  'hybrid-theory': { 
    suffix: ':', 
    font: 'font-tracklist',
    weight: 'font-bold',
    casing: 'uppercase', 
    exponent: false 
  },
  'meteora': { 
    suffix: '.', 
    font: 'font-tracklist', 
    weight: 'font-black',
    casing: 'uppercase', 
    exponent: false 
  },
  'minutes-to-midnight': { 
    suffix: '', 
    font: 'font-serif',
    weight: 'font-medium',
    casing: 'capitalize', 
    exponent: true 
  },
  'a-thousand-suns': { 
    suffix: ':', 
    font: 'font-heading',
    weight: 'font-normal',
    casing: 'uppercase', 
    exponent: false,
    tracking: 'tracking-[0.3em]' 
  },
  'living-things': { 
    suffix: '', 
    font: 'font-living',
    weight: 'font-light',
    casing: 'uppercase', 
    exponent: false, 
    icons: true 
  },
  'the-hunting-party': { 
    suffix: '', 
    font: 'font-hunting',
    weight: 'font-normal',
    casing: 'uppercase', 
    exponent: false, 
    hideNumbers: true, 
    tracking: 'tracking-widest',
    box: false //
  },
  'one-more-light': { 
    suffix: '', 
    font: 'font-light',
    weight: 'font-light', 
    casing: 'uppercase', 
    exponent: true, 
    tracking: 'tracking-[0.3em]',
    hideNumbers: false 
  },
  'from-zero': { 
      suffix: '', 
      font: 'font-heading',
      weight: 'font-black',
      casing: 'uppercase', 
      exponent: false, 
      hideNumbers: true,   
      tracking: 'tracking-tighter'
    },
};

  const config = themeConfigs[currentTheme] || themeConfigs['hybrid-theory'];

return (
    <nav className="fixed top-10 left-10 z-[100] transition-all duration-500 text-left">
      <ul className="flex flex-col gap-1 md:gap-1.5">
        {tracks.map((track) => (
          <motion.li key={track.id} whileHover={{ x: 5 }}>
            <a 
              href={track.href}
              className={`group flex items-center gap-3 ${config.font} ${config.tracking || 'tracking-tighter'}`}
              style={{ color: 'inherit' }}
            >
              {config.icons && (
                <div className="flex flex-col gap-0.5 opacity-40">
                  <div className="w-1 h-1 rounded-full bg-current"></div>
                  <div className="w-1 h-1 border border-current rotate-45"></div>
                </div>
              )}
              {!config.hideNumbers && (
                <span className={`font-bold opacity-60 ${config.exponent ? 'text-[9px] -mt-2.5 mr-1' : 'text-xs'}`}>
                  {config.exponent ? parseInt(track.id) : track.id}{config.suffix}
                </span>
              )}
              <span className={`text-base md:text-xl font-black ${config.casing === 'capitalize' ? 'capitalize' : 'uppercase'} group-hover:text-vibe-red transition-colors`}>
                {config.casing === 'capitalize' ? track.label.toLowerCase().replace('_', ' ') : track.label.replace('_', ' ')}
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default TracklistNav;