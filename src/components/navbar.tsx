'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [telemetry, setTelemetry] = useState('0xA1B2');

  // Simulates a live data stream for the technical aesthetic
  useEffect(() => {
    const interval = setInterval(() => {
      const hash = Math.random().toString(16).substr(2, 4).toUpperCase();
      setTelemetry(`0x${hash}`);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { id: '01', name: 'Architecture', href: '#' },
    { id: '02', name: 'Systems', href: '#' },
    { id: '03', name: 'Data Models', href: '#' },
    { id: '04', name: 'Deployment', href: '#' },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 pointer-events-none"
    >


      {/* MAIN COMMAND INTERFACE */}
      <div className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* PANEL 1: Brand & Logo (Left) */}
        <div className="flex items-center gap-4 pointer-events-auto bg-[#0a0202]/80 backdrop-blur-xl border border-white/5 pr-6 pl-2 py-2 rounded-lg shadow-2xl relative group cursor-pointer">
          {/* Corner Crosshairs */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500/50" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500/50" />
          
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center rounded-md shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            <span className="text-white font-black text-xl leading-none mt-0.5">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-black tracking-[0.2em] uppercase text-xs text-white">
              MasterMind
            </span>
            <span className="text-[8px] font-mono text-zinc-500 tracking-widest uppercase">
              Digital Frameworks
            </span>
          </div>
        </div>

        {/* PANEL 2: Advanced Indexed Navigation (Center) */}
        <nav className="hidden lg:flex items-center gap-1 pointer-events-auto bg-[#050101]/90 backdrop-blur-xl border-y border-white/5 px-4 py-2">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-5 py-3 group flex items-center gap-2"
            >
              {/* Index Number */}
              <span className={`text-[9px] font-mono tracking-widest transition-colors duration-300 ${hoveredIndex === index ? 'text-red-500' : 'text-zinc-600'}`}>
                {link.id} <span className="text-zinc-700">//</span>
              </span>
              
              {/* Link Text */}
              <span className={`relative z-10 text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-zinc-400'}`}>
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
                <div className="absolute inset-0 bg-red-900/10 rounded-sm -z-10" />
              </motion.div>
            </a>
          ))}
        </nav>

        {/* PANEL 3: Clipped Action Button (Right) */}
        <div className="pointer-events-auto flex items-center gap-4">
          <button 
            className="relative group bg-white text-black px-8 py-3.5 flex items-center gap-3 overflow-hidden transition-all duration-300 hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
            // Using clip-path for that sharp, futuristic angled cut on the bottom right corner
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)' }}
          >
            {/* Red Energy Fill on Hover */}
            <div className="absolute inset-0 bg-red-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            
            <span className="relative z-10 text-[10px] font-black tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-300">
              Initialize
            </span>
            
            {/* Animated Target Icon */}
            <svg 
              className="relative z-10 w-4 h-4 text-red-600 group-hover:text-white transform group-hover:rotate-90 transition-all duration-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 4v4m0 8v4m8-8h-4M4 12h4m11.314-7.071l-2.829 2.828M5.515 18.364l2.828-2.829m11.314 0l-2.829-2.829M5.515 5.657l2.828 2.829" />
            </svg>
          </button>
        </div>

      </div>
    </motion.header>
  );
}