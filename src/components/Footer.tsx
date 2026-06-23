"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const footerLinks = {
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Digital Strategy", href: "#" },
    { label: "Web Development", href: "#" },
    { label: "Brand Identity", href: "#" },
    { label: "Digital Marketing", href: "#" },
    { label: "UI/UX Design", href: "#" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] text-white pt-24 pb-8 select-none">
      
      {/* 1. NATIVE INLINE SVG NOISE TEXTURE (Gives the dark background that high-end matte grain feel) */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. GIANT WATERMARK BRANDING */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center z-0 overflow-hidden select-none">
        <span className="font-[var(--font-clash)] text-[clamp(10rem,22vw,24rem)] font-bold leading-[0.85] tracking-tight text-white/[0.03]">
        MasterMind.
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-12">
        
        {/* ================= TOP ROW: BRAND & NEWSLETTER ================= */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-16">
          
          {/* Left: Brand Icon & Bio */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#E31E24]">
                <span className="font-[var(--font-clash)] text-2xl font-bold text-white">M</span>
              </div>
              <span className="font-[var(--font-clash)] text-3xl font-bold tracking-tight text-white">
                Master<span className="text-[#E31E24]">Mind</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm font-[var(--font-general)] text-sm leading-relaxed text-[#777777]">
              Premium digital marketing & development agency crafting unforgettable experiences for ambitious brands worldwide.
            </p>
          </div>

          {/* Right: Newsletter (De-coupled Input & Button exact layout) */}
          <div className="lg:col-span-7 lg:pl-8">
            <h3 className="font-[var(--font-clash)] text-3xl font-bold tracking-tight text-white md:text-4xl">
              Stay in the loop
            </h3>
            <p className="mt-2.5 font-[var(--font-general)] text-sm text-[#777777]">
              Insights, case studies, and creative inspiration — delivered monthly.
            </p>

            {subscribed ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 font-[var(--font-cabinet)] text-sm font-medium text-[#E31E24]"
              >
                Thank you for subscribing!
              </motion.p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-2xl">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 rounded-full border border-white/10 bg-[#141414] px-7 py-4 font-[var(--font-cabinet)] text-sm text-white placeholder:text-[#444444] transition-all focus:border-[#E31E24] focus:bg-[#181818] focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#E31E24] px-10 py-4 font-[var(--font-cabinet)] text-sm font-medium text-white transition-colors hover:bg-[#c9181e] shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* GRAPHITE DIVIDER 1 */}
        <div className="h-px w-full bg-white/[0.06]" />

        {/* ================= MIDDLE ROW: LINK GRID ================= */}
        <div className="grid grid-cols-2 gap-12 py-20 md:grid-cols-4 lg:gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-[var(--font-cabinet)] text-[11px] font-bold uppercase tracking-[0.25em] text-[#555555]">
                {category}
              </h4>
              <ul className="mt-7 space-y-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group relative inline-block font-[var(--font-general)] text-sm text-[#888888] transition-colors hover:text-white"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#E31E24] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Hardcoded Contact Data */}
          <div>
            <h4 className="font-[var(--font-cabinet)] text-[11px] font-bold uppercase tracking-[0.25em] text-[#555555]">
              Contact
            </h4>
            <ul className="mt-7 space-y-3.5 font-[var(--font-general)] text-sm text-[#888888]">
              <li>
                <a href="mailto:hello@mastermindweb.in" className="hover:text-white transition-colors relative group inline-block">
                  hello@mastermindweb.in
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#E31E24] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-white transition-colors relative group inline-block">
                  +91 98765 43210
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#E31E24] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li className="pt-1 leading-relaxed">
                Mumbai, Maharashtra<br />India
              </li>
            </ul>
          </div>
        </div>

        {/* GRAPHITE DIVIDER 2 */}
        <div className="h-px w-full bg-white/[0.06]" />

        {/* ================= BOTTOM ROW: COPYRIGHT & LEGAL ================= */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row md:gap-0 font-[var(--font-general)] text-xs text-[#666666]">
          
          {/* Left side flush */}
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#161616] font-[var(--font-clash)] text-[11px] font-bold text-white">
              N&apos;
            </div>
            <span>2026 MasterMind Web Developers. All rights reserved.</span>
          </div>

          {/* Right side legal links */}
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

        </div>

      </div>
    </footer>
  );
}