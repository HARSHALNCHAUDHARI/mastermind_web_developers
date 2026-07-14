'use client';

import { motion, Variants } from 'framer-motion';
import FloatingServiceCubes from './floating3d';

// --- Animation Variants ---
const fadeUpSpring: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', mass: 0.8, stiffness: 80, damping: 20 } 
  }
};

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full bg-[#FAFAFC] text-zinc-950 flex items-center overflow-hidden font-jakarta selection:bg-red-600 selection:text-white">
      
      {/* 1. LAYERED BACKGROUND: Minimalist Tech Grid & Soft Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Crisp subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.25] z-10"
          style={{
            backgroundImage: `linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 80% 80% at 30% 50%, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 30% 50%, black 20%, transparent 100%)',
          }}
        />

        {/* Ambient Soft Glows for depth */}
        <div className="absolute top-[-10%] right-[10%] w-[60vw] h-[60vw] bg-white/60 blur-[120px] rounded-full z-0" />
        <div className="absolute bottom-[0%] left-[-10%] w-[50vw] h-[50vw] bg-red-50/50 blur-[100px] rounded-full z-0" />
      </div>

      {/* 2. THE 3D SERVICE CUBES */}
      <div className="absolute right-[-15%] md:right-[-5%] top-0 bottom-0 w-[130%] md:w-full lg:w-[55%] z-20 pointer-events-none">
         {/* Ensure your FloatingServiceCubes component handles its own internal layout */}
         <FloatingServiceCubes isActive={false} />
      </div>

      {/* 3. FOREGROUND CONTENT */}
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-[8vh] pb-[4vh] pointer-events-none">
        
        <motion.div 
          variants={containerStagger}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col w-full max-w-[100%] lg:max-w-[720px] pointer-events-auto"
        >
          
          {/* Subtle Overline */}
          <motion.div variants={fadeUpSpring} className="mb-6">
            <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-[12px] flex items-center gap-3">
              <span className="w-8 h-[2px] bg-red-600 rounded-full" />
              Digital Engineering & Growth
            </span>
          </motion.div>

          {/* Redesigned Typography: Cabinet Grotesk for maximum impact */}
          <motion.div variants={fadeUpSpring} className="relative z-10 mb-8">
            <h1 className="font-cabinet text-[clamp(3.5rem,7.5vw,7.5rem)] font-black tracking-[-0.03em] leading-[0.9] text-zinc-900">
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-600">Fast.</span>
              <br />
              Scale <span className="text-red-600 relative inline-block">
                Faster.
                {/* Subtle underline stroke accent under 'Faster' */}
                <svg className="absolute w-full h-[12px] -bottom-[2px] left-0 text-red-200/60 pointer-events-none" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M0 10C50 2 150 2 200 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </motion.div>
          
          {/* Refined Paragraph */}
          <motion.div variants={fadeUpSpring} className="mb-12">
            <p className="text-zinc-500 text-[18px] sm:text-[21px] font-medium leading-[1.6] max-w-[85%]">
              We engineer unique, data-driven web products and accelerate their reach. From complex front-end architectures to high-converting client campaigns.
            </p>
          </motion.div>
          
          {/* New CTAs from Screenshot */}
          <motion.div variants={fadeUpSpring} className="flex flex-wrap items-center gap-4 mb-16">
            <button className="bg-[#09090b] text-white px-8 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2 hover:bg-zinc-800 transition-all duration-300 shadow-xl shadow-zinc-900/10 group">
              Start your project
              <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
            <button className="bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full text-[15px] font-semibold hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-300 shadow-sm">
              View client work
            </button>
          </motion.div>

          {/* Trust & Stats Bar */}
          <motion.div variants={fadeUpSpring} className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-zinc-200/80">
            
            {/* Avatars & Teams */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-zinc-100 border-2 border-white flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder for actual avatar images */}
                    <svg className="w-5 h-5 text-zinc-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                  </div>
                ))}
              </div>
              <div className="text-[14px] text-zinc-500 font-medium tracking-tight">
                <span className="text-zinc-900 font-bold">100+</span> teams shipped
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-[#E11D48]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-[14px] text-zinc-500 font-medium tracking-tight">
                <span className="text-zinc-900 font-bold">4.9</span> avg client rating
              </div>
            </div>

            {/* SOC2 Shield */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#E11D48]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="text-[14px] text-zinc-500 font-medium tracking-tight">
                SOC2-aligned process
              </div>
            </div>

          </motion.div>

        </motion.div>
      </div>

      {/* Font Injections - Cabinet Grotesk for Heading, Plus Jakarta Sans for Body */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        @import url('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,900&display=swap');
        
        .font-cabinet { font-family: 'Cabinet Grotesk', sans-serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}} />
    </section>
  );
}

