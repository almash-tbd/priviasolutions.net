"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Globe, Code, Cpu, Server, Database, MapPin } from "lucide-react";
import { caseStudiesData } from "@/data/siteData";

// Animated Metric Counter Component
function MetricCounter({ value, startTrigger }) {
  const [count, setCount] = useState(0);
  const target = parseFloat(value);
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (!startTrigger) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    const stepValue = target / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, startTrigger]);

  const decimalPlaces = target % 1 !== 0 ? 2 : 0;

  return (
    <span>
      {startTrigger ? count.toFixed(decimalPlaces) : "0"}
      {suffix}
    </span>
  );
}

export default function CaseStudiesHub() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sliderVal, setSliderVal] = useState(50); // Before/After slider percentage
  const [inViewMetrics, setInViewMetrics] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const categories = ["All", "Cloud", "DevOps", "Security", "Migration"];

  // Filter studies based on tag
  const filteredStudies = Object.entries(caseStudiesData).filter(([slug, data]) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Cloud") return data.industry.toLowerCase().includes("cloud") || data.title.toLowerCase().includes("cloud");
    if (activeCategory === "DevOps") return data.techStack.includes("Docker") || data.techStack.includes("Kubernetes") || data.title.toLowerCase().includes("ci/cd");
    if (activeCategory === "Security") return data.techStack.includes("Snyk") || data.title.toLowerCase().includes("security");
    if (activeCategory === "Migration") return data.description.toLowerCase().includes("migrated") || data.title.toLowerCase().includes("migration");
    return true;
  });

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-slate-50/50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden text-left"
      style={{
        background: `
          radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.035), transparent 40%),
          #f8fafc
        `
      }}
    >
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e2e8f0_1.5px,transparent_1.5px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none opacity-[0.03]" />

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ================= HERO SECTION ================= */}
        <motion.header 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200/80 pb-8"
        >
          <div className="space-y-4 text-left">
            <span className="text-xs font-black tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 shadow-sm inline-block uppercase font-mono">
              CASE STUDIES
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-outfit tracking-tight leading-[1.1]">
              Real Challenges. <br />
              Proven Results.
            </h1>
            <p className="text-slate-555 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              Explore how we help businesses modernize, secure, and scale their infrastructure to achieve measurable outcomes.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4.5 py-2 rounded-full text-xs font-extrabold transition-all border ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow shadow-blue-600/10"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:shadow-2xs"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.header>

        {/* ================= BEFORE / AFTER DRAG SLIDER ================= */}
        <section className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-black tracking-widest text-blue-600 uppercase font-mono pl-0.5">TRANSFORMATION MOCKUP</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-outfit tracking-tight leading-snug">Deployment Pipeline Speed Shift</h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
              Slide the slider handle left and right to compare manual pipeline releases against Privia automated GitOps canary release speeds.
            </p>
            
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-3.5 text-xs font-extrabold">
                <span className="w-6 h-6 rounded bg-red-150 text-red-700 flex items-center justify-center font-mono">B</span>
                <span className="text-slate-650">Before: Manual script triggers, staging blocks, 20-hour deployment cycles.</span>
              </div>
              <div className="flex items-center space-x-3.5 text-xs font-extrabold">
                <span className="w-6 h-6 rounded bg-emerald-150 text-emerald-700 flex items-center justify-center font-mono">A</span>
                <span className="text-slate-655">After: GitOps trigger, automated canaries, 5-minute zero-downtime rolls.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            {/* Interactive Before/After container */}
            <div className="relative w-full h-[220px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md select-none bg-slate-50">
              
              {/* BEFORE LAYER (Red/Left) */}
              <div className="absolute inset-0 bg-red-50/30 flex flex-col justify-center items-center p-6 text-center">
                <span className="text-[10px] font-black text-red-500 tracking-widest uppercase font-mono mb-2">BEFORE MANUAL PROCESS</span>
                <h3 className="text-3xl font-black text-slate-800 font-outfit">20 Hours</h3>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-normal">Engineering manual release cycles</p>
              </div>

              {/* AFTER LAYER (Blue/Right, width dynamic) */}
              <div 
                className="absolute inset-y-0 right-0 bg-blue-50/90 border-l border-blue-500/80 flex flex-col justify-center items-center p-6 text-center overflow-hidden transition-all duration-75"
                style={{ width: `${100 - sliderVal}%` }}
              >
                {/* Fixed width inner to prevent text wrapping when clipping */}
                <div className="w-[360px] flex flex-col items-center justify-center shrink-0">
                  <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase font-mono mb-2">AFTER PRIVIA GITOPS</span>
                  <h3 className="text-3xl font-black text-blue-700 font-outfit">5 Minutes</h3>
                  <p className="text-xs text-slate-550 font-semibold mt-1 leading-normal">Automated canary release rolls</p>
                </div>
              </div>

              {/* Invisible Slider Input Overlaid */}
              <input 
                type="range"
                min="0"
                max="100"
                value={sliderVal}
                onChange={(e) => setSliderVal(parseFloat(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize z-20"
              />

              {/* Drag Handle Indicator */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-blue-600 pointer-events-none z-10"
                style={{ left: `${sliderVal}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md border border-white">
                  ↔
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* ================= CASE STUDIES GRID (WITH COUNT-UP & REVEAL) ================= */}
        <section className="space-y-12">
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-xs font-black tracking-widest text-blue-600 uppercase font-mono pl-0.5">CASE HIGHLIGHTS</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">Hover over cards to reveal the container’s technical framework stack.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map(([slug, data]) => {
              return (
                <motion.div 
                  onViewportEnter={() => setInViewMetrics(prev => ({ ...prev, [slug]: true }))}
                  key={slug} 
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col justify-between group relative overflow-hidden h-full"
                >
                  <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-blue-50/20 rounded-full blur-[65px] pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    
                    {/* Header */}
                    <div className="space-y-2 text-left">
                      <div className="flex flex-wrap items-center gap-2 text-[9px] text-slate-400 font-black uppercase tracking-wider font-mono">
                        <span className="text-blue-600 font-extrabold">{data.client}</span>
                        <span>•</span>
                        <span>{data.industry}</span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors pt-1">
                        {data.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed pt-2">
                        {data.description}
                      </p>
                    </div>

                    {/* Scroll Triggered Metrics Counter */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100 text-center">
                      {data.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="text-xl sm:text-2xl font-black text-blue-600 font-outfit tracking-tight">
                            <MetricCounter value={m.value} startTrigger={inViewMetrics[slug]} />
                          </div>
                          <div className="text-[9px] text-slate-450 font-black uppercase tracking-widest font-mono leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Architecture Reveal on hover */}
                    <div className="space-y-2.5 transition-all duration-300 transform translate-y-1 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 text-left">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block font-mono">FRAMEWORK REVEAL</span>
                      <div className="flex flex-wrap gap-1.5">
                        {data.techStack.slice(0, 4).map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2.5 py-1 text-[9px] text-slate-650 bg-slate-50 border border-slate-200 rounded-md font-extrabold font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 relative z-10">
                    <Link 
                      href={`/case-studies/${slug}`}
                      className="flex items-center justify-center w-full py-3 rounded-xl font-extrabold text-xs text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100/50 hover:border-slate-350 transition-all text-center uppercase tracking-wider"
                    >
                      Read Full Case Study
                      <ChevronRight className="w-4 h-4 ml-1.5 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                    </Link>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </section>


        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-800 text-white text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Subtle grid texture in banner */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            {/* SVG Cabinet/Filing Graphic */}
            <div className="w-16 h-16 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
              <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-white fill-white/5" fill="none" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2.5" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="21" y2="15" />
                <circle cx="12" cy="6" r="1.5" className="fill-white" />
                <circle cx="12" cy="12" r="1.5" className="fill-white" />
                <circle cx="12" cy="18" r="1.5" className="fill-white" />
              </svg>
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Have a challenge we can help with?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl font-medium leading-relaxed">
                Let's discuss your requirements and design a scaling or compliance roadmap tailored to your timeline constraints.
              </p>
            </div>
          </div>
          
          <Link 
            href="/contact"
            className="px-6 py-3.5 rounded-xl text-xs font-extrabold text-slate-900 bg-white hover:bg-slate-100 transition-all flex items-center shrink-0 gap-2 shadow-md relative z-10"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
