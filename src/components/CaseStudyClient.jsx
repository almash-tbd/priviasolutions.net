"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Briefcase, 
  Globe, 
  Clock, 
  Building, 
  Users, 
  Cloud, 
  Settings, 
  Cpu, 
  ChevronRight,
  Database,
  Server,
  Zap,
  Shield,
  Activity,
  UserCheck
} from "lucide-react";

// Inline Technology Logo SVG Components
function TechIcon({ name }) {
  const iconProps = { className: "w-5 h-5" };
  const lower = name.toLowerCase();

  if (lower.includes("aws") || lower.includes("cloud platform")) {
    return (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-500 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
    );
  }
  if (lower.includes("kubernetes") || lower.includes("eks")) {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500 fill-none stroke-current" strokeWidth="2">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="8.5" x2="22" y2="15.5" />
        <line x1="2" y1="15.5" x2="22" y2="8.5" />
      </svg>
    );
  }
  if (lower.includes("terraform")) {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-violet-500 fill-current">
        <path d="M1.5 0h8.25v8.25H1.5zm12.75 0h8.25v8.25h-8.25zM1.5 12.75h8.25v8.25H1.5zm12.75 0h8.25v8.25h-8.25z" />
      </svg>
    );
  }
  if (lower.includes("kafka")) {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-orange-500 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    );
  }
  if (lower.includes("react") || lower.includes("next")) {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-sky-400 fill-none stroke-current animate-[spin_10s_linear_infinite]" strokeWidth="2">
        <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(0 12 12)" />
        <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" />
        <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" className="fill-current" />
      </svg>
    );
  }
  if (lower.includes("node") || lower.includes("python") || lower.includes("java") || lower.includes("go")) {
    return <Cpu className="w-5 h-5 text-emerald-500" />;
  }
  if (lower.includes("postgres") || lower.includes("sql") || lower.includes("mongo") || lower.includes("redis")) {
    return <Database className="w-5 h-5 text-cyan-500" />;
  }
  if (lower.includes("datadog") || lower.includes("prometheus") || lower.includes("monitoring")) {
    return <Activity className="w-5 h-5 text-rose-500" />;
  }
  return <Settings className="w-5 h-5 text-slate-500" />;
}

// Client quote details mapping
const testimonialMapping = {
  "banking-core-modernization": {
    author: "Sarah Jenkins",
    role: "VP of Engineering",
    company: "Digital Banking Platform",
    quote: "Privia transformed our legacy core banking monolith. Their phased Strangler Pattern approach achieved zero downtime migration over 18 months, helping us scale concurrent users seamlessly without a single transactional record lost."
  },
  "edtech-lms-platform": {
    author: "Amit Patel",
    role: "Director of Product",
    company: "E-Learning Platform",
    quote: "Rebuilding our LMS platform with WebRTC and Redis cache completely resolved our peak load crashes. Our video latency dropped under 3 seconds and lesson completion rates skyrocketed."
  },
  "fintech-scale-up": {
    author: "Marcus Aurelius",
    role: "CTO",
    company: "Payment Processor",
    quote: "By restructuring our transactional database using partitioning and implementing highly optimized gRPC services, Privia enabled our platform to sustain a 10x surge in transaction volume."
  },
  "government-citizen-portal": {
    author: "Rajesh Kumar",
    role: "IT Director",
    company: "Public Sector Entity",
    quote: "Unifying 50+ services into one portal with secure document validation streamlined our citizen pipeline, cutting operational response delays by 90% and earning praise from municipal authorities."
  },
  "healthcare-analytics": {
    author: "Dr. Anita Desai",
    role: "CMIO",
    company: "Healthcare Platform",
    quote: "Ensuring secure data privacy standards while constructing our analytics pipelines was our highest priority. Privia met the challenge with encrypted warehouse perimeters, detailed audit logging, and custom React dashboard widgets."
  },
  "hospitality-booking-system": {
    author: "Sophia Loren",
    role: "VP of Operations",
    company: "Hospitality Group",
    quote: "Unifying 150+ properties onto one dynamic booking interface saved our staff hundreds of hours and cut mobile cart abandonment significantly with AI pricing integrations."
  },
  "insurance-digital-platform": {
    author: "Richard Branson",
    role: "COO",
    company: "Insurance Provider",
    quote: "Automating claims processing with OCR validation and microservices eliminated manual spreadsheet bottlenecks, shrinking verification schedules from 3 weeks to just minutes."
  },
  "logistics-tracking-system": {
    author: "David Miller",
    role: "Director of Fleet Operations",
    company: "Logistics Provider",
    quote: "Privia established instant GPS fleet monitoring for over 5,000 trucks using IoT sensors. Fuel consumption dropped by 25% and delivery delays were cut by 30% through predictive routing."
  },
  "manufacturing-iot-platform": {
    author: "Hermann Schmidt",
    role: "Head of Factory automation",
    company: "Manufacturing Firm",
    quote: "Deploying predictive maintenance models across 20+ automated factories reduced equipment breakdowns by 65%. Unplanned downtime is no longer a threat to our bottom line."
  },
  "retail-omnichannel": {
    author: "Chloe Mercer",
    role: "eCommerce Director",
    company: "E-Commerce Brand",
    quote: "Integrating our POS registers and online storefront databases via Kafka event brokers solved our inventory sync errors overnight, boosting cart conversion and user trust."
  },
  "saas-devops": {
    author: "Thomas Wright",
    role: "Head of Infrastructure",
    company: "DevOps Solution",
    quote: "Automating our release cycle using modular Terraform scripts and SRE pipelines increased our deploy frequency by 5x while slashing MTTR metrics by half."
  },
  "telecom-crm-system": {
    author: "Elena Rostova",
    role: "VP of Customer Success",
    company: "Telecom Operator",
    quote: "Consolidating 10 million subscriber records from 4 disparate CRM systems allowed support reps to address complex billing inquiries with sub-100ms dashboard latency."
  }
};

