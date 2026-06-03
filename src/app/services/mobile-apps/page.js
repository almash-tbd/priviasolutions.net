"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Smartphone,
  Zap, Cpu, Sparkles, Database, Lock, Globe, Star, ArrowUpRight, 
  Layers, Settings, Play, Flame, HelpCircle
} from "lucide-react";

const TechLogo = ({ name }) => {
  const logos = {
    "React Native": (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 text-cyan-500">
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1.5" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
    "Flutter": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-400" fill="currentColor">
        <path d="M14.3 2.1L5 11.4l2.9 2.9 9.3-9.3zM14.3 11.4l-5.6 5.6 5.6 5.6h5.7l-5.6-5.6 5.6-5.6z"/>
      </svg>
    ),
    "Kotlin": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-purple-600" fill="currentColor">
        <path d="M24 0H0v24h24L12 12z"/>
      </svg>
    ),
    "Swift": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-500" fill="currentColor">
        <path d="M22.5 13.5c-.3-1.6-1.5-3.3-2.9-4.3-.8-.5-1.9-.9-2.7-.8.5.8.7 1.8.5 2.8-.2.9-.8 1.7-1.4 2.3-2 1.9-5.1 1.7-6.8-.4-.7-.9-1-2.1-.9-3.2 0-.3.1-.7.2-1C7 9.8 5.7 11 4.8 12.5c-1.8 3 0 7 3.3 7.8 2.2.5 4.6-.2 6.3-1.7.9-.8 1.7-1.9 2.4-1.9.5 0 .9.3 1.3.6 1.8 1.4 3.7.8 4.4-.8.2-.5 0-2-.2-3z"/>
      </svg>
    ),
    "Firebase": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-amber-500" fill="currentColor">
        <path d="M3.9 18.2l7.5-14.3c.2-.4.7-.4.9 0l2 3.8zM19.7 15.3l-2.4-4.6-2.5-4.8c-.2-.4-.7-.4-.9 0l-5.1 9.8z"/>
      </svg>
    ),
    "GraphQL": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-pink-600" fill="currentColor">
        <path d="M12 2L2 7.7v11.4L12 22l10-5.7V7.7zM12 4.4l7.7 4.4L12 13.2 4.3 8.8zM4.3 16.4l7.7-4.4v8.8zM19.7 16.4l-7.7-4.4v8.8z"/>
      </svg>
    ),
    "iOS SDK": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-slate-800" fill="currentColor">
        <path d="M18.7 18.5c-.8 1.1-1.6 2.2-2.8 2.2-1.2 0-1.6-.7-3-.7-1.4 0-1.8.7-3 .7-1.2 0-2.1-1.2-2.9-2.3-1.6-2.3-2.8-6.5-1.1-9.4 1.2-2.1 3.4-2.3 4.5-2.3 1.2 0 2.2.7 2.9.7.7 0 2-.9 3.4-.7 1.4.1 2.5.7 3.1 1.7-2.9 1.7-2.4 5.3.5 6.5-.9 2.2-2.1 4.5-3.3 5.4zM15.9 4.2c.8-1 1.3-2.4 1.1-3.7-1.2.1-2.6.8-3.4 1.8-.7.8-1.3 2.2-1.1 3.5 1.3.1 2.6-.6 3.4-1.6z"/>
      </svg>
    ),
    "Android SDK": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-emerald-500" fill="currentColor">
        <path d="M17.5 10c-.5 0-.9-.4-.9-.9V5.9c0-.5.4-.9.9-.9s.9.4.9.9v3.2c0 .5-.4.9-.9.9zm-11 0c-.5 0-.9-.4-.9-.9V5.9c0-.5.4-.9.9-.9s.9.4.9.9v3.2c0 .5-.4.9-.9.9zm13-2H4.5C3.7 8 3 8.7 3 9.5v7c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-7C21 8.7 20.3 8 19.5 8zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
      </svg>
    )
  };
  return logos[name] || <Cpu className="w-8 h-8 text-slate-400" />;
};

