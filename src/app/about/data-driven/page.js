"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, BarChart2, Database, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function DataDrivenPage() {
  return (
    <div className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#edf5fd] to-[#dceaf7] overflow-hidden text-left">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-pattern opacity-[0.3] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <Link 
          href="/about"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to About
        </Link>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#2c5ead]/10 shadow-xl shadow-primary/5 space-y-4"
        >
          <span className="inline-flex items-center text-xs font-black tracking-widest text-[#2c5ead] uppercase bg-[#c4e2f5]/50 px-3.5 py-1.5 rounded-full border border-[#2c5ead]/20 font-mono">
            ENGINEERING PRINCIPLE 03
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight flex items-center gap-3 font-outfit">
            Data Driven Decision Making
          </h1>
          <p className="text-slate-550 text-sm sm:text-base leading-relaxed font-semibold">
            We leverage analytics, logging, and performance telemetry to make informed engineering and hosting optimizations.
          </p>
        </motion.div>

        {/* Detailed Explanation Section */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#2c5ead]/10 shadow-xl shadow-primary/5 space-y-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block" />
              Empirical Optimization
            </h2>
            <p className="text-slate-655 text-sm leading-relaxed font-medium">
              We do not optimize based on guesswork. At Privia Solutions, every architectural iteration and code change is informed by empirical evidence. By integrating robust logging structures, APM trace tools, and custom dashboard metrics, we analyze exactly how systems behave in production.
            </p>
            <p className="text-slate-655 text-sm leading-relaxed font-medium">
              This metrics-driven approach ensures we focus our engineering efforts on code bottlenecks that matter most. We monitor database transaction times, network request payloads, CPU thresholds, and cache hit ratios to keep systems running at maximum efficiency.
            </p>

            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2 pt-4">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block" />
              Observability Practices
            </h2>
            <div className="space-y-4">
              {[
                { title: "APM Tracing", desc: "Granular request tracing using modern Application Performance Monitoring (APM) tools." },
                { title: "Automated Log Aggregation", desc: "Centralized logging platforms ensuring quick trace diagnostics for support incidents." },
                { title: "Telemetry Dashboards", desc: "Real-time query speed, database health, and server-side CPU utilization reporting." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h4 className="font-extrabold text-sm text-slate-900 tracking-tight">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Metrics/CTA Column */}
          <div className="md:col-span-4 space-y-6">
            {/* Highlights Card */}
            <div className="bg-gradient-to-br from-[#1d3f75] to-[#2C5EAD] rounded-3xl p-6 border border-white/10 text-white space-y-4 shadow-xl">
              <h3 className="text-base font-black font-outfit tracking-tight flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-amber-400" />
                System Analytics
              </h3>
              <div className="divide-y divide-white/10 text-left">
                {[
                  { value: "APM Tracing", label: "Baseline tracking standard" },
                  { value: "< 50ms", label: "Ideal database search" },
                  { value: "24/7", label: "Alert configuration standard" }
                ].map((stat, idx) => (
                  <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                    <div className="text-xl font-black font-outfit">{stat.value}</div>
                    <div className="text-[10px] font-bold text-slate-300 font-mono uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button Link */}
            <Link 
              href="/contact"
              className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider font-mono shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
            >
              Analyze Your System <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
