"use client";

import { Database, ShieldCheck, CheckSquare, Bell } from "lucide-react";

export default function DPAPage() {
  return (
    <div className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#edf5fd] to-[#dceaf7] overflow-hidden text-left">
      
      {/* Background patterns */}
      <div className="absolute inset-0 grid-pattern opacity-[0.3] pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Document Header Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#2c5ead]/10 shadow-xl shadow-primary/5 mb-8 space-y-4">
          <span className="inline-flex items-center text-xs font-black tracking-widest text-[#2c5ead] uppercase bg-[#c4e2f5]/50 px-3.5 py-1.5 rounded-full border border-[#2c5ead]/20 font-mono">
            LEGAL DOCUMENTATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight flex items-center gap-3 font-outfit">
            <Database className="w-8 h-8 sm:w-10 sm:h-10 text-[#1591DC] flex-shrink-0" />
            Data Processing Addendum (DPA)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-mono">Last updated: June 05, 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#2c5ead]/10 shadow-xl shadow-primary/5 space-y-8 text-slate-700 leading-relaxed text-sm">
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              1. Purpose & Core Scope
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              This Data Processing Addendum ("DPA") is integrated into the general Terms of Service and applies to all agreements where Privia Solutions acts as a <strong>Data Processor</strong> on behalf of our clients (the <strong>Data Controller</strong>).
            </p>
            <p className="text-slate-655 font-medium pl-3.5">
              This DPA ensures our joint processing operations remain compliant with the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and standard international transfer regulations.
            </p>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              2. Controller & Processor Roles
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              The contract defines roles and instructions as follows:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-slate-655 font-medium">
              <li><strong>Instructions:</strong> Privia Solutions processes personal data solely on written instructions from the Data Controller, including with respect to transfers of personal data to standard cloud-hosting subprocessors.</li>
              <li><strong>Personnel:</strong> All staff members, solutions architects, and operations leads handling controller database tables are subject to strict legal confidentiality agreements.</li>
              <li><strong>Rights Cooperation:</strong> The Processor will implement technical tools to assist the Controller in responding to data subject access or deletion requests.</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              3. Authorized Subprocessors
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              The Controller grants general authorization to the Processor to engage sub-processors (such as cloud hosting, DB replication, or transactional mail hosts) under these conditions:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-slate-655 font-medium">
              <li>The Processor maintains an updated list of authorized subprocessors.</li>
              <li>The Processor provides the Controller with a 15-day notification window before adding new subprocessors, allowing the Controller to object on reasonable data protection grounds.</li>
              <li>Contracts with subprocessors bind them to equivalent security controls as those outlined in this DPA.</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              4. Technical & Organizational Measures (TOMs)
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              We implement the following Technical and Organizational Measures to guarantee data integrity:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pl-3.5">
              {[
                { title: "Physical Isolation", desc: "Logical separation of database shards and multi-tenant profiles." },
                { title: "Audit Verification", desc: "Providing SOC 2 audit summary reports to confirm architecture parameters." },
                { title: "Threat Detection", desc: "Forced firewalls, active intrusion prevention systems, and log alerts." },
                { title: "Backup Schedules", desc: "Hourly encrypted snapshot volumes stored across multi-regions." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2 items-start border border-slate-100 p-3 rounded-2xl bg-slate-50/50">
                  <ShieldCheck className="w-4 h-4 text-[#1591DC] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-xs text-slate-900">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              5. Breach Notification Schedule
            </h2>
            <p className="text-slate-655 font-medium pl-3.5 flex items-start gap-2 bg-rose-50 border border-rose-100 p-4 rounded-2xl text-xs">
              <Bell className="w-4 h-4 text-rose-500 shrink-0 mt-0.5 animate-bounce" />
              <span>
                <strong>Incidents:</strong> Privia Solutions will notify the Data Controller in writing within <strong>72 hours</strong> of confirming any unauthorized access, accidental exposure, or compromise of Controller personal data. We will provide detailed reports on the affected scopes, diagnostic analysis, and mitigation steps taken.
              </span>
            </p>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              6. Data Erasure & Return
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              Within 30 calendar days of contract termination, the Controller may instruct the Processor to either:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-slate-655 font-medium">
              <li>Securely return all database entries and account records in a structured JSON or CSV format.</li>
              <li>Securely delete all copies of Controller personal data, overwriting storage disks in accordance with standard cryptographic cleanup guidelines.</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}
