import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye, EyeOff, RotateCcw, Trash2, X, AlertTriangle, Target, AlertCircle,
} from 'lucide-react';
import type { GamePhase, Suspect } from './suspects';
import { totalVotes } from './suspects';
import { audio } from '../../utils/audio';

interface VerdictBannerProps {
  selectedSuspect: Suspect;
  phase: GamePhase;
  votes: Record<number, number>;
  onReveal: () => void;
  onConceal: () => void;
  onReset: () => void;
  onClearVotes: () => void;
}

export const VerdictBanner: React.FC<VerdictBannerProps> = ({
  selectedSuspect,
  phase,
  votes,
  onReveal,
  onConceal,
  onReset,
  onClearVotes,
}) => {
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const isCorrect = selectedSuspect.isGuilty;
  const isRevealed = phase === 'revealed';
  const total = totalVotes(votes);

  const handleReveal = () => {
    audio.playChime();
    onReveal();
  };

  const handleConceal = () => {
    audio.playPaperShuffle();
    onConceal();
  };

  const handleReset = () => {
    audio.playStampSlam();
    onReset();
  };

  const handleClearConfirm = () => {
    audio.playStampSlam();
    setShowClearConfirm(false);
    onClearVotes();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ type: 'spring', stiffness: 280, damping: 26, delay: 0.1 }}
      className="mt-5 space-y-4"
    >
      {/* Verdict Card */}
      <div
        className={[
          'rounded-2xl border-2 p-4 sm:p-5 relative overflow-hidden',
          isCorrect
            ? 'bg-[#7e1923]/10 border-[#7e1923]/50'
            : 'bg-[#b45309]/10 border-[#b45309]/40',
        ].join(' ')}
      >
        {/* Animated bg glow */}
        <motion.div
          className={[
            'absolute inset-0 opacity-20 pointer-events-none',
            isCorrect
              ? 'bg-radial-gradient-[circle_at_30%_50%,#7e1923,transparent]'
              : 'bg-[#b45309]/10',
          ].join(' ')}
          animate={{ opacity: [0.15, 0.28, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 space-y-2">
          {/* Icon + headline */}
          <div className="flex items-start gap-3">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 420, damping: 18, delay: 0.2 }}
              className={[
                'shrink-0 w-9 h-9 rounded-full flex items-center justify-center',
                isCorrect ? 'bg-[#7e1923]' : 'bg-[#b45309]',
              ].join(' ')}
            >
              {isCorrect ? (
                <Target className="w-5 h-5 text-[#fcfaf4]" />
              ) : (
                <AlertCircle className="w-5 h-5 text-[#fcfaf4]" />
              )}
            </motion.div>

            <div>
              <motion.p
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className={[
                  'font-mono text-[10px] font-bold uppercase tracking-widest',
                  isCorrect ? 'text-[#9e232f]' : 'text-[#b45309]',
                ].join(' ')}
              >
                {isCorrect ? '🎯 Exceptional Deduction' : '⚠️ Caught by the Bias Trap'}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="font-editorial text-base sm:text-lg font-bold text-[#fcfaf4] mt-0.5 leading-snug"
              >
                {isCorrect
                  ? 'You pierced the Halo Effect and caught the real perpetrator.'
                  : `You suspected ${selectedSuspect.archetype} based on visual stereotypes.`}
              </motion.p>
            </div>
          </div>

          {/* Explanation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-body text-[#eedec9]/80 text-sm leading-relaxed pl-12"
          >
            {isCorrect
              ? 'You have the instincts of a forensic profiler. Suspect #05 used a concealed RFID cloner to steal the keycard — exploiting trust, presentation, and the Halo Effect.'
              : `In reality, Suspect #05 — "The Scholar" — cloned the master access card using a hidden RFID device attached to their badge lanyard. Criminals exploit trust and presentation.`}
          </motion.p>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="rounded-xl bg-[#7e1923]/8 border border-[#7e1923]/20 px-4 py-3 text-center"
      >
        <p className="font-editorial text-sm italic text-[#eedec9]/80">
          Ready to master the science of human behaviour &amp; forensic profiling?
        </p>
        <p className="font-mono text-xs text-[#9e232f] mt-1 font-bold uppercase tracking-wider">
          Join CrimSoc — Tuesdays 12:45 PM • Math 203
        </p>
      </motion.div>

      {/* Control Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap gap-2"
      >
        {/* Reveal / Conceal toggle */}
        {!isRevealed ? (
          <button
            id="reveal-results-btn"
            onClick={handleReveal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#7e1923] text-[#fcfaf4] font-mono text-xs font-bold uppercase tracking-wider shadow-[0_3px_0px_#5a1017] hover:shadow-[0_5px_12px_rgba(126,25,35,0.45)] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            Reveal Results
          </button>
        ) : (
          <button
            id="conceal-results-btn"
            onClick={handleConceal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#fcfaf4]/10 border border-[#eedec9]/30 text-[#eedec9] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#fcfaf4]/15 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <EyeOff className="w-3.5 h-3.5" />
            Conceal Results
          </button>
        )}

        {/* Reset for next visitor */}
        <button
          id="reset-game-btn"
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#fcfaf4]/5 border border-[#eedec9]/20 text-[#eedec9]/60 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#fcfaf4]/10 hover:text-[#eedec9] hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset for Next Visitor
        </button>

        {/* Clear All Votes — only shown when revealed */}
        {isRevealed && (
          <button
            id="clear-votes-btn"
            onClick={() => setShowClearConfirm(true)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-transparent border border-[#7e1923]/25 text-[#9e232f]/50 font-mono text-[10px] font-bold uppercase tracking-wider hover:border-[#7e1923]/60 hover:text-[#9e232f] transition-all cursor-pointer"
          >
            <Trash2 className="w-3 h-3" />
            Clear All Votes
          </button>
        )}
      </motion.div>

      {/* ── Clear Votes Confirmation Popup ── */}
      <AnimatePresence>
        {showClearConfirm && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#090a0d]/80 backdrop-blur-sm z-50"
              onClick={() => setShowClearConfirm(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-[#0f0d0c] border-2 border-[#7e1923]/70 rounded-2xl max-w-sm w-full p-6 shadow-[0_0_48px_rgba(126,25,35,0.4)] space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-[#9e232f] shrink-0" />
                    <p className="font-mono text-[10px] text-[#9e232f] font-bold uppercase tracking-widest">
                      Purge Evidence Record — Irreversible Action
                    </p>
                  </div>
                  <h4 className="font-editorial text-lg font-bold text-[#fcfaf4] leading-snug">
                    Erase All Booth Vote Data?
                  </h4>
                </div>

                {/* Warning body */}
                <div className="bg-[#7e1923]/10 border border-[#7e1923]/25 rounded-xl p-3">
                  <p className="font-body text-sm text-[#eedec9]/80 leading-relaxed">
                    This will permanently delete all{' '}
                    <strong className="text-[#fcfaf4]">{total} votes</strong> recorded at this booth 
                    today across all suspects. The collective bias meter will reset to zero.
                  </p>
                  <p className="font-mono text-[10px] text-[#9e232f]/70 mt-2 uppercase tracking-wider">
                    ⚠ This cannot be undone. Use only at the end of the LifeCon session.
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <button
                    id="clear-votes-cancel-btn"
                    onClick={() => setShowClearConfirm(false)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#eedec9]/25 text-[#eedec9]/70 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#eedec9]/5 transition-all cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                    Cancel — Keep Records
                  </button>
                  <button
                    id="clear-votes-confirm-btn"
                    onClick={handleClearConfirm}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#7e1923] text-[#fcfaf4] font-mono text-xs font-bold uppercase tracking-wider shadow-[0_3px_0px_#5a1017] hover:-translate-y-0.5 hover:shadow-[0_5px_12px_rgba(126,25,35,0.5)] transition-all cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Confirm — Erase All
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
