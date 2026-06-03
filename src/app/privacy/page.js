"use client";

import { ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      
      {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="space-y-4">
        <span className="text-xs font-black tracking-widest text-primary uppercase bg-[#1e2038]/30 px-3 py-1.5 rounded-full border border-[#1e2038]">
          Legal
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">Last updated: May 25, 2026</p>
      </div>

      <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-6 pt-4 border-t border-[#1e2038]/40">
        <h2 className="text-lg font-bold text-slate-100">1. Information Collection</h2>
        <p>
          Aetheris Systems collects minimal client data to establish business accounts, invoice services, and optimize support tickets. We do not sell user data to third parties.
        </p>

        <h2 className="text-lg font-bold text-slate-100">2. Data Security & Storage</h2>
        <p>
          We use industry-standard encryption practices (AES-256) to protect database records. Access is restricted to authorized operations staff.
        </p>

        <h2 className="text-lg font-bold text-slate-100">3. Data Subject Rights</h2>
        <p>
          Users can request access, correction, or deletion of their personal information by contacting our data protection team at <a href="mailto:privacy@aetheris.com" className="text-primary hover:underline">privacy@aetheris.com</a>.
        </p>
      </div>

    </div>
  );
}
