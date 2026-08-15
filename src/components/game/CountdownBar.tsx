import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, AlertTriangle } from 'lucide-react';

interface CountdownBarProps {
  timeLeft: number;       // seconds remaining (0–15)
  totalTime?: number;     // total duration in seconds
  expired: boolean;       // true once timer hits 0
}

const TOTAL = 15;

export const CountdownBar: React.FC<CountdownBarProps> = ({
  timeLeft,
  totalTime = TOTAL,
  expired,
}) => {
  const fraction = Math.max(0, timeLeft / totalTime);
  const isUrgent = timeLeft <= 5 && !expired;

  return (
    <div className="space-y-1.5 w-full">
      {/* Label row */}
      <div className="flex items-center justify-between px-0.5">
        <div className="flex items-center gap-1.5">
          <AnimatePresence mode="wait">
            {expired ? (
              <motion.div
                key="alarm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, rotate: [-3, 3, -3, 3, 0] }}
                transition={{ rotate: { duration: 0.4, repeat: Infinity, repeatType: 'loop' } }}
              >
                <AlertTriangle className="w-3.5 h-3.5 text-[#7e1923]" />
              </motion.div>
            ) : (
              <motion.div key="timer">
                <Timer className={`w-3.5 h-3.5 ${isUrgent ? 'text-[#9e232f]' : 'text-[#8692a1]'}`} />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {expired ? (
              <motion.span
                key="expired-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7e1923]"
              >
                ⚠ Time Expired — Choose Now!
              </motion.span>
            ) : (
              <motion.span
                key="timer-label"
                className={`font-mono text-[10px] uppercase tracking-widest font-bold ${
                  isUrgent ? 'text-[#9e232f]' : 'text-[#8692a1]'
                }`}
              >
                Time Remaining
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Countdown number */}
        <AnimatePresence mode="wait">
          <motion.span
            key={timeLeft}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className={`font-mono text-sm font-bold tabular-nums ${
              expired
                ? 'text-[#7e1923]'
                : isUrgent
                ? 'text-[#9e232f]'
                : 'text-[#8692a1]'
            }`}
          >
            {expired ? '0s' : `${timeLeft}s`}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bar track */}
      <div className="h-2 w-full rounded-full bg-[#7e1923]/15 overflow-hidden">
        <motion.div
          className={[
            'h-full rounded-full origin-left',
            expired
              ? 'bg-[#7e1923]'
              : isUrgent
              ? 'bg-gradient-to-r from-[#7e1923] to-[#9e232f]'
              : 'bg-gradient-to-r from-[#5a1017] to-[#7e1923]',
          ].join(' ')}
          animate={{
            scaleX: fraction,
            opacity: expired ? [1, 0.5, 1] : 1,
          }}
          transition={
            expired
              ? { opacity: { duration: 0.5, repeat: Infinity }, scaleX: { duration: 0 } }
              : { scaleX: { duration: 0.9, ease: 'linear' } }
          }
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </div>
  );
};
