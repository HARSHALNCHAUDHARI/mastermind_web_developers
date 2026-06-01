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
      animate={phase === 'exiting' ? { y: '-100vh', borderRadius: '0 0 50px 50px' } : { y: 0, borderRadius: '0px' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
      className="fixed inset-0 bg-[#050000] z-[999] flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,1)]"
    >
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] bg-red-900/20 blur-[120px] rounded-full" 
        />
      </div>

      {/* TYPOGRAPHY SEQUENCE */}
      <div className="absolute z-20 flex flex-col items-center justify-center w-full">
        
        <div className="flex items-center justify-center">
          {/* The Red 'M' Slam */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Duration kept the same
            className="text-[4rem] sm:text-[6rem] md:text-[7.5rem] font-black text-red-600 leading-none tracking-tighter"
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
            <span className="text-[4rem] sm:text-[6rem] md:text-[7.5rem] font-black text-white whitespace-nowrap leading-none tracking-tighter pr-4">
              ASTERMIND
            </span>
          </motion.div>
        </div>

        {/* WEB DEVELOPERS Drop */}
        <motion.div
          initial={{ opacity: 0, y: 20, letterSpacing: '0em', filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.3em', filter: 'blur(0px)' }}
          // REDUCED DELAY: Drops in right as the word finishes expanding (0.5s instead of 1.0s)
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-bold text-sm sm:text-lg md:text-xl uppercase mt-2 md:mt-4 text-center"
        >
          Web Developers
        </motion.div>

      </div>

    </motion.div>
  );
}