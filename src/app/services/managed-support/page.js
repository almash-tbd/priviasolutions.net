"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Shield, 
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Clock, Activity, AlertCircle, Play, HeartHandshake, Terminal
} from "lucide-react";

export default function ManagedSupportPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [faqPage, setFaqPage] = useState(0);
  const [faqInput, setFaqInput] = useState("");
  const [faqSent, setFaqSent] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // State for SLA workload calculator (monthly API load metric)
  const [trafficVolume, setTrafficVolume] = useState(500000); // Default to 500K

  // State for Incident Escalation Workflow Visualizer
  const [incidentSeverity, setIncidentSeverity] = useState("P1");

  // State for Active Multi-Scope Monitoring Dashboard
  const [activeScope, setActiveScope] = useState("infrastructure");

  const supportTiers = [
    {
      id: "starter",
      name: "Starter",
      desc: "Essential security and update patching for low-traffic business applications.",
      rto: "RTO: 24 hours",
      limitText: "Up to 200k API calls / mo",
      bullets: [
        "Email support (Mon-Fri, 9-5)",
        "Monthly systems health checks",
        "Quarterly dependency updates",
        "Basic host monitoring setup"
      ]
    },
    {
      id: "growth",
      name: "Growth",
      desc: "Advanced monitoring and response targets for production platforms.",
      rto: "RTO: 8 hours",
      limitText: "200k - 1.5M API calls / mo",
      isPopular: true,
      bullets: [
        "Extended hours (Mon-Fri, 7-7)",
        "Phone & email direct support",
        "Weekly automated health checks",
        "Monthly security patch cycles",
        "Advanced monitoring & alerts"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      desc: "Complete 24/7 support coverage with strict recovery parameters.",
      rto: "RTO: 2 hours, RPO: 1 hour",
      limitText: "1.5M+ API calls / mo",
      bullets: [
        "24/7/365 active live support",
        "Dedicated on-call engineering team",
        "Proactive threat monitoring",
        "Continuous hotfix updates",
        "Custom SLA parameters & rules",
        "Dedicated account manager team"
      ]
    }
  ];

  const whatsIncluded = [
    {
      title: "Active Monitoring",
      desc: "24/7/365 active systems uptime and application performance tracking.",
      icon: Activity
    },
    {
      title: "Routine Maintenance",
      desc: "OS updates, dependency patch management, and critical security rollouts.",
      icon: Settings
    },
    {
      title: "Incident Response",
      desc: "Fast resolution times orchestrated by our on-call developer experts.",
      icon: AlertCircle
    },
    {
      title: "Systems Optimization",
      desc: "Proactive database tuning, cache audits, and server cost optimization.",
      icon: Zap
    }
  ];

  const monitoringScopes = {
    infrastructure: {
      title: "Infrastructure",
      bullets: [
        "CPU, Memory, and Disk capacity",
        "Network latency & active bandwidth",
        "Database indices performance",
        "Kubernetes container health states"
      ]
    },
    application: {
      title: "Application",
      bullets: [
        "API endpoint response latency",
        "Error rates & trace exceptions",
        "High-frequency transaction volumes",
        "User session tracking statistics"
      ]
    },
    security: {
      title: "Security",
      bullets: [
        "Failed authentication attempts",
        "Active DDoS detection alerts",
        "SSL certificate expiry logs",
        "Automated vulnerability scans"
      ]
    },
    business: {
      title: "Business Metrics",
      bullets: [
        "Transaction success rate checks",
        "Active user engagement metrics",
        "Revenue tracking system hooks",
        "Conversion funnel drop-off alerts"
      ]
    }
  };

  const faqs = [
    {
      q: "What is included in the response time SLA?",
      a: "Response time is measured from when an incident is detected or reported until our team acknowledges and begins investigation. P1 critical incidents get immediate attention. Resolution times depend on issue complexity but are typically 2-8x the response time."
    },
    {
      q: "Can I upgrade or downgrade my support tier?",
      a: "Yes. You can change tiers at any time with 30 days notice. Upgrades take effect immediately, while downgrades apply at the next billing cycle. We recommend starting with Growth tier and adjusting based on your needs."
    },
    {
      q: "What happens if you miss the SLA?",
      a: "We provide service credits for SLA breaches: 5% credit for missing SLA once, 10% for twice in a month, 25% for three or more times. Our uptime SLAs have been consistently above 99.95% across all customers."
    },
    {
      q: "Do you provide support for third-party integrations?",
      a: "Yes. We support common integrations (Multi-Cloud, Stripe, Twilio, etc.) as part of all tiers. Custom integrations may require additional setup time but are fully supported once deployed."
    },
    {
      q: "How does incident escalation work?",
      a: "Incidents are auto-classified by severity: P1 (critical outage), P2 (major degradation), P3 (minor issue), P4 (question/request). P1/P2 incidents escalate to senior engineers if not resolved within 1 hour. You receive real-time updates via your preferred channel."
    }
  ];

  // Helper to determine active tier based on API traffic slider
  const getSelectedTierId = () => {
    if (trafficVolume < 200000) return "starter";
    if (trafficVolume <= 1500000) return "growth";
    return "enterprise";
  };

  const activeTierId = getSelectedTierId();

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <HeartHandshake className="w-3.5 h-3.5 text-[#1591DC]" />
                <span>24/7 Managed Platform Support</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Managed Support <br />
                <span className="bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  & SLA Tiers
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                24/7 uptime monitoring, active incident response, and continuous maintenance backed by flexible, strict SLA targets.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Choose Your Tier
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#tiers" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  SLA Calculator
                </a>
              </div>
            </motion.div>

            {/* Right Side SVG Heartbeat Gimmick */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-support" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(139, 92, 246, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-support)" />
                  
                  {/* Glowing pulse line */}
                  <path 
                    d="M 20,150 L 120,150 L 140,110 L 160,190 L 180,130 L 190,160 L 200,150 L 380,150" 
                    fill="none" 
                    stroke="#8b5cf6" 
                    strokeWidth="3" 
                    className="support-heartbeat-line" 
                  />
                  
                  <circle cx="200" cy="150" r="6" fill="#c084fc" className="animate-ping" />
                  <circle cx="200" cy="150" r="4" fill="#a78bfa" />
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] animate-pulse" />
                  <span>PLATFORM UPTIME: 99.99%</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SUPPORT TIERS SECTION (REDESIGNED: INTERACTIVE SLA CALCULATOR) */}
      <section id="tiers" className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">support::tiers</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Flexible Support Tiers</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Drag the volume slider to estimate monthly support workload and find your target tier.
            </p>
          </div>

          {/* Traffic Volume Slider Console */}
          <div className="max-w-4xl mx-auto bg-slate-950/70 border border-white/5 p-6 rounded-3xl mb-12 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-grow space-y-2">
              <span className="text-[9px] font-mono text-[#4bb8fa] font-bold uppercase tracking-widest block">WORKLOAD ESTIMATOR</span>
              <h4 className="text-base font-bold">Estimated Monthly API/Request Traffic</h4>
              
              <div className="pt-4 flex items-center gap-4">
                <input 
                  type="range"
                  min="50000"
                  max="3000000"
                  step="50000"
                  value={trafficVolume}
                  onChange={(e) => setTrafficVolume(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#1591dc]"
                />
              </div>
            </div>

            <div className="min-w-[200px] p-4 bg-slate-900 border border-white/5 rounded-2xl flex flex-col justify-center text-center font-mono">
              <span className="text-[9px] text-slate-400">ESTIMATED TRAFFIC:</span>
              <span className="text-2xl font-black text-[#4bb8fa] mt-1">
                {trafficVolume >= 1000000 
                  ? `${(trafficVolume / 1000000).toFixed(1)}M` 
                  : `${Math.floor(trafficVolume / 1000)}K`} / mo
              </span>
              <div className="border-t border-white/5 my-2" />
              <span className="text-[10px] text-emerald-400 font-bold uppercase">SUGGESTED TIER: {activeTierId.toUpperCase()}</span>
            </div>
          </div>

          {/* Support cards grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {supportTiers.map((tier) => {
              const isActive = activeTierId === tier.id;
              return (
                <div 
                  key={tier.name}
                  onClick={() => {
                    if (!isActive) {
                      if (tier.id === "starter") setTrafficVolume(100000);
                      else if (tier.id === "growth") setTrafficVolume(500000);
                      else if (tier.id === "enterprise") setTrafficVolume(2000000);
                    }
                  }}
                  className={`p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between relative cursor-pointer ${
                    isActive 
                      ? "bg-white border-[#1591dc] shadow-[0_15px_40px_rgba(21,145,220,0.2)] scale-102 z-10 min-h-[440px]" 
                      : "bg-slate-50/90 border-slate-200 shadow-sm opacity-60 min-h-[90px] hover:opacity-85"
                  }`}
                >
                  {tier.isPopular && isActive && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-[#1591dc] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                      Most Popular
                    </span>
                  )}
                  
                  <div className="space-y-4 text-left w-full">
                    <div className="flex justify-between items-center w-full">
                      <h4 className="text-xl font-bold text-slate-900">{tier.name} Tier</h4>
                      {!isActive && (
                        <span className="text-[9px] font-bold text-slate-400 bg-slate-100 border border-slate-200/50 px-2 py-0.5 rounded uppercase font-mono">Inactive</span>
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 overflow-hidden w-full"
                        >
                          <div className="text-xs text-[#1591dc] font-mono font-bold uppercase tracking-wider">{tier.rto}</div>
                          <span className="text-[10px] font-semibold text-slate-400 font-mono block">{tier.limitText}</span>
                          <p className="text-xs text-slate-600 leading-relaxed">{tier.desc}</p>
                          
                          <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                            {tier.bullets.map((b) => (
                              <li key={b} className="flex items-start text-xs text-slate-700">
                                <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="pt-6 border-t border-slate-100 mt-6">
                            <Link href="/contact" className="w-full">
                              <button className="w-full py-3.5 rounded-full font-bold text-xs bg-[#1591dc] hover:bg-blue-600 text-white shadow-lg uppercase tracking-wider font-mono cursor-pointer">
                                Activate Support
                              </button>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHAT'S INCLUDED */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">support::features</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">What is Included</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatsIncluded.map((feat) => {
              const Icon = feat.icon;
              return (
                <motion.div 
                  key={feat.title}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-purple-500/30 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-[#4bb8fa]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SLA COMPARISON MATRIX (REDESIGNED: INTERACTIVE ESCALATION PATHWAY) */}
      <section className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#cddbf7] py-20 border-b border-white/5 overflow-hidden text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#4BB8FA] uppercase font-mono">sla::incident_escalation</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">SLA Comparison & Escalation Flow</h3>
            <p className="text-xs text-slate-200 max-w-md mx-auto leading-relaxed">
              Click the tabs to follow simulated support dispatch workflows per incident priority category.
            </p>
          </div>

          {/* Severity selector tabs */}
          <div className="flex justify-center gap-3 mb-8">
            {["P1", "P2", "P3"].map((sev) => (
              <button
                key={sev}
                onClick={() => setIncidentSeverity(sev)}
                className={`px-6 py-2.5 rounded-xl text-xs font-mono font-bold tracking-widest transition-all ${
                  incidentSeverity === sev
                    ? "bg-slate-950 border border-purple-500 text-[#4BB8FA] shadow-md"
                    : "bg-slate-900/40 border border-white/5 text-slate-400 hover:text-white"
                }`}
              >
                {sev === "P1" ? "P1 - CRITICAL OUTAGE" : sev === "P2" ? "P2 - MAJOR SLOWDOWN" : "P3 - MINOR ISSUE"}
              </button>
            ))}
          </div>

          {/* Workflow Stepper Simulation */}
          <div className="p-6 rounded-3xl bg-[#090b16]/95 border border-white/5 relative overflow-hidden mb-12 shadow-2xl">
            <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-[#4BB8FA] font-bold uppercase tracking-wider">
              escalation_pipeline::live
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={incidentSeverity}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="w-full flex flex-col justify-between py-6"
              >
                <div className="grid md:grid-cols-4 gap-6 relative">
                  {incidentSeverity === "P1" && (
                    <>
                      <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-center">
                        <div className="text-[#a78bfa] font-bold font-mono text-[10px] mb-1">STEP 01</div>
                        <h5 className="font-extrabold text-sm text-white">System Alert</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">Outage detected via uptime probes.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-center">
                        <div className="text-[#a78bfa] font-bold font-mono text-[10px] mb-1">STEP 02</div>
                        <h5 className="font-extrabold text-sm text-white">Automated Pager</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">On-call engineer alert dispatched within 15m SLA.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-center">
                        <div className="text-[#a78bfa] font-bold font-mono text-[10px] mb-1">STEP 03</div>
                        <h5 className="font-extrabold text-sm text-white">Tech Lead Escalation</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">Escalated to Tech Lead within 30m.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-center">
                        <div className="text-emerald-400 font-bold font-mono text-[10px] mb-1">STEP 04</div>
                        <h5 className="font-extrabold text-sm text-white">Resolution</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">Hotfix sync deployed and checks run [OK].</p>
                      </div>
                    </>
                  )}

                  {incidentSeverity === "P2" && (
                    <>
                      <div className="p-4 rounded-xl bg-yellow-950/20 border border-yellow-500/20 text-center">
                        <div className="text-[#a78bfa] font-bold font-mono text-[10px] mb-1">STEP 01</div>
                        <h5 className="font-extrabold text-sm text-white">Degradation Alert</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">Latency spikes detected on API Gateway.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-center">
                        <div className="text-[#a78bfa] font-bold font-mono text-[10px] mb-1">STEP 02</div>
                        <h5 className="font-extrabold text-sm text-white">Incident Acknowledged</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">Investigating bottleneck sources within 1 hour SLA.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-center">
                        <div className="text-[#a78bfa] font-bold font-mono text-[10px] mb-1">STEP 03</div>
                        <h5 className="font-extrabold text-sm text-white">Cache Cleared</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">Resource clusters scaled up and logs filtered.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-center">
                        <div className="text-emerald-400 font-bold font-mono text-[10px] mb-1">STEP 04</div>
                        <h5 className="font-extrabold text-sm text-white">Resolved</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">Latency levels reset back to baseline limits.</p>
                      </div>
                    </>
                  )}

                  {incidentSeverity === "P3" && (
                    <>
                      <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-center">
                        <div className="text-[#a78bfa] font-bold font-mono text-[10px] mb-1">STEP 01</div>
                        <h5 className="font-extrabold text-sm text-white">Bug Report</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">Minor visual UI formatting issue reported.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-center">
                        <div className="text-[#a78bfa] font-bold font-mono text-[10px] mb-1">STEP 02</div>
                        <h5 className="font-extrabold text-sm text-white">Triage Logging</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">Ticket allocated to next sprint backlog.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-center">
                        <div className="text-[#a78bfa] font-bold font-mono text-[10px] mb-1">STEP 03</div>
                        <h5 className="font-extrabold text-sm text-white">Dev Verification</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">Changes tested in local QA branch pipelines.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-center">
                        <div className="text-emerald-400 font-bold font-mono text-[10px] mb-1">STEP 04</div>
                        <h5 className="font-extrabold text-sm text-white">Sprint Release</h5>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">Code patch merged to main staging environment.</p>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#090b16]/95 shadow-2xl">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 bg-slate-900/60 font-bold text-[#4BB8FA]">
                  <th className="p-4">Incident Class</th>
                  <th className="p-4">P1 (Critical Outage)</th>
                  <th className="p-4">P2 (Major Slowness)</th>
                  <th className="p-4">P3 (Minor Bug)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr className={incidentSeverity === "P1" ? "bg-white/5 text-white" : ""}>
                  <td className="p-4 font-bold text-white bg-white/5">Enterprise SLA</td>
                  <td className="p-4 text-emerald-400 font-bold">15 Min response</td>
                  <td className="p-4 text-emerald-400">1 Hour response</td>
                  <td className="p-4">4 Hours response</td>
                </tr>
                <tr className={incidentSeverity === "P2" ? "bg-white/5 text-white" : ""}>
                  <td className="p-4 font-bold text-white bg-white/5">Growth SLA</td>
                  <td className="p-4 text-yellow-400">1 Hour response</td>
                  <td className="p-4 text-yellow-400 font-bold">4 Hours response</td>
                  <td className="p-4">12 Hours response</td>
                </tr>
                <tr className={incidentSeverity === "P3" ? "bg-white/5 text-white" : ""}>
                  <td className="p-4 font-bold text-white bg-white/5">Starter SLA</td>
                  <td className="p-4">4 Hours response</td>
                  <td className="p-4">12 Hours response</td>
                  <td className="p-4 text-slate-400 font-bold">24 Hours response</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE MONITOR (REDESIGNED: INTERACTIVE SCOPE DASHBOARD TABS) */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">monitoring::metrics</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">What We Actively Monitor</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Select a monitoring target below to load dashboard metrics.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Scope Tab Buttons */}
            <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
              {Object.entries(monitoringScopes).map(([key, scope]) => {
                const isActive = activeScope === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveScope(key)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 font-bold ${
                      isActive
                        ? "bg-white border-[#2C5EAD] shadow-md shadow-[#2C5EAD]/10 text-slate-900"
                        : "bg-white/60 border-slate-200/80 text-slate-500 hover:border-slate-300 hover:text-slate-800"
                    }`}
                  >
                    <span className="text-[9px] font-mono font-bold tracking-widest uppercase block text-slate-400 mb-1">scope::monitoring</span>
                    <span className="text-sm font-extrabold">{scope.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Dashboard Display */}
            <div className="lg:col-span-7 p-6 rounded-3xl bg-[#060b14] border border-white/5 text-white flex flex-col justify-between relative overflow-hidden min-h-[300px] shadow-2xl">
              <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-[#4BB8FA] font-bold uppercase tracking-wider">
                telemetry_stream::active
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-bold font-mono flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#4BB8FA]" />
                  {monitoringScopes[activeScope].title} Telemetry Parameters
                </h4>

                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {monitoringScopes[activeScope].bullets.map((b) => (
                    <li key={b} className="flex items-center text-xs text-slate-300 font-mono">
                      <Check className="w-3.5 h-3.5 mr-2 text-[#4bb8fa] flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* simulated metric telemetry chart visualizer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex flex-col justify-end h-20">
                <div className="flex items-end justify-between gap-1 w-full max-w-[360px] mx-auto">
                  {[...Array(14)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-4 bg-gradient-to-t from-indigo-500 to-[#4bb8fa] rounded-t"
                      animate={{ 
                        height: activeScope === "infrastructure"
                          ? [20, Math.random() * 50 + 10, 20]
                          : activeScope === "application"
                          ? [40, Math.random() * 30 + 35, 40]
                          : activeScope === "security"
                          ? [10, Math.random() * 15 + 5, 10]
                          : [30, Math.random() * 45 + 15, 30]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1 + Math.random() * 0.7,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
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
          <p className="text-sm font-bold text-indigo-600 mt-2 relative z-10 cursor-pointer hover:underline">
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
                        <div className="w-8 h-8 rounded-full bg-[#1591dc] hover:bg-blue-600 flex items-center justify-center text-white text-base font-black flex-shrink-0 transition-colors shadow-sm">
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
                  src="/assets/support_faq_illustration.webp" 
                  alt="Managed Support FAQ Illustration" 
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="text-2xl font-extrabold text-slate-900 mb-1">Any Question?</h4>
              <p className="text-xs text-slate-500 text-center mb-6">
                Ask us anything about RTO/RPO limits, scaling configurations, and support tier parameters.
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
                    className="w-full sm:w-auto px-10 py-3 bg-[#1591dc] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#1591dc]/20 active:scale-95"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Need Managed SLA Support?
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Choose the right SLA support tier for your infrastructure needs and rest easy knowing your systems are in expert hands.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-[#1591dc] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Get Managed Support
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
