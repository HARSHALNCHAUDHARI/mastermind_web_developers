"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ════════════════════════════════════════
   HIGH-FIDELITY INLINE SVGS
════════════════════════════════════════ */
const MailIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const PhoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const CalendarIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const ArrowRight = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const ShieldIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const ChatIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="10" x2="12" y2="10.01"/></svg>;
const TargetIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const UserInputIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const BuildingIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>;
const EditIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const SendPlaneIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;

// High-fidelity 3D Vector Paper Airplane
const RedPaperPlane = () => (
  <svg width="90" height="90" viewBox="0 0 100 100" fill="none" className="drop-shadow-[0_12px_20px_rgba(227,30,36,0.35)]">
    <path d="M95 15L15 45L40 60L55 90L95 15Z" fill="#FF3B44"/>
    <path d="M95 15L40 60V85L55 90L95 15Z" fill="#D3212A"/>
    <path d="M40 60L55 90V75L40 60Z" fill="#9B141B"/>
  </svg>
);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative bg-[#FAFAFA] py-24 md:py-32 overflow-hidden text-[#0A0A0A]">
      
      {/* Dynamic Font Loader & Airmail Stripe Generator */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');
        .font-handwriting { font-family: 'Caveat', cursive; }
        .airmail-stripes { 
          background-image: repeating-linear-gradient(
            -45deg,
            #FF3B44, #FF3B44 18px,
            transparent 18px, transparent 36px,
            #3B82F6 36px, #3B82F6 54px,
            transparent 54px, transparent 72px
          );
        }
      `}} />

      {/* Faint Background Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#E0E0E0_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />

      <div className="mx-auto max-w-[1500px] px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: HEADERS & CARDS ================= */}
          <div className="flex flex-col gap-8 lg:col-span-5 relative z-30">
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-[#EBEBEB] px-4 py-1.5 shadow-xs mb-6">
                <div className="h-2 w-2 rounded-full bg-[#FF3B44]" />
                <span className="font-[var(--font-general)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#666666]">
                  Let&apos;s Connect
                </span>
              </div>
              
              <h2 className="font-[var(--font-clash)] text-[clamp(2.75rem,4.5vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-[#111111] mb-5">
                Ready to Start <br />
                Your Next{" "}
                <span className="relative inline-block text-[#FF3B44] font-handwriting text-[clamp(3.5rem,5.5vw,5.25rem)] font-bold tracking-normal align-middle leading-[0.6] ml-1">
                  Big Thing?
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF3B44]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M3 8 Q 50 1 97 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              
              <p className="font-[var(--font-general)] text-[#666666] text-base leading-relaxed max-w-md">
                Tell us about your project and our experts will get back to you with the best solution.
              </p>
            </motion.div>

            {/* 3x Stacked Contact Cards */}
            <div className="flex flex-col gap-3.5 max-w-md">
              {[
                { icon: <MailIcon />, title: "Email Us", desc: "hello@yourdomain.com", color: "text-[#FF3B44]", bg: "bg-[#FFF5F5]" },
                { icon: <PhoneIcon />, title: "Call Us", desc: "+1 (234) 567-8900", color: "text-[#10B981]", bg: "bg-[#F0FDF4]" },
                { icon: <CalendarIcon />, title: "Schedule a Meeting", desc: "Book a free consultation", color: "text-[#8B5CF6]", bg: "bg-[#F5F3FF]" },
              ].map((card, i) => (
                <motion.a 
                  href="#" key={i}
                  initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  className="group flex items-center justify-between rounded-[22px] bg-white p-3.5 border border-[#F0F0F0] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-[#E2E2E2] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-13 w-13 items-center justify-center rounded-[16px] ${card.bg} ${card.color} shrink-0 transition-transform group-hover:scale-105`}>
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="font-[var(--font-cabinet)] font-bold text-[#111111] text-base">{card.title}</h4>
                      <p className="font-[var(--font-general)] text-sm text-[#777777]">{card.desc}</p>
                    </div>
                  </div>
                  <div className="text-[#CCCCCC] transition-transform group-hover:translate-x-1 pr-3 group-hover:text-[#FF3B44]">
                    <ArrowRight />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Bottom Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-2 flex items-center gap-5 rounded-[24px] bg-[#FFF9F9] p-4.5 border border-[#FEEDEE] max-w-md relative"
            >
              <div className="flex -space-x-3 shrink-0 pl-1">
                <img className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="Client" />
                <img className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="Client" />
                <img className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" alt="Client" />
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#FF3B44] text-white shadow-sm font-[var(--font-clash)] text-lg font-bold">
                  +
                </div>
              </div>
              <div className="flex flex-col gap-1 pr-1">
                <div className="flex text-[#FBBF24] text-sm tracking-widest select-none font-sans">★★★★★</div>
                <p className="font-[var(--font-general)] text-[12px] text-[#666666] font-medium leading-normal">
                  Trusted by 500+ businesses worldwide to drive growth and results.
                </p>
              </div>

              {/* Loopy Line Origin Anchor */}
              <div className="absolute right-6 -bottom-3 hidden xl:block">
                <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="absolute top-0 left-0 overflow-visible opacity-40">
                  <path d="M 0 0 Q 30 50 80 40 T 150 70" stroke="#FF3B44" strokeWidth="2" strokeDasharray="5 5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: 3D ENVELOPE APPARATUS ================= */}
          <div className="lg:col-span-7 relative w-full max-w-[660px] mx-auto mt-12 lg:mt-0 pt-10 pb-16">
            
            {/* 1. BACKING SLAB (With slanted Airmail perimeter border) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8 }}
              className="absolute bottom-8 left-0 right-0 h-[82%] rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white overflow-hidden z-0 border border-black/[0.04]"
            >
              {/* Airmail Slanted Pattern Strip */}
              <div className="absolute inset-0 airmail-stripes opacity-90" />
              {/* White Inner Cover Slab (Leaves an exact 12px perimeter border) */}
              <div className="absolute inset-[12px] bg-white rounded-[26px] shadow-inner" />
            </motion.div>

            {/* 2. THE PAPER CONTACT FORM (Slides out from inside the pocket) */}
            <motion.div 
              initial={{ y: 120, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.25, type: "spring", bounce: 0.15 }}
              className="relative z-10 mx-7 md:mx-10 bg-white rounded-[26px] shadow-[0_-10px_35px_rgba(0,0,0,0.05)] p-8 md:p-10 border border-[#F0F0F0] mb-20"
            >
              <h3 className="font-[var(--font-clash)] text-2xl font-bold text-[#111111] mb-1.5">Drop us a message</h3>
              <p className="font-[var(--font-general)] text-sm text-[#777777] mb-8">Share your ideas, requirements, or questions and we&apos;ll get back to you soon.</p>

              <form className="space-y-4.5 font-[var(--font-cabinet)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#333333]">Your Name</label>
                    <div className="relative flex items-center">
                      <input type="text" placeholder="Enter your name" className="w-full rounded-xl border border-[#E8E8E8] bg-[#F8F9FA] px-4 py-3 text-sm text-[#111] placeholder:text-[#999] outline-none transition-all focus:border-[#FF3B44] focus:bg-white pr-10 focus:ring-4 focus:ring-[#FF3B44]/10" />
                      <div className="absolute right-3.5 text-[#999999] pointer-events-none"><UserInputIcon /></div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#333333]">Work Email</label>
                    <div className="relative flex items-center">
                      <input type="email" placeholder="Enter your email" className="w-full rounded-xl border border-[#E8E8E8] bg-[#F8F9FA] px-4 py-3 text-sm text-[#111] placeholder:text-[#999] outline-none transition-all focus:border-[#FF3B44] focus:bg-white pr-10 focus:ring-4 focus:ring-[#FF3B44]/10" />
                      <div className="absolute right-3.5 text-[#999999] pointer-events-none"><MailIcon /></div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#333333]">Phone Number</label>
                    <div className="relative flex items-center">
                      <input type="tel" placeholder="Enter your number" className="w-full rounded-xl border border-[#E8E8E8] bg-[#F8F9FA] px-4 py-3 text-sm text-[#111] placeholder:text-[#999] outline-none transition-all focus:border-[#FF3B44] focus:bg-white pr-10 focus:ring-4 focus:ring-[#FF3B44]/10" />
                      <div className="absolute right-3.5 text-[#999999] pointer-events-none"><PhoneIcon /></div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#333333]">Company Name</label>
                    <div className="relative flex items-center">
                      <input type="text" placeholder="Enter company name" className="w-full rounded-xl border border-[#E8E8E8] bg-[#F8F9FA] px-4 py-3 text-sm text-[#111] placeholder:text-[#999] outline-none transition-all focus:border-[#FF3B44] focus:bg-white pr-10 focus:ring-4 focus:ring-[#FF3B44]/10" />
                      <div className="absolute right-3.5 text-[#999999] pointer-events-none"><BuildingIcon /></div>
                    </div>
                  </div>

                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#333333]">What are you looking for?</label>
                  <div className="relative flex items-center">
                    <select className="w-full appearance-none rounded-xl border border-[#E8E8E8] bg-[#F8F9FA] px-4 py-3 text-sm text-[#555555] outline-none transition-all focus:border-[#FF3B44] focus:bg-white focus:ring-4 focus:ring-[#FF3B44]/10 cursor-pointer">
                      <option>Select a service</option>
                      <option>High-Performance Web Development</option>
                      <option>Strategic Digital Marketing</option>
                      <option>Premium UI/UX Brand Design</option>
                    </select>
                    <div className="absolute right-4 text-[#888888] pointer-events-none">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 pb-2">
                  <label className="text-xs font-bold text-[#333333]">Tell us about your project</label>
                  <div className="relative">
                    <textarea placeholder="Write your message..." className="h-24 w-full resize-none rounded-xl border border-[#E8E8E8] bg-[#F8F9FA] p-4 text-sm text-[#111] placeholder:text-[#999] outline-none transition-all focus:border-[#FF3B44] focus:bg-white focus:ring-4 focus:ring-[#FF3B44]/10" />
                    <div className="absolute right-3.5 bottom-4 text-[#AAAAAA] pointer-events-none"><EditIcon /></div>
                  </div>
                </div>
              </form>
            </motion.div>

            {/* 3. FRONT ENVELOPE FLAP (Overlaps the bottom 35% of the white form to create the pocket illusion) */}
            <div className="absolute bottom-8 left-0 right-0 h-[42%] z-20 overflow-hidden rounded-b-[36px] pointer-events-none">
               <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full drop-shadow-[0_-12px_16px_rgba(0,0,0,0.05)]">
                 <path d="M 0 35 L 50 64 L 100 35 L 100 100 L 0 100 Z" fill="#FFFFFF"/>
                 {/* Crease shadow line */}
                 <path d="M 0 35 L 50 64 L 100 35" fill="none" stroke="#F0F0F0" strokeWidth="0.5"/>
               </svg>
            </div>

            {/* ================= FLOATING WIDGETS & DOODLES ================= */}
            
            {/* Tilted Airmail Stamp (Top Left) */}
            <motion.div 
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }} animate={isInView ? { opacity: 1, rotate: -20, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-8 -left-6 md:-left-12 z-30 pointer-events-none select-none"
            >
              <div className="relative flex items-center justify-center h-22 w-22 rounded-full border border-dashed border-[#FF3B44] text-[#FF3B44] bg-[#FF3B44]/5 backdrop-blur-2xs">
                <svg viewBox="0 0 100 100" className="absolute inset-0 animate-[spin_24s_linear_infinite]">
                  <path id="textCurve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent"/>
                  <text fontSize="10" fontWeight="bold" letterSpacing="2.5" fill="currentColor">
                    <textPath href="#textCurve" startOffset="50%" textAnchor="middle">REPLY WITHIN 24 HOURS • REPLY WITHIN 24 HOURS • </textPath>
                  </text>
                </svg>
                <div className="scale-80"><TargetIcon /></div>
              </div>
            </motion.div>

            {/* Handwritten Note 1 (Mid Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.9 }}
              className="absolute top-[38%] -left-8 md:-left-20 z-30 pointer-events-none hidden sm:block"
            >
              <span className="font-handwriting text-2xl text-[#555555] leading-[1.1] block -rotate-12">
                Great ideas<br />start with a<br />conversation.
              </span>
              <svg width="40" height="40" viewBox="0 0 50 50" className="absolute -bottom-6 right-2 text-[#888888] overflow-visible -rotate-12">
                <path d="M 10 10 Q 30 40 45 35" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 40 28 L 45 35 L 38 38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Trailing Paper Airplane & Flight Path (Bottom Left) */}
            <div className="absolute bottom-6 -left-8 md:-left-28 z-30 pointer-events-none">
              <svg width="220" height="140" className="absolute -left-28 top-12 opacity-35 overflow-visible hidden md:block">
                <path d="M 0 130 Q 70 140 120 70 T 200 30" stroke="#FF3B44" strokeWidth="2.5" strokeDasharray="6 6" fill="none" strokeLinecap="round" />
              </svg>
              <motion.div initial={{ x: -120, y: 120, opacity: 0 }} animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}} transition={{ duration: 1, delay: 0.6, type: "spring" }}>
                <RedPaperPlane />
              </motion.div>
            </div>

            {/* Handwritten Note 2 (Bottom Right) */}
            <motion.div 
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 1.1 }}
              className="absolute bottom-16 right-[115px] z-30 items-center gap-2 pointer-events-none hidden sm:flex"
            >
              <span className="font-handwriting text-[24px] text-[#555555] -rotate-6">
                We&apos;re excited<br />to hear from you!
              </span>
              <svg width="35" height="20" viewBox="0 0 50 20" className="mt-3 text-[#888888]">
                <path d="M0 10 Q 25 20 45 10 L 40 5 M 45 10 L 35 15" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </motion.div>

            {/* Glossy Red Send Bubble Button (Bottom Right - Layer 30 overlaps front pocket) */}
            <motion.button 
              initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.85, type: "spring", stiffness: 200 }}
              className="absolute bottom-11 right-10 md:right-12 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF3B44] shadow-[0_10px_25px_rgba(255,59,68,0.45)] hover:scale-110 hover:bg-[#E0262E] active:scale-95 transition-all cursor-pointer pointer-events-auto group"
              title="Transmit message"
            >
              <div className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <SendPlaneIcon />
              </div>
            </motion.button>

          </div>
        </div>

        {/* ================= BOTTOM FEATURE STRIP ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 rounded-[28px] bg-white border border-[#EFEFEF] p-7 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
        >
          <div className="flex items-center gap-4 lg:border-r border-[#EFEFEF] pr-4">
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[16px] bg-[#FFF5F5] text-[#FF3B44]"><ShieldIcon /></div>
            <div>
              <h4 className="font-[var(--font-cabinet)] font-bold text-[#111111] text-sm md:text-base">100% Confidential</h4>
              <p className="font-[var(--font-general)] text-xs text-[#777777] mt-0.5">Your data is safe with us.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 lg:border-r border-[#EFEFEF] lg:px-4">
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[16px] bg-[#F0FDF4] text-[#10B981]"><ChatIcon /></div>
            <div>
              <h4 className="font-[var(--font-cabinet)] font-bold text-[#111111] text-sm md:text-base">Quick Response</h4>
              <p className="font-[var(--font-general)] text-xs text-[#777777] mt-0.5">We reply within 24 hours.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 lg:border-r border-[#EFEFEF] lg:px-4">
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[16px] bg-[#FFF7ED] text-[#F97316]"><TargetIcon /></div>
            <div>
              <h4 className="font-[var(--font-cabinet)] font-bold text-[#111111] text-sm md:text-base">Tailored Solutions</h4>
              <p className="font-[var(--font-general)] text-xs text-[#777777] mt-0.5">Custom strategies for your unique needs.</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between gap-4 lg:pl-4">
            <div>
              <h4 className="font-[var(--font-cabinet)] font-bold text-[#111111] text-sm md:text-base">Prefer to talk directly?</h4>
              <p className="font-[var(--font-general)] text-xs text-[#777777] mt-0.5 mb-1">Call us anytime (Mon - Fri)</p>
              <a href="tel:+12345678900" className="font-[var(--font-cabinet)] text-base font-bold text-[#FF3B44] hover:text-[#D3212A] transition-colors">+1 (234) 567-8900</a>
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF5F5] text-[#FF3B44]"><PhoneIcon /></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}