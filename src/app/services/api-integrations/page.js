"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Plug,
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Shield, Link2, Code, Terminal, Activity
} from "lucide-react";

const TechLogo = ({ name }) => {
  const logos = {
    "GraphQL": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-pink-600" fill="currentColor">
        <path d="M12 2L2 7.7v11.4L12 22l10-5.7V7.7zM12 4.4l7.7 4.4L12 13.2 4.3 8.8zM4.3 16.4l7.7-4.4v8.8zM19.7 16.4l-7.7-4.4v8.8z"/>
      </svg>
    ),
    "Multi-Cloud API Gateway": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2" fill="#1e3a8a" fillOpacity="0.3" />
        <path d="M7 12h10M12 7v10" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    "Apigee": (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <rect width="256" height="256" rx="40" fill="#000000" />
        <path d="M128 40c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm38.1 138.2l-38.1-22-38.1 22v-44l38.1-22 38.1 22v44zm0-66.2l-38.1-22-38.1 22v-44l38.1-22 38.1 22v44z" fill="#FF4E00" />
      </svg>
    ),
    "Express": (
      <svg viewBox="0 0 128 128" className="w-8 h-8 text-[#fff] bg-[#000] p-1.5 rounded-xl border border-white/10">
        <text x="64" y="74" fill="white" fontSize="22" fontWeight="black" textAnchor="middle" letterSpacing="-1" fontFamily="sans-serif">EX</text>
      </svg>
    ),
    "FastAPI": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#059669" />
        <path d="M13 5L6 13h5v6l7-10h-5V5z" fill="#00f2fe" />
      </svg>
    ),
    "Postman": (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="128" cy="128" r="128" fill="#FF6C37" />
        <path d="M165.7 137.9c16.3-16.3 16.3-42.8 0-59.2-16.3-16.3-42.8-16.3-59.2 0l-37.1 37.1c-16.3 16.3-16.3 42.8 0 59.2 16.3 16.3 42.8 16.3 59.2 0l37.1-37.1z" fill="#FFFFFF" />
        <path d="M128 64c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z" stroke="#FFFFFF" strokeWidth="12" />
      </svg>
    ),
    "Swagger": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#85EA2D" />
        <path d="M9 7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2v-2H9V9h4v6H9c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4h4V3H9zm6 10c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2v2h2v2h-4V9h4c2.2 0 4 1.8 4 4v2c0 2.2-1.8 4-4 4h-4v2h4z" fill="#000000" />
      </svg>
    )
  };
  return logos[name] || <Cpu className="w-8 h-8 text-slate-400" />;
};

