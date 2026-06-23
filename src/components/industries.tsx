"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ════════════════════════════════════════
   MINIMALIST GEOMETRIC INDUSTRY LOGOS
════════════════════════════════════════ */
const CrossEmblem = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#E31E24]"><path d="M12 5v14M5 12h14"/></svg>;
const DiamondEmblem = () => <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#0A0A0A] group-hover:text-[#E31E24] transition-colors"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>;
const PillarEmblem = () => <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#0A0A0A] group-hover:text-[#E31E24] transition-colors"><path d="M4 22h16M4 2h16M6 2v20M12 2v20M18 2v20"/></svg>;
const InfiniteEmblem = () => <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#E31E24]"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z"/></svg>;
const CubeEmblem = () => <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#0A0A0A] group-hover:text-[#E31E24] transition-colors"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>;
const HorizonEmblem = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#0A0A0A] group-hover:text-[#E31E24] transition-colors"><path d="M3 21h18M3 10h18M3 14h18M12 3v18"/></svg>;

const trackOne = [
  { name: "Healthcare", logo: <CrossEmblem /> },
  { name: "FinTech", logo: <PillarEmblem /> },
  { name: "E-Commerce", logo: <InfiniteEmblem /> },
  { name: "PropTech", logo: <HorizonEmblem /> },
  { name: "SaaS Ecosystems", logo: <CubeEmblem /> },
  { name: "CyberSecurity", logo: <DiamondEmblem /> },
];

const trackTwo = [
  { name: "Luxury Hospitality", logo: <DiamondEmblem /> },
  { name: "Food & Beverage", logo: <InfiniteEmblem /> },
  { name: "Automotive DTC", logo: <CubeEmblem /> },
  { name: "Entertainment", logo: <CrossEmblem /> },
  { name: "CleanTech", logo: <HorizonEmblem /> },
  { name: "Legal Infrastructure", logo: <PillarEmblem /> },
];

export default function IndustriesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative bg-[#FAFAFA] py-24 md:py-36 overflow-hidden text-[#0A0A0A] select-none">
      
      {/* High-Velocity Pure CSS Marquee Core */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes runwayLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes runwayRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-runway-left {
          display: flex;
          width: max-content;
          animation: runwayLeft 35s linear infinite;
        }
        .animate-runway-right {
          display: flex;
          width: max-content;
          animation: runwayRight 35s linear infinite;
        }
        .runway-wrapper:hover .animate-runway-left,
        .runway-wrapper:hover .animate-runway-right {
          animation-play-state: paused;
        }
      `}} />

      <div className="relative z-10 w-full">
        
        {/* ================= MINIMALIST HEADER ================= */}
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <span className="font-[var(--font-cabinet)] text-xs font-bold uppercase tracking-[0.3em] text-[#E31E24]">
                Capabilities Index
              </span>
              <h2 className="mt-4 font-[var(--font-clash)] text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-[#0A0A0A]">
                Industries we <br />
                coordinate with.
              </h2>
            </div>
            <p className="font-[var(--font-general)] text-base text-[#6B6B6B] max-w-xs md:mb-2">
              Engineered ecosystems deployed seamlessly across complex modern consumer markets.
            </p>
          </motion.div>
        </div>

        {/* ================= THE KINETIC TYPOGRAPHIC RUNWAYS ================= */}
        <div className="runway-wrapper flex flex-col gap-12 md:gap-16 w-full overflow-hidden cursor-default">
          
          {/* STRAP 1: LEFTWARD KINETIC STREAM */}
          <div className="flex w-full overflow-hidden border-y border-black/[0.06] py-6 bg-white">
            <div className="animate-runway-left gap-16 md:gap-24 items-center pr-16 md:pr-24">
              {[...trackOne, ...trackOne, ...trackOne].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-10 md:gap-14 shrink-0 group transition-all duration-300"
                >
                <div className="scale-90 md:scale-100 transition-transform duration-500 group-hover:rotate-45">
                    {item.logo}
                  </div>
                  <span className="font-[var(--font-clash)] text-5xl md:text-7xl font-bold tracking-tighter text-[#0A0A0A] transition-colors group-hover:text-[#E31E24]">
                    {item.name}
                  </span>

                </div>
              ))}
            </div>
          </div>

          {/* STRAP 2: RIGHTWARD KINETIC STREAM */}
          <div className="flex w-full overflow-hidden border-b border-black/[0.06] pb-6">
            <div className="animate-runway-right gap-16 md:gap-24 items-center pr-16 md:pr-24">
              {[...trackTwo, ...trackTwo, ...trackTwo].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-10 md:gap-14 shrink-0 group transition-all duration-300"
                >

                <div className="scale-90 md:scale-100 transition-transform duration-500 group-hover:rotate-45">
                    {item.logo}
                  </div>
                  <span className="font-[var(--font-clash)] text-5xl md:text-7xl font-bold tracking-tighter text-[#0A0A0A] transition-colors group-hover:text-[#E31E24]">
                    {item.name}
                  </span>

                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}