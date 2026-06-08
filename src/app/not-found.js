"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030c1d] bg-gradient-to-br from-[#020813] via-[#030d22] to-[#01050e] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1.5px,transparent_1.5px)] bg-[size:4.5rem_4.5rem] pointer-events-none opacity-80" />

      {/* Cyber glow background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-xl text-center space-y-8 relative z-10">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#3b82f6] text-xs font-black uppercase tracking-widest font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Error Code: 404
        </motion.div>

        {/* Huge Animated 404 Title */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-[120px] sm:text-[160px] font-black leading-none bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent font-outfit tracking-tighter drop-shadow-2xl"
          >
            404
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#3b82f6] mx-auto rounded-full mt-4" 
          />
        </div>

        {/* Text Details */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-black font-outfit text-white tracking-tight">
            Lost in the Cloud?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed font-semibold">
            The page you are looking for has migrated, has been archived, or does not exist in our active routing table.
          </p>
        </motion.div>

        {/* Styled action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4"
        >
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-slate-900 bg-white hover:bg-slate-100 transition-all font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-white/5 active:scale-98 cursor-pointer"
          >
            <Home className="w-4 h-4 text-slate-800" />
            Back to Home
          </Link>

          <Link
            href="/faq"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-white border border-white/20 hover:bg-white/10 transition-all font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-white" />
            Help Center
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
