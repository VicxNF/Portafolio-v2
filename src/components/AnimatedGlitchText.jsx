import React from 'react';

const AnimatedGlitchText = ({ text, className }) => {
  return (
    <div className={`relative inline-block ${className} group`}>
      <span className="relative z-10">{text}</span>

      <span className="absolute top-0 left-0 -z-10 text-vibe-red opacity-0 group-hover:opacity-100 glitch-layer-1">
        {text}
      </span>

      <span className="absolute top-0 left-0 -z-10 text-vibe-toxic opacity-0 group-hover:opacity-100 glitch-layer-2">
        {text}
      </span>

      <span className="absolute top-0 left-0 -z-20 text-white opacity-0 group-hover:opacity-20 glitch-layer-3">
        {text}
      </span>
    </div>
  );
};

export default AnimatedGlitchText;