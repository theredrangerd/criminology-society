import React, { useState } from 'react';
import { EvidenceCard } from './EvidenceCard';
import { Copy, Check, Mail, Shield } from 'lucide-react';
import { audio } from '../utils/audio';

interface Officer {
  id: string;
  role: string;
  email: string;
  badge: string;
}

const OFFICERS: Officer[] = [
  { id: 'ghosh', role: 'Executive Lead', email: 'ghosh127294@gapps.uwcsea.edu.sg', badge: 'LEAD-01' },
  { id: 'unswo', role: 'Executive Lead', email: 'unswo31797@gapps.uwcsea.edu.sg', badge: 'LEAD-02' },
  { id: 'wasu', role: 'Executive Lead', email: 'wasu79763@gapps.uwcsea.edu.sg', badge: 'LEAD-03' },
  { id: 'seriz', role: 'Executive Lead', email: 'seriz32192@gapps.uwcsea.edu.sg', badge: 'LEAD-04' },
  { id: 'ding', role: 'Executive Lead', email: 'ding39701@gapps.uwcsea.edu.sg', badge: 'LEAD-05' },
];

export const OfficerContacts: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    audio.playChime();

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <EvidenceCard 
      tapeText="EVIDENCE // LEAD CONTACTS" 
      tapeAngle={-0.8}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="border-b border-[#7e1923]/20 pb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#7e1923]" />
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#7e1923] tracking-wide">
              Lead Officer Contacts
            </h2>
          </div>
          <span className="font-mono text-[10px] text-[#7e1923] uppercase font-bold border border-[#7e1923]/40 px-2 py-0.5 rounded bg-[#7e1923]/10">
            OFFICER ROSTER • TAP TO COPY
          </span>
        </div>

        <p className="font-body text-[#4f131a] text-xs sm:text-sm">
          Have questions regarding meeting agendas, case analyses, or joining the committee? Reach out directly to any student lead:
        </p>

        {/* 5 Officers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {OFFICERS.map((officer) => {
            const isCopied = copiedId === officer.id;
            return (
              <button 
                key={officer.id}
                type="button"
                onClick={() => handleCopy(officer.email, officer.id)}
                title={`Click to copy ${officer.email}`}
                className={`w-full text-left flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer select-none group active:scale-[0.98] ${
                  isCopied
                    ? 'bg-[#7e1923]/15 border-[#7e1923] shadow-inner'
                    : 'bg-[#eedec9]/40 border-[#eedec9] hover:bg-[#eedec9]/70 hover:border-[#7e1923]/50 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className={`p-2 rounded-lg transition-colors shrink-0 ${
                    isCopied ? 'bg-[#7e1923] text-[#eedec9]' : 'bg-[#7e1923]/10 text-[#7e1923] group-hover:bg-[#7e1923]/20'
                  }`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] text-[#7e1923] font-bold uppercase">{officer.badge}</span>
                      <span className="text-xs font-semibold text-[#4f131a]">{officer.role}</span>
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs text-[#733139] block truncate">
                      {officer.email}
                    </span>
                  </div>
                </div>

                <div
                  className={`p-2 rounded-lg border transition-all shrink-0 ml-2 shadow-sm ${
                    isCopied
                      ? 'bg-green-700 text-white border-green-800'
                      : 'bg-[#fcfaf4] text-[#7e1923] group-hover:bg-[#7e1923] group-hover:text-[#fcfaf4] border-[#eedec9]'
                  }`}
                >
                  {isCopied ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </EvidenceCard>
  );
};
