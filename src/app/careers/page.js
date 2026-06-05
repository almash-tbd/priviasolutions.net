"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Clock, ArrowRight, CheckCircle2, Globe, Cpu, LineChart, Shield, ChevronRight } from "lucide-react";
import { careersData } from "@/data/siteData";

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState(careersData[0]?.id || "");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const selectedJob = careersData.find(j => j.id === activeJob) || careersData[0];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleJobSelect = (jobId) => {
    setActiveJob(activeJob === jobId ? "" : jobId);
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

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num.toString();
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
          className="flex flex-col items-center justify-center text-center space-y-6"
        >
          <span className="text-xs font-black tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 shadow-sm inline-block uppercase font-mono">
            CAREERS AT PRIVIA
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-outfit tracking-tight leading-[1.08]">
            Shape the Future of <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Cloud & Code</span>
          </h1>
          
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl font-medium mx-auto">
            We operate as a remote-first enterprise, building mission-critical platform architectures and tooling. Apply for an active opening below.
          </p>

          {/* 4 horizontal value propositions below */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200/80 w-full mt-6">
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
          className="max-w-4xl mx-auto pt-10 space-y-6"
        >
          <div className="flex items-center space-x-3 mb-2">
            <h2 className="text-xs font-black tracking-widest text-slate-555 uppercase font-mono pl-1">
              OPEN POSITIONS
            </h2>
            <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-2 py-0.5 rounded-full font-mono border border-blue-100">
              {formatNumber(careersData.length)}
            </span>
          </div>

          <div className="space-y-6">
            {careersData.map((job) => {
              const isActive = activeJob === job.id;
              return (
                <div key={job.id} className="space-y-4">
                  <motion.button
                    variants={itemVariants}
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
                        <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isActive ? "translate-x-1 rotate-90 text-blue-600" : ""}`} />
                      </div>
                    </div>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="rounded-2xl bg-white border border-slate-200 shadow-md mt-2 overflow-hidden">
                          {/* Blue Header Banner */}
                          <div className="px-6 py-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white flex items-center space-x-3.5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />

                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/10 relative z-10">
                              <Briefcase className="w-4 h-4" />
                            </div>
                            <div className="text-left relative z-10">
                              <span className="text-[8px] font-black text-blue-200 uppercase tracking-widest block font-mono">ROLE PROFILE</span>
                              <h3 className="text-sm font-black tracking-tight">{job.title} Details</h3>
                            </div>
                          </div>

                          {/* Responsibilities Checklist */}
                          <div className="p-6 sm:p-8 space-y-6 text-left border-b border-slate-100">
                            <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest font-mono">KEY RESPONSIBILITIES</h4>
                            <ul className="space-y-3.5">
                              {(job.responsibilities || []).map((resp, idx) => (
                                <li key={idx} className="flex items-start text-xs text-slate-650 font-medium leading-relaxed">
                                  <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2.5 shrink-0 mt-0.5" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements Checklist */}
                          <div className="p-6 sm:p-8 space-y-6 text-left border-b border-slate-100 bg-slate-50/30">
                            <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest font-mono">QUALIFICATIONS & REQUIREMENTS</h4>
                            <ul className="space-y-3.5">
                              {(job.requirements || []).map((req, idx) => (
                                <li key={idx} className="flex items-start text-xs text-slate-650 font-medium leading-relaxed">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Email application CTA */}
                          <div className="p-6 sm:p-8 space-y-4 text-left bg-white">
                            <div className="space-y-1.5">
                              <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest font-mono">HOW TO APPLY</h4>
                              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                Please submit your resume, cover letter details, and links to your portfolio or GitHub profiles by clicking the button below or writing to us directly.
                              </p>
                            </div>
                            <div className="pt-2">
                              <a 
                                href={`mailto:info.priviasolutions.net?subject=Application for ${job.title}`}
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl font-extrabold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-all text-center shadow-lg shadow-blue-600/10 active:scale-98"
                              >
                                Apply for this Position
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
                  <p className="text-xs text-slate-555 font-medium">We're always looking for great talent. Send us your profile!</p>
                </div>
              </div>
              
              <a 
                href="mailto:info.priviasolutions.net?subject=Open Application for Careers at Privia"
                className="px-5 py-2.5 bg-white border border-blue-600 hover:bg-blue-50 text-blue-600 text-xs font-extrabold rounded-xl transition-all flex items-center shrink-0 gap-1.5"
              >
                Send Open Application
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
