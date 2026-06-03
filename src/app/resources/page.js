"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Folder, Download, Bell, ArrowRight, X, Mail, Shield, Award, Calendar, ChevronDown, ChevronUp, Grid, List
} from "lucide-react";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All Resources");
  const [formData, setFormData] = useState({ name: "", email: "", guide: "" });
  const [activeGuide, setActiveGuide] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({
    Cloud: true,
    Security: false,
    DevOps: false,
    Architecture: false,
    Compliance: false,
    "API Security": false,
  });

  const guides = [
    { 
      title: "Cloud Migration Checklist", 
      id: "cloud-migration", 
      category: "Cloud",
      desc: "A 50-point checklist designed for planning and executing enterprise cloud migrations.",
      date: "May 10, 2025",
      type: "PDF",
      size: "2.4 MB",
      gradient: "from-blue-500/10 to-sky-500/5",
      borderColor: "border-blue-100"
    },
    { 
      title: "FinOps Best Practices Guide", 
      id: "finops-guide", 
      category: "Cloud",
      desc: "Proven strategies to optimize cloud spending and improve financial accountability.",
      date: "Apr 28, 2025",
      type: "PDF",
      size: "1.8 MB",
      gradient: "from-blue-500/10 to-indigo-500/5",
      borderColor: "border-blue-100"
    },
    { 
      title: "SaaS Security Whitepaper", 
      id: "saas-security", 
      category: "Security",
      desc: "A comprehensive guide to securing multi-tenant SaaS applications and environments.",
      date: "Jun 12, 2025",
      type: "PDF",
      size: "3.1 MB",
      gradient: "from-blue-500/10 to-purple-500/5",
      borderColor: "border-blue-100"
    },
    { 
      title: "Healthcare Security Checklist", 
      id: "healthcare-security", 
      category: "Security",
      desc: "A complete security and compliance roadmap specifically tailored for healthcare software developers.",
      date: "Mar 05, 2025",
      type: "PDF",
      size: "2.8 MB",
      gradient: "from-blue-500/10 to-emerald-500/5",
      borderColor: "border-blue-100"
    },
    { 
      title: "DevOps Metrics That Matter", 
      id: "devops-metrics", 
      category: "DevOps",
      desc: "An explanatory guide covering DORA metrics, error budgets, and SLOs.",
      date: "Jan 18, 2025",
      type: "PDF",
      size: "1.5 MB",
      gradient: "from-blue-500/10 to-amber-500/5",
      borderColor: "border-blue-100"
    },
    { 
      title: "API Design Best Practices", 
      id: "api-design", 
      category: "Architecture",
      desc: "RESTful and GraphQL API design patterns optimized for scalable systems.",
      date: "Feb 22, 2025",
      type: "PDF",
      size: "2.0 MB",
      gradient: "from-blue-500/10 to-cyan-500/5",
      borderColor: "border-blue-100"
    },
    { 
      title: "Security Compliance Roadmap", 
      id: "security-compliance-roadmap", 
      category: "Compliance",
      desc: "Step-by-step readiness checklist and guidelines for aligned security frameworks.",
      date: "Jul 02, 2025",
      type: "PDF",
      size: "1.9 MB",
      gradient: "from-blue-500/10 to-slate-500/5",
      borderColor: "border-blue-100"
    },
    { 
      title: "OAuth 2.0 & API Security Guide", 
      id: "oauth-security", 
      category: "API Security",
      desc: "Best practices for token authorization, credential storage, and rate-limiting APIs.",
      date: "Aug 14, 2025",
      type: "PDF",
      size: "2.2 MB",
      gradient: "from-blue-500/10 to-rose-500/5",
      borderColor: "border-blue-100"
    }
  ];

  const categories = [
    { name: "All Resources", count: guides.length },
    { name: "Cloud", count: guides.filter(g => g.category === "Cloud").length },
    { name: "Security", count: guides.filter(g => g.category === "Security").length },
    { name: "DevOps", count: guides.filter(g => g.category === "DevOps").length },
    { name: "Architecture", count: guides.filter(g => g.category === "Architecture").length },
    { name: "Compliance", count: guides.filter(g => g.category === "Compliance").length },
    { name: "API Security", count: guides.filter(g => g.category === "API Security").length }
  ];

  const handleDownloadSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success(`Success! Check your email to download the ${formData.guide}`);
    setActiveGuide(null);
    setFormData({ name: "", email: "", guide: "" });
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully!");
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  const toggleCategory = (name) => {
    setExpandedCategories(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleCategorySelect = (name) => {
    setActiveCategory(name);
    if (name !== "All Resources") {
      setExpandedCategories(prev => ({
        ...prev,
        [name]: true
      }));
    }
  };

  const displayedCategories = activeCategory === "All Resources"
    ? categories.slice(1)
    : categories.filter(c => c.name === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden flex flex-col justify-between">
      
      {/* 1. Subtle Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e2e8f0_1.5px,transparent_1.5px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none -z-10 opacity-70" />
      
      {/* 2. Top ambient soft-blue radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Page Content Wrapper */}
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 space-y-24 w-full flex-grow">
        
        {/* ================= HERO SECTION ================= */}
        <header className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-black tracking-widest text-blue-600 uppercase font-mono bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block shadow-sm">
              ENGINEERING RESOURCES
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-outfit tracking-tight leading-[1.1] max-w-xl">
              System Blueprints & Whitepapers
            </h1>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              Download our checklists, whitepapers, and guides developed by our senior software engineers and security compliance leads.
            </p>
          </div>

          {/* Hero blueprint node art illustration */}
          <div className="hidden lg:block lg:col-span-6 relative h-[280px] self-center">
            <div className="absolute inset-0 bg-white/40 border border-slate-200/60 rounded-2xl shadow-inner backdrop-blur-sm -z-10 overflow-hidden" />
            <svg viewBox="0 0 500 280" className="w-full h-full text-blue-200" fill="none" strokeWidth="1.2">
              <defs>
                <pattern id="illustration-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(37, 99, 235, 0.04)" strokeWidth="1.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#illustration-grid)" />
              
              {/* Node A (Source/Shield) */}
              <circle cx="100" cy="140" r="35" stroke="rgba(37, 99, 235, 0.15)" strokeDasharray="3 3" />
              <circle cx="100" cy="140" r="26" stroke="rgba(37, 99, 235, 0.3)" />
              <path d="M100 130 L109 134 V143 C109 149 100 153 100 153 C100 153 91 149 91 143 V134 L100 130 Z" fill="rgba(37, 99, 235, 0.08)" stroke="rgb(37, 99, 235)" strokeWidth="1.5" />
              
              {/* Dynamic paths radiating out */}
              <path d="M 135 140 H 220" stroke="rgba(37, 99, 235, 0.25)" />
              <path d="M 220 140 V 80 H 275" stroke="rgba(37, 99, 235, 0.25)" strokeDasharray="3 3" />
              <path d="M 220 140 V 200 H 275" stroke="rgba(37, 99, 235, 0.25)" strokeDasharray="3 3" />
              
              {/* Dynamic nodes */}
              <circle cx="220" cy="140" r="3.5" fill="rgb(37, 99, 235)" />
              
              {/* Upper Box: Cloud */}
              <rect x="275" y="60" width="130" height="40" rx="8" fill="white" stroke="rgba(37, 99, 235, 0.2)" className="shadow-sm" />
              <text x="312" y="84" fill="rgb(15, 23, 42)" className="text-[9.5px] font-bold font-sans">Cloud Stack</text>
              <rect x="285" y="70" width="20" height="20" rx="4" fill="rgba(37, 99, 235, 0.08)" stroke="rgb(37, 99, 235)" />
              <path d="M291 80 H299 M295 76 V84" stroke="rgb(37, 99, 235)" strokeWidth="1.2" />
              
              {/* Middle Box: Blueprints */}
              <path d="M 135 140 H 275" stroke="rgb(37, 99, 235)" strokeWidth="1.5" />
              <rect x="275" y="120" width="130" height="40" rx="8" fill="white" stroke="rgb(37, 99, 235)" strokeWidth="1.2" className="shadow-md" />
              <text x="312" y="144" fill="rgb(15, 23, 42)" className="text-[9.5px] font-extrabold font-sans">System Blueprints</text>
              <rect x="285" y="130" width="20" height="20" rx="4" fill="rgba(37, 99, 235, 0.15)" stroke="rgb(37, 99, 235)" />
              <path d="M289 135 H297 M289 138 H297 M289 141 H293" stroke="rgb(37, 99, 235)" strokeWidth="1.2" />
              
              {/* Lower Box: Security */}
              <rect x="275" y="180" width="130" height="40" rx="8" fill="white" stroke="rgba(37, 99, 235, 0.2)" className="shadow-sm" />
              <text x="312" y="204" fill="rgb(15, 23, 42)" className="text-[9.5px] font-bold font-sans">Compliance/API</text>
              <rect x="285" y="190" width="20" height="20" rx="4" fill="rgba(37, 99, 235, 0.08)" stroke="rgb(37, 99, 235)" />
              <path d="M290 200 L295 195 L300 200" stroke="rgb(37, 99, 235)" strokeWidth="1.2" />
              
              {/* Secondary details */}
              <circle cx="430" cy="100" r="2.5" fill="rgba(37, 99, 235, 0.3)" />
              <circle cx="445" cy="155" r="3" fill="rgba(37, 99, 235, 0.2)" />
              <circle cx="435" cy="210" r="1.5" fill="rgba(37, 99, 235, 0.4)" />
              <path d="M 405 80 H 425 L 435 90" stroke="rgba(37, 99, 235, 0.12)" strokeWidth="1.2" />
              <path d="M 405 200 H 420 L 428 192" stroke="rgba(37, 99, 235, 0.12)" strokeWidth="1.2" />
            </svg>
          </div>

          {/* Three horizontal value-prop cards */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200/80">
            {/* Value card 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-slate-900 tracking-tight">Expert Authored</h4>
                <p className="text-xs text-slate-500 leading-normal font-medium">Created by senior engineers and security compliance experts.</p>
              </div>
            </div>
            {/* Value card 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <Download className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-slate-900 tracking-tight">Actionable Guidance</h4>
                <p className="text-xs text-slate-500 leading-normal font-medium">Practical frameworks, security profiles, and step-by-step checklists.</p>
              </div>
            </div>
            {/* Value card 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-slate-900 tracking-tight">Enterprise Ready</h4>
                <p className="text-xs text-slate-500 leading-normal font-medium">Engineered for extreme scalability, hardened security, and audit compliance.</p>
              </div>
            </div>
          </div>

        </header>

        {/* ================= MAIN CONTENT WORKSPACE ================= */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= LEFT SIDEBAR ================= */}
          <aside className="lg:col-span-3 space-y-8">
            
            {/* Category Listing Widget */}
            <div className="space-y-4">
              <h3 className="text-xs font-black tracking-widest text-blue-600 uppercase font-mono pl-1">RESOURCE LIBRARY</h3>
              
              <nav className="space-y-1 flex flex-col">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.name;
                  return (
                    <button
                      key={cat.name}
                      onClick={() => handleCategorySelect(cat.name)}
                      className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-xs font-extrabold transition-all border ${
                        isActive
                          ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/10 font-black scale-[1.01]"
                          : "text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100/60"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Folder className={`w-4 h-4 ${isActive ? "text-white fill-white/10" : "text-slate-400"}`} />
                        <span>{cat.name}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                        {cat.count < 10 ? `0${cat.count}` : cat.count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Need something specific CTA Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4 text-left">
              <h4 className="font-extrabold text-sm text-slate-900 leading-tight">Need something specific?</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Our team can help you find custom resources and reference architectures tailored specifically to your project requirements.
              </p>
              <button 
                onClick={() => {
                  setActiveGuide("Custom Architectural Reference Guide");
                  setFormData(prev => ({ ...prev, guide: "Custom Architectural Reference Guide" }));
                }}
                className="w-full py-2.5 bg-white border border-blue-600 hover:bg-blue-50 text-blue-600 text-xs font-extrabold rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-sm shadow-blue-600/5"
              >
                Request Custom Guide
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Stay Updated Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4 text-left">
              <div className="flex items-center space-x-2.5">
                <Bell className="w-4 h-4 text-blue-600 animate-pulse" />
                <h4 className="font-extrabold text-sm text-slate-900 leading-tight">Stay Updated</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Get instant notifications when new technical blueprints and engineering checklists are published.
              </p>
              <form onSubmit={handleSubscribeSubmit} className="relative mt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs text-slate-900 outline-none transition-all placeholder:text-slate-400 shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 w-9 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-all shadow active:scale-95"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

          </aside>

          {/* ================= RIGHT MAIN PANEL ================= */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Header / Filter Stats Row */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-200/80 mb-2">
              <div className="flex items-center space-x-3.5">
                <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">{activeCategory}</h2>
                <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-2.5 py-0.5 rounded-full font-mono border border-blue-100">
                  {activeCategory === "All Resources" 
                    ? (guides.length < 10 ? `0${guides.length}` : guides.length)
                    : (guides.filter(g => g.category === activeCategory).length < 10 
                        ? `0${guides.filter(g => g.category === activeCategory).length}` 
                        : guides.filter(g => g.category === activeCategory).length
                      )
                  }
                </span>
              </div>
              
              <div className="flex items-center space-x-4 text-xs font-extrabold text-slate-500">
                <div className="flex items-center space-x-2">
                  <span>Sort by:</span>
                  <select className="bg-white border border-slate-200 rounded-lg py-1.5 px-3.5 outline-none focus:border-blue-600 text-slate-800 font-extrabold cursor-pointer shadow-sm text-xs">
                    <option>Latest</option>
                    <option>Popular</option>
                  </select>
                </div>

                <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-100/50">
                  <button className="p-1.5 bg-white text-blue-600 rounded-md shadow-sm border border-slate-200/20">
                    <Grid className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-600">
                    <List className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Collapsible Accordion Grid */}
            <div className="space-y-6 text-left">
              {displayedCategories.map((cat) => {
                const isExpanded = expandedCategories[cat.name];
                const categoryGuides = guides.filter(g => g.category === cat.name);
                if (categoryGuides.length === 0) return null;

                return (
                  <article key={cat.name} className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden transition-all">
                    
                    {/* Header Row */}
                    <button
                      onClick={() => toggleCategory(cat.name)}
                      className="w-full flex items-center justify-between p-5 bg-white hover:bg-slate-50/40 transition-colors"
                      style={isExpanded ? { borderBottom: "1px solid #f1f5f9" } : {}}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                          <Folder className="w-4.5 h-4.5 fill-blue-600/5" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">{cat.name}</h3>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-mono">
                            {cat.count} {cat.count === 1 ? "item" : "items"}
                          </span>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {/* Collapsible Document Rows */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="divide-y divide-slate-100 bg-white">
                            {categoryGuides.map((g) => (
                              <div 
                                key={g.id} 
                                className="flex flex-col sm:flex-row items-center gap-6 p-6 hover:bg-slate-50/30 transition-colors group"
                              >
                                
                                {/* Document Mini-Cover Graphic */}
                                <div className={`w-24 h-32 bg-gradient-to-br ${g.gradient} ${g.borderColor} rounded-xl border flex flex-col justify-between p-4 text-blue-900 font-mono text-[7px] select-none shrink-0 relative overflow-hidden shadow-sm group-hover:shadow-md transition-all`}>
                                  <div className="absolute top-0 right-0 w-8 h-8 bg-blue-200/10 rounded-bl-full pointer-events-none" />
                                  <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-blue-400/5 rounded-full blur-md pointer-events-none" />
                                  
                                  <div className="flex justify-between items-center text-[5.5px] text-blue-600/70 font-bold border-b border-blue-100 pb-1.5">
                                    <span>AETHERIS</span>
                                    <span className="bg-blue-100/80 px-1 py-0.5 rounded text-[5px] text-blue-700 font-extrabold">{g.type}</span>
                                  </div>

                                  <div className="my-3 space-y-1 flex-1 flex flex-col justify-center text-center">
                                    <span className="text-[7.5px] font-black tracking-tight leading-snug text-blue-950 uppercase font-sans">
                                      {g.title}
                                    </span>
                                    <span className="text-[5px] text-blue-500/80">blueprint documentation</span>
                                  </div>

                                  <div className="border-t border-blue-100 pt-1.5 flex justify-between items-center text-[5px] text-blue-400 font-bold">
                                    <span>v1.2 // 2026</span>
                                    <span>{g.size}</span>
                                  </div>
                                </div>

                                {/* Text content */}
                                <div className="flex-1 text-center sm:text-left space-y-2">
                                  <h4 className="text-base font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                                    {g.title}
                                  </h4>
                                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl font-medium">
                                    {g.desc}
                                  </p>
                                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-[10px] text-slate-400 font-bold pt-1">
                                    <div className="flex items-center space-x-1.5">
                                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                      <span>{g.date}</span>
                                    </div>
                                    <span className="text-slate-300">•</span>
                                    <span>PDF</span>
                                    <span className="text-slate-300">•</span>
                                    <span>{g.size}</span>
                                  </div>
                                </div>

                                {/* Download Button trigger */}
                                <button
                                  onClick={() => {
                                    setActiveGuide(g.title);
                                    setFormData(prev => ({ ...prev, guide: g.title }));
                                  }}
                                  className="w-12 h-12 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center shadow-sm active:scale-95 transition-all shrink-0 border border-blue-100/80 group-hover:scale-102"
                                  title="Download Guide"
                                >
                                  <Download className="w-5 h-5" />
                                </button>

                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </article>
                );
              })}
            </div>

          </main>

        </div>

      </div>

      {/* ================= BOTTOM CTA BANNER & GRADIENT SEAM SECTION ================= */}
      <section className="relative pt-24 pb-20 bg-gradient-to-b from-[#f8fafc] via-[#ebf2fa] to-[#1d3f75] overflow-hidden w-full border-t border-slate-200/40">
        
        {/* Subtle grid pattern overlay inside transition to enrich the design */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-60" />
        
        {/* Ambient glow in the transition area */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xl text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-blue-50/40 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
              {/* SVG Cabinet/Filing Graphic */}
              <div className="w-16 h-16 shrink-0 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-inner">
                <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-blue-600 fill-blue-50" fill="none" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2.5" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="3" y1="15" x2="21" y2="15" />
                  <circle cx="12" cy="6" r="1.5" className="fill-blue-600" />
                  <circle cx="12" cy="12" r="1.5" className="fill-blue-600" />
                  <circle cx="12" cy="18" r="1.5" className="fill-blue-600" />
                </svg>
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  Can't find what you're looking for?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-xl font-medium leading-relaxed">
                  Talk to our experts and we'll help you find the right architectural blueprints or regulatory resources for your system needs.
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => {
                setActiveGuide("Expert Architecture Consultation");
                setFormData(prev => ({ ...prev, guide: "Custom Architecture Spec Request" }));
              }}
              className="px-6 py-3.5 rounded-xl text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 transition-all flex items-center shrink-0 gap-2 shadow-lg shadow-blue-600/10 hover:scale-102 active:scale-98 relative z-10"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= DOWNLOAD FORM MODAL ================= */}
      <AnimatePresence>
        {activeGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveGuide(null)} 
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            
            {/* Modal card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-md p-8 rounded-2xl bg-white border border-slate-200 space-y-6 shadow-2xl z-10 text-left"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-slate-900 border-l-3 border-blue-600 pl-3">
                    Download Resource
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Submit your details to request access to the file.
                  </p>
                </div>
                <button 
                  onClick={() => setActiveGuide(null)}
                  className="text-slate-400 hover:text-slate-650 transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleDownloadSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono pl-0.5">Selected Guide</label>
                  <input 
                    type="text" 
                    readOnly
                    value={activeGuide}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-bold outline-none cursor-default"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono pl-0.5">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Elena Rostova"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs text-slate-900 outline-none placeholder-slate-400 transition-colors font-medium shadow-inner"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono pl-0.5">Corporate Email *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs text-slate-900 outline-none placeholder-slate-400 transition-colors font-medium shadow-inner"
                  />
                </div>

                <div className="flex items-center space-x-3 pt-3">
                  <button 
                    type="submit"
                    className="flex-1 py-3 rounded-xl font-extrabold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-all text-center shadow-md shadow-blue-600/10 uppercase tracking-wider"
                  >
                    Download PDF
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setActiveGuide(null)}
                    className="px-5 py-3 rounded-xl font-bold text-xs text-slate-500 bg-white border border-slate-200 hover:border-slate-350 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
