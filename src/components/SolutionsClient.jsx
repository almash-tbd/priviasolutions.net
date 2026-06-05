"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, ChevronDown, Cpu, Sparkles, 
  Database, Lock, Shield, Check, Clock, HelpCircle, Layers,
  CheckCircle, ArrowUpRight, AlertTriangle
} from "lucide-react";

const slugBackgrounds = {
  saas: {
    url: "/assets/images/futuristic_world_bg.jpg",
    bgColor: "bg-[#f3f8fc]"
  },
  fintech: {
    url: "/assets/images/futuristic_fintech_bg.png",
    bgColor: "bg-[#eef6fe]"
  },
  healthcare: {
    url: "/assets/images/futuristic_healthcare_bg.png",
    bgColor: "bg-[#f5effe]"
  },
  retail: {
    url: "/assets/images/futuristic_retail_bg.png",
    bgColor: "bg-[#eefaf7]"
  }
};

export default function SolutionsClient({ slug, data }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeUseCase, setActiveUseCase] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Theme settings depending on the active slug
  const getTheme = () => {
    switch (slug) {
      case "saas":
        return {
          accentColor: "from-purple-600 to-indigo-600",
          textColor: "text-purple-600",
          borderColor: "border-purple-200/60",
          glowColor: "shadow-purple-500/10",
          bgLight: "bg-purple-50/50",
          pillBg: "bg-purple-100 text-purple-700",
          iconColor: "text-purple-600",
          cardBorderHover: "hover:border-purple-400/40 hover:shadow-purple-500/5",
          btnColor: "bg-purple-600 hover:bg-purple-700",
          gradientText: "from-purple-700 via-indigo-600 to-blue-500",
          verticalTag: "SaaS Scaling Solutions",
          bulletIcon: "text-purple-500"
        };
      case "fintech":
        return {
          accentColor: "from-blue-600 to-cyan-600",
          textColor: "text-blue-600",
          borderColor: "border-blue-200/60",
          glowColor: "shadow-blue-500/10",
          bgLight: "bg-blue-50/50",
          pillBg: "bg-blue-100 text-blue-700",
          iconColor: "text-blue-600",
          cardBorderHover: "hover:border-blue-400/40 hover:shadow-blue-500/5",
          btnColor: "bg-blue-600 hover:bg-blue-700",
          gradientText: "from-blue-700 via-[#1591dc] to-cyan-500",
          verticalTag: "FinTech Compliance & Core",
          bulletIcon: "text-blue-500"
        };
      case "healthcare":
        return {
          accentColor: "from-emerald-600 to-teal-600",
          textColor: "text-emerald-600",
          borderColor: "border-emerald-200/60",
          glowColor: "shadow-emerald-500/10",
          bgLight: "bg-emerald-50/50",
          pillBg: "bg-emerald-100 text-emerald-700",
          iconColor: "text-emerald-600",
          cardBorderHover: "hover:border-emerald-400/40 hover:shadow-emerald-500/5",
          btnColor: "bg-emerald-600 hover:bg-emerald-700",
          gradientText: "from-emerald-700 via-teal-600 to-cyan-600",
          verticalTag: "Healthcare Security Standards",
          bulletIcon: "text-emerald-500"
        };
      case "retail":
        return {
          accentColor: "from-amber-600 to-orange-600",
          textColor: "text-amber-600",
          borderColor: "border-amber-200/60",
          glowColor: "shadow-amber-500/10",
          bgLight: "bg-amber-50/50",
          pillBg: "bg-amber-100 text-amber-700",
          iconColor: "text-amber-600",
          cardBorderHover: "hover:border-amber-400/40 hover:shadow-amber-500/5",
          btnColor: "bg-amber-600 hover:bg-amber-700",
          gradientText: "from-amber-700 via-orange-600 to-red-500",
          verticalTag: "Retail & eCommerce Engine",
          bulletIcon: "text-amber-500"
        };
      default:
        return {
          accentColor: "from-primary to-secondary",
          textColor: "text-primary",
          borderColor: "border-slate-200",
          glowColor: "shadow-primary/10",
          bgLight: "bg-slate-50",
          pillBg: "bg-slate-100 text-slate-700",
          iconColor: "text-primary",
          cardBorderHover: "hover:border-primary/40",
          btnColor: "bg-primary hover:bg-primary-dark",
          gradientText: "from-[#2C5EAD] to-[#1591DC]",
          verticalTag: "Privia Solutions",
          bulletIcon: "text-primary"
        };
    }
  };

  const theme = getTheme();

  return (
    <>
      {slugBackgrounds[slug] && (
        <div className={`fixed inset-0 -z-20 pointer-events-none select-none overflow-hidden ${slugBackgrounds[slug].bgColor}`}>
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-[0.18]"
            style={{ 
              backgroundImage: `url('${slugBackgrounds[slug].url}')`,
            }}
          />
          {/* Minimal overlays to blend outer edges without covering main content */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/10 via-transparent to-slate-50/10 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/10 via-transparent to-slate-50/20 z-10" />
        </div>
      )}
      
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 scroll-smooth z-10">
        {/* Background radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <section className="space-y-6 text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border text-xs font-bold font-mono tracking-wider ${theme.pillBg} ${theme.borderColor}`}
        >
          <Cpu className="w-3.5 h-3.5 animate-spin-slow" />
          <span>{theme.verticalTag}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]"
        >
          <span className={`bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}>
            {data.title}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto"
        >
          {data.description}
        </motion.p>
      </section>

      {/* Metrics Highlights */}
      <section className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {data.metrics.map((m, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-8 rounded-2xl border ${slugBackgrounds[slug] ? "bg-white/70 backdrop-blur-md" : "bg-white"} shadow-sm hover:shadow-md transition-all ${theme.borderColor} text-center space-y-2`}
          >
            <div className={`text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent`}>
              {m.value}
            </div>
            <div className="text-xs text-slate-400 font-extrabold uppercase tracking-widest font-mono">
              {m.label}
            </div>
          </motion.div>
        ))}
      </section>

      {/* USPs / Why Choose Us */}
      {data.usp && (
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className={`text-xs font-black tracking-widest uppercase font-mono ${theme.textColor}`}>Sector Advantages</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-950">Why Choose Our {slug.toUpperCase()} Pipeline</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.usp.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border ${slugBackgrounds[slug] ? "bg-white/70 backdrop-blur-md" : "bg-white"} shadow-sm flex flex-col justify-between transition-all ${theme.borderColor} ${theme.cardBorderHover}`}
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl ${theme.bgLight} flex items-center justify-center`}>
                    <Sparkles className={`w-5 h-5 ${theme.iconColor}`} />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 leading-snug">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Sector Challenge and Core Architecture Solution */}
      <section className={`grid lg:grid-cols-2 gap-12 pt-12 border-t ${theme.borderColor}`}>
        {/* Challenge & Solution */}
        <div className="space-y-8 flex flex-col justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 p-6 rounded-2xl bg-rose-50/50 border border-rose-100/60"
          >
            <h2 className="text-lg font-extrabold text-slate-950 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-500" />
              Sector Challenge
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {data.challenge}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`space-y-4 p-6 rounded-2xl border ${theme.bgLight} ${theme.borderColor}`}
          >
            <h2 className="text-lg font-extrabold text-slate-950 flex items-center gap-2">
              <Shield className={`w-5 h-5 ${theme.textColor}`} />
              Core Architecture Solution
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {data.solution}
            </p>
          </motion.div>
        </div>

        {/* Integration Features & Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`p-8 rounded-3xl border ${slugBackgrounds[slug] ? "bg-white/70 backdrop-blur-md" : "bg-white"} shadow-sm ${theme.borderColor} space-y-6`}
        >
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
            Core Solution Features
          </h3>
          <ul className="space-y-3.5">
            {data.features.map((feat) => (
              <li key={feat} className="flex items-start text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${theme.bulletIcon}`} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-slate-100 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className={`px-3 py-1 text-xs font-semibold bg-white border rounded-lg ${theme.borderColor} text-slate-600 shadow-sm`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Use Cases */}
      {data.useCases && (
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className={`text-xs font-black tracking-widest uppercase font-mono ${theme.textColor}`}>Industry Use Cases</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-950">Targeted {slug.toUpperCase()} Implementations</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Button Selector */}
            <div className="lg:col-span-5 flex flex-col space-y-2.5">
              {data.useCases.map((uc, idx) => {
                const isActive = activeUseCase === idx;
                return (
                  <button
                    key={uc.title}
                    onClick={() => setActiveUseCase(idx)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 font-extrabold text-sm flex justify-between items-center ${
                      isActive
                        ? `bg-white border-2 ${theme.borderColor} text-slate-900 shadow-md ${theme.glowColor}`
                        : "bg-white/40 border-slate-200/80 text-slate-500 hover:border-slate-300 hover:text-slate-900"
                    }`}
                  >
                    <span>{uc.title}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? `translate-x-1.5 ${theme.textColor}` : "text-slate-300"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Display Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeUseCase}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className={`p-8 rounded-3xl border ${slugBackgrounds[slug] ? "bg-white/70 backdrop-blur-md" : "bg-white"} shadow-sm ${theme.borderColor} h-full flex flex-col justify-between space-y-6`}
                >
                  <div className="space-y-4">
                    <span className={`text-[9px] font-bold uppercase tracking-widest font-mono ${theme.pillBg} px-2.5 py-1 rounded-md`}>
                      Use Case Solution
                    </span>
                    <h4 className="text-xl font-extrabold text-slate-900">{data.useCases[activeUseCase].title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{data.useCases[activeUseCase].description}</p>
                  </div>

                  <div className="border-t border-slate-100 pt-5 space-y-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Key Capabilities:</span>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {data.useCases[activeUseCase].benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-xs text-slate-700">
                          <Check className={`w-4 h-4 mr-2 flex-shrink-0 ${theme.textColor}`} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* Success Stories */}
      {data.successStories && (
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className={`text-xs font-black tracking-widest uppercase font-mono ${theme.textColor}`}>Real-World Impact</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-950">Proven Results & Case Studies</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {data.successStories.map((story, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl border ${slugBackgrounds[slug] ? "bg-white/70 backdrop-blur-md" : "bg-white"} shadow-sm flex flex-col justify-between space-y-6 ${theme.borderColor} ${theme.cardBorderHover}`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-extrabold text-slate-950">{story.client}</h4>
                    <span className={`text-[10px] font-extrabold uppercase font-mono ${theme.pillBg} px-2.5 py-1 rounded`}>Success Case</span>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[9px] font-black text-rose-500 uppercase tracking-wider block font-mono">The Obstacle</span>
                    <p className="text-xs text-slate-500 leading-relaxed">{story.challenge}</p>
                  </div>

                  <div className="space-y-2">
                    <span className={`text-[9px] font-black uppercase tracking-wider block font-mono ${theme.textColor}`}>The Solution</span>
                    <p className="text-xs text-slate-500 leading-relaxed">{story.solution}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-3">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">Key Outcomes:</span>
                  <ul className="space-y-1.5">
                    {story.results.map((res, i) => (
                      <li key={i} className="flex items-center text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Implementation Process Roadmap */}
      {data.process && (
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className={`text-xs font-black tracking-widest uppercase font-mono ${theme.textColor}`}>Execution Roadmap</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-950">Our Implementation Methodology</h3>
          </div>

          <div className="relative border-l border-slate-200 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-10">
            {data.process.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white border-2 ${theme.borderColor} flex items-center justify-center z-10 shadow-sm`}>
                  <span className={`text-[10px] font-black ${theme.textColor}`}>{idx + 1}</span>
                </div>

                {/* Content Card */}
                <div className={`p-6 rounded-2xl border ${slugBackgrounds[slug] ? "bg-white/70 backdrop-blur-md" : "bg-white"} shadow-sm hover:shadow-md transition-all ${theme.borderColor} space-y-3`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-extrabold text-slate-950">{step.phase}</h4>
                    <span className="inline-flex items-center text-xs font-semibold text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {step.duration}
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Key Deliverables:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {step.deliverables.map((del, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-0.5 text-[10px] font-semibold bg-slate-50 border border-slate-200/60 rounded-md text-slate-600"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {data.faqs && (
        <section className="space-y-12 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <h2 className={`text-xs font-black tracking-widest uppercase font-mono ${theme.textColor}`}>Got Questions?</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-950">Frequently Asked Questions</h3>
          </div>

          <div className={`border border-slate-200 rounded-2xl divide-y divide-slate-200 ${slugBackgrounds[slug] ? "bg-white/70 backdrop-blur-md" : "bg-white"} shadow-sm overflow-hidden`}>
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="transition-colors hover:bg-slate-50/30">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-5 px-6 flex justify-between items-center text-left text-sm sm:text-base font-extrabold text-slate-900 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 px-6 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-center max-w-4xl mx-auto space-y-6 border border-white/5 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/15 to-transparent pointer-events-none" />
        
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight relative z-10">
          Interested in implementing this solution?
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed relative z-10">
          Let’s discuss how we can tailor our {data.title.toLowerCase()} pipeline to fit your custom business rules and scalability needs.
        </p>
        <div className="relative z-10 pt-2">
          <Link 
            href="/contact" 
            className={`inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r ${theme.accentColor} hover:opacity-95 transition-all text-sm shadow-lg`}
          >
            Start Core Planning
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
