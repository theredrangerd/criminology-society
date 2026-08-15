import React from 'react';
import { EvidenceCard } from './EvidenceCard';
import { MapPin, Clock, CalendarCheck } from 'lucide-react';

export const LogisticsBadge: React.FC = () => {
  return (
    <EvidenceCard 
      tapeText="LOGISTICS // SCHEDULE" 
      tapeAngle={1.2}
      badgeLabel="LOCATION & TIME"
      className="max-w-3xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Room & Schedule */}
        <div className="space-y-3 text-left w-full md:w-auto">
          <div className="flex items-center gap-2">
            <span className="rubber-stamp text-xs border-[#7e1923] text-[#7e1923]">
              REGULAR SESSIONS
            </span>
            <span className="font-mono text-xs text-[#733139] uppercase">WEEKLY BRIEFING</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-1">
            {/* Where */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#7e1923]/10 border border-[#7e1923]/20 text-[#7e1923] mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#733139] uppercase font-bold tracking-wider block">WHERE</span>
                <span className="font-display font-black text-xl text-[#7e1923] tracking-wide">MATH 203</span>
              </div>
            </div>

            {/* When */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-[#7e1923]/10 border border-[#7e1923]/20 text-[#7e1923] mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#733139] uppercase font-bold tracking-wider block">WHEN</span>
                <span className="font-display font-black text-xl text-[#7e1923] tracking-wide">TUESDAYS 12:45 – 1:15 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Sign-off Seal */}
        <div className="w-full md:w-auto flex flex-row md:flex-col items-center justify-center p-4 rounded-2xl bg-[#eedec9]/40 border border-[#eedec9] text-center gap-2">
          <CalendarCheck className="w-6 h-6 text-[#7e1923]" />
          <div>
            <p className="font-editorial italic font-bold text-lg text-[#7e1923] leading-tight">"See you there!"</p>
            <span className="font-mono text-[10px] text-[#733139] uppercase">Open to All Grades & Interests</span>
          </div>
        </div>
      </div>
    </EvidenceCard>
  );
};
