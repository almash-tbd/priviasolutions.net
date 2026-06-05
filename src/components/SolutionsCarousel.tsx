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
}

export default function SolutionsCarousel() {
  const N = 6;
  const R = 480; // 3D ring radius - adjusted for larger cards

  const CFG: CardData[] = [
    {
      id: 0,
      badge: "Featured",
      title: "Securing the Mesh",
      category: "Technology",
      date: "Mar 2026",
      desc: "Deploy decentralized threat detection and distributed node firewalls to secure enterprise software mesh architectures from edge to core.",
      cardImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
      accent: "#ef4444",
      word: "SIGHT",
      tag: "Technology · Mar 2026",
      imgBg: "#1a1a2e",
      imgBorder: "#2a2a3e",
    },
    {
      id: 1,
      badge: "Insight",
      title: "Eco Scale Systems",
      category: "Sustainability",
      date: "Dec 2025",
      desc: "Optimize data center power efficiency and server load allocation through carbon-aware scheduling and green cloud resource scaling.",
      cardImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
      accent: "#22c55e",
      word: "SCALE",
      tag: "Sustainability · Dec 2025",
      imgBg: "#0d1f0d",
      imgBorder: "#1a3a1a",
    },
    {
      id: 2,
      badge: "Deep Dive",
      title: "Cloud Native Flow",
      category: "DevOps",
      date: "Nov 2025",
      desc: "Orchestrate multi-region Kubernetes clusters with zero-downtime CI/CD deployment pipelines and automated traffic routing control.",
      cardImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
      accent: "#3b82f6",
      word: "CLOUD",
      tag: "DevOps · Nov 2025",
      imgBg: "#050d1f",
      imgBorder: "#0a1a3e",
    },
    {
      id: 3,
      badge: "Analysis",
      title: "Zero Trust Architecture",
      category: "Security",
      date: "Oct 2025",
      desc: "Enforce cryptographic identity verification and least-privilege access rules across all API endpoints and cloud resources.",
      cardImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=600&auto=format&fit=crop",
      accent: "#a855f7",
      word: "TRUST",
      tag: "Security · Oct 2025",
      imgBg: "#130a1f",
      imgBorder: "#2a1a3e",
    },
    {
      id: 4,
      badge: "Trend",
      title: "AI at the Edge",
      category: "AI & ML",
      date: "Sep 2025",
      desc: "Run low-latency neural network inference and automated computer vision models directly on localized hardware gateway nodes.",
      cardImage: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop",
      accent: "#f59e0b",
      word: "EDGE",
      tag: "AI & ML · Sep 2025",
      imgBg: "#1a1200",
      imgBorder: "#3a2800",
    },
    {
      id: 5,
      badge: "Report",
      title: "Data Mesh Futures",
      category: "Analytics",
      date: "Aug 2025",
      desc: "Decentralize data ownership and access controls using domain-driven data meshes with automated schema registry compliance.",
      cardImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      accent: "#06b6d4",
      word: "MESH",
      tag: "Analytics · Aug 2025",
      imgBg: "#001a1a",
      imgBorder: "#003a3a",
    },
  ];

  const [cur, setCur] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [tagText, setTagText] = useState(CFG[0].tag);
  const [tagOpacity, setTagOpacity] = useState(1);

  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);
  const startXRef = useRef(0);

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

  // Synchronized animation transitions and autoplay handling based on current index
  useEffect(() => {
    // Info-strip tag transition
    setTagOpacity(0);
    const tagTimeout = setTimeout(() => {
      setTagText(CFG[cur].tag);
      setTagOpacity(1);
    }, 300);

    // Auto-rotation timer setup (reset upon user interaction)
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
    }
    autoTimerRef.current = setInterval(() => {
      setCur((prev) => (prev + 1) % N);
    }, 3600); // 3.6 seconds rotation period

    return () => {
      clearTimeout(tagTimeout);
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [cur]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextCard();
      if (e.key === "ArrowLeft") prevCard();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cur]);

  // Pointer drag/swipe gesture detection
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
      className="relative w-full h-[610px] bg-transparent select-none touch-none overflow-visible flex flex-col justify-between"
    >
      {/* Backdrop Typography Words - Styled for Light Page Background */}
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

      {/* 3D Ring Stage - Positioned at top-4 h-[520px] to optimize vertical spacing */}
      <div className="absolute top-4 left-0 right-0 h-[520px] flex items-center justify-center [perspective:1200px] z-10">
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
                className="absolute w-[350px] h-[520px] rounded-3xl overflow-hidden cursor-pointer [backface-visibility:hidden] flex flex-col justify-between p-6.5 border transition-all duration-1000"
                style={{
                  transform: `translateX(${x}px) translateZ(${z}px) rotateY(${-angle}deg) scale(${sc})`,
                  opacity: op,
                  zIndex: idx === cur ? 10 : 1,
                  // Different background tint and border color related to the topic
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
                  <h3 className="text-xl md:text-2xl font-black text-slate-800 leading-tight font-outfit tracking-tight text-left">
                    {card.title}
                  </h3>
                </div>

                {/* Card Tech Image Representation - Guaranteed to load */}
                <div className="w-full h-[180px] rounded-2xl overflow-hidden relative border border-slate-100 mt-2 bg-slate-50 shrink-0">
                  <img
                    src={card.cardImage}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* More Info Section */}
                <div className="flex flex-col gap-2.5 text-left w-full mt-1 flex-1 justify-between">
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed mt-2">
                    {card.desc}
                  </p>
                  
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
      </div>

      {/* Navigation Row - Positioned at bottom-2 to prevent overlapping */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        <button
          onClick={prevCard}
          className="w-11 h-11 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center transition-all hover:bg-slate-50 hover:border-slate-350 active:scale-95 shadow-sm backdrop-blur-sm"
          aria-label="Previous card"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Navigation Dots */}
        <div className="flex gap-2.5 items-center">
          {CFG.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === cur ? "bg-slate-800 w-6" : "bg-slate-300 w-1.5 hover:bg-slate-450"
              }`}
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