export default function MobileAppsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("cross"); // native or cross
  const [faqPage, setFaqPage] = useState(0);
  const [faqInput, setFaqInput] = useState("");
  const [faqSent, setFaqSent] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const capabilities = [
    "Offline-first architecture with sync",
    "Push notifications & deep linking",
    "Biometric authentication",
    "WCAG 2.1 AA accessibility",
    "App Store optimization & submission",
    "Analytics & crash reporting",
    "In-app purchases & subscriptions",
    "Real-time updates & messaging"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      desc: "Detailed requirements gathering, target audience research, and selection of the optimal platform strategy.",
      bullets: ["Readiness Assessment", "User Persona Definition", "Feature Prioritization"]
    },
    {
      step: "02",
      title: "Design",
      desc: "UI/UX design customized specifically following platform-specific design guidelines.",
      bullets: ["Figma Wireframes", "Interactive Prototypes", "Human Interface Guidelines Audit"]
    },
    {
      step: "03",
      title: "Development",
      desc: "Agile build sprints integrating secure database connections and high-frequency endpoints.",
      bullets: ["Clean Repository Structure", "API Endpoint Integration", "Parallel Testing Gates"]
    },
    {
      step: "04",
      title: "Launch",
      desc: "App Store and Google Play compliance auditing, asset packaging, and submission support.",
      bullets: ["Metadata & Assets Preparation", "App Store Submission", "Post-Launch Monitoring"]
    }
  ];

  const categories = [
    {
      title: "E-Commerce & Retail",
      desc: "Shopping apps featuring interactive product catalogs, persistent carts, payment gates, and live order tracking.",
      accent: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "FinTech & Banking",
      desc: "Secure banking, digital wallets, and investment platforms fully compliant with financial transactional safety.",
      accent: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Healthcare & Wellness",
      desc: "Secure telemedicine portals, fitness tracking, and active patient monitoring interfaces.",
      accent: "from-rose-500/20 to-pink-500/20"
    },
    {
      title: "Social & Entertainment",
      desc: "High-frequency social feeds, live streaming media channels, and real-time user-to-user messaging engines.",
      accent: "from-amber-500/20 to-orange-500/20"
    }
  ];

  const faqs = [
    {
      q: "Should I build native or cross-platform?",
      a: "Choose native (Swift/Kotlin) if you need the absolute best performance, complex animations, or deep platform-specific features. Choose cross-platform (React Native/Flutter) for faster time-to-market, lower budget, or simpler apps. We recommend cross-platform for 80% of apps."
    },
    {
      q: "How long does app store approval take?",
      a: "Apple App Store typically takes 24-48 hours, but can take up to 7 days for first submission. Google Play Store usually approves within hours. We handle the entire submission process including metadata, screenshots, and compliance requirements."
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes. We offer maintenance packages including bug fixes, OS updates, new feature development, performance monitoring, and crash reporting. Most clients opt for our Growth support tier (8hr response) for mobile apps."
    },
    {
      q: "Can you migrate an existing app to React Native or Flutter?",
      a: "Yes. We assess your current app, plan incremental migration, and rebuild features module-by-module to minimize risk. Typical migration takes 12-16 weeks depending on app complexity. We maintain feature parity throughout the process."
    },
    {
      q: "How do you handle different screen sizes and devices?",
      a: "We use responsive layouts, flexible grids, and test on 15+ real devices plus simulators. Apps are optimized for phones, tablets, and foldables. We follow platform-specific design guidelines (Material Design for Android, Human Interface Guidelines for iOS)."
    }
  ];

  const techStack = [
    { name: "React Native", category: "Framework" },
    { name: "Flutter", category: "Framework" },
    { name: "Kotlin", category: "Native Android" },
    { name: "Swift", category: "Native iOS" },
    { name: "Firebase", category: "Backend / Auth" },
    { name: "GraphQL", category: "API Layer" },
    { name: "iOS SDK", category: "Platform API" },
    { name: "Android SDK", category: "Platform API" }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <Smartphone className="w-3.5 h-3.5 text-[#1591DC]" />
                <span>Mobile Development Division</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Mobile App <br />
                <span className="bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  Development
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Native iOS, Android, and cross-platform apps with exceptional performance, accessibility, and user experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Start Your Project
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

            {/* Right Side Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[300px] h-[580px] border-[12px] border-slate-900 rounded-[42px] bg-slate-950 relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
                {/* Camera notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20" />
                
                {/* Screen content */}
                <div className="w-full h-full p-6 pt-10 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-950 font-mono text-[10px] text-slate-400">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-slate-500 border-b border-white/5 pb-2">
                      <span>ICE MOBILE ENG v1.0</span>
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-white font-bold">DEVICE RUNTIME INITIALIZED</div>
                      <div>SDK VERSION: API 34</div>
                      <div>THREAD_POOL: ACTIVE</div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1.5">
                      <div className="text-xs text-[#4BB8FA] font-bold">PERFORMANCE LOGGER</div>
                      <div className="flex justify-between">
                        <span>FPS Rate:</span>
                        <span className="text-emerald-400">60.0 FPS</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Latency:</span>
                        <span className="text-emerald-400">sub-85ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span>API Status:</span>
                        <span className="text-emerald-400">200 OK</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                    </div>
                    <div className="text-center text-slate-500 text-[8px]">
                      SECURE CLIENT HANDSHAKE COMPLETE
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. NATIVE VS CROSS-PLATFORM SECTION */}
      <section className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">architecture::strategy</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Native vs Cross-Platform</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              We guide you towards the optimal technology based on your performance specifications and deployment budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1: Native */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-blue-500/30 transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[9px] font-black tracking-widest text-[#1591dc] uppercase font-mono bg-blue-950/40 px-2.5 py-1 rounded border border-blue-500/25">Optimal Performance</span>
                <h4 className="text-xl font-bold text-white mt-4">Native Development</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Swift (iOS) and Kotlin (Android) configurations targeting maximum physical platform capabilities.
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  <li className="flex items-center text-xs text-slate-300">
                    <Check className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                    <span>60 FPS Fluid Rendering</span>
                  </li>
                  <li className="flex items-center text-xs text-slate-300">
                    <Check className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                    <span>Direct Native Hardware APIs</span>
                  </li>
                  <li className="flex items-center text-xs text-slate-300">
                    <Check className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                    <span>Deep OS-level Integration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Cross Platform */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[9px] font-black tracking-widest text-[#4bb8fa] uppercase font-mono bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-500/25">High efficiency</span>
                <h4 className="text-xl font-bold text-white mt-4">Cross-Platform Masters</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Flutter and React Native integrations featuring code reuse across iOS and Android platforms.
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  <li className="flex items-center text-xs text-slate-300">
                    <Check className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                    <span>90% Code Reuse Ratio</span>
                  </li>
                  <li className="flex items-center text-xs text-slate-300">
                    <Check className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                    <span>Accelerated Release Velocity</span>
                  </li>
                  <li className="flex items-center text-xs text-slate-300">
                    <Check className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                    <span>Highly Cost Effective</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES & CAPABILITIES */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">technical::capabilities</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Features & Capabilities</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Standard secure architecture parameters deployed by default in our mobile platforms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {capabilities.map((cap) => (
              <div 
                key={cap}
                className="p-5 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-[#1591dc]/30 transition-all flex items-start space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 leading-normal font-semibold">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DEVELOPMENT PROCESS */}
      <section id="process" className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#cddbf7] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 text-white">
            <h2 className="text-[10px] font-black tracking-widest text-[#4BB8FA] uppercase font-mono">workflow::lifecycle</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Development Process</h3>
            <p className="text-xs text-slate-200 max-w-md mx-auto leading-relaxed">
              How we construct, package, and launch your mobile application.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div 
                key={step.step}
                className="p-6 rounded-3xl bg-[#090b16]/95 border border-white/5 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-black font-mono text-[#1591dc]">{step.step}</span>
                  </div>
                  <h4 className="text-base font-bold text-white">{step.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6">
                  <ul className="space-y-1.5">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-center text-[10px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-400 mr-2 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. APP CATEGORIES */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">specialties::verticals</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">App Categories We Build</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              We specialize in constructing highly custom functional applications for different industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div 
                key={cat.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.accent}`} />
                <h4 className="text-base font-bold text-slate-900 mb-2">{cat.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPARISON TABLE */}
      <section className="relative bg-gradient-to-b from-[#f0f5fd] via-[#f8fafc] to-[#edf4fc] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">architecture::comparison</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Native vs Cross-Platform Matrix</h3>
          </div>

          <div className="overflow-x-auto border-2 border-[#2c5ead]/20 rounded-2xl bg-white shadow-xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#2c5ead] to-[#1591dc] text-white font-bold">
                  <th className="p-5 tracking-wide uppercase text-xs">Comparison Feature</th>
                  <th className="p-5 tracking-wide uppercase text-xs">Native Development (Swift / Kotlin)</th>
                  <th className="p-5 tracking-wide uppercase text-xs">Cross-Platform (React Native / Flutter)</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-slate-100 text-slate-800">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-extrabold text-slate-950 border-r border-slate-100 bg-slate-50/50">Programming Language</td>
                  <td className="p-5 font-semibold text-indigo-900">Swift (iOS), Kotlin (Android)</td>
                  <td className="p-5 font-semibold text-cyan-900">TypeScript (React Native), Dart (Flutter)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors bg-cyan-50/10">
                  <td className="p-5 font-extrabold text-slate-950 border-r border-slate-100 bg-slate-50/50">Execution & Performance</td>
                  <td className="p-5 font-semibold text-emerald-700 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    Maximum (Direct hardware access)
                  </td>
                  <td className="p-5 font-semibold text-cyan-700">
                    High (Optimized JS bridge or compiled UI threads)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-extrabold text-slate-950 border-r border-slate-100 bg-slate-50/50">Code Reusability</td>
                  <td className="p-5 font-semibold text-slate-500">0% (Separate native repositories)</td>
                  <td className="p-5 font-semibold text-[#1591dc] flex items-center gap-2">
                    <span className="font-extrabold bg-[#1591dc]/10 px-2 py-0.5 rounded text-xs">85% - 95%</span>
                    Shared codebase across platforms
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors bg-cyan-50/10">
                  <td className="p-5 font-extrabold text-slate-950 border-r border-slate-100 bg-slate-50/50">Time to Market (TTM)</td>
                  <td className="p-5 font-semibold text-amber-700">Longer (Requires dual-squad development)</td>
                  <td className="p-5 font-semibold text-emerald-600 flex items-center gap-2">
                    <span className="font-extrabold bg-emerald-500/10 px-2 py-0.5 rounded text-xs text-emerald-700">Significantly Faster</span>
                    Single codebase iteration cycle
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGIES WE USE */}
      <section className="relative bg-gradient-to-b from-[#edf4fc] via-[#e6effb] to-[#d6e5fb] py-20 overflow-hidden text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">technical::modules</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Technologies We Deploy</h3>
          </div>
        </div>

        {/* Infinite Horizontal Carousel (Left to Right) */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#edf4fc] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#d6e5fb] to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex gap-6 w-max pl-6"
            animate={{ x: ["-33.33%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
              <div 
                key={idx} 
                className="w-56 p-5 bg-white border border-slate-200/80 rounded-2xl flex flex-col justify-between shadow-md hover:shadow-lg hover:border-cyan-500/30 transition-all flex-shrink-0 cursor-default group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">{tech.category}</span>
                  <div className="w-8 h-8 flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform duration-300">
                    <TechLogo name={tech.name} />
                  </div>
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block group-hover:text-cyan-600 transition-colors">{tech.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="relative bg-gradient-to-b from-[#d6e5fb] via-[#e6effb] to-[#edf4fc] py-24 overflow-hidden text-slate-950 border-b border-slate-100">
        {/* Header Section from the image */}
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
          <p className="text-sm font-bold text-cyan-500 mt-2 relative z-10 cursor-pointer hover:underline">
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
                        <div className="w-8 h-8 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white text-base font-black flex-shrink-0 transition-colors shadow-sm">
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
                    faqPage === 0 ? "bg-cyan-600 scale-105" : "bg-cyan-500/70 hover:bg-cyan-500"
                  }`}
                >
                  1
                </button>
                <button 
                  onClick={() => setFaqPage(1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-sm ${
                    faqPage === 1 ? "bg-cyan-600 scale-105" : "bg-cyan-500/70 hover:bg-cyan-500"
                  }`}
                >
                  2
                </button>
              </div>
            </div>

            {/* Right Column: Illustration & Question Input Form */}
            <div className="lg:col-span-5 flex flex-col items-center p-8 bg-slate-50/50 rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
              {/* Question mark illustration */}
              <div className="w-56 h-48 relative mb-6">
                <img 
                  src="/assets/faq_illustration.png" 
                  alt="FAQ Illustration" 
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="text-2xl font-extrabold text-slate-900 mb-1">Any Question?</h4>
              <p className="text-xs text-slate-500 text-center mb-6">
                You can ask anything you want to know about Mobile Apps.
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
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 pr-10 shadow-sm"
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
                    className="w-full sm:w-auto px-10 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
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

      {/* 9. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#edf4fc] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Ready to Build Your Mobile App?
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            From concept to app store launch, we'll guide you every step of the way. Let's discuss your requirements.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Talk to Sales
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
