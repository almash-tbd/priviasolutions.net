"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, Rocket, Layers, 
  Settings, Shield, Lock, Terminal, Activity, GitBranch,
  Cpu, Server, HelpCircle, ChevronRight, Zap, RefreshCw,
  Users, Globe
} from "lucide-react";
import { getTechLogo } from "@/components/TechLogos";

export default function IceDeployPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [faqPage, setFaqPage] = useState(0);
  const [faqInput, setFaqInput] = useState("");
  const [faqSent, setFaqSent] = useState(false);
  const [activeStrategy, setActiveStrategy] = useState("canary");
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const keyFeatures = [
    {
      title: "GitOps Workflow",
      desc: "Deploy from Git commits with automatic PR previews and approval workflows.",
      icon: GitBranch
    },
    {
      title: "Automated Rollbacks",
      desc: "Health checks and automatic rollback on deployment failures.",
      icon: RefreshCw
    },
    {
      title: "Canary Deployments",
      desc: "Progressive traffic shifting with automated analysis.",
      icon: Activity
    },
    {
      title: "Integrations",
      desc: "Slack, Teams, PagerDuty, Jira, and custom webhooks.",
      icon: Settings
    },
    {
      title: "Observability",
      desc: "Real-time deployment metrics and audit logs.",
      icon: Terminal
    }
  ];

  const integrationBadges = [
    "Kubernetes", "Multi-Cloud ECS", "Container Apps", 
    "GitHub", "GitLab", "Bitbucket", 
    "Slack", "Teams", "Datadog", "New Relic"
  ];

  const capabilities = [
    {
      title: "Microservices Deployment",
      desc: "Deploy and manage hundreds of microservices with GitOps automation. Coordinate multi-service deployments with dependency management.",
      points: ["Automatic service discovery", "Traffic routing", "Health monitoring"]
    },
    {
      title: "Multi-Region Rollouts",
      desc: "Deploy to multiple regions with progressive rollouts. Start with one region, validate, then expand globally with confidence.",
      points: ["Region-by-region deployment", "Traffic shifting", "Failover support"]
    },
    {
      title: "Continuous Delivery",
      desc: "Automate your entire deployment pipeline from code commit to production. Integrate with your existing CI/CD tools.",
      points: ["PR previews", "Automated testing", "Deployment gates"]
    },
    {
      title: "Emergency Hotfixes",
      desc: "Deploy critical fixes fast with express deployment lanes. Automated rollback ensures safety even during urgent deployments.",
      points: ["Fast-track deployments", "Instant rollback", "Audit logging"]
    }
  ];

  const strategies = {
    rolling: {
      title: "Rolling Updates",
      desc: "Gradually replace old versions of your application with the new one. The deployment is performed incrementally, avoiding downtime while keeping system load low.",
      bestFor: "Standard deployments with minimal risk"
    },
    canary: {
      title: "Canary Releases",
      desc: "Deploy the new version to a small subset of servers or users first. Once validated against production traffic and error budgets, automatically scale it to all users.",
      bestFor: "High-traffic production deployments"
    },
    blueGreen: {
      title: "Blue-Green Deployments",
      desc: "Maintain two identical physical environments (Blue and Green). Traffic is instantly switched to the new environment once it is fully tested and warmed up.",
      bestFor: "Zero-downtime deployments"
    },
    flags: {
      title: "Feature Flags",
      desc: "Deploy the code containing new features to production, but keep the features hidden behind toggle gates. Roll out features to specific users progressively.",
      bestFor: "Gradual feature rollouts"
    }
  };

  const testimonials = [
    {
      quote: "IceDeploy reduced our deployment time from 2 hours to 5 minutes. The automated rollbacks saved us multiple times.",
      author: "Alex Rivera",
      role: "Lead DevOps Architect",
      initials: "AR",
      highlightedQuote: (
        <span>
          IceDeploy reduced our deployment time <span className="text-[#2C5EAD] font-bold">from 2 hours to 5 minutes</span>. The automated rollbacks saved us multiple times.
        </span>
      )
    },
    {
      quote: "We deploy 50+ times per day now. IceDeploy's canary deployments give us confidence to move fast without breaking things.",
      author: "Sanjay Mehta",
      role: "VP of Engineering",
      initials: "SM",
      highlightedQuote: (
        <span>
          We deploy <span className="text-[#2C5EAD] font-bold">50+ times per day</span> now. IceDeploy&apos;s canary deployments give us confidence to move fast without breaking things.
        </span>
      )
    },
    {
      quote: "The GitOps workflow is intuitive. Our entire team adopted it in days. Best deployment tool we've ever used.",
      author: "Elena Rostova",
      role: "SRE Director",
      initials: "ER",
      highlightedQuote: (
        <span>
          The GitOps workflow is intuitive. Our entire team <span className="text-[#2C5EAD] font-bold">adopted it in days</span>. Best deployment tool we&apos;ve ever used.
        </span>
      )
    }
  ];

  const faqs = [
    {
      q: "What platforms does IceDeploy support?",
      a: "IceDeploy supports Kubernetes (any distribution), Multi-Cloud ECS/EKS, Cloud Platform AKS/Container Apps, Cloud Services GKE/Cloud Run, and Docker Swarm. We also support serverless platforms like Multi-Cloud Lambda and Cloud Platform Functions."
    },
    {
      q: "How does automated rollback work?",
      a: "IceDeploy monitors your deployment using health checks, error rates, and custom metrics. If any threshold is breached, it automatically rolls back to the previous stable version and notifies your team."
    },
    {
      q: "Can I do canary or blue-green deployments?",
      a: "Yes! IceDeploy supports canary deployments (progressive traffic shifting), blue-green deployments (full switchover), and rolling updates. You can configure deployment strategies per environment."
    },
    {
      q: "How do I get started?",
      a: "Contact us for a free consultation. We'll assess your deployment needs, recommend the best architecture, and provide a detailed implementation roadmap."
    },
    {
      q: "Is there an on-premise version?",
      a: "Yes, Enterprise plans include an on-premise deployment option with dedicated support and custom SLA."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#112420] border border-emerald-500/30 text-xs font-bold text-[#4ade80] font-mono">
                <Rocket className="w-3.5 h-3.5 text-emerald-400" />
                <span>Product Suite :: Release Management</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                IceDeploy <br />
                <span className="bg-gradient-to-r from-[#22c55e] via-[#10b981] to-[#34d399] bg-clip-text text-transparent">
                  Automation Engine
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                GitOps-based deployment automation with automated rollbacks, canary releases, and comprehensive observability. Deploy confidently to any cloud.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-[#022c22] bg-gradient-to-r from-[#22c55e] to-[#10b981] hover:opacity-95 transition-all text-sm shadow-lg shadow-emerald-500/20 hover:scale-102"
                >
                  Start Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#features" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  Check Features
                </a>
              </div>
            </motion.div>

            {/* Right Side Visual Gimmick */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-emerald rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-emerald-500/20">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-deploy" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(16, 185, 129, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-deploy)" />
                  
                  {/* Pipeline flow paths */}
                  <path d="M 50,150 L 140,150" fill="none" stroke="#10b981" strokeWidth="2.5" className="svg-blueprint-line" />
                  <path d="M 170,150 L 260,150" fill="none" stroke="#10b981" strokeWidth="2.5" className="svg-blueprint-line" />
                  
                  <path d="M 290,150 C 320,150 330,90 350,90" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                  <path d="M 290,150 C 320,150 330,210 350,210" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Git Commit Node */}
                  <g transform="translate(50, 150)">
                    <circle r="16" fill="#061f1a" stroke="#10b981" strokeWidth="2" />
                    <GitBranch className="w-4 h-4 text-[#10b981] -translate-x-2 -translate-y-2" />
                    <text x="0" y="32" textAnchor="middle" fill="#94a3b8" fontSize="7" fontWeight="bold" fontFamily="monospace">GIT SOURCE</text>
                  </g>

                  {/* Deploy Manager Core */}
                  <g transform="translate(155, 150)">
                    <circle r="20" fill="#061f1a" stroke="#10b981" strokeWidth="2.5" className="radar-glow-circle" />
                    <circle r="14" fill="#022c22" stroke="#10b981" strokeWidth="2" />
                    <Rocket className="w-4 h-4 text-[#10b981] -translate-x-2 -translate-y-2" />
                    <text x="0" y="35" textAnchor="middle" fill="#10b981" fontSize="7" fontWeight="bold" fontFamily="monospace">ICEDEPLOY</text>
                  </g>

                  {/* Progressive Traffic Gates */}
                  <g transform="translate(275, 150)">
                    <circle r="16" fill="#061f1a" stroke="#10b981" strokeWidth="2" />
                    <Activity className="w-4 h-4 text-[#10b981] -translate-x-2 -translate-y-2" />
                    <text x="0" y="32" textAnchor="middle" fill="#94a3b8" fontSize="7" fontWeight="bold" fontFamily="monospace">CANARY GATES</text>
                  </g>

                  {/* Destination Clusters */}
                  <g transform="translate(360, 90)">
                    <circle r="12" fill="#061f1a" stroke="#10b981" strokeWidth="1.5" />
                    <Server className="w-3.5 h-3.5 text-[#10b981] -translate-x-1.8 -translate-y-1.8" />
                    <text x="18" y="3" textAnchor="start" fill="#64748b" fontSize="7" fontWeight="bold" fontFamily="monospace">PROD-A</text>
                  </g>

                  <g transform="translate(360, 210)">
                    <circle r="12" fill="#061f1a" stroke="#10b981" strokeWidth="1.5" />
                    <Server className="w-3.5 h-3.5 text-[#10b981] -translate-x-1.8 -translate-y-1.8" />
                    <text x="18" y="3" textAnchor="start" fill="#64748b" fontSize="7" fontWeight="bold" fontFamily="monospace">PROD-B</text>
                  </g>

                  {/* Flowing packet */}
                  <motion.circle
                    cx="50" cy="150" r="3.5" fill="#34d399"
                    animate={{
                      cx: [50, 155, 275, 360],
                      cy: [150, 150, 150, 90]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut"
                    }}
                  />
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>PIPELINE HEALTH: 100% SUCCESSFUL</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. KEY FEATURES */}
      <section id="features" className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#cbdcf8] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#10b981] uppercase font-mono">product::features</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Advanced Delivery Features</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {keyFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div 
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-500/5 group"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/40 text-emerald-450 border border-emerald-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-900/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mt-4">{feat.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INTEGRATIONS SCROLLER */}
      <section className="relative bg-gradient-to-b from-[#cbdcf8] via-[#c6d8f6] to-[#d1e1fc] py-20 border-b border-black/5 text-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">technical::ecosystem</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Supported Platforms & Integrations</h3>
          </div>

          <div className="relative w-full overflow-hidden py-4 select-none">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#cbdcf8] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#d1e1fc] to-transparent z-10 pointer-events-none" />

            <motion.div 
              className="flex space-x-6 w-max"
              animate={{ x: [0, -1120] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25
              }}
            >
              {[...integrationBadges, ...integrationBadges, ...integrationBadges].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white border border-slate-200/80 rounded-2xl flex items-center justify-center gap-3 shadow-sm w-48 flex-shrink-0 hover:shadow-md transition-shadow"
                >
                  {getTechLogo(item, "w-6 h-6 flex-shrink-0")}
                  <span className="text-sm font-extrabold text-slate-800">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xs text-slate-500 font-mono">Plus hundreds more through our REST API and webhooks.</p>
          </div>
        </div>
      </section>

      {/* 4. DEPLOYMENT CAPABILITIES */}
      <section className="relative bg-gradient-to-b from-[#d1e1fc] via-[#d8e5fc] to-[#cddbf7] py-24 border-b border-slate-200/60 overflow-hidden text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">Built for Your Deployment Needs</h3>
            <p className="text-xs text-slate-500 mt-2 font-mono">From simple apps to complex microservices architectures.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {capabilities.map((cap, idx) => (
              <motion.div 
                key={cap.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white border border-slate-200/80 shadow-[0_15px_35px_rgba(16,185,129,0.03)] rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group"
              >
                {/* Left accent bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/80 font-mono text-xs flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-extrabold text-slate-800 group-hover:text-emerald-650 transition-colors">{cap.title}</h4>
                  </div>
                  
                  <p className="text-xs text-slate-550 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-slate-100">
                  {cap.points.map((pt, i) => (
                    <li key={i} className="flex items-center text-xs text-slate-600 group-hover:text-slate-850 transition-colors">
                      <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. DEPLOYMENT STRATEGIES */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#d6e5fb] py-24 border-b border-slate-200 overflow-hidden text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">deployment::strategies</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Deployment Strategies We Automate</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left selector */}
            <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
              {Object.entries(strategies).map(([key, val]) => {
                const isActive = activeStrategy === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveStrategy(key)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? "bg-[#05070f] border-emerald-500 text-white shadow-lg" 
                        : "bg-white/70 border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <h4 className="text-sm font-bold">{val.title}</h4>
                    <p className={`text-xs mt-1.5 ${isActive ? "text-slate-400" : "text-slate-500"}`}>{val.bestFor}</p>
                  </button>
                );
              })}
            </div>

            {/* Right details */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-[#05070f] border border-[#2C5EAD]/30 flex flex-col justify-between relative overflow-hidden min-h-[250px] text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none" />
              
              <div className="space-y-4 relative z-10 w-full flex flex-col h-full justify-between">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800 font-mono text-[9px] text-[#4ade80] font-bold uppercase tracking-wider">
                  <span>deployment_model::details</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStrategy}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex-grow flex flex-col justify-center py-4"
                  >
                    <h4 className="text-lg font-bold text-white">{strategies[activeStrategy].title}</h4>
                    <p className="text-xs text-slate-450 leading-relaxed mt-2">{strategies[activeStrategy].desc}</p>
                    
                    <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-slate-500 uppercase">Recommended For:</span>
                      <span className="text-[10px] font-mono text-emerald-450 font-bold">{strategies[activeStrategy].bestFor}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS & SECURITY */}
      <section className="relative bg-gradient-to-b from-[#e0f2fe] via-[#eff6ff] to-[#f8fafc] py-20 border-b border-black/5 text-slate-950 overflow-hidden">
        {/* Background Decorative Rings/Dots matching Image 3 */}
        <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
          <svg viewBox="0 0 1440 600" className="w-full h-full object-cover">
            <circle cx="150" cy="150" r="250" fill="none" stroke="rgba(44,94,173,0.12)" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="1290" cy="450" r="300" fill="none" stroke="rgba(44,94,173,0.1)" strokeWidth="1.5" strokeDasharray="4 6" />
            <path d="M 100,100 Q 720,500 1340,100" fill="none" stroke="rgba(44,94,173,0.06)" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 text-[10px] font-bold text-blue-600 font-mono tracking-wider">
              <span>CLIENTS::TESTIMONIALS</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Loved by <span className="underline decoration-[#2C5EAD] decoration-wavy underline-offset-8 decoration-2">Teams</span>. Proven in Production.
            </h3>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-5xl mx-auto flex items-center justify-between gap-4 py-8">
            
            {/* Left Control Arrow */}
            <button 
              onClick={handlePrevTestimonial}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 shadow-md flex items-center justify-center text-slate-700 hover:text-[#2C5EAD] transition-all z-20 flex-shrink-0"
              aria-label="Previous testimonial"
            >
              <span className="text-lg font-bold">←</span>
            </button>

            {/* Carousel Track */}
            <div className="flex-1 flex justify-center items-center gap-6 overflow-visible relative min-h-[320px]">
              {testimonials.map((test, idx) => {
                const isCenter = activeTestimonial === idx;
                const isLeft = (activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1) === idx;
                const isRight = (activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1) === idx;
                
                let positionClass = "hidden";
                if (isCenter) positionClass = "scale-105 z-10 w-full max-w-lg bg-white border-2 border-emerald-500/80 shadow-[0_25px_60px_rgba(16,185,129,0.18)] rounded-3xl p-8 relative flex flex-col justify-between";
                if (isLeft) positionClass = "hidden md:flex scale-95 opacity-80 w-64 bg-white border border-slate-200 shadow-md rounded-3xl p-6 flex-col justify-between cursor-pointer hover:bg-slate-50 transition-all";
                if (isRight) positionClass = "hidden md:flex scale-95 opacity-80 w-64 bg-white border border-slate-200 shadow-md rounded-3xl p-6 flex-col justify-between cursor-pointer hover:bg-slate-50 transition-all";

                return (
                  <motion.div 
                    key={idx} 
                    layout
                    onClick={() => { if (!isCenter) setActiveTestimonial(idx); }}
                    className={`${positionClass} transition-all duration-500`}
                  >
                    <div className="space-y-4">
                      {/* Quote opening marks & Stars */}
                      <div className="flex justify-between items-start">
                        <span className="text-5xl text-blue-500 font-serif leading-none -mt-3 select-none">“</span>
                        <div className="flex text-yellow-500 text-sm">
                          {"★".repeat(5)}
                        </div>
                      </div>
                      
                      {/* Quote Text */}
                      <p className={`text-xs sm:text-sm text-slate-700 leading-relaxed font-medium ${isCenter ? "text-slate-855" : "italic"}`}>
                        {isCenter ? test.highlightedQuote : `"${test.quote}"`}
                      </p>
                    </div>

                    {/* Author Detail */}
                    <div className="mt-6 flex justify-between items-center pt-4 border-t border-slate-100 w-full">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500/10 to-[#1591dc]/10 border border-blue-500/20 flex items-center justify-center font-bold text-[#2C5EAD] font-mono text-sm shadow-inner">
                          {test.initials}
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-black text-slate-900">{test.author}</h4>
                          <p className="text-[10px] sm:text-xs text-slate-500 font-semibold">{test.role}</p>
                        </div>
                      </div>
                      {isCenter && (
                        <span className="text-5xl text-blue-500/40 font-serif leading-none select-none -mb-6">”</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Control Arrow */}
            <button 
              onClick={handleNextTestimonial}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 shadow-md flex items-center justify-center text-slate-700 hover:text-[#2C5EAD] transition-all z-20 flex-shrink-0"
              aria-label="Next testimonial"
            >
              <span className="text-lg font-bold">→</span>
            </button>

          </div>

          {/* Stats Bar matching Image 3 */}
          <div className="bg-white border border-slate-200/80 shadow-[0_15px_35px_rgba(44,94,173,0.06)] rounded-full px-6 sm:px-12 py-5 flex flex-wrap justify-around items-center gap-6 max-w-4xl mx-auto mt-16 relative z-10">
            <div className="flex items-center space-x-3">
              <Rocket className="w-5 h-5 text-blue-600" />
              <span className="text-xs sm:text-sm font-bold text-slate-800"><span className="text-[#2C5EAD] text-base sm:text-lg font-black">500+</span> Projects Delivered</span>
            </div>
            <div className="w-px h-8 bg-slate-200 hidden md:block" />
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-xs sm:text-sm font-bold text-slate-800"><span className="text-[#2C5EAD] text-base sm:text-lg font-black">120+</span> Happy Clients</span>
            </div>
            <div className="w-px h-8 bg-slate-200 hidden md:block" />
            <div className="flex items-center space-x-3">
              <span className="text-yellow-500 font-bold text-lg">★</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800"><span className="text-[#2C5EAD] text-base sm:text-lg font-black">98%</span> Client Satisfaction</span>
            </div>
            <div className="w-px h-8 bg-slate-200 hidden md:block" />
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-xs sm:text-sm font-bold text-slate-800"><span className="text-[#2C5EAD] text-base sm:text-lg font-black">24/7</span> Global Support</span>
            </div>
          </div>

          {/* Enterprise Security Overlay */}
          <div className="mt-16 max-w-5xl mx-auto p-8 rounded-3xl bg-[#05070f] text-white border border-[#2C5EAD]/30 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.03),transparent_60%)]" />
            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-extrabold text-white">Enterprise-Grade Security</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deploy with confidence knowing your infrastructure is secure. IceDeploy features built-in Secrets Management, Role-Based Access Control (RBAC), end-to-end payload encryption, and complete audit logs for compliance requirements.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["Secrets Management", "RBAC", "Audit Logging", "End-to-End Encryption"].map(sc => (
                    <span key={sc} className="px-2.5 py-1 rounded bg-[#0f1525] border border-slate-800 text-[10px] font-mono text-slate-300">
                      ✓ {sc}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 flex justify-center">
                <Shield className="w-24 h-24 text-emerald-500/40 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="relative bg-gradient-to-b from-[#edf4fc] via-[#e6effb] to-[#d6e5fb] py-24 overflow-hidden text-slate-950 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">product::faq</h2>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Frequently Asked Questions</h3>
          </div>

          {/* Accordion FAQ */}
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <div className="w-7 h-7 rounded-full bg-[#2C5EAD] hover:bg-[#1591DC] flex items-center justify-center text-white text-base font-black flex-shrink-0 transition-colors">
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
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#d6e5fb] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Ready to Automate Your Deployments?
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Contact us for a free consultation and implementation roadmap. Build, ship, scale, and secure your systems with our unified pipeline frameworks.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Start Implementation Roadmap
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
