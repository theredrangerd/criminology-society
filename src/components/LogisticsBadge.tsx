import React from 'react';
import { EvidenceCard } from './EvidenceCard';
import { MapPin, Clock, CalendarCheck } from 'lucide-react';

export const LogisticsBadge: React.FC = () => {
  return (
    <EvidenceCard 
      tapeText="LOGISTICS // SCHEDULE" 
      tapeAngle={1.4}
    >
      <div className="flex flex-col justify-between h-full space-y-5">
        {/* Header Badge */}
        <div className="border-b border-[#7e1923]/20 pb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-[#7e1923]" />
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#7e1923] tracking-wide">
              Weekly Meetings
            </h2>
          </div>
          <span className="font-mono text-[10px] text-[#7e1923] uppercase font-bold border border-[#7e1923]/40 px-2 py-0.5 rounded bg-[#7e1923]/10">
            TERM 1 & 2
          </span>
        </div>

        {/* Core Logistics Blocks */}
        <div className="space-y-3">
          {/* Where */}
          <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-[#eedec9]/40 border border-[#eedec9]">
            <div className="p-2 rounded-lg bg-[#7e1923]/10 border border-[#7e1923]/20 text-[#7e1923] shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#733139] uppercase font-bold tracking-wider block">WHERE</span>
              <span className="font-display font-black text-lg sm:text-xl text-[#7e1923] tracking-wide block">MATH 203</span>
              <span className="text-[11px] sm:text-xs text-[#4f131a] block">High School Math Wing</span>
            </div>
          </div>

          {/* When */}
          <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-[#eedec9]/40 border border-[#eedec9]">
            <div className="p-2 rounded-lg bg-[#7e1923]/10 border border-[#7e1923]/20 text-[#7e1923] shrink-0 mt-0.5">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#733139] uppercase font-bold tracking-wider block">WHEN</span>
              <span className="font-display font-black text-lg sm:text-xl text-[#7e1923] tracking-wide block">TUESDAYS 12:45 – 1:15 PM</span>
              <span className="text-[11px] sm:text-xs text-[#4f131a] block">Lunchtime weekly briefing</span>
            </div>
          </div>
        </div>

        {/* Sign-off Seal */}
        <div className="p-3 rounded-xl bg-[#7e1923]/5 border border-[#7e1923]/20 text-center">
          <p className="font-editorial italic font-bold text-base sm:text-lg text-[#7e1923] leading-tight">
            "See you there!"
          </p>
          <span className="font-mono text-[10px] text-[#733139] uppercase tracking-wider block mt-0.5">
            Open to all grades & curiosity levels
          </span>
        </div>
      </div>
    </EvidenceCard>
  );
};
