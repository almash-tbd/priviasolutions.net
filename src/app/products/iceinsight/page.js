"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, BarChart3, Layers, 
  Settings, Shield, Lock, Terminal, Activity, Eye,
  Cpu, Server, HelpCircle, ChevronRight, Zap, TrendingUp, Sparkles,
  Rocket, Users, Globe
} from "lucide-react";
import { getTechLogo } from "@/components/TechLogos";

export default function IceInsightPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [faqInput, setFaqInput] = useState("");
  const [faqSent, setFaqSent] = useState(false);
  const [activeMetricTab, setActiveMetricTab] = useState("realtime");
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const keyFeatures = [
    {
      title: "Unified Dashboard",
      desc: "Single pane of glass for all your metrics, logs, and traces.",
      icon: Layers,
      iconBg: "from-blue-600 to-cyan-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
    },
    {
      title: "Custom Reports",
      desc: "Build custom reports with a drag-and-drop interface.",
      icon: BarChart3,
      iconBg: "from-cyan-500 to-[#1591dc] shadow-[0_0_15px_rgba(6,182,212,0.4)]"
    },
    {
      title: "Real-time Alerts",
      desc: "Intelligent alerting with anomaly detection.",
      icon: Zap,
      iconBg: "from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(147,51,234,0.4)]"
    },
    {
      title: "Data Governance",
      desc: "RBAC, audit logs, and data lineage tracking.",
      icon: Shield,
      iconBg: "from-teal-600 to-emerald-500 shadow-[0_0_15px_rgba(13,148,136,0.4)]"
    },
    {
      title: "API Access",
      desc: "Full REST API for programmatic access.",
      icon: Terminal,
      iconBg: "from-indigo-600 to-blue-500 shadow-[0_0_15px_rgba(79,70,229,0.4)]"
    },
    {
      title: "Data Sources",
      desc: "Connect 50+ data sources out of the box.",
      icon: Cpu,
      iconBg: "from-blue-500 to-[#4BB8FA] shadow-[0_0_15px_rgba(59,130,246,0.35)]"
    }
  ];

  const dataSources = [
    "PostgreSQL", "MySQL", "MongoDB", "Redis", 
    "ClickHouse", "AWS CloudWatch", "Elasticsearch", 
    "Google Analytics", "Apache Kafka"
  ];

  const useCases = [
    {
      title: "DevOps Monitoring",
      desc: "Monitor application performance, infrastructure metrics, and deployment health in real-time.",
      points: ["Application performance monitoring", "Infrastructure metrics", "Deployment tracking", "Alert management"]
    },
    {
      title: "Product Analytics",
      desc: "Track user behavior, feature adoption, and engagement metrics to drive product decisions.",
      points: ["User behavior tracking", "Feature usage analytics", "Conversion funnels", "Cohort analysis"]
    },
    {
      title: "Business Intelligence",
      desc: "Transform raw data into actionable insights with custom reports and dashboards.",
      points: ["Custom report builder", "KPI dashboards", "Trend analysis", "Executive reporting"]
    },
    {
      title: "Log Analysis",
      desc: "Search, analyze, and visualize logs from all your services in one centralized platform.",
      points: ["Centralized logging", "Full-text search", "Log aggregation", "Pattern detection"]
    }
  ];

  const capabilities = {
    realtime: {
      title: "Real-time Dashboards",
      desc: "Build custom dashboards with drag-and-drop widgets. View database changes and traffic spikes near-instantly with sub-second event latency.",
      icon: Activity,
      points: [
        "Sub-second event streaming latency",
        "Drag-and-drop widget customizer",
        "Collaborative live sharing links"
      ]
    },
    anomaly: {
      title: "Anomaly Detection",
      desc: "AI-powered alerts that warn you when metrics deviate from seasonal baselines, preventing alert fatigue and stopping outages proactively.",
      icon: Zap,
      points: [
        "Lightweight ML-trained threshold bounds",
        "Multi-channel webhook alerting system",
        "Automatic false-positive filtering"
      ]
    },
    custom: {
      title: "Custom Metrics",
      desc: "Define and track any metric that matters to your business. Integrate custom events from your backend systems with minimal SDK footprints.",
      icon: Sparkles,
      points: [
        "Custom application event trackers",
        "Low-overhead native REST/gRPC SDKs",
        "Flexible tags, dimensions, and filters"
      ]
    },
    timeseries: {
      title: "Time Series Analysis",
      desc: "Analyze trends and patterns over time. Hook into ClickHouse or Timescale database tables to query millions of historical logs rapidly.",
      icon: TrendingUp,
      points: [
        "Aggregates millions of rows in milliseconds",
        "Native SQL and ClickHouse hooks",
        "Long-term trend forecasting tools"
      ]
    },
    predictive: {
      title: "Predictive Analytics",
      desc: "Forecast future trends with built-in ML models. Predict infrastructure bottlenecks or traffic loads before they impact end users.",
      icon: Cpu,
      points: [
        "AI workload capacity planning",
        "Traffic peak predictive indicators",
        "Proactive scaling trigger actions"
      ]
    }
  };

  const impactMetrics = [
    { value: "-35%", label: "Faster Issue Resolution (MTTR Reduction)" },
    { value: "4x", label: "Reduced Alert Fatigue & Better Focus" },
    { value: "100%", label: "Improved Data Visibility Across Divisions" },
    { value: "10 hrs", label: "Time Saved On Weekly Reporting Tasks" }
  ];

  const testimonials = [
    {
      quote: "IceInsight gave us complete visibility into our infrastructure. We reduced MTTR significantly in the first month.",
      author: "Bharat Choudhary",
      role: "Director of Engineering",
      initials: "BC",
      highlightedQuote: (
        <span>
          IceInsight gave us <span className="text-[#2C5EAD] font-bold">complete visibility</span> into our infrastructure. We reduced MTTR significantly in the first month.
        </span>
      )
    },
    {
      quote: "The unified dashboard is a game-changer. We finally have all our data in one place with powerful visualization.",
      author: "Divya Nambiar",
      role: "VP of Operations",
      initials: "DN",
      highlightedQuote: (
        <span>
          The unified dashboard is <span className="text-[#2C5EAD] font-bold">a game-changer</span>. We finally have all our data in one place with powerful visualization.
        </span>
      )
    },
    {
      quote: "Building custom reports is incredibly easy. Our business team can now self-serve analytics without bothering engineering.",
      author: "Arjun Kumar",
      role: "Senior Product Manager",
      initials: "AK",
      highlightedQuote: (
        <span>
          Building custom reports is <span className="text-[#2C5EAD] font-bold">incredibly easy</span>. Our business team can now self-serve analytics without bothering engineering.
        </span>
      )
    }
  ];

  const faqs = [
    {
      q: "What data sources does IceInsight support?",
      a: "IceInsight supports 50+ data sources out of the box, including PostgreSQL, ClickHouse, MySQL, MongoDB, Elasticsearch, AWS CloudWatch, Google Analytics, and Apache Kafka. You can also integrate custom sources using our REST API."
    },
    {
      q: "How does real-time anomaly detection work?",
      a: "IceInsight trains lightweight Machine Learning models on your historical time-series data. It establishes dynamic bounds for different hours, days, and seasons, triggering alerts only when metrics exceed these bounds."
    },
    {
      q: "Is there an on-premise installation option?",
      a: "Yes. Our Enterprise tier includes self-hosted deployments on your secure VPC or Kubernetes clusters, ensuring all sensitive metrics remain within your corporate firewall."
    },
    {
      q: "How does it handle high event volumes?",
      a: "IceInsight is built on top of a highly performant Rust core and uses ClickHouse as its analytical storage engine. It is capable of aggregating and querying over 100M+ events daily with sub-10ms query response times."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2C5EAD]/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1c223c] border border-blue-500/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
                <span>Product Suite :: Analytics & Observability</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                IceInsight <br />
                <span className="bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  Observability Hub
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Unified analytics platform for application monitoring, business intelligence, and data visualization. Connect all your data sources and get actionable insights in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#features" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  View Features
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
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#2C5EAD]/20">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-insight" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(21, 145, 220, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-insight)" />
                  
                  {/* Grid system representing charts */}
                  <line x1="40" y1="50" x2="40" y2="240" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                  <line x1="40" y1="240" x2="360" y2="240" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

                  {/* Chart line 1 */}
                  <path 
                    d="M 40,210 C 80,180 120,230 160,160 C 200,90 240,180 280,110 C 320,40 340,90 360,70" 
                    fill="none" stroke="#2c5ead" strokeWidth="2.5" 
                  />
                  
                  {/* Chart line 2 (glowing metrics) */}
                  <path 
                    d="M 40,150 Q 100,100 160,180 T 280,90 T 360,120" 
                    fill="none" stroke="#1591dc" strokeWidth="2" strokeDasharray="3 3"
                  />

                  {/* Scatter points */}
                  <circle cx="160" cy="160" r="4.5" fill="#1591dc" />
                  <circle cx="280" cy="110" r="4.5" fill="#4bb8fa" />
                  <circle cx="360" cy="70" r="5" fill="#22c55e" className="animate-ping" />
                  <circle cx="360" cy="70" r="4" fill="#22c55e" />

                  <text x="50" y="70" fill="#94a3b8" fontSize="8" fontWeight="bold" fontFamily="monospace">LOAD FORECAST: OK</text>
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span>EVENT LATENCY: &lt;10ms</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. KEY FEATURES */}
      <section id="features" className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#cbdcf8] py-24 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-xs font-bold text-blue-400 font-mono tracking-wider">
              <span>PRODUCT::FEATURES</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Observability <span className="underline decoration-[#1591dc] decoration-wavy underline-offset-8 decoration-2">Stack Features</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {keyFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div 
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-8 rounded-3xl bg-[#090d16]/95 border border-slate-800/80 hover:border-blue-400/50 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 flex flex-col justify-between relative group min-h-[220px] overflow-hidden"
                >
                  {/* Subtle inner hover border glow */}
                  <div className="absolute -inset-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

                  <div className="space-y-6">
                    {/* Top row: Icon and Action Arrow */}
                    <div className="flex justify-between items-center w-full">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feat.iconBg} flex items-center justify-center flex-shrink-0 text-white`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="w-8 h-8 rounded-full border border-slate-800/80 group-hover:border-blue-400/60 flex items-center justify-center text-slate-500 group-hover:text-blue-400 group-hover:bg-blue-400/5 transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom: Text Content */}
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{feat.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-2">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DATA SOURCES MARQUEE */}
      <section className="relative bg-gradient-to-b from-[#cbdcf8] via-[#c6d8f6] to-[#d1e1fc] py-20 border-b border-black/5 text-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">supported::sources</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Connect 50+ Data Sources Out-of-the-box</h3>
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
              {[...dataSources, ...dataSources, ...dataSources].map((item, idx) => (
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
            <p className="text-xs text-slate-500 font-mono">Plus custom integrations via our streaming REST API.</p>
          </div>
        </div>
      </section>

      {/* 4. ANALYTICS USE CASES */}
      <section className="relative bg-gradient-to-b from-[#d1e1fc] via-[#d8e5fc] to-[#cddbf7] py-24 border-b border-slate-200/60 overflow-hidden text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">Built for Every Analytics Need</h3>
            <p className="text-xs text-slate-500 mt-2 font-mono">From technical monitoring to business intelligence.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, idx) => (
              <motion.div 
                key={useCase.title}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-white border-2 border-slate-200/80 shadow-[0_12px_30px_rgba(10,12,22,0.04)] hover:shadow-[0_20px_45px_rgba(44,94,173,0.1)] hover:border-[#2C5EAD]/30 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between space-y-6 relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#2C5EAD]/10 border border-[#2C5EAD]/30 text-[#2C5EAD] font-mono text-xs flex items-center justify-center font-bold flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-extrabold text-[#2C5EAD]">{useCase.title}</h4>
                  </div>
                  
                  <p className="text-xs text-slate-550 leading-relaxed">
                    {useCase.desc}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-slate-100">
                  {useCase.points.map((pt, i) => (
                    <li key={i} className="flex items-center text-xs text-slate-600">
                      <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ADVANCED ANALYTICS CAPABILITIES */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#d6e5fb] py-24 border-b border-slate-200 overflow-hidden text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">observability::capabilities</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Powerful Analytics Capabilities</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left selector */}
            <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
              {Object.entries(capabilities).map(([key, val]) => {
                const isActive = activeMetricTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveMetricTab(key)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? "bg-[#05070f] border-blue-500 text-white shadow-lg" 
                        : "bg-white/70 border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <h4 className="text-sm font-bold">{val.title}</h4>
                  </button>
                );
              })}
            </div>

            {/* Right details */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-[#05070f] border border-[#2C5EAD]/30 flex flex-col justify-between relative overflow-hidden min-h-[300px] text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
              
              <div className="space-y-4 relative z-10 w-full flex flex-col h-full justify-between">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800 font-mono text-[9px] text-[#4bb8fa] font-bold uppercase tracking-wider">
                  <span>metrics_engine::details</span>
                  <span className="w-2 h-2 rounded-full bg-[#1591dc] animate-pulse" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMetricTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex-grow flex flex-col justify-center py-4"
                  >
                    <h4 className="text-lg font-bold text-white">{capabilities[activeMetricTab].title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">{capabilities[activeMetricTab].desc}</p>
                    
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-800/80">
                      {capabilities[activeMetricTab].points.map((pt, idx) => (
                        <li key={idx} className="flex items-center text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-500 mr-2 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MEASURABLE IMPACT & TESTIMONIALS */}
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
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 text-[10px] font-bold text-blue-600 font-mono tracking-wider">
              <span>MEASURABLE::OUTCOMES</span>
            </div>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Proven Business Impact</h3>
          </div>

          {/* Impact Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 relative z-10">
            {impactMetrics.map((item, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm text-center space-y-2 hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-[#2c5ead] font-mono">{item.value}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-snug">{item.label}</div>
              </div>
            ))}
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
                if (isCenter) positionClass = "scale-105 z-10 w-full max-w-lg bg-white border-2 border-blue-500 shadow-[0_25px_60px_rgba(44,94,173,0.18)] rounded-3xl p-8 relative flex flex-col justify-between";
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

          {/* Security Banner */}
          <div className="mt-16 max-w-5xl mx-auto p-8 rounded-3xl bg-[#05070f] text-white border border-[#2C5EAD]/30 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.03),transparent_60%)]" />
            <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <h4 className="text-xl font-extrabold text-white">Enterprise-Grade Security</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Connect data sources securely. IceInsight complies with global standards, implementing strict TLS encryption in transit and AES-256 for data at rest. Access layers are managed using Role-Based Access Control and full audit logging databases.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["Data Encryption", "RBAC Access Control", "Audit Logging", "Compliance Audited"].map(sc => (
                    <span key={sc} className="px-2.5 py-1 rounded bg-[#0f1525] border border-slate-800 text-[10px] font-mono text-slate-300">
                      ✓ {sc}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 flex justify-center">
                <Shield className="w-24 h-24 text-blue-500/40 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING & CALL TO ACTION */}
      <section className="relative bg-gradient-to-b from-[#edf4fc] via-[#e6effb] to-[#d6e5fb] py-24 overflow-hidden text-slate-950 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">pricing::tiers</h2>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Pricing Models</h3>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 items-stretch">
            {/* Free Plan */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-slate-900">Free Plan</h4>
                    <p className="text-xs text-slate-500">Get initial analytics and templates set up.</p>
                  </div>
                  
                  {/* Isometric Drawing for Database (Blue theme) */}
                  <svg viewBox="0 0 120 120" className="w-24 h-24 text-blue-500 opacity-90 flex-shrink-0 -mt-2 -mr-2">
                    <g transform="translate(10, 10)">
                      <path d="M 50,15 L 85,32.5 L 50,50 L 15,32.5 Z" fill="rgba(44,94,173,0.06)" stroke="#2c5ead" strokeWidth="1.5" />
                      <path d="M 15,32.5 L 15,47.5 L 50,65 L 50,50 Z" fill="rgba(44,94,173,0.12)" stroke="#2c5ead" strokeWidth="1.5" />
                      <path d="M 50,50 L 50,65 L 85,47.5 L 85,32.5 Z" fill="rgba(44,94,173,0.08)" stroke="#2c5ead" strokeWidth="1.5" />
                      
                      <path d="M 15,52.5 L 15,67.5 L 50,85 L 50,70 Z" fill="rgba(44,94,173,0.12)" stroke="#2c5ead" strokeWidth="1.5" />
                      <path d="M 50,70 L 50,85 L 85,67.5 L 85,52.5 Z" fill="rgba(44,94,173,0.08)" stroke="#2c5ead" strokeWidth="1.5" />

                      <path d="M 15,72.5 L 15,87.5 L 50,105 L 50,90 Z" fill="rgba(44,94,173,0.15)" stroke="#2c5ead" strokeWidth="1.5" />
                      <path d="M 50,90 L 50,105 L 85,87.5 L 85,72.5 Z" fill="rgba(44,94,173,0.1)" stroke="#2c5ead" strokeWidth="1.5" />
                      
                      {/* Inner lights */}
                      <circle cx="32" cy="42" r="2" fill="#4bb8fa" />
                      <circle cx="32" cy="62" r="2" fill="#2c5ead" />
                      <circle cx="32" cy="82" r="2" fill="#4bb8fa" />
                    </g>
                  </svg>
                </div>
                
                <div className="text-4xl font-extrabold text-[#2c5ead] font-mono">₹0 <span className="text-xs text-slate-400 font-normal font-sans">/ month</span></div>
                
                <ul className="space-y-3 pt-6 border-t border-slate-100">
                  {["Initial analytics setup", "Basic dashboard templates", "Data source consultation", "Architecture recommendations"].map(li => (
                    <li key={li} className="flex items-center text-xs text-slate-650">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-[#2c5ead]" />
                      </div>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link href="/contact" className="flex items-center justify-center w-full py-4 rounded-full font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10 group-hover:scale-101">
                  Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Enterprise Tier */}
            <div className="p-8 rounded-3xl bg-[#05070f] border-2 border-emerald-500 text-white shadow-[0_0_35px_rgba(16,185,129,0.15)] flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-6 right-6 bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 font-mono font-bold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full z-10">
                Most Popular
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-white">Enterprise Tier</h4>
                    <p className="text-xs text-slate-400">Unlimited data sources and high retention dashboards.</p>
                  </div>
                  
                  {/* Isometric Drawing for Server (Green theme) */}
                  <svg viewBox="0 0 120 120" className="w-28 h-28 text-emerald-500 flex-shrink-0 -mt-3 -mr-3">
                    <g transform="translate(10, 10)">
                      <path d="M 50,15 L 85,32.5 L 50,50 L 15,32.5 Z" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1.5" />
                      <path d="M 15,32.5 L 15,82.5 L 50,100 L 50,50 Z" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1.5" />
                      <path d="M 50,50 L 50,100 L 85,82.5 L 85,32.5 Z" fill="rgba(16,185,129,0.05)" stroke="#10b981" strokeWidth="1.5" />
                      
                      <path d="M 22,43 L 45,54.5 L 45,58.5 L 22,47 Z" fill="#10b981" className="animate-pulse" />
                      <path d="M 22,55 L 45,66.5 L 45,70.5 L 22,59 Z" fill="#34d399" />
                      <path d="M 22,67 L 45,78.5 L 45,82.5 L 22,71 Z" fill="#10b981" className="animate-pulse" />
                      
                      <circle cx="50" cy="50" r="25" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ transformOrigin: '50px 50px', animationDuration: '8s' }} />
                    </g>
                  </svg>
                </div>
                
                <div className="text-4xl font-extrabold text-[#10b981] font-mono">Custom <span className="text-xs text-slate-400 font-normal font-sans">/ contract</span></div>
                
                <ul className="space-y-3 pt-6 border-t border-slate-800">
                  {["Unlimited data sources", "Unlimited dashboards", "Unlimited users", "Custom retention", "On-premise option", "24/7 support", "Dedicated account manager"].map(li => (
                    <li key={li} className="flex items-center text-xs text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-[#10b981]" />
                      </div>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8">
                <Link href="/contact" className="flex items-center justify-center w-full py-4 rounded-full font-bold text-sm text-[#022c22] bg-[#10b981] hover:bg-[#0ea5e9]/90 hover:text-white transition-all shadow-lg shadow-emerald-500/20 group-hover:scale-101">
                  Contact Sales <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#d6e5fb] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Start Analyzing Your Data Today
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Connect your data sources and get actionable insights in minutes. Build responsive dashboards and query analytics at scale.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Start Free Trial Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
