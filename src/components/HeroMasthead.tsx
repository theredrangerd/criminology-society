import React from 'react';
import { motion } from 'framer-motion';
import { BiometricGlyph } from './BiometricGlyph';
import { audio } from '../utils/audio';

export const HeroMasthead: React.FC = () => {
  return (
    <header className="text-center pt-6 pb-10 px-2 sm:px-4 relative z-10 w-full max-w-6xl mx-auto">
      {/* Top Meta Line with Handcuffs Icon & Rubber Stamp */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
        {/* Linked Handcuffs Vector Graphic */}
        <div className="flex items-center gap-1.5 opacity-80 text-[#8692a1]">
          <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.8">
            <path d="M6 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
            <path d="M18 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
            <path d="M10 14h4" />
            <path d="M8 10V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          <span className="font-mono text-xs tracking-widest uppercase text-[#eedec9]/80">CASE REF: #CS-2026</span>
        </div>

        {/* Slamming Rubber Stamp */}
        <motion.div
          initial={{ scale: 2.2, opacity: 0, rotate: -15 }}
          animate={{ scale: 1, opacity: 0.95, rotate: -4 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 18,
            delay: 0.2,
          }}
          onAnimationComplete={() => audio.playStampSlam()}
          className="rubber-stamp text-xs md:text-sm border-[#9e232f] text-[#9e232f] font-mono font-bold tracking-widest"
        >
          OFFICIAL LIFECON 2026 BOOTH
        </motion.div>
      </div>

      {/* Primary Masthead Title with Embedded Fingerprint Glyphs */}
      <div className="flex flex-col items-center justify-center text-center w-full">
        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-[#9e232f] uppercase select-none leading-none drop-shadow-[0_4px_16px_rgba(158,35,47,0.35)] break-words text-center w-full">
          {/* CRIMINOLOGY */}
          <span className="inline-flex items-center justify-center">
            CRIMIN
            <BiometricGlyph />
            L
            <BiometricGlyph />
            GY
          </span>
          <br />
          {/* SOCIETY */}
          <span className="inline-flex items-center justify-center mt-1.5 text-[#eedec9]">
            S
            <BiometricGlyph />
            CIETY
          </span>
        </h1>

        {/* Subtitle / Quote Centered Directly Beneath */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-editorial italic text-base sm:text-lg md:text-xl lg:text-2xl text-[#eedec9]/90 mt-5 max-w-3xl w-full text-center px-4 leading-relaxed"
        >
          "Uncovering human behavior, forensic science, and the architecture of justice."
        </motion.p>
      </div>
    </header>
  );
};
