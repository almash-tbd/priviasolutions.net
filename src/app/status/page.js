"use client";

import { CheckCircle2, ShieldCheck, Activity } from "lucide-react";

export default function StatusPage() {
  const systems = [
    { name: "API Gateways", status: "Operational", uptime: "99.99%", latency: "42ms" },
    { name: "Core Ledgers & Databases", status: "Operational", uptime: "100%", latency: "12ms" },
    { name: "Multi-Cloud CDN", status: "Operational", uptime: "99.98%", latency: "15ms" },
    { name: "Release Pipelines", status: "Operational", uptime: "99.95%", latency: "30s build" }
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Reliability metrics
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          System Operational Status
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Monitor real-time system performance, cluster uptimes, database latencies, and active release pipelines.
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-2xl glass-panel max-w-3xl mx-auto border border-primary/20 space-y-6">
        <div className="flex items-center space-x-3 text-primary">
          <Activity className="w-6 h-6 animate-pulse" />
          <h2 className="text-lg font-bold text-slate-100">All Systems Operational</h2>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          Our global monitoring system tracks availability across AWS, GCP, and Azure clusters. No outages reported.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-xs font-black tracking-widest text-slate-500 uppercase px-3">
          Component Availability
        </h2>
        
        {systems.map((sys) => (
          <div key={sys.name} className="p-5 rounded-2xl glass-card border border-[#1e2038] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-bold text-slate-100">{sys.name}</span>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div>
                <span className="text-slate-500 mr-1.5">Status:</span>
                <span className="text-primary font-semibold">{sys.status}</span>
              </div>
              <div>
                <span className="text-slate-500 mr-1.5">Uptime:</span>
                <span className="text-slate-300 font-semibold">{sys.uptime}</span>
              </div>
              <div>
                <span className="text-slate-500 mr-1.5">Latency:</span>
                <span className="text-slate-300 font-semibold">{sys.latency}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
