"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Activity,
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Shield, ShieldAlert, Play, CheckSquare, Search, Gauge, Terminal
} from "lucide-react";

const TechLogo = ({ name }) => {
  const logos = {
    "Cypress": (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="40" fill="#17202C" />
        <path d="M128 40c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88c0-15.6-4.1-30.2-11.2-42.9l-22.4 22.4c4.3 6.4 6.6 13.9 6.6 20.5 0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64c12.4 0 24.1 3.5 34.1 9.7L194 51.2C175.1 44.1 152.4 40 128 40z" fill="#00BF88" />
      </svg>
    ),
    "Selenium": (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="40" fill="#000000" />
        <rect x="30" y="30" width="196" height="196" rx="20" fill="#00B400" />
        <text x="128" y="160" fill="white" fontSize="90" fontWeight="black" textAnchor="middle" fontFamily="sans-serif">Se</text>
      </svg>
    ),
    "Playwright": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" fill="#2EAD5E" stroke="#10b981" />
        <path d="M8.5 12h7M12 8.5v7" stroke="white" strokeLinecap="round" />
        <path d="M12 5c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" fill="#000" fillOpacity="0.1" />
      </svg>
    ),
    "JMeter": (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <rect width="256" height="256" rx="40" fill="#D22D2D" />
        <path d="M70 180c10-25 35-40 60-40s50 15 60 40H70z" fill="white" />
        <circle cx="128" cy="100" r="28" fill="white" />
        <path d="M128 35l15 30h-30l15-30z" fill="white" />
      </svg>
    ),
    "Gatling": (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <rect width="256" height="256" rx="40" fill="#FF5A09" />
        <circle cx="128" cy="128" r="70" stroke="white" strokeWidth="16" fill="none" />
        <circle cx="128" cy="128" r="30" fill="white" />
      </svg>
    ),
    "TestRail": (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="40" fill="#FFFFFF" stroke="#DCDCDC" strokeWidth="2" />
        <circle cx="128" cy="128" r="80" stroke="#3782E2" strokeWidth="16" />
        <circle cx="128" cy="128" r="40" stroke="#E2574C" strokeWidth="12" />
        <circle cx="128" cy="128" r="12" fill="#50B432" />
      </svg>
    ),
    "Allure": (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="40" fill="#F4BA07" />
        <path d="M128 60l50 110H78l50-110z" fill="white" />
        <circle cx="128" cy="140" r="14" fill="#F4BA07" />
      </svg>
    ),
    "SonarQube": (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <rect width="256" height="256" rx="40" fill="#000000" />
        <path d="M60 80c40-30 90-30 130 0l-15 15c-30-20-70-20-100 0L60 80zm15 35c30-20 70-20 100 0l-15 15c-20-10-50-10-70 0l-15-15z" fill="#4E9BCD" />
        <circle cx="128" cy="160" r="24" fill="#4E9BCD" />
      </svg>
    )
  };
  return logos[name] || <Cpu className="w-8 h-8 text-slate-400" />;
};

