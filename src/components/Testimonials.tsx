"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "MasterMind didn't just build us a website — they created a digital masterpiece that doubled our conversion rate within 60 days.",
    author: "Sarah Chen",
    role: "CEO, Luxe Interiors",
    initials: "SC",
  },
  {
    quote:
      "The attention to detail is unmatched. Every animation, every pixel feels intentional. They're truly in a league of their own.",
    author: "Marcus Williams",
    role: "Founder, Nova Finance",
    initials: "MW",
  },
  {
    quote:
      "Working with MasterMind transformed our entire digital presence. Our brand now commands the premium positioning we always envisioned.",
    author: "Elena Rodriguez",
    role: "CMO, Velocity Motors",
    initials: "ER",
  },
  {
    quote:
      "Our e-commerce revenue increased 340% after the redesign. The ROI speaks for itself — MasterMind delivers results.",
    author: "Amira Hassan",
    role: "CEO, Artisan Coffee Co.",
    initials: "AH",
  },
  {
    quote:
      "They pushed us beyond our comfort zone and the result was extraordinary. Award-winning work that actually drives business.",
    author: "David Okonkwo",
    role: "Founder, Aurora Studios",
    initials: "DO",
  },
  {
    quote:
      "Cinematic, premium, unforgettable — exactly what we needed to differentiate in a crowded market.",
    author: "Raj Patel",
    role: "CEO, Innovate Labs",
    initials: "RP",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-28 md:py-36">
      {/* Background giant watermark quote */}
      <div className="pointer-events-none absolute right-[2%] top-[12%] select-none font-[var(--font-clash)] text-[clamp(14rem,32vw,30rem)] font-bold leading-none text-black/[0.02] md:right-[5%]">
        &ldquo;
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12 lg:items-center">
          
          {/* LEFT COLUMN: Headers & Orbital Ring */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E31E24]/5 px-3 py-1 border border-[#E31E24]/15">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E31E24] animate-pulse" />
              <span className="font-[var(--font-cabinet)] text-[11px] font-bold uppercase tracking-[0.3em] text-[#E31E24]">
                Client Stories
              </span>
            </div>

            <h2 className="mt-6 font-[var(--font-clash)] text-[clamp(2.75rem,5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A]">
              Trusted by <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A] to-[#6B6B6B] bg-clip-text text-transparent">
                industry leaders.
              </span>
            </h2>

            {/* Perfectly Calibrated Orbital Wheel */}
            <div className="relative mt-12 h-[320px] w-[320px] shrink-0">
              {/* Outer Dashed Orbit Track (Radius precisely 120px) */}
              <div className="absolute inset-[40px] rounded-full border border-dashed border-black/15" />
              {/* Inner Decorative Accent Ring */}
              <div className="absolute inset-[80px] rounded-full border border-black/5" />

              {testimonials.map((t, i) => {
                // Math calibrated to exact 120px radius of the dashed track
                const angle = (i / testimonials.length) * 360 - 90;
                const rad = (angle * Math.PI) / 180;
                const radius = 120;
                const x = Math.cos(rad) * radius + 160 - 24; // 160 is center, 24 is half button width
                const y = Math.sin(rad) * radius + 160 - 24;
                const isActive = active === i;

                return (
                  <motion.button
                    key={t.author}
                    type="button"
                    onClick={() => setActive(i)}
                    animate={{
                      left: x,
                      top: y,
                      scale: isActive ? 1.15 : 1,
                    }}
                    whileHover={{ scale: isActive ? 1.2 : 1.08 }}
                    className={`absolute flex h-12 w-12 items-center justify-center rounded-full font-[var(--font-cabinet)] text-xs font-bold transition-colors duration-500 ${
                      isActive
                        ? "bg-[#E31E24] text-white shadow-[0_8px_25px_rgba(227,30,36,0.5)] ring-4 ring-[#E31E24]/15 z-20"
                        : "bg-white text-[#6B6B6B] border border-black/10 shadow-sm hover:text-[#0A0A0A] hover:border-black/20 z-10"
                    }`}
                    style={{ position: "absolute" }}
                    aria-label={`View testimonial by ${t.author}`}
                  >
                    {t.initials}
                  </motion.button>
                );
              })}

              {/* Center Score Display */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center select-none">
                <span className="font-[var(--font-clash)] text-5xl font-bold tracking-tight text-[#0A0A0A]">
                  4.9
                </span>
                <span className="mt-0.5 font-[var(--font-cabinet)] text-[10px] font-bold uppercase tracking-[0.25em] text-[#6B6B6B]">
                  Overall Rating
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Spotlight Testimonial Card */}
          <div className="flex flex-col justify-center lg:col-span-7 lg:pl-6">
            
            {/* Premium Star Rating Pill */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-[#E31E24]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="h-1 w-1 rounded-full bg-black/20" />
              <span className="font-[var(--font-cabinet)] text-xs font-bold uppercase tracking-wider text-[#6B6B6B]">
                Verified Client ROI
              </span>
            </div>

            {/* Animated Quote & Author Container */}
            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                >
                  <blockquote className="font-[var(--font-clash)] text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.25] tracking-[-0.02em] text-[#0A0A0A]">
                    &ldquo;{testimonials[active].quote}&rdquo;
                  </blockquote>

                  <div className="mt-10 flex items-center gap-4">
                    {/* Replaced confusing pink initials with high-contrast executive badge */}
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0A0A0A] font-[var(--font-clash)] text-lg font-bold text-white shadow-md">
                      {testimonials[active].initials}
                      <div className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#E31E24] text-white ring-2 ring-white">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-[var(--font-cabinet)] text-lg font-bold text-[#0A0A0A]">
                        {testimonials[active].author}
                      </h4>
                      <p className="font-[var(--font-cabinet)] text-sm font-medium text-[#6B6B6B]">
                        {testimonials[active].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination & Controls */}
            <div className="mt-12 flex items-center gap-6 border-t border-black/5 pt-8">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={prev}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white transition-all hover:border-[#E31E24] hover:bg-[#E31E24] hover:text-white hover:shadow-lg"
                  aria-label="Previous client story"
                >
                  <svg className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white transition-all hover:border-[#E31E24] hover:bg-[#E31E24] hover:text-white hover:shadow-lg"
                  aria-label="Next client story"
                >
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Progress Bars (Wrapped in py-2 for larger click targets) */}
              <div className="ml-2 flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    className="py-2 group"
                    aria-label={`Jump to story ${i + 1}`}
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-500 ${
                        i === active
                          ? "w-10 bg-[#E31E24]"
                          : "w-2 bg-black/15 group-hover:bg-black/30"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="ml-auto font-[var(--font-cabinet)] text-sm font-bold tracking-widest text-[#6B6B6B]">
                <span className="text-[#0A0A0A]">{String(active + 1).padStart(2, "0")}</span> / {String(testimonials.length).padStart(2, "0")}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}