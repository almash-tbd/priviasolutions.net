"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Send, CheckCircle2, Globe, Cpu, LineChart, Shield, ChevronRight } from "lucide-react";
import { careersData } from "@/data/siteData";

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState(careersData[0]?.id || "");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    jobId: careersData[0]?.id || "",
    cover: ""
  });

  const selectedJob = careersData.find(j => j.id === activeJob) || careersData[0];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.cover) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success(`Application for ${selectedJob.title} submitted successfully!`);
    setFormData({
      name: "",
      email: "",
      portfolio: "",
      jobId: careersData[0]?.id || "",
      cover: ""
    });
  };

  const handleJobSelect = (jobId) => {
    setActiveJob(jobId);
    setFormData(prev => ({ ...prev, jobId }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

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

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ================= HERO SECTION ================= */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Hero Details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 shadow-sm inline-block uppercase font-mono">
              CAREERS AT PRIVIA
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-outfit tracking-tight leading-[1.08]">
              Shape the Future of <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Cloud & Code</span>
            </h1>
            
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              We operate as a remote-first enterprise, building mission-critical platform architectures and tooling. Apply for an active opening below.
            </p>
          </div>

          {/* Hero 3D cloud illustration */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center h-[300px] relative">
            <svg viewBox="0 0 400 300" className="w-full h-full text-blue-500" fill="none">
              {/* Isometric Grid Base */}
              <g transform="translate(40, 60)">
                {/* Horizontal lines */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={`h-${i}`} x1="0" y1={i * 20} x2="300" y2={i * 20 - 100} stroke="rgba(37,99,235,0.06)" strokeWidth="1.2" />
                ))}
                {/* Vertical lines */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={`v-${i}`} x1={i * 42} y1="-100" x2={i * 42} y2="200" stroke="rgba(37,99,235,0.06)" strokeWidth="1.2" strokeDasharray="3 3" />
                ))}

                {/* Pedestal platform shadow */}
                <path d="M 100 130 L 190 75 L 280 130 L 190 185 Z" fill="rgba(37,99,235,0.05)" />
                {/* Pedestal 3D Base */}
                <path d="M 100 130 L 190 185 L 190 195 L 100 140 Z" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.2)" />
                <path d="M 280 130 L 190 185 L 190 195 L 280 140 Z" fill="rgba(37,99,235,0.25)" stroke="rgba(37,99,235,0.2)" />
                {/* Pedestal Surface */}
                <path d="M 100 130 L 190 75 L 280 130 L 190 185 Z" fill="white" stroke="rgba(37,99,235,0.15)" strokeWidth="1.5" />

                {/* Floating smaller cubes */}
                <g transform="translate(-20, -30)">
                  <path d="M 50 160 L 70 148 L 90 160 L 70 172 Z" fill="white" stroke="rgba(37,99,235,0.1)" />
                  <path d="M 50 160 L 70 172 L 70 180 L 50 168 Z" fill="rgba(37,99,235,0.1)" />
                  <path d="M 90 160 L 70 172 L 70 180 L 90 168 Z" fill="rgba(37,99,235,0.2)" />
                </g>
                <g transform="translate(180, -90)">
                  <path d="M 80 80 L 100 68 L 120 80 L 100 92 Z" fill="white" stroke="rgba(37,99,235,0.1)" />
                  <path d="M 80 80 L 100 92 L 100 100 L 80 88 Z" fill="rgba(37,99,235,0.1)" />
                  <path d="M 120 80 L 100 92 L 100 100 L 120 88 Z" fill="rgba(37,99,235,0.2)" />
                </g>

                {/* 3D Glowing Cloud Pedestal Stack */}
                <g transform="translate(0, -10)">
                  {/* Cloud Pedestal Shadow */}
                  <path d="M 120 120 L 190 80 L 260 120 L 190 160 Z" fill="rgba(37,99,235,0.06)" />
                  
                  {/* Glass Pedestal Layer 1 */}
                  <path d="M 130 115 L 190 80 L 250 115 L 190 150 Z" fill="rgba(255,255,255,0.8)" stroke="rgba(37,99,235,0.1)" />
                  <path d="M 130 115 L 190 150 L 190 155 L 130 120 Z" fill="rgba(37,99,235,0.1)" />
                  <path d="M 250 115 L 190 150 L 190 155 L 250 120 Z" fill="rgba(37,99,235,0.2)" />

                  {/* 3D Cloud Graphic */}
                  <g transform="translate(150, 45)" className="animate-float">
                    {/* Cloud Backing Shadow */}
                    <path d="M10 30 Q10 20 25 20 Q30 10 45 10 Q60 10 65 20 Q80 20 80 30 Q80 40 70 45 L20 45 Q10 45 10 30 Z" fill="rgba(37,99,235,0.08)" />
                    {/* Cloud Body Front */}
                    <path d="M10 28 Q10 18 25 18 Q30 8 45 8 Q60 8 65 18 Q80 18 80 28 Q80 38 70 43 H20 Q10 43 10 28 Z" fill="url(#cloudGrad)" stroke="rgba(37,99,235,0.2)" strokeWidth="1.5" />
                    {/* Privia Lambda Logo inside cloud */}
                    <path d="M40 33 L45 23 L50 33 M42 30 H48" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </g>

                {/* Floating Tech Icons */}
                <g transform="translate(20, -50)">
                  <circle cx="210" cy="50" r="12" fill="white" stroke="rgba(37,99,235,0.12)" className="shadow-sm" />
                  {/* File icon path */}
                  <path d="M207 45 H213 V55 H207 V45 Z M209 48 H211 M209 51 H211" stroke="rgb(37,99,235)" strokeWidth="1" />
                </g>
                <g transform="translate(-10, 40)">
                  <circle cx="60" cy="80" r="12" fill="white" stroke="rgba(37,99,235,0.12)" className="shadow-sm" />
                  {/* Key icon path */}
                  <path d="M57 80 A3 3 0 1 0 63 80 A3 3 0 1 0 57 80 Z M60 83 V85 H62" stroke="rgb(37,99,235)" strokeWidth="1" />
                </g>
                <g transform="translate(190, 80)">
                  <circle cx="80" cy="70" r="12" fill="white" stroke="rgba(37,99,235,0.12)" className="shadow-sm" />
                  {/* Lock icon path */}
                  <path d="M77 70 H83 V74 H77 V70 Z M78 70 V68 A2 2 0 1 1 82 70 V70" stroke="rgb(37,99,235)" strokeWidth="1" />
                </g>
              </g>

              {/* Gradients */}
              <defs>
                <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4bb8fa" />
                  <stop offset="50%" stopColor="#1591dc" />
                  <stop offset="100%" stopColor="#2c5ead" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 4 horizontal value propositions below */}
          <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200/80">
            <div className="flex items-center space-x-3.5 p-4 bg-white border border-slate-200/80 rounded-xl shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Globe className="w-4.5 h-4.5" />
              </div>
              <div className="text-left leading-tight">
                <h4 className="font-extrabold text-xs text-slate-900 tracking-tight">Remote First</h4>
                <p className="text-[10px] text-slate-500 font-bold">Work from anywhere</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3.5 p-4 bg-white border border-slate-200/80 rounded-xl shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Cpu className="w-4.5 h-4.5" />
              </div>
              <div className="text-left leading-tight">
                <h4 className="font-extrabold text-xs text-slate-900 tracking-tight">Impact Driven</h4>
                <p className="text-[10px] text-slate-500 font-bold">Build what matters</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 p-4 bg-white border border-slate-200/80 rounded-xl shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <LineChart className="w-4.5 h-4.5" />
              </div>
              <div className="text-left leading-tight">
                <h4 className="font-extrabold text-xs text-slate-900 tracking-tight">Growth Focused</h4>
                <p className="text-[10px] text-slate-500 font-bold">Learn. Share. Grow.</p>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 p-4 bg-white border border-slate-200/80 rounded-xl shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Shield className="w-4.5 h-4.5" />
              </div>
              <div className="text-left leading-tight">
                <h4 className="font-extrabold text-xs text-slate-900 tracking-tight">Security First</h4>
                <p className="text-[10px] text-slate-500 font-bold">Trusted by enterprise</p>
              </div>
            </div>
          </div>
        </motion.header>

        {/* ================= MAIN CONTENT WORKSPACE ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-10 items-start pt-10"
        >
          {/* ================= LEFT COLUMN: JOB LISTINGS ================= */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-xs font-black tracking-widest text-slate-550 uppercase font-mono pl-1">
                OPEN POSITIONS
              </h2>
              <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-2 py-0.5 rounded-full font-mono border border-blue-100">
                03
              </span>
            </div>

            <div className="space-y-4">
              {careersData.map((job) => {
                const isActive = activeJob === job.id;
                return (
                  <motion.button
                    variants={itemVariants}
                    key={job.id}
                    onClick={() => handleJobSelect(job.id)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all block relative ${
                      isActive
                        ? "bg-blue-50/20 border-blue-600 ring-2 ring-blue-600/5 shadow-md scale-[1.01]"
                        : "bg-white border-slate-200/85 hover:border-slate-400 hover:shadow-2xs"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">{job.title}</h3>
                        
                        <div className="flex flex-wrap items-center gap-4 text-[10px] text-slate-400 font-bold pt-1">
                          <span className="flex items-center">
                            <Cpu className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                            {job.department}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                            {job.type}
                          </span>
                        </div>
                        
                        <p className="text-xs text-slate-500 font-medium leading-relaxed pt-2">
                          {job.summary}
                        </p>
                      </div>

                      <div className="flex flex-col items-end justify-between h-full space-y-4 shrink-0">
                        <span className="px-2 py-0.5 rounded text-[8px] text-blue-600 bg-blue-50 border border-blue-100 font-extrabold uppercase tracking-wide">
                          ACTIVE
                        </span>
                        <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isActive ? "translate-x-1 text-blue-600" : ""}`} />
                      </div>
                    </div>
                  </motion.button>
                );
              })}

              {/* Card 4: Open Application */}
              <motion.div 
                variants={itemVariants}
                className="p-6 rounded-2xl bg-white border border-slate-200/85 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900 tracking-tight">Don't see the right role?</h4>
                    <p className="text-xs text-slate-500 font-medium">We're always looking for great talent. Send us your profile!</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    setActiveJob("custom-application");
                    toast.success("Ready for open application. Fill details in console.");
                  }}
                  className="px-5 py-2.5 bg-white border border-blue-600 hover:bg-blue-50 text-blue-600 text-xs font-extrabold rounded-xl transition-all flex items-center shrink-0 gap-1.5"
                >
                  Send Open Application
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE APPLICATION CONSOLE ================= */}
          <div className="lg:col-span-6">
            <motion.div 
              variants={itemVariants}
              className="rounded-2xl bg-white border border-slate-200/80 shadow-md overflow-hidden"
            >
              {/* Blue Header Banner */}
              <div className="px-6 py-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white flex items-center space-x-3.5 relative overflow-hidden">
                {/* Visual grid in panel header */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/10 relative z-10">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="text-left relative z-10">
                  <span className="text-[9px] font-black text-blue-200 uppercase tracking-widest block font-mono">APPLYING FOR</span>
                  <h3 className="text-base sm:text-lg font-black tracking-tight">{selectedJob.title}</h3>
                </div>
              </div>

              {/* Responsibilities Checklist */}
              <div className="p-8 space-y-6 text-left border-b border-slate-100">
                <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest font-mono">KEY RESPONSIBILITIES</h4>
                
                <ul className="space-y-3.5">
                  {(selectedJob.responsibilities || [
                    "Collaborate with advisory leads to match your talent to active project pools.",
                    "Demonstrate mastery of core engineering domains and CI/CD managers.",
                    "Support delivery frameworks under SLA benchmarks."
                  ]).map((resp, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-650 font-medium leading-relaxed">
                      <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form Input fields */}
              <form onSubmit={handleSubmit} className="p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-extrabold text-slate-650 pl-0.5">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Aarav Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs text-slate-900 outline-none transition-colors font-medium shadow-inner"
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-extrabold text-slate-650 pl-0.5">Email *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="aarav@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs text-slate-900 outline-none transition-colors font-medium shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-extrabold text-slate-650 pl-0.5">Portfolio / LinkedIn Link</label>
                  <input 
                    type="url" 
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://github.com/aarav"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs text-slate-900 outline-none transition-colors font-medium shadow-inner"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-extrabold text-slate-650 pl-0.5">Cover Letter & Pitch *</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.cover}
                    onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
                    placeholder="Tell us about a complex scaling problem you solved or a CI/CD stack you built..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs text-slate-900 outline-none resize-none transition-colors font-medium shadow-inner"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="flex items-center justify-center w-full py-3.5 rounded-xl font-extrabold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-all text-center shadow-lg shadow-blue-600/10 active:scale-98"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </button>
                </div>
              </form>

            </motion.div>
          </div>

        </motion.div>

      </div>
    </div>
  );
}
