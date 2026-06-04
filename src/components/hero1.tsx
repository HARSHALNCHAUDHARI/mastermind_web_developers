'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import FloatingServiceCubes from './floating3d';

export default function HeroSection() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="relative min-h-[100svh] w-full bg-[#f4f5f7] text-zinc-900 flex items-center overflow-hidden font-space selection:bg-red-600 selection:text-white">
      
      {/* 1. LAYERED ARCHITECTURAL BACKGROUND WITH FADED IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center bg-[#f4f5f7]">
        
        {/* Abstract Background Image */}
        <div 
          className="absolute inset-0 opacity-[0.25] mix-blend-multiply transition-opacity duration-1000"
          style={{
            // Clean, abstract white/grey topological architecture image
            backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=3000&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Gradient Fades (Masks the image so text stays perfectly readable) */}
        {/* Fades out the left side for the main typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f5f7] via-[#f4f5f7]/60 to-transparent z-0" />
        {/* Fades out the bottom for the terminal input */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4f5f7] via-[#f4f5f7]/40 to-transparent z-0" />

        {/* Soft Ambient Light Bleed */}
        <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-zinc-300/40 blur-[120px] rounded-full z-10" />
        <div className="absolute bottom-[20%] left-[20%] w-[30vw] h-[30vw] bg-red-200/20 blur-[100px] rounded-full z-10" />

        {/* Isometric 3D Grid Overlay (The 'Technical Element') */}
        <div 
          className="absolute w-[200vw] h-[200vw] opacity-[0.35] z-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.6) 1px, transparent 1px), 
              linear-gradient(90deg, rgba(148, 163, 184, 0.6) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'rotateX(60deg) rotateZ(-45deg) translateY(-20%)',
            transformOrigin: 'center center',
          }}
        />
      </div>

      {/* 2. THE 3D SERVICE CUBES */}
      <div className="absolute right-[-5%] top-0 bottom-0 w-full lg:w-[65%] z-10 pointer-events-none">
         <FloatingServiceCubes isActive={isFocused} />
      </div>

      {/* 3. FOREGROUND CONTENT */}
      <div className="relative z-30 w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-20 pt-[8vh] pointer-events-none">
        <div className="relative flex flex-col w-full max-w-[100%] lg:max-w-[750px] pointer-events-auto">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-8 inline-flex"
          >
            <div className="bg-white/40 backdrop-blur-md border border-zinc-300/80 rounded-full px-5 py-2 flex items-center gap-3 shadow-sm">
              <span className="text-zinc-900 font-bold tracking-widest text-[14px]">/</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-800 font-space pt-0.5">
                Digital Engineering & Growth
              </span>
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 mb-8"
          >
            <h1 className="font-clash text-[clamp(4.5rem,7.5vw,9rem)] font-black tracking-tighter leading-[0.88] uppercase">
              <span className="block text-zinc-900 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)] bg-clip-text text-transparent bg-gradient-to-b from-zinc-700 to-black">
                Build Fast.
              </span>
              <span className="block text-red-600 drop-shadow-[0_4px_4px_rgba(220,38,38,0.2)]">
                Scale Faster.
              </span>
            </h1>
          </motion.div>
          
          {/* Subtext */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14 pl-6 border-l-[3.5px] border-red-600/80"
          >
            <p className="text-zinc-700 text-[18px] sm:text-[20px] font-medium leading-relaxed font-space max-w-[85%] drop-shadow-sm">
              We engineer unique, data-driven web products and accelerate their reach. From complex front-end architectures to high-converting digital marketing campaigns.
            </p>
          </motion.div>
          
          {/* Dark Glassmorphism Terminal */}
          <motion.form 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={(e) => e.preventDefault()} 
            className="w-full relative z-20 max-w-[550px]"
          >
            <div 
              className={`relative flex w-full items-center bg-[#111113]/90 backdrop-blur-xl rounded-2xl p-2 pl-6 transition-all duration-300 shadow-2xl border ${
                isFocused ? 'border-red-500/50 ring-4 ring-red-500/10' : 'border-white/10'
              }`}
            >
              <div className="mr-3 text-red-500 font-bold text-[13px] tracking-widest font-mono">
                INIT_
              </div>

              <input 
                type="text" 
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Start your project sequence..." 
                className="bg-transparent flex-1 outline-none border-none text-[15px] px-2 py-4 text-zinc-200 placeholder:text-zinc-500 font-space font-medium w-full min-w-0"
              />
              
              <button className="relative overflow-hidden px-8 py-4 bg-gradient-to-b from-[#2a2a2e] to-[#161618] border border-white/10 text-white text-[12px] font-bold uppercase tracking-[0.2em] rounded-xl flex items-center gap-3 hover:from-[#3a3a3e] hover:to-[#262628] transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group">
                <span>Launch</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.form>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700,800&display=swap');
        .font-clash { font-family: 'Clash Display', sans-serif; }
        .font-space { font-family: 'Space Grotesk', sans-serif; }
      `}} />
    </section>
  );
}