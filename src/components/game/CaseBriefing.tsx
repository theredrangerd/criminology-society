import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronRight, SkipForward } from 'lucide-react';
import { audio } from '../../utils/audio';

const FULL_TEXT =
  'At 12:15 PM, an encrypted master keycard was reported stolen from the High-Security Archive Vault. ' +
  'CCTV corridor logs recorded five individuals in the area during the critical window. ' +
  'One of them cloned the access card before slipping back into the crowd undetected. ' +
  'Your assignment: study each profile and identify the perpetrator.';

const CHAR_DELAY_MS = 10;
// Grace period before the first character reveals, so the rapid per-character
// re-renders don't kick in while the idle → briefing crossfade is still animating.
const INITIAL_REVEAL_DELAY_MS = 350;

interface CaseBriefingProps {
  onReady: () => void;
}

export const CaseBriefing: React.FC<CaseBriefingProps> = ({ onReady }) => {
  const [revealed, setRevealed] = useState(0); // characters revealed so far
  const [skipped, setSkipped] = useState(false);
  const [showSkipHint, setShowSkipHint] = useState(false);

  const isComplete = skipped || revealed >= FULL_TEXT.length;

  // Typewriter tick
  useEffect(() => {
    if (isComplete) return;
    const delay = revealed === 0 ? INITIAL_REVEAL_DELAY_MS : CHAR_DELAY_MS;
    const timer = setTimeout(() => {
      setRevealed((prev) => {
        const next = prev + 1;
        // play soft tick on every 3rd character to avoid noise overload
        if (next % 3 === 0) audio.playKeystroke();
        return next;
      });
    }, delay);
    return () => clearTimeout(timer);
  }, [revealed, isComplete]);

  // Show "Tap to skip" hint after 1.5 s
  useEffect(() => {
    const hint = setTimeout(() => setShowSkipHint(true), 1500);
    return () => clearTimeout(hint);
  }, []);

  const handleSkip = useCallback(() => {
    if (isComplete) return;
    setSkipped(true);
    setShowSkipHint(false);
    audio.playPaperShuffle();
  }, [isComplete]);

  const handleReady = () => {
    audio.playStampSlam();
    onReady();
  };

  const displayText = skipped ? FULL_TEXT : FULL_TEXT.slice(0, revealed);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      className="space-y-5 w-full cursor-pointer select-none"
      onClick={handleSkip}
    >
      {/* Incident Report Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#7e1923]/20 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#7e1923]" />
            <span className="font-mono text-[10px] text-[#9e232f] uppercase tracking-widest font-bold">
              Incident Report
            </span>
          </div>
          <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#7e1923] leading-tight">
            The Archive Vault Keycard Theft
          </h3>
        </div>

        {/* Stamp */}
        <motion.div
          initial={{ scale: 1.8, rotate: -12, opacity: 0 }}
          animate={{ scale: 1, rotate: -8, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 380, damping: 18, delay: 0.2 }}
          className="shrink-0 border-2 border-[#7e1923]/70 rounded px-2 py-0.5 font-mono text-[9px] sm:text-[10px] text-[#7e1923] uppercase font-bold tracking-widest rotate-[-8deg]"
        >
          CASE OPEN
        </motion.div>
      </div>

      {/* Forensic Meta */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'DATE', value: '[REDACTED]' },
          { label: 'LOCATION', value: 'Archive Vault — Floor 2' },
          { label: 'TIME', value: '12:15 PM' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-[#eedec9]/40 rounded-lg px-2.5 py-2 border border-[#eedec9]/60">
            <p className="font-mono text-[9px] text-[#9e232f] uppercase tracking-wider mb-0.5">{label}</p>
            <p className="font-mono text-[10px] sm:text-xs text-[#4f131a] font-bold leading-tight">{value}</p>
          </div>
        ))}
      </div>

      {/* Typewriter Body */}
      <div className="relative bg-[#eedec9]/20 rounded-xl p-4 border border-[#eedec9]/50 min-h-[100px]">
        <p className="font-body text-[#4f131a] text-sm sm:text-base leading-relaxed">
          {displayText}
          {!isComplete && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              className="inline-block w-0.5 h-4 bg-[#7e1923] ml-0.5 align-middle"
            />
          )}
        </p>

        {/* Skip hint */}
        <AnimatePresence>
          {showSkipHint && !isComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-3 right-3 flex items-center gap-1 font-mono text-[10px] text-[#9e232f]/70"
            >
              <SkipForward className="w-3 h-3" />
              Tap to skip
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ready Button — only shown once text is complete */}
      <AnimatePresence>
        {isComplete && (
          <motion.button
            id="briefing-ready-btn"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 24 }}
            onClick={(e) => {
              e.stopPropagation();
              handleReady();
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#7e1923] text-[#fcfaf4] font-mono font-bold uppercase tracking-widest text-sm shadow-[0_4px_0px_#5a1017] cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
            I&apos;m Ready — Show Me the Suspects
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
