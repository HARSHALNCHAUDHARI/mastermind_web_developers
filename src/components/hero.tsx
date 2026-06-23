'use client';

import { motion, type Variants } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import FloatingServiceCubes from './floating3d';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function HeroSection() {
  const [isSpeaking, setIsSpeaking] = useState(false);

const audioRef = useRef<HTMLAudioElement | null>(null);
const sectionRef = useRef<HTMLElement | null>(null);
const hasPlayedRef = useRef(false);

useEffect(() => {
  if (typeof window === "undefined") return;

  const audio = new Audio("/greeting.mp3");
  audio.volume = 1;

  audioRef.current = audio;

  audio.onplay = () => setIsSpeaking(true);
  audio.onended = () => setIsSpeaking(false);

  const playGreeting = () => {
    if (hasPlayedRef.current) return;

    const rect = sectionRef.current?.getBoundingClientRect();

    const heroVisible =
      rect &&
      rect.top < window.innerHeight &&
      rect.bottom > 0;

    if (heroVisible) {
      hasPlayedRef.current = true;
      audio.play().catch(console.error);
    }
  };

  window.addEventListener("pointerdown", playGreeting, {
    once: true,
  });

  return () => {
    window.removeEventListener("pointerdown", playGreeting);
  };
}, []);

  return (
    <section
  ref={sectionRef}
  className="relative min-h-[100svh] w-full bg-[#050000] text-white flex flex-col justify-between overflow-hidden font-sans selection:bg-red-600/30"
>
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* --- NEW TECHNICAL FADED BACKGROUND IMAGE --- */}
        <div 
          className="absolute inset-0 opacity-[0.12] grayscale mix-blend-screen"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top left',
            /* Mask fades the image completely out before reaching the bottom-right red area */
            maskImage: 'linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 55%)',
            WebkitMaskImage: 'linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 55%)'
          }}
        />

        <div className="absolute bottom-[-10%] right-[-20%] md:bottom-[-20%] md:right-[-10%] w-[120%] md:w-[80%] h-[60%] md:h-[70%] bg-[#cc0000] blur-[100px] md:blur-[150px] rounded-full mix-blend-screen opacity-30 md:opacity-30" />
        <div className="absolute bottom-0 right-[-10%] md:right-[5%] w-[100%] md:w-[60%] h-[40%] md:h-[50%] bg-[#800000] blur-[90px] md:blur-[120px] rounded-full mix-blend-screen opacity-40 md:opacity-50" />

        <div 
          className="absolute inset-0 opacity-15 md:opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: 'clamp(30px, 8vw, 60px) clamp(30px, 8vw, 60px)',
            maskImage: 'linear-gradient(to top right, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 90%)',
            WebkitMaskImage: 'linear-gradient(to top right, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 90%)'
          }}
        />
      </div>

      {/* --- FULL SCREEN 3D CUBES --- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
         <div className="w-full h-full pointer-events-auto">
            <FloatingServiceCubes isActive={isSpeaking} />
         </div>
      </div>

      {/* --- FOREGROUND UI CONTENT --- */}
      <div className="relative z-20 flex flex-col min-h-[100svh] pointer-events-none">

        {/* --- MAIN LEFT TEXT AREA --- */}
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 flex-1 flex items-center justify-center lg:justify-start pt-[12vh] md:pt-0">
          
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative flex flex-col text-left w-full max-w-[100%] sm:max-w-[85%] md:max-w-[550px] pointer-events-auto mt-0 lg:mt-[-5vh]">
            
            <div className="hidden sm:block absolute top-[-20px] right-[10%] md:right-[40%] w-4 h-4 border-t border-r border-white/20" />
            
            <motion.h1 variants={itemVariants} className="text-[2.85rem] min-[400px]:text-[3.75rem] sm:text-[4.5rem] md:text-[5.5rem] font-medium tracking-tight leading-[1.05] md:leading-[0.95] mb-6 min-[400px]:mb-8">
              <span className="text-white">Elevate your</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-300 to-zinc-600">
                digital <br className="md:hidden" /> framework.
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-zinc-400 text-[13px] min-[400px]:text-sm sm:text-base md:text-lg font-light leading-relaxed w-full border-l-[2px] min-[400px]:border-l-[3px] border-red-600 pl-4 min-[400px]:pl-5 bg-[#0a0202]/90 backdrop-blur-sm py-4 min-[400px]:py-5 pr-4 rounded-r-xl mb-8 min-[400px]:mb-10">
              Architecting intelligent web products and automated execution modules engineered for supreme scalability.
            </motion.p>
            
            <motion.form variants={itemVariants} onSubmit={(e) => e.preventDefault()} className="w-full max-w-[100%] md:max-w-[460px] relative">
              
              <div className="absolute bottom-[-10px] md:bottom-[-20px] left-[30px] md:left-[50px] w-4 h-4 border-b border-l border-white/20" />

              <div className="p-[1px] min-[400px]:p-[2px] bg-gradient-to-b from-red-800 to-red-950/20 rounded-xl shadow-2xl">
                <div className="flex w-full items-center bg-[#070101] p-1.5 rounded-xl">
                  <input 
                    type="email" 
                    placeholder="Initialize sequence..." 
                    className="bg-transparent flex-1 outline-none border-none text-[11px] min-[400px]:text-xs sm:text-sm px-3 min-[400px]:px-4 py-1.5 min-[400px]:py-2 text-zinc-300 placeholder:text-zinc-600 font-mono tracking-wide w-full min-w-0"
                  />
                  <button className="px-3 min-[400px]:px-6 sm:px-8 py-3 min-[400px]:py-4 bg-white text-black text-[9px] min-[400px]:text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] rounded-lg hover:bg-zinc-200 transition-colors duration-300 whitespace-nowrap flex-shrink-0">
                    INITIALIZE
                  </button>
                </div>
              </div>
            </motion.form>

          </motion.div>
        </div>

      </div>
    </section>
  );
}