import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EvidenceCard } from '../EvidenceCard';
import { GameIdle } from './GameIdle';
import { CaseBriefing } from './CaseBriefing';
import { SuspectCard } from './SuspectCard';
import { VerdictBanner } from './VerdictBanner';
import { BiasBarChart } from './BiasBarChart';
import {
  SUSPECTS,
  type GamePhase,
  loadVotes,
  incrementVote,
  clearVotes,
} from './suspects';

export const SuspectLineup: React.FC = () => {
  const [phase, setPhase] = useState<GamePhase>('idle');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [votes, setVotes] = useState<Record<number, number>>(loadVotes);

  // ── State transitions ────────────────────────────────────────────────────
  const handleStart = useCallback(() => setPhase('briefing'), []);
  const handleReady = useCallback(() => setPhase('lineup'), []);

  const handleSelectSuspect = useCallback(
    (id: number) => {
      if (phase !== 'lineup') return;
      const updated = incrementVote(votes, id);
      setVotes(updated);
      setSelectedId(id);
      setPhase('verdict');
    },
    [phase, votes],
  );

  const handleReveal = useCallback(() => setPhase('revealed'), []);
  const handleConceal = useCallback(() => setPhase('verdict'), []);

  const handleReset = useCallback(() => {
    setPhase('idle');
    setSelectedId(null);
  }, []);

  const handleClearVotes = useCallback(() => {
    const zeroed = clearVotes();
    setVotes(zeroed);
    setPhase('idle');
    setSelectedId(null);
  }, []);

  // ── Derived values ────────────────────────────────────────────────────────
  const selectedSuspect = SUSPECTS.find((s) => s.id === selectedId) ?? null;
  const showSuspectGrid = phase === 'lineup' || phase === 'verdict' || phase === 'revealed';
  const showVerdict = phase === 'verdict' || phase === 'revealed';

  // ── Tape text per phase ───────────────────────────────────────────────────
  const tapeText =
    phase === 'idle'
      ? 'CLASSIFIED // MINI-GAME'
      : phase === 'briefing'
      ? 'INCIDENT REPORT // CASE OPEN'
      : 'SUSPECT LINEUP // CASE FILE #02';

  return (
    <EvidenceCard
      tapeText={tapeText}
      tapeAngle={-1.8}
      className="border-2 border-[#7e1923]/30 relative overflow-visible"
    >
      <div className="space-y-5 w-full">
        {/* ── Phase: Idle / Briefing ──────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {phase === 'idle' && (
            <motion.div key="idle">
              <GameIdle onStart={handleStart} />
            </motion.div>
          )}
          {phase === 'briefing' && (
            <motion.div key="briefing">
              <CaseBriefing onReady={handleReady} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Phase: Suspect Grid (lineup / verdict / revealed) ───────────── */}
        <AnimatePresence>
          {showSuspectGrid && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            >
              {/* Phase header strip */}
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-[10px] text-[#9e232f] uppercase tracking-widest font-bold">
                  {phase === 'lineup'
                    ? '▶ Select the perpetrator — tap a suspect'
                    : '✓ Verdict recorded'}
                </span>
              </div>

              {/* 5-card grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {SUSPECTS.map((suspect) => (
                  <SuspectCard
                    key={suspect.id}
                    suspect={suspect}
                    phase={phase === 'lineup' ? 'lineup' : 'verdict'}
                    selectedId={selectedId}
                    onSelect={handleSelectSuspect}
                  />
                ))}
              </div>

              {/* ── Verdict banner + controls ────────────────────────────── */}
              <AnimatePresence>
                {showVerdict && selectedSuspect && (
                  <VerdictBanner
                    key="verdict-banner"
                    selectedSuspect={selectedSuspect}
                    phase={phase}
                    votes={votes}
                    onReveal={handleReveal}
                    onConceal={handleConceal}
                    onReset={handleReset}
                    onClearVotes={handleClearVotes}
                  />
                )}
              </AnimatePresence>

              {/* ── Bias bar chart (revealed only) ───────────────────────── */}
              <AnimatePresence>
                {phase === 'revealed' && (
                  <BiasBarChart
                    key="bias-chart"
                    votes={votes}
                    selectedId={selectedId}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </EvidenceCard>
  );
};
