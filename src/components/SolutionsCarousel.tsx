"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardData {
  id: number;
  badge: string;
  title: string;
  category: string;
  date: string;
  desc: string;
  cardImage: string;
  accent: string;
  word: string;
  tag: string;
  imgBg: string;
  imgBorder: string;
  bullets: string[];
}

export default function SolutionsCarousel() {
  const N = 4; // 4 industries: Healthcare, Retail, FinTech, SaaS
  const R = 480; // 3D ring radius

  const CFG: CardData[] = [
    {
      id: 0,
      badge: "Healthcare",
      title: "Healthcare & Telemedicine",
      category: "Compliance",
      date: "Jun 2026",
      desc: "Architecting HIPAA-compliant medical portals, secure patient data pipelines, and remote diagnostics solutions with high availability.",
      cardImage: "/assets/images/sectors/healthcare_new.webp",
      accent: "#f43f5e", // Rose-500
      word: "HEALTH",
      tag: "Healthcare · HIPAA Compliant",
      imgBg: "#1f1013",
      imgBorder: "#3f1a20",
      bullets: [
        "HIPAA & HITECH Compliance",
        "Secure EHR/FHIR Data Pipelines",
        "Telehealth Audio/Video SDKs"
      ]
    },
    {
      id: 1,
      badge: "Retail",
      title: "Retail & E-Commerce",
      category: "Scale",
      date: "May 2026",
      desc: "Building ultra-fast storefronts, real-time inventory management networks, persistent shopping carts, and secure checkouts.",
      cardImage: "/assets/images/sectors/retail_new.webp",
      accent: "#3b82f6", // Blue-500
      word: "RETAIL",
      tag: "Retail · High Concurrency",
      imgBg: "#0d1b2a",
      imgBorder: "#1b2a4a",
      bullets: [
        "Real-time Inventory Sync",
        "Sub-second Page Load Speeds",
        "Secure Payment Gateways"
      ]
    },
    {
      id: 2,
      badge: "Finance",
      title: "FinTech & Digital Banking",
      category: "Security",
      date: "Apr 2026",
      desc: "Engineering secure payment ledgers, automated fraud detection, high-frequency transaction networks, and compliance auditing systems.",
      cardImage: "/assets/images/sectors/fintech_new.webp",
      accent: "#10b981", // Emerald-500
      word: "FINTECH",
      tag: "FinTech · Zero Trust",
      imgBg: "#061f14",
      imgBorder: "#0c3f28",
      bullets: [
        "PCI-DSS Level 1 Security",
        "Automated AML/KYC Audits",
        "Microsecond Transaction Latency"
      ]
    },
    {
      id: 3,
      badge: "SaaS",
      title: "SaaS & Cloud Platforms",
      category: "Cloud",
      date: "Mar 2026",
      desc: "Orchestrating multi-tenant infrastructures, API gateway meshes, automated user billing engines, and elastic self-healing cloud clusters.",
      cardImage: "/assets/images/sectors/saas_new.webp",
      accent: "#8b5cf6", // Violet-500
      word: "SAAS",
      tag: "SaaS · Multi-Tenant",
      imgBg: "#1a0d2e",
      imgBorder: "#2a164d",
      bullets: [
        "Multi-tenant Database Isolation",
        "Dynamic Subscription Billing",
        "Automated Kubernetes Scaling"
      ]
    }
  ];

  const [cur, setCur] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [tagText, setTagText] = useState(CFG[0].tag);
  const [tagOpacity, setTagOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);
  const startXRef = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCur(((idx % N) + N) % N);
    setTimeout(() => {
      setAnimating(false);
    }, 900);
  };

  const nextCard = () => goTo(cur + 1);
  const prevCard = () => goTo(cur - 1);

  useEffect(() => {
    setTagOpacity(0);
    const tagTimeout = setTimeout(() => {
      setTagText(CFG[cur].tag);
      setTagOpacity(1);
    }, 300);

    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
    }
    autoTimerRef.current = setInterval(() => {
      setCur((prev) => (prev + 1) % N);
    }, 4500); // 4.5 seconds rotation

    return () => {
      clearTimeout(tagTimeout);
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [cur]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextCard();
      if (e.key === "ArrowLeft") prevCard();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cur]);

  const handlePointerDown = (e: React.PointerEvent) => {
    startXRef.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) {
        nextCard();
      } else {
        prevCard();
      }
    }
  };

  const activeCfg = CFG[cur];

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className="relative w-full h-[650px] bg-transparent select-none touch-none overflow-visible flex flex-col justify-between"
    >
      {/* Backdrop Typography Words */}
      <div
        className="absolute text-[clamp(130px,24vw,260px)] font-black leading-none tracking-tighter transition-all duration-1000 ease-out select-none pointer-events-none font-sans top-14 left-[5vw] z-0"
        style={{
          color: activeCfg.accent,
          opacity: 0.05,
          transform: `translateX(${(cur % 3 - 1) * 25}px) translateY(${Math.sin(cur) * 15}px)`,
        }}
      >
        {activeCfg.word}
      </div>
      <div
        className="absolute text-[clamp(130px,24vw,260px)] font-black leading-none tracking-tighter transition-all duration-1000 ease-out select-none pointer-events-none font-sans bottom-24 right-[5vw] z-0"
        style={{
          color: activeCfg.accent,
          opacity: 0.035,
          transform: `translateX(${-(cur % 3 - 1) * 25}px) translateY(${-Math.sin(cur) * 15}px)`,
        }}
      >
        {activeCfg.word}
      </div>

      {/* 3D Ring Stage */}
      <div className="absolute top-4 left-0 right-0 h-[520px] flex items-center justify-center [perspective:1200px] z-10">
        {isMobile ? (
          /* Mobile View: Render only the active card flat with no 3D offsets */
          <div className="relative w-[310px] sm:w-[350px] h-[520px] z-10">
            {CFG.map((card, idx) => {
              const isActive = idx === cur;
              if (!isActive) return null;
              return (
                <div
                  key={card.id}
                  className="absolute inset-0 rounded-3xl overflow-hidden flex flex-col justify-between p-5 border transition-all duration-300 bg-white"
                  style={{
                    background: `linear-gradient(to bottom right, ${card.accent}0e, #ffffff 60%)`,
                    borderColor: `${card.accent}bb`,
                    boxShadow: `0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 0 15px ${card.accent}15`,
                  }}
                >
                  {/* Header Section */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span 
                        className="text-[9px] font-black uppercase tracking-widest font-mono"
                        style={{ color: card.accent }}
                      >
                        {card.category}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">{card.date}</span>
                    </div>
                    <h3 className="text-lg font-black text-slate-800 leading-tight font-outfit tracking-tight text-left">
                      {card.title}
                    </h3>
                  </div>

                  {/* Card Tech Image Representation */}
                  <div className="w-full h-[180px] rounded-2xl overflow-hidden relative border border-slate-100 mt-2 bg-slate-50 shrink-0">
                    <img
                      src={card.cardImage}
                      alt={card.title}
                      className="w-full h-full object-cover pointer-events-none select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>

                  {/* More Info Section with Bullets */}
                  <div className="flex flex-col gap-2 text-left w-full mt-1 flex-1 justify-between">
                    <p className="text-[10px] text-slate-500 font-semibold leading-relaxed mt-2 line-clamp-3">
                      {card.desc}
                    </p>

                    {/* Feature Bullets */}
                    <div className="space-y-1 my-2">
                      {card.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-[10px] text-slate-700 font-semibold">
                          <span className="text-xs shrink-0" style={{ color: card.accent }}>✓</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-end items-center border-t border-slate-100 pt-3 mt-auto shrink-0">
                      <span 
                        className="text-[10px] font-black uppercase tracking-widest transition-colors flex items-center font-mono gap-0.5"
                        style={{ color: card.accent }}
                      >
                        Explore Solutions →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Desktop/Tablet View: 3D Ring layout */
          <div
            className="relative w-[350px] h-[520px] [transform-style:preserve-3d] transition-transform duration-1000 ease-out"
            style={{ transform: `rotateY(0deg)` }}
          >
            {CFG.map((card, idx) => {
              const angle = (idx - cur) * (360 / N);
              const rad = (angle * Math.PI) / 180;
              const x = Math.sin(rad) * R;
              const z = Math.cos(rad) * R - R;
              const sc = idx === cur ? 1.08 : 0.78;
              const op = Math.abs(angle) > 150 ? 0.12 : idx === cur ? 1 : 0.45;

              return (
                <div
                  key={card.id}
                  onClick={() => goTo(idx)}
                  className="absolute w-[350px] h-[520px] rounded-3xl overflow-hidden cursor-pointer [backface-visibility:hidden] flex flex-col justify-between p-6.5 border transition-all duration-1000 bg-white"
                  style={{
                    transform: `translateX(${x}px) translateZ(${z}px) rotateY(${-angle}deg) scale(${sc})`,
                    opacity: op,
                    zIndex: idx === cur ? 10 : 1,
                    background: idx === cur 
                      ? `linear-gradient(to bottom right, ${card.accent}0e, #ffffff 60%)` 
                      : `linear-gradient(to bottom right, ${card.accent}03, #ffffff 85%)`,
                    borderColor: idx === cur ? `${card.accent}bb` : `${card.accent}20`,
                    boxShadow: idx === cur 
                      ? `0 30px 60px -15px rgba(0, 0, 0, 0.08), 0 0 25px ${card.accent}15` 
                      : `0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)`,
                  }}
                >
                  {/* Header Section */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span 
                        className="text-[9px] font-black uppercase tracking-widest font-mono"
                        style={{ color: card.accent }}
                      >
                        {card.category}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">{card.date}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-800 leading-tight font-outfit tracking-tight text-left">
                      {card.title}
                    </h3>
                  </div>

                  {/* Card Tech Image Representation */}
                  <div className="w-full h-[180px] rounded-2xl overflow-hidden relative border border-slate-100 mt-2 bg-slate-50 shrink-0">
                    <img
                      src={card.cardImage}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 pointer-events-none select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>

                  {/* More Info Section with Bullets */}
                  <div className="flex flex-col gap-2.5 text-left w-full mt-1 flex-1 justify-between">
                    <p className="text-[11px] text-slate-500 font-semibold leading-relaxed mt-2 line-clamp-2">
                      {card.desc}
                    </p>

                    {/* Feature Bullets to fill empty space */}
                    <div className="space-y-1.5 my-2">
                      {card.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-[10px] text-slate-700 font-semibold">
                          <span className="text-xs shrink-0" style={{ color: card.accent }}>✓</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-end items-center border-t border-slate-100 pt-3 mt-auto shrink-0">
                      <span 
                        className="text-[10px] font-black uppercase tracking-widest transition-colors flex items-center font-mono gap-0.5"
                        style={{ color: card.accent }}
                      >
                        Explore Solutions →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Navigation Row - Spaced slightly lower and color optimized for visibility */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <button
          onClick={prevCard}
          className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center transition-all hover:bg-slate-50 hover:border-slate-350 active:scale-95 shadow-sm backdrop-blur-sm"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Navigation Dots - Enlarged, dark and active state matches the current category accent color */}
        <div className="flex gap-2.5 items-center">
          {CFG.map((card, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === cur ? "w-6" : "w-2 hover:w-3"
              }`}
              style={{
                backgroundColor: idx === cur ? card.accent : "#cbd5e1"
              }}
              aria-label={`Go to card ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextCard}
          className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center transition-all hover:bg-slate-50 hover:border-slate-350 active:scale-95 shadow-sm backdrop-blur-sm"
          aria-label="Next card"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
