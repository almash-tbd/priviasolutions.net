"use client";

import { Layers, CheckCircle, Info, Settings } from "lucide-react";

export default function CookiesPage() {
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
            <Layers className="w-8 h-8 sm:w-10 sm:h-10 text-[#1591DC] flex-shrink-0" />
            Cookie Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-mono">Last updated: June 05, 2026</p>
        </div>

        {/* Content Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#2c5ead]/10 shadow-xl shadow-primary/5 space-y-8 text-slate-700 leading-relaxed text-sm">
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              1. What Are Cookies?
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              Cookies are small data files transferred to your computer or mobile device when you visit websites. They act as a memory log, allowing the web application to recognize your session state, persist user dashboard settings, and track performance indicators during your navigation.
            </p>
            <p className="text-slate-655 font-medium pl-3.5">
              We also use similar tracking mechanisms such as web beacons, storage tokens, and browser session variables to optimize developer workspace workflows.
            </p>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              2. Classification of Cookies We Use
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              Our website and developer systems leverage cookies from the following categories:
            </p>
            
            <div className="space-y-4 pl-3.5">
              {[
                { 
                  title: "Essential / Strictly Necessary", 
                  desc: "Crucial for core system operation. They maintain active client authentication, preserve secure dashboard states, support CSRF token checks, and route billing inputs. Without these cookies, basic platform operations cannot function." 
                },
                { 
                  title: "Performance & Telemetry", 
                  desc: "Collect anonymous technical metrics such as page load speed, query latency, navigation bottlenecks, and error rates. We use these logs to optimize hosting resources, adjust server scaling, and prioritize UI enhancements." 
                },
                { 
                  title: "Functionality Preferences", 
                  desc: "Remember choices you select, such as theme settings (dark vs. light mode), regional localization preferences, or workspace card configurations." 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start border border-slate-100 p-4 rounded-2xl bg-slate-50/50">
                  <CheckCircle className="w-5 h-5 text-[#1591DC] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              3. Consent & Browser Controls
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              When you first load the website or access developer tools, we present you with a cookie banner that allows you to accept or reject non-essential performance and analytics cookies.
            </p>
            <p className="text-slate-655 font-medium pl-3.5">
              You can also manage cookie settings directly in your browser:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-slate-655 font-medium">
              <li><strong>Block / Reject:</strong> Configure your browser to automatically block cookies or trigger alert dialogs when a cookie is sent.</li>
              <li><strong>Delete:</strong> Clear existing cookies from your browser history cache.</li>
            </ul>
            <div className="flex gap-3 bg-blue-50 border border-blue-100 p-4 rounded-2xl text-slate-800 text-xs">
              <Info className="w-5 h-5 text-[#1591DC] shrink-0 mt-0.5" />
              <p className="leading-relaxed text-slate-655 font-semibold">
                <strong>Please Note:</strong> Disabling essential cookies will impact critical functions, such as preventing dashboard login sessions and session security verification checks.
              </p>
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h2 className="text-xl font-bold text-slate-900 font-outfit flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#1591DC] rounded-full inline-block" />
              4. Updates to This Policy
            </h2>
            <p className="text-slate-655 font-medium pl-3.5">
              We may update our Cookie Policy periodically to reflect shifts in browser tracking limits or our analytics subprocessors. We recommend reviewing this page periodically for updates.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
