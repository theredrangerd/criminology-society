import React from 'react';
import { motion } from 'framer-motion';
import { SUSPECTS, totalVotes, votePercent } from './suspects';

interface BiasBarChartProps {
  votes: Record<number, number>;
  selectedId: number | null;
}

export const BiasBarChart: React.FC<BiasBarChartProps> = ({ votes, selectedId }) => {
  const total = totalVotes(votes);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ type: 'spring', stiffness: 280, damping: 26 }}
      className="mt-5 rounded-2xl bg-[#090a0d]/60 border border-[#7e1923]/20 p-4 sm:p-5 space-y-4"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="font-mono text-[10px] text-[#9e232f] uppercase tracking-widest font-bold">
            Collective Bias Meter
          </p>
          <p className="font-editorial text-base sm:text-lg font-bold text-[#eedec9] mt-0.5">
            Who Did LifeCon Suspect?
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-[#7e1923]/15 border border-[#7e1923]/30 rounded-full px-3 py-1">
          <span className="font-mono text-xs font-bold text-[#9e232f]">{total}</span>
          <span className="font-mono text-[10px] text-[#eedec9]/60 uppercase tracking-wider">Total Verdicts</span>
        </div>
      </div>

      {/* Bars */}
      <div className="space-y-2.5">
        {SUSPECTS.map((suspect) => {
          const pct = votePercent(votes, suspect.id);
          const isGuilty = suspect.isGuilty;
          const isMyPick = selectedId === suspect.id;

          return (
            <div key={suspect.id} className="space-y-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="text-sm shrink-0">{suspect.emoji}</span>
                  <span
                    className={[
                      'font-mono text-[11px] font-bold truncate',
                      isGuilty ? 'text-[#9e232f]' : 'text-[#eedec9]/70',
                    ].join(' ')}
                  >
                    {suspect.archetype}
                    {isGuilty && ' ✓'}
                  </span>
                  {isMyPick && (
                    <span className="font-mono text-[9px] text-[#b45309] bg-[#b45309]/15 border border-[#b45309]/30 rounded px-1 py-px shrink-0">
                      YOUR PICK
                    </span>
                  )}
                </div>
                <motion.span
                  className={[
                    'font-mono text-xs font-bold shrink-0',
                    isGuilty ? 'text-[#9e232f]' : 'text-[#eedec9]/50',
                  ].join(' ')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {pct}%
                </motion.span>
              </div>

              {/* Bar Track */}
              <div className="h-2 rounded-full bg-[#eedec9]/10 overflow-hidden">
                <motion.div
                  className={[
                    'h-full rounded-full origin-left',
                    isGuilty
                      ? 'bg-gradient-to-r from-[#7e1923] to-[#9e232f]'
                      : isMyPick
                      ? 'bg-[#b45309]/70'
                      : 'bg-[#8692a1]/50',
                  ].join(' ')}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: pct / 100 }}
                  transition={{
                    type: 'spring',
                    bounce: 0.25,
                    duration: 1.2,
                    delay: 0.2 + suspect.id * 0.08,
                  }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footnote */}
      <p className="font-mono text-[9px] text-[#eedec9]/30 text-center uppercase tracking-wider pt-1">
        Data persists across all booth visitors today
      </p>
    </motion.div>
  );
};
