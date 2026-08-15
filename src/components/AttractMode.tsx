import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye } from 'lucide-react';

export const AttractMode: React.FC = () => {
  const [isAttractActive, setIsAttractActive] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      setIsAttractActive(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsAttractActive(true);
      }, 15000); // 15 seconds idle trigger for booth showcase
    };

    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'];
    events.forEach((evt) => window.addEventListener(evt, resetTimer, { passive: true }));

    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      events.forEach((evt) => window.removeEventListener(evt, resetTimer));
    };
  }, []);

  return (
    <AnimatePresence>
      {isAttractActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 pointer-events-none z-40 flex items-end justify-center pb-12 overflow-hidden"
        >
          {/* Sweeping Forensic Searchlight */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#9e232f]/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Interactive Floating Prompt for LifeCon Passersby */}
          <motion.div
            animate={{
              y: [-4, 4, -4],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="bg-[#5a1017]/95 text-[#fcfaf4] px-6 py-3 rounded-full border-2 border-[#9e232f] shadow-[0_0_24px_rgba(158,35,47,0.7)] flex items-center gap-3 backdrop-blur-md pointer-events-auto cursor-pointer"
            onClick={() => setIsAttractActive(false)}
          >
            <Eye className="w-5 h-5 text-red-300 animate-pulse" />
            <span className="font-mono text-sm tracking-wider font-bold uppercase">
              🚨 Tap or Move Cursor to Investigate
            </span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