export default function ApiIntegrationsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [faqPage, setFaqPage] = useState(0);
  const [faqInput, setFaqInput] = useState("");
  const [faqSent, setFaqSent] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const [activeGatewayPillar, setActiveGatewayPillar] = useState(0);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [activePattern, setActivePattern] = useState(0);
  const [activeStoryTab, setActiveStoryTab] = useState("challenge");

  const apiDesignFeatures = [
    "RESTful & GraphQL APIs",
    "OpenAPI/Swagger specification",
    "Contract-first development",
    "Rate limiting & throttling",
    "Authentication (OAuth2, JWT)",
    "Versioning strategies",
    "Comprehensive documentation"
  ];

  const integrationFeatures = [
    "Payment gateways (Stripe, PayPal)",
    "CRM systems (Salesforce, HubSpot)",
    "Marketing platforms & automation",
    "Analytics & telemetry monitoring",
    "Cloud service ecosystem hookups",
    "Custom real-time webhooks",
    "Legacy system adapter connectors"
  ];

  const gatewayPillars = [
    {
      title: "Security Gate",
      desc: "Comprehensive OAuth2/JWT auth, TLS encryption, and active rate limiting.",
      badge: "Auth, encryption, DDoS protection",
      icon: Shield
    },
    {
      title: "Usage Analytics",
      desc: "Tracing traffic loads, measuring error rates, and API performance telemetry.",
      badge: "Usage metrics, performance tracking",
      icon: Activity
    },
    {
      title: "Caching Layer",
      desc: "Edge-caching frameworks and CDN integration to minimize endpoint latency.",
      badge: "Response caching, CDN integration",
      icon: Database
    },
    {
      title: "Resilience Gates",
      desc: "Automated circuit breakers, exponential retries, and default fallback hooks.",
      badge: "Circuit breakers, retries, fallbacks",
      icon: Zap
    }
  ];

  const useCases = [
    {
      title: "Payment Gateway Integration",
      desc: "Stripe, PayPal, and Square integrations handling active transaction states and webhook verifications."
    },
    {
      title: "CRM & Marketing Hubs",
      desc: "Bidirectional syncs with Salesforce, HubSpot, Mailchimp, and Marketo pipelines."
    },
    {
      title: "ERP & Accounting Ledgers",
      desc: "Structured connections with QuickBooks, Xero, SAP, and NetSuite accounting services."
    },
    {
      title: "Cloud Ecosystem Services",
      desc: "Multi-cloud, cloud platform, and dedicated cloud services data integrations."
    }
  ];

  const patterns = [
    {
      title: "Synchronous REST",
      useCase: "Real-time query requests",
      example: "Payment gateway charges, user authentication gates"
    },
    {
      title: "Asynchronous Messaging",
      useCase: "Decoupled background tasks",
      example: "Order processing queues, automated email triggers"
    },
    {
      title: "Event-Driven Webhooks",
      useCase: "Instant event notifications",
      example: "Payment confirmation alerts, shipment status updates"
    },
    {
      title: "GraphQL Federation",
      useCase: "Unified client API gateway",
      example: "Aggregating microservices into a single graph endpoint"
    }
  ];

  const successStory = {
    title: "E-Commerce Platform Integration",
    challenge: "Scaling an e-commerce platform to orchestrate connections with 15+ payment gateways, shipping providers, and ERP networks without increasing latency.",
    solution: "We designed a unified API adapter layer using the adapter pattern and asynchronous webhook queue handlers.",
    results: [
      "Seamlessly integrated 15+ external payment/shipping gateways",
      "Unified client interface under a single GraphQL gateway",
      "Resilient retry mechanisms for third-party service outages"
    ]
  };

  const techStack = [
    { name: "GraphQL", category: "Query Language" },
    { name: "Multi-Cloud API Gateway", category: "Traffic Routing" },
    { name: "Apigee", category: "API Management" },
    { name: "Express", category: "API Web Server" },
    { name: "FastAPI", category: "High Performance API" },
    { name: "Postman", category: "Testing & Specs" },
    { name: "Swagger", category: "API Documentation" }
  ];

  const faqs = [
    {
      q: "How do you handle API versioning?",
      a: "We use semantic versioning with backward compatibility. APIs support multiple versions simultaneously using URL versioning (/v1/, /v2/) or header-based versioning. Deprecation notices are provided 6-12 months in advance."
    },
    {
      q: "What about API security?",
      a: "We implement OAuth2/JWT authentication, rate limiting, DDoS protection, request signing, and encryption in transit. All APIs include comprehensive audit logs and monitor for suspicious activity."
    },
    {
      q: "Can you integrate with legacy systems?",
      a: "Yes. We create adapter layers to modernize legacy SOAP/XML APIs into REST/GraphQL. We handle data transformation, protocol conversion, and maintain backward compatibility while enabling modern integrations."
    },
    {
      q: "How do you ensure API reliability?",
      a: "We implement circuit breakers, automatic retries with exponential backoff, fallback mechanisms, comprehensive monitoring, and SLAs with 99.9% uptime guarantees. All APIs include health check endpoints."
    },
    {
      q: "What is your typical integration timeline?",
      a: "Simple integrations (payment gateways, CRMs) take 2-4 weeks. Complex enterprise integrations with custom workflows can take 6-12 weeks. We provide detailed project plans with milestones."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <Plug className="w-3.5 h-3.5 text-[#1591DC]" />
                <span>API Design & Integrations</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                API Design <br />
                <span className="bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  & Integrations
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Contract-first API design, microservices architecture, and seamless third-party integrations built for scale and security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Connect An API
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
                    <pattern id="bp-grid-api" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(21, 145, 220, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-api)" />
                  
                  {/* Central Gateway Node */}
                  <g transform="translate(200, 150)">
                    <circle r="26" fill="#0c0e1e" stroke="#1591dc" strokeWidth="2.5" className="radar-glow-circle" />
                    <circle r="18" fill="#090d16" stroke="#1591dc" strokeWidth="2.5" />
                    <Layers className="w-5 h-5 text-[#1591dc] -translate-x-2.5 -translate-y-2.5" />
                  </g>

                  {/* REST Client */}
                  <g transform="translate(70, 150)">
                    <circle r="16" fill="#0c0e1e" stroke="#2c5ead" strokeWidth="2" />
                    <Terminal className="w-4 h-4 text-[#2c5ead] -translate-x-2 -translate-y-2" />
                  </g>
                  
                  {/* Internal DB */}
                  <g transform="translate(330, 80)">
                    <circle r="16" fill="#0c0e1e" stroke="#4bb8fa" strokeWidth="2" />
                    <Database className="w-4 h-4 text-[#4bb8fa] -translate-x-2 -translate-y-2" />
                  </g>

                  {/* External CRM */}
                  <g transform="translate(330, 220)">
                    <circle r="16" fill="#0c0e1e" stroke="#4bb8fa" strokeWidth="2" />
                    <Plug className="w-4 h-4 text-[#4bb8fa] -translate-x-2 -translate-y-2" />
                  </g>

                  {/* Connection lines */}
                  <path d="M 86,150 L 174,150" fill="none" stroke="#1591dc" strokeWidth="2" className="svg-blueprint-line" />
                  <path d="M 224,136 L 314,90" fill="none" stroke="#1591dc" strokeWidth="2.5" className="svg-blueprint-line" />
                  <path d="M 224,164 L 314,210" fill="none" stroke="#1591dc" strokeWidth="2.5" className="svg-blueprint-line" />
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>API ORCHESTRATION GATEWAY</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. DESIGN VS INTEGRATION */}
      <section className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">system::pillars</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Comprehensive API Capabilities</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: API Design */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-500/5 group"
            >
              <div className="space-y-4">
                <span className="text-[9px] font-black tracking-widest text-[#1591dc] uppercase font-mono bg-blue-950/40 px-2.5 py-1 rounded border border-blue-500/25">Design Strategy</span>
                <h4 className="text-xl font-bold text-white mt-4">API Design</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Building consistent, developer-friendly interfaces following modern web standards.
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {apiDesignFeatures.map((feat) => (
                    <motion.li 
                      key={feat} 
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="flex items-center text-xs text-slate-300 hover:text-blue-400 cursor-default transition-colors"
                    >
                      <Check className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 2: Integrations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-500/5 group"
            >
              <div className="space-y-4">
                <span className="text-[9px] font-black tracking-widest text-[#4bb8fa] uppercase font-mono bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-500/25">Ecosystem Sync</span>
                <h4 className="text-xl font-bold text-white mt-4">Seamless Integrations</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Connecting third-party applications to share data and trigger workflows in real-time.
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {integrationFeatures.map((feat) => (
                    <motion.li 
                      key={feat} 
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="flex items-center text-xs text-slate-300 hover:text-cyan-400 cursor-default transition-colors"
                    >
                      <Check className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. API GATEWAY & MANAGEMENT (REDESIGNED: INTERACTIVE MONITOR) */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">gateway::management</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">API Gateway & Traffic Control</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Centralized API management providing security controls, load monitoring, and traffic throttling.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Live Gateway Monitor Screen */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/70 border border-white/5 p-6 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1591dc]/10 to-transparent pointer-events-none" />
              
              <div className="space-y-4 relative z-10 w-full flex flex-col justify-between h-full">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span className="text-[10px] font-bold text-slate-400 font-mono flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#1591dc]" />
                    gateway-monitor -- live
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Animated Waveform monitor */}
                <div className="py-6 flex items-end justify-center gap-1 h-24">
                  {[...Array(18)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 bg-gradient-to-t from-[#2C5EAD] to-[#1591dc] rounded-full"
                      animate={{ 
                        height: [20, Math.random() * 65 + 15, 20] 
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.2 + Math.random() * 0.8,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Dynamic Monitor metrics */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2 font-mono text-[10px] text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">ACTIVE RULESET:</span>
                    <span className="text-[#1591dc] font-bold uppercase">{gatewayPillars[activeGatewayPillar].title}</span>
                  </div>
                  <div className="border-t border-white/5 my-2" />
                  
                  {activeGatewayPillar === 0 && (
                    <>
                      <div className="flex justify-between"><span>SSL/TLS LINK:</span><span className="text-emerald-400">ENCRYPTED (TLS 1.3)</span></div>
                      <div className="flex justify-between"><span>DDoS PROTECTION:</span><span className="text-[#4bb8fa]">100% SECURED</span></div>
                      <div className="flex justify-between"><span>BLOCKED THREATS:</span><span className="text-rose-400 animate-pulse">247 requests/hr</span></div>
                    </>
                  )}
                  {activeGatewayPillar === 1 && (
                    <>
                      <div className="flex justify-between"><span>REQUEST LOAD:</span><span className="text-amber-400">14.2K requests/sec</span></div>
                      <div className="flex justify-between"><span>AVG ENDPOINT LATENCY:</span><span className="text-emerald-400">12ms (p95: 22ms)</span></div>
                      <div className="flex justify-between"><span>TELEMETRY PIPELINES:</span><span className="text-[#4bb8fa]">8 Active streams</span></div>
                    </>
                  )}
                  {activeGatewayPillar === 2 && (
                    <>
                      <div className="flex justify-between"><span>CACHE HIT RATIO:</span><span className="text-emerald-400">92.4%</span></div>
                      <div className="flex justify-between"><span>EDGE ENDPOINT SPEEDS:</span><span className="text-[#4bb8fa]">Avg 8ms response</span></div>
                      <div className="flex justify-between"><span>BACKEND WORK SAVED:</span><span className="text-emerald-400">44.8% CPU savings</span></div>
                    </>
                  )}
                  {activeGatewayPillar === 3 && (
                    <>
                      <div className="flex justify-between"><span>CIRCUIT STATE:</span><span className="text-emerald-400 font-bold">CLOSED (Healthy)</span></div>
                      <div className="flex justify-between"><span>EXPONENTIAL RETRIES:</span><span className="text-[#4bb8fa]">Active (3 Max)</span></div>
                      <div className="flex justify-between"><span>FALLBACK RESPONSE:</span><span className="text-slate-400">Inactive (0 triggers)</span></div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Grid selection cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {gatewayPillars.map((pil, idx) => {
                const Icon = pil.icon;
                const isActive = activeGatewayPillar === idx;
                return (
                  <button 
                    key={pil.title}
                    onClick={() => setActiveGatewayPillar(idx)}
                    className={`text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden ${
                      isActive 
                        ? "bg-[#1b203a] border-[#1591dc] shadow-lg shadow-[#1591dc]/10 text-white" 
                        : "bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                        isActive ? "bg-[#1591dc]/20 border-[#1591dc] text-[#4bb8fa]" : "bg-slate-900 border-white/5 text-slate-500"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className={`text-sm font-bold ${isActive ? "text-white" : "text-slate-200"}`}>{pil.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{pil.desc}</p>
                    </div>
                    <div className={`border-t border-white/5 pt-3 mt-4 text-[9px] font-mono uppercase tracking-wider ${
                      isActive ? "text-[#4bb8fa]" : "text-slate-500"
                    }`}>
                      {pil.badge}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMON USE CASES (REDESIGNED: INTERACTIVE ROUTER) */}
      <section className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#cddbf7] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-slate-300 uppercase font-mono">common::usecases</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Integration Use Cases</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Vertical button selector and active usecase info */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="flex flex-col space-y-2">
                {useCases.map((uc, idx) => {
                  const isActive = activeUseCase === idx;
                  return (
                    <button
                      key={uc.title}
                      onClick={() => setActiveUseCase(idx)}
                      className={`text-left p-4.5 rounded-xl border transition-all duration-300 font-extrabold text-sm ${
                        isActive
                          ? "bg-slate-950/80 border-[#4BB8FA] text-white shadow-md shadow-[#4BB8FA]/10"
                          : "bg-slate-900/30 border-white/5 text-slate-300 hover:border-white/10 hover:text-white"
                      }`}
                    >
                      {uc.title}
                    </button>
                  );
                })}
              </div>

              {/* Description box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeUseCase}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="p-6 rounded-2xl bg-slate-950/70 border border-white/5 flex-grow flex flex-col justify-center"
                >
                  <span className="text-[9px] font-mono text-[#4BB8FA] font-bold uppercase tracking-widest mb-1.5 block">ACTIVE ROUTE</span>
                  <h4 className="text-base font-bold text-white mb-2">{useCases[activeUseCase].title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{useCases[activeUseCase].desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: SVG Router Visualizer Board */}
            <div className="lg:col-span-7 p-6 rounded-3xl bg-[#090b16]/95 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden h-[300px] lg:h-auto">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(21,145,220,0.02),transparent_70%)] pointer-events-none" />
              
              <div className="w-full h-full max-w-[480px] max-h-[220px]">
                <svg viewBox="0 0 500 240" className="w-full h-full select-none" fill="none">
                  {/* Connection paths */}
                  {/* Client App (left) to Gateway (center) */}
                  <path d="M 70 120 L 250 120" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="3" />
                  <path d="M 70 120 L 250 120" stroke="#1591dc" strokeWidth="3" className="opacity-40" />

                  {/* Gateway (center) to destinations (right) */}
                  <path d="M 250 120 C 330 120, 350 50, 430 50" stroke={activeUseCase === 0 ? "#1591dc" : "rgba(255, 255, 255, 0.08)"} strokeWidth="2.5" />
                  <path d="M 250 120 C 330 120, 350 100, 430 100" stroke={activeUseCase === 1 ? "#1591dc" : "rgba(255, 255, 255, 0.08)"} strokeWidth="2.5" />
                  <path d="M 250 120 C 330 120, 350 160, 430 160" stroke={activeUseCase === 2 ? "#1591dc" : "rgba(255, 255, 255, 0.08)"} strokeWidth="2.5" />
                  <path d="M 250 120 C 330 120, 350 210, 430 210" stroke={activeUseCase === 3 ? "#1591dc" : "rgba(255, 255, 255, 0.08)"} strokeWidth="2.5" />

                  {/* Client App Node (Left) */}
                  <g transform="translate(60, 120)">
                    <circle r="22" fill="#11142a" stroke="#2c5ead" strokeWidth="1.5" />
                    <Terminal className="w-5 h-5 text-[#2c5ead] -translate-x-2.5 -translate-y-2.5" />
                    <text x="0" y="34" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold" fontFamily="monospace">CLIENT APP</text>
                  </g>

                  {/* Gateway Core Hub (Center) */}
                  <g transform="translate(250, 120)">
                    <motion.circle r="30" fill="rgba(21, 145, 220, 0.06)" stroke="#1591dc" strokeWidth="1.5" animate={{ scale: [1, 1.12, 1] }} transition={{ repeat: Infinity, duration: 3 }} />
                    <circle r="20" fill="#0d0f22" stroke="#1591dc" strokeWidth="2" />
                    <Layers className="w-5 h-5 text-[#1591dc] -translate-x-2.5 -translate-y-2.5" />
                    <text x="0" y="42" textAnchor="middle" fill="#1591dc" fontSize="8" fontWeight="bold" fontFamily="monospace">API ROUTER</text>
                  </g>

                  {/* Payments Destination Node */}
                  <g transform="translate(440, 50)">
                    <circle r="16" fill={activeUseCase === 0 ? "#11142a" : "#0d0f22"} stroke={activeUseCase === 0 ? "#4bb8fa" : "rgba(255,255,255,0.08)"} strokeWidth="1.5" />
                    <Zap className={`w-4 h-4 ${activeUseCase === 0 ? "text-[#4bb8fa]" : "text-slate-600"} -translate-x-2 -translate-y-2`} />
                    <text x="24" y="3" textAnchor="start" fill={activeUseCase === 0 ? "#ffffff" : "#64748b"} fontSize="8" fontWeight="bold" fontFamily="monospace">PAYMENTS</text>
                  </g>

                  {/* CRM Destination Node */}
                  <g transform="translate(440, 100)">
                    <circle r="16" fill={activeUseCase === 1 ? "#11142a" : "#0d0f22"} stroke={activeUseCase === 1 ? "#4bb8fa" : "rgba(255,255,255,0.08)"} strokeWidth="1.5" />
                    <Plug className={`w-4 h-4 ${activeUseCase === 1 ? "text-[#4bb8fa]" : "text-slate-600"} -translate-x-2 -translate-y-2`} />
                    <text x="24" y="3" textAnchor="start" fill={activeUseCase === 1 ? "#ffffff" : "#64748b"} fontSize="8" fontWeight="bold" fontFamily="monospace">CRM SYNC</text>
                  </g>

                  {/* ERP Destination Node */}
                  <g transform="translate(440, 160)">
                    <circle r="16" fill={activeUseCase === 2 ? "#11142a" : "#0d0f22"} stroke={activeUseCase === 2 ? "#4bb8fa" : "rgba(255,255,255,0.08)"} strokeWidth="1.5" />
                    <Database className={`w-4 h-4 ${activeUseCase === 2 ? "text-[#4bb8fa]" : "text-slate-600"} -translate-x-2 -translate-y-2`} />
                    <text x="24" y="3" textAnchor="start" fill={activeUseCase === 2 ? "#ffffff" : "#64748b"} fontSize="8" fontWeight="bold" fontFamily="monospace">ERP LEDGER</text>
                  </g>

                  {/* Cloud Destination Node */}
                  <g transform="translate(440, 210)">
                    <circle r="16" fill={activeUseCase === 3 ? "#11142a" : "#0d0f22"} stroke={activeUseCase === 3 ? "#4bb8fa" : "rgba(255,255,255,0.08)"} strokeWidth="1.5" />
                    <Globe className={`w-4 h-4 ${activeUseCase === 3 ? "text-[#4bb8fa]" : "text-slate-600"} -translate-x-2 -translate-y-2`} />
                    <text x="24" y="3" textAnchor="start" fill={activeUseCase === 3 ? "#ffffff" : "#64748b"} fontSize="8" fontWeight="bold" fontFamily="monospace">CLOUD ECO</text>
                  </g>

                  {/* Glowing dynamic packet flying across path */}
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="4"
                    fill="#4bb8fa"
                    className="shadow-sm shadow-[#4bb8fa]/50"
                    animate={{
                      x: [70, 250, 440],
                      y: activeUseCase === 0
                        ? [120, 120, 50]
                        : activeUseCase === 1
                        ? [120, 120, 100]
                        : activeUseCase === 2
                        ? [120, 120, 160]
                        : [120, 120, 210]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2,
                      ease: "easeInOut"
                    }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTEGRATION PATTERNS (REDESIGNED: VERTICAL ACCORDION LIST) */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">architectural::patterns</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Integration Patterns We Use</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Click a design pattern below to view its functional data flow topology schema.
            </p>
          </div>

          <div className="flex flex-col space-y-4 max-w-4xl mx-auto">
            {patterns.map((pat, idx) => {
              const isOpen = activePattern === idx;
              const patternImages = {
                0: "/assets/images/patterns/pattern_rest.webp",
                1: "/assets/images/patterns/pattern_messaging.webp",
                2: "/assets/images/patterns/pattern_webhooks.webp",
                3: "/assets/images/patterns/pattern_graphql.webp"
              };
              const patternDescs = {
                0: "Establishes a direct, blocking connection between client and server. The client waits until the server processes the request and responds, ensuring immediate data consistency for real-time transactions.",
                1: "Decouples message producers and consumers using an intermediary broker queue. The client sends a task and immediately continues its work, while background workers consume and process tasks asynchronously.",
                2: "Enables event-driven push architecture where a source server registers client target endpoints and triggers HTTP POST requests to push updates immediately when specific events occur.",
                3: "Aggregates multiple underlying microservices into a single GraphQL federated gateway schema. Clients query a single gateway endpoint to fetch data from different subgraphs transparently."
              };

              return (
                <div 
                  key={pat.title}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white/70 shadow-sm ${
                    isOpen ? "border-blue-500 bg-white shadow-md" : "border-slate-200/80 hover:border-slate-350"
                  }`}
                >
                  {/* Card Header (Click to Toggle) */}
                  <button
                    onClick={() => setActivePattern(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                        isOpen ? "bg-blue-600/10 border-blue-500 text-blue-600" : "bg-slate-100 border-slate-200 text-slate-500"
                      }`}>
                        <Plug className="w-4 h-4" />
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900">{pat.title}</h4>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-slate-100 grid md:grid-cols-12 gap-6 items-center bg-slate-50/50">
                          {/* Left text information */}
                          <div className="md:col-span-7 space-y-4 text-left">
                            <div>
                              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">Use Case</span>
                              <p className="text-xs text-slate-700 leading-normal font-semibold mt-0.5">{pat.useCase}</p>
                            </div>
                            
                            <div>
                              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">Example / Trigger</span>
                              <p className="text-xs text-slate-700 leading-normal font-semibold mt-0.5">{pat.example}</p>
                            </div>

                            <div>
                              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">Architectural Flow Description</span>
                              <p className="text-xs text-slate-550 leading-relaxed mt-1">{patternDescs[idx]}</p>
                            </div>
                          </div>

                          {/* Right schematic image */}
                          <div className="md:col-span-5 flex items-center justify-center">
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-250 bg-white shadow-sm p-1">
                              <img 
                                src={patternImages[idx]}
                                alt={pat.title}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
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

      {/* 6. SUCCESS STORY (REDESIGNED: INTERACTIVE TABS & METRICS) */}
      <section className="relative bg-gradient-to-b from-[#f0f5fd] via-[#f8fafc] to-[#edf4fc] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">integration::success</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Integration Success Story</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto w-full">
            {/* Left Column: Interactive Story card with sub-tabs */}
            <div className="w-full lg:col-span-8 p-4 sm:p-8 rounded-3xl bg-white border-2 border-[#2C5EAD]/25 shadow-[0_15px_40px_rgba(10,12,22,0.06)] hover:shadow-[0_20px_50px_rgba(44,94,173,0.12)] hover:border-[#2C5EAD]/50 hover:scale-[1.005] transition-all duration-300 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 pb-3 border-b border-slate-100">
                  <h4 className="text-lg font-black text-slate-900">{successStory.title}</h4>
                  <div className="flex space-x-1">
                    {["challenge", "solution", "results"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveStoryTab(tab)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider font-mono transition-colors ${
                          activeStoryTab === tab 
                            ? "bg-[#2C5EAD] text-white" 
                            : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
 
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStoryTab}
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ duration: 0.2 }}
                    className="min-h-[140px]"
                  >
                    {activeStoryTab === "challenge" && (
                      <div className="space-y-2">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Platform Obstacle</span>
                        <p className="text-sm text-slate-600 leading-relaxed">{successStory.challenge}</p>
                      </div>
                    )}
                    {activeStoryTab === "solution" && (
                      <div className="space-y-2">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Our Architecture</span>
                        <p className="text-sm text-slate-600 leading-relaxed">{successStory.solution}</p>
                      </div>
                    )}
                    {activeStoryTab === "results" && (
                      <div className="space-y-2.5">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono mb-1 block">Proven Metrics</span>
                        <ul className="space-y-2">
                          {successStory.results.map((res, i) => (
                            <li key={i} className="flex items-center text-xs text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
 
            {/* Right Column: Performance Stats Widget */}
            <div className="w-full lg:col-span-4 p-4 sm:p-8 rounded-3xl bg-[#090b16] text-white border border-white/5 flex flex-col justify-between text-center min-h-[250px] lg:min-h-0">
              <div className="space-y-4 w-full my-auto">
                <span className="text-[9px] font-bold text-[#4BB8FA] uppercase tracking-wider block font-mono">Integration Output</span>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-black text-white font-mono">15+ API Gateway</div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono mt-1 block">Connected Gateways</span>
                  </div>
                  
                  <div className="border-t border-white/5 pt-4">
                    <div className="text-3xl font-black text-emerald-400 font-mono">-40% Latency</div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono mt-1 block">Avg Response Boost</span>
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <div className="text-3xl font-black text-cyan-400 font-mono">99.99% Uptime</div>
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono mt-1 block">System Availability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGIES WE USE (REDESIGNED: CONTINUOUS HORIZONTAL MARQUEE) */}
      <section className="relative bg-gradient-to-b from-[#edf4fc] via-[#e6effb] to-[#d6e5fb] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">technical::modules</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Integration Technologies We Deploy</h3>
          </div>

          <div className="relative w-full overflow-hidden py-4 select-none">
            {/* Left fade gradient overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#edf4fc] to-transparent z-10 pointer-events-none" />
            {/* Right fade gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#d6e5fb] to-transparent z-10 pointer-events-none" />

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
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">{tech.category}</span>
                    <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TechLogo name={tech.name} />
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-slate-800 text-left block mt-2 group-hover:text-[#2C5EAD] transition-colors">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FAQs (REDESIGNED: WATERMARK & ACCORDION PAGINATION) */}
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
                        <div className="w-8 h-8 rounded-full bg-[#2C5EAD] hover:bg-[#1591DC] flex items-center justify-center text-white text-base font-black flex-shrink-0 transition-colors shadow-sm">
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
                    faqPage === 0 ? "bg-[#2C5EAD] scale-105" : "bg-[#2C5EAD]/70 hover:bg-[#2C5EAD]"
                  }`}
                >
                  1
                </button>
                <button 
                  onClick={() => setFaqPage(1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-sm ${
                    faqPage === 1 ? "bg-[#2C5EAD] scale-105" : "bg-[#2C5EAD]/70 hover:bg-[#2C5EAD]"
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
                  src="/assets/api_faq_illustration.webp" 
                  alt="API FAQ Illustration" 
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="text-2xl font-extrabold text-slate-900 mb-1">Any Question?</h4>
              <p className="text-xs text-slate-500 text-center mb-6">
                Ask us anything about REST, GraphQL, API Gateways, and system integrations.
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
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#2C5EAD] pr-10 shadow-sm"
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
                    className="w-full sm:w-auto px-10 py-3 bg-[#2C5EAD] hover:bg-[#1591DC] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#2C5EAD]/20 active:scale-95"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Need API Development or Integration?
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Let's build scalable, secure APIs that power your applications and integrate seamlessly with your ecosystem. Talk with our API engineering team.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Start Integration Now
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
