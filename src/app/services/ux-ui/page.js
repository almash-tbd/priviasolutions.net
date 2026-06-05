"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Compass, 
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Palette, Eye, Layout, PenTool, Accessibility
} from "lucide-react";

const TechLogo = ({ name }) => {
  const logos = {
    "Figma": (
      <svg viewBox="0 0 38 57" className="w-8 h-8">
        <path d="M19 0H9.5C4.25 0 0 4.25 0 9.5C0 14.75 4.25 19 9.5 19H19V0Z" fill="#F24E1E"/>
        <path d="M19 19H28.5C33.75 19 38 14.75 38 9.5C38 4.25 33.75 0 28.5 0H19V19Z" fill="#FF7262"/>
        <path d="M19 19H9.5C4.25 19 0 23.25 0 28.5C0 33.75 4.25 38 9.5 38H19V19Z" fill="#A259FF"/>
        <path d="M38 28.5C38 23.25 33.75 19 28.5 19H19V38H28.5C33.75 38 38 33.75 38 28.5Z" fill="#1ABC9C"/>
        <path d="M19 38H9.5C4.25 38 0 42.25 0 47.5C0 52.75 4.25 57 9.5 57C14.75 57 19 52.75 19 47.5V38Z" fill="#0ACF83"/>
      </svg>
    ),
    "Sketch": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <path d="M12 2L2 9L5 21H19L22 9L12 2Z" fill="#FDB300"/>
        <path d="M12 2L6 9H18L12 2Z" fill="#EA6C00"/>
        <path d="M12 2L2 9H6L12 2Z" fill="#FDAD00"/>
        <path d="M12 2L22 9H18L12 2Z" fill="#FDD231"/>
        <path d="M2 9L12 22L6 9H2Z" fill="#E25400"/>
        <path d="M22 9L12 22L18 9H22Z" fill="#EA6C00"/>
        <path d="M6 9L12 22L18 9H6Z" fill="#F38200"/>
      </svg>
    ),
    "Adobe XD": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <rect width="24" height="24" rx="5" fill="#2E001F" stroke="#FF61F6" strokeWidth="1"/>
        <path d="M6.5 7.5L8.5 11.5L10.5 7.5H12L9.5 12.5L12 17.5H10.5L8.5 13.5L6.5 17.5H5L7.5 12.5L5 7.5H6.5Z" fill="#FF61F6" />
        <path d="M13.5 7.5H16C18.2 7.5 19.5 9 19.5 12.5C19.5 16 18.2 17.5 16 17.5H13.5V7.5ZM15 9V16H16C17.2 16 18 15 18 12.5C18 10 17.2 9 16 9H15Z" fill="#FF61F6" />
      </svg>
    ),
    "Storybook": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <rect width="24" height="24" rx="5" fill="#FF4785" />
        <path d="M6 18V6C6 5.4 6.4 5 7 5H17C17.6 5 18 5.4 18 6V18C18 18.6 17.6 19 17 19H7C6.4 19 6 18.6 6 18Z" stroke="white" strokeWidth="2" />
        <path d="M10 5V12L12.5 10L15 12V5" fill="white" />
      </svg>
    ),
    "InVision": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <rect width="24" height="24" rx="5" fill="#FF3366" />
        <circle cx="9" cy="8" r="1.5" fill="white" />
        <rect x="8" y="11" width="2" height="6" fill="white" />
        <path d="M12 11V17H14V14C14 13 14.5 12.5 15.5 12.5C16.5 12.5 17 13 17 14V17H19V13.5C19 11.5 17.5 10.5 15.5 10.5C14 10.5 13 11 12.5 12" fill="white" />
      </svg>
    ),
    "Hotjar": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <path d="M12 2C12 2 19 7 19 12C19 15.9 15.9 19 12 19C8.1 19 5 15.9 5 12C5 7 12 2 12 2Z" fill="url(#hotjar-gradient)" />
        <path d="M12 7C12 7 16 10 16 13C16 15.2 14.2 17 12 17C9.8 17 8 15.2 8 13C8 10 12 7 12 7Z" fill="#FFE082" />
        <defs>
          <linearGradient id="hotjar-gradient" x1="12" y1="2" x2="12" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF4A00" />
            <stop offset="1" stopColor="#FF9000" />
          </linearGradient>
        </defs>
      </svg>
    ),
    "UserTesting": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <rect width="24" height="24" rx="5" fill="#00D2B4" />
        <circle cx="12" cy="9" r="3" fill="white" />
        <path d="M6 19C6 15.5 9 14 12 14C15 14 18 15.5 18 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  };
  return logos[name] || <Cpu className="w-8 h-8 text-slate-400" />;
};