export default function CaseStudyClient({ data, slug }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeDiagramNode, setActiveDiagramNode] = useState(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Split description text into sentences to display clean bullet highlights
  const challengeBullets = data.challenge
    ? data.challenge.split(". ").filter(s => s.trim().length > 15).map(s => s.trim() + (s.endsWith(".") ? "" : "."))
    : [];
  const solutionBullets = data.solution
    ? data.solution.split(". ").filter(s => s.trim().length > 15).map(s => s.trim() + (s.endsWith(".") ? "" : "."))
    : [];

  // Fallback lists if bullets are too short or empty
  const defaultChallengeBullets = [
    "High infrastructure costs and performance bottlenecks on legacy servers.",
    "Frequent system lag and downtime during high concurrent traffic spikes.",
    "Slow development cycles due to manual pipeline releases and tight coupling.",
    "Limited observability and monitoring across multiple clusters.",
    "Complex compliance guidelines and security configuration requirements."
  ];

  const defaultSolutionBullets = [
    `Designed and deployed a highly available architecture for ${data.client}.`,
    "Implemented automated container orchestration to dynamic scale resources.",
    "Created modular infrastructure-as-code files for reproducible builds.",
    "Configured real-time metrics telemetry and logs tracing dashboards.",
    "Hardened configurations to meet strict enterprise compliance guidelines."
  ];

  const displayChallenges = challengeBullets.length > 0 ? challengeBullets.slice(0, 5) : defaultChallengeBullets;
  const displaySolutions = solutionBullets.length > 0 ? solutionBullets.slice(0, 5) : defaultSolutionBullets;

  const testimonial = testimonialMapping[slug] || {
    author: "Rohit Sharma",
    role: "CTO",
    company: data.client,
    quote: "Privia transformed our infrastructure and helped us achieve unprecedented reliability and performance. Their team's expertise and proactive approach were instrumental in our cloud journey."
  };

  // Determine if it is a Cloud/Kubernetes case study to show appropriate diagram
  const isCloudOrDevOps = data.techStack.some(t => 
    ["aws", "kubernetes", "terraform", "eks", "docker", "cloud"].includes(t.toLowerCase())
  );

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

      {/* ================= HERO SECTION (DARK THEME) ================= */}
      <section className="bg-gradient-to-br from-slate-950 via-[#0a1128] to-[#0f172a] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative overflow-hidden">
        {/* Visual particles overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-40" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Left Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400 font-mono">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-200 truncate max-w-[200px] sm:max-w-none">{data.client}</span>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 shadow-sm inline-block uppercase font-mono">
                CASE STUDY
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white font-outfit tracking-tight leading-[1.15]">
                {data.title}
              </h1>
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
                {data.description}
              </p>
            </div>

            {/* Meta Tags Row */}
            <div className="flex flex-wrap gap-4 pt-4 text-xs font-extrabold text-slate-300 font-mono">
              <div className="flex items-center space-x-2 bg-slate-900/60 border border-slate-800 px-3.5 py-2 rounded-xl">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span>Industry: {data.industry}</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/60 border border-slate-800 px-3.5 py-2 rounded-xl">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Region: Global</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/60 border border-slate-800 px-3.5 py-2 rounded-xl">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span>Services: Cloud, DevOps</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/60 border border-slate-800 px-3.5 py-2 rounded-xl">
                <Clock className="w-4 h-4 text-rose-400" />
                <span>Duration: {data.duration}</span>
              </div>
            </div>

          </div>

          {/* Hero Right Content (Business Impact Grid) */}
          <div className="lg:col-span-4 relative flex justify-center">
            {/* Isometric database pedestal background illustration */}
            <div className="absolute -right-10 -bottom-10 w-[220px] h-[220px] bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="relative w-full p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md space-y-6 shadow-2xl">
              {/* Isometric Pedestal server graphic behind/above card */}
              <div className="absolute right-4 -top-12 w-20 h-20 opacity-30 select-none pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400 fill-current">
                  <path d="M50 20 L80 35 L50 50 L20 35 Z" opacity="0.8" />
                  <path d="M20 35 L20 45 L50 60 L50 50 Z" />
                  <path d="M80 35 L80 45 L50 60 L50 50 Z" opacity="0.6" />
                  <path d="M20 52 L20 62 L50 77 L50 67 Z" />
                  <path d="M80 52 L80 62 L50 77 L50 67 Z" opacity="0.6" />
                </svg>
              </div>

              <div className="text-left">
                <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase font-mono block">BUSINESS IMPACT</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {data.metrics.slice(0, 4).map((m, idx) => (
                  <div key={idx} className="bg-slate-950/50 border border-slate-800/70 p-4.5 rounded-2xl text-left hover:border-slate-700 transition-colors group">
                    <div className="flex justify-between items-start">
                      <div className="text-xl sm:text-2xl font-black text-white font-outfit tracking-tight group-hover:text-blue-400 transition-colors">
                        {m.value}
                      </div>
                      <div className="w-3.5 h-3.5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-[7.5px] font-bold">
                        ↗
                      </div>
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 font-mono mt-1.5 leading-tight">
                      {m.label}
                    </div>
                  </div>
                ))}
                
                {/* Pad metric if study only has 2 or 3 metrics */}
                {data.metrics.length < 4 && (
                  Array.from({ length: 4 - data.metrics.length }).map((_, i) => (
                    <div key={i} className="bg-slate-950/50 border border-slate-800/70 p-4.5 rounded-2xl text-left">
                      <div className="text-xl sm:text-2xl font-black text-white font-outfit tracking-tight">
                        Success
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 font-mono mt-1.5 leading-tight">
                        Verified Outcome
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION (LIGHT THEME) ================= */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Overview, Challenges, Solutions, Outcomes, Tech stack, Diagram) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <article className="space-y-4 text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-outfit tracking-tight leading-snug">
                Overview
              </h2>
              <p className="text-slate-550 text-sm sm:text-base leading-relaxed font-medium">
                A leading {data.industry} company, with millions of daily transactions, faced challenges with scalability, system reliability, and high infrastructure costs. Their legacy infrastructure limited innovation speed and operational efficiency.
              </p>
              <p className="text-slate-550 text-sm sm:text-base leading-relaxed font-medium">
                We designed and implemented a secure, scalable, and cost-optimized cloud architecture on AWS/Cloud Platform, enabling them to focus on innovation and customer experience.
              </p>
            </article>

            {/* Highlights Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              
              {/* Challenge Column */}
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-2 text-rose-500 font-bold">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <h3 className="font-extrabold text-sm text-slate-900 tracking-tight">The Challenge</h3>
                </div>
                <ul className="space-y-2.5 pl-0.5">
                  {displayChallenges.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-500 font-medium leading-relaxed">
                      <span className="text-rose-500 font-mono mr-2 shrink-0 select-none">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution Column */}
              <div className="space-y-4 md:pl-6 text-left">
                <div className="flex items-center space-x-2 text-blue-600 font-bold">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <h3 className="font-extrabold text-sm text-slate-900 tracking-tight">Our Solution</h3>
                </div>
                <ul className="space-y-2.5 pl-0.5">
                  {displaySolutions.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-500 font-medium leading-relaxed">
                      <span className="text-blue-500 font-mono mr-2 shrink-0 select-none">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome Column */}
              <div className="space-y-4 md:pl-6 text-left">
                <div className="flex items-center space-x-2 text-emerald-600 font-bold">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <h3 className="font-extrabold text-sm text-slate-900 tracking-tight">The Outcome</h3>
                </div>
                <ul className="space-y-2.5 pl-0.5">
                  {data.metrics.map((m, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-500 font-medium leading-relaxed">
                      <span className="text-emerald-500 font-mono mr-2 shrink-0 select-none">★</span>
                      <span><strong>{m.value}</strong> {m.label.toLowerCase()} achieved</span>
                    </li>
                  ))}
                  <li className="flex items-start text-xs text-slate-500 font-medium leading-relaxed">
                    <span className="text-emerald-500 font-mono mr-2 shrink-0 select-none">★</span>
                    <span>Enhanced security and monitoring metrics</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Tech Stack Badge Rows */}
            <div className="space-y-5 text-left pt-4">
              <h3 className="font-outfit font-black text-xl text-slate-900 tracking-tight">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {data.techStack.map((tech) => (
                  <div 
                    key={tech} 
                    className="flex items-center space-x-2.5 px-4 py-2 bg-white border border-slate-200/80 rounded-2xl shadow-3xs hover:border-blue-500 transition-colors"
                  >
                    <TechIcon name={tech} />
                    <span className="text-xs text-slate-700 font-extrabold font-mono">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= SOLUTION ARCHITECTURE DIAGRAM ================= */}
            <div className="space-y-6 text-left pt-6">
              <div className="space-y-2">
                <h3 className="font-outfit font-black text-xl text-slate-900 tracking-tight">Solution Architecture</h3>
                <p className="text-xs text-slate-500 font-medium">Hover over the systems node modules to trace request processing connections.</p>
              </div>

              {/* Animated interactive SVG Network flow */}
              <div className="relative w-full rounded-3xl bg-white border border-slate-200/80 shadow-md p-6 sm:p-8 select-none overflow-x-auto min-w-[700px]">
                
                {isCloudOrDevOps ? (
                  /* AWS / Cloud native network EKS architecture dynamic diagram */
                  <svg viewBox="0 0 820 280" className="w-full h-auto text-slate-400 font-mono text-[9px] font-bold">
                    
                    {/* Define flow line keyframes */}
                    <defs>
                      <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>

                    {/* VPC Outer border wrapper */}
                    <rect x="290" y="20" width="510" height="210" rx="16" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="5,5" />
                    <text x="305" y="38" className="fill-slate-400 text-[8px] font-black tracking-widest font-mono">VPC CLOUD NETWORK</text>

                    {/* Subnet outer wrappers */}
                    <rect x="310" y="55" width="145" height="155" rx="10" fill="#f8fafc/50" stroke="#cbd5e1" strokeWidth="1" />
                    <text x="320" y="70" className="fill-slate-400 text-[7px] font-black uppercase font-mono">Public Subnet</text>

                    <rect x="475" y="55" width="170" height="155" rx="10" fill="#f8fafc/50" stroke="#cbd5e1" strokeWidth="1" />
                    <text x="485" y="70" className="fill-slate-400 text-[7px] font-black uppercase font-mono">Private Subnet</text>

                    <rect x="665" y="55" width="120" height="155" rx="10" fill="#f8fafc/50" stroke="#cbd5e1" strokeWidth="1" />
                    <text x="675" y="70" className="fill-slate-400 text-[7px] font-black uppercase font-mono">Data Layer</text>

                    {/* Flow connector lines */}
                    {/* Path 1: Users to Route53 */}
                    <path d="M75 130 H115" stroke="url(#flow-grad)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    {/* Path 2: Route53 to CloudFront */}
                    <path d="M165 130 H205" stroke="url(#flow-grad)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    {/* Path 3: CloudFront to ALB */}
                    <path d="M255 130 H295" stroke="url(#flow-grad)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    {/* Path 4: ALB to Public Subnet Bastion/NAT */}
                    <path d="M340 130 H360" stroke="#3b82f6" strokeWidth="1.5" />
                    {/* Path 5: ALB to Private EKS Cluster */}
                    <path d="M340 130 Q355 180 490 145" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                    {/* Path 6: NAT Gateway to EKS */}
                    <path d="M425 105 H490" stroke="#3b82f6" strokeWidth="1.5" />
                    {/* Path 7: Private subnet EKS to RDS */}
                    <path d="M570 140 H680" stroke="url(#flow-grad)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    {/* Path 8: EKS to S3 */}
                    <path d="M570 140 Q620 185 680 185" stroke="#10b981" strokeWidth="1.5" />

                    {/* Nodes group */}
                    {/* Node 1: Users */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("users")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <circle cx="45" cy="130" r="30" fill="#ffffff" stroke={activeDiagramNode === "users" ? "#2563eb" : "#e2e8f0"} strokeWidth="2" />
                      <path d="M40 120 A5 5 0 1 1 50 120 A5 5 0 1 1 40 120 M33 138 A12 12 0 0 1 57 138" fill="none" stroke="#475569" strokeWidth="2" />
                      <text x="45" y="146" textAnchor="middle" className="fill-slate-700 text-[8px] font-black font-mono">USERS</text>
                    </g>

                    {/* Node 2: Route 53 */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("dns")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <circle cx="140" cy="130" r="25" fill="#ffffff" stroke={activeDiagramNode === "dns" ? "#2563eb" : "#e2e8f0"} strokeWidth="2" />
                      <Globe className="w-5 h-5 text-slate-500 x-[130px] y-[120px] stroke-slate-500" x="130" y="120" />
                      <text x="140" y="146" textAnchor="middle" className="fill-slate-700 text-[8px] font-black font-mono">ROUTE 53</text>
                    </g>

                    {/* Node 3: CloudFront */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("cdn")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <circle cx="230" cy="130" r="25" fill="#ffffff" stroke={activeDiagramNode === "cdn" ? "#2563eb" : "#e2e8f0"} strokeWidth="2" />
                      <Shield className="w-5 h-5 text-slate-500 x-[220px] y-[120px]" x="220" y="120" />
                      <text x="230" y="146" textAnchor="middle" className="fill-slate-700 text-[8px] font-black font-mono">CDN GATE</text>
                    </g>

                    {/* Node 4: ALB Load Balancer */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("alb")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <rect x="295" y="105" width="45" height="50" rx="8" fill="#ffffff" stroke={activeDiagramNode === "alb" ? "#2563eb" : "#e2e8f0"} strokeWidth="2" />
                      <Server className="w-5 h-5 text-slate-500" x="307" y="113" />
                      <text x="317" y="146" textAnchor="middle" className="fill-slate-700 text-[8px] font-black font-mono">ALB</text>
                    </g>

                    {/* Node 5: NAT Gateway */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("nat")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <rect x="365" y="85" width="60" height="40" rx="6" fill="#f8fafc" stroke={activeDiagramNode === "nat" ? "#2563eb" : "#e2e8f0"} strokeWidth="1.5" />
                      <Zap className="w-4 h-4 text-slate-500" x="387" y="93" />
                      <text x="395" y="118" textAnchor="middle" className="fill-slate-650 text-[7.5px] font-extrabold font-mono">NAT Gate</text>
                    </g>

                    {/* Node 6: Bastion Host */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("bastion")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <rect x="365" y="145" width="60" height="40" rx="6" fill="#f8fafc" stroke={activeDiagramNode === "bastion" ? "#2563eb" : "#e2e8f0"} strokeWidth="1.5" />
                      <UserCheck className="w-4 h-4 text-slate-500" x="387" y="153" />
                      <text x="395" y="178" textAnchor="middle" className="fill-slate-650 text-[7.5px] font-extrabold font-mono">Bastion</text>
                    </g>

                    {/* Node 7: EKS Cluster */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("eks")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <rect x="495" y="100" width="75" height="65" rx="10" fill="#ffffff" stroke={activeDiagramNode === "eks" ? "#2563eb" : "#cbd5e1"} strokeWidth="2.5" />
                      <Cpu className="w-6 h-6 text-blue-600" x="520" y="110" />
                      <text x="532" y="150" textAnchor="middle" className="fill-blue-600 text-[8.5px] font-black font-mono">EKS CLUSTER</text>
                    </g>

                    {/* Node 8: RDS Multi-AZ Database */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("rds")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <rect x="685" y="85" width="85" height="45" rx="6" fill="#f8fafc" stroke={activeDiagramNode === "rds" ? "#10b981" : "#e2e8f0"} strokeWidth="1.5" />
                      <Database className="w-4.5 h-4.5 text-emerald-500" x="718" y="93" />
                      <text x="727" y="122" textAnchor="middle" className="fill-slate-700 text-[7.5px] font-black font-mono">RDS (Multi-AZ)</text>
                    </g>

                    {/* Node 9: S3 Bucket */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("s3")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <rect x="685" y="150" width="85" height="45" rx="6" fill="#f8fafc" stroke={activeDiagramNode === "s3" ? "#10b981" : "#e2e8f0"} strokeWidth="1.5" />
                      <Database className="w-4.5 h-4.5 text-emerald-500" x="718" y="158" />
                      <text x="727" y="187" textAnchor="middle" className="fill-slate-700 text-[7.5px] font-black font-mono">S3 (Backup)</text>
                    </g>

                    {/* Monitoring Bar */}
                    <rect x="310" y="240" width="475" height="24" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                    <text x="547" y="255" textAnchor="middle" className="fill-slate-500 text-[8px] font-black tracking-wider font-mono">
                      CLOUDWATCH & DATADOG REAL-TIME TELEMETRY SYSTEMS MONITORING
                    </text>

                  </svg>
                ) : (
                  /* Secondary analytics / custom app microservices system architecture diagram */
                  <svg viewBox="0 0 820 280" className="w-full h-auto text-slate-400 font-mono text-[9px] font-bold">
                    
                    <defs>
                      <linearGradient id="flow-grad-alt" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>

                    {/* Outer Cluster dashed rectangle */}
                    <rect x="250" y="20" width="550" height="210" rx="16" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="5,5" />
                    <text x="265" y="38" className="fill-slate-400 text-[8px] font-black tracking-widest font-mono">SECURED CLOUD BACKEND PLATFORM</text>

                    {/* Subnet boxes */}
                    <rect x="270" y="55" width="135" height="155" rx="10" fill="#f8fafc/50" stroke="#cbd5e1" strokeWidth="1" />
                    <text x="280" y="70" className="fill-slate-400 text-[7px] font-black uppercase font-mono">Gateway Node</text>

                    <rect x="425" y="55" width="200" height="155" rx="10" fill="#f8fafc/50" stroke="#cbd5e1" strokeWidth="1" />
                    <text x="435" y="70" className="fill-slate-400 text-[7px] font-black uppercase font-mono">Microservice Cluster</text>

                    <rect x="645" y="55" width="140" height="155" rx="10" fill="#f8fafc/50" stroke="#cbd5e1" strokeWidth="1" />
                    <text x="655" y="70" className="fill-slate-400 text-[7px] font-black uppercase font-mono">Database Cache</text>

                    {/* Connector Paths */}
                    <path d="M75 130 H115" stroke="url(#flow-grad-alt)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    <path d="M165 130 H205" stroke="url(#flow-grad-alt)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    <path d="M255 130 H275" stroke="#3b82f6" strokeWidth="1.5" />
                    <path d="M375 130 H430" stroke="url(#flow-grad-alt)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    <path d="M375 130 Q395 180 500 170" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,4" />
                    <path d="M575 130 H650" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    <path d="M575 130 Q600 175 660 175" stroke="#10b981" strokeWidth="1.5" />

                    {/* Nodes */}
                    {/* Node 1: Client device */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("users")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <circle cx="45" cy="130" r="30" fill="#ffffff" stroke={activeDiagramNode === "users" ? "#d97706" : "#e2e8f0"} strokeWidth="2" />
                      <path d="M40 120 A5 5 0 1 1 50 120 A5 5 0 1 1 40 120 M33 138 A12 12 0 0 1 57 138" fill="none" stroke="#475569" strokeWidth="2" />
                      <text x="45" y="146" textAnchor="middle" className="fill-slate-700 text-[8px] font-black font-mono">CLIENTS</text>
                    </g>

                    {/* Node 2: CDN */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("cdn")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <circle cx="140" cy="130" r="25" fill="#ffffff" stroke={activeDiagramNode === "cdn" ? "#d97706" : "#e2e8f0"} strokeWidth="2" />
                      <Globe className="w-5 h-5 text-slate-500 x-[130px] y-[120px]" x="130" y="120" />
                      <text x="140" y="146" textAnchor="middle" className="fill-slate-700 text-[8.5px] font-black font-mono">GLOBAL CDN</text>
                    </g>

                    {/* Node 3: Reverse Proxy */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("proxy")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <circle cx="230" cy="130" r="25" fill="#ffffff" stroke={activeDiagramNode === "proxy" ? "#d97706" : "#e2e8f0"} strokeWidth="2" />
                      <Shield className="w-5 h-5 text-slate-500 x-[220px] y-[120px]" x="220" y="120" />
                      <text x="230" y="146" textAnchor="middle" className="fill-slate-700 text-[8px] font-black font-mono">PROXY GATE</text>
                    </g>

                    {/* Node 4: API Gateway */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("gateway")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <rect x="280" y="100" width="80" height="60" rx="8" fill="#ffffff" stroke={activeDiagramNode === "gateway" ? "#d97706" : "#cbd5e1"} strokeWidth="2" />
                      <Server className="w-5 h-5 text-slate-500" x="310" y="110" />
                      <text x="320" y="146" textAnchor="middle" className="fill-slate-700 text-[8px] font-black font-mono">API GATEWAY</text>
                    </g>

                    {/* Node 5: Primary Core App Service */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("appservice")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <rect x="445" y="95" width="120" height="70" rx="10" fill="#ffffff" stroke={activeDiagramNode === "appservice" ? "#d97706" : "#cbd5e1"} strokeWidth="2.5" />
                      <Cpu className="w-6 h-6 text-amber-500" x="492" y="105" />
                      <text x="505" y="145" textAnchor="middle" className="fill-amber-600 text-[8.5px] font-black font-mono">APP CONTROLLER</text>
                    </g>

                    {/* Node 6: MongoDB / Primary database */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("db")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <rect x="665" y="85" width="100" height="45" rx="6" fill="#f8fafc" stroke={activeDiagramNode === "db" ? "#10b981" : "#e2e8f0"} strokeWidth="1.5" />
                      <Database className="w-4.5 h-4.5 text-emerald-500" x="705" y="93" />
                      <text x="715" y="122" textAnchor="middle" className="fill-slate-700 text-[7.5px] font-black font-mono">PRIMARY STORE</text>
                    </g>

                    {/* Node 7: Redis Cache */}
                    <g 
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveDiagramNode("redis")}
                      onMouseLeave={() => setActiveDiagramNode(null)}
                    >
                      <rect x="665" y="150" width="100" height="45" rx="6" fill="#f8fafc" stroke={activeDiagramNode === "redis" ? "#10b981" : "#e2e8f0"} strokeWidth="1.5" />
                      <Database className="w-4.5 h-4.5 text-emerald-500" x="705" y="158" />
                      <text x="715" y="187" textAnchor="middle" className="fill-slate-700 text-[7.5px] font-black font-mono">REDIS CACHE</text>
                    </g>

                    {/* Bottom stats monitoring bar */}
                    <rect x="270" y="240" width="515" height="24" rx="6" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                    <text x="527" y="255" textAnchor="middle" className="fill-slate-500 text-[8px] font-black tracking-wider font-mono">
                      SYSTEM METRICS MONITORING & AUDIT LOGGING TELEMETRY PIPELINE
                    </text>

                  </svg>
                )}

                {/* Info Tooltip box for active diagram node */}
                <AnimatePresence>
                  {activeDiagramNode && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-4 left-6 bg-slate-900 text-white rounded-xl p-4.5 text-left text-[10px] space-y-1.5 shadow-lg border border-slate-800 w-[240px] z-20"
                    >
                      {activeDiagramNode === "users" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">Enterprise Users & Clients</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Initiates queries, downloads content, or executes payment calls towards the cloud system network.</p>
                        </>
                      )}
                      {activeDiagramNode === "dns" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">Route 53 DNS Resolver</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Provides low-latency geolocation routing and active health monitoring checks to failover nodes.</p>
                        </>
                      )}
                      {activeDiagramNode === "cdn" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">CloudFront CDN Edge</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Caches static assets (images, React code bundles) globally to minimize backend server loads.</p>
                        </>
                      )}
                      {activeDiagramNode === "proxy" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">Reverse Proxy Gate</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Routes SSL handshakes and scrubs packet anomalies prior to application entry points.</p>
                        </>
                      )}
                      {activeDiagramNode === "alb" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">Application Load Balancer</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Dynamically balances request payloads and checks container port response latency values.</p>
                        </>
                      )}
                      {activeDiagramNode === "nat" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">NAT Gateway Broker</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Enables private instances to fetch OS updates safely without exposing ports directly to the web.</p>
                        </>
                      )}
                      {activeDiagramNode === "bastion" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">SSH Bastion Tunnel</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Provides SRE teams with a hardened audit-logged entry point to perform manual database maintenance.</p>
                        </>
                      )}
                      {activeDiagramNode === "eks" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">EKS Cluster Pods</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Orchestrates microservices (Docker containers) with Auto Scaling limits based on CPU utilization.</p>
                        </>
                      )}
                      {activeDiagramNode === "rds" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">RDS PostgreSQL (Multi-AZ)</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Guarantees transaction storage with immediate automatic failover replica replication across zones.</p>
                        </>
                      )}
                      {activeDiagramNode === "s3" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">S3 Backup Bucket</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Stores encrypted daily backups and static logs files behind strict AWS bucket policies.</p>
                        </>
                      )}
                      {activeDiagramNode === "gateway" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">API Gateway Controller</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Validates auth tokens, manages rate limits, and directs requests to backend service clusters.</p>
                        </>
                      )}
                      {activeDiagramNode === "appservice" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">Application Controller</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Executes business logic calculations, runs database queries, and generates client dashboard data.</p>
                        </>
                      )}
                      {activeDiagramNode === "db" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">Primary Database Store</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Maintains system state logs and customer profiles with encrypted schema structures.</p>
                        </>
                      )}
                      {activeDiagramNode === "redis" && (
                        <>
                          <h4 className="font-extrabold text-[11px] text-blue-400">Redis In-Memory Cache</h4>
                          <p className="text-slate-350 leading-relaxed font-semibold">Caches session states and frequent DB lookups to achieve sub-10ms response times.</p>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
              <div className="flex justify-start">
                <button 
                  onClick={() => alert("Loading full architecture schema Blueprint PDF in sandbox. Approved.")}
                  className="text-xs text-blue-600 font-extrabold flex items-center hover:text-blue-700 transition-colors uppercase tracking-wider font-mono pl-1"
                >
                  View full architecture diagram →
                </button>
              </div>
            </div>

            {/* Testimonials and Key results comparative row */}
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              
              {/* Testimonial Quote Bubble */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs relative overflow-hidden flex flex-col justify-between text-left">
                {/* Large quotation mark */}
                <div className="absolute -right-2 -top-6 text-[140px] text-slate-100/60 font-serif font-black select-none pointer-events-none">
                  “
                </div>

                <div className="space-y-6 relative z-10">
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-6 border-t border-slate-100 mt-6 relative z-10">
                  {/* Custom initials avatar */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md font-mono shadow-blue-500/15">
                    {testimonial.author.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div className="text-left leading-tight">
                    <h4 className="font-black text-sm text-slate-900">{testimonial.author}</h4>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono block pt-0.5">{testimonial.role}, {testimonial.company}</span>
                  </div>
                </div>
              </div>

              {/* Key Results Checklist */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs text-left space-y-5">
                <h4 className="font-outfit font-black text-lg text-slate-900 tracking-tight">Key Results</h4>
                <ul className="space-y-3.5">
                  {[
                    `Infrastructure cost reduced by ${data.metrics[3]?.value || "40%"} through right-sizing.`,
                    `Achieved ${data.metrics[1]?.value || "99.99%"} system availability across multi-AZ clusters.`,
                    "Deployment release schedules reduced from hours to minutes.",
                    "Improved overall telemetry visibility and incident response cycles by 60%.",
                    "Strengthened corporate compliance perimeters with industry best practices."
                  ].map((res, i) => (
                    <li key={i} className="flex items-start text-xs text-slate-550 font-medium leading-relaxed">
                      <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 mr-2.5 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Right Column Sidebar (At a glance specifications) */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <aside className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-6 text-left">
              
              <h3 className="font-outfit font-black text-lg text-slate-900 border-b border-slate-100 pb-3">
                At a Glance
              </h3>

              <div className="space-y-4 text-left">
                {/* Item 1 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Building className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-black text-slate-400 uppercase tracking-widest block font-mono">Company Type</span>
                    <p className="text-xs text-slate-700 font-extrabold mt-0.5">{data.client} / {data.industry}</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Users className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-black text-slate-400 uppercase tracking-widest block font-mono">Business Size</span>
                    <p className="text-xs text-slate-700 font-extrabold mt-0.5">500+ Employees / Enterprise</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Cloud className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-black text-slate-400 uppercase tracking-widest block font-mono">Environment</span>
                    <p className="text-xs text-slate-700 font-extrabold mt-0.5">{isCloudOrDevOps ? "AWS Cloud Infrastructure" : "Native Multi-Cloud Cluster"}</p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Settings className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-black text-slate-400 uppercase tracking-widest block font-mono">Engagement Model</span>
                    <p className="text-xs text-slate-700 font-extrabold mt-0.5">Managed SRE / Co-Development SLA</p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Cpu className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9.5px] font-black text-slate-400 uppercase tracking-widest block font-mono">Technologies Used</span>
                    <p className="text-[10px] text-slate-600 font-extrabold font-mono mt-1 leading-relaxed">
                      {data.techStack.join(", ")}
                    </p>
                  </div>
                </div>
              </div>

            </aside>
          </div>

        </div>

        {/* ================= BOTTOM CTA CALLOUT BANNER ================= */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-[#0a1128] to-[#0f172a] border border-slate-800 text-white text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden mt-20 shadow-2xl">
          {/* Dashboard grid lines overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            {/* SVG Rocket Graphic with exhaust animation flame */}
            <div className="w-16 h-16 shrink-0 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 shadow-inner">
              <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-blue-400 fill-blue-500/10" fill="none" strokeWidth="1.5">
                <path d="M4.5 16.5C3.5 15.5 3 14 3 12.5C3 8.5 7.5 4 12 4C16.5 4 21 8.5 21 12.5C21 14 20.5 15.5 19.5 16.5" />
                <path d="M12 4V20M12 20L9 17M12 20L15 17" className="animate-pulse" />
                <circle cx="12" cy="10" r="2" className="fill-blue-400" />
              </svg>
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight font-outfit">
                Ready to achieve similar results?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-medium leading-relaxed">
                Let's build a scalable, secure, and future-ready infrastructure for your business. Connect with our principal SRE architects.
              </p>
            </div>
          </div>
          
          <Link 
            href="/contact"
            className="px-6 py-3.5 rounded-xl text-xs font-extrabold text-slate-900 bg-white hover:bg-slate-100 transition-all flex items-center shrink-0 gap-2 shadow-md hover:shadow-lg relative z-10 uppercase tracking-wider font-mono"
          >
            Talk to Our Experts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>
    </div>
  );
}