export default function QaPerformancePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [faqPage, setFaqPage] = useState(0);
  const [faqInput, setFaqInput] = useState("");
  const [faqSent, setFaqSent] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // State for Test Pyramid Simulator
  const [activePyramidTier, setActivePyramidTier] = useState("unit");
  const [terminalLogs, setTerminalLogs] = useState([]);

  // State for Stress Load Tester Dashboard
  const [virtualUsers, setVirtualUsers] = useState(100);

  const pyramidApproach = {
    unit: {
      title: "Unit Tests",
      desc: "Fast, isolated tests verifying individual code functions and component structures.",
      bullets: [
        "80%+ code coverage target baseline",
        "TDD/BDD writing practices",
        "Mocking & stubbing dependencies",
        "Execution completes in milliseconds"
      ]
    },
    integration: {
      title: "Integration Tests",
      desc: "Verifying data flows and contract interactions between components and services.",
      bullets: [
        "API contract validation tests",
        "Active database state integration",
        "External service mocking layers",
        "Execution completes in seconds"
      ]
    },
    e2e: {
      title: "E2E Tests",
      desc: "Complete end-to-end user journey validations in production-like staging setups.",
      bullets: [
        "Critical business paths coverage",
        "Cross-browser testing (Playwright)",
        "Visual regression comparisons",
        "Execution completes in minutes"
      ]
    }
  };

  const consoleScripts = {
    unit: [
      "guest@qa-audit-node:~$ npm run test:unit",
      "",
      "🧪 Running Unit Tests via Jest...",
      " PASS  src/components/Button.test.js (0.8s)",
      " PASS  src/utils/auth.test.js (0.4s)",
      " PASS  src/hooks/useMetrics.test.js (1.1s)",
      " PASS  src/reducers/store.test.js (0.6s)",
      "",
      "Test Suites: 4 passed, 4 total",
      "Tests:       24 passed, 24 total",
      "Snapshots:   0 total",
      "Time:        3.24s",
      "--------------------------------------",
      "File          | % Stmts | % Branch | % Funcs | % Lines |",
      "All files     |   91.24 |    82.14 |   90.00 |   91.24 |",
      " Button.js    |     100 |      100 |     100 |     100 |",
      " auth.js      |     100 |       80 |     100 |     100 |",
      "--------------------------------------",
      "✔ Unit testing baseline PASSED [OK]"
    ],
    integration: [
      "guest@qa-audit-node:~$ playwright test tests/integration/",
      "",
      "🔗 Running API Integration & Contract Tests...",
      "  ✔ POST /api/v1/auth/token - 200 OK (54ms)",
      "  ✔ GET /api/v1/user/config - 200 OK (22ms)",
      "  ✔ POST /api/v1/billing/charge - 201 Created (142ms)",
      "  ✔ GET /api/v1/reports/summary - 200 OK (98ms)",
      "",
      "Checking data schemas against OpenAPI contract specifications...",
      "  ✔ Authentication Token payload conforms to schema [OK]",
      "  ✔ Billing receipt schema matching validated database state [OK]",
      "  ✔ System dependencies ping ... [CONNECTED]",
      "",
      "Total requests verified: 4",
      "✔ Integration testing contract matching PASSED [SUCCESS]"
    ],
    e2e: [
      "guest@qa-audit-node:~$ playwright test tests/e2e/",
      "",
      "🎭 Running Playwright E2E browser tests...",
      "  [chromium] › checkout.spec.js › Complete Checkout Flow",
      "    - Navigating to localhost:3000/product/99",
      "    - Add item to cart and verify count badge",
      "    - Enter mock credit card & shipping details",
      "    - Submit transaction form and verify response receipt",
      "    ✔ Receipt matching page content loaded [OK]",
      "",
      "  [webkit] › registration.spec.js › User Signup validation",
      "    ✔ Signup form validation error paths validated [OK]",
      "",
      "  3 tests passed (7.4s)",
      "✔ Visual regression checking: 100% MATCH [OK]"
    ]
  };

  useEffect(() => {
    setTerminalLogs([]);
    let currentIdx = 0;
    const script = consoleScripts[activePyramidTier];
    setTerminalLogs([script[0]]);

    const interval = setInterval(() => {
      currentIdx++;
      if (currentIdx < script.length) {
        setTerminalLogs(prev => [...prev, script[currentIdx]]);
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [activePyramidTier]);

  const loadTesting = [
    "Baseline performance metrics evaluation",
    "Stress testing systems to absolute breaking points",
    "Spike testing mimicking massive traffic surges",
    "Endurance testing tracking memory leak states"
  ];

  const qualityGates = [
    "Strict code coverage gate thresholds",
    "Automated security vulnerability scanning",
    "Performance regression differential checks",
    "WCAG 2.1 AA accessibility compliance"
  ];

  const strategies = [
    {
      title: "Shift-Left Testing",
      desc: "We run testing cycles early in the developer workflow to catch bugs before compile merges."
    },
    {
      title: "Test Automation Pyramid",
      desc: "We optimize execution speeds: 70% unit tests, 20% integration tests, and 10% E2E UI tests."
    },
    {
      title: "Continuous Testing",
      desc: "Integrating automated testing validation gates directly into your active Git CI/CD pipelines."
    },
    {
      title: "Risk-Based Testing",
      desc: "We prioritize critical, high-impact business payment paths and user onboarding gateways."
    }
  ];

  const techStack = [
    { name: "Cypress", category: "E2E Automation" },
    { name: "Selenium", category: "Legacy E2E" },
    { name: "Playwright", category: "Modern E2E Testing" },
    { name: "JMeter", category: "Performance & Load" },
    { name: "Gatling", category: "Load Testing Scala" },
    { name: "TestRail", category: "Test Case Management" },
    { name: "Allure", category: "Reporting Dashboard" },
    { name: "SonarQube", category: "Static Code Security" }
  ];

  const faqs = [
    {
      q: "What is the ideal test coverage percentage?",
      a: "We target 80%+ code coverage for unit tests, but focus on quality over quantity. Critical business logic should have 95%+ coverage. E2E tests should cover all critical user journeys. Remember: 100% coverage doesn't guarantee bug-free code."
    },
    {
      q: "How do you handle flaky tests?",
      a: "We implement retry mechanisms, proper waits, test isolation, and deterministic test data. Flaky tests are quarantined and fixed immediately. Our CI/CD pipelines track test stability metrics and alert when flakiness exceeds 2%."
    },
    {
      q: "What is your typical test execution time?",
      a: "Unit tests: < 5 minutes. Integration tests: 5-15 minutes. E2E tests: 15-30 minutes. We parallelize tests across multiple machines to keep CI/CD pipelines fast. Total pipeline time including builds is typically 10-20 minutes."
    },
    {
      q: "Do you provide performance testing?",
      a: "Yes. We conduct load testing, stress testing, spike testing, and endurance testing. We identify bottlenecks, determine max capacity, and provide optimization recommendations. Reports include response times, throughput, error rates, and resource utilization."
    },
    {
      q: "Can you integrate testing into our existing CI/CD?",
      a: "Absolutely. We integrate with GitHub Actions, GitLab CI, Jenkins, CircleCI, Cloud DevOps platforms, and more. We set up quality gates, parallel execution, test reporting, and failure notifications. Tests run automatically on every PR and deployment."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <CheckSquare className="w-3.5 h-3.5 text-[#10b981]" />
                <span>QA & Performance Audit Division</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                QA Automation <br />
                <span className="bg-gradient-to-r from-[#10b981] via-[#2dd4bf] to-[#4bb8fa] bg-clip-text text-transparent">
                  & Performance Testing
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Comprehensive test automation frameworks, stress load testing, and quality assurance gates ensuring bulletproof releases.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#10b981] to-[#2dd4bf] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Request A Test Audit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#pyramid" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  Our Strategies
                </a>
              </div>
            </motion.div>

            {/* Right Side SVG Gimmick */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-qa" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(16, 185, 129, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-qa)" />
                  
                  {/* Test Pyramid SVG shapes */}
                  {/* E2E Top */}
                  <polygon points="200,60 230,110 170,110" fill="none" stroke="#f43f5e" strokeWidth="2" />
                  <text x="200" y="95" fill="#f43f5e" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">E2E</text>

                  {/* Integration Mid */}
                  <polygon points="160,120 240,120 260,190 140,190" fill="none" stroke="#0ea5e9" strokeWidth="2" />
                  <text x="200" y="160" fill="#0ea5e9" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">INTEGRATION</text>

                  {/* Unit base */}
                  <polygon points="130,200 270,200 290,270 110,270" fill="none" stroke="#10b981" strokeWidth="2" />
                  <text x="200" y="240" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">UNIT TESTS</text>
                  
                  {/* Radar Scanning Line */}
                  <line x1="80" y1="20" x2="320" y2="20" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="2" className="qa-scanner-line" />
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AUTOMATED PYRAMID PIPELINE</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TEST PYRAMID SECTION (REDESIGNED: INTERACTIVE PYRAMID SIMULATOR) */}
      <section id="pyramid" className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#10b981] uppercase font-mono">architecture::pyramid</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">The Test Pyramid Strategy</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              Click the test tiers below to load details and simulate run environments.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto" style={{ perspective: 1200 }}>
            {/* Left Column: Interactive Tiers List */}
            <div className="lg:col-span-6 flex flex-col space-y-4 justify-between">
              <div className="space-y-4">
                {Object.entries(pyramidApproach).map(([key, val], idx) => {
                  const isActive = activePyramidTier === key;
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 40, rotateX: 18, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                        delay: idx * 0.15
                      }}
                      className="w-full origin-top"
                    >
                      <button
                        onClick={() => setActivePyramidTier(key)}
                        className={`text-left p-6 w-full rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                          isActive
                            ? "bg-[#1b203a] border-[#10b981] shadow-lg shadow-[#10b981]/10 text-white"
                            : "bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                        }`}
                      >
                        <div className="space-y-2">
                          <span className={`text-[9px] font-black tracking-widest uppercase font-mono px-2 py-0.5 rounded border ${
                            isActive 
                              ? "text-[#10b981] border-[#10b981]/30 bg-[#10b981]/10" 
                              : "text-slate-400 border-white/10"
                          }`}>
                            {val.title}
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed mt-2">{val.desc}</p>
                          
                          <AnimatePresence>
                            {isActive && (
                              <motion.ul 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-1.5 pt-3 border-t border-white/5 mt-3"
                              >
                                {val.bullets.map((b) => (
                                  <li key={b} className="flex items-center text-xs text-slate-200">
                                    <Check className="w-3.5 h-3.5 mr-2 text-[#10b981] flex-shrink-0" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Simulated Terminal Output Console */}
            <div className="lg:col-span-6 flex flex-col bg-slate-950/70 border border-white/5 p-6 rounded-3xl min-h-[380px] justify-between relative overflow-hidden font-mono text-xs">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#10b981]/5 to-transparent pointer-events-none" />
              
              <div className="space-y-4 relative z-10 w-full flex flex-col h-full justify-between">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#10b981]" />
                    test-runner -- bash
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Stream Output */}
                <div className="flex-grow py-4 overflow-y-auto space-y-1 text-slate-300 max-h-[320px] min-h-[220px] select-text">
                  {terminalLogs.map((log, idx) => {
                    let colorClass = "text-slate-300";
                    if (log.startsWith("PASS") || log.startsWith("✔")) {
                      colorClass = "text-emerald-400 font-bold";
                    } else if (log.startsWith("🧪") || log.startsWith("🔗") || log.startsWith("🎭")) {
                      colorClass = "text-[#4bb8fa] font-black";
                    } else if (log.includes("File ") || log.startsWith("All files")) {
                      colorClass = "text-slate-400";
                    } else if (log.startsWith("guest@")) {
                      colorClass = "text-teal-500 font-bold";
                    } else if (log.includes("SUCCESS") || log.includes("OK")) {
                      colorClass = "text-cyan-400 font-extrabold";
                    }
                    return (
                      <div key={idx} className={`${colorClass} leading-relaxed whitespace-pre`}>
                        {log}
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-white/5 pt-3 text-[10px] text-slate-500 flex justify-between">
                  <span>ACTIVE TARGET: {activePyramidTier.toUpperCase()}_TESTS</span>
                  <span className="text-[#10b981] animate-pulse">LISTENING ON CHANGES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE & QUALITY GATES (REDESIGNED: INTERACTIVE STRESS TEST SIMULATOR) */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#10b981] uppercase font-mono">performance::validation</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Performance Testing & Quality Gates</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Drag the controller below to simulate user loads and see how our telemetry monitors system parameters.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Stress Controller Dial */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-950/70 border border-white/5 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                <span className="text-[9px] font-mono text-[#4bb8fa] font-bold uppercase tracking-widest mb-1.5 block">STRESS GENERATOR</span>
                <h4 className="text-base font-bold text-white mb-2">Simulate Virtual User (VU) Load</h4>
                <p className="text-xs text-slate-300 leading-normal">
                  Scale traffic spikes to verify server resource scaling limits and response latency thresholds.
                </p>

                {/* Range Slider */}
                <div className="space-y-2 pt-6">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>Baseline Load</span>
                    <span className="text-[#10b981] font-bold">{virtualUsers} Users / sec</span>
                    <span>Max Capacity</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="100"
                    value={virtualUsers}
                    onChange={(e) => setVirtualUsers(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
                  />
                </div>
              </div>

              <div className="p-4 mt-6 rounded-xl bg-slate-900/60 border border-white/5 text-[10px] font-mono text-slate-400 space-y-1">
                <div>⚡ GATEWAY SCALING STATE: {virtualUsers > 4000 ? "⚠️ STRESS SPIKE" : virtualUsers > 2000 ? "⚡ ACTIVE AUTOSCALING" : "✔ STABLE"}</div>
                <div>📡 LOAD BALANCERS: {virtualUsers > 3500 ? "4 NODES (MAX)" : virtualUsers > 1500 ? "2 NODES" : "1 NODE"}</div>
              </div>
            </div>

            {/* Right Column: Live Telemetry Gauges */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {/* CPU load */}
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">CPU Core Load</span>
                    <Cpu className="w-4 h-4 text-[#10b981]" />
                  </div>
                  <div className="text-3xl font-black font-mono text-white pt-2">
                    {Math.min(98, Math.floor(12 + (virtualUsers / 5000) * 82))}%
                  </div>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-4">
                  <motion.div 
                    className="h-full bg-[#10b981]" 
                    animate={{ width: `${Math.min(98, 12 + (virtualUsers / 5000) * 82)}%` }} 
                    transition={{ type: "spring", stiffness: 80 }}
                  />
                </div>
              </div>

              {/* Response latency */}
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Response Latency</span>
                    <Gauge className="w-4 h-4 text-[#4bb8fa]" />
                  </div>
                  <div className="text-3xl font-black font-mono text-white pt-2">
                    {Math.floor(15 + (virtualUsers / 5000) * 165)} ms
                  </div>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-4">
                  <motion.div 
                    className="h-full bg-[#4bb8fa]" 
                    animate={{ width: `${Math.min(100, 15 + (virtualUsers / 5000) * 85)}%` }} 
                    transition={{ type: "spring", stiffness: 80 }}
                  />
                </div>
              </div>

              {/* Error rate */}
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">HTTP Errors</span>
                    <ShieldAlert className="w-4 h-4 text-rose-500" />
                  </div>
                  <div className="text-3xl font-black font-mono text-white pt-2">
                    {virtualUsers > 4500 ? "0.04%" : virtualUsers > 3000 ? "0.01%" : "0.00%"}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-4">
                  Status code targets: 200 OK (100%)
                </div>
              </div>

              {/* Quality gate check */}
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Quality Gates</span>
                    <Lock className="w-4 h-4 text-[#10b981]" />
                  </div>
                  <div className={`text-xl font-bold font-mono pt-2 ${virtualUsers > 4800 ? "text-amber-400" : "text-emerald-400"}`}>
                    {virtualUsers > 4800 ? "WARNING (SLA limit)" : "PASS [SECURE]"}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-4">
                  Code checks: 80%+ coverage validated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTING STRATEGIES */}
      <section className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#cddbf7] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-slate-300 uppercase font-mono">testing::methodology</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Our Testing Strategies</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((strat, idx) => (
              <motion.div 
                key={strat.title}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-3xl bg-[#090b16]/95 border border-white/5 flex flex-col justify-between h-full hover:border-[#10b981]/30 transition-colors shadow-lg"
              >
                <div className="space-y-4">
                  <span className="text-lg font-black font-mono text-[#10b981]">0{idx + 1}</span>
                  <h4 className="text-sm font-bold text-white">{strat.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{strat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTING TOOLS BY CATEGORY (REDESIGNED: CONTINUOUS HORIZONTAL MARQUEE) */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">tools::ecosystem</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Testing Tools Matrix We Deploy</h3>
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
                  className="p-5 bg-white border border-slate-200/80 rounded-2xl flex flex-col justify-between text-center shadow-sm w-44 flex-shrink-0 group hover:shadow-lg hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[9px] font-bold text-[#2C5EAD] uppercase tracking-widest block font-mono">{tech.category}</span>
                    <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TechLogo name={tech.name} />
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-slate-800 text-left block mt-2 group-hover:text-[#10b981] transition-colors">{tech.name}</span>
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
          <p className="text-sm font-bold text-teal-600 mt-2 relative z-10 cursor-pointer hover:underline">
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
                        <div className="w-8 h-8 rounded-full bg-[#10b981] hover:bg-[#2dd4bf] flex items-center justify-center text-white text-base font-black flex-shrink-0 transition-colors shadow-sm">
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
                    faqPage === 0 ? "bg-[#10b981] scale-105" : "bg-[#10b981]/70 hover:bg-[#10b981]"
                  }`}
                >
                  1
                </button>
                <button 
                  onClick={() => setFaqPage(1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-sm ${
                    faqPage === 1 ? "bg-[#10b981] scale-105" : "bg-[#10b981]/70 hover:bg-[#10b981]"
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
                  src="/assets/qa_faq_illustration.png" 
                  alt="QA FAQ Illustration" 
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="text-2xl font-extrabold text-slate-900 mb-1">Any Question?</h4>
              <p className="text-xs text-slate-500 text-center mb-6">
                Ask us anything about test automation, performance validation, and CI/CD quality gates.
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
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#10b981] pr-10 shadow-sm"
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
                    className="w-full sm:w-auto px-10 py-3 bg-[#10b981] hover:bg-[#2dd4bf] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#10b981]/20 active:scale-95"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Improve Your QA & Testing Strategy
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Build confidence in your releases with comprehensive automated testing and performance validation workflows. Talk with our testing crew.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#10b981] to-[#2dd4bf] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Consult QA Engineers
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