export default function UxUiPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [faqPage, setFaqPage] = useState(0);
  const [faqInput, setFaqInput] = useState("");
  const [faqSent, setFaqSent] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // State for Interactive Design Process Sandbox
  const [activeStep, setActiveStep] = useState("discovery");

  // State for Accessibility Component Sandbox
  const [activeButtonState, setActiveButtonState] = useState("default");

  const processPillars = [
    {
      step: "01",
      id: "discovery",
      title: "Discovery",
      desc: "Detailed user research, stakeholder interviews, and comprehensive competitive analyses."
    },
    {
      step: "02",
      id: "wireframes",
      title: "Wireframes",
      desc: "Mapping information architecture, defining user flows, and sketching low-fidelity mockups."
    },
    {
      step: "03",
      id: "visual",
      title: "Visual Design",
      desc: "Pixel-perfect high-fidelity screens, cohesive design tokens, and unified brand guidelines."
    },
    {
      step: "04",
      id: "prototype",
      title: "Prototyping",
      desc: "Interactive clickable prototypes, hands-on usability tests, and constant design iterations."
    }
  ];

  const designSystems = [
    "Component libraries (Figma & Storybook)",
    "Design tokens and custom variables",
    "Cohesive typography & color systems",
    "Flexible, responsive grids and layouts",
    "Optimized SVG vector icon libraries",
    "Design system governance guidelines"
  ];

  const accessibilityFeatures = [
    "Comprehensive keyboard navigability",
    "Screen reader text compatibility",
    "Color contrast checks (WCAG AA+ ratios)",
    "Semantic HTML layout structure",
    "ARIA labels and interactive roles",
    "Rigorous accessibility auditing"
  ];

  const deliverables = [
    {
      title: "User Research & Persona",
      desc: "Target personas, complete user journey mappings, and actionable UX research logs."
    },
    {
      title: "Architecture & Wireframes",
      desc: "Detailed information architecture diagrams and structural low-fidelity wireframes."
    },
    {
      title: "High-Fidelity Mockups",
      desc: "Pixel-perfect visual screens, UI assets, and developer transfer guidelines."
    },
    {
      title: "Interactive Prototypes",
      desc: "High-fidelity interactive prototypes for usability test runs and stakeholders demo."
    }
  ];

  const techStack = [
    { name: "Figma", category: "Vector UI Design" },
    { name: "Sketch", category: "UI Mockups" },
    { name: "Adobe XD", category: "Vector Prototypes" },
    { name: "Storybook", category: "UI Component Sandbox" },
    { name: "InVision", category: "Interactive Demos" },
    { name: "Hotjar", category: "Heatmap Tracking" },
    { name: "UserTesting", category: "User Research Session" }
  ];

  const faqs = [
    {
      q: "Do you conduct user research?",
      a: "Yes. We conduct user interviews, surveys, usability testing, and analytics analysis. We create personas, journey maps, and empathy maps to inform design decisions. Research typically takes 1-2 weeks and involves 8-12 participants."
    },
    {
      q: "What is a design system and do I need one?",
      a: "A design system is a collection of reusable components, patterns, and guidelines that ensure consistency. You need one if you have multiple products, a growing team, or want to scale design efficiently. We build design systems in Figma + Storybook."
    },
    {
      q: "How do you ensure accessibility?",
      a: "We follow WCAG 2.1 AA standards: keyboard navigation, screen reader support, color contrast 4.5:1+, semantic HTML, ARIA labels, and focus indicators. We use automated tools (axe, Lighthouse) and manual testing with assistive technologies."
    },
    {
      q: "Can you work with our existing design system?",
      a: "Absolutely. We can extend, enhance, or migrate your existing design system. We work with popular systems (Material Design, Ant Design, Chakra UI) and create custom systems. We provide documentation and training for your team."
    },
    {
      q: "What is your typical project timeline?",
      a: "Simple projects (landing pages, small apps): 3-4 weeks. Medium complexity (multi-page apps): 6-8 weeks. Complex projects (enterprise dashboards, design systems): 10-16 weeks. We work in weekly sprints with regular feedback loops."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <Compass className="w-3.5 h-3.5 text-[#1591DC]" />
                <span>UX/UI & Product Design Division</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                UX/UI <br />
                <span className="bg-gradient-to-r from-rose-500 via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  & Product Design
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                User-centered design processes running from initial discovery audits to scalable, accessible design systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-rose-600 to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Start Product Design
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#process" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  Our Process
                </a>
              </div>
            </motion.div>

            {/* Right Side SVG Vector Gimmick */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-design" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(244, 63, 94, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-design)" />
                  
                  {/* Drawing Bezier Path */}
                  <path 
                    d="M 50,150 C 150,50 250,250 350,150" 
                    fill="none" 
                    stroke="#f43f5e" 
                    strokeWidth="3.5" 
                    className="ux-bezier-path" 
                  />
                  
                  {/* Anchor point 1 */}
                  <g transform="translate(50, 150)">
                    <circle r="6" fill="#f43f5e" />
                    <circle r="12" fill="none" stroke="rgba(244, 63, 94, 0.3)" strokeWidth="1.5" />
                  </g>

                  {/* Bezier handle coordinates */}
                  <line x1="150" y1="50" x2="150" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="150" cy="50" r="5" fill="#fda4af" />

                  {/* Anchor point 2 */}
                  <g transform="translate(350, 150)">
                    <circle r="6" fill="#f43f5e" />
                    <circle r="12" fill="none" stroke="rgba(244, 63, 94, 0.3)" strokeWidth="1.5" />
                  </g>
                  
                  {/* Pen icon tracking */}
                  <g transform="translate(200, 150)" className="ux-pen-tracer">
                    <PenTool className="w-6 h-6 text-white -translate-x-3 -translate-y-3 drop-shadow-[0_2px_8px_rgba(244,63,94,0.5)]" />
                  </g>
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                  <span>BEZIER RENDER: ACCURATE</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. OUR PROCESS (REDESIGNED: INTERACTIVE DESIGN PROCESS SANDBOX) */}
      <section id="process" className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">workflow::lifecycle</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Our Design Process</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Click the process lifecycle stages below to preview deliverables inside our sandbox canvas.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Stage buttons */}
            <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
              {processPillars.map((pil) => {
                const isActive = activeStep === pil.id;
                return (
                  <button
                    key={pil.step}
                    onClick={() => setActiveStep(pil.id)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? "bg-[#1b203a] border-rose-500 text-white shadow-lg shadow-rose-500/10" 
                        : "bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                    }`}
                  >
                    <span className="text-3xl font-black font-mono text-rose-500 block mb-1">{pil.step}</span>
                    <h4 className="text-sm font-bold">{pil.title}</h4>
                    <p className="text-xs text-slate-400 leading-normal mt-1">{pil.desc}</p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Visual Sandbox Canvas */}
            <div className="lg:col-span-7 p-6 rounded-3xl bg-[#090b16]/95 border border-white/5 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.02),transparent_70%)] pointer-events-none" />
              
              <div className="space-y-4 relative z-10 w-full flex flex-col h-full justify-between">
                <div className="flex justify-between items-center pb-3 border-b border-white/5 font-mono text-[9px] text-[#fda4af] font-bold uppercase tracking-wider">
                  <span>interactive_design_canvas::sandbox</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex-grow flex flex-col justify-center"
                  >
                    {activeStep === "discovery" && (
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/5 max-w-sm mx-auto space-y-3 font-sans">
                        <span className="text-[8px] font-mono text-rose-400 font-bold uppercase tracking-wider">Target Persona</span>
                        <h5 className="font-extrabold text-white text-sm">Sarah, Product Lead</h5>
                        <div className="border-t border-white/5 pt-2 space-y-1 text-slate-300 text-xs">
                          <p>**Core Goal**: Reduce checkout friction by 35%.</p>
                          <p>**Pain Point**: Complex multistep navigations drop user engagement.</p>
                        </div>
                      </div>
                    )}

                    {activeStep === "wireframes" && (
                      <div className="py-4 flex flex-col items-center">
                        {/* Blueprint wireframe */}
                        <svg viewBox="0 0 240 120" className="w-full max-w-[200px] h-auto border border-[#3b82f6]/40 rounded bg-slate-950 p-2" fill="none">
                          <rect width="220" height="20" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
                          <line x1="10" y1="10" x2="50" y2="10" stroke="#3b82f6" strokeWidth="1" />
                          
                          <rect x="0" y="30" width="60" height="70" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
                          <rect x="70" y="30" width="150" height="70" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
                        </svg>
                        <span className="text-[9px] font-mono text-slate-400 mt-2">LOW-FIDELITY GRID BLUEPRINT WIREFRAME</span>
                      </div>
                    )}

                    {activeStep === "visual" && (
                      <div className="py-4 flex flex-col items-center">
                        {/* High fidelity design */}
                        <div className="w-full max-w-[200px] border border-white/10 rounded-xl bg-slate-900/80 p-3 shadow-xl space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-500 to-indigo-500" />
                            <div className="w-16 h-2 rounded bg-slate-700" />
                          </div>
                          <div className="w-full h-8 rounded bg-gradient-to-r from-rose-500/20 to-indigo-500/20 border border-rose-500/30 flex items-center justify-center">
                            <span className="text-[8px] font-extrabold text-rose-300 tracking-wider">CHECKOUT PROCEED</span>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono text-slate-400 mt-2">HIGH-FIDELITY GRADIENT COMPONENT DESIGN</span>
                      </div>
                    )}

                    {activeStep === "prototype" && (
                      <div className="py-4 flex flex-col items-center relative">
                        {/* Cursor interaction */}
                        <div className="w-full max-w-[200px] border border-white/10 rounded-xl bg-slate-900/80 p-3 shadow-xl flex flex-col items-center justify-center">
                          <motion.button 
                            className="px-6 py-2 rounded-full font-bold text-xs bg-rose-500 text-white shadow-md relative"
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          >
                            Add to Cart
                          </motion.button>
                        </div>
                        
                        {/* Mock Cursor */}
                        <motion.div 
                          className="absolute pointer-events-none"
                          animate={{ x: [-20, 10, -20], y: [20, -10, 20] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <svg viewBox="0 0 20 20" className="w-4 h-4 text-white fill-white shadow-lg">
                            <path d="M0,0 L16,10 L9,11 L4,16 Z" />
                          </svg>
                        </motion.div>
                        <span className="text-[9px] font-mono text-slate-400 mt-3">PROTOTYPE USER CURSOR GESTURE INTERACTION</span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="border-t border-white/5 pt-3 mt-4 text-[9px] font-mono text-slate-500 uppercase tracking-widest flex justify-between">
                  <span>CANVAS STATE: RENDERING</span>
                  <span>PREVIEW: ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DESIGN SYSTEMS & ACCESSIBILITY (REDESIGNED: INTERACTIVE ACCESSIBILITY SANDBOX) */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">design::pillars</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Design Systems & Web Accessibility</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Test different UI states on the interactive button playground to verify accessibility parameters.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Column: UI previews details */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-950/40 border border-white/5 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <span className="text-[9px] font-mono text-[#fda4af] font-bold uppercase tracking-widest block">Button Dials</span>
                <h4 className="text-base font-extrabold text-white">Accessibility Focus Playground</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Toggle buttons below to evaluate contrast ratios and key outlines.
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {["default", "hover", "focus", "disabled"].map((st) => (
                    <button
                      key={st}
                      onClick={() => setActiveButtonState(st)}
                      className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                        activeButtonState === st 
                          ? "bg-rose-500 text-white shadow-sm" 
                          : "bg-slate-900 border border-white/5 text-slate-400 hover:text-white"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 mt-6 rounded-xl bg-slate-900/60 border border-white/5 text-[10px] font-mono text-slate-400 space-y-1">
                {activeButtonState === "default" && <div>[PASS] CONTRAST RATIO: 6.2:1 (PASS WCAG AAA)</div>}
                {activeButtonState === "hover" && <div>[PASS] HIGHLIGHT STATE: Opacity transition engaged</div>}
                {activeButtonState === "focus" && <div>[PASS] KEYBOARD OUTLINE: Enforced ring focus-visible</div>}
                {activeButtonState === "disabled" && <div>[PASS] ARIA PROPERTIES: aria-disabled="true"</div>}
              </div>
            </div>

            {/* Right Column: Large Preview Button Display */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-950/40 border border-white/5 flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeButtonState}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-4"
                >
                  <button 
                    disabled={activeButtonState === "disabled"}
                    className={`px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                      activeButtonState === "default" 
                        ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20" 
                        : activeButtonState === "hover" 
                        ? "bg-rose-600 text-white scale-102 shadow-lg"
                        : activeButtonState === "focus"
                        ? "bg-rose-500 text-white ring-4 ring-rose-400/50 ring-offset-4 ring-offset-slate-950 outline-none"
                        : "bg-slate-800 text-slate-500 cursor-not-allowed opacity-50"
                    }`}
                  >
                    Accessible Action Button
                  </button>
                  
                  <div className="text-[10px] font-mono text-slate-400">
                    {activeButtonState === "default" && "Optimal text colors for seamless readability."}
                    {activeButtonState === "hover" && "Engages micro-animations on user interactions."}
                    {activeButtonState === "focus" && "Provides outline indicators for screen-readers and keyboard focus."}
                    {activeButtonState === "disabled" && "Blocks system execution and returns accessibility disabled states."}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU GET */}
      <section className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#cddbf7] py-20 border-b border-white/5 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#4BB8FA] uppercase font-mono">deliverables::manifest</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">What You Get</h3>
          </div>

          {/* Unified Infinite Rotating Marquee Scroller for all viewports */}
          <div className="relative w-full overflow-hidden py-4 select-none">
            {/* Left and Right blur/fade overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#334e8f] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#cddbf7] to-transparent z-10 pointer-events-none" />

            <motion.div 
              className="flex space-x-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25
              }}
            >
              {/* Duplicate array to enable seamless looping */}
              {[...deliverables, ...deliverables].map((deliv, idx) => {
                const deliverableImages = {
                  "User Research & Persona": "/assets/images/services/ux_user_research.png",
                  "Architecture & Wireframes": "/assets/images/services/ux_wireframes.png",
                  "High-Fidelity Mockups": "/assets/images/services/ux_high_fidelity.png",
                  "Interactive Prototypes": "/assets/images/services/ux_prototypes.png"
                };
                return (
                  <div 
                    key={`${deliv.title}-${idx}`}
                    className="relative w-[280px] sm:w-[320px] lg:w-[350px] h-[360px] lg:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-white/10 flex flex-col justify-end p-6 lg:p-8 group flex-shrink-0 cursor-pointer"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0 select-none pointer-events-none">
                      <Image 
                        src={deliverableImages[deliv.title] || "/assets/images/services/compliance_management.png"}
                        alt={deliv.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 320px, 400px"
                      />
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                    </div>

                    <div className="relative z-20 space-y-2 lg:space-y-3 text-white">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/10 backdrop-blur-md">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#4bb8fa] font-mono">Deliverable</span>
                      </div>
                      
                      <h4 className="text-base lg:text-lg font-extrabold text-white group-hover:text-rose-500 transition-colors leading-tight">
                        {deliv.title}
                      </h4>
                      
                      <p className="text-[11px] lg:text-xs text-slate-200 leading-normal line-clamp-3">
                        {deliv.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. DESIGN TOOLS BY CATEGORY (REDESIGNED: CONTINUOUS HORIZONTAL MARQUEE) */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">tools::ecosystem</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Design Tools We Deploy</h3>
          </div>

          <div className="relative w-full overflow-hidden py-4 select-none">
            {/* Left fade gradient overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#cddbf7] to-transparent z-10 pointer-events-none" />
            {/* Right fade gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f0f5fd] to-transparent z-10 pointer-events-none" />

            <motion.div 
              className="flex space-x-6 w-max"
              animate={{ x: [0, -1120] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25
              }}
            >
              {/* Infinite scroller block: loop 3 times */}
              {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white border border-slate-200/80 rounded-2xl flex flex-col justify-between text-center shadow-sm w-44 flex-shrink-0 group hover:shadow-lg hover:border-rose-500/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">{tech.category}</span>
                    <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TechLogo name={tech.name} />
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-slate-800 text-left block mt-2 group-hover:text-rose-500 transition-colors">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FAQs (REDESIGNED: WATERMARK & ACCORDION PAGINATION) */}
      <section className="relative bg-gradient-to-b from-[#d6e5fb] via-[#e6effb] to-[#edf4fc] py-24 overflow-hidden text-slate-950 border-b border-slate-100">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          {/* Watermark text behind */}
          <div className="absolute inset-0 flex items-center justify-center -top-8 pointer-events-none select-none overflow-hidden">
            <span className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-100 tracking-wider whitespace-nowrap opacity-70 uppercase">
              Frequently Ask Question
            </span>
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 relative z-10">
            Frequently Ask Question
          </h3>
          <p className="text-sm font-bold text-rose-600 mt-2 relative z-10 cursor-pointer hover:underline">
            <Link href="/contact">Click Here to contact now.</Link>
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Accordions & Pagination */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div className="space-y-4 min-h-[380px]">
                {faqs.slice(faqPage * 3, (faqPage + 1) * 3).map((faq, pageIdx) => {
                  const globalIdx = faqPage * 3 + pageIdx;
                  const isOpen = openFaqIndex === globalIdx;
                  return (
                    <div 
                      key={globalIdx} 
                      className="border border-slate-100 rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                    >
                      <button
                        onClick={() => toggleFaq(globalIdx)}
                        className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                      >
                        <span>{faq.q}</span>
                        <div className="w-8 h-8 rounded-full bg-rose-600 hover:bg-rose-500 flex items-center justify-center text-white text-base font-black flex-shrink-0 transition-colors shadow-sm">
                          {isOpen ? "−" : "+"}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center justify-start gap-4 pt-6 pl-4">
                <button 
                  onClick={() => setFaqPage(0)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-sm ${
                    faqPage === 0 ? "bg-rose-600 scale-105" : "bg-rose-600/70 hover:bg-rose-600"
                  }`}
                >
                  1
                </button>
                <button 
                  onClick={() => setFaqPage(1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-sm ${
                    faqPage === 1 ? "bg-rose-600 scale-105" : "bg-rose-600/70 hover:bg-rose-600"
                  }`}
                >
                  2
                </button>
              </div>
            </div>

            {/* Right Column: Illustration & Question Input Form */}
            <div className="lg:col-span-5 flex flex-col items-center p-8 bg-slate-50/50 rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
              <div className="w-56 h-48 relative mb-6">
                <img 
                  src="/assets/ux_ui_faq_illustration.png" 
                  alt="UX/UI FAQ Illustration" 
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="text-2xl font-extrabold text-slate-900 mb-1">Any Question?</h4>
              <p className="text-xs text-slate-500 text-center mb-6">
                Ask us anything about customer research processes, Figma systems documentation, or web design assets transfer.
              </p>

              {/* Submission Form */}
              <div className="w-full space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono pl-1">
                    Let me know.
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Enter Here"
                      value={faqInput}
                      onChange={(e) => setFaqInput(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-rose-600 pr-10 shadow-sm"
                    />
                    {faqInput && (
                      <button 
                        onClick={() => setFaqInput("")}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold font-mono"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <button 
                    onClick={() => {
                      if (!faqInput.trim()) return;
                      setFaqSent(true);
                      setFaqInput("");
                      setTimeout(() => setFaqSent(false), 4000);
                    }}
                    className="w-full sm:w-auto px-10 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-rose-600/20 active:scale-95"
                  >
                    {faqSent ? "Sent Successfully!" : "Sent"}
                  </button>
                </div>
                
                {faqSent && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-[10px] font-bold text-emerald-600 font-mono mt-2"
                  >
                    Thank you! Your question has been forwarded to our support queue.
                  </motion.div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#edf4fc] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Create Exceptional User Experiences
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Let's design products that your users will love. Beautiful, accessible, and fully conversion-optimized UI/UX models.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-rose-600 to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Consult Design Crew
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
