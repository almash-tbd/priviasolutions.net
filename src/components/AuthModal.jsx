"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Cpu, Send, X } from "lucide-react";
import { toast } from "react-hot-toast";

function AuthModalContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const authMode = searchParams.get("auth");

  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  useEffect(() => {
    if (authMode === "login" || authMode === "signup") {
      setActiveTab(authMode);
    }
  }, [authMode]);

  if (authMode !== "login" && authMode !== "signup") {
    return null;
  }

  const handleClose = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("auth");
    const query = params.toString() ? `?${params.toString()}` : "";
    router.push(`${pathname}${query}`);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Login request submitted successfully!");
    setLoginData({ email: "", password: "" });
    handleClose();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupData.name || !signupData.email || !signupData.password || !signupData.confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (signupData.password !== signupData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    toast.success("Registration request submitted successfully!");
    setSignupData({ name: "", email: "", password: "", confirmPassword: "" });
    handleClose();
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set("auth", tab);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Fullscreen blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-slate-950/65 backdrop-blur-md"
        />

        {/* Modal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 15 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-md bg-[#0a0c16]/95 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 flex flex-col text-slate-100 overflow-hidden"
        >
          {/* Ambient card glows */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#1591dc]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all outline-none"
            aria-label="Close authentication modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Logo & Header */}
          <div className="flex flex-col items-center text-center space-y-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] flex items-center justify-center shadow-md overflow-hidden">
              <Image 
                src="/assets/logo-symbol.webp" 
                alt="Privia Logo Symbol" 
                width={24} 
                height={24} 
                className="w-6 h-6 object-contain" 
              />
            </div>
            <h2 className="text-2xl font-black tracking-tight text-white font-outfit uppercase">
              {activeTab === "login" ? "Welcome Back" : "Get Started"}
            </h2>
            <p className="text-[11px] text-slate-400 max-w-xs">
              {activeTab === "login"
                ? "Access your dashboard to manage system infrastructure and configurations."
                : "Register a business account to deploy automation pipelines and cloud environments."}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex border-b border-white/5 mb-6">
            <button
              onClick={() => switchTab("login")}
              className={`flex-1 pb-3 text-xs font-bold transition-all relative outline-none ${
                activeTab === "login" ? "text-white" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Log In
              {activeTab === "login" && (
                <motion.div
                  layoutId="modalTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2C5EAD] to-[#1591DC]"
                />
              )}
            </button>
            <button
              onClick={() => switchTab("signup")}
              className={`flex-1 pb-3 text-xs font-bold transition-all relative outline-none ${
                activeTab === "signup" ? "text-white" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              Sign Up
              {activeTab === "signup" && (
                <motion.div
                  layoutId="modalTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2C5EAD] to-[#1591DC]"
                />
              )}
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "login" ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-0.5">Corporate Email</label>
                <input
                  type="email"
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  placeholder="sneha@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-[#1591dc] hover:border-white/10 text-xs text-slate-100 outline-none transition-all placeholder-slate-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-0.5">Password</label>
                <input
                  type="password"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-[#1591dc] hover:border-white/10 text-xs text-slate-100 outline-none transition-all placeholder-slate-600"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full py-3 mt-2 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-center shadow-lg shadow-primary/10 cursor-pointer"
              >
                Access Dashboard
                <Send className="w-4 h-4 ml-2" />
              </button>

              <div className="text-center pt-3 text-[10px] text-slate-400 border-t border-white/5 mt-4">
                Don't have a login?{" "}
                <button
                  type="button"
                  onClick={() => switchTab("signup")}
                  className="text-[#4BB8FA] hover:underline font-bold"
                >
                  Create an Account
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-0.5">Full Name</label>
                <input
                  type="text"
                  required
                  value={signupData.name}
                  onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                  placeholder="Mohit Acharya"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-[#1591dc] hover:border-white/10 text-xs text-slate-100 outline-none transition-all placeholder-slate-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-0.5">Corporate Email</label>
                <input
                  type="email"
                  required
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  placeholder="mohit@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-[#1591dc] hover:border-white/10 text-xs text-slate-100 outline-none transition-all placeholder-slate-600"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-0.5">Password</label>
                  <input
                    type="password"
                    required
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-[#1591dc] hover:border-white/10 text-xs text-slate-100 outline-none transition-all placeholder-slate-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-0.5">Confirm</label>
                  <input
                    type="password"
                    required
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-[#1591dc] hover:border-white/10 text-xs text-slate-100 outline-none transition-all placeholder-slate-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full py-3 mt-2 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-center shadow-lg shadow-primary/10 cursor-pointer"
              >
                Register Account
                <Send className="w-4 h-4 ml-2" />
              </button>

              <div className="text-center pt-3 text-[10px] text-slate-400 border-t border-white/5 mt-4">
                Already registered?{" "}
                <button
                  type="button"
                  onClick={() => switchTab("login")}
                  className="text-[#4BB8FA] hover:underline font-bold"
                >
                  Log In Here
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default function AuthModal() {
  return (
    <Suspense fallback={null}>
      <AuthModalContent />
    </Suspense>
  );
}
