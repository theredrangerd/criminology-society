import React from 'react';
import { motion } from 'framer-motion';

interface BiometricGlyphProps {
  className?: string;
  size?: number;
}

export const BiometricGlyph: React.FC<BiometricGlyphProps> = ({ className = '', size = 36 }) => {
  return (
    <span 
      className={`inline-flex items-center justify-center relative align-middle overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Biometric Fingerprint SVG Pattern */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-crimson stroke-current fill-none" 
        style={{ strokeWidth: 4.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}
      >
        {/* Concentric / Whorl Fingerprint Ridges */}
        <circle cx="50" cy="50" r="44" strokeDasharray="6 4" opacity="0.4" />
        <path d="M 50 18 C 32 18, 20 32, 20 50 C 20 68, 32 82, 50 82" />
        <path d="M 50 26 C 36 26, 28 36, 28 50 C 28 64, 38 74, 50 74" strokeDasharray="18 4 6 4" />
        <path d="M 50 34 C 40 34, 36 42, 36 50 C 36 58, 44 66, 50 66" />
        <path d="M 50 42 C 45 42, 42 46, 42 50 C 42 54, 46 58, 50 58" />
        <path d="M 50 18 C 68 18, 80 32, 80 50 C 80 62, 74 72, 64 78" />
        <path d="M 50 26 C 64 26, 72 36, 72 50 C 72 60, 66 68, 58 72" strokeDasharray="12 4 10 4" />
        <path d="M 50 34 C 60 34, 64 42, 64 50 C 64 56, 58 62, 50 62" />
      </svg>

      {/* Sweeping Laser Scan Line */}
      <motion.div 
        className="absolute inset-x-0 h-[2px] bg-red-500 shadow-[0_0_8px_#ff4d5e] pointer-events-none"
        animate={{
          top: ['-10%', '110%'],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 0.8
        }}
      />
    </span>
  );
};
