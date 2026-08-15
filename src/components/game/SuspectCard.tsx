import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import type { Suspect } from './suspects';
import { audio } from '../../utils/audio';

interface SuspectCardProps {
  suspect: Suspect;
  phase: 'lineup' | 'verdict';
  selectedId: number | null;
  onSelect?: (id: number) => void;
}

export const SuspectCard: React.FC<SuspectCardProps> = ({
  suspect,
  phase,
  selectedId,
  onSelect,
}) => {
  const isSelected = selectedId === suspect.id;
  const anySelected = selectedId !== null;
  const isGuilty = suspect.isGuilty;

  // Dim all cards except selected/guilty in verdict mode
  const dimmed = phase === 'verdict' && anySelected && !isSelected && !isGuilty;
  const guiltyCelebrate = phase === 'verdict' && isGuilty;
  const wrongSelected = phase === 'verdict' && isSelected && !isGuilty;

  const handleClick = () => {
    if (phase !== 'lineup' || !onSelect) return;
    audio.playStampSlam();
    onSelect(suspect.id);
  };

  return (
    <motion.div
      layout
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: dimmed ? 0.38 : 1,
        y: 0,
        scale: guiltyCelebrate ? 1.02 : 1,
        filter: dimmed ? 'grayscale(0.65)' : 'none',
        x: wrongSelected ? [-6, 6, -4, 4, -2, 2, 0] : 0,
      }}
      whileHover={phase === 'lineup' ? { y: -4, scale: 1.025 } : {}}
      whileTap={phase === 'lineup' ? { scale: 0.97 } : {}}
      transition={wrongSelected ? { duration: 0.45, ease: 'easeOut' } : { type: 'spring', stiffness: 280, damping: 22 }}
      className={[
        'relative flex flex-col rounded-2xl overflow-hidden border-2 select-none',
        'bg-[#fcfaf4]',
        phase === 'lineup'
          ? 'border-[#eedec9] hover:border-[#9e232f]/60'
          : guiltyCelebrate
          ? 'border-[#7e1923] shadow-[0_0_24px_rgba(126,25,35,0.5)]'
          : wrongSelected
          ? 'border-[#b45309]'
          : 'border-[#eedec9]',
        phase === 'lineup' ? 'cursor-pointer' : 'cursor-default',
      ].join(' ')}
    >
      {/* Avatar Area */}
      <div
        className={[
          'flex items-center justify-center relative overflow-hidden',
          'h-40 sm:h-44',
          guiltyCelebrate ? 'bg-[#fff0f0]' : 'bg-white',
        ].join(' ')}
      >
        <img
          src={`${import.meta.env.BASE_URL}suspects/${suspect.image}`}
          alt={suspect.archetype}
          className="h-full w-full object-contain object-bottom"
          draggable={false}
        />

        {/* Dossier number badge */}
        <span className="absolute top-2 left-2 font-mono text-[9px] text-[#9e232f] bg-[#9e232f]/10 border border-[#9e232f]/30 rounded px-1.5 py-0.5 font-bold tracking-wider">
          {suspect.codename}
        </span>

        {/* Verdict overlay stamps */}
        {guiltyCelebrate && (
          <motion.div
            initial={{ scale: 2, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: -12, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 16, delay: 0.15 }}
            className="absolute top-2 right-2 border-2 border-[#7e1923] rounded px-1.5 py-0.5 font-mono text-[8px] font-bold text-[#7e1923] uppercase tracking-widest bg-[#fcfaf4]"
          >
            CULPRIT
          </motion.div>
        )}
        {wrongSelected && (
          <motion.div
            initial={{ scale: 2, rotate: 10, opacity: 0 }}
            animate={{ scale: 1, rotate: 8, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 16, delay: 0.1 }}
            className="absolute top-2 right-2 border-2 border-[#b45309] rounded px-1.5 py-0.5 font-mono text-[8px] font-bold text-[#b45309] uppercase tracking-widest bg-[#fcfaf4]"
          >
            BIAS TRAP
          </motion.div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <p className="font-editorial text-sm font-bold text-[#7e1923] leading-tight">
          {suspect.archetype}
        </p>
        <p className="font-body italic text-[#4f131a] text-xs leading-snug border-l-2 border-[#7e1923]/30 pl-2">
          {suspect.description}
        </p>

        {/* Post-verdict reveal content */}
        {phase === 'verdict' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-1 overflow-hidden"
          >
            {isGuilty ? (
              <div className="bg-[#7e1923]/8 border border-[#7e1923]/25 rounded-lg p-2 space-y-1">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#7e1923] shrink-0" />
                  <span className="font-mono text-[9px] text-[#7e1923] font-bold uppercase tracking-wider">
                    Evidence
                  </span>
                </div>
                <p className="font-body text-[10px] text-[#4f131a] leading-snug">
                  {suspect.clue}
                </p>
              </div>
            ) : isSelected ? (
              <div className="bg-[#b45309]/8 border border-[#b45309]/25 rounded-lg p-2 space-y-1">
                <div className="flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-[#b45309] shrink-0" />
                  <span className="font-mono text-[9px] text-[#b45309] font-bold uppercase tracking-wider">
                    {suspect.stereotypeTag}
                  </span>
                </div>
                <p className="font-body text-[10px] text-[#4f131a] leading-snug">
                  {suspect.alibi}
                </p>
              </div>
            ) : null}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
