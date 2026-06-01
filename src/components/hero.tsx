'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import FloatingCubes3D from './AgenticCore3D'; 

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function HeroSection() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const audio = new Audio('/greeting.mp3');
    audio.volume = 1.0;
    audioRef.current = audio;

    audio.onplay = () => setIsSpeaking(true);
    audio.onended = () => setIsSpeaking(false);
    audio.onerror = () => setIsSpeaking(false);

    const playAudio = () => {
      audio.play().catch(() => {});
      window.removeEventListener('click', playAudio);
    };
    window.addEventListener('click', playAudio);

    return () => window.removeEventListener('click', playAudio);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#050000] text-white flex flex-col justify-between overflow-hidden font-sans selection:bg-red-600/30">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Massive Red Glow anchored to the bottom right */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[70%] bg-[#cc0000] blur-[150px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute bottom-0 right-[5%] w-[60%] h-[50%] bg-[#800000] blur-[120px] rounded-full mix-blend-screen opacity-50" />

        {/* Technical Grid: Fades out on the top left, visible over the red glow */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to top right, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 80%)',
            WebkitMaskImage: 'linear-gradient(to top right, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 80%)'
          }}
        />
      </div>

      {/* --- FULL SCREEN 3D CUBES --- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
         <div className="w-full h-full pointer-events-auto">
            <FloatingCubes3D isActive={isSpeaking} />
         </div>
      </div>

      {/* --- FOREGROUND UI CONTENT --- */}
      <div className="relative z-20 flex flex-col min-h-screen pointer-events-none">
        


        {/* --- MAIN LEFT TEXT AREA --- */}
        <div className="w-full max-w-7xl mx-auto px-8 flex-1 flex items-center">
          
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="relative flex flex-col text-left max-w-[550px] pointer-events-auto mt-[-5vh]">
            
            {/* Top Right HUD Bracket */}
            <div className="absolute top-[-20px] right-[40%] w-4 h-4 border-t border-r border-white/20" />


            
            {/* Exact Gradient Typography */}
            <motion.h1 variants={itemVariants} className="text-[4.5rem] md:text-[5.5rem] font-medium tracking-tight leading-[0.95] mb-8">
              <span className="text-white">Elevate your</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-300 to-zinc-600">
                digital <br /> framework.
              </span>
            </motion.h1>
            
            {/* Dark Box Paragraph with Red Border */}
            <motion.p variants={itemVariants} className="text-zinc-400 text-base font-light leading-relaxed max-w-[420px] border-l-2 border-red-600 pl-5 bg-[#0a0202] py-5 pr-4 rounded-r-xl mb-8">
              Architecting intelligent web products and automated execution modules engineered for supreme scalability.
            </motion.p>
            
            {/* Dark Red Bordered Input Form */}
            <motion.form variants={itemVariants} onSubmit={(e) => e.preventDefault()} className="w-full max-w-[420px] relative">
              
              {/* Bottom Left HUD Bracket */}
              <div className="absolute bottom-[-15px] left-[50px] w-4 h-4 border-b border-l border-white/20" />

              {/* Red Gradient Outline Wrapper */}
              <div className="p-[1px] bg-gradient-to-b from-red-800 to-red-950/20 rounded-xl shadow-2xl">
                <div className="flex w-full items-center bg-[#070101] p-1.5 rounded-xl">
                  <input 
                    type="email" 
                    placeholder="Initialize access sequence..." 
                    className="bg-transparent flex-1 outline-none border-none text-xs px-4 text-zinc-400 placeholder:text-zinc-600 font-mono tracking-wide"
                  />
                  <button className="px-6 py-3.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.15em] rounded-lg hover:bg-zinc-200 transition-colors duration-300">
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