"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Hirae Jewelles",
    category: "E-Commerce",
    tag: "React · Next.js · Framer",
    image: "https://images.unsplash.com/photo-1599643478514-4a11018261ce?q=80&w=1600&auto=format&fit=crop",
    year: "2026",
    result: "Live Site",
    link: "https://your-hirae-link.com", 
  },
  {
    id: 2,
    title: "Nova Finance",
    category: "Fintech",
    tag: "Web App · React",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    year: "2025",
    result: "2M users",
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Velocity Motors",
    category: "Automotive",
    tag: "Digital · 3D",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80",
    year: "2025",
    result: "Awwwards SOTD",
    link: "https://example.com",
  },
  {
    id: 4,
    title: "Artisan Coffee",
    category: "Food & Bev",
    tag: "Brand · Shopify",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80",
    year: "2024",
    result: "+340% sales",
    link: "https://example.com",
  },
  {
    id: 5,
    title: "Mindful Health",
    category: "Healthcare",
    tag: "App · UX/UI",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80",
    year: "2024",
    result: "500K downloads",
    link: "https://example.com",
  },
  {
    id: 6,
    title: "Aura Architecture",
    category: "Corporate",
    tag: "Portfolio · WebGL",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    year: "2024",
    result: "FWA of the Day",
    link: "https://example.com",
  },
  {
    id: 7,
    title: "Nexus Logistics",
    category: "Enterprise",
    tag: "Dashboard · SaaS",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?w=1600&q=80",
    year: "2023",
    result: "Enterprise Scaled",
    link: "https://example.com",
  },
  {
    id: 8,
    title: "Echo Audio",
    category: "Consumer Tech",
    tag: "E-Commerce · Next.js",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&q=80",
    year: "2023",
    result: "Global Launch",
    link: "https://example.com",
  },
];

const AUTO_PLAY_INTERVAL = 3000; 

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  // 1. Auto-play logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused]);

  // 2. FIXED Auto-scroll logic! No more page jumping.
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const activeElement = container.querySelector(
      `[data-index="${active}"]`
    ) as HTMLElement;

    if (activeElement) {
      // We manually scroll the inner container instead of using scrollIntoView
      container.scrollTo({
        top: activeElement.offsetTop - 16, // 16px to give a little breathing room at the top
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FAFAFA] py-24 md:py-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-red-600">
              Selected Work
            </span>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-zinc-900">
              Case studies
              <br />
              worth studying.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-zinc-500">
            Click a project to explore. Each one tells a story of strategy,
            craft, and measurable impact in the digital space.
          </p>
        </motion.div>

        {/* ── SHOWCASE LAYOUT ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px] lg:gap-10">
          
          {/* LEFT: Featured project image */}
          <div className="relative w-full lg:h-[650px] h-[450px]">
            <div className="absolute inset-0 overflow-hidden rounded-[24px] shadow-2xl shadow-black/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-zinc-900"
                >
                  <Image
                    src={projects[active].image}
                    alt={projects[active].title}
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Project Info Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                        {projects[active].category}
                      </span>
                      <span className="text-sm font-medium text-white/60">
                        {projects[active].year}
                      </span>
                    </div>
                    
                    <h3 className="mt-5 text-[clamp(2rem,4vw,4rem)] font-bold leading-none tracking-tight text-white drop-shadow-lg">
                      {projects[active].title}
                    </h3>
                    
                    <p className="mt-3 text-base text-white/70">
                      {projects[active].tag}
                    </p>
                    
                    <div className="mt-8 flex items-center justify-between gap-6 border-t border-white/20 pt-6">
                      <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-wider text-white/50">Highlight</span>
                        <span className="text-xl font-bold text-red-500">
                          {projects[active].result}
                        </span>
                      </div>
                      
                      <motion.a
                        href={projects[active].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-colors hover:bg-red-600 hover:text-white"
                      >
                        Visit Website
                        <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Top Progress bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/20 z-10">
                <motion.div
                  className="h-full bg-red-600"
                  initial={false}
                  animate={{ width: `${((active + 1) / projects.length) * 100}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Scrollable Project Navigator */}
          <div className="relative w-full lg:h-[650px] h-[400px] rounded-2xl bg-white shadow-sm border border-zinc-100 overflow-hidden">
            
            <div 
              ref={scrollContainerRef}
              className="absolute inset-0 overflow-y-auto p-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-200 [&::-webkit-scrollbar-thumb]:rounded-full scroll-smooth"
            >
              <div className="flex flex-col gap-2 pb-12">
                {projects.map((project, index) => {
                  const isActive = active === index;
                  return (
                    <button
                      key={project.id}
                      data-index={index}
                      type="button"
                      onClick={() => {
                        setActive(index);
                        setIsPaused(true);
                      }}
                      className={`group relative flex items-center gap-4 rounded-xl px-4 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "bg-zinc-50 shadow-md ring-1 ring-zinc-200"
                          : "hover:bg-zinc-50"
                      }`}
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg shadow-sm">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className={`object-cover transition-transform duration-700 ${
                            isActive ? "scale-100" : "scale-110 opacity-70 grayscale"
                          }`}
                          sizes="56px"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-base font-bold tracking-tight transition-colors truncate ${
                            isActive ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-700"
                          }`}
                        >
                          {project.title}
                        </p>
                        <p className="text-xs text-zinc-400 mt-0.5 truncate">{project.category}</p>
                      </div>

                      <span
                        className={`text-sm font-bold transition-colors ${
                          isActive ? "text-red-600" : "text-zinc-300"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {isActive && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-red-600"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>
          
        </div>
      </div>
    </section>
  );
}