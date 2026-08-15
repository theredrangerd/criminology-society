import React from 'react';
import { type Variants, motion } from 'framer-motion';
import { HeroMasthead } from './components/HeroMasthead';
import { WhatIsCrimSoc } from './components/WhatIsCrimSoc';
import { LogisticsBadge } from './components/LogisticsBadge';
import { SuspectLineup } from './components/game/SuspectLineup';
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

      {/* Main Investigation Board Canvas with Dynamic Fluid Edge Gutters */}
      <main className="main-canvas">
        {/* Hero Masthead with Biometric Typography & Rubber Stamp */}
        <HeroMasthead />

        {/* Bento Box Investigation Board */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bento-board"
        >
          {/* Bento Tile 1: Case Brief (What is CrimSoc?) - 7 Cols */}
          <motion.div variants={itemVariants} className="bento-7 flex w-full">
            <WhatIsCrimSoc />
          </motion.div>

          {/* Bento Tile 2: Weekly Logistics - 5 Cols */}
          <motion.div variants={itemVariants} className="bento-5 flex w-full">
            <LogisticsBadge />
          </motion.div>

          {/* Bento Tile 3: Lead Contacts Roster - 7 Cols */}
          <motion.div variants={itemVariants} className="bento-7 flex w-full">
            <OfficerContacts />
          </motion.div>

          {/* Bento Tile 4: Forensic Disciplines / Pillars - 5 Cols */}
          <motion.div variants={itemVariants} className="bento-5 flex w-full">
            <ForensicHighlights />
          </motion.div>

          {/* Bento Tile 5: Suspect Lineup Mini-Game — 12 Cols */}
          <motion.div variants={itemVariants} className="bento-12 flex w-full">
            <SuspectLineup />
          </motion.div>
        </motion.div>

        {/* Footer Dossier Stamp */}
        <footer className="footer-dossier mx-auto flex flex-col items-center justify-center text-center space-y-2 pb-8">
          <div className="inline-block px-4 py-1 rounded-full bg-[#7e1923]/10 border border-[#7e1923]/30 mb-1">
            <p className="font-mono text-xs text-[#8692a1] uppercase tracking-widest text-center">
              CRIMINOLOGY SOCIETY • EXHIBITION FILE #CS-LIFECON-2026
            </p>
          </div>
          <p className="font-editorial text-base sm:text-lg text-[#eedec9] font-medium tracking-wide max-w-2xl mx-auto text-center leading-relaxed">
            Site by Noah Austin
          </p>
          <p className="font-mono text-xs sm:text-sm text-[#9e232f] text-center">
            <a 
              href="mailto:austi118767@gapps.uwcsea.edu.sg"
              className="hover:text-[#eedec9] hover:underline transition-colors inline-block"
            >
              austi118767@gapps.uwcsea.edu.sg
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
