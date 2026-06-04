'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [telemetry, setTelemetry] = useState('0xA1B2');

  const navLinks = [
    { id: '01', name: 'Home', href: '#' },
    { id: '02', name: 'Services', href: '#' },
    { id: '03', name: 'Portfolio', href: '#' },
    { id: '04', name: 'About Us', href: '#' },
  ];

  // Simulates the live data stream for the technical HUD aesthetic
  useEffect(() => {
    const interval = setInterval(() => {
      const hash = Math.random().toString(16).substring(2, 6).toUpperCase();
      setTelemetry(`0x${hash}`);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Prevent background scrolling when mobile overlay is active
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  style={{
    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.35))',
  }}
  className="fixed top-0 left-0 w-full z-50 pointer-events-none"
>
        {/* MAIN COMMAND INTERFACE CONTAINER */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          
          {/* PANEL 1: Brand & Logo (Left) */}
{/* PANEL 1: Brand & Logo (Left) */}
<div className="flex items-center gap-3 sm:gap-4 pointer-events-auto bg-[#0a0202]/95 backdrop-blur-2xl border border-white/15 pr-4 sm:pr-6 pl-2 py-2 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.45)] relative group cursor-pointer">
  {/* Corner Crosshairs */}
  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500/50" />
  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500/50" />
  
  {/* LOGO CONTAINER */}
  <div className="relative w-15 h-12 sm:w-14 sm:h-12 flex items-center justify-center">
    <img 
      src="/logo1.png" // Ensure your logo is in the public folder
      alt="MasterMind Logo" 
      className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]"
    />
  </div>
  
</div>

          {/* PANEL 2: Advanced Indexed Navigation (Center - Desktop Only) */}
          <nav className="hidden lg:flex items-center gap-1 pointer-events-auto bg-[#050101]/95 backdrop-blur-2xl border border-white/10 px-2 py-1 rounded-md shadow-[0_8px_32px_rgba(0,0,0,0.45)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 pointer-events-none" />
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-5 py-3 group flex items-center gap-2"
              >
                {/* Index Number */}
                <span className={`text-[9px] font-mono tracking-widest transition-colors duration-300 ${hoveredIndex === index ? 'text-red-500' : 'text-zinc-500'}`}>
                  {link.id} <span className="text-zinc-700">//</span>
                </span>
                
                {/* Link Text */}
                <span className={`relative z-10 text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-zinc-200'}`}>
                  {link.name}
                </span>

                {/* Advanced Animated Brackets on Hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hoveredIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-1/2 left-1 -translate-y-1/2 w-1.5 h-3 border-l-2 border-y-2 border-red-600 opacity-80" />
                  <div className="absolute top-1/2 right-1 -translate-y-1/2 w-1.5 h-3 border-r-2 border-y-2 border-red-600 opacity-80" />
                  <div className="absolute inset-0 bg-red-600/10 rounded-sm -z-10 shadow-[0_0_20px_rgba(220,38,38,0.25)]" />
                </motion.div>
              </a>
            ))}
          </nav>

          {/* PANEL 3: Controls Area (CTA & Mobile Menu Trigger) */}
          <div className="pointer-events-auto flex items-center gap-3 sm:gap-4">
            
            {/* Action CTA Button (Hidden on Small Mobile) */}
            <button 
              className="hidden min-[450px]:flex relative group bg-white text-black px-6 sm:px-8 py-3 flex items-center gap-3 overflow-hidden transition-all duration-300 hover:bg-zinc-200 shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(220,38,38,0.45)]"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)' }}
            >
              <div className="absolute inset-0 bg-red-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10 text-[9px] sm:text-[10px] font-black tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-300">
                Initialize
              </span>
              <svg 
                className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 group-hover:text-white transform group-hover:rotate-90 transition-all duration-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 4v4m0 8v4m8-8h-4M4 12h4m11.314-7.071l-2.829 2.828M5.515 18.364l2.828-2.829m11.314 0l-2.829-2.829M5.515 5.657l2.828 2.829" />
              </svg>
            </button>

            {/* Mobile Toggle Burger Button (Visible under lg) */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden relative h-9 w-12 sm:w-14 bg-[#0a0202]/95 backdrop-blur-xl border border-white/20 rounded-md flex items-center justify-center overflow-hidden group active:border-red-500/50 shadow-[0_0_20px_rgba(0,0,0,0.35)]"
            >
              <div className="flex flex-col gap-1.5 w-5 z-10">
                <motion.span 
                  animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} 
                  className="w-full h-0.5 bg-white block transition-all"
                />
                <motion.span 
                  animate={isMobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }} 
                  className="w-[75%] h-0.5 bg-red-500 block transition-all ml-auto"
                />
                <motion.span 
                  animate={isMobileOpen ? { rotate: -45, y: -4, width: '100%' } : { rotate: 0, y: 0 }} 
                  className="w-full h-0.5 bg-white block transition-all"
                />
              </div>
            </button>

          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY TERMINAL */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#050101]/95 backdrop-blur-2xl border-b border-red-900/20 flex flex-col justify-center items-center lg:hidden px-6"
          >
            {/* Tech Mesh Backdrop Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

            <nav className="flex flex-col items-center gap-4 w-full max-w-xs relative z-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * index, duration: 0.3 }}
                  onClick={() => setIsMobileOpen(false)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative w-full h-14 bg-white/[0.01] border border-white/5 rounded-lg flex items-center justify-between px-6 group transition-colors duration-300 hover:border-red-500/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] text-zinc-600 group-hover:text-red-500 transition-colors">
                      {link.id} //
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                  </div>

                  {/* Micro Tech Brackets inside Mobile Link Row */}
                  <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity gap-1 text-red-500 font-mono text-xs">
                    <span>[</span><span className="w-1 h-1 bg-red-500 rounded-full animate-pulse" /><span>]</span>
                  </div>
                </motion.a>
              ))}

              {/* Action Button inside mobile drawer menu */}
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="group mt-6 relative w-full h-14 bg-white text-black font-black text-[10px] tracking-[0.25em] uppercase flex items-center justify-center gap-3 overflow-hidden transition-all duration-300"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 92% 100%, 0 100%)' }}
              >
                <div className="absolute inset-0 bg-red-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 group-hover:text-white transition-colors">INITIALIZE MATRIX</span>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}