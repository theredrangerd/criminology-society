import React from 'react';
import { EvidenceCard } from './EvidenceCard';
import { Compass, Scale, Dna, FileSearch } from 'lucide-react';

export const ForensicHighlights: React.FC = () => {
  return (
    <EvidenceCard 
      tapeText="CURRICULUM // PILLARS" 
      tapeAngle={0.9}
    >
      <div className="flex flex-col justify-between h-full space-y-4">
        {/* Header */}
        <div className="border-b border-[#7e1923]/20 pb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#7e1923]" />
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#7e1923] tracking-wide">
              What We Explore
            </h2>
          </div>
          <span className="font-mono text-[10px] text-[#7e1923] uppercase font-bold border border-[#7e1923]/40 px-2 py-0.5 rounded bg-[#7e1923]/10">
            PILLARS
          </span>
        </div>

        <p className="font-body text-xs sm:text-sm text-[#4f131a]">
          Bridging social science and forensic deduction through active case analysis:
        </p>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div className="p-2.5 rounded-xl bg-[#eedec9]/40 border border-[#eedec9] flex items-start gap-2.5">
            <Compass className="w-4 h-4 text-[#7e1923] shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-xs font-bold text-[#7e1923] block">Criminal Profiling</span>
              <span className="text-[11px] text-[#4f131a] leading-tight block">Motive & psychopathy patterns</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-[#eedec9]/40 border border-[#eedec9] flex items-start gap-2.5">
            <Dna className="w-4 h-4 text-[#7e1923] shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-xs font-bold text-[#7e1923] block">Forensic Science</span>
              <span className="text-[11px] text-[#4f131a] leading-tight block">Biometrics & evidence chains</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-[#eedec9]/40 border border-[#eedec9] flex items-start gap-2.5">
            <Scale className="w-4 h-4 text-[#7e1923] shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-xs font-bold text-[#7e1923] block">Law & Society</span>
              <span className="text-[11px] text-[#4f131a] leading-tight block">Justice systems & ethics</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-[#eedec9]/40 border border-[#eedec9] flex items-start gap-2.5">
            <FileSearch className="w-4 h-4 text-[#7e1923] shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-xs font-bold text-[#7e1923] block">Mock Trials & Games</span>
              <span className="text-[11px] text-[#4f131a] leading-tight block">Hands-on case challenges</span>
            </div>
          </div>
        </div>

        <div className="p-2 rounded-lg bg-[#eedec9]/30 border border-[#eedec9] text-center">
          <span className="font-mono text-[10px] sm:text-[11px] text-[#733139] uppercase font-semibold">
            ✦ Perfect for Law, Finance, STEM, and Psychology ✦
          </span>
        </div>
      </div>
    </EvidenceCard>
  );
};
