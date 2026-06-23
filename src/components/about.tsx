'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* ════════════════════════════════════════
   SVG ICONS
════════════════════════════════════════ */
const CubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const TrophyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><circle cx="12" cy="9" r="4" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);
const TargetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8c1b1b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const EyeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8c1b1b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const SparklesIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8c1b1b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

/* ════════════════════════════════════════
   ANIMATED COUNTER
════════════════════════════════════════ */
function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.round((1 - Math.pow(1 - progress, 3)) * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

/* ════════════════════════════════════════
   3D STACK + ENERGY LINES + PROCESS LIST
════════════════════════════════════════ */
const PROCESS_STEPS = [
  { label: 'STRATEGY', desc: 'Understanding your goals and user needs.' },
  { label: 'DESIGN', desc: 'Crafting intuitive and engaging experiences.' },
  { label: 'DEVELOPMENT', desc: 'Building robust, scalable and future-ready solutions.' },
  { label: 'GROWTH', desc: 'Driving results through data and continuous optimization.' },
];

function StackWithProcess() {
  // Y-coordinates meticulously aligned to the right-most corner of each 3D glass plane
  const lineY = [95, 170, 245, 320];

  return (
    <div className="process-module h1l-inter selection:bg-red-600 selection:text-white" style={{ position: 'relative', width: '100%', maxWidth: 950, height: 420, margin: '0 auto' }}>

      {/* 1. STACK ZONE (Fixed Width Left Side) */}
      <div style={{ position: 'absolute', left: 0, top: 0, width: 420, height: '100%', perspective: '1400px', zIndex: 2 }}>
        <div style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-45deg)' }}>
          {/* Exact Z depths to perfectly match the 75px gaps of the SVG lines */}
          {[120, 35, -50, -135].map((zPx, i) => (
            <div
              key={i}
              className="stack-layer"
              style={{
                position: 'absolute', 
                width: 320,  // Much larger stack panels
                height: 320, 
                left: '50%', top: '50%',
                marginLeft: -160, marginTop: -160,
                background: 'rgba(255, 255, 255, 0.65)',
                border: i === 0 ? '1.5px solid rgba(220,38,38,0.3)' : '1px solid rgba(200, 200, 200, 0.3)',
                boxShadow: i === 0 
                  ? 'inset 0 0 30px rgba(255,255,255,1), 0 20px 40px rgba(220,38,38,0.1)' 
                  : 'inset 0 0 20px rgba(255,255,255,0.8), 0 10px 20px rgba(0,0,0,0.03)',
                transform: `translateZ(${zPx}px)`,
                borderRadius: 20, 
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 60%)', borderRadius: 20 }} />
              
              {i === 0 && (
                <div style={{ position: 'absolute', zIndex: 5, filter: 'drop-shadow(0 15px 25px rgba(220,38,38,0.35))' }}>
                  <span style={{ fontSize: 100, fontWeight: 900, color: '#dc2626', fontFamily: "'Clash Display', sans-serif", letterSpacing: '-0.05em' }}>M</span>
                </div>
              )}

              {i === 3 && (
                 <div style={{ position: 'absolute', bottom: 20, right: 20, width: 10, height: 10, background: '#dc2626', borderRadius: '50%', boxShadow: '0 0 14px rgba(220,38,38,1)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. STRICT SVG LINE ZONE (Spans only the empty space between stack and text) */}
      {/* Starting exactly where the stack's right corner ends, stopping at the text bullet */}
      <div style={{ position: 'absolute', left: 400, top: 0, width: 120, height: '100%', zIndex: 1 }}>
        <svg style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          {lineY.map((y, i) => (
            <g key={i}>
              <line x1="0" y1={y} x2="100%" y2={y} stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 4" />
              <line 
                x1="0" y1={y} x2="100%" y2={y} 
                stroke="#dc2626" strokeWidth="2" 
                strokeDasharray="25 150" 
                className="energy-line"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* 3. PROCESS TEXT ZONE (Absolutely positioned, guaranteed safe from lines) */}
      <div style={{ position: 'absolute', left: 520, top: 0, width: 400, height: '100%', zIndex: 3 }}>
        {PROCESS_STEPS.map((step, i) => (
          <div
            key={i}
            className="proc-item"
            style={{
              position: 'absolute', top: lineY[i], left: 0,
              transform: 'translateY(-50%)',
              display: 'flex', alignItems: 'flex-start', gap: 16,
            }}
          >
            {/* The exact Bullet Design from the screenshot */}
            <div style={{ position: 'relative', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: -2 }}>
              {/* Pulsing pale background */}
              <div className="bullet-pulse" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(220, 38, 38, 0.12)' }} />
              {/* Solid dark red ring */}
              <div style={{ position: 'absolute', inset: 3, borderRadius: '50%', border: '1.5px solid #dc2626' }} />
              {/* Solid red core dot */}
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#dc2626' }} />
            </div>

            <div>
              <h4 style={{ fontSize: 14, fontWeight: 800, color: '#9f1239', textTransform: 'uppercase', marginBottom: 6, fontFamily: "'Inter', sans-serif", letterSpacing: '0.06em' }}>
                {step.label}
              </h4>
              <p style={{ fontSize: 14.5, color: '#334155', lineHeight: 1.6, fontFamily: "'Inter', sans-serif", maxWidth: 300, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════ */
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from('.ab-heading > *', { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.ab-heading', start: 'top 85%' }});
      gsap.from('.stack-layer', { y: -40, opacity: 0, duration: 1, stagger: 0.15, ease: 'back.out(1.2)', scrollTrigger: { trigger: '.process-module', start: 'top 85%' }});
      gsap.from('.proc-item', { x: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.process-module', start: 'top 85%' }});
      gsap.from('.stat-box', { scale: 0.9, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)', scrollTrigger: { trigger: '.stats-wrapper', start: 'top 90%' }});
      gsap.from('.val-row', { y: 20, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: '.values-wrapper', start: 'top 85%' }});
      gsap.from('.center-img', { filter: 'blur(10px)', scale: 1.05, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.center-img', start: 'top 85%' }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#fdfdfd',
        padding: '120px 6%',
        fontFamily: "'Inter', sans-serif",
        overflow: 'hidden',
        color: '#0f172a'
      }}
    >
      {/* Subtle Dot Grid Background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.3, pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1400, margin: '0 auto' }}>

        {/* ══ TOP ROW ══ */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', marginBottom: 100 }}>
          
          <div className="ab-heading" style={{ flex: '1 1 400px', maxWidth: 500, paddingTop: 60 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.15em', color: '#dc2626', textTransform: 'uppercase' }}>About Us</span>
              <div style={{ width: 30, height: 1.5, background: '#dc2626' }} />
            </div>

            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.03em', color: '#000', marginBottom: 28 }}>
              Building Digital Products That Drive <span style={{ color: '#dc2626' }}>Real Impact.</span>
            </h2>

            <p style={{ fontSize: 16, color: '#334155', lineHeight: 1.6, fontWeight: 400 }}>
              MasterMind Systems is a digital innovation partner for ambitious brands. We blend creativity, technology
              and strategy to build products and experiences that create measurable growth.
            </p>
          </div>

          <div style={{ flex: '1 1 750px', display: 'flex', justifyContent: 'flex-end' }}>
            <StackWithProcess />
          </div>
        </div>

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06) 10%, rgba(0,0,0,0.06) 90%, transparent)', marginBottom: 60 }} />

        {/* ══ BOTTOM ROW ══ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 1.5fr minmax(320px, 1fr)', gap: '60px', alignItems: 'stretch' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <p style={{ fontSize: 15, color: '#334155', lineHeight: 1.6, marginBottom: 32 }}>
              Over the years, we've had the privilege of working with amazing clients and delivering solutions that make a difference.
            </p>
            
            <div className="stats-wrapper" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid #f1f5f9', borderLeft: '1px solid #f1f5f9' }}>
              {[
                { val: 120, suff: '+', label: 'Projects Delivered', Icon: CubeIcon, isNum: true },
                { val: 98, suff: '%', label: 'Client Satisfaction', Icon: UsersIcon, isNum: true },
                { val: 10, suff: '+', label: 'Awards Won', Icon: TrophyIcon, isNum: true },
                { val: 0, suff: '', label: 'Clients Worldwide', Icon: GlobeIcon, isNum: false, customText: 'Global' },
              ].map((s, i) => (
                <div key={i} className="stat-box" style={{ padding: '24px 16px', borderRight: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid #f1f5f9', borderRadius: 8 }}>
                    <s.Icon />
                  </div>
                  <div style={{ fontSize: 32, fontWeight: 700, color: '#000', lineHeight: 1, marginTop: 4 }}>
                    {s.isNum ? <><AnimatedCounter target={s.val} /><span style={{ fontSize: 24 }}>{s.suff}</span></> : <span>{s.customText}</span>}
                  </div>
                  <p style={{ fontSize: 12, color: '#dc2626', fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="center-img" style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', minHeight: 380, background: '#f1f5f9' }}>
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" alt="MasterMind Studio" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.3) contrast(1.1)' }} />
             <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)' }}>
               <span style={{ fontSize: 100, fontWeight: 900, color: '#ef4444', filter: 'drop-shadow(0 0 40px rgba(239,68,68,0.8)) blur(0.5px)', fontFamily: "'Clash Display', sans-serif" }}>M</span>
             </div>
          </div>

          <div className="values-wrapper" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {[
              { title: 'Our Mission', desc: 'To empower brands with digital solutions that solve real problems and unlock growth.', Icon: TargetIcon },
              { title: 'Our Vision', desc: 'To be a global leader in building digital experiences that shape the future.', Icon: EyeIcon },
              { title: 'Our Values', desc: 'Innovation, Integrity and collaboration are at the core of everything we do.', Icon: SparklesIcon },
            ].map((v, i) => (
              <div key={i} className="val-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 20, padding: '24px 0', borderBottom: i !== 2 ? '1px solid #f1f5f9' : 'none' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#fff', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                  <v.Icon />
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 500, color: '#000', marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.5 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700,900&display=swap');

        /* Flow Animation */
        @keyframes flowEnergy {
          0% { stroke-dashoffset: 175; }
          100% { stroke-dashoffset: 0; }
        }
        .energy-line {
          animation: flowEnergy 1.6s linear infinite;
        }

        /* Pale Background Radar Pulse */
        @keyframes pulseBackground {
          0% { transform: scale(0.85); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0; }
          100% { transform: scale(0.85); opacity: 0; }
        }
        .bullet-pulse {
          animation: pulseBackground 1.8s ease-out infinite;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .bottom-row { grid-template-columns: 1fr 1fr !important; }
          .values-wrapper { grid-column: span 2; }
        }
        @media (max-width: 1000px) {
          .process-module { height: auto !important; }
          /* Collapse strict layout on mobile */
          .process-module > div { position: relative !important; left: auto !important; width: 100% !important; }
          .process-module > div:nth-child(2) { display: none; } /* Hide lines */
          .proc-item { position: relative !important; top: auto !important; transform: none !important; margin-bottom: 24px; padding-left: 20px;}
        }
      `}} />
    </section>
  );
}