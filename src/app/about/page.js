"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CarouselDemo from "@/components/carousel-demo";
import SolutionsCarousel from "@/components/SolutionsCarousel";
import { FocusCards } from "@/components/ui/focus-cards";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { toast } from "react-hot-toast";
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Globe, 
  Building, 
  Users, 
  User,
  Cloud, 
  Settings, 
  Cpu, 
  Shield, 
  Zap, 
  Award, 
  Activity, 
  MapPin, 
  Sparkles,
  Check,
  TrendingUp,
  BookOpen,
  Truck,
  Briefcase,
  Layers,
  Heart,
  Search,
  Code,
  Rocket
} from "lucide-react";

const MobileValuesCard = ({ card, idx, valuesCards }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={card.title}
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -15, scale: 0.95 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex flex-col bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm justify-between text-left cursor-pointer w-full h-[500px]"
      >
        <div className="space-y-2 text-left pointer-events-none">
          <span className="text-[10px] font-mono font-black text-blue-600 uppercase tracking-widest">
            PRINCIPLE 0{((idx) % valuesCards.length) + 1}
          </span>
          <h3 className="text-xl font-black text-slate-900 font-outfit tracking-tight">
            {card.title}
          </h3>
        </div>

        <div className="space-y-4 mt-6 text-left flex-grow flex flex-col justify-between pointer-events-none">
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            {card.description}
          </p>
          
          <div className="space-y-2 py-1">
            {card.bullets?.map((b, i) => (
              <div key={i} className="flex items-start gap-1.5 text-[10.5px] text-slate-600 font-semibold">
                <span className="text-blue-600 shrink-0 font-bold">•</span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="w-full h-36 rounded-2xl overflow-hidden relative border border-slate-100 bg-slate-50 shrink-0 mt-2">
            <img 
              src={card.src} 
              alt={card.title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const CoreValuesSlide = ({ card, index, current, handleSlideClick, valuesCards }) => {
  const cardRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef(null);
  const [isHoverEnabled, setIsHoverEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHoverEnabled(window.innerWidth > 644);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    
    const animate = () => {
      if (!cardRef.current) return;
      cardRef.current.style.setProperty("--x", `${xRef.current}px`);
      cardRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event) => {
    if (!isHoverEnabled) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const isActive = current === index;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d] shrink-0">
      <li
        ref={cardRef}
        onClick={() => handleSlideClick(index)}
        onMouseMove={(e) => {
          handleMouseMove(e);
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          handleMouseLeave();
          setIsHovered(false);
        }}
        className="flex flex-col bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm justify-between text-left cursor-pointer w-[85vw] md:w-[400px] h-[540px] mx-[3vw] md:mx-[20px] z-10 transition-shadow duration-300 hover:shadow-md hover:border-slate-350"
        style={{
          transform: !isActive
            ? "scale(0.96) rotateX(6deg)"
            : isHoverEnabled && isHovered
              ? "perspective(1000px) rotateX(calc(var(--y) / -80)) rotateY(calc(var(--x) / 80)) translateZ(0)"
              : "scale(1) rotateX(0deg)",
          transition: isHoverEnabled && isHovered
            ? "transform 0.1s ease-out, border-color 0.3s, shadow 0.3s"
            : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s, shadow 0.3s",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="space-y-2 text-left pointer-events-none">
          <span className="text-[10px] font-mono font-black text-blue-600 uppercase tracking-widest">
            PRINCIPLE 0{((index) % valuesCards.length) + 1}
          </span>
          <h3 className="text-xl font-black text-slate-900 font-outfit tracking-tight">
            {card.title}
          </h3>
        </div>

        <div className="space-y-4 mt-6 text-left flex-grow flex flex-col justify-between pointer-events-none">
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            {card.description}
          </p>
          
          <div className="space-y-2 py-1">
            {card.bullets?.map((b, i) => (
              <div key={i} className="flex items-start gap-1.5 text-[10.5px] text-slate-600 font-semibold">
                <span className="text-blue-600 shrink-0 font-bold">•</span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="w-full h-36 rounded-2xl overflow-hidden relative border border-slate-100 bg-slate-50 shrink-0 mt-2">
            <div 
              className="absolute inset-0 transition-transform duration-150 ease-out"
              style={{
                transform: isActive && isHoverEnabled && isHovered
                  ? "translate3d(calc(var(--x) / -18), calc(var(--y) / -18), 0) scale(1.12)"
                  : "none"
              }}
            >
              <img 
                src={card.src} 
                alt={card.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

const CoreValuesCarousel = ({ valuesCards, current, setCurrent, handleValPrev, handleValNext }) => {
  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <div
      className="relative w-[85vw] md:w-[400px] h-[540px] mx-auto overflow-visible"
    >
      <ul
        className="absolute flex mx-[-3vw] md:mx-[-20px] transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) overflow-visible"
        style={{
          transform: `translateX(-${current * (100 / valuesCards.length)}%)`,
        }}
      >
        {valuesCards.map((card, index) => (
          <CoreValuesSlide
            key={index}
            card={card}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
            valuesCards={valuesCards}
          />
        ))}
      </ul>
    </div>
  );
};

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [activeProcessStep, setActiveProcessStep] = useState(1);
  const [hoveredMapNode, setHoveredMapNode] = useState(null);

  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const journeyRef = useRef(null);
  const [valIndex, setValIndex] = useState(0);

  const valuesCards = [
    { 
      title: "Security First", 
      description: "We prioritize security in every layer of our architecture and operations.", 
      bullets: ["Zero-Trust Identity & IAM Controls", "Continuous Compliance Audits", "Military-Grade AES-256 Encryption"],
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      title: "Cloud Native", 
      description: "We leverage the cloud to build agile, resilient, and cost-effective solutions.", 
      bullets: ["Elastic Multi-Region Infrastructure", "Infrastructure as Code Automation", "Self-Healing Kubernetes Clusters"],
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      title: "Engineering Excellence", 
      description: "We follow best practices, write clean code and automate everything we can.", 
      bullets: ["Strict Peer Review Guidelines", "Automated QA Validation Pipelines", "Optimized Sub-millisecond Execution"],
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      title: "Collaboration", 
      description: "We work as an extension of your team with transparency and accountability.", 
      bullets: ["Cohesive Slack & Jira Integration", "Bi-weekly Velocity Adjustments", "Shared SLA & Performance Audits"],
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      title: "Continuous Improvement", 
      description: "We constantly learn, adapt, and improve to deliver greater outcomes.", 
      bullets: ["Iterative Post-Mortem Reviews", "Proactive System Modernization", "Continuous Query & Database Tuning"],
      src: "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=600&auto=format&fit=crop" 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setValIndex((prev) => (prev + 1) % valuesCards.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [valuesCards.length]);

  const handleValPrev = () => {
    setValIndex((prev) => (prev === 0 ? valuesCards.length - 1 : prev - 1));
  };
  const handleValNext = () => {
    setValIndex((prev) => (prev + 1) % valuesCards.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const el = journeyRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const elementHeight = rect.height;
      const elementTop = rect.top;
      
      const stickyThreshold = 180;
      const totalStickyDistance = elementHeight - 500; // sticky container is h-[500px]
      
      if (totalStickyDistance <= 0) return;
      
      const scrolledDistance = stickyThreshold - elementTop;
      const progress = Math.max(0, Math.min(1, scrolledDistance / totalStickyDistance));
      
      setScrollProgress(progress);
      const stepIndex = Math.min(Math.floor(progress * 6), 5);
      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Coordinates for the About Page global operation nodes
  const mapNodes = [
    { id: "na", name: "North America Hub", x: "24%", y: "38%", countries: "North America", desc: "Primary enterprise clients & SRE team rotation" },
    { id: "eu", name: "Europe Hub", x: "48%", y: "30%", countries: "Europe", desc: "Financial SaaS advisory & security support" },
    { id: "me", name: "Middle East Hub", x: "60%", y: "46%", countries: "Middle East", desc: "Logistics infrastructure integration teams" },
    { id: "ap", name: "Asia Pacific Hub", x: "71%", y: "52%", countries: "Asia-Pacific Region", desc: "Global headquarters and 24/7 NOC center" }
  ];

  // Coordinates for the About Page DNA nodes
  const dnaNodes = [
    { 
      id: "reliability", 
      name: "Reliability", 
      icon: Activity, 
      desc: "We build resilient systems that deliver consistent performance.",
      bullets: ["High Availability & Fault Tolerance", "Automated Self-Healing Systems", "SLA & Performance Guarantees"]
    },
    { 
      id: "security", 
      name: "Security", 
      icon: Shield, 
      desc: "Security is embedded in everything we build and deliver.",
      bullets: ["Zero Trust Security Architecture", "Regulatory Compliance Frameworks", "Continuous Vulnerability Scanning"]
    },
    { 
      id: "success", 
      name: "Customer Success", 
      icon: Users, 
      desc: "Your success is our measure of achievement.",
      bullets: ["Dedicated Solution Architects", "24/7 Operations Support Portal", "Transparent Collaboration & Delivery"]
    },
    { 
      id: "scalability", 
      name: "Scalability", 
      icon: TrendingUp, 
      desc: "We architect solutions that grow with your business.",
      bullets: ["Auto-Scaling Kubernetes Clusters", "Multi-Region Global Architectures", "Serverless Infrastructure Patterns"]
    },
    { 
      id: "innovation", 
      name: "Innovation", 
      icon: Sparkles, 
      desc: "We embrace new technologies to solve complex problems.",
      bullets: ["Cloud-Native Engineering Focus", "AI & Advanced Automation Stack", "Continuous DevOps Modernization"]
    }
  ];

  // Steps for process timeline
  const processSteps = [
    { 
      step: 1, 
      name: "Discover", 
      subtitle: "STEP 1 OF 5",
      desc: "We start by understanding your business, challenges, and objectives to lay the foundation for success.",
      bullets: [
        "In-depth stakeholder discussions",
        "Business and technical assessment",
        "Identify challenges and opportunities",
        "Define scope and success metrics"
      ],
      deliverable: "Discovery Report & Roadmap",
      image: "/assets/images/Process/process_discover.webp",
      icon: Search
    },
    { 
      step: 2, 
      name: "Architect", 
      subtitle: "STEP 2 OF 5",
      desc: "We design a tailored blueprint focusing on security, performance, cost-efficiency, and scalability.",
      bullets: [
        "Multi-cloud architecture definition",
        "Detailed system blueprinting",
        "Cost optimization planning",
        "Security & compliance scoping"
      ],
      deliverable: "Architecture Design Document",
      image: "/assets/images/Process/process_architect.webp",
      icon: Layers
    },
    { 
      step: 3, 
      name: "Build", 
      subtitle: "STEP 3 OF 5",
      desc: "We engineer your platform using modern code standards, automated deployment pipelines, and high-quality templates.",
      bullets: [
        "Infrastructure as Code setup",
        "CI/CD automated deployment pipelines",
        "Microservices and backend coding",
        "API gateway integrations"
      ],
      deliverable: "Production Ready Codebase",
      image: "/assets/images/Process/process_build.webp",
      icon: Code
    },
    { 
      step: 4, 
      name: "Secure", 
      subtitle: "STEP 4 OF 5",
      desc: "We run deep automated security scans, compliance audits, and vulnerability tests before deployment.",
      bullets: [
        "Vulnerability assessment & testing",
        "Comprehensive security compliance verification",
        "Zero Trust security configuration",
        "Identity & Access Management policies"
      ],
      deliverable: "Security Audit & Clearance Report",
      image: "/assets/images/Process/process_secure.webp",
      icon: Shield
    },
    { 
      step: 5, 
      name: "Scale", 
      subtitle: "STEP 5 OF 5",
      desc: "We monitor live metrics, optimize query bottlenecks, and scale configurations to handle heavy user traffic.",
      bullets: [
        "Real-time logging & APM setup",
        "Database query load-testing",
        "Kubernetes auto-scaling config",
        "24/7 SRE alerts and support"
      ],
      deliverable: "Live Scaled System & SLA Policy",
      image: "/assets/images/Process/process_scale.webp",
      icon: Rocket
    }
  ];

  const hoveredNodeData = dnaNodes.find((n) => n.id === hoveredNodeId);

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative text-left"
    >
      {/* Global Background Image (Hero background) */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none select-none"
        style={{ backgroundImage: "url('/assets/images/about_hero_bg.webp')", opacity: 0.7 }}
      />
      {/* Semi-transparent Overlay for Readability */}
      <div className="fixed inset-0 z-0 bg-slate-50/80 backdrop-blur-[1px] pointer-events-none select-none" />

      {/* Blueprint Grid Background */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e2e8f0_1.5px,transparent_1.5px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none opacity-[0.03]" />

      {/* Dynamic Cursor Light Glow */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none select-none opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.035), transparent 40%)`
        }}
      />

      <section className="relative overflow-hidden min-h-[650px] flex items-center border-b border-slate-200/60 bg-transparent py-20 z-10">
        {/* Subtle decorative glow centered behind the content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none select-none z-0" />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
            
            <span className="text-[10px] font-black tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 shadow-2xs inline-block uppercase font-mono">
              ABOUT PRIVIA
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 font-outfit tracking-tight leading-[1.1] text-center">
              Engineering Infrastructure <br />
              That Powers <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">Modern Business</span>
            </h1>
            
            <p className="text-slate-550 text-sm sm:text-base leading-relaxed max-w-2xl font-semibold text-center">
              We help organizations build, secure, and scale digital platforms on the cloud with engineering excellence and operational reliability at the core.
            </p>

            {/* Metrics Base Row (Centered) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-center w-full">
              {[
                { val: "120+", label: "Projects Delivered" },
                { val: "99.99%", label: "Reliability Achieved" },
                { val: "24/7", label: "Monitoring Coverage" },
                { val: "40%", label: "Key Cost Reduction" }
              ].map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-slate-200/80 shadow-3xs hover:border-blue-600 transition-colors flex flex-col items-center justify-center text-center">
                  <div className="text-2xl font-black text-slate-900 font-outfit">{m.val}</div>
                  <div className="text-[8.5px] font-black uppercase tracking-wider text-slate-400 font-mono mt-1 text-center">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="pt-6 w-full flex justify-center">
              <button 
                onClick={() => {
                  const el = document.getElementById("our-dna");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-[10px] font-black tracking-widest text-slate-500 hover:text-blue-600 transition-colors font-mono flex items-center gap-1.5 uppercase"
              >
                <span>↓ Scroll to explore</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: OUR DNA (LIGHT THEME STAR LAYOUT) ================= */}
      <section id="our-dna" className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-slate-200/30 min-h-[800px] flex flex-col justify-center relative z-10">
        {/* SVG Custom Style for Electric flow Animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes dash {
            to {
              stroke-dashoffset: -12;
            }
          }
          .animate-\\[dash_0\\.4s_linear_infinite\\] {
            animation: dash 0.4s linear infinite;
          }
        `}} />

        {/* Section Header (Centered on Top) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-10">
          <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase font-mono bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 shadow-2xs inline-block">
            OUR DNA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-outfit tracking-tight leading-tight pt-2">
            Built on Principles. Driven by Purpose.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            Our DNA defines how we build solutions, work with clients, and deliver impact.
          </p>
        </div>

        {/* Centered carousel component - full width */}
        <div className="flex justify-center w-full max-w-4xl mx-auto h-[600px] items-center">
          <CarouselDemo />
        </div>

      </section>      {/* ================= SECTION 3: OUR JOURNEY (LIGHT THEME STICKY SCROLL) ================= */}
      <section className="bg-transparent text-slate-900 border-y border-slate-200/40 relative py-16 z-10">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase font-mono bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 shadow-2xs inline-block">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-outfit tracking-tight leading-tight pt-2">
              From Vision to Value
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
              A timeline of our key milestones, engineering evolution, and global footprint.
            </p>
          </div>
          
          {/* Desktop Version: Sticky columns grid using scroll tracking */}
          <div ref={journeyRef} className="relative h-[180vh] w-full hidden md:block mt-8">
            
            {/* Sticky grid wrapper that stays on screen */}
            <div 
              style={{ position: "sticky", top: "180px" }}
              className="sticky top-[180px] h-[500px] w-full grid grid-cols-12 gap-8 items-center overflow-visible"
            >
              
              {/* Left Column: Rotating Image container */}
              <div className="col-span-5 flex justify-center items-center py-4">
                <motion.div
                  animate={{ rotate: activeStep * 90 }}
                  transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
                  className="w-[360px] h-[360px] bg-white rounded-3xl relative overflow-hidden shadow-xl border border-slate-200/80 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: -activeStep * 90 }}
                    transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute inset-0 w-[142%] h-[142%] flex items-center justify-center"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeStep}
                        src={[
                          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
                          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
                          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
                          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
                          "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
                          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
                        ][activeStep]}
                        alt="Step scene"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full object-cover"
                      />
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </div>

              {/* Middle Column: Vertical Pink Progress Line & Star Bullet */}
              <div className="col-span-2 flex justify-center items-center h-[360px] py-4">
                <div className="relative w-8 h-full flex justify-center items-center">
                  {/* Background track line */}
                  <div className="absolute top-0 bottom-0 w-0.5 bg-slate-200" />
                  
                  {/* Pink active progress line */}
                  <motion.div
                    className="absolute top-0 w-0.5 bg-pink-500 origin-top shadow-[0_0_8px_rgba(236,72,153,0.3)]"
                    style={{ height: `${scrollProgress * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Star glide */}
                  <motion.div
                    className="absolute w-8 h-8 flex items-center justify-center text-pink-500 z-10"
                    style={{
                      top: `calc(${scrollProgress * 100}% - 16px)`,
                    }}
                    transition={{ type: "spring", stiffness: 140, damping: 18 }}
                  >
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current drop-shadow-[0_0_6px_rgba(236,72,153,0.5)]">
                      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: Single Sticky text wrapper with sliding text transitions */}
              <div className="col-span-5 flex justify-start items-center">
                <div className="min-h-[300px] w-full flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="space-y-4 text-left w-full"
                    >
                      <span className="text-pink-500 font-mono font-bold tracking-widest text-xs uppercase block">
                        MILESTONE STEP 0{activeStep + 1}
                      </span>
                      
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-slate-900 font-outfit">
                          {[2012, 2015, 2018, 2021, 2024, 2026][activeStep]}
                        </span>
                        <span className="text-slate-400 font-mono text-sm">/</span>
                        <h3 className="text-xl font-bold text-slate-700 tracking-tight">
                          {[
                            "Founded",
                            "First Enterprise Client",
                            "Cloud Division Launch",
                            "Compliance Practice",
                            "100+ Deployments",
                            "Global Expansion"
                          ][activeStep]}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-500 leading-relaxed font-semibold">
                        {[
                          "Privia was founded with a vision to deliver secure and scalable cloud solutions.",
                          "Onboarded our first enterprise client and successfully delivered critical workloads.",
                          "Expanded our capabilities with a dedicated cloud engineering and DevOps practice.",
                          "Launched compliance and security services aligned with global standards.",
                          "Crossed 100 successful deployments with 99.99% reliability achieved.",
                          "Expanded our footprint across geographies and industry verticals."
                        ][activeStep]}
                      </p>

                      <div className="pt-4 border-t border-slate-200 space-y-2.5">
                        {[
                          [
                            ["Initial core team assembly", "Establishment of architecture standards", "Bootstrap phase validation"],
                            ["Scale load optimization", "High-velocity pipeline setups", "Zero-downtime database migration"],
                            ["Multi-cloud architecture expertise", "CI/CD automated deployment models", "Cost optimization frameworks"],
                            ["Security framework alignment", "Security compliance standards", "Continuous automated pen-testing"],
                            ["Enterprise SLA enforcement", "24/7 client NOC operations", "Global routing latency optimization"],
                            ["Global region local presence", "Strategic tech partnerships", "Advanced AI & Data services launch"]
                          ][activeStep]
                        ][0].map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-655 font-bold">
                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-pink-500 mt-0.5 shrink-0">
                              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
                            </svg>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>

          </div>

          {/* Mobile-Friendly Vertical List (Only visible on screens smaller than md) */}
          <div className="max-w-xl mx-auto py-8 space-y-12 md:hidden block">
            <div className="relative pl-8 border-l border-slate-200 space-y-10 text-left">
              {[
                { year: 2012, title: "Founded", desc: "Privia was founded with a vision to deliver secure and scalable cloud solutions." },
                { year: 2015, title: "First Enterprise Client", desc: "Onboarded our first enterprise client and successfully delivered critical workloads." },
                { year: 2018, title: "Cloud Division Launch", desc: "Expanded our capabilities with a dedicated cloud engineering and DevOps practice." },
                { year: 2021, title: "Compliance Practice", desc: "Launched compliance and security services aligned with global standards." },
                { year: 2024, title: "100+ Deployments", desc: "Crossed 100 successful deployments with 99.99% reliability achieved." },
                { year: 2026, title: "Global Expansion", desc: "Expanded our footprint across geographies and industry verticals." }
              ].map((item, index) => (
                <div key={item.year} className="relative space-y-2">
                  
                  {/* Pink Dot Bullet */}
                  <div className="absolute left-[-41px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-pink-500 flex items-center justify-center z-10 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                  </div>

                  <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
                    <span className="text-xs font-black tracking-wider text-pink-500 font-mono block mb-0.5">{item.year}</span>
                    <h4 className="font-extrabold text-base text-slate-800 tracking-tight">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">{item.desc}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: CORE VALUES & PROCESS FLOW (LIGHT THEME) ================= */}
      <section className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 space-y-24 border-b border-slate-200/30 bg-transparent relative z-10">
        
        {/* Core Values Sub-section */}
        <div className="space-y-12">
          <div className="text-left space-y-3">
            <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase font-mono pl-0.5">CORE VALUES</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-outfit tracking-tight">The Principles That Guide Us</h2>
          </div>

          <div className="space-y-8">
            {/* Mobile View: Single card with fade/slide transition */}
            <div className="block sm:hidden w-full h-[500px]">
              <MobileValuesCard 
                card={valuesCards[valIndex]}
                idx={valIndex}
                valuesCards={valuesCards}
              />
            </div>

            {/* Desktop/Tablet View: 3D Sliding Carousel */}
            <div className="hidden sm:flex relative w-full h-[540px] items-center justify-center overflow-visible">
              <CoreValuesCarousel 
                valuesCards={valuesCards}
                current={valIndex}
                setCurrent={setValIndex}
                handleValPrev={handleValPrev}
                handleValNext={handleValNext}
              />
            </div>

            {/* Navigation controls directly below the carousel */}
            <div className="flex justify-center items-center gap-6 pt-4">
              <button
                onClick={handleValPrev}
                className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center transition-all hover:bg-slate-50 hover:border-slate-350 active:scale-95 shadow-sm cursor-pointer"
                aria-label="Previous value"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicator dots */}
              <div className="flex gap-2 items-center">
                {valuesCards.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setValIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === valIndex ? "bg-blue-600 w-6" : "bg-slate-300 w-1.5 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to value ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleValNext}
                className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center transition-all hover:bg-slate-50 hover:border-slate-350 active:scale-95 shadow-sm cursor-pointer"
                aria-label="Next value"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>        {/* How We Work Sub-section */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center pt-12 border-t border-slate-100 w-full">
          
          {/* Left Column: Heading, features, CTA button */}
          <div className="w-full lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase font-mono pl-0.5">HOW WE WORK</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-outfit tracking-tight leading-[1.15]">
                A Proven Process <br />
                for <span className="text-blue-600">Reliable Results</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed font-semibold">
                Our end-to-end process ensures transparency, quality, and measurable outcomes.
              </p>
            </div>

            {/* Checklist Features */}
            <div className="space-y-5">
              {[
                {
                  title: "Outcome Focused",
                  desc: "We align every step to your business goals.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                    </svg>
                  )
                },
                {
                  title: "Transparent Process",
                  desc: "Clear communication and full visibility.",
                  icon: <Shield className="w-5 h-5" />
                },
                {
                  title: "Quality Assured",
                  desc: "Best practices, security, and performance at every stage.",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 11l2 2 4-4" />
                    </svg>
                  )
                }
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-2xs">
                    {feat.icon}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-extrabold text-sm text-slate-900 tracking-tight leading-tight">{feat.title}</h4>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              href="/contact"
              className="px-6 py-3.5 rounded-xl text-white bg-blue-600 hover:bg-blue-700 text-xs font-black uppercase tracking-wider font-mono inline-flex items-center gap-1.5 transition-all shadow-md hover:shadow-lg shadow-blue-500/10 hover:scale-102"
            >
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Process timeline + active card */}
          <div className="w-full lg:col-span-7 space-y-8 flex flex-col justify-center">
            
            {/* Timeline selector nodes row */}
            <div className="relative w-full px-2 py-4">
              {/* Connection dotted path behind nodes */}
              <div className="absolute top-[32px] left-[5%] right-[5%] h-0.5 border-t-2 border-dashed border-slate-200 z-0" />
              
              <div className="flex justify-between items-start relative z-10 w-full overflow-x-auto scrollbar-none pt-4 pb-1 gap-2">
                {processSteps.map((s) => {
                  const isActive = activeProcessStep === s.step;
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.step}
                      onClick={() => setActiveProcessStep(s.step)}
                      className="flex flex-col items-center cursor-pointer group outline-none shrink-0"
                    >
                      {/* Circle container */}
                      <div className="relative">
                        {/* Circle node halo wrapper */}
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all ${
                          isActive 
                            ? "bg-blue-600 border-blue-100 shadow-[0_0_15px_rgba(37,99,235,0.25)] ring-4 ring-blue-50 scale-105 text-white" 
                            : "bg-white border-slate-250 text-slate-450 group-hover:border-slate-400 group-hover:text-slate-800"
                        }`}>
                          <Icon className="w-5.5 h-5.5" />
                        </div>
                      </div>
                      <span className={`text-[9.5px] font-black uppercase tracking-wider mt-3 font-mono transition-colors ${
                        isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-700"
                      }`}>
                        {s.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Step Details Card */}
            <div className="w-full bg-white border border-slate-200/80 rounded-3xl p-4 sm:p-8 flex flex-col md:flex-row gap-8 relative shadow-sm text-left">
              {/* Top Accent Blue line */}
              <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-full" />
              
              {/* Left Column: Isometric Visual */}
              <div className="md:w-5/12 flex items-center justify-center bg-slate-50/50 rounded-2xl p-4 border border-slate-100 shadow-inner">
                <img 
                  src={processSteps[activeProcessStep - 1].image} 
                  alt={processSteps[activeProcessStep - 1].name}
                  className="w-full max-w-[170px] h-auto object-contain select-none pointer-events-none transition-all duration-500 hover:scale-105" 
                />
              </div>

              {/* Right Column: Descriptions & Checklist */}
              <div className="md:w-7/12 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3 font-mono">
                    {processSteps[activeProcessStep - 1].subtitle}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-outfit tracking-tight">
                    {processSteps[activeProcessStep - 1].name}
                  </h3>
                  
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-2">
                    {processSteps[activeProcessStep - 1].desc}
                  </p>

                  {/* Checklist bullets */}
                  <div className="space-y-2 mt-4">
                    {processSteps[activeProcessStep - 1].bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-[10.5px] text-slate-655 font-bold">
                        <span className="w-4 h-4 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 font-mono text-[9px]">
                          +
                        </span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable banner */}
                <div className="flex items-center gap-3 bg-blue-50/40 border border-blue-100/60 rounded-2xl p-3.5 mt-auto">
                  <div className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1 3.2.7.7 1.3 1.5 1.5 2.4" />
                      <path d="M9 18h6M10 22h4" />
                    </svg>
                  </div>
                  <div className="text-[10.5px] font-bold text-slate-700 leading-normal">
                    <strong className="text-slate-900">Deliverable:</strong> {processSteps[activeProcessStep - 1].deliverable}
                  </div>
                </div>
              </div>

              {/* Floating Next chevron button */}
              <button 
                onClick={() => setActiveProcessStep((prev) => (prev % 5) + 1)}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-lg text-blue-600 hover:text-blue-700 hidden sm:flex items-center justify-center transition-all z-20 outline-none hover:scale-108 active:scale-95"
                aria-label="Next step"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>

      </section>

      {/* ================= SECTION 5: INDUSTRIES WE SERVE (LIGHT THEME) ================= */}
      <section className="pt-16 pb-6 space-y-8 bg-transparent border-b border-slate-200/30 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-3">
          <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase font-mono pl-0.5">INDUSTRIES WE SERVE</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-outfit tracking-tight">Solutions Tailored for Every Industry</h2>
        </div>

        <div className="w-full">
          <SolutionsCarousel />
        </div>
      </section>



      {/* ================= SECTION 9: BOTTOM CTA ================= */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-[#0a1128] to-[#0f172a] border border-slate-800 text-white text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            {/* Center Logo shape */}
            <div className="w-16 h-16 shrink-0 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-inner">
              <svg viewBox="0 0 100 100" className="w-10 h-10 text-blue-400 fill-current">
                <path d="M50 20 L25 75 H38 L50 45 L62 75 H75 Z" />
              </svg>
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight font-outfit">
                Ready to Build Something Exceptional?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-medium leading-relaxed">
                Let's discuss how we can help you modernize, secure, and scale your infrastructure for the future.
              </p>
            </div>
          </div>
          
          <Link 
            href="/contact"
            className="px-6 py-3.5 rounded-xl text-xs font-extrabold text-slate-900 bg-white hover:bg-slate-100 transition-all flex items-center shrink-0 gap-2 shadow-md hover:shadow-lg relative z-10 uppercase tracking-wider font-mono"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

function OrbitingDna({ dnaNodes, hoveredNodeId, setHoveredNodeId }) {
  const [angle, setAngle] = useState(0);
  const frozenAngleRef = useRef(0);

  // Keep frozen angle in sync with last-known angle before hover
  useEffect(() => {
    if (hoveredNodeId !== null) {
      // freeze: store current angle so cards don't move
      frozenAngleRef.current = angle;
      return;
    }
    // resume from frozen angle
    setAngle(frozenAngleRef.current);
    const interval = setInterval(() => {
      setAngle((prev) => {
        const next = (prev + 0.008) % (2 * Math.PI);
        frozenAngleRef.current = next;
        return next;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [hoveredNodeId]);

  // Use 540px canvas, center at 270,270, orbit radius 190px
  const CX = 270;
  const CY = 270;
  const R = 190;
  const CANVAS = 540;

  const nodesWithCoords = dnaNodes.map((node, index) => {
    const nodeAngle = angle + (index * (2 * Math.PI / dnaNodes.length));
    const x = CX + R * Math.cos(nodeAngle);
    const y = CY + R * Math.sin(nodeAngle);
    return { ...node, x, y, nodeAngle };
  });

  const hoveredNodeCoord = nodesWithCoords.find((n) => n.id === hoveredNodeId);

  // Determine tooltip placement based on position relative to center
  const getTooltipStyle = (node) => {
    const dx = node.x - CX;
    const dy = node.y - CY;
    const CARD_W = 140;
    const TIP_W = 200;
    const TIP_H = 180;
    // Place tooltip on the outward side from the center
    if (Math.abs(dx) >= Math.abs(dy)) {
      // Left or Right
      if (dx > 0) {
        return { left: `${node.x + CARD_W / 2 + 12}px`, top: `${node.y - TIP_H / 2}px` };
      } else {
        return { left: `${node.x - CARD_W / 2 - TIP_W - 12}px`, top: `${node.y - TIP_H / 2}px` };
      }
    } else {
      // Top or Bottom
      if (dy > 0) {
        return { left: `${node.x - TIP_W / 2}px`, top: `${node.y + CARD_W / 2 + 12}px` };
      } else {
        return { left: `${node.x - TIP_W / 2}px`, top: `${node.y - CARD_W / 2 - TIP_H - 12}px` };
      }
    }
  };

  return (
    <div
      className="relative select-none"
      style={{ width: `${CANVAS}px`, height: `${CANVAS}px` }}
    >
      {/* 3D Central Core — absolutely centered at CX,CY */}
      <div
        className="absolute flex items-center justify-center z-20"
        style={{ width: 96, height: 96, left: CX - 48, top: CY - 48 }}
      >
        {/* Outer spinning dashed ring */}
        <div className="absolute rounded-full border-2 border-dashed border-blue-500/30 animate-[spin_12s_linear_infinite]" style={{ inset: -16 }} />
        {/* Outer spinning dotted ring reversed */}
        <div className="absolute rounded-full border-2 border-dotted border-blue-400/20 animate-[spin_24s_linear_infinite] [animation-direction:reverse]" style={{ inset: -32 }} />
        {/* Core glow */}
        <div className="absolute rounded-full bg-blue-500/10 blur-2xl pointer-events-none" style={{ inset: -48 }} />
        {/* Orbit guide circle (subtle) */}
        <div
          className="absolute rounded-full border border-blue-200/30 border-dashed pointer-events-none"
          style={{ width: R * 2, height: R * 2, left: 48 - R, top: 48 - R }}
        />
        {/* Inner 3D Sphere */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white flex items-center justify-center shadow-[0_0_35px_rgba(37,99,235,0.5)] border-4 border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
          <svg viewBox="0 0 100 100" className="w-10 h-10 text-white fill-current drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] animate-pulse">
            <path d="M50 20 L25 75 H38 L50 45 L62 75 H75 Z" />
          </svg>
        </div>
      </div>

      {/* Electric SVG connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ width: CANVAS, height: CANVAS }}>
        {/* Subtle orbit track */}
        <circle
          cx={CX} cy={CY} r={R}
          fill="none"
          stroke="rgba(99,132,246,0.12)"
          strokeWidth="1"
          strokeDasharray="4,6"
        />
        {hoveredNodeId && hoveredNodeCoord && (
          <>
            <line x1={CX} y1={CY} x2={hoveredNodeCoord.x} y2={hoveredNodeCoord.y}
              stroke="rgba(59,130,246,0.35)" strokeWidth="6" strokeLinecap="round" />
            <line x1={CX} y1={CY} x2={hoveredNodeCoord.x} y2={hoveredNodeCoord.y}
              stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"
              strokeDasharray="8,4"
              className="animate-[dash_0.4s_linear_infinite]"
            />
            <circle r="4.5" fill="#60a5fa">
              <animateMotion dur="0.6s" repeatCount="indefinite"
                path={`M ${CX} ${CY} L ${hoveredNodeCoord.x} ${hoveredNodeCoord.y}`} />
            </circle>
          </>
        )}
      </svg>

      {/* Orbiting Cards */}
      {nodesWithCoords.map((node) => {
        const Icon = node.icon;
        const isHovered = hoveredNodeId === node.id;
        return (
          <React.Fragment key={node.id}>
            {/* Card */}
            <div
              style={{ left: `${node.x}px`, top: `${node.y}px`, zIndex: 30 }}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 bg-white border rounded-2xl p-4 w-[140px] text-center cursor-pointer transition-all duration-200 ${
                isHovered
                  ? "border-blue-600 shadow-lg scale-110"
                  : "border-slate-200 shadow-sm hover:border-blue-400"
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2 transition-colors duration-200 ${
                isHovered ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
              }`}>
                <Icon className="w-4 h-4" />
              </div>
              <h4 className="font-extrabold text-[11px] text-slate-900">{node.name}</h4>
            </div>

            {/* Contextual Tooltip - beside the card, on the outward side */}
            {isHovered && (
              <motion.div
                key={`tip-${node.id}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                style={{ ...getTooltipStyle(node), zIndex: 50, width: 200, position: "absolute" }}
                className="bg-white border border-blue-100 rounded-2xl shadow-xl p-4 text-left pointer-events-none"
              >
                <span className="text-[9px] font-black tracking-widest text-blue-500 font-mono uppercase block mb-1">PRINCIPLE</span>
                <h4 className="font-extrabold text-sm text-slate-900 leading-tight mb-1.5">{node.name}</h4>
                <p className="text-[10px] text-slate-500 font-medium leading-relaxed mb-3">{node.desc}</p>
                <div className="space-y-1.5 border-t border-slate-100 pt-2">
                  {node.bullets?.map((b, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[10px] text-slate-605 font-semibold">
                      <span className="text-blue-500 mt-0.5 shrink-0">+</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
