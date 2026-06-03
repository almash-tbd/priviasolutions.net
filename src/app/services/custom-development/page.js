"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Clock, 
  Shield, Zap, Cpu, Sparkles, Database, Code, Terminal, Activity,
  Globe, Server, HardDrive, ArrowUpRight, Layers, ThumbsUp
} from "lucide-react";

// Inline vector SVG logos for each of the 12 technologies in the stack
const TechLogo = ({ name }) => {
  const logos = {
    "React / Next.js": (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 text-cyan-400">
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
    "Node.js / Express": (
      <svg viewBox="0 0 256 295" className="w-8 h-8 text-emerald-500">
        <path fill="currentColor" d="M128 0L24 60v120l104 60 104-60V60L128 0zm79.9 166.1l-79.9 46.1-79.9-46.1v-92.2l79.9-46.1 79.9 46.1v92.2z"/>
      </svg>
    ),
    "Python / FastAPI": (
      <svg viewBox="0 0 110 110" className="w-8 h-8">
        <path fill="#3776AB" d="M55 2C42.8 2 31.8 5.7 31.8 17.5v8.7h23.7v3.3H23.5C11.3 29.5 2 36.8 2 49v17.5C2 78.7 11.3 88 23.5 88h8.7V79.2c0-11.8 9.3-21.1 21.6-21.1h23.7V39.4C77.5 27.2 68.2 17.5 56 17.5H45.7v8.7h8.7c6.1 0 11-4.9 11-11v-4.3C65.4 3 58 2 55 2z"/>
        <path fill="#FFE873" d="M55 108c12.2 0 23.2-3.7 23.2-15.5v-8.7H54.5v-3.3h32c12.2 0 21.5-7.3 21.5-19.5V49c0-12.2-9.3-21.5-21.5-21.5h-8.7v8.8c0 11.8-9.3 21.1-21.6 21.1H32.5v18.7c0 12.2 9.3 21.9 21.5 21.9h11.8v-8.7h-8.7c-6.1 0-11 4.9-11 11v4.3c0 6.1 7.4 7.1 10.4 7.1z"/>
      </svg>
    ),
    ".NET Core": (
      <svg viewBox="0 0 128 128" className="w-8 h-8 text-purple-500">
        <circle cx="64" cy="64" r="60" fill="currentColor"/>
        <text x="64" y="74" fill="white" fontSize="24" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">.NET</text>
      </svg>
    ),
    "PostgreSQL": (
      <svg viewBox="0 0 64 64" className="w-8 h-8 text-sky-500">
        <path fill="currentColor" d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30 30-13.4 30-30S48.6 2 32 2zm12 40c-2.4 0-4.6-.8-6.4-2.2-1.8 1.4-4 2.2-6.4 2.2-5 0-9.2-3.8-9.8-8.7C17.7 32 14.5 27.5 14.5 22h5c0 3.7 1.8 7 4.7 9 .9-4.8 5-8.5 10.1-8.5s9.2 3.7 10.1 8.5c2.9-2 4.7-5.3 4.7-9h5c0 5.5-3.2 10-6.9 11.3-.6 4.9-4.8 8.7-9.8 8.7z"/>
      </svg>
    ),
    "MongoDB": (
      <svg viewBox="0 0 32 32" className="w-8 h-8 text-emerald-500">
        <path fill="currentColor" d="M16 2C13.8 6.7 9.8 11.4 9.8 17c0 5 2.7 9.2 6.2 11V29c.1 1 .9 1.7 1.9 1.5.8-.1 1.4-.7 1.4-1.5v-1c3.5-1.8 6.2-6 6.2-11 0-5.6-4-10.3-6.2-15zm-.8 24.3V4.9c1 .9 2.5 3 3 5.4v16c-1 0-2.2-.2-3-.7z"/>
      </svg>
    ),
    "Kubernetes": (
      <svg viewBox="0 0 128 128" className="w-8 h-8 text-blue-500">
        <path fill="currentColor" d="M64 2L20.8 27v49.9L64 102l43.2-25.1V27L64 2zm29.8 65.4L64 84.8 34.2 67.4V39.9L64 22.5l29.8 17.4v27.5z"/>
      </svg>
    ),
    "Docker": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-sky-400">
        <path fill="currentColor" d="M13.9 11.08h1.14v1.14H13.9zm1.33-1.33h1.14v1.14h-1.14zm-1.33 0h1.14v1.14H13.9zm-1.33 0h1.14v1.14h-1.14zm0-1.33h1.14v1.14h-1.14zm-1.33 1.33h1.14v1.14H11.2zm0 1.33h1.14v1.14H11.2zm-1.33-1.33h1.14v1.14H9.91zm-1.33 0h1.14v1.14H8.58zm0 1.33h1.14v1.14H8.58zm12.35-.95c-.38-.76-1.04-1.14-1.99-1.14h-.38V5.38h-1.14v2.66H6.11V5.38H4.97V8.8c-1.52.38-2.28 1.52-2.28 2.66v5.7c0 .76.38 1.14 1.14 1.14h16.34c1.14 0 1.9-.76 1.9-1.9V11.84c.19-.38.19-.76-.19-.95z"/>
      </svg>
    ),
    "TypeScript": (
      <svg viewBox="0 0 128 128" className="w-8 h-8 text-[#3178C6]">
        <rect width="128" height="128" rx="8" fill="currentColor"/>
        <text x="110" y="112" fill="white" fontSize="56" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">TS</text>
      </svg>
    ),
    "AWS": (
      <svg viewBox="0 0 128 128" className="w-8 h-8 text-[#FF9900]">
        <path fill="currentColor" d="M64 12C35.3 12 12 35.3 12 64s23.3 52 52 52 52-23.3 52-52S92.7 12 64 12zm25 68c-11.8 14.5-38.2 14.5-50 0-1.8-2.2 1.3-4.5 3.1-2.3 8.7 10.7 35.1 10.7 43.8 0 1.8-2.2 4.9.1 3.1 2.3z"/>
      </svg>
    ),
    "Google Cloud": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      </svg>
    ),
    "Terraform": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#7B42BC]">
        <path fill="currentColor" d="M1.5 6.5L12 1.5l10.5 5v11L12 22.5l-10.5-5v-11zm1.5.82v9.36L12 21.18V11.82L3 7.32zm18 0l-9 4.5v9.36l9-4.5V7.32z"/>
      </svg>
    )
  };
  return logos[name] || <Code className="w-8 h-8 text-slate-400" />;
};

