import React from 'react';
import { EvidenceCard } from './EvidenceCard';
import { MapPin, Clock, CalendarCheck } from 'lucide-react';

export const LogisticsBadge: React.FC = () => {
  return (
    <EvidenceCard 
      tapeText="LOGISTICS // SCHEDULE" 
      tapeAngle={1.4}
      badgeLabel="LOCATION & TIME"
    >
      <div className="flex flex-col justify-between h-full space-y-6">
        {/* Header Badge */}
        <div className="border-b border-[#7e1923]/20 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-[#7e1923]" />
            <h2 className="font-editorial text-2xl font-bold text-[#7e1923] tracking-wide">
              Weekly Meetings
            </h2>
          </div>
          <span className="rubber-stamp text-[10px] border-[#7e1923] text-[#7e1923]">
            TERM 1 & 2
          </span>
        </div>

        {/* Core Logistics Blocks */}
        <div className="space-y-4">
          {/* Where */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#eedec9]/40 border border-[#eedec9]">
            <div className="p-2.5 rounded-xl bg-[#7e1923]/10 border border-[#7e1923]/20 text-[#7e1923] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#733139] uppercase font-bold tracking-wider block">WHERE</span>
              <span className="font-display font-black text-xl text-[#7e1923] tracking-wide block">MATH 203</span>
              <span className="text-xs text-[#4f131a] mt-0.5 block">High School Math Wing</span>
            </div>
          </div>

          {/* When */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#eedec9]/40 border border-[#eedec9]">
            <div className="p-2.5 rounded-xl bg-[#7e1923]/10 border border-[#7e1923]/20 text-[#7e1923] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-[#733139] uppercase font-bold tracking-wider block">WHEN</span>
              <span className="font-display font-black text-xl text-[#7e1923] tracking-wide block">TUESDAYS 12:45 – 1:15 PM</span>
              <span className="text-xs text-[#4f131a] mt-0.5 block">Lunchtime weekly briefing</span>
            </div>
          </div>
        </div>

        {/* Sign-off Seal */}
        <div className="p-3.5 rounded-xl bg-[#7e1923]/5 border border-[#7e1923]/20 text-center">
          <p className="font-editorial italic font-bold text-lg text-[#7e1923] leading-tight">
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
