"use client";

import { ShieldCheck, CheckCircle, Mail, Globe, Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#edf5fd] to-[#dceaf7] overflow-hidden text-left">
      
      {/* Background patterns */}
      <div className="absolute inset-0 grid-pattern opacity-[0.3] pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Document Header Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#2c5ead]/10 shadow-xl shadow-primary/5 space-y-4">
          <span className="inline-flex items-center text-xs font-black tracking-widest text-[#2c5ead] uppercase bg-[#c4e2f5]/50 px-3.5 py-1.5 rounded-full border border-[#2c5ead]/20 font-mono">
            LEGAL DOCUMENTATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight flex items-center gap-3 font-outfit">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#1591DC] flex-shrink-0" />
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-mono">Last updated: June 05, 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#2c5ead]/10 shadow-xl shadow-primary/5 space-y-8 text-slate-700 leading-relaxed text-sm">
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              1. Introduction & Scope
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              Privia Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy details how we collect, process, secure, and disclose personal data when you visit our website, register for client accounts, provision cloud environments, or communicate with our operations staff.
            </p>
            <p className="text-slate-655 font-medium pl-3.5">
              By using our software engineering, consulting, and cloud services, you acknowledge the terms of data handling explained in this document. We align our data protection controls with leading global compliance frameworks including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
            </p>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              2. Information We Collect
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              To deliver our services effectively, we collect several categories of information:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-slate-655 font-medium">
              <li><strong>Account Identifiers:</strong> Your full name, corporate email address, corporate telephone number, job title, and employer organization.</li>
              <li><strong>Technical Metadata:</strong> Internet Protocol (IP) addresses, browser specification headers, operating system environments, active cookie sessions, and referral URL paths.</li>
              <li><strong>Operational Logs:</strong> Deployment pipelines configuration parameters, API execution metrics, trace tracking data, and support ticket descriptions.</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              3. Purpose of Processing
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              We process personal data based on the following legitimate business interests:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pl-3.5">
              {[
                { title: "Service Delivery", desc: "Setting up user dashboards and invoicing professional services." },
                { title: "System Monitoring", desc: "Running security checks and tracking SRE system errors." },
                { title: "Client Communication", desc: "Sending critical release updates and scheduling consults." },
                { title: "Legal & Audits", desc: "Complying with transactional reporting and tax requirements." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2 items-start border border-slate-100 p-3 rounded-2xl bg-slate-50/50">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
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
              4. Data Sharing & Disclosures
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              We strictly enforce a <strong>no-sale</strong> policy. We never lease or sell client or database information to third-party ad brokers or list buyers.
            </p>
            <p className="text-slate-655 font-medium pl-3.5">
              We only disclose information to our contracted subprocessors (e.g., secure cloud hosting providers like Amazon Web Services or Google Cloud Platform, and automated email services) who perform tasks under our strict written directives. Every partner is audited to confirm they maintain equivalent security parameters.
            </p>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              5. Encryption & Storage Protocols
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              All client files and database tables are encrypted both in transit and at rest.
            </p>
            <ul className="list-disc pl-8 space-y-2 text-slate-655 font-medium">
              <li><strong>In Transit:</strong> Transport Layer Security (TLS 1.3) forced across all domain routes.</li>
              <li><strong>At Rest:</strong> Advanced Encryption Standard (AES-256) baseline for database volumes and cloud backups.</li>
              <li><strong>Isolation:</strong> Multi-tenant SaaS architectures feature strict database logical boundaries.</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              6. Data Subject Rights
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              Under GDPR and CCPA regulatory frameworks, users maintain standard rights to control their personal data:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-slate-655 font-medium">
              <li><strong>Access:</strong> The right to request copies of personal data stored in our systems.</li>
              <li><strong>Correction:</strong> The right to request modification of obsolete contact details.</li>
              <li><strong>Erasure:</strong> The right to request deletion of non-essential profile details.</li>
              <li><strong>Portability:</strong> The right to export contact profiles to machine-readable formats.</li>
            </ul>
            <p className="text-slate-655 font-medium pl-3.5">
              To exercise these data subject rights, please contact our data protection team directly at{" "}
              <a href="mailto:info@priviasolutions.net" className="text-[#2c5ead] font-semibold hover:underline">
                info@priviasolutions.net
              </a>.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
