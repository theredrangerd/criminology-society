import React from 'react';
import { EvidenceCard } from './EvidenceCard';
import { Lock, Fingerprint, Search, Sparkles } from 'lucide-react';

export const GamePlaceholder: React.FC = () => {
  return (
    <EvidenceCard 
      tapeText="CLASSIFIED // MINI-GAME" 
      tapeAngle={-1.8}
      badgeLabel="CASE FILE #02"
      className="border-2 border-dashed border-[#9e232f]/40 relative overflow-hidden"
    >
      <div className="text-center py-6 px-4 space-y-4">
        {/* Angled Caution Stamp */}
        <div className="flex items-center justify-center gap-2">
          <span className="rubber-stamp text-sm md:text-base border-[#9e232f] text-[#9e232f] font-mono font-bold tracking-widest rotate-[-3deg]">
            🔒 CASE EVIDENCE SEALED // COMING NEXT
          </span>
        </div>

        <div className="max-w-xl mx-auto space-y-2">
          <h3 className="font-editorial text-2xl md:text-3xl font-bold text-[#7e1923]">
            "The Suspect Lineup — Cognitive Bias Experiment"
          </h3>
          <p className="font-body text-[#4f131a] text-sm md:text-base">
            Can your instincts pierce the <em>Halo Effect</em>? A 30-second forensic psychology challenge testing whether you judge criminal profiles by aesthetic stereotypes or hard forensic facts.
          </p>
        </div>

        {/* Forensic Clue Teaser Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eedec9]/50 border border-[#eedec9] font-mono text-xs text-[#733139]">
            <Search className="w-3.5 h-3.5 text-[#7e1923]" />
            <span>5 CCTV Suspects</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eedec9]/50 border border-[#eedec9] font-mono text-xs text-[#733139]">
            <Fingerprint className="w-3.5 h-3.5 text-[#7e1923]" />
            <span>Forensic Profiling</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eedec9]/50 border border-[#eedec9] font-mono text-xs text-[#733139]">
            <Sparkles className="w-3.5 h-3.5 text-[#7e1923]" />
            <span>Live LifeCon Bias Meter</span>
          </div>
        </div>

        {/* Lock Animation Notice */}
        <div className="pt-2">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-[#7e1923] bg-[#7e1923]/10 px-3 py-1 rounded-md">
            <Lock className="w-3.5 h-3.5" />
            Module reserved for upcoming build
          </span>
        </div>
      </div>
    </EvidenceCard>
  );
};
