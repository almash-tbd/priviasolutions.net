"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, Cpu, Layers, 
  Settings, Shield, Lock, Terminal, Activity, GitBranch,
  Server, HelpCircle, ChevronRight, Zap, RefreshCw, BarChart3, Minus,
  Rocket, Users, Globe, Eye, Bell, Cloud, LayoutGrid, TrendingUp
} from "lucide-react";
import { getTechLogo } from "@/components/TechLogos";

export default function ProductsHub() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeTestimonial, setActiveTestimonial] = useState(1);

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const products = [
    {
      slug: "icedeploy",
      name: "IceDeploy",
      tagline: "Deployment Automation Made Simple",
      desc: "GitOps-based deployment automation for Kubernetes and cloud platforms. Deploy confidently with automated rollbacks, canary releases, and comprehensive observability.",
      features: [
        "GitOps Workflow",
        "Automated Rollbacks",
        "Canary Deployments",
        "Multi-Cloud Support",
        "Slack/Teams Integration",
        "Enterprise Ready"
      ],
      link: "/products/icedeploy",
      badge: "Popular",
      icon: Cpu,
      color: "from-emerald-500 to-teal-600"
    },
    {
      slug: "iceinsight",
      name: "IceInsight",
      tagline: "Analytics & Observability Platform",
      desc: "Unified analytics platform for application monitoring, business intelligence, and data visualization. Connect all your data sources and get actionable insights.",
      features: [
        "Unified Dashboard",
        "Custom Reports",
        "Real-time Alerts",
        "Data Governance",
        "Shared Dashboards",
        "API Access"
      ],
      link: "/products/iceinsight",
      badge: "Analytics Hub",
      icon: Layers,
      color: "from-blue-500 to-[#1591dc]"
    }
  ];

  const comparisonRows = [
    { 
      capability: "GitOps Automation", 
      icon: Terminal, 
      icedeploy: true, 
      iceinsight: false 
    },
    { 
      capability: "Deployment Metrics", 
      icon: BarChart3, 
      icedeploy: true, 
      iceinsight: true 
    },
    { 
      capability: "Full Observability", 
      icon: Eye, 
      icedeploy: false, 
      iceinsight: true 
    },
    { 
      capability: "Advanced BI", 
      icon: TrendingUp, 
      icedeploy: false, 
      iceinsight: true 
    },
    { 
      capability: "Deployment Alerts", 
      icon: Bell, 
      icedeploy: true, 
      iceinsight: true 
    },
    { 
      capability: "Custom Alerts", 
      icon: Settings, 
      icedeploy: true, 
      iceinsight: true 
    },
    { 
      capability: "Multi-Cloud", 
      icon: Cloud, 
      icedeploy: true, 
      iceinsight: true 
    },
    { 
      capability: "Team Collaboration", 
      icon: Users, 
      icedeploy: "Approval Workflows", 
      iceinsight: "Shared Dashboards" 
    }
  ];

  const targetTeams = [
    {
      title: "Startups & Scale-ups",
      desc: "Move fast without breaking things. Ship features quickly while maintaining stability with automated deployments.",
      badge: "Speed & Agility",
      icon: Rocket,
      iconBg: "bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] ring-4 ring-blue-500/10",
      badgeStyle: "bg-blue-50 text-blue-600 border border-blue-200/40",
      borderClass: "border-l-blue-500"
    },
    {
      title: "Enterprise Teams",
      desc: "Scale your operations with enterprise-grade security, compliance, and support across multiple environments.",
      badge: "Scale & Control",
      icon: Users,
      iconBg: "bg-gradient-to-tr from-purple-600 to-indigo-400 text-white shadow-[0_0_20px_rgba(147,51,234,0.35)] ring-4 ring-purple-500/10",
      badgeStyle: "bg-purple-50 text-purple-600 border border-purple-200/40",
      borderClass: "border-l-purple-500"
    },
    {
      title: "Regulated Industries",
      desc: "Meet compliance requirements with audit logs, RBAC, and data governance.",
      badge: "Security First",
      icon: Shield,
      iconBg: "bg-gradient-to-tr from-teal-600 to-emerald-400 text-white shadow-[0_0_20px_rgba(20,184,166,0.35)] ring-4 ring-teal-500/10",
      badgeStyle: "bg-teal-50 text-teal-600 border border-teal-200/40",
      borderClass: "border-l-teal-500"
    },
    {
      title: "Global Operations",
      desc: "Deploy to multiple regions and clouds. Monitor performance worldwide with unified dashboards and alerts.",
      badge: "High Availability",
      icon: Globe,
      iconBg: "bg-gradient-to-tr from-[#1591dc] to-[#4BB8FA] text-white shadow-[0_0_20px_rgba(21,145,220,0.35)] ring-4 ring-cyan-500/10",
      badgeStyle: "bg-sky-50 text-sky-600 border border-sky-200/40",
      borderClass: "border-l-sky-400"
    }
  ];

  const integrations = [
    "Kubernetes", "Multi-Cloud ECS", "Container Apps", 
    "GitHub", "GitLab", "Bitbucket", 
    "Slack", "Teams", "Datadog", "Elasticsearch"
  ];

  const testimonials = [
    {
      quote: "IceDeploy reduced our deployment times from hours to minutes, and the automated rollbacks give us peace of mind.",
      author: "Aditya Malhotra",
      role: "DevOps Lead",
      initials: "AM",
      highlightedQuote: (
        <span>
          IceDeploy reduced our deployment times <span className="text-[#2C5EAD] font-bold">from hours to minutes</span>, and the automated rollbacks give us peace of mind.
        </span>
      )
    },
    {
      quote: "Using both IceDeploy and IceInsight together has given our team complete delivery control. We deploy 50+ times daily with zero stress.",
      author: "Kiran Patel",
      role: "VP Engineering",
      initials: "KP",
      highlightedQuote: (
        <span>
          Using both IceDeploy and IceInsight together has given our team complete delivery control. We deploy <span className="text-[#2C5EAD] font-bold">50+ times daily</span> with zero stress.
        </span>
      )
    },
    {
      quote: "IceInsight's dashboards let our business teams construct reports instantly without requesting SQL queries from developers.",
      author: "Ananya Patel",
      role: "Product Director",
      initials: "AP",
      highlightedQuote: (
        <span>
          IceInsight&apos;s dashboards let our business teams <span className="text-[#2C5EAD] font-bold">construct reports instantly</span> without requesting SQL queries from developers.
        </span>
      )
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
            <Layers className="w-3.5 h-3.5 text-[#1591DC]" />
            <span>Aetheris Platform Products</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white max-w-4xl">
            Powerful Tools <br />
            <span className="bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
              for Modern Teams
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Ship faster, observe better, scale confidently with our suite of developer tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center font-mono pt-4 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
            >
              Get Product Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a 
              href="#comparison" 
              className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
            >
              Compare Products
            </a>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CARDS */}
      <section className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#cbdcf8] py-24 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {products.map((prod) => {
              const Icon = prod.icon;
              return (
                <div 
                  key={prod.slug}
                  className="p-8 rounded-3xl bg-white border-2 border-slate-200/80 shadow-[0_15px_45px_rgba(10,12,22,0.05)] hover:shadow-[0_20px_50px_rgba(44,94,173,0.15)] hover:border-[#2C5EAD]/30 transition-all duration-300 flex flex-col justify-between h-full hover:scale-[1.01] text-slate-900 group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#2C5EAD]/10 text-[#2C5EAD] border border-[#2C5EAD]/20 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[9px] font-black tracking-widest text-[#2c5ead] bg-[#2C5EAD]/10 border border-[#2C5EAD]/20 uppercase">
                        {prod.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-2xl font-black text-slate-900 group-hover:text-[#2C5EAD] transition-colors leading-tight">
                        {prod.name}
                      </h2>
                      <p className="text-sm text-[#1591DC] font-extrabold">
                        {prod.tagline}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed pt-2">
                        {prod.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                      <h3 className="text-[10px] font-black tracking-widest text-slate-450 uppercase mb-3">Key Features</h3>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {prod.features.map((feat) => (
                          <li key={feat} className="flex items-center text-xs text-slate-650">
                            <CheckCircle2 className="w-4 h-4 text-[#2C5EAD] mr-2 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100 mt-8">
                    <Link 
                      href={prod.link}
                      className="flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-md shadow-primary/10"
                    >
                      Explore {prod.name} Features
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT COMPARISON */}
      <section id="comparison" className="relative bg-gradient-to-b from-[#cbdcf8] via-[#c6d8f6] to-[#d1e1fc] py-24 border-b border-slate-200/60 overflow-hidden text-slate-950">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Decorative Mockup Visuals on Left and Right of Header */}
          <div className="hidden lg:block absolute -left-12 -top-6 w-48 h-32 bg-white rounded-xl shadow-[0_10px_30px_rgba(44,94,173,0.06)] border border-slate-200/80 p-3 overflow-hidden z-10">
            <div className="flex gap-1 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <div className="flex items-end justify-around h-20 pt-4 border-t border-slate-100">
              <div className="w-3.5 h-8 bg-blue-100 rounded-t-sm" />
              <div className="w-3.5 h-12 bg-blue-200/80 rounded-t-sm" />
              <div className="w-3.5 h-16 bg-blue-500 rounded-t-sm" />
              <div className="w-3.5 h-10 bg-blue-100 rounded-t-sm" />
              <div className="w-3.5 h-14 bg-blue-300 rounded-t-sm" />
            </div>
          </div>

          <div className="hidden lg:block absolute -right-12 -top-6 w-48 h-32 bg-white rounded-xl shadow-[0_10px_30px_rgba(44,94,173,0.06)] border border-slate-200/80 p-3 overflow-hidden z-10">
            <div className="flex gap-1 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-100 h-20">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="h-1.5 w-16 bg-slate-200 rounded-full" />
                <div className="h-1.5 w-12 bg-slate-150 rounded-full" />
                <div className="h-1.5 w-14 bg-slate-150 rounded-full" />
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold tracking-widest text-[#2C5EAD] uppercase font-mono flex items-center justify-center gap-2 mb-2">
              <span>— • —</span>
              <span>PRODUCT COMPARISON</span>
              <span>— • —</span>
            </div>
            <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">Compare Our Products</h3>
            <p className="text-sm text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
              Choose the right tool for your needs, or use both together for complete coverage.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_15px_45px_rgba(44,94,173,0.06)]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200">
                  <th className="p-6 text-xs font-bold tracking-widest text-[#2C5EAD] uppercase w-[30%]">CAPABILITY</th>
                  <th className="p-6 text-center w-[35%] border-l border-slate-100">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 22 7 22 17 12 22 2 17 2 7 12 2" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </div>
                        <span className="text-lg font-black text-slate-900">IceDeploy</span>
                      </div>
                      <span className="text-[9px] font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-200/40 px-4 py-1 rounded-full uppercase">
                        DevOps Automation Platform
                      </span>
                    </div>
                  </th>
                  <th className="p-6 text-center w-[35%] border-l border-slate-100">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                        </div>
                        <span className="text-lg font-black text-slate-900">IceInsight</span>
                      </div>
                      <span className="text-[9px] font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-200/40 px-4 py-1 rounded-full uppercase">
                        Observability & Analytics
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => {
                  const RowIcon = row.icon;
                  return (
                    <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                      {/* Capability Name with small icon */}
                      <td className="p-5 text-sm font-semibold text-slate-800 flex items-center">
                        <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                          <RowIcon className="w-5 h-5" />
                        </div>
                        <span>{row.capability}</span>
                      </td>
                      
                      {/* IceDeploy Value */}
                      <td className="p-5 text-center text-xs font-semibold border-l border-slate-100">
                        {typeof row.icedeploy === "boolean" ? (
                          row.icedeploy ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100/30">
                              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                          ) : (
                            <span className="text-purple-600 font-black text-xl">—</span>
                          )
                        ) : (
                          <Link href="/products/icedeploy" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-200/50 text-[10px] font-bold text-blue-600 hover:bg-blue-100 transition-colors shadow-sm">
                            <Users className="w-3.5 h-3.5" />
                            {row.icedeploy}
                          </Link>
                        )}
                      </td>
                      
                      {/* IceInsight Value */}
                      <td className="p-5 text-center text-xs font-semibold border-l border-slate-100">
                        {typeof row.iceinsight === "boolean" ? (
                          row.iceinsight ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100/30">
                              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                          ) : (
                            <span className="text-purple-600 font-black text-xl">—</span>
                          )
                        ) : (
                          <Link href="/products/iceinsight" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-200/50 text-[10px] font-bold text-blue-600 hover:bg-blue-100 transition-colors shadow-sm">
                            <LayoutGrid className="w-3.5 h-3.5" />
                            {row.iceinsight}
                          </Link>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. BUILT FOR EVERY TEAM */}
      <section className="relative bg-gradient-to-b from-[#e0f2fe] via-[#eff6ff] to-[#f8fafc] py-24 border-b border-slate-200/60 overflow-hidden text-slate-900">
        {/* Background Decorative Rings/Dots matching Image 1 */}
        <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
          <svg viewBox="0 0 1440 600" className="w-full h-full object-cover">
            <circle cx="100" cy="100" r="200" fill="none" stroke="rgba(44,94,173,0.15)" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="100" cy="100" r="350" fill="none" stroke="rgba(44,94,173,0.08)" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="1340" cy="500" r="250" fill="none" stroke="rgba(44,94,173,0.12)" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="1340" cy="500" r="400" fill="none" stroke="rgba(44,94,173,0.06)" strokeWidth="1.5" strokeDasharray="4 6" />
            <path d="M 0,300 Q 360,100 720,300 T 1440,300" fill="none" stroke="rgba(44,94,173,0.08)" strokeWidth="1.5" strokeDasharray="5 5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-blue-600 font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              <span>TEAM::SOLUTIONS</span>
            </div>
            <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950 font-sans">
              Built for <span className="underline decoration-[#2C5EAD] decoration-wavy underline-offset-8 decoration-2">Every Team</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-500 font-medium max-w-lg mx-auto leading-relaxed">From startups to enterprises, our products scale with your needs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {targetTeams.map((team, idx) => {
              const Icon = team.icon;
              return (
                <motion.div 
                  key={team.title}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`bg-white border-y border-r border-slate-200 border-l-[5px] ${team.borderClass} shadow-[0_15px_35px_rgba(44,94,173,0.06)] hover:shadow-[0_25px_55px_rgba(44,94,173,0.18)] hover:border-blue-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative group overflow-hidden`}
                >
                  {/* Left Icon */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center flex-shrink-0 ${team.iconBg}`}>
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 space-y-3 text-center sm:text-left pb-8 sm:pb-0">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold font-sans uppercase tracking-wider ${team.badgeStyle}`}>
                      {team.badge}
                    </span>
                    
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{team.title}</h4>
                    
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-md">
                      {team.desc}
                    </p>
                  </div>

                  {/* Bottom Right Arrow */}
                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 shadow-sm flex items-center justify-center text-slate-500 group-hover:bg-[#2C5EAD] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INTEGRATIONS & TESTIMONIALS */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#d6e5fb] py-20 border-b border-black/5 text-slate-950 overflow-hidden">
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
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">integration::ecosystem</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Seamless Integrations</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Connect with your existing tools and workflows.
            </p>
          </div>

          <div className="relative w-full overflow-hidden py-4 select-none">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#cddbf7] to-transparent z-10 pointer-events-none" />
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
              {[...integrations, ...integrations, ...integrations].map((item, idx) => (
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
          
          <div className="text-center mt-6 mb-16">
            <p className="text-xs text-slate-500 font-mono">Plus 100+ more integrations via REST API and webhooks.</p>
          </div>

          {/* Reviews Carousel matching Image 3 */}
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
          <div className="bg-white border border-slate-200/80 shadow-[0_15px_35px_rgba(44,94,173,0.06)] rounded-full px-6 sm:px-12 py-5 flex flex-wrap justify-around items-center gap-6 max-w-4xl mx-auto mt-12 mb-12 relative z-10">
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

          {/* Need a Custom Solution Overlay */}
          <div className="mt-16 max-w-4xl mx-auto p-8 rounded-3xl bg-[#05070f] text-white border border-[#2C5EAD]/30 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.03),transparent_60%)]" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-lg font-extrabold text-white">Need a Custom Solution?</h4>
                <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                  Our enterprise plans include custom features, dedicated support, and white-labeling options. Talk with our solutions architecture division.
                </p>
              </div>
              <Link href="/contact" className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all shadow-md shadow-primary/10 flex-shrink-0">
                Contact Enterprise Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#d6e5fb] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative border-t border-slate-100">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Ready to Try Our Products?
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Start your free consultation. No credit card required. Build, ship, scale, and monitor your entire development pipeline with Aetheris systems.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Start Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
