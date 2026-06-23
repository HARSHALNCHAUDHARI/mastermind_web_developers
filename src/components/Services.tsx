"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/* ════════════════════════════════════════
   ICONS
════════════════════════════════════════ */
const TargetIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const ShieldIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const SettingsIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const UsersIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const SearchIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const AdsIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>;
const SocialIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const PenIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>;
const MailIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const HeadsetIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>;

/* ════════════════════════════════════════
   DATA
════════════════════════════════════════ */
const stats = [
  { value: "100+", label: "Projects Delivered", Icon: TargetIcon },
  { value: "98%", label: "Client Satisfaction", Icon: ShieldIcon },
  { value: "10+", label: "Industries Served", Icon: SettingsIcon },
  { value: "15+", label: "Digital Experts", Icon: UsersIcon },
];

const services = [
  {
    id: "seo",
    title: "SEO (Search Engine Optimization)",
    desc: "Boost rankings, traffic & visibility with proven SEO strategies.",
    features: ["Keyword Research & Analysis", "On-Page & Off-Page SEO", "Technical SEO & Optimization"],
    Icon: SearchIcon,
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "ads",
    title: "Google Ads (PPC Marketing)",
    desc: "Get quality leads with data-driven ad campaigns that deliver ROI.",
    features: ["Campaign Strategy & Setup", "Keyword Targeting & Bidding", "Performance Tracking & Optimization"],
    Icon: AdsIcon,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "social",
    title: "Social Media Marketing",
    desc: "Creative & targeted strategies for Facebook, Instagram, LinkedIn & more.",
    features: ["Social Media Strategy", "Content Creation & Scheduling", "Community Engagement & Growth"],
    Icon: SocialIcon,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "content",
    title: "Content Marketing",
    desc: "Engaging blogs, ad copies & creative campaigns to attract and convert customers.",
    features: ["Blog Writing & SEO Content", "Ad Copy & Creative Content", "Content Strategy & Planning"],
    Icon: PenIcon,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "email",
    title: "Email Marketing",
    desc: "Personalized campaigns that nurture leads and drive conversions.",
    features: ["Email Campaign Strategy", "Automation & Workflows", "Performance Tracking & Reports"],
    Icon: MailIcon,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
  }
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative bg-[#f8f9fa] py-24 md:py-32 font-sans overflow-hidden text-zinc-900 z-0">
      
      {/* ── AMBIENT BACKGROUND ORBS (Necessary for the glass to refract) ── */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-red-100/60 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-50/60 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-red-50/40 blur-[80px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1550px] px-6 lg:px-12 relative z-10">
        
        {/* GRID LAYOUT: Left (Orbital + Text) | Right (Stats + Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-12 lg:gap-16 items-start">
          
          {/* ════ LEFT COLUMN (Sticky) ════ */}
          <div className="lg:sticky lg:top-32 flex flex-col gap-10">
            
            {/* Header Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1.5 w-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">Our Services</span>
              </div>
              <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight mb-6">
                Comprehensive Digital Solutions That Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Growth & Results</span>
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed mb-8 max-w-md">
                From strategy to execution, we provide end-to-end digital solutions tailored to your business goals. Our data-driven approach ensures measurable growth and long-term success.
              </p>
              
              <button className="group flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-zinc-900 hover:text-red-600 transition-colors">
                Explore All Services
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white shadow-[0_4px_12px_rgba(220,38,38,0.3)] transition-transform group-hover:scale-110">
                  ↗
                </span>
              </button>
            </motion.div>

            {/* Crystal Orbital Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-square max-w-[400px] mx-auto mt-8 hidden md:block"
            >
              {/* Concentric Circles (Glassy) */}
              <div className="absolute inset-0 rounded-full border border-black/5 border-dashed animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-black/5" />
              <div className="absolute inset-16 rounded-full border border-white/60 bg-white/20 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.02)]" />
              
              {/* Central 'M' */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500 blur-[40px] opacity-20 rounded-full scale-150" />
                  <span className="relative font-display text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-700 drop-shadow-[0_4px_12px_rgba(220,38,38,0.4)]">M</span>
                </div>
              </div>

              {/* Orbiting Nodes (Crystal Effect) */}
              {[
                { Icon: TargetIcon, label: "Strategy", pos: "top-[5%] left-1/2 -translate-x-1/2" },
                { Icon: SettingsIcon, label: "Growth", pos: "bottom-[5%] left-1/2 -translate-x-1/2" },
                { Icon: ShieldIcon, label: "Optimization", pos: "left-[5%] top-1/2 -translate-y-1/2" },
                { Icon: UsersIcon, label: "Execution", pos: "right-[5%] top-1/2 -translate-y-1/2" }
              ].map((node, i) => (
                <div key={i} className={`absolute ${node.pos} flex flex-col items-center gap-2`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/60 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-white/80 text-red-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                    <node.Icon />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{node.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ════ RIGHT COLUMN ════ */}
          <div className="flex flex-col gap-8">
            
            {/* Top Stats Bar (Crystal Glass) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10 pointer-events-none" />
              {stats.map((stat, i) => (
                <div key={i} className={`relative flex items-center gap-4 ${i !== stats.length - 1 ? 'md:border-r border-black/5' : ''}`}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/60 shadow-sm border border-white/80 text-red-600">
                    <stat.Icon />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-zinc-900 leading-tight drop-shadow-sm">{stat.value}</h4>
                    <p className="text-[11px] font-medium text-zinc-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Service Cards List (Crystal Glass) */}
            <div className="flex flex-col gap-5">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  className="group relative flex flex-col lg:flex-row items-stretch gap-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white p-6 transition-all duration-300 hover:bg-white/60 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Left: Icon Box */}
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/60 shadow-sm border border-white/80 text-red-600 transition-colors group-hover:bg-red-50/80 group-hover:border-red-100">
                    <service.Icon />
                  </div>

                  {/* Middle: Text Content */}
                  <div className="relative flex flex-col justify-center flex-1 pr-4 lg:border-r border-black/5">
                    <h3 className="font-display text-lg font-bold text-zinc-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">{service.desc}</p>
                  </div>

                  {/* Middle-Right: Bullets */}
                  <div className="relative flex flex-col justify-center flex-1 min-w-[220px]">
                    <ul className="space-y-2.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-[13px] font-medium text-zinc-700">
                          <div className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Far Right: Image Thumbnail */}
                  <div className="hidden md:block relative w-32 shrink-0 overflow-hidden rounded-xl border border-white/80 shadow-inner">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                      sizes="128px"
                    />
                    {/* Glass gradient overlay blending the image */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/50 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* ════ BOTTOM CTA BAR (Crystal Glass) ════ */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent pointer-events-none" />
          
          <div className="relative flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/60 shadow-sm border border-white/80 text-red-600">
              <HeadsetIcon />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-zinc-900 drop-shadow-sm">Need a custom solution for your business?</h4>
              <p className="text-sm text-zinc-600 mt-1">Let's discuss how we can help you achieve your goals.</p>
            </div>
          </div>
          <button className="relative shrink-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 px-8 py-3.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(220,38,38,0.3)] transition-transform hover:scale-105 hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)]">
            Talk To Our Experts →
          </button>
        </motion.div>

      </div>
    </section>
  );
}