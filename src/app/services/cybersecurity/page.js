"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Shield, 
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Eye, AlertTriangle, ShieldAlert, Key, Activity, Terminal,
  Code, UserCheck, ShieldCheck, RefreshCw
} from "lucide-react";

export default function CybersecurityPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const processLogs = {
    0: [
      "guest@sec-audit:~$ run-scanner --assessment",
      "[INFO] Initializing subnet vulnerability scan...",
      "[INFO] Probing port range 1-65535 on target assets...",
      "[WARN] Open port 3389 (RDP) detected on public IP space.",
      "[INFO] Threat modeling (STRIDE) analysis started.",
      "✔ Security audit complete: 1 warning, 0 criticals."
    ],
    1: [
      "guest@sec-audit:~$ apply-controls --strict",
      "[INFO] Enforcing Zero-Trust access baselines...",
      "[INFO] Provisioning HashiCorp Vault secrets storage.",
      "[INFO] Generating new AES-256 database encryption keys.",
      "[INFO] Applying strict IAM role segregation policies.",
      "✔ Secure credentials vaulting active."
    ],
    2: [
      "guest@sec-audit:~$ run-penetration-testing",
      "[INFO] Initializing SQLi and XSS injection fuzzers...",
      "[INFO] Simulating credential brute-force attacks...",
      "[INFO] Auditing API gateway endpoint permissions.",
      "[WARN] Rate limiting disabled on /api/v1/auth/login.",
      "✔ Pentesting report drafted: remediations verified."
    ],
    3: [
      "guest@sec-audit:~$ start-siem-daemon",
      "[INFO] Connecting audit trail feed to SIEM indexers...",
      "[INFO] Spawning anomaly tracking agents...",
      "[INFO] Initializing Web Application Firewall rules.",
      "[INFO] 24/7 incident response schedule: ACTIVE.",
      "✔ Daemon running. System telemetry reporting: OK."
    ]
  };

  useEffect(() => {
    setTerminalLogs([]);
    let currentIdx = 0;
    const logs = processLogs[activeStep];
    if (!logs) return;
    setTerminalLogs([logs[0]]);

    const interval = setInterval(() => {
      currentIdx++;
      if (currentIdx < logs.length) {
        setTerminalLogs(prev => [...prev, logs[currentIdx]]);
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [activeStep]);

  const sdlcFeatures = [
    "Security requirements analysis",
    "Threat modeling (STRIDE, DREAD)",
    "Secure peer code reviews",
    "SAST/DAST gates in CI/CD pipeline",
    "Dependency vulnerability scanning",
    "Security validation testing",
    "Incident response plan drafting"
  ];

  const pentestFeatures = [
    "Web application security audits",
    "API gateway security assessment",
    "Infrastructure configuration testing",
    "Mobile app binaries security",
    "Social engineering simulations",
    "Comprehensive vulnerability reports",
    "Step-by-step remediation guidance"
  ];

  const complianceStandards = [
    {
      title: "Security Standards",
      desc: "Compliance mapping and preparation audits.",
      badge: "Security Standard Support"
    },
    {
      title: "Data Protection",
      desc: "Privacy assessments, data flow mappings, and privacy regulation readiness.",
      badge: "Data Privacy Compliance"
    },
    {
      title: "Healthcare Security",
      desc: "Secure medical infrastructure designs and patient PHI secure vaulting.",
      badge: "Healthcare Data Handling"
    },
    {
      title: "Security Management",
      desc: "Setting up information security management systems.",
      badge: "Security Frameworks"
    }
  ];

  const bestPractices = [
    {
      title: "Service Management",
      desc: "Securing operations & services end-to-end with proactive risk and compliance controls.",
      icon: ShieldCheck,
      detailType: "wave"
    },
    {
      title: "Access Control",
      desc: "Enforcing least privilege, strong authentication & authorization across all systems.",
      icon: Lock,
      detailType: "user"
    },
    {
      title: "Strong Encryption",
      desc: "Protecting data in transit and at rest with industry-standard encryption methods.",
      icon: RefreshCw,
      detailType: "padlock"
    },
    {
      title: "Active Monitoring",
      desc: "Continuous monitoring, real-time alerts & rapid response for uninterrupted security.",
      icon: Eye,
      detailType: "chart"
    }
  ];

  const threatScenarios = [
    {
      threat: "SQL Injection (SQLi)",
      severity: "CRITICAL",
      badgeColor: "text-red-600 bg-red-50 border-red-200",
      iconColor: "text-blue-500 bg-blue-50/50 border-blue-100",
      icon: Database,
      desc: "Enforcing parameterized DB queries, validating input formats, and sanitizing fields.",
      mitigations: [
        "Parameterized queries",
        "WAF rules",
        "Input validation & sanitization",
        "Least privilege database access"
      ]
    },
    {
      threat: "Cross-Site Scripting (XSS)",
      severity: "HIGH",
      badgeColor: "text-orange-600 bg-orange-50 border-orange-200",
      iconColor: "text-amber-500 bg-amber-50/50 border-amber-100",
      icon: Code,
      desc: "Strict Content Security Policy (CSP) headers, output HTML escaping, and cookies sanitization.",
      mitigations: [
        "CSP enforcement",
        "HttpOnly & Secure cookies",
        "Output encoding",
        "Input validation"
      ]
    },
    {
      threat: "Authentication Bypass",
      severity: "CRITICAL",
      badgeColor: "text-red-600 bg-red-50 border-red-200",
      iconColor: "text-red-500 bg-red-50/50 border-red-100",
      icon: UserCheck,
      desc: "Enforcing Multi-Factor Authentication (MFA), secure HTTP-Only session keys, and password salting.",
      mitigations: [
        "MFA enforcement",
        "Strong password policies",
        "Secure session management",
        "Rate limiting"
      ]
    },
    {
      threat: "Data Breach",
      severity: "CRITICAL",
      badgeColor: "text-red-600 bg-red-50 border-red-200",
      iconColor: "text-purple-500 bg-purple-50/50 border-purple-100",
      icon: ShieldAlert,
      desc: "Encrypting database volumes, strict IAM credentials policies, and network segmentations.",
      mitigations: [
        "Data encryption at rest & in transit",
        "Network segmentation",
        "IAM least privilege access",
        "Continuous monitoring"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Assessment",
      bullets: ["Vulnerability scanning", "Threat modeling", "Risk analysis", "Security audit"]
    },
    {
      title: "Implementation",
      bullets: ["Security controls", "Encryption setup", "Access policies", "Monitoring tools"]
    },
    {
      title: "Testing",
      bullets: ["Penetration testing", "Code review", "Compliance validation", "Red team exercise"]
    },
    {
      title: "Monitoring",
      bullets: ["24/7 SIEM alerts", "Incident response", "Patch management", "Security updates"]
    }
  ];

  const successStories = [
    {
      title: "FinTech Security Hardening",
      challenge: "A digital banking platform needed to pass rigorous compliance audits and secure transactional assets from outside penetrations.",
      solution: "We deployed zero-trust system vaults, configured 24/7 SIEM monitoring logs, and ran automated compliance pipelines.",
      results: "Achieved full security compliance alignment within 6 months with zero breach issues.",
      stats: [
        { label: "Compliance Audits", value: "Aligned" },
        { label: "Breach Incident Rate", value: "0 Breach" },
        { label: "Hardening Level", value: "Grade A" }
      ]
    },
    {
      title: "Healthcare Security Compliance",
      challenge: "Telehealth provider required end-to-end encrypted tunnels for secure patient consultations.",
      solution: "We engineered encrypted databases storage, secure WebRTC signaling paths, and implemented audit logging triggers.",
      results: "Secured all telemedicine files, successfully passing third-party healthcare security checks.",
      stats: [
        { label: "Security Audits", value: "100% Passed" },
        { label: "Data Encryption", value: "AES-256" },
        { label: "Critical Vulnerabilities", value: "0 Found" }
      ]
    }
  ];

  const faqs = [
    {
      q: "How long does security certification take?",
      a: "Security certifications typically take 3-6 months to implement controls and pass audit. Advanced certifications require an additional 6-12 months of monitoring to demonstrate sustained compliance. We guide you through the entire process."
    },
    {
      q: "What is penetration testing and how often should it be done?",
      a: "Penetration testing simulates real-world attacks to identify vulnerabilities. We recommend annual comprehensive pentests, with quarterly focused tests on critical systems or after major changes. High-risk systems may require more frequent testing."
    },
    {
      q: "How do you handle security incidents?",
      a: "We follow NIST incident response framework: Preparation, Detection, Analysis, Containment, Eradication, Recovery, and Post-Incident review. Our 24/7 security operations team responds to alerts within 30 minutes for critical incidents."
    },
    {
      q: "Can you help with data protection compliance?",
      a: "Yes. We implement data protection requirements including data mapping, consent management, right to erasure, data portability, breach notification procedures, and privacy impact assessment processes."
    },
    {
      q: "What is the difference between SAST and DAST?",
      a: "SAST (Static Application Security Testing) analyzes source code without executing it, finding vulnerabilities early. DAST (Dynamic Application Security Testing) tests running applications, finding runtime vulnerabilities. We use both for comprehensive coverage."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-red-400 font-mono">
                <Shield className="w-3.5 h-3.5 text-red-500" />
                <span>Cybersecurity & Compliance Division</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Cybersecurity <br />
                <span className="bg-gradient-to-r from-red-500 via-orange-400 to-[#4BB8FA] bg-clip-text text-transparent">
                  & Compliance
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Secure SDLC integration, threat modeling, active penetration audits, and compliance validation support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Start Security Audit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#process" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  Threat Matrix
                </a>
              </div>
            </motion.div>

            {/* Right Side SVG Firewall Gimmick */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-sec" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(239, 68, 68, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-sec)" />
                  
                  {/* Outer shield outline */}
                  <path 
                    d="M 200,60 L 290,100 L 290,190 Q 200,260 110,190 L 110,100 Z" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="3.5" 
                    className="security-shield-glow" 
                  />
                  
                  <g transform="translate(200, 150)">
                    <circle r="22" fill="#090d16" stroke="#f87171" strokeWidth="2.5" />
                    <Lock className="w-5 h-5 text-[#f87171] -translate-x-2.5 -translate-y-2.5" />
                  </g>
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  <span>FIREWALL DEFENSE SHIELD: SECURE</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SDLC VS PENTEST */}
      <section className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-red-500 uppercase font-mono">security::strategy</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Continuous Security & Assessment</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: SDLC */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[9px] font-black tracking-widest text-red-400 uppercase font-mono bg-red-950/40 px-2.5 py-1 rounded border border-red-500/25">Continuous SDLC</span>
                <h4 className="text-xl font-bold text-white mt-4">Secure SDLC</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Integrating security check gates directly into active agile development lifecycle loops.
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {sdlcFeatures.map((feat) => (
                    <li key={feat} className="flex items-center text-xs text-slate-300">
                      <Check className="w-4 h-4 mr-2 text-red-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Pentest */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-red-500/30 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[9px] font-black tracking-widest text-orange-400 uppercase font-mono bg-orange-950/40 px-2.5 py-1 rounded border border-orange-500/25">Penetration testing</span>
                <h4 className="text-xl font-bold text-white mt-4">Penetration Testing</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Simulating multi-vector attacks on applications and configurations to flag weak points.
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {pentestFeatures.map((feat) => (
                    <li key={feat} className="flex items-center text-xs text-slate-300">
                      <Check className="w-4 h-4 mr-2 text-red-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPLIANCE & CERTIFICATIONS */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#cbdcf8] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">compliance::roadmap</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Compliance & Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((std) => (
              <div 
                key={std.title}
                className="p-6 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-red-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white">{std.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{std.desc}</p>
                </div>
                <div className="border-t border-white/5 pt-3 mt-4 text-[9px] text-red-400 font-mono">
                  {std.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECURITY BEST PRACTICES (REDESIGNED: SECURITY ARCHITECTURE PILLARS) */}
      <section className="relative bg-[#cbdcf8] text-slate-950 py-24 border-b border-white/5 overflow-hidden">
        {/* Background Grids & Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)] pointer-events-none" />
        
        {/* Left Shield Background SVG */}
        <div className="absolute left-[3%] lg:left-[4%] top-[12%] opacity-[0.06] pointer-events-none w-56 h-56 text-blue-600 hidden xl:block">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M 50,15 L 85,25 L 85,60 Q 50,90 15,60 L 15,25 Z" />
            <rect x="42" y="45" width="16" height="12" rx="2" strokeWidth="1.5" />
            <path d="M 46,45 V 39 a 4,4 0 0 1 8,0 v 6" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Right Radar Background SVG */}
        <div className="absolute right-[3%] lg:right-[4%] top-[12%] opacity-[0.06] pointer-events-none w-56 h-56 text-blue-600 hidden xl:block">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="50" cy="50" r="10" />
            <circle cx="50" cy="50" r="22" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="34" />
            <circle cx="50" cy="50" r="46" strokeDasharray="6 6" />
            <line x1="50" y1="4" x2="50" y2="96" />
            <line x1="4" y1="50" x2="96" y2="50" />
            <circle cx="50" cy="50" r="1.5" fill="#ef4444" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <div className="flex items-center justify-center gap-4 text-blue-600 mb-2 font-mono text-[9px] font-black tracking-[0.2em]">
              <span className="w-8 h-px bg-blue-600/30"></span>
              <span>OUR FOUNDATION</span>
              <span className="w-8 h-px bg-blue-600/30"></span>
            </div>
            <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 font-sans leading-tight">
              Security Architecture Pillars
            </h3>
            <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
              A robust security framework built on four core pillars to protect, detect, and respond to modern threats.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {bestPractices.map((bp) => {
              const Icon = bp.icon;
              return (
                <div 
                  key={bp.title}
                  className="bg-white border border-slate-200 shadow-md hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[250px] text-center rounded-3xl p-6 relative overflow-hidden group"
                >
                  <div className="space-y-4 flex flex-col items-center">
                    {/* Ring Icon */}
                    <div className="w-14 h-14 rounded-full border border-red-500/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 border border-red-500/10 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="text-sm font-extrabold text-slate-900 font-sans">{bp.title}</h4>
                    
                    {/* Red divider */}
                    <div className="w-6 h-0.5 bg-red-500 mx-auto my-1" />

                    <p className="text-slate-500 text-[11px] leading-relaxed max-w-[200px]">{bp.desc}</p>
                  </div>

                  {/* Custom bottom vector backgrounds */}
                  {bp.detailType === "wave" && (
                    <svg className="absolute bottom-0 left-0 right-0 h-10 w-full text-blue-500/10 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0,10 Q25,5 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                      <path d="M0,15 Q25,10 50,15 T100,15" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
                    </svg>
                  )}

                  {bp.detailType === "user" && (
                    <div className="absolute bottom-2 right-4 w-10 h-10 opacity-[0.06] text-blue-600 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}

                  {bp.detailType === "padlock" && (
                    <div className="absolute bottom-2 right-4 w-9 h-9 opacity-[0.06] text-blue-600 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                  )}

                  {bp.detailType === "chart" && (
                    <div className="absolute bottom-0 left-0 right-0 h-8 w-full opacity-10 text-blue-600 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none" fill="none">
                        <path d="M 0,25 L 20,18 L 40,26 L 60,10 L 80,16 L 100,4" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="100" cy="4" r="2.5" fill="#ef4444" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. COMMON THREAT SCENARIOS (REDESIGNED: THREAT SCENARIOS & MITIGATIONS) */}
      <section id="process" className="relative bg-[#d6e5fb] py-24 border-b border-slate-200/80 text-slate-900 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.01)_0%,transparent_80%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <div className="flex items-center justify-center gap-4 text-blue-600 mb-2 font-mono text-[9px] font-black tracking-[0.2em]">
              <span className="w-8 h-px bg-blue-500/30"></span>
              <span>THREATS::MATRIX</span>
              <span className="w-8 h-px bg-blue-500/30"></span>
            </div>
            <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 font-sans leading-tight">
              Threat Scenarios & Mitigations
            </h3>
            <p className="text-xs text-slate-550 max-w-xl mx-auto leading-relaxed">
              Real-world attack vectors and our layered security mitigations.
            </p>
          </div>

          {/* Vertical Cards Stack */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {threatScenarios.map((sc) => {
              const Icon = sc.icon;
              return (
                <div 
                  key={sc.threat}
                  className="bg-white border border-slate-300 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative grid md:grid-cols-12 gap-6 items-center"
                >
                  {/* Left Column: Threat Details (col-span-5) */}
                  <div className="md:col-span-5 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full border flex items-center justify-center flex-shrink-0 ${sc.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-extrabold text-slate-900 font-sans leading-tight">{sc.threat}</h4>
                        <span className={`text-[7.5px] font-black px-1.5 py-0.5 rounded border tracking-wider ${sc.badgeColor}`}>
                          {sc.severity}
                        </span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{sc.desc}</p>
                    </div>
                  </div>

                  {/* Center Column: Dotted Connector Node (col-span-1) */}
                  <div className="hidden md:flex md:col-span-1 items-center justify-center relative h-full">
                    <div className="w-full h-px border-t border-dashed border-slate-350" />
                    <div className="absolute w-3 h-3 rounded-full border border-blue-500 bg-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Right Column: Mitigations (col-span-6) */}
                  <div className="md:col-span-6 pl-0 md:pl-6 border-l border-slate-100/50 md:border-l-0">
                    <span className="text-[9px] font-black text-blue-600 tracking-widest uppercase block mb-3 font-mono">
                      Mitigations
                    </span>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                      {sc.mitigations.map((mit, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="text-slate-700 text-xs leading-tight">{mit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Metrics/Trust Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-200/60 max-w-5xl mx-auto mt-16 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-extrabold text-slate-900 leading-tight">Proactive Detection</div>
                <div className="text-[9.5px] text-slate-550 leading-normal">AI-powered threat identification</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <Zap className="w-4.5 h-4.5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-extrabold text-slate-900 leading-tight">Rapid Response</div>
                <div className="text-[9.5px] text-slate-550 leading-normal">Automated mitigation & alerts</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <Activity className="w-4.5 h-4.5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-extrabold text-slate-900 leading-tight">Continuous Protection</div>
                <div className="text-[9.5px] text-slate-550 leading-normal">24/7 monitoring & improvement</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                <UserCheck className="w-4.5 h-4.5" />
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-extrabold text-slate-900 leading-tight">Risk Reduction</div>
                <div className="text-[9.5px] text-slate-550 leading-normal">Stronger posture, lower impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECURITY PROCESS */}
      <section className="relative bg-gradient-to-b from-[#d6e5fb] via-[#e6effb] to-[#edf4fc] py-24 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">implementation::waves</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Security Integration Process</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Column: 2x2 Grid of process cards */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {processSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.title}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`p-6 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between cursor-pointer overflow-hidden ${
                      isActive
                        ? "bg-slate-950 border-red-500/80 text-white shadow-xl shadow-red-500/10 scale-[1.02]"
                        : "bg-white border border-slate-300 shadow-md hover:border-slate-400 hover:bg-slate-50/70 text-slate-950"
                    }`}
                  >
                    {/* Laser Scanner top border for active card */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-orange-500" />
                    )}

                    <div className="space-y-4">
                      <h4 className={`text-sm font-black uppercase tracking-wider font-mono flex items-center justify-between ${
                        isActive ? "text-red-400" : "text-slate-900"
                      }`}>
                        <span>0{idx + 1} {step.title}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />}
                      </h4>
                      <ul className="space-y-2.5">
                        {step.bullets.map((b) => (
                          <li key={b} className="flex items-start text-xs leading-normal">
                            <Check className={`w-4 h-4 mr-2.5 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:translate-x-0.5 ${
                              isActive ? "text-red-400" : "text-red-600"
                            }`} />
                            <span className={isActive ? "text-slate-300" : "text-slate-700"}>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Live Telemetry Terminal Console */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="p-6 rounded-3xl bg-[#090b16] border border-white/10 flex flex-col justify-between relative overflow-hidden h-full min-h-[320px] font-mono shadow-2xl">
                {/* Accent glow background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.03),transparent_70%)] pointer-events-none" />
                
                <div className="space-y-4 relative z-10 w-full flex flex-col h-full justify-between">
                  {/* Terminal Header */}
                  <div className="flex justify-between items-center pb-3 border-b border-white/5 text-[9px] text-red-400 font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-red-500" />
                      <span>sec-telemetry::live</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  
                  {/* Console lines display */}
                  <div className="flex-grow flex flex-col justify-start text-[10px] text-slate-350 py-3 space-y-1.5 select-text min-h-[190px]">
                    {terminalLogs.map((log, i) => {
                      let colorClass = "text-slate-350";
                      if (log.startsWith("✔")) {
                        colorClass = "text-emerald-400 font-bold";
                      } else if (log.startsWith("guest@")) {
                        colorClass = "text-teal-400";
                      } else if (log.includes("[WARN]")) {
                        colorClass = "text-amber-400";
                      } else if (log.includes("[INFO]")) {
                        colorClass = "text-slate-400";
                      }
                      return (
                        <div key={i} className={colorClass}>
                          {log}
                        </div>
                      );
                    })}
                  </div>

                  {/* Terminal Footer */}
                  <div className="border-t border-white/5 pt-3 text-[9px] text-slate-500 uppercase tracking-widest flex justify-between">
                    <span>AUDIT STATUS: ONLINE</span>
                    <span>LOGS: 100% OK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SUCCESS STORIES */}
      <section className="relative bg-gradient-to-b from-[#edf4fc] via-[#e6effb] to-[#d6e5fb] py-24 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">case::studies</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Security Hardening Cases</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Interactive Success Story unified card */}
            <div className="lg:col-span-8 p-8 rounded-3xl bg-white border border-slate-350 shadow-xl flex flex-col justify-between h-full hover:shadow-2xl transition-shadow duration-300">
              <div className="space-y-6">
                
                {/* Intro Description text */}
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 leading-relaxed font-mono">
                    💡 Explore our case studies and security hardening audits where we successfully defended client infrastructure, achieved strict compliance, and mitigated multi-vector attack scenarios.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our dedicated security operations team engineers custom firewalls, secures sensitive patient/transaction data at rest and in transit, and continuously conducts penetration tests to identify and eliminate system vulnerabilities. Select a case below to review challenges, solutions, and key hardening results.
                  </p>
                </div>

                {/* Main Selector Mini Cards (With Borders) */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {successStories.map((story, idx) => {
                    const isActive = activeStoryIdx === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStoryIdx(idx)}
                        className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                          isActive 
                            ? "bg-slate-950 border-2 border-red-500 text-white shadow-lg shadow-red-500/10" 
                            : "bg-white border border-slate-300 text-slate-500 hover:border-slate-400 hover:bg-slate-50"
                        }`}
                      >
                        <h4 className={`text-sm font-extrabold ${isActive ? "text-white" : "text-slate-900"}`}>{story.title}</h4>
                        <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{story.challenge.slice(0, 85)}...</p>
                      </button>
                    );
                  })}
                </div>

                {/* Display all sections: Challenge, Solution, Result as mini cards with borders */}
                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  {/* Challenge card */}
                  <div className="p-4 rounded-xl border border-red-200 bg-red-50/10 hover:border-red-300 transition-all duration-300 space-y-2 flex flex-col shadow-sm">
                    <span className="text-[8px] font-bold text-red-500 uppercase tracking-widest font-mono flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                      Challenge
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed flex-grow">{successStories[activeStoryIdx].challenge}</p>
                  </div>

                  {/* Solution card */}
                  <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/10 hover:border-blue-300 transition-all duration-300 space-y-2 flex flex-col shadow-sm">
                    <span className="text-[8px] font-bold text-blue-500 uppercase tracking-widest font-mono flex items-center gap-1.5">
                      <Settings className="w-3.5 h-3.5 text-blue-500" />
                      Solution
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed flex-grow">{successStories[activeStoryIdx].solution}</p>
                  </div>

                  {/* Result card */}
                  <div className="p-4 rounded-xl border border-emerald-250 bg-emerald-50/10 hover:border-emerald-350 transition-all duration-300 space-y-2 flex flex-col shadow-sm">
                    <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-widest font-mono flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Results
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed flex-grow">{successStories[activeStoryIdx].results}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Hardening Metrics Panel */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-[#090b16] text-white border border-white/5 flex flex-col justify-between text-center min-h-[250px] lg:min-h-0">
              <div className="space-y-4 w-full my-auto">
                <span className="text-[9px] font-bold text-red-400 uppercase tracking-wider block font-mono">Hardening Outcome</span>
                
                <div className="space-y-6">
                  {successStories[activeStoryIdx].stats.map((st, i) => (
                    <div key={i} className={i > 0 ? "border-t border-white/5 pt-4" : ""}>
                      <div className="text-3xl font-black text-white font-mono">{st.value}</div>
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono mt-1 block">{st.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="relative bg-gradient-to-b from-[#d6e5fb] via-[#e6effb] to-[#edf4fc] py-20 overflow-hidden text-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">common::inquiries</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border border-slate-200/85 rounded-2xl overflow-hidden bg-white/70 hover:bg-white transition-colors shadow-sm">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#2C5EAD]" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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

      {/* 9. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#edf4fc] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Secure Your Systems & Achieve Compliance
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Protect your cloud infrastructure, run full penetration assessments, and secure system standards with our dedicated support team.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Consult Security Team
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
