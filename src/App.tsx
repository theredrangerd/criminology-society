import React from 'react';
import { type Variants, motion } from 'framer-motion';
import { HeroMasthead } from './components/HeroMasthead';
import { WhatIsCrimSoc } from './components/WhatIsCrimSoc';
import { LogisticsBadge } from './components/LogisticsBadge';
import { GamePlaceholder } from './components/GamePlaceholder';
import { ForensicHighlights } from './components/ForensicHighlights';
import { OfficerContacts } from './components/OfficerContacts';
import { SoundToggle } from './components/SoundToggle';
import { AttractMode } from './components/AttractMode';

export const App: React.FC = () => {
  // Staggered physics container for initial evidence board drop-in
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 240,
        damping: 20,
      },
    },
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#090a0d] text-[#eedec9] selection:bg-[#7e1923] selection:text-[#fcfaf4]">
      {/* Audio Engine Mute/Unmute Toggle */}
      <SoundToggle />

      {/* LifeCon Idle Attract Mode */}
      <AttractMode />

      {/* Main Investigation Board Canvas with Generous Edge Gutters */}
      <main className="w-full max-w-[1540px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-6 md:py-12 relative z-10 flex flex-col items-center">
        {/* Hero Masthead with Biometric Typography & Rubber Stamp */}
        <HeroMasthead />

        {/* Bento Box Investigation Board */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bento-board w-full mt-6"
        >
          {/* Bento Tile 1: Case Brief (What is CrimSoc?) - 7 Cols */}
          <motion.div variants={itemVariants} className="bento-7 flex w-full">
            <WhatIsCrimSoc />
          </motion.div>

          {/* Bento Tile 2: Weekly Logistics - 5 Cols */}
          <motion.div variants={itemVariants} className="bento-5 flex w-full">
            <LogisticsBadge />
          </motion.div>

          {/* Bento Tile 3: Suspect Lineup Mini-Game Slot - 7 Cols */}
          <motion.div variants={itemVariants} className="bento-7 flex w-full">
            <GamePlaceholder />
          </motion.div>

          {/* Bento Tile 4: Forensic Disciplines / Pillars - 5 Cols */}
          <motion.div variants={itemVariants} className="bento-5 flex w-full">
            <ForensicHighlights />
          </motion.div>

          {/* Bento Tile 5: Lead Contacts Roster - 12 Cols */}
          <motion.div variants={itemVariants} className="bento-12 flex w-full">
            <OfficerContacts />
          </motion.div>
        </motion.div>

        {/* Footer Dossier Stamp */}
        <footer className="mt-28 mb-16 pt-10 border-t border-[#7e1923]/40 text-center space-y-3 w-full max-w-4xl relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-[#7e1923]/10 border border-[#7e1923]/30 mb-1">
            <p className="font-mono text-xs text-[#8692a1] uppercase tracking-widest">
              CRIMINOLOGY SOCIETY • EXHIBITION FILE #CS-LIFECON-2026
            </p>
          </div>
          <p className="font-editorial italic text-base sm:text-lg text-[#eedec9]/80 max-w-2xl mx-auto leading-relaxed">
            "The mind of the perpetrator leaves a trace on every law we write."
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
