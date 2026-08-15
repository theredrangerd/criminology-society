import React from 'react';
import { EvidenceCard } from './EvidenceCard';
import { BookOpen, Brain, ShieldAlert, Sparkles } from 'lucide-react';

export const WhatIsCrimSoc: React.FC = () => {
  return (
    <EvidenceCard 
      tapeText="CASE BRIEF // WHAT IS CRIMSOC?" 
      tapeAngle={-1.5}
      badgeLabel="DOSSIER #01"
    >
      <div className="space-y-4">
        {/* Header with Stamp */}
        <div className="border-b border-[#7e1923]/20 pb-3 flex items-center justify-between">
          <h2 className="font-editorial text-2xl md:text-3xl font-bold text-[#7e1923] tracking-wide">
            What is CrimSoc?
          </h2>
          <span className="font-mono text-xs text-[#733139] uppercase font-semibold">
            STATUS: ACTIVE INVESTIGATION
          </span>
        </div>

        {/* Narrative Description from Official Poster */}
        <p className="font-body text-[#4f131a] text-base md:text-lg leading-relaxed">
          The <strong className="font-bold text-[#7e1923]">Criminology Society</strong> dives into the world of crime, law, and justice. We analyze criminal behavior, explore real-life cases, and uncover how laws and society respond while sharpening your critical thinking and problem-solving skills.
        </p>

        <p className="font-body text-[#4f131a] text-base md:text-lg leading-relaxed">
          Perfect for anyone curious about <strong className="text-[#7e1923]">law, finance, STEM</strong>, or the science behind human behavior. This society promises excitement, insight, games, but also a deeper understanding into the society we live in and the changes we can make.
        </p>

        {/* Highlight Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#eedec9]/40 border border-[#eedec9]">
            <Brain className="w-4 h-4 text-[#7e1923] shrink-0" />
            <span className="font-mono text-xs text-[#4f131a] font-semibold">Behavioral Profiling</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#eedec9]/40 border border-[#eedec9]">
            <ShieldAlert className="w-4 h-4 text-[#7e1923] shrink-0" />
            <span className="font-mono text-xs text-[#4f131a] font-semibold">Forensic Law</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#eedec9]/40 border border-[#eedec9]">
            <BookOpen className="w-4 h-4 text-[#7e1923] shrink-0" />
            <span className="font-mono text-xs text-[#4f131a] font-semibold">Real-Life Cases</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#eedec9]/40 border border-[#eedec9]">
            <Sparkles className="w-4 h-4 text-[#7e1923] shrink-0" />
            <span className="font-mono text-xs text-[#4f131a] font-semibold">Interactive Games</span>
          </div>
        </div>
      </div>
    </EvidenceCard>
  );
};
