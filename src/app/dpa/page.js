"use client";

import { Database } from "lucide-react";

export default function DPAPage() {
  return (
    <div className="relative min-h-[85vh] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#edf5fd] to-[#dceaf7] overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 grid-pattern opacity-[0.4] pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto">
        
        {/* Document Header Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#2c5ead]/10 shadow-xl shadow-primary/5 mb-8 space-y-4">
          <span className="inline-flex items-center text-xs font-black tracking-widest text-[#2c5ead] uppercase bg-[#c4e2f5]/50 px-3.5 py-1.5 rounded-full border border-[#2c5ead]/20">
            LEGAL DOCUMENTATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight flex items-center gap-3">
            <Database className="w-8 h-8 sm:w-10 sm:h-10 text-[#1591DC] flex-shrink-0" />
            Data Processing Addendum
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-mono">Last updated: May 25, 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#2c5ead]/10 shadow-xl shadow-primary/5 space-y-8 text-slate-700 leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              1. Scope & Applicability
            </h2>
            <p className="text-slate-600 pl-3.5">
              This DPA applies when our customer data transfers involve personal data processing regulated by applicable privacy laws.
            </p>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              2. Processing Standards
            </h2>
            <p className="text-slate-600 pl-3.5">
              Privia Solutions shall process personal data only on documented instructions from the client, including with respect to transfers of personal data to third-party processors.
            </p>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              3. Security Audits
            </h2>
            <p className="text-slate-600 pl-3.5">
              We implement technical safeguards to ensure a level of security appropriate to the risk. The DPA outline guarantees client access to audit report summaries.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
