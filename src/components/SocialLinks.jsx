import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react'; // El de correo sí funciona bien

const SocialLinks = () => {
  const socials = [
    { 
      // Logo de GitHub (SVG manual)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ), 
      href: 'https://github.com/VicxNF', 
      label: 'GitHub' 
    },
    { 
      // Logo de LinkedIn (SVG manual)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ), 
      href: 'https://linkedin.com/in/victormanuelnavarro', 
      label: 'LinkedIn' 
    },
    { 
      icon: <Mail size={24} />, 
      href: 'mailto:victormanuelnf12@gmail.com', 
      label: 'Email' 
    },
  ];

  return (
    <div className="fixed bottom-10 left-10 z-[100] flex gap-6 items-center">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ 
            scale: 1.2, 
            rotate: index % 2 === 0 ? 5 : -5,
            filter: "drop-shadow(0 0 8px var(--accent-color))" 
          }}
          className="text-texto-base opacity-60 hover:opacity-100 transition-all duration-300"
          style={{ color: 'inherit' }}
        >
          {social.icon}
        </motion.a>
      ))}
      
      <div className="h-12 w-[1px] bg-current opacity-20 ml-2 hidden md:block"></div>
    </div>
  );
};

export default SocialLinks;