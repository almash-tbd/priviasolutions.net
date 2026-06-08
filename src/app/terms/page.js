"use client";

import { FileText, CheckCircle, Shield, AlertTriangle } from "lucide-react";

export default function TermsPage() {
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
            <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-[#1591DC] flex-shrink-0" />
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-mono">Last updated: June 05, 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#2c5ead]/10 shadow-xl shadow-primary/5 space-y-8 text-slate-700 leading-relaxed text-sm">
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              1. Agreement Acceptance
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              These Terms of Service govern your access to and use of the software engineering, cloud automation, managed SRE, and tech consulting services provided by Privia Solutions. By accessing our public website, logging into your developer account dashboard, or signing a professional services proposal, you agree to be bound by this contract.
            </p>
            <p className="text-slate-655 font-medium pl-3.5">
              If you are accepting these terms on behalf of a corporate entity, you represent and warrant that you hold authorized legal power to bind that organization to these provisions.
            </p>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              2. Statements of Work & SLAs
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              Specific professional engineering deliverables, cloud migration schedules, support availability windows, and monthly service fees are governed by individual, signed Statements of Work (SOW) or Service Level Agreements (SLA).
            </p>
            <p className="text-slate-655 font-medium pl-3.5">
              In the event of a direct conflict between these general Terms of Service and a signed SOW, the provisions in the specific SOW shall override for that project block.
            </p>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              3. Invoicing, Billing, & Payments
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              Invoicing parameters are defined as follows:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-slate-655 font-medium">
              <li><strong>Billing Schedule:</strong> Monthly recurring maintenance fees are invoiced on the 1st of each calendar month. Project milestones are invoiced immediately upon target achievement sign-off.</li>
              <li><strong>Payment Window:</strong> All invoices are subject to Net 30 payment terms from the date of issue unless specified otherwise in the SOW.</li>
              <li><strong>Delinquency:</strong> Accounts overdue by more than 45 calendar days are subject to late payment fees of 1.5% per month and temporary suspension of active engineering deployments.</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              4. Intellectual Property Rights
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              The allocation of code-level ownership is detailed below:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-slate-655 font-medium">
              <li><strong>Custom Deliverables:</strong> All intellectual property and source code rights in custom applications engineered specifically for the client transfer entirely to the client upon full and final payment of all milestone invoices.</li>
              <li><strong>Developer Toolkits:</strong> Privia Solutions retains proprietary ownership over general script libraries, modular cloud templates, and deployment toolkits developed prior to or during the project that serve as utility tools. We grant the client a non-exclusive, royalty-free, perpetual license to use these embedded components.</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              5. Acceptable Use Policy
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              You agree not to use our cloud templates or developer access to perform any of the following:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-slate-655 font-medium">
              <li>Reverse-engineer or bypass licensing parameters in software libraries provided under SaaS trials.</li>
              <li>Deploy scripts designed to perform Denial of Service (DoS) operations or disrupt edge routes.</li>
              <li>Process or store sensitive user data without active compliance configurations (e.g., storing health records outside HIPAA configurations).</li>
            </ul>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              6. Liability Caps & Disclaimers
            </h2>
            <div className="flex gap-3 bg-amber-50 border border-amber-200 p-4 rounded-2xl text-slate-800 text-xs">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <p className="font-extrabold">LIMITATION OF LIABILITY</p>
                <p className="leading-relaxed text-slate-655 font-semibold">
                  To the maximum extent permitted by law, Privia Solutions disclaims liability for any indirect, incidental, special, or consequential damages (including lost profits or business disruption). Our total aggregate liability for any claims arising under this contract or an individual SOW shall not exceed the fees paid by the client in the 6 months preceding the liability event.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              7. Governing Law
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              These Terms of Service, along with all attached SOWs and SLAs, are governed by and construed in accordance with standard corporate transaction laws, without giving effect to conflicts of law principles. Any legal actions must be resolved in courts of competent jurisdiction.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
