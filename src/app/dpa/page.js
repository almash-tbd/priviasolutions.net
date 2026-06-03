"use client";

export default function DPAPage() {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Legal
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Data Processing Addendum (DPA)
        </h1>
        <p className="text-xs text-slate-500">Last updated: May 25, 2026</p>
      </div>

      <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-6 pt-4 border-t border-[#1e2038]/40">
        <h2 className="text-lg font-bold text-slate-100">1. Scope & Applicability</h2>
        <p>
          This DPA applies when our customer data transfers involve personal data processing regulated by applicable privacy laws.
        </p>

        <h2 className="text-lg font-bold text-slate-100">2. Processing Standards</h2>
        <p>
          Aetheris Systems shall process personal data only on documented instructions from the client, including with respect to transfers of personal data to third-party processors.
        </p>

        <h2 className="text-lg font-bold text-slate-100">3. Security Audits</h2>
        <p>
          We implement technical safeguards to ensure a level of security appropriate to the risk. The DPA outline guarantees client access to audit report summaries.
        </p>
      </div>

    </div>
  );
}
