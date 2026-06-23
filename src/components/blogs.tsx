"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

/* ════════════════════════════════════════
   ICONS (Inline for perfect copy-paste)
════════════════════════════════════════ */
const ArrowRight = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
const ArrowLeft = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>;
const CheckCircle = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;

// Tab Icons
const GridIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
const SearchIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const PointerIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/></svg>;
const HeartIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const FileIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>;
const MailIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const ChartIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;

/* ════════════════════════════════════════
   DATA
════════════════════════════════════════ */
const categories = [
  { id: "all", label: "All Articles", Icon: GridIcon },
  { id: "seo", label: "SEO", Icon: SearchIcon },
  { id: "ppc", label: "PPC", Icon: PointerIcon },
  { id: "social", label: "Social Media", Icon: HeartIcon },
  { id: "content", label: "Content Marketing", Icon: FileIcon },
  { id: "email", label: "Email Marketing", Icon: MailIcon },
  { id: "analytics", label: "Analytics", Icon: ChartIcon },
];

const latestPosts = [
  {
    id: 1,
    title: "Google Ads Optimization Tips That Drive Better ROI",
    date: "May 8, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
  {
    id: 2,
    title: "Social Media Strategy That Builds Real Engagement",
    date: "May 3, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
  },
  {
    id: 3,
    title: "Content Marketing Strategy That Converts",
    date: "Apr 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?w=400&q=80",
  },
];

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative bg-[#ffffff] py-24 md:py-32 font-sans overflow-hidden text-zinc-900">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        
        {/* ── HEADER ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-red-600" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">Our Blog</span>
            </div>
            
            <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-zinc-900">
              Insights to Elevate.<br />
              Strategies to <span className="relative inline-block text-red-600">
                Grow.
                {/* Hand-drawn SVG underline effect */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-red-600" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 7C20 4 50 2 98 6" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6 max-w-sm">
            <p className="text-zinc-500 text-sm leading-relaxed lg:text-right">
              Actionable insights, proven strategies, and the latest trends to help you make smarter decisions and drive real results.
            </p>
            <button className="group flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-red-600 transition-all hover:border-red-600 hover:bg-red-50">
              View All Articles
              <span className="transition-transform group-hover:translate-x-1"><ArrowRight /></span>
            </button>
          </div>
        </motion.div>

        {/* ── CATEGORY TABS ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          className="flex overflow-x-auto hide-scrollbar gap-3 mb-12 pb-2 -mx-6 px-6 lg:mx-0 lg:px-0"
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex shrink-0 items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? "bg-red-600 text-white shadow-md shadow-red-600/20" 
                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                <cat.Icon />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* ── MAIN CONTENT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 mb-16">
          
          {/* LEFT: Featured Article Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative rounded-3xl bg-gradient-to-br from-red-50/50 to-white border border-red-100 p-8 md:p-10 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            {/* Card Nav Arrows (Top Right) */}
            <div className="absolute top-8 right-8 hidden md:flex gap-2 z-10">
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-red-600 shadow-sm border border-red-100 hover:bg-red-50 transition-colors"><ArrowLeft /></button>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-red-600 shadow-sm border border-red-100 hover:bg-red-50 transition-colors"><ArrowRight /></button>
            </div>

            <div className="relative z-10 flex flex-col h-full md:w-[60%]">
              <span className="inline-block w-fit rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white mb-6">
                Featured
              </span>
              
              <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 mb-4">
                <span className="flex items-center gap-1"><GridIcon /> May 12, 2024</span>
                <span className="w-1 h-1 rounded-full bg-zinc-300" />
                <span className="flex items-center gap-1"><ChartIcon /> 6 min read</span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-zinc-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                10 SEO Best Practices to Boost Rankings in 2024
              </h3>
              
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
                Actionable SEO strategies that help you rank higher, attract quality traffic, and grow your business.
              </p>

              <div className="mt-auto">
                <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700 transition-colors">
                  Read Article <ArrowRight />
                </a>
                
                {/* Dots Indicator */}
                <div className="flex gap-2 mt-8">
                  <div className="h-1.5 w-6 rounded-full bg-red-600" />
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-200" />
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-200" />
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-200" />
                </div>
              </div>
            </div>

            {/* Featured Image / 3D Abstract Representation */}
            <div className="mt-8 md:mt-0 md:absolute right-0 bottom-0 top-0 w-full md:w-[45%] h-64 md:h-full">
              {/* Using a clean Unsplash image to mimic the 3D aesthetic */}
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                alt="SEO Dashboard" 
                fill 
                className="object-cover object-left mask-fade-left transition-transform duration-700 group-hover:scale-105"
                style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%)' }}
              />
            </div>
          </motion.div>

          {/* RIGHT: Latest Articles List */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-3xl bg-white border border-zinc-100 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-display text-xl font-bold text-zinc-900">Latest from the blog</h3>
              <a href="#" className="text-xs font-bold text-red-600 flex items-center gap-1 hover:text-red-700">View all <ArrowRight /></a>
            </div>

            <div className="flex flex-col gap-6">
              {latestPosts.map((post) => (
                <a href="#" key={post.id} className="group flex items-center gap-5 p-2 -mx-2 rounded-xl hover:bg-zinc-50 transition-colors">
                  {/* Thumbnail */}
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="96px" />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-500 mb-1.5">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-red-500" />
                      <span>{post.readTime}</span>
                    </div>
                    <h4 className="font-display text-sm font-bold text-zinc-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-red-600 shadow-sm border border-zinc-100 group-hover:bg-red-50 transition-colors">
                    <ArrowRight />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── NEWSLETTER CTA BOTTOM BAR ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-r from-red-50 to-white border border-red-50/50 p-8 md:p-10 shadow-sm overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Decorative background element */}
          <div className="absolute left-0 bottom-0 opacity-10 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="80" stroke="#E31E24" strokeWidth="40" strokeDasharray="10 20"/></svg>
          </div>

          <div className="flex items-center gap-6 z-10 w-full lg:w-auto">
            <div className="hidden md:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md border border-red-100 text-red-500">
              <MailIcon />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-zinc-900 mb-1">Get Insights That Drive Growth</h3>
              <p className="text-sm text-zinc-500 max-w-md">Join 1,000+ marketers and business owners who receive expert tips and strategies straight to their inbox.</p>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-auto z-10">
            <form className="flex w-full max-w-md items-center gap-2 rounded-full bg-white p-2 shadow-sm border border-zinc-200 focus-within:border-red-300 focus-within:ring-2 focus-within:ring-red-100 transition-all">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent px-4 py-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
                required
              />
              <button type="submit" className="shrink-0 rounded-full bg-red-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 flex items-center gap-2">
                Subscribe Now <ArrowRight />
              </button>
            </form>
            <div className="flex items-center gap-1.5 mt-3 ml-4 text-[11px] text-zinc-400">
              <CheckCircle /> No spam. Unsubscribe anytime.
            </div>
          </div>
        </motion.div>

      </div>

      {/* Global override for hiding scrollbar specific to this component */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}