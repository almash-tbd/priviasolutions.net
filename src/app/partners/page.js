"use client";

import Link from "next/link";
import { Users, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export default function PartnersPage() {
  const partners = [
    { name: "Cloud Services Alliance", type: "Infrastructure Partner", desc: "Co-implementing multi-region failovers, compliance networks, and auto-scaling setups." },
    { name: "Global Security Group", type: "Auditing Partner", desc: "Collaborates on corporate security audits and zero-trust perimeter testing." },
    { name: "Database Engineering Labs", type: "Core Database Partner", desc: "Co-designs low-latency cache modules and transactional ledgers under heavy loads." }
  ];

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 text-slate-800">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 shadow-sm inline-block uppercase font-mono">
          Ecosystem
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-outfit tracking-tight leading-tight">
          Partners & Tech Alliance
        </h1>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
          We collaborate with cloud providers and compliance security organizations to implement production environments.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6 text-left">
        {partners.map((p) => (
          <div key={p.name} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-blue-50/20 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">{p.name}</h3>
              <p className="text-[10px] text-blue-600 font-extrabold uppercase tracking-wider font-mono">{p.type}</p>
              <p className="text-xs text-slate-500 font-medium leading-relaxed pt-1">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-md text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[240px] h-[240px] bg-blue-50/30 rounded-full blur-[80px] pointer-events-none" />
        
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-outfit tracking-tight relative z-10">
          Interested in joining our partner network?
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl mx-auto font-medium relative z-10">
          Contact our alliance team to discuss co-delivering software systems or security audits.
        </p>
        <div className="relative z-10 pt-2">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-extrabold text-white bg-blue-600 hover:bg-blue-700 transition-all text-sm shadow-lg shadow-blue-600/10 hover:scale-102"
          >
            Connect With Alliance Team
            <ArrowRight className="w-4.5 h-4.5 ml-2" />
          </Link>
        </div>
      </div>

    </div>
  );
}
