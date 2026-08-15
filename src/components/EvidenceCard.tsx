import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { audio } from '../utils/audio';

interface EvidenceCardProps {
  children: React.ReactNode;
  className?: string;
  tapeAngle?: number;
  tapeText?: string;
  badgeLabel?: string;
  hasTape?: boolean;
}

export const EvidenceCard: React.FC<EvidenceCardProps> = ({
  children,
  className = '',
  tapeAngle = -1.2,
  tapeText,
  badgeLabel,
  hasTape = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Raw mouse coordinates normalized (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D physics
  const springConfig = { damping: 20, stiffness: 260, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  
  // Specular sheen gradient opacity and position
  const sheenX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const sheenY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    audio.playPaperShuffle();
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      whileHover={{ scale: 1.015, y: -4 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className={`evidence-card-3d w-full h-full relative p-6 md:p-8 flex flex-col justify-between cursor-pointer select-none ${className}`}
    >
      {/* Kraft Masking Tape Pin on Top */}
      {hasTape && (
        <div 
          className="kraft-tape flex items-center justify-center font-mono text-[10px] tracking-widest text-[#5a442e] uppercase font-bold"
          style={{ transform: `translateX(-50%) rotate(${tapeAngle}deg)` }}
        >
          {tapeText || 'EVIDENCE // CRIMSOC'}
        </div>
      )}

      {/* Case Badge if provided */}
      {badgeLabel && (
        <div className="absolute top-4 right-4 font-mono text-[10px] tracking-wider uppercase text-[#7e1923] border border-[#7e1923]/30 px-2 py-0.5 rounded bg-[#eedec9]/40">
          {badgeLabel}
        </div>
      )}

      {/* Dynamic Specular Sheen Overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 hover:opacity-100 transition-opacity duration-300 overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.4) 0%, transparent 60%)`,
        }}
      />

      {/* Inner Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
