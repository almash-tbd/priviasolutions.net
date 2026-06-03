"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Lock, Eye, AlertCircle, Cpu, Shield, HelpCircle, Activity, Server, Database, ChevronRight, Check } from "lucide-react";

export default function SecurityPage() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [simActive, setSimActive] = useState(false);

  // For cursor spotlight
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // For 3D Shield tilt
  const handleShieldMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 10;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;
    setTilt({ x, y });
  };

  const handleShieldMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const pillars = [
    {
      title: "Infrastructure Security",
      desc: "Multi-layered security across cloud infrastructure with firewalls, WAF, IDS/IPS, and DDoS protection.",
      icon: Server,
      details: ["WAF Gateway", "IDS Perimeter", "IPS Prevention", "DDoS Protection"],
      stat: "99.99% Coverage"
    },
    {
      title: "Data Protection",
      desc: "Encryption in transit and at rest, secure key management, and regular vulnerability scans.",
      icon: Database,
      details: ["AES-256 Storage", "TLS 1.3 Transit", "KMS Key Rotation", "Daily Vulnerability Scans"],
      stat: "Zero Leaks"
    },
    {
      title: "Identity & Access",
      desc: "Role-based access control, SSO, MFA, and least-privilege access principles.",
      icon: Lock,
      details: ["Strict SSO Integrations", "Mandatory MFA", "Least Privilege IAM", "Automated Session Expiry"],
      stat: "Strict Audit Logs"
    },
    {
      title: "Application Security",
      desc: "Secure SDLC practices, code scanning, and regular penetration testing.",
      icon: Cpu,
      details: ["SAST/DAST Scans", "Dependency Audits", "Penetration Testing", "API Boundary Verification"],
      stat: "Zero Vulnerabilities"
    },
    {
      title: "Monitoring & Response",
      desc: "24/7 monitoring, real-time alerts, and incident response by our security team.",
      icon: Activity,
      details: ["SIEM Integration", "Real-Time Alerts", "24/7 Security Operations", "Incident Playbooks"],
      stat: "15 Min Response SLA"
    }
  ];

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
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left: Titles & Tagline */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 shadow-sm inline-block uppercase font-mono">
              SECURITY AT PRIVIA
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-outfit tracking-tight leading-[1.08]">
              Security Built In. <br />
              Trust Earned.
            </h1>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              We build and operate with a security-first mindset to protect your data, applications, and infrastructure at every layer.
            </p>

            {/* Horizontal Mini-Values */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200/80">
              <div>
                <h4 className="font-extrabold text-xs text-slate-900 tracking-tight flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Proactive Protection
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal font-medium mt-1">Continuous threat monitoring and risk mitigation.</p>
              </div>
              <div>
                <h4 className="font-extrabold text-xs text-slate-900 tracking-tight flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Secure by Design
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal font-medium mt-1">Security is embedded in our architecture and workflows.</p>
              </div>
              <div>
                <h4 className="font-extrabold text-xs text-slate-900 tracking-tight flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Always Improving
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal font-medium mt-1">We evolve with emerging threats and industry best practices.</p>
              </div>
            </div>
          </div>

          {/* Right: Interactive 3D Shield Hero with Pulsing Orbit Nodes */}
          <div className="lg:col-span-5 flex justify-center items-center h-[340px] relative select-none">
            {/* Interactive container mapping tilt */}
            <div 
              onMouseMove={handleShieldMouseMove}
              onMouseLeave={handleShieldMouseLeave}
              className="w-full h-full max-w-[340px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
            >
              {/* Pulsing Nodes orbiting in background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg viewBox="0 0 300 300" className="w-full h-full text-blue-200" fill="none">
                  {/* Orbit circles */}
                  <circle cx="150" cy="150" r="110" stroke="rgba(37, 99, 235, 0.08)" strokeWidth="1.2" />
                  <circle cx="150" cy="150" r="75" stroke="rgba(37, 99, 235, 0.05)" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Flow lines with dash offsets */}
                  <path 
                    d="M 150 40 A 110 110 0 1 1 149.9 40" 
                    stroke="rgba(37, 99, 235, 0.25)" 
                    strokeWidth="1.5" 
                    strokeDasharray="10 200" 
                    strokeDashoffset="120"
                    className="animate-[dash_12s_linear_infinite]"
                  />
                  <path 
                    d="M 150 75 A 75 75 0 1 0 150.1 75" 
                    stroke="rgba(37, 99, 235, 0.2)" 
                    strokeWidth="1.2" 
                    strokeDasharray="8 150" 
                    strokeDashoffset="20"
                    className="animate-[dash_8s_linear_infinite]"
                  />
                </svg>
              </div>

              {/* Security nodes coordinates */}
              {/* 1. Identity (top-left) */}
              <div className="absolute left-[12%] top-[18%] flex flex-col items-center pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping absolute" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 border border-white" />
                <span className="text-[8px] font-black text-slate-550 uppercase tracking-widest font-mono mt-1">Identity</span>
              </div>
              {/* 2. Network (top-right) */}
              <div className="absolute right-[12%] top-[18%] flex flex-col items-center pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping absolute" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 border border-white" />
                <span className="text-[8px] font-black text-slate-550 uppercase tracking-widest font-mono mt-1">Network</span>
              </div>
              {/* 3. Monitoring (right-center) */}
              <div className="absolute right-[4%] top-[50%] -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping absolute" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 border border-white" />
                <span className="text-[8px] font-black text-slate-550 uppercase tracking-widest font-mono mt-1">Monitoring</span>
              </div>
              {/* 4. Encryption (bottom-right) */}
              <div className="absolute right-[18%] bottom-[12%] flex flex-col items-center pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping absolute" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 border border-white" />
                <span className="text-[8px] font-black text-slate-550 uppercase tracking-widest font-mono mt-1">Encryption</span>
              </div>
              {/* 5. Compliance (bottom-left) */}
              <div className="absolute left-[18%] bottom-[12%] flex flex-col items-center pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping absolute" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 border border-white" />
                <span className="text-[8px] font-black text-slate-550 uppercase tracking-widest font-mono mt-1">Compliance</span>
              </div>

              {/* 3D Parallax Shield Panel */}
              <motion.div 
                style={{
                  transformStyle: "preserve-3d",
                  rotateX: -tilt.y,
                  rotateY: tilt.x,
                }}
                className="w-48 h-48 rounded-full bg-white/40 border border-slate-200/60 shadow-xl flex items-center justify-center relative transition-all duration-150 backdrop-blur-xs"
              >
                <div className="absolute inset-2.5 rounded-full bg-blue-50/50 border border-blue-100 flex items-center justify-center shadow-inner" style={{ transform: "translateZ(10px)" }}>
                  {/* Central Shield Icon */}
                  <div className="w-20 h-20 text-blue-600 flex items-center justify-center" style={{ transform: "translateZ(25px)" }}>
                    <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600 drop-shadow-md" fill="none">
                      <path d="M50 15 L80 25 V55 C80 75 50 85 50 85 C50 85 20 75 20 55 V25 L50 15 Z" fill="url(#shieldGlow)" stroke="rgb(37,99,235)" strokeWidth="3" />
                      {/* Logo Lambda inside */}
                      <path d="M50 38 L57 52 L64 38 M52 48 H62" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "translate(-5px, 5px) scale(0.9)" }} />
                    </svg>
                  </div>
                </div>

                {/* Definitions */}
                <svg className="hidden">
                  <defs>
                    <linearGradient id="shieldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

            </div>
          </div>
        </motion.header>

        {/* ================= SECURITY PILLARS SECTION ================= */}
        <section className="space-y-12">
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-xs font-black tracking-widest text-blue-600 uppercase font-mono pl-1">
              OUR SECURITY PILLARS
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">Hover over each card to inspect detailed coverage specifications.</p>
          </div>

          {/* Pillars Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <motion.div
                  key={pil.title}
                  initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm relative group overflow-hidden cursor-default min-h-[220px]"
                >
                  {/* Slid-up coverage info wrapper */}
                  <div className="space-y-4 transition-transform duration-300 transform translate-y-0 group-hover:-translate-y-14">
                    
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-black text-slate-900 tracking-tight leading-snug">{pil.title}</h3>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{pil.desc}</p>
                    </div>

                    {/* Hidden Details Block sliding up */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                      <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest block font-mono">{pil.stat}</span>
                      <ul className="space-y-1.5">
                        {pil.details.map((det) => (
                          <li key={det} className="text-[10px] text-slate-650 font-bold flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-blue-600 shrink-0" />
                            {det}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ================= ATTACK SIMULATION SECTION ================= */}
        <motion.section 
          initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-md text-center max-w-5xl mx-auto space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-blue-50/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-xs font-black tracking-widest text-blue-600 uppercase font-mono">FLOW INTEGRATION</h3>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-outfit">Active Firewall & Attack Simulation</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              Click the button below to simulate an incoming cyber threat and trace how Privia layers mitigate it.
            </p>
          </div>

          {/* Interactive Simulation Pipeline */}
          <div className="relative py-8 z-10">
            
            {/* Connection Flow Line */}
            <div className="absolute left-[8%] right-[8%] top-1/2 -translate-y-1/2 h-[3px] bg-slate-100 hidden sm:block">
              {/* Animated glowing Threat packet */}
              {simActive && (
                <motion.div 
                  initial={{ left: "0%", backgroundColor: "#ef4444", boxShadow: "0 0 10px #ef4444" }}
                  animate={[
                    { left: "28%" }, // Hits firewall
                    { left: "55%" }, // Hits WAF
                    { left: "82%" }, // Hits SIEM
                    { left: "91%", backgroundColor: "#10b981", boxShadow: "0 0 10px #10b981" } // Blocked/Safe
                  ]}
                  transition={{ duration: 3.5, times: [0, 0.3, 0.6, 0.9, 1], ease: "easeInOut" }}
                  onAnimationComplete={() => setSimActive(false)}
                  className="absolute w-3.5 h-3.5 rounded-full -translate-y-[5px]"
                />
              )}
            </div>

            {/* Steps Row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 relative">
              {/* Step 1: Threat */}
              <div className="flex flex-col items-center space-y-3 bg-white p-3 rounded-xl border border-slate-100 sm:border-transparent">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border font-bold shadow-sm transition-all ${simActive ? "border-red-100 bg-red-50 text-red-600 scale-102" : "border-slate-100 bg-slate-50 text-slate-400"}`}>
                  ☠️
                </div>
                <div className="text-center">
                  <h5 className="font-extrabold text-xs text-slate-900 leading-tight">Threat Ingestion</h5>
                  <span className="text-[9px] text-slate-450 font-bold uppercase tracking-wider font-mono">Attempted</span>
                </div>
              </div>

              {/* Step 2: Firewall */}
              <div className="flex flex-col items-center space-y-3 bg-white p-3 rounded-xl border border-slate-100 sm:border-transparent">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold shadow-sm">
                  🛡️
                </div>
                <div className="text-center">
                  <h5 className="font-extrabold text-xs text-slate-900 leading-tight">Firewall Layer</h5>
                  <span className="text-[9px] text-slate-450 font-bold uppercase tracking-wider font-mono">Boundary Filter</span>
                </div>
              </div>

              {/* Step 3: WAF */}
              <div className="flex flex-col items-center space-y-3 bg-white p-3 rounded-xl border border-slate-100 sm:border-transparent">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold shadow-sm">
                  🌐
                </div>
                <div className="text-center">
                  <h5 className="font-extrabold text-xs text-slate-900 leading-tight">Web WAF Gateway</h5>
                  <span className="text-[9px] text-slate-450 font-bold uppercase tracking-wider font-mono">Payload Audit</span>
                </div>
              </div>

              {/* Step 4: SIEM */}
              <div className="flex flex-col items-center space-y-3 bg-white p-3 rounded-xl border border-slate-100 sm:border-transparent">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold shadow-sm">
                  📊
                </div>
                <div className="text-center">
                  <h5 className="font-extrabold text-xs text-slate-900 leading-tight">SIEM Analytics</h5>
                  <span className="text-[9px] text-slate-450 font-bold uppercase tracking-wider font-mono">Anomaly Check</span>
                </div>
              </div>

              {/* Step 5: Blocked */}
              <div className="col-span-2 sm:col-span-1 flex flex-col items-center space-y-3 bg-white p-3 rounded-xl border border-slate-100 sm:border-transparent">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border font-bold shadow-sm transition-all ${simActive ? "border-emerald-100 bg-emerald-50 text-emerald-600 scale-102 animate-pulse" : "border-slate-100 bg-slate-50 text-slate-400"}`}>
                  <Check className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <h5 className="font-extrabold text-xs text-slate-900 leading-tight">Threat Mitigation</h5>
                  <span className="text-[9px] text-slate-450 font-bold uppercase tracking-wider font-mono">Secure Blocked</span>
                </div>
              </div>

            </div>

          </div>

          <div className="pt-4 relative z-10 flex justify-center">
            <button 
              disabled={simActive}
              onClick={() => setSimActive(true)}
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-extrabold text-xs text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:scale-100 transition-all shadow-md shadow-blue-600/10 hover:scale-102 active:scale-98 uppercase tracking-wider"
            >
              {simActive ? "Running Simulation..." : "Simulate Threat Attempt"}
            </button>
          </div>

        </motion.section>

        {/* Bottom trust banner card */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-700 to-blue-800 text-white text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Subtle grid texture in banner */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            <div className="w-16 h-16 shrink-0 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Security is not a feature. It's our foundation.
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-xl font-medium leading-relaxed">
                We follow industry-leading practices and continuously invest in security protocols, audits, and compliance tests to protect you.
              </p>
            </div>
          </div>
          
          <a 
            href="/security"
            className="px-6 py-3.5 rounded-xl text-xs font-extrabold text-slate-900 bg-white hover:bg-slate-100 transition-all flex items-center shrink-0 gap-2 shadow-md relative z-10"
          >
            View Security Practices
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </div>
  );
}
