import React from 'react';
import { EvidenceCard } from './EvidenceCard';
import { Lock, Fingerprint, Search, Sparkles } from 'lucide-react';

export const GamePlaceholder: React.FC = () => {
  return (
    <EvidenceCard 
      tapeText="CLASSIFIED // MINI-GAME" 
      tapeAngle={-1.8}
      className="border-2 border-dashed border-[#9e232f]/40 relative overflow-hidden"
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="border-b border-[#7e1923]/20 pb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-[#7e1923]" />
            <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#7e1923]">
              The Suspect Lineup
            </h3>
          </div>
          <span className="font-mono text-[10px] text-[#9e232f] uppercase font-bold border border-[#9e232f]/50 px-2 py-0.5 rounded bg-[#9e232f]/10">
            CASE FILE #02 • SEALED
          </span>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h4 className="font-editorial text-base sm:text-lg font-bold text-[#7e1923]">
            Cognitive Bias & Halo Effect Profiling
          </h4>
          <p className="font-body text-[#4f131a] text-xs sm:text-sm md:text-base leading-relaxed">
            Can your instincts pierce visual stereotypes? A 30-second forensic psychology challenge testing whether you judge criminal profiles by aesthetic assumptions or hard forensic evidence.
          </p>
        </div>

        {/* Clue Teaser Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
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

        {/* Lock Animation Notice */}
        <div className="pt-2">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#7e1923] bg-[#7e1923]/10 py-2 px-3 rounded-lg border border-[#7e1923]/20">
            <Lock className="w-3.5 h-3.5" />
            <span>Case evidence sealed — Launching soon in Build 2</span>
          </div>
        </div>
      </div>
    </EvidenceCard>
  );
};
