'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<'revealing' | 'exiting'>('revealing');

  useEffect(() => {
    // REDUCED HOLD TIME: Triggers the exit slide much earlier (1.8s instead of 2.5s)
    const exitTimer = setTimeout(() => {
      setPhase('exiting');
    }, 1800);

    // REDUCED UNMOUNT TIME: Unmounts as soon as the 1.2s exit slide finishes (1.8s + 1.2s = 3.0s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div 
      animate={phase === 'exiting' ? { y: '-100svh', borderRadius: '0 0 40px 40px' } : { y: 0, borderRadius: '0px' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
      className="fixed inset-0 h-[100svh] w-full bg-[#050000] z-[999] flex flex-col items-center justify-center overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,1)]"
    >
      
      {/* BACKGROUND PLASMA LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-red-900/20 blur-[80px] sm:blur-[120px] rounded-full transform-gpu" 
        />
      </div>

      {/* TYPOGRAPHY SEQUENCE CORE */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4 max-w-4xl select-none">
        
        {/* Main Logo Container */}
        <div className="flex items-center justify-center w-full overflow-visible">
          {/* The Red 'M' Slam */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,13vw,7.5rem)] font-black text-red-600 leading-none tracking-tighter flex-shrink-0"
          >
            M
          </motion.div>

          {/* The ASTERMIND Expansion */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            // REDUCED DELAY: Triggers immediately after the M starts (0.2s instead of 0.5s)
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden flex items-center"
          >
            {/* Fluid typography mapping constraints */}
            <span className="text-[clamp(2.5rem,13vw,7.5rem)] font-black text-white whitespace-nowrap leading-none tracking-tighter pl-0.5 min-[400px]:pl-1 md:pl-2">
              ASTERMIND
            </span>
          </motion.div>
        </div>

        {/* WEB DEVELOPERS Subtitle Drop */}
        <motion.div
          initial={{ opacity: 0, y: 15, letterSpacing: '0em', filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.25em', filter: 'blur(0px)' }}
          // REDUCED DELAY: Drops in right as the word finishes expanding (0.5s instead of 1.0s)
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-zinc-200 font-bold text-[clamp(10px,2.5vw,18px)] uppercase mt-3 sm:mt-5 text-center whitespace-nowrap tracking-[0.2em] sm:tracking-[0.3em]"
        >
          Web Developers
        </motion.div>

      </div>

    </motion.div>
  );
}