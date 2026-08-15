import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Search } from 'lucide-react';

type AttractState = 'dormant' | 'active' | 'snapping';

export const AttractMode: React.FC = () => {
  const [attractState, setAttractState] = useState<AttractState>('dormant');
  const [cursorTarget, setCursorTarget] = useState<{ x: number | string; y: number | string }>({
    x: '50%',
    y: '50%',
  });

  const stateRef = useRef<AttractState>('dormant');
  stateRef.current = attractState;

  useEffect(() => {
    let idleTimeoutId: ReturnType<typeof setTimeout>;
    let snapTimeoutId: ReturnType<typeof setTimeout>;

    const startIdleTimer = () => {
      clearTimeout(idleTimeoutId);
      idleTimeoutId = setTimeout(() => {
        setAttractState('active');
      }, 15000); // 15 seconds of inactivity triggers attract mode
    };

    const handleInteraction = (evt: Event) => {
      const currentState = stateRef.current;

      // Extract interaction coordinates
      let x: number | string = window.innerWidth / 2;
      let y: number | string = window.innerHeight / 2;

      if (evt instanceof MouseEvent) {
        x = evt.clientX;
        y = evt.clientY;
      } else if (window.TouchEvent && evt instanceof TouchEvent && evt.touches.length > 0) {
        x = evt.touches[0].clientX;
        y = evt.touches[0].clientY;
      }

      if (currentState === 'active') {
        // Begin smooth glide towards cursor and trigger dissipation
        setCursorTarget({ x, y });
        setAttractState('snapping');

        clearTimeout(snapTimeoutId);
        snapTimeoutId = setTimeout(() => {
          setAttractState('dormant');
          startIdleTimer();
        }, 750);
      } else if (currentState === 'snapping' && evt instanceof MouseEvent) {
        // Dynamically home in on mouse if it continues moving
        setCursorTarget({ x, y });
      } else if (currentState === 'dormant') {
        startIdleTimer();
      }
    };

    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    events.forEach((evt) => window.addEventListener(evt, handleInteraction, { passive: true }));

    startIdleTimer();

    return () => {
      clearTimeout(idleTimeoutId);
      clearTimeout(snapTimeoutId);
      events.forEach((evt) => window.removeEventListener(evt, handleInteraction));
    };
  }, []);

  const isVisible = attractState === 'active' || attractState === 'snapping';
  const isSnapping = attractState === 'snapping';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSnapping ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: isSnapping ? 0.7 : 0.8, ease: 'easeOut' }}
          className="fixed inset-0 pointer-events-none z-40 flex items-end justify-center pb-6 sm:pb-8 overflow-hidden"
        >
          {/* Detective's Flashlight: Wanders when idle, smoothly glides to cursor & blooms on arrival */}
          <motion.div
            className="absolute rounded-full pointer-events-none w-72 h-72 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px] -translate-x-1/2 -translate-y-1/2"
            style={{
              boxShadow: `
                0 0 0 9999px rgba(6, 7, 10, 0.91),
                0 0 80px 40px rgba(6, 7, 10, 0.91),
                inset 0 0 60px 20px rgba(255, 248, 220, 0.14),
                0 0 45px rgba(255, 242, 195, 0.22)
              `,
            }}
            animate={
              isSnapping
                ? {
                    left: cursorTarget.x,
                    top: cursorTarget.y,
                    scale: [1, 1.04, 1.3],
                    opacity: [1, 1, 0],
                  }
                : {
                    left: ['22%', '72%', '30%', '78%', '20%', '55%', '22%'],
                    top: ['28%', '32%', '72%', '78%', '50%', '22%', '28%'],
                    scale: [1, 1.07, 0.96, 1.05, 0.98, 1.04, 1],
                    opacity: 1,
                  }
            }
            transition={
              isSnapping
                ? {
                    left: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
                    top: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
                    scale: { duration: 0.72, times: [0, 0.6, 1], ease: 'easeOut' },
                    opacity: { duration: 0.72, times: [0, 0.55, 1], ease: 'easeOut' },
                  }
                : {
                    duration: 22,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
          >
            {/* Flashlight Optical Ring & Pulse Lens Flare */}
            <div className="w-full h-full rounded-full border border-[#fcfaf4]/15 bg-[radial-gradient(circle,rgba(255,250,230,0.08)_0%,transparent_75%)] pointer-events-none" />
          </motion.div>

          {/* Interactive Floating Prompt for LifeCon Booth Passersby */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isSnapping ? 20 : [-3, 3, -3],
              opacity: isSnapping ? 0 : 1,
              scale: isSnapping ? 0.92 : [1, 1.02, 1],
            }}
            exit={{ y: 20, opacity: 0 }}
            transition={{
              y: { duration: isSnapping ? 0.4 : 2.5, repeat: isSnapping ? 0 : Infinity, ease: 'easeInOut' },
              scale: { duration: isSnapping ? 0.4 : 2.5, repeat: isSnapping ? 0 : Infinity, ease: 'easeInOut' },
              opacity: { duration: isSnapping ? 0.4 : 0.4 },
            }}
            className="bg-[#5a1017]/95 text-[#fcfaf4] px-6 py-3 rounded-full border-2 border-[#9e232f] shadow-[0_0_30px_rgba(158,35,47,0.75)] flex items-center gap-3 backdrop-blur-md pointer-events-auto cursor-pointer select-none"
            onClick={(e) => {
              setCursorTarget({ x: e.clientX, y: e.clientY });
              setAttractState('snapping');
              setTimeout(() => setAttractState('dormant'), 750);
            }}
          >
            <Search className="w-5 h-5 text-amber-300 animate-pulse" />
            <span className="font-mono text-xs sm:text-sm tracking-wider font-bold uppercase">
              🔦 Flashlight Active • Move Cursor to Investigate
            </span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


