"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ════════════════════════════════════════
   HIGH-FIDELITY INLINE SVGS
════════════════════════════════════════ */
const MailIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const PhoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const CalendarIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const UserIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const BuildingIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>;
const ClockIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const HeadsetIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>;
const MapPinIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const GlobeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const ShieldIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const TargetIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const TrendingIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const ArrowRight = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const PaperPlaneSolid = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M3 13h6v4l3-4h7l4-11L3 13zm15-8L6 11.5l3.5 1 2.5 4.5L18 5z"/></svg>;

// 3D Vector Red Paper Plane
const RedPaperPlane3D = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="drop-shadow-[0_15px_25px_rgba(255,59,68,0.35)]">
    <path d="M95 15L15 45L40 60L55 90L95 15Z" fill="#FF3B44"/>
    <path d="M95 15L40 60V85L55 90L95 15Z" fill="#D3212A"/>
    <path d="M40 60L55 90V75L40 60Z" fill="#9B141B"/>
  </svg>
);

export default function ContactSection1() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative bg-white py-24 md:py-32 overflow-hidden text-[#0A0A0A] font-sans">
      
      {/* Dynamic Font Import */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        .font-handwriting { font-family: 'Caveat', cursive; }
      `}} />

      <div className="mx-auto max-w-[1500px] px-6 md:px-12 relative z-10">
        
        {/* ================= MAIN HERO GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* ════════ LEFT COLUMN: HEADINGS & PILLS (Col Span 5) ════════ */}
          <div className="flex flex-col gap-8 lg:col-span-5 relative z-30">
            
            <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#EAEAEA] px-3.5 py-1.5 shadow-2xs mb-6">
                <div className="h-2 w-2 rounded-full bg-[#FF3B44]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#666666]">
                  Let&apos;s Connect
                </span>
              </div>
              
              {/* Headline matching image verbatim */}
              <h2 className="font-[var(--font-clash)] text-[clamp(2.75rem,4.5vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-[#0A0A0A] mb-5">
                Let&apos;s Create <br />
                Something <br />
                <span className="relative inline-block text-[#FF3B44] font-handwriting text-[clamp(3.5rem,5.5vw,5.25rem)] font-bold tracking-normal align-middle leading-[0.8] pr-8">
                  Extraordinary
                  {/* Three Red Sparkle Splash Lines */}
                  <svg className="absolute -top-3 right-0 w-8 h-8 text-[#FF3B44]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M12 0v6M20 4l-4 4M24 12h-6" />
                  </svg>
                  <svg className="absolute -bottom-1 left-0 w-full h-2.5 text-[#FF3B44]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M3 8 Q 50 1 97 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              
              <p className="text-[#666666] text-base leading-relaxed max-w-md">
                Have a project in mind or need expert guidance? We&apos;d love to hear from you and help you achieve your business goals.
              </p>
            </motion.div>

            {/* Stacked Contact Option Cards */}
            <div className="flex flex-col gap-3.5 max-w-md">
              {[
                { icon: <MailIcon />, title: "Email Us", desc: "hello@yourdomain.com", sub: "We'll reply within 24 hours", color: "text-[#FF3B44]", bg: "bg-[#FFF5F5]" },
                { icon: <PhoneIcon />, title: "Call Us Anytime", desc: "+1 (234) 567-8900", sub: "Mon – Fri, 9:00 AM – 6:00 PM", color: "text-[#10B981]", bg: "bg-[#F0FDF4]" },
                { icon: <CalendarIcon />, title: "Schedule a Meeting", desc: "Book a free consultation", sub: "Pick a time that works for you", color: "text-[#8B5CF6]", bg: "bg-[#F5F3FF]" },
              ].map((card, i) => (
                <motion.a 
                  href="#" key={i}
                  initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  className="group flex items-center justify-between rounded-[22px] bg-white p-3.5 border border-[#F0F0F0] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:border-[#E2E2E2] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-13 w-13 items-center justify-center rounded-[16px] ${card.bg} ${card.color} shrink-0 transition-transform group-hover:scale-105`}>
                      {card.icon}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-[var(--font-cabinet)] font-bold text-[#0A0A0A] text-sm leading-snug">{card.title}</h4>
                      <span className="font-[var(--font-cabinet)] font-bold text-[#0A0A0A] text-base">{card.desc}</span>
                      <span className="text-xs text-[#888888] mt-0.5">{card.sub}</span>
                    </div>
                  </div>
                  <div className="text-[#CCCCCC] transition-transform group-hover:translate-x-1 pr-3 group-hover:text-[#FF3B44]">
                    <ArrowRight />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Dark Executive Trust Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-2 flex items-center gap-5 rounded-[24px] bg-[#0A0A0A] text-white p-5 shadow-xl max-w-md"
            >
              <div className="flex -space-x-3 shrink-0 pl-1">
                <img className="h-12 w-12 rounded-full border-2 border-[#0A0A0A] object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="Client" />
                <img className="h-12 w-12 rounded-full border-2 border-[#0A0A0A] object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="Client" />
                <img className="h-12 w-12 rounded-full border-2 border-[#0A0A0A] object-cover shadow-sm" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" alt="Client" />
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#0A0A0A] bg-white text-[#0A0A0A] font-[var(--font-clash)] text-lg font-bold shadow-sm">
                  +
                </div>
              </div>
              <div className="flex flex-col gap-1 pr-2">
                <div className="flex text-[#FBBF24] text-sm tracking-widest select-none font-sans">★★★★★</div>
                <p className="text-[12px] text-[#AAAAAA] font-medium leading-normal">
                  Trusted by 500+ businesses worldwide to drive growth and real results.
                </p>
              </div>
            </motion.div>

          </div>


          {/* ════════ CENTER COLUMN: THE 3D ASSET COMPOSITE (Col Span 2) ════════ */}
          <div className="hidden xl:flex flex-col items-center justify-center lg:col-span-2 relative h-[650px]">
            
            {/* Background Light Blue/Grey Curved Backdrop Arc */}
            <div className="absolute inset-y-0 right-0 w-[250%] bg-[#F8F9FA] rounded-l-[100px] -z-10" />

            {/* Flying 3D Plane */}
            <div className="absolute top-12 right-6 z-20">
              <motion.div initial={{ x: -60, y: 60, opacity: 0 }} animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}} transition={{ duration: 1, delay: 0.4, type: "spring" }}>
                <RedPaperPlane3D />
              </motion.div>
            </div>

            {/* Dotted Trailing Loop */}
            <svg width="220" height="280" viewBox="0 0 220 280" fill="none" className="absolute top-28 -left-12 overflow-visible">
              <path d="M 180 0 Q 150 180 50 160 T 0 280" stroke="#FF3B44" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round" />
            </svg>

            {/* Handwritten Center Quote */}
            <div className="absolute top-[42%] text-center -rotate-6 select-none">
              <span className="font-handwriting text-2xl text-[#444444] leading-tight block">
                Great things <br />start with a <br />conversation.
              </span>
            </div>

            {/* Re-engineered Pure CSS "Clay 3D Cluster" at bottom center */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute bottom-10 -left-6 w-56 h-48 select-none pointer-events-none"
            >
              {/* 3D Potted Plant (Right) */}
              <div className="absolute bottom-0 right-2 w-16 h-20 z-10">
                <div className="absolute bottom-6 left-2 w-10 h-14 bg-[#386641] rounded-t-full -rotate-15 shadow-md" />
                <div className="absolute bottom-5 right-1 w-8 h-12 bg-[#52795D] rounded-t-full rotate-25 shadow-md" />
                <div className="absolute bottom-0 left-1 w-14 h-10 bg-gradient-to-b from-[#EFEFEF] to-[#D8D8D8] rounded-b-xl rounded-t-sm shadow-lg" />
              </div>

              {/* 3D Open Mail Envelope (Center) */}
              <div className="absolute bottom-4 left-10 w-32 h-24 bg-gradient-to-tr from-[#E2E2E2] to-[#FFFFFF] rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.12)] p-2 -rotate-6 z-20 flex flex-col justify-end">
                <div className="absolute -top-4 left-4 w-24 h-16 bg-[#FF3B44] rounded-xl shadow-inner -rotate-3" />
                <div className="w-full h-16 bg-white rounded-xl shadow-sm z-10 flex items-center justify-center">
                  <div className="w-16 h-2 bg-[#F0F0F0] rounded-full" />
                </div>
              </div>

              {/* 3D Clay Chat Bubble (Left) */}
              <div className="absolute bottom-14 -left-4 w-24 h-20 bg-white rounded-2xl shadow-[0_12px_25px_rgba(0,0,0,0.15)] z-30 p-3 flex items-center justify-center gap-1.5 rotate-6">
                <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white rotate-45" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B44] animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B44] animate-pulse delay-150" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B44] animate-pulse delay-300" />
              </div>
            </motion.div>

          </div>


          {/* ════════ RIGHT COLUMN: THE WHITE FORM CARD (Col Span 5) ════════ */}
          <div className="lg:col-span-7 xl:col-span-5 relative w-full max-w-[680px] mx-auto">
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.1 }}
              className="bg-white rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-8 md:p-11 border border-[#EFEFEF] relative z-20"
            >
              
              {/* Form Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-[#F0F0F0]">
                <div className="flex items-center gap-4">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#FF3B44] shadow-[0_4px_15px_rgba(255,59,68,0.3)]">
                    <PaperPlaneSolid />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-clash)] text-2xl font-bold text-[#0A0A0A]">Send us a message</h3>
                    <p className="text-xs text-[#888888] mt-0.5 font-medium">Fill out the form and our team will get back to you soon.</p>
                  </div>
                </div>

                {/* Clock Response Badge */}
                <div className="flex items-center gap-2 bg-[#FFF5F5] border border-[#FFE5E5] px-4 py-2.5 rounded-full text-xs font-bold text-[#0A0A0A] shrink-0">
                  <div className="text-[#FF3B44]"><ClockIcon /></div>
                  <span>We reply <br className="hidden sm:block"/>within 24h</span>
                </div>
              </div>

              {/* Form Inputs (Notice LEFT aligned icons inside inputs verbatim) */}
              <form className="space-y-5 font-[var(--font-cabinet)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#222]">Your Name</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 text-[#888888] pointer-events-none"><UserIcon /></div>
                      <input type="text" placeholder="Enter your name" className="w-full rounded-2xl border border-[#E6E6E6] bg-[#F8F9FA] pl-11 pr-4 py-3.5 text-sm text-[#111] placeholder:text-[#999] outline-none transition-all focus:border-[#FF3B44] focus:bg-white focus:ring-4 focus:ring-[#FF3B44]/10 font-medium" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#222]">Work Email</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 text-[#888888] pointer-events-none"><MailIcon /></div>
                      <input type="email" placeholder="Enter your email" className="w-full rounded-2xl border border-[#E6E6E6] bg-[#F8F9FA] pl-11 pr-4 py-3.5 text-sm text-[#111] placeholder:text-[#999] outline-none transition-all focus:border-[#FF3B44] focus:bg-white focus:ring-4 focus:ring-[#FF3B44]/10 font-medium" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#222]">Phone Number</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 text-[#888888] pointer-events-none"><PhoneIcon /></div>
                      <input type="tel" placeholder="Enter your number" className="w-full rounded-2xl border border-[#E6E6E6] bg-[#F8F9FA] pl-11 pr-4 py-3.5 text-sm text-[#111] placeholder:text-[#999] outline-none transition-all focus:border-[#FF3B44] focus:bg-white focus:ring-4 focus:ring-[#FF3B44]/10 font-medium" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#222]">Company Name</label>
                    <div className="relative flex items-center">
                      <div className="absolute left-4 text-[#888888] pointer-events-none"><BuildingIcon /></div>
                      <input type="text" placeholder="Enter your company" className="w-full rounded-2xl border border-[#E6E6E6] bg-[#F8F9FA] pl-11 pr-4 py-3.5 text-sm text-[#111] placeholder:text-[#999] outline-none transition-all focus:border-[#FF3B44] focus:bg-white focus:ring-4 focus:ring-[#FF3B44]/10 font-medium" />
                    </div>
                  </div>

                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#222]">What are you looking for?</label>
                  <div className="relative flex items-center">
                    <select className="w-full appearance-none rounded-2xl border border-[#E6E6E6] bg-[#F8F9FA] px-4 py-3.5 text-sm text-[#555] outline-none transition-all focus:border-[#FF3B44] focus:bg-white focus:ring-4 focus:ring-[#FF3B44]/10 cursor-pointer font-medium">
                      <option>Select a service</option>
                      <option>Enterprise Web Development</option>
                      <option>High-ROI Digital Marketing</option>
                      <option>UI/UX Design & Brand Strategy</option>
                    </select>
                    <div className="absolute right-4 text-[#888888] pointer-events-none">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#222]">Tell us about your project</label>
                  <div className="relative">
                    <textarea placeholder="Share your ideas, goals or project details..." className="h-28 w-full resize-none rounded-2xl border border-[#E6E6E6] bg-[#F8F9FA] p-4 text-sm text-[#111] placeholder:text-[#999] outline-none transition-all focus:border-[#FF3B44] focus:bg-white focus:ring-4 focus:ring-[#FF3B44]/10 font-medium pb-8" />
                    <div className="absolute right-4 bottom-4 flex items-center gap-2 text-[#AAAAAA] pointer-events-none text-xs font-bold">
                      <span>0 / 500</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                    </div>
                  </div>
                </div>

                {/* 3x Inside Trust Badges Row */}
                <div className="grid grid-cols-3 gap-3 py-6 my-6 border-y border-[#F0F0F0]">
                  <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center sm:text-left">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF5F5] text-[#FF3B44]"><ShieldIcon /></div>
                    <div>
                      <h5 className="font-bold text-[11px] text-[#0A0A0A] leading-none">100% Confidential</h5>
                      <span className="text-[10px] text-[#888888] block mt-0.5">Your data is safe</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center sm:text-left">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF5F5] text-[#FF3B44]"><TargetIcon /></div>
                    <div>
                      <h5 className="font-bold text-[11px] text-[#0A0A0A] leading-none">Tailored Solutions</h5>
                      <span className="text-[10px] text-[#888888] block mt-0.5">Customized for you</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center sm:text-left">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF5F5] text-[#FF3B44]"><TrendingIcon /></div>
                    <div>
                      <h5 className="font-bold text-[11px] text-[#0A0A0A] leading-none">Results Focused</h5>
                      <span className="text-[10px] text-[#888888] block mt-0.5">Growth & success</span>
                    </div>
                  </div>
                </div>

                {/* Big Dark Wide Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white rounded-2xl p-2 pl-6 flex items-center justify-between group transition-all duration-300 shadow-xl active:scale-[0.99] cursor-pointer"
                >
                  <div className="flex-1 text-center flex flex-col justify-center">
                    <span className="block font-[var(--font-clash)] font-bold text-base tracking-wide">Send Message</span>
                    <span className="block text-xs text-[#AAAAAA] mt-0.5">We&apos;ll get back to you soon!</span>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-[#FF3B44] flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0">
                    <ArrowRight />
                  </div>
                </button>

              </form>
            </motion.div>

          </div>

        </div>

        {/* ================= BOTTOM PALE PINK FEATURE BAR ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-[32px] bg-[#FFF7F7] border border-[#FFE8E8] p-8 lg:p-10 items-center"
        >
          {/* Col 1 */}
          <div className="flex items-center gap-4 lg:border-r border-[#FFE0E0] pr-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-xs text-[#FF3B44]">
              <HeadsetIcon />
            </div>
            <div>
              <h4 className="font-[var(--font-cabinet)] font-bold text-[#0A0A0A] text-base">Prefer to talk directly?</h4>
              <p className="text-xs text-[#777777] mt-0.5 mb-1">Call us anytime, we&apos;re here to help!</p>
              <a href="tel:+12345678900" className="font-[var(--font-cabinet)] text-base font-extrabold text-[#FF3B44] hover:underline">+1 (234) 567-8900</a>
            </div>
          </div>
          
          {/* Col 2 */}
          <div className="flex items-center gap-4 lg:border-r border-[#FFE0E0] lg:px-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white shadow-xs text-[#FF3B44]">
              <MapPinIcon />
            </div>
            <div>
              <h4 className="font-[var(--font-cabinet)] font-bold text-[#0A0A0A] text-base">Our Office</h4>
              <p className="text-xs text-[#777777] mt-0.5 mb-1 leading-relaxed">123 Innovation Drive, Suite 100 <br />San Francisco, CA 94107, USA</p>
              <a href="#" className="text-xs font-bold text-[#FF3B44] inline-flex items-center gap-1 hover:underline">
                <span>View on map</span>
                <span className="text-base leading-none">→</span>
              </a>
            </div>
          </div>
          
          {/* Col 3: Dotted Matrix Map Graphic */}
          <div className="flex items-center justify-center lg:border-r border-[#FFE0E0] lg:px-4 py-2">
            <div className="relative w-44 h-20 opacity-50 select-none flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#999999_1.5px,transparent_1.5px)] [background-size:8px_8px] rounded-full" />
              {/* SF Marker */}
              <span className="absolute top-6 left-8 w-2.5 h-2.5 rounded-full bg-[#FF3B44] ring-4 ring-[#FF3B44]/20 animate-ping" />
              <span className="absolute top-6 left-8 w-2.5 h-2.5 rounded-full bg-[#FF3B44]" />
              {/* Europe Marker */}
              <span className="absolute top-4 right-12 w-2 h-2 rounded-full bg-[#FF3B44]" />
            </div>
          </div>
          
          {/* Col 4 */}
          <div className="flex items-center gap-4 lg:pl-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#FF3B44] shadow-md text-white">
              <GlobeIcon />
            </div>
            <div>
              <h4 className="font-[var(--font-cabinet)] font-bold text-[#0A0A0A] text-base">Serving clients worldwide</h4>
              <p className="text-xs text-[#777777] mt-0.5 leading-relaxed">Let&apos;s build something <br />great together.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}