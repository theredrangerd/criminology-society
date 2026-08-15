import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { audio } from '../utils/audio';

export const SoundToggle: React.FC = () => {
  const [muted, setMuted] = useState<boolean>(audio.getMutedState());

  const handleToggle = () => {
    const newState = audio.toggleMute();
    setMuted(newState);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={muted ? 'Unmute forensic audio' : 'Mute forensic audio'}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#090a0d]/80 backdrop-blur-md border border-[#7e1923]/40 text-[#eedec9] hover:border-[#9e232f] hover:text-[#fff] transition-all shadow-lg"
    >
      {muted ? (
        <>
          <VolumeX className="w-4 h-4 text-[#8692a1]" />
          <span className="font-mono text-xs text-[#8692a1] uppercase">AUDIO: OFF</span>
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 text-[#9e232f]" />
          <span className="font-mono text-xs text-[#eedec9] uppercase">AUDIO: ON</span>
        </>
      )}
    </button>
  );
};
