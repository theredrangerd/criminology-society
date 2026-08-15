import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Fingerprint, Search, Sparkles, Play } from 'lucide-react';
import { audio } from '../../utils/audio';

interface GameIdleProps {
  onStart: () => void;
}

export const GameIdle: React.FC<GameIdleProps> = ({ onStart }) => {
  const handleStart = () => {
    audio.playStampSlam();
    onStart();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      className="space-y-5 w-full"
    >
      {/* Header */}
      <div className="border-b border-[#7e1923]/20 pb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-[#7e1923]" />
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#7e1923]">
            The Suspect Lineup
          </h3>
        </div>
        <span className="font-mono text-[10px] text-[#9e232f] uppercase font-bold border border-[#9e232f]/50 px-2 py-0.5 rounded bg-[#9e232f]/10">
          CASE FILE #02 • LIVE
        </span>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#7e1923]">
          Cognitive Bias &amp; Halo Effect Profiling
        </h4>
        <p className="font-body text-[#4f131a] text-sm sm:text-base leading-relaxed">
          Can your instincts pierce visual stereotypes? A forensic psychology challenge testing whether you 
          judge criminal profiles by aesthetic assumptions — or by hard forensic evidence.
        </p>
      </div>

      {/* Feature Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#eedec9]/50 border border-[#eedec9] font-mono text-[11px] text-[#733139]">
          <Search className="w-3.5 h-3.5 text-[#7e1923]" />
          <span>5 CCTV Suspects</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#eedec9]/50 border border-[#eedec9] font-mono text-[11px] text-[#733139]">
          <Fingerprint className="w-3.5 h-3.5 text-[#7e1923]" />
          <span>Forensic Profiling</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#eedec9]/50 border border-[#eedec9] font-mono text-[11px] text-[#733139]">
          <Sparkles className="w-3.5 h-3.5 text-[#7e1923]" />
          <span>Live Bias Meter</span>
        </div>
      </div>

      {/* CTA Button */}
      <motion.button
        id="game-start-btn"
        onClick={handleStart}
        whileHover={{ scale: 1.025, y: -2 }}
        whileTap={{ scale: 0.97 }}
        animate={{
          boxShadow: [
            '0 4px 0px #5a1017',
            '0 6px 16px rgba(126,25,35,0.45)',
            '0 4px 0px #5a1017',
          ],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-[#7e1923] text-[#fcfaf4] font-mono font-bold uppercase tracking-widest text-sm cursor-pointer"
      >
        <Play className="w-4 h-4 fill-current" />
        Start Investigation
      </motion.button>
    </motion.div>
  );
};
