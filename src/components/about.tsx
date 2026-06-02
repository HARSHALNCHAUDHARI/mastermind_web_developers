'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const statsData = [
  { value: 150, suffix: '+', label: 'Completed Projects' },
  { value: 500, suffix: '+', label: 'Awesome Clients' },
  { value: 8, suffix: '+', label: 'Years Expertise' },
];

const platforms = [
  { id: 'PF_01', name: 'SelectedFirms', url: 'https://selectedfirms.co', x: '88%', y: '50%', logoSrc: '/logos/selectedfirms.png' },
  { id: 'PF_02', name: 'TechBehemoths', url: 'https://techbehemoths.com', x: '77%', y: '77%', logoSrc: '/logos/techbehemoths.png' },
  { id: 'PF_03', name: 'SuperbCompanies', url: 'https://superbcompanies.com', x: '50%', y: '88%', logoSrc: '/logos/superbcompanies.png' },
  { id: 'PF_04', name: 'ExportersIndia', url: 'https://exportersindia.com', x: '23%', y: '77%', logoSrc: '/logos/exportersindia.png' },
  { id: 'PF_05', name: 'PuneOnline', url: 'https://puneonline.in', x: '12%', y: '50%', logoSrc: '/logos/puneonline.png' },
  { id: 'PF_06', name: 'Clutch', url: 'https://clutch.co', x: '23%', y: '23%', logoSrc: '/logos/clutch.png' },
  { id: 'PF_07', name: 'DesignRush', url: 'https://designrush.com', x: '50%', y: '12%', logoSrc: '/logos/designrush.png' },
  { id: 'PF_08', name: 'Techreviewer', url: 'https://techreviewer.co', x: '77%', y: '23%', logoSrc: '/logos/techreviewer.png' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const nodesRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const linesRef = useRef<(SVGLineElement | null)[]>([]);

  const orbLeftRef = useRef<HTMLDivElement>(null);
  const orbRightRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      
      // 1. BACKGROUND ORB MOVEMENTS
      gsap.fromTo(orbLeftRef.current,
        { x: '-10vw', y: '-10vh' },
        { x: '20vw', y: '25vh', duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut' }
      );

      gsap.fromTo(orbRightRef.current,
        { x: '10vw', y: '10vh' },
        { x: '-20vw', y: '-25vh', duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' }
      );

      gsap.fromTo('.ambient-point',
        { y: 20, opacity: 0.1 },
        { y: -20, opacity: 0.4, duration: 4, stagger: { amount: 2, each: 0.2, repeat: -1, yoyo: true }, ease: 'sine.inOut' }
      );

      // 2. HEADER COPY ENTRY
      if (textRef.current) {
        gsap.fromTo(textRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: textRef.current, start: 'top 80%' } }
        );
      }

      // 3. TELEMETRY STATS RUN
      statsRef.current.forEach((stat, index) => {
        if (!stat) return;
        const numberSpan = numbersRef.current[index];
        
        gsap.fromTo(stat, 
          { opacity: 0, scale: 0.95 }, 
          { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out', scrollTrigger: { trigger: stat, start: 'top 85%' } }
        );

        if (numberSpan) {
          gsap.fromTo(numberSpan,
            { innerText: 0 },
            {
              innerText: statsData[index].value,
              duration: 1.6, snap: { innerText: 1 }, ease: 'power3.out',
              scrollTrigger: { trigger: numberSpan, start: 'top 85%' },
              onUpdate: function() {
                numberSpan.innerText = Math.ceil(Number(this.targets()[0].innerText)).toString();
              }
            }
          );
        }
      });

      // 4. DESKTOP-SPECIFIC RADIAL SETUP (Only triggers if element is present in viewport layout)
      if (mapContainerRef.current && coreRef.current && window.innerWidth >= 768) {
        const mapTl = gsap.timeline({
          scrollTrigger: { trigger: mapContainerRef.current, start: 'top 75%' }
        });

        mapTl.fromTo(coreRef.current, 
          { scale: 0, opacity: 0 }, 
          { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.5)' }
        );

        linesRef.current.forEach((line) => {
          if (!line) return;
          mapTl.fromTo(line, 
            { strokeDasharray: 100, strokeDashoffset: 100 },
            { strokeDashoffset: 0, duration: 0.4, ease: 'power3.out' },
            '-=0.3'
          );
        });

        nodesRef.current.forEach((node, i) => {
          if (!node) return;
          mapTl.fromTo(node,
            { opacity: 0, scale: 0.85 },
            { 
              opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out',
              onComplete: () => {
                gsap.to(node, {
                  y: `+=${Math.random() * 6 + 4}`,
                  duration: Math.random() * 1 + 1.5,
                  repeat: -1, yoyo: true, ease: 'sine.inOut'
                });
              }
            },
            '-=0.3'
          );
        });
      } else {
        // MOBILE ONLY STAGGER UP (Since the radial container is bypassed on mobile viewports)
        gsap.fromTo('.mobile-platform-node',
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out',
            scrollTrigger: { trigger: '.mobile-platform-grid', start: 'top 85%' }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
      id="about-us" 
      className="relative w-full bg-[#030101] text-white py-16 md:py-24 lg:py-32 overflow-hidden font-sans selection:bg-red-600/30"
    >
      {/* Background Ambience Layers */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <div ref={orbLeftRef} className="absolute top-[5%] left-[-10%] w-[350px] sm:w-[600px] md:w-[700px] h-[350px] sm:h-[600px] md:h-[700px] bg-[#cc0000] blur-[120px] sm:blur-[150px] rounded-full mix-blend-screen opacity-[0.25] sm:opacity-[0.35] transform-gpu" />
        <div ref={orbRightRef} className="absolute bottom-[5%] right-[-10%] w-[400px] sm:w-[650px] md:w-[750px] h-[400px] sm:h-[650px] md:h-[750px] bg-[#991b1b] blur-[140px] sm:blur-[180px] rounded-full mix-blend-screen opacity-[0.2] sm:opacity-[0.25] transform-gpu" />
        <div className="absolute inset-0 w-full h-full flex flex-wrap justify-between items-center p-10 sm:p-20 opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="ambient-point w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]" />
          ))}
        </div>
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(220, 38, 38, 0.08), transparent 60%)` }} />
      </div>

      {/* Main Structural Framework Layout Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-20 md:gap-28">
        
        {/* UPPER ROW: MANIFESTO & TELEMETRY COUNTER LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          <div ref={textRef} className="w-full lg:w-1/2 flex flex-col">
            <div className="inline-flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-12 h-[2px] bg-red-600" />
              <span className="text-red-500 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase font-bold">About Mastermind</span>
            </div>
            
            <h2 className="text-[clamp(2.25rem,4.5vw,4.5rem)] font-bold tracking-tight leading-[1.05] mb-6 md:mb-8 text-white uppercase">
              Where AI Meets Creativity for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Smarter Marketing.</span>
            </h2>
            
            <p className="text-zinc-200 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-4 md:mb-6 border-l-[3px] border-red-600 pl-4 md:pl-6 bg-white/[0.01] py-1.5 rounded-r-lg">
              Based in Pune, we are a leading digital marketing agency with 8+ years of proven expertise in building brands that win online.
            </p>
            
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              Our team of strategists, designers, and tech innovators specialize in SEO, PPC, social media, and AI-driven campaigns that deliver measurable ROI. We harness the power of artificial intelligence to predict trends, optimize campaigns in real time, and personalize customer journeys.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {statsData.map((stat, index) => (
              <div 
                key={index}
                ref={(el) => { if (el) statsRef.current[index] = el; }}
                className="flex-1 min-w-[140px] sm:min-w-[180px] bg-[#0c0303]/90 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center group transition-colors duration-300 hover:border-red-600/50"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white mb-1.5 flex items-baseline">
                  <span ref={(el) => { if (el) numbersRef.current[index] = el; }}>0</span>
                  <span className="text-red-600">{stat.suffix}</span>
                </div>
                <div className="h-[1px] w-10 bg-red-600/30 group-hover:bg-red-600 group-hover:w-16 transition-all duration-300 mb-2.5" />
                <p className="text-zinc-400 text-[11px] sm:text-xs md:text-sm font-light tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* LOWER ROW: RECONFIGURED NEURAL MAP MATRIX */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center w-full">
          
          {/* A. TABLET / DESKTOP RADIAL MESH VIEWPORT LAYOUT */}
          <div ref={mapContainerRef} className="hidden md:flex w-full lg:w-2/3 items-center justify-center relative z-10">
            <div className="relative w-full max-w-[480px] lg:max-w-[750px] aspect-square bg-[#070202]/60 border border-white/10 rounded-full p-4 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {platforms.map((platform, i) => (
                  <g key={`line-${i}`}>
                    <line 
                      ref={(el) => { if (el) linesRef.current[i] = el; }}
                      x1="50" y1="50" 
                      x2={parseFloat(platform.x)} y2={parseFloat(platform.y)} 
                      stroke="rgba(220,38,38,0.25)" strokeWidth="0.5"
                      pathLength="100" 
                    />
                    <line 
                      x1="50" y1="50" 
                      x2={parseFloat(platform.x)} y2={parseFloat(platform.y)} 
                      stroke="#dc2626" strokeWidth="1.25"
                      strokeLinecap="round"
                      pathLength="100"
                      strokeDasharray="6 94" 
                      className="animate-[kineticEnergy_1.1s_linear_infinite]"
                      style={{ filter: 'drop-shadow(0 0 5px #dc2626)', animationDelay: `${i * 0.12}s` }}
                    />
                  </g>
                ))}
              </svg>

              <div ref={coreRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 bg-[#0c0303] border border-red-600 rounded-full flex items-center justify-center z-30 shadow-[0_0_35px_rgba(220,38,38,0.5)]">
                 <span className="font-black text-red-500 text-xl lg:text-2xl transform -translate-y-0.5">M</span>
                 <div className="absolute inset-0 rounded-full border border-red-600 animate-ping opacity-20 pointer-events-none" />
              </div>

              {platforms.map((platform, index) => (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => { if (el) nodesRef.current[index] = el; }}
                  className="absolute flex items-center justify-center bg-[#080202] border border-white/10 rounded-xl px-3 lg:px-4 py-2 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:border-red-500 hover:bg-[#0c0303] group z-20 cursor-pointer overflow-hidden transition-all duration-300"
                  style={{ 
                    left: platform.x, top: platform.y,
                    transform: 'translate(-50%, -50%)',
                    width: '220px', // Perfectly scaled for tablet screen widths
                    height: '75px'
                  }}
                >
                   <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-300 pointer-events-none" />
                   <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100 duration-300 shadow-[0_0_10px_#dc2626]">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                   </div>
                   <div className="relative w-full h-full flex items-center justify-center">
                      <img 
                        src={platform.logoSrc} alt={platform.name} 
                        className="max-h-5 max-w-[120px] w-auto h-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <span className="hidden font-mono text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 group-hover:text-white whitespace-nowrap text-center px-1">
                        {platform.name}
                      </span>
                   </div>
                </a>
              ))}
            </div>
          </div>

          {/* B. MOBILE NATIVE PLATFORM GRID LAYOUT (Strictly targets devices under 768px wide) */}
          <div className="mobile-platform-grid grid grid-cols-2 gap-3 w-full md:hidden z-10">
            {platforms.map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-platform-node relative flex items-center justify-center h-20 bg-[#080202]/90 border border-white/10 rounded-xl px-4 py-3 shadow-lg active:border-red-500"
              >
                <div className="absolute top-2 right-2 text-red-500">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={platform.logoSrc} alt={platform.name} 
                    className="max-h-6 max-w-[110px] w-auto h-auto object-contain filter grayscale opacity-80"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-300 whitespace-nowrap text-center">
                    {platform.name}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* RIGHT SIDE TEXT CALLOUT AREA */}
          <div className="w-full lg:w-1/3 flex flex-col z-20 lg:pl-12 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6 text-white uppercase">
              Recognized On <br /> Major Platforms
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-6 md:mb-8 max-w-md">
              Our commitment to excellence and results has been recognized by leading industry platforms. We are proud to be a trusted partner for businesses seeking to elevate their digital presence and achieve measurable growth.
            </p>
            
            <div className="flex items-center gap-3 bg-[#0a0303] border border-white/10 w-max px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg">
               <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626] animate-pulse" />
               <span className="text-[10px] sm:text-xs font-mono text-zinc-300 uppercase tracking-widest mt-0.5">Network Active</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}