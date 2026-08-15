import { type Variants, motion } from 'framer-motion';
import { HeroMasthead } from './components/HeroMasthead';
import { WhatIsCrimSoc } from './components/WhatIsCrimSoc';
import { LogisticsBadge } from './components/LogisticsBadge';
import { OfficerContacts } from './components/OfficerContacts';
import { GamePlaceholder } from './components/GamePlaceholder';
import { SoundToggle } from './components/SoundToggle';
import { AttractMode } from './components/AttractMode';

export const App: React.FC = () => {
  // Staggered physics container for initial evidence board drop-in
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
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

      {/* Main Investigation Board Canvas */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 relative z-10">
        {/* Hero Masthead with Biometric Typography & Rubber Stamp */}
        <HeroMasthead />

        {/* Staggered Evidence Dossiers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 md:space-y-16 mt-6"
        >
          {/* Card 1: What is CrimSoc? */}
          <motion.div variants={itemVariants}>
            <WhatIsCrimSoc />
          </motion.div>

          {/* Card 2: Logistics & Time */}
          <motion.div variants={itemVariants}>
            <LogisticsBadge />
          </motion.div>

          {/* Card 3: Designated Slot for the Suspect Lineup Mini-Game */}
          <motion.div variants={itemVariants}>
            <GamePlaceholder />
          </motion.div>

          {/* Card 4: Lead Contacts & Email Copy Roster */}
          <motion.div variants={itemVariants}>
            <OfficerContacts />
          </motion.div>
        </motion.div>

        {/* Footer Dossier Stamp */}
        <footer className="mt-20 pt-8 border-t border-[#7e1923]/30 text-center space-y-3">
          <p className="font-mono text-xs text-[#8692a1] uppercase tracking-widest">
            CRIMINOLOGY SOCIETY • EXHIBITION FILE #CS-LIFECON-2026
          </p>
          <p className="font-editorial italic text-sm text-[#eedec9]/70">
            "The mind of the perpetrator leaves a trace on every law we write."
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