// Modular ProcessCard component reused on desktop and mobile
const ProcessCard = ({ step, idx, isActive, onHover }) => {
  return (
    <motion.div 
      onMouseEnter={() => onHover(idx)}
      onClick={() => onHover(idx)}
      className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group h-full w-full ${
        isActive 
          ? "bg-slate-950/95 border-[#1591dc] shadow-[0_10px_35px_rgba(21,145,220,0.35)] scale-105 z-20" 
          : "bg-[#090b16]/90 border-white/5 opacity-75 hover:opacity-100 hover:border-white/15 z-10"
      }`}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className={`text-3xl font-black font-mono transition-colors ${isActive ? "text-[#1591dc]" : "text-slate-700 group-hover:text-slate-500"}`}>
            {step.step}
          </span>
          <span className={`text-[8.5px] font-bold font-mono tracking-wider px-2 py-0.5 rounded transition-all ${
            isActive ? "bg-[#1591dc]/10 text-[#4bb8fa]" : "bg-white/5 text-slate-500"
          }`}>
            {step.subtitle}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">{step.subtitle}</span>
          <h4 className="text-base font-bold text-white">{step.title}</h4>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
      </div>

      <div className="border-t border-white/5 pt-4 mt-6">
        <ul className="space-y-1.5">
          {step.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center text-[10px] text-slate-300">
              <Check className={`w-3 h-3 mr-2 flex-shrink-0 ${isActive ? "text-[#1591dc]" : "text-slate-500"}`} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function CustomDevelopmentPage() {
  // States
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [faqPage, setFaqPage] = useState(0);
  const [faqInput, setFaqInput] = useState("");
  const [faqSent, setFaqSent] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Scroll targets for Success Stories Sticky animation
  const successStoriesRef = useRef(null);
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!successStoriesRef.current) return;
      const rect = successStoriesRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollHeight = rect.height - viewportHeight;
      
      let p = 0;
      if (rect.top > 0) {
        p = 0;
      } else if (rect.bottom < viewportHeight) {
        p = 1;
      } else {
        p = -rect.top / scrollHeight;
      }
      scrollProgress.set(p);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Run initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollProgress]);

  // Scroll Mitosis Card division coordinates
  // Left card translates from 0px to -55px (shifts left)
  const leftCardX = useTransform(scrollProgress, [0, 0.55], [0, -55]);
  // Right card translates from 0px to 55px (shifts right)
  const rightCardX = useTransform(scrollProgress, [0, 0.55], [0, 55]);

  // Inner border-radius morphing: goes from 0px (merged) to 24px (fully split)
  const leftCardRadius = useTransform(scrollProgress, [0, 0.55], [0, 24]);
  const rightCardRadius = useTransform(scrollProgress, [0, 0.55], [0, 24]);

  // Inner border color fading in
  const leftCardBorderColor = useTransform(scrollProgress, [0.15, 0.55], ["rgba(16, 185, 129, 0.02)", "rgba(16, 185, 129, 0.25)"]);
  const rightCardBorderColor = useTransform(scrollProgress, [0.15, 0.55], ["rgba(16, 185, 129, 0.02)", "rgba(16, 185, 129, 0.25)"]);

  // Inner content fade & scale
  const innerOpacity = useTransform(scrollProgress, [0.35, 0.55], [0, 1]);
  const innerScale = useTransform(scrollProgress, [0.35, 0.55], [0.95, 1]);

  // Merged overlay (Thumbs Up) fade & scale
  const overlayOpacity = useTransform(scrollProgress, [0, 0.20], [1, 0]);
  const overlayScale = useTransform(scrollProgress, [0, 0.20], [1, 0.9]);

  const keyStrengths = [
    {
      title: "Fast Time-to-Market",
      desc: "Launch high-performance MVPs in 8-12 weeks using pre-tested core boilerplates.",
      icon: Clock,
      themeColor: "from-[#ff5e62] to-[#ff9966]",
      glowColor: "rgba(255, 94, 98, 0.15)"
    },
    {
      title: "Scalable Architecture",
      desc: "Cloud-native blueprints built to support massive concurrency and scale on-demand.",
      icon: Cpu,
      themeColor: "from-[#8a2387] to-[#e94057]",
      glowColor: "rgba(233, 64, 87, 0.15)"
    },
    {
      title: "Security-First",
      desc: "Zero-trust vaults, compliance scans, and rigorous role-based credentials by default.",
      icon: Shield,
      themeColor: "from-[#00c6ff] to-[#0072ff]",
      glowColor: "rgba(0, 198, 255, 0.15)"
    },
    {
      title: "Continuous Delivery",
      desc: "GitOps automated pipelines for zero-downtime, continuous feature rollouts.",
      icon: Zap,
      themeColor: "from-[#1591dc] to-[#4bb8fa]",
      glowColor: "rgba(21, 145, 220, 0.15)"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      subtitle: "AUDIT & BLUEPRINT",
      desc: "We analyze your operations, audit existing database layers, map user flows, and construct a complete technical architecture and roadmap.",
      bullets: ["Infrastructure Auditing", "Database Schema Mapping", "Strategic Roadmap Design"]
    },
    {
      step: "02",
      title: "Design & Prototyping",
      subtitle: "UX/UI VALIDATION",
      desc: "Our product designers build interactive wireframes and interactive prototypes, validating usability before writing any code.",
      bullets: ["Interactive Figma Prototypes", "Component Design Libraries", "UX Usability Auditing"]
    },
    {
      step: "03",
      title: "Development & Testing",
      subtitle: "AGILE SHIELD BUILD",
      desc: "We write clean code in agile 2-week sprints, combining automated testing pipelines (unit, integration, E2E) with peer code review checkpoints.",
      bullets: ["Agile 2-Week Sprints", "Continuous E2E Test Gates", "SonarQube Vulnerability Scan"]
    },
    {
      step: "04",
      title: "Deployment & Support",
      subtitle: "BLUE-GREEN LAUNCH",
      desc: "We deploy using zero-downtime blue-green canary pipelines, configure 24/7 reliability metrics tracing, and guarantee ongoing support.",
      bullets: ["Zero-Downtime Rollouts", "Grafana Metric Tracing", "SLA Platforms Coverage"]
    }
  ];

  const outcomes = [
    { value: "-40%", label: "Development Time", desc: "Accelerated release velocity through pre-tested core boilerplates and GitOps pipelines." },
    { value: "-60%", label: "MTTR Response", desc: "Slashed systems mean time to recovery via active reliability tracing and monitoring gates." },
    { value: "3x", label: "Team Velocity", desc: "Multiplied release frequency with standardized components and CI/CD automation." },
    { value: "99.99%", label: "System Uptime", desc: "Guaranteed platform availability backed by multi-region cluster topologies." }
  ];

  const deliverables = [
    "Technical architecture blueprints & schema docs",
    "Clean, audited source code repositories",
    "Comprehensive unit & integration test suites",
    "Declarative Infrastructure as Code (IaC) config files",
    "Fully automated CI/CD pipeline code structures",
    "Standardized OpenAPI/Swagger specifications",
    "Platform operations runbooks & recovery guides",
    "Interactive developer knowledge transfer sessions"
  ];

  const techStack = [
    { name: "React / Next.js", desc: "Frontend & SSR Engines", category: "Frontend" },
    { name: "Node.js / Express", desc: "High-Frequency APIs", category: "Backend" },
    { name: "Python / FastAPI", desc: "Data APIs & ML Services", category: "Backend" },
    { name: ".NET Core", desc: "Enterprise Services", category: "Backend" },
    { name: "PostgreSQL", desc: "Relational Ledger Data", category: "Database" },
    { name: "MongoDB", desc: "Document / Catalog Data", category: "Database" },
    { name: "Kubernetes", desc: "Container Orchestration", category: "DevOps" },
    { name: "Docker", desc: "Containerized Workloads", category: "DevOps" },
    { name: "TypeScript", desc: "Static Type Auditing", category: "Languages" },
    { name: "AWS", desc: "Cloud Infrastructure", category: "Cloud" },
    { name: "Google Cloud", desc: "Analytics & Serverless", category: "Cloud" },
    { name: "Terraform", desc: "Infrastructure as Code", category: "DevOps" }
  ];

  const industries = [
    {
      name: "FinTech & Banking",
      desc: "Payment processing engines, core ledger platforms, and digital wallets built with strict transactional consistency.",
      bullets: ["Payment Gateways", "Double-Entry Ledgers", "Regulatory Auditing", "KYC & AML Systems"],
      glowColor: "from-blue-500/20 to-indigo-500/20"
    },
    {
      name: "Healthcare Systems",
      desc: "Secure patient records platforms, telemedicine portals, and secure EHR sync interfaces.",
      bullets: ["Telehealth WebRTC", "Secure PHI Vaulting", "FHIR / HL7 Formats", "Audit Tracking logs"],
      glowColor: "from-teal-500/20 to-emerald-500/20"
    },
    {
      name: "SaaS Platforms",
      desc: "Multi-tenant cloud-native engines incorporating complex subscription entitlements and event telemetry.",
      bullets: ["Tenant Db Isolation", "Stripe Metered Billing", "Usage Telemetry logs", "B2B API Gateways"],
      glowColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "E-Commerce Engines",
      desc: "Omni-channel headless commerce platforms designed for rapid loading speeds and instant inventory syncs.",
      bullets: ["Headless Storefronts", "Kafka Inventory Sync", "Concurrent Cart Managers", "Recommendation Engines"],
      glowColor: "from-amber-500/20 to-orange-500/20"
    }
  ];

  const successStories = [
    {
      title: "FinTech Transaction Engine",
      challenge: "A digital banking platform needed to scale transaction pipelines to process high daily volumes with zero downtime and sub-100ms processing latency.",
      solution: "We designed a microservices network utilizing event-sourcing and CQRS database partition patterns, managed by Kong API Gateways.",
      results: ["Successfully processed millions in volume daily", "Sub-100ms P95 transactional latency", "Achieved full regulatory security compliance"],
      borderColor: "border-emerald-250"
    },
    {
      title: "Healthcare Patient Portal",
      challenge: "A medical records provider required a secure patient management system featuring real-time video consults and medical record vaulting.",
      solution: "We deployed an end-to-end encrypted React app hosted on multi-region AWS clusters, utilizing secure WebRTC connections for video streams.",
      results: ["Active onboarding of 50K+ patient profiles", "100% compliant security audits", "Average user satisfaction rating of 4.8/5"],
      borderColor: "border-teal-250"
    }
  ];


  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "For MVPs, development typically ranges between 8 to 12 weeks. Large-scale enterprise systems or complete legacy migrations usually take 3 to 6 months depending on scope. We deliver work in 2-week sprints with structured milestones and regular live demonstrations."
    },
    {
      q: "Do you provide ongoing support after launch?",
      a: "Yes, we provide SLA-backed managed platform support options, ranging from business hours maintenance to 24/7/365 active operations monitoring, vulnerability scanning, security patching, and scaling adjustments."
    },
    {
      q: "Can you work with our existing engineering team?",
      a: "Absolutely. We offer flexible arrangements including staff augmentation, developer collaboration, and co-development models. We adapt to your toolsets, Git workflows, Slack communication setups, and project management channels."
    },
    {
      q: "What engagement models do you offer?",
      a: "We offer three standardized contract frameworks: Fixed Price (for clear, detailed specifications), Time & Materials (for flexible scope scaling), and Dedicated Team (for long-term roadmaps requiring consistent engineering resources)."
    },
    {
      q: "How do you ensure overall code quality?",
      a: "We follow secure, test-driven software development lifecycles (SDLC) consisting of mandatory peer reviews, static analysis (SonarQube), security compliance scanning, automated regression testing (Playwright, Cypress), and maintain a target test coverage of 80% or higher."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION: Dark Blue Space Theme with SVG Blueprint Gimmick */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        {/* Grid and Glow Overlays */}
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <Sparkles className="w-3.5 h-3.5 text-[#1591DC]" />
                <span>Custom Software Engineering Division</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Bespoke Software <br />
                <span className="bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  Engineered for Impact
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                We design, build, and deploy high-performance custom platforms tailored to your business operations. Our engineering methodology merges clean, audited code with robust security and automated infrastructure pipelines.
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

            {/* Right Side: Interactive Animated Blueprint SVG */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* SVG Blueprint */}
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Grid overlay */}
                  <defs>
                    <pattern id="bp-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(21, 145, 220, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid)" />

                  {/* Pulsing connections */}
                  <path d="M 60,150 L 150,90" fill="none" stroke="#2c5ead" strokeWidth="2.5" className="svg-blueprint-line" />
                  <path d="M 60,150 L 150,210" fill="none" stroke="#1591dc" strokeWidth="2.5" className="svg-blueprint-line" />
                  <path d="M 150,90 L 250,90" fill="none" stroke="#4bb8fa" strokeWidth="2" className="svg-blueprint-line" />
                  <path d="M 150,210 L 250,210" fill="none" stroke="#2c5ead" strokeWidth="2" className="svg-blueprint-line" />
                  <path d="M 250,90 L 340,150" fill="none" stroke="#1591dc" strokeWidth="2" className="svg-blueprint-line" />
                  <path d="M 250,210 L 340,150" fill="none" stroke="#2c5ead" strokeWidth="2.5" className="svg-blueprint-line" />

                  {/* User Client node */}
                  <g transform="translate(60, 150)" className="cursor-pointer group">
                    <circle r="22" fill="#0c0e1e" stroke="#2c5ead" strokeWidth="2" className="radar-glow-circle" />
                    <circle r="16" fill="#090d16" stroke="#2c5ead" strokeWidth="2.5" />
                    <Code className="w-5 h-5 text-[#2c5ead] -translate-x-2.5 -translate-y-2.5" />
                  </g>

                  {/* Microservices Node 1 */}
                  <g transform="translate(150, 90)">
                    <circle r="14" fill="#0c0e1e" stroke="#1591dc" strokeWidth="2" />
                    <Cpu className="w-4 h-4 text-[#1591dc] -translate-x-2 -translate-y-2" />
                  </g>

                  {/* Microservices Node 2 */}
                  <g transform="translate(150, 210)">
                    <circle r="14" fill="#0c0e1e" stroke="#1591dc" strokeWidth="2" />
                    <Terminal className="w-4 h-4 text-[#1591dc] -translate-x-2 -translate-y-2" />
                  </g>

                  {/* API Gateway cluster */}
                  <g transform="translate(250, 90)">
                    <circle r="14" fill="#0c0e1e" stroke="#4bb8fa" strokeWidth="2" />
                    <Layers className="w-4 h-4 text-[#4bb8fa] -translate-x-2 -translate-y-2" />
                  </g>

                  {/* SRE deployment Node */}
                  <g transform="translate(250, 210)">
                    <circle r="14" fill="#0c0e1e" stroke="#2c5ead" strokeWidth="2" />
                    <Server className="w-4 h-4 text-[#2c5ead] -translate-x-2 -translate-y-2" />
                  </g>

                  {/* Rotating gear inside central connection */}
                  <g transform="translate(200, 150)" className="svg-spin-slow">
                    <circle r="12" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M -8,0 L 8,0 M 0,-8 L 0,8" stroke="#1591dc" strokeWidth="2" />
                  </g>

                  {/* Secure DB node */}
                  <g transform="translate(340, 150)">
                    <circle r="24" fill="#0c0e1e" stroke="#4bb8fa" strokeWidth="2.5" className="radar-glow-circle" />
                    <circle r="18" fill="#090d16" stroke="#4bb8fa" strokeWidth="2.5" />
                    <Database className="w-5 h-5 text-[#4bb8fa] -translate-x-2.5 -translate-y-2.5" />
                  </g>
                </svg>

                {/* Floating telemetry tag */}
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SRE ARCHITECTURE BLUEPRINT</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Key Value Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 text-left">
            {keyStrengths.map((str, idx) => {
              const Icon = str.icon;
              return (
                <motion.div
                  key={str.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl glow-border-blue hover-card-tilt relative group overflow-hidden animate-fade-in-up"
                  style={{ "--hover-glow": str.glowColor }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,var(--hover-glow),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Sci-Fi corner lines */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/10 group-hover:border-white/20 transition-colors pointer-events-none" />
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-white/10 group-hover:border-white/20 transition-colors pointer-events-none" />

                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center mb-4 text-[#1591dc] group-hover:scale-105 transition-all shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{str.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{str.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. OUTCOMES: Transition from space `#101733` to navy `#152147` into `#1c2c5c` */}
      <section className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">system::outcomes</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Outcomes You Can Expect</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">Continuous delivery metrics engineered to elevate product release velocity and platforms stability.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((out, idx) => (
              <motion.div
                key={out.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl glow-border-blue hover-card-tilt relative group overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div>
                  <h4 className="text-4xl md:text-5xl font-black font-mono tracking-tight text-[#1591DC] mb-3 group-hover:scale-102 transition-transform">{out.value}</h4>
                  <h5 className="text-sm font-bold text-white mb-2">{out.label}</h5>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2 border-t border-white/5 pt-3">{out.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS (HOW IT WORKS): Connected transition `#1c2c5c` -> `#263c75` -> `#334e8f` */}
      <section id="process" className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">workflow::lifecycle</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">How It Works</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">Hover over each engineering step to trace our oblique timeline roadmap.</p>
          </div>

          {/* DESKTOP VIEW: Staggered Oblique Wavy Road Timeline (NW to SE) */}
          <div className="relative w-full h-[800px] hidden lg:block z-10">
            {/* SVG Winding Road Path (Diagonal from NW to SE) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 800" fill="none">
              {/* Base Road Path (Dashed & Inactive) */}
              <path 
                d="M 125,150 C 250,90 250,370 375,320 C 500,270 500,540 625,490 C 750,440 750,710 875,660" 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.08)" 
                strokeWidth="8" 
                strokeLinecap="round" 
              />
              <path 
                d="M 125,150 C 250,90 250,370 375,320 C 500,270 500,540 625,490 C 750,440 750,710 875,660" 
                fill="none" 
                stroke="rgba(255, 255, 255, 0.06)" 
                strokeWidth="2" 
                strokeDasharray="8 8"
                strokeLinecap="round" 
              />
              
              {/* Active Glowing Path (Fills up to the active step) */}
              <motion.path 
                d="M 125,150 C 250,90 250,370 375,320 C 500,270 500,540 625,490 C 750,440 750,710 875,660" 
                fill="none" 
                stroke="url(#oblique-road-glow-gradient)" 
                strokeWidth="8" 
                strokeLinecap="round" 
                className="timeline-road-active"
                initial={{ pathLength: 0.05 }}
                animate={{ pathLength: activeStep === 0 ? 0.05 : activeStep === 1 ? 0.38 : activeStep === 2 ? 0.72 : 1.0 }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
              />
              <motion.path 
                d="M 125,150 C 250,90 250,370 375,320 C 500,270 500,540 625,490 C 750,440 750,710 875,660" 
                fill="none" 
                stroke="url(#oblique-road-glow-gradient)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeDasharray="8 8"
                className="timeline-road-dash"
                initial={{ pathLength: 0.05 }}
                animate={{ pathLength: activeStep === 0 ? 0.05 : activeStep === 1 ? 0.38 : activeStep === 2 ? 0.72 : 1.0 }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
              />
              
              <defs>
                <linearGradient id="oblique-road-glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2c5ead" />
                  <stop offset="50%" stopColor="#1591dc" />
                  <stop offset="100%" stopColor="#4bb8fa" />
                </linearGradient>
              </defs>
            </svg>

            {/* Staggered Cards */}
            {/* Card 1: x = 12.5% (125 in SVG), y = 150px */}
            <div className="absolute left-[12.5%] top-[150px] -translate-x-1/2 -translate-y-1/2 w-[270px] z-10">
              <ProcessCard step={processSteps[0]} idx={0} isActive={activeStep === 0} onHover={setActiveStep} />
            </div>

            {/* Card 2: x = 37.5% (375 in SVG), y = 320px */}
            <div className="absolute left-[37.5%] top-[320px] -translate-x-1/2 -translate-y-1/2 w-[270px] z-10">
              <ProcessCard step={processSteps[1]} idx={1} isActive={activeStep === 1} onHover={setActiveStep} />
            </div>

            {/* Card 3: x = 62.5% (625 in SVG), y = 490px */}
            <div className="absolute left-[62.5%] top-[490px] -translate-x-1/2 -translate-y-1/2 w-[270px] z-10">
              <ProcessCard step={processSteps[2]} idx={2} isActive={activeStep === 2} onHover={setActiveStep} />
            </div>

            {/* Card 4: x = 87.5% (875 in SVG), y = 660px */}
            <div className="absolute left-[87.5%] top-[660px] -translate-x-1/2 -translate-y-1/2 w-[270px] z-10">
              <ProcessCard step={processSteps[3]} idx={3} isActive={activeStep === 3} onHover={setActiveStep} />
            </div>
          </div>

          {/* MOBILE VIEW: Stacked Vertical Road Timeline */}
          <div className="relative lg:hidden">
            {/* Vertical timeline road */}
            <div className="absolute left-8 top-12 bottom-12 w-[4px] bg-white/5 rounded-full z-0">
              <motion.div 
                className="w-full bg-gradient-to-b from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] rounded-full shadow-[0_0_12px_#1591dc]"
                initial={{ height: "10%" }}
                animate={{ height: `${((activeStep + 1) / 4) * 100}%` }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
              />
            </div>
            
            <div className="space-y-8 pl-14 sm:pl-16 relative z-10">
              {processSteps.map((step, idx) => (
                <ProcessCard 
                  key={step.step}
                  step={step}
                  idx={idx}
                  isActive={activeStep === idx}
                  onHover={setActiveStep}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. DELIVERABLES & TECH: Connected transition `#334e8f` -> `#5978be` -> `#8da8df` */}
      <section className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#8da8df] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Deliverables */}
            <div className="lg:col-span-5 space-y-6 text-white">
              <div className="space-y-3">
                <h2 className="text-[10px] font-black tracking-widest text-[#4BB8FA] uppercase font-mono">deliverables::manifest</h2>
                <h3 className="text-3xl font-extrabold tracking-tight text-white">Deliverables</h3>
                <p className="text-xs text-slate-200 leading-relaxed max-w-lg">
                  Every production release is delivered with a complete developer operational package to ensure you can support, run, and scale the systems autonomously.
                </p>
              </div>
              
              <ul className="grid sm:grid-cols-1 gap-4 pt-4">
                {deliverables.map((deliv, idx) => (
                  <motion.li 
                    key={deliv}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start text-xs text-slate-100 group cursor-default"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#4BB8FA] mr-2.5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-white transition-colors">{deliv}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Col: Technology Stack Laptop Mockup Frame */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              {/* CSS Laptop Mockup Frame */}
              <div className="laptop-container w-full max-w-2xl mx-auto relative">
                
                {/* 1. Laptop Bezel / Screen */}
                <div className="laptop-screen bg-slate-900 border-[10px] sm:border-[14px] border-slate-950 rounded-t-2xl shadow-2xl relative overflow-hidden flex flex-col">
                  {/* Camera hole */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-800 z-30" />
                  
                  {/* Screen gloss reflex overlay */}
                  <div className="absolute inset-0 laptop-reflection pointer-events-none z-20" />
                  
                  {/* Screen Content Wrapper */}
                  <div className="w-full h-auto p-5 sm:p-7 bg-[#0b0c16] text-left relative z-10 max-h-[480px] overflow-y-auto custom-scrollbar">
                    
                    <div className="space-y-3 mb-6 relative z-10">
                      <span className="text-[9px] font-black tracking-widest text-[#1591dc] uppercase font-mono block">technical::stack</span>
                      <h4 className="text-xl font-extrabold text-white">Tech We Use</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Standardized on high-frequency runtimes, databases, and configuration managers.
                      </p>
                    </div>

                    {/* Tech stack grid containing custom SVG logos */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 relative z-10">
                      {techStack.map((tech) => (
                        <div 
                          key={tech.name} 
                          className="p-3.5 bg-[#12162d]/85 border border-white/5 rounded-xl hover:border-[#1591dc]/30 hover:bg-[#151b3d] transition-all shadow-md group cursor-default flex flex-col justify-between"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[7.5px] font-bold text-slate-500 uppercase tracking-wide font-mono">{tech.category}</span>
                            <div className="group-hover:scale-110 transition-transform duration-300">
                              <TechLogo name={tech.name} />
                            </div>
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block mt-0.5 group-hover:text-[#4bb8fa] transition-colors">{tech.name}</span>
                            <span className="text-[9px] text-slate-400 block mt-0.5 leading-tight">{tech.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* 2. Laptop Hinge */}
                <div className="h-2 w-full bg-slate-800 border-x-4 border-slate-900 relative z-25" />

                {/* 3. Laptop Keyboard Base */}
                <div className="bg-gradient-to-b from-[#b0b3b8] via-[#8e9196] to-[#737579] h-3 w-[108%] -ml-[4%] rounded-b-xl shadow-xl relative flex justify-center z-20">
                  {/* Opening indentation notch */}
                  <div className="w-16 sm:w-20 h-1 bg-slate-700 rounded-b-md" />
                </div>

                {/* 4. Shadow below the laptop base */}
                <div className="h-5 w-full bg-black/30 rounded-full blur-md -mt-1 relative z-10" />

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES: Connected transition `#8da8df` -> `#adcae8` -> `#cddbf7` (Light Mode Shift) */}
      <section className="relative bg-gradient-to-b from-[#8da8df] via-[#adcae8] to-[#cddbf7] py-20 border-b border-black/5 overflow-hidden text-slate-950">
        
        {/* Soft glowing ambient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] light-glow-blue pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">verticals::solutions</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Industries We Serve</h3>
            <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed">Custom architecture patterns tailored for high-concurrency compliance domains.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {industries.map((ind, idx) => (
              <motion.div 
                key={ind.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden group flex flex-col justify-between bg-white/75 backdrop-blur-md border-blue-200/50 shadow-md shadow-blue-900/5 hover:bg-white hover:border-[#1591dc]/30"
              >
                <div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#2C5EAD] transition-colors mb-3">{ind.name}</h4>
                  <p className="text-xs text-slate-700 leading-relaxed mb-6">{ind.desc}</p>
                </div>
                
                <div className="border-t border-slate-200/60 pt-4 mt-6">
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-3 font-mono">Modules catalog</span>
                  <div className="flex flex-wrap gap-2">
                    {ind.bullets.map((bullet) => (
                      <span 
                        key={bullet}
                        className="text-[10px] font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg hover:border-[#1591dc]/20 transition-all cursor-default"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES: Connected transition `#cddbf7` -> `#e2ecfa` -> `#f0f5fd` */}
      <section 
        ref={successStoriesRef} 
        className="relative h-auto lg:h-[135vh] bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] border-b border-black/5 text-slate-950"
      >
        <div className="relative lg:sticky lg:top-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto lg:h-screen py-12 lg:py-0 flex flex-col justify-center overflow-visible lg:overflow-hidden z-10">
          {/* Background Big Dotted Thumbs Up Icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
            {/* Soft Radial Glow */}
            <div className="absolute w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[850px] lg:h-[850px] rounded-full bg-emerald-500/5 blur-[80px]" />
            <svg 
              className="w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] lg:w-[750px] lg:h-[750px] text-emerald-600 opacity-[0.15]" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="thumbs-up-dots" width="0.4" height="0.4" patternUnits="userSpaceOnUse">
                  <circle cx="0.2" cy="0.2" r="0.05" fill="currentColor" />
                </pattern>
              </defs>
              {/* Dotted Fill */}
              <path 
                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                fill="url(#thumbs-up-dots)"
              />
              {/* Dotted Stroke Outline */}
              <path 
                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                stroke="currentColor"
                strokeWidth="0.12"
                strokeDasharray="0.01 0.3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Animation container */}
          <div className="relative w-full max-w-5xl mx-auto h-auto lg:h-[450px] flex justify-center items-center">
            
            {/* Desktop Mitosis Scroll Animation */}
            <div className="hidden lg:flex justify-center items-center relative w-full max-w-[900px] h-full">
              
              {/* Central Separating Seam Line (fades out as we split) */}
              <motion.div 
                style={{ opacity: overlayOpacity }}
                className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/25 to-transparent z-25 pointer-events-none"
              />

              {/* 1. Left Card: FinTech Node */}
              <motion.div 
                style={{ 
                  x: leftCardX, 
                  borderTopRightRadius: leftCardRadius, 
                  borderBottomRightRadius: leftCardRadius,
                  borderRightColor: leftCardBorderColor
                }}
                className="w-[420px] h-[450px] bg-[#060b14] border border-emerald-500/25 shadow-[0_20px_50px_rgba(6,11,20,0.25)] relative flex flex-col justify-between p-6 md:p-8 rounded-l-3xl z-10 transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.25)] pointer-events-auto text-white"
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 rounded-inherit bg-[radial-gradient(circle_at_100%_50%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />
                
                {/* Inner Content (fades in on scroll) */}
                <motion.div 
                  style={{ opacity: innerOpacity, scale: innerScale }}
                  className="w-full h-full flex flex-col justify-between relative z-10"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">NODE A</span>
                      <span className="text-xl font-bold text-slate-700 font-mono">01</span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight">{successStories[0].title}</h3>
                    
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono">The Challenge</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{successStories[0].challenge}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-teal-400 tracking-wider uppercase block font-mono">Our Solution</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{successStories[0].solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-5 mt-4">
                    <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono mb-2">Key Results</span>
                    <ul className="space-y-1">
                      {successStories[0].results.map((res, i) => (
                        <li key={i} className="flex items-center text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 flex-shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>

              {/* 2. Right Card: Healthcare Node */}
              <motion.div 
                style={{ 
                  x: rightCardX, 
                  borderTopLeftRadius: rightCardRadius, 
                  borderBottomLeftRadius: rightCardRadius,
                  borderLeftColor: rightCardBorderColor
                }}
                className="w-[420px] h-[450px] bg-[#060b14] border border-emerald-500/25 shadow-[0_20px_50px_rgba(6,11,20,0.25)] relative flex flex-col justify-between p-6 md:p-8 rounded-r-3xl z-10 transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.25)] pointer-events-auto text-white"
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 rounded-inherit bg-[radial-gradient(circle_at_0%_50%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />
                
                {/* Inner Content (fades in on scroll) */}
                <motion.div 
                  style={{ opacity: innerOpacity, scale: innerScale }}
                  className="w-full h-full flex flex-col justify-between relative z-10"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-bold text-teal-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">NODE B</span>
                      <span className="text-xl font-bold text-slate-700 font-mono">02</span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight">{successStories[1].title}</h3>
                    
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono">The Challenge</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{successStories[1].challenge}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-teal-400 tracking-wider uppercase block font-mono">Our Solution</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{successStories[1].solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-5 mt-4">
                    <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono mb-2">Key Results</span>
                    <ul className="space-y-1">
                      {successStories[1].results.map((res, i) => (
                        <li key={i} className="flex items-center text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 flex-shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>

              {/* 3. Central Overlay (Text Only) visible in merged state */}
              <motion.div 
                style={{ opacity: overlayOpacity, scale: overlayScale }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-30 pointer-events-none w-full px-8"
              >
                <h4 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                  Our <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Success Stories</span>
                </h4>
                <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mt-4 font-mono">
                  Scroll down to divide cluster
                </p>
              </motion.div>

            </div>

            {/* Mobile View: Standard Stacked Cards */}
            <div className="block lg:hidden space-y-6 px-2 w-full max-w-md mx-auto">
              <div className="p-6 rounded-2xl bg-[#060b14] border border-emerald-500/20 shadow-md flex flex-col items-center justify-center text-center py-10 text-white">
                <ThumbsUp className="w-10 h-10 text-emerald-400 mb-4 animate-bounce" />
                <h4 className="text-xl font-extrabold text-white">Our Success Stories</h4>
                <p className="text-xs text-emerald-400 mt-2 font-medium">Read our featured case studies below</p>
              </div>
              
              {successStories.map((story) => (
                <div 
                  key={story.title}
                  className="p-6 rounded-2xl bg-[#060b14] border border-emerald-500/20 shadow-md flex flex-col justify-between text-white"
                >
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-white">{story.title}</h4>
                    
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono">The Challenge</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{story.challenge}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-teal-400 tracking-wider uppercase block font-mono">Our Solution</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{story.solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-4">
                    <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono mb-2">Key Results</span>
                    <ul className="space-y-1.5">
                      {story.results.map((res, i) => (
                        <li key={i} className="flex items-center text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 flex-shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* 8. FAQs: Connected transition `#edf4fc` -> `#e6effb` -> `#d6e5fb` */}
      <section className="relative bg-gradient-to-b from-[#edf4fc] via-[#e6effb] to-[#d6e5fb] py-24 overflow-hidden text-slate-950 border-b border-slate-100">
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
          <p className="text-sm font-bold text-cyan-600 mt-2 relative z-10 cursor-pointer hover:underline">
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
                        <div className="w-8 h-8 rounded-full bg-[#1591dc] hover:bg-[#4bb8fa] flex items-center justify-center text-white text-base font-black flex-shrink-0 transition-colors shadow-sm">
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
                    faqPage === 0 ? "bg-[#1591dc] scale-105" : "bg-[#1591dc]/70 hover:bg-[#1591dc]"
                  }`}
                >
                  1
                </button>
                <button 
                  onClick={() => setFaqPage(1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-sm ${
                    faqPage === 1 ? "bg-[#1591dc] scale-105" : "bg-[#1591dc]/70 hover:bg-[#1591dc]"
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
                Ask us anything about custom design boilerplates, timelines, support tiers, and integration patterns.
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
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#1591dc] pr-10 shadow-sm"
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
                    className="w-full sm:w-auto px-10 py-3 bg-[#1591dc] hover:bg-[#4bb8fa] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#1591dc]/20 active:scale-95"
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

      {/* 9. CALL-TO-ACTION: Connected transition `#d6e5fb` -> `#6c97db` -> `#1d3f75` (Blends into footer) */}
      <section className="py-24 bg-gradient-to-b from-[#d6e5fb] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Ready to Build Your Custom Software?
          </h3>
          <p className="text-sm sm:text-base text-slate-100 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your requirements and create a roadmap to bring your vision to life.
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
