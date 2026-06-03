"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, Cpu, Sparkles, Terminal, 
  Settings, Lock, HelpCircle, Layers, CreditCard,
  Briefcase, Activity, ShoppingCart, UserCheck, ShieldCheck,
  TrendingUp, BarChart3, Database, Code, Users, BookOpen
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [leaveTimeout, setLeaveTimeout] = useState(null);
  const pathname = usePathname();

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Clean timeout on unmount
  useEffect(() => {
    return () => {
      if (leaveTimeout) clearTimeout(leaveTimeout);
    };
  }, [leaveTimeout]);

  const handleMouseEnter = (title) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setLeaveTimeout(timeout);
  };

  const navLinks = [
    {
      title: "Services",
      dropdown: [
        { name: "Custom Software Engineering", href: "/services/custom-development", desc: "Bespoke digital engines engineered for scale", icon: Code },
        { name: "Mobile App Engineering", href: "/services/mobile-apps", desc: "Native iOS & Android mobile platforms", icon: Cpu },
        { name: "Cloud Migrations & SRE", href: "/services/cloud-sre", desc: "Automated, secure multicloud infrastructure", icon: Settings },
        { name: "API Design & Integrations", href: "/services/api-integrations", desc: "Middleware and secure pipeline gateways", icon: Terminal },
        { name: "QA Automation & Testing", href: "/services/qa-performance", desc: "Continuous automated testing and validations", icon: UserCheck },
        { name: "24/7 Managed Support", href: "/services/managed-support", desc: "SLA-backed systems stability and patching", icon: Activity },
        { name: "Cybersecurity & Compliance", href: "/services/cybersecurity", desc: "Zero-trust environments and compliance audits", icon: Lock },
        { name: "Data & Applied AI", href: "/services/data-ai", desc: "Lakehouses, pipeline flows and machine learning", icon: Database },
        { name: "UX/UI & Product Design", href: "/services/ux-ui", desc: "Accessible interfaces and design libraries", icon: Sparkles }
      ]
    },
    {
      title: "Solutions",
      dropdown: [
        { name: "SaaS Solutions", href: "/solutions/saas", desc: "Scalable multi-tenant infrastructures", icon: Layers },
        { name: "FinTech Platforms", href: "/solutions/fintech", desc: "Audit logs, secure ledgers, and transaction security", icon: CreditCard },
        { name: "Healthcare Platforms", href: "/solutions/healthcare", desc: "Telehealth portals and secure FHIR flows", icon: ShieldCheck },
        { name: "Retail & eCommerce", href: "/solutions/retail", desc: "Kafka stock sync and latency-free carts", icon: ShoppingCart }
      ]
    },
    {
      title: "Resources",
      dropdown: [
        { name: "Blog / Insights", href: "/blog", desc: "Latest engineering resources & tutorials", icon: BookOpen },
        { name: "Resources & Guides", href: "/resources", desc: "Guides, whitepapers, and cloud checklists", icon: Terminal }
      ]
    },
    {
      title: "Company",
      dropdown: [
        { name: "Careers", href: "/careers", desc: "Join our global remote-first engineering crew", icon: Briefcase },
        { name: "Security Center", href: "/security", desc: "Our global security trust parameters", icon: Lock },
        { name: "FAQ", href: "/faq", desc: "Frequently asked questions", icon: HelpCircle },
        { name: "Case Studies", href: "/case-studies", desc: "Read our real-world success results", icon: BarChart3 }
      ]
    }
  ];

  // Custom Visual Graphics Helper
  const DropdownVisual = ({ name }) => {
    switch (name) {
      // SERVICES
      case "Custom Software Engineering":
        return (
          <div className="ill-brainstorming">
            <div className="ill-brainstorming-board p-2.5 flex flex-col font-mono text-[8px] text-slate-700 leading-normal">
              <div className="flex gap-1.5 border-b border-indigo-100 pb-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="space-y-1">
                <div><span className="text-indigo-600 font-bold">const</span> engine = <span className="text-emerald-600">new</span> <span className="text-amber-600">Core</span>();</div>
                <div className="pl-3">engine.<span className="text-blue-600 font-bold">compile</span>();</div>
                <div className="pl-3">engine.<span className="text-blue-600 font-bold">scale</span>({'{'} nodes: <span className="text-purple-600">1024</span> {'}'});</div>
              </div>
            </div>
          </div>
        );
      case "Mobile App Engineering":
        return (
          <div className="ill-diagramming ml-2 flex-shrink-0">
            <div className="w-10 h-16 border-2 border-slate-300 rounded-lg bg-white relative flex flex-col items-center justify-between p-1 shadow-sm">
              <div className="w-4 h-1 bg-slate-300 rounded-full"></div>
              <div className="w-full flex-grow mt-1.5 space-y-1">
                <div className="h-1.5 w-full bg-blue-100 rounded-sm"></div>
                <div className="flex gap-0.5">
                  <div className="h-3 w-1/2 bg-amber-100 rounded-sm"></div>
                  <div className="h-3 w-1/2 bg-emerald-100 rounded-sm"></div>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-sm"></div>
              </div>
              <div className="w-5 h-0.5 bg-slate-300 rounded-full mt-0.5"></div>
            </div>
          </div>
        );
      case "Cloud Migrations & SRE":
        return (
          <div className="ill-games ml-2 flex-shrink-0">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-8 h-5 bg-white border border-blue-200 rounded-lg shadow-sm -translate-x-2 -translate-y-2 flex flex-col justify-around p-0.5 mm-animate-float">
                <div className="h-0.5 w-6 bg-blue-200 rounded-sm mx-auto"></div>
                <div className="h-0.5 w-6 bg-blue-200 rounded-sm mx-auto"></div>
              </div>
              <div className="absolute w-10 h-6 bg-blue-100 border border-blue-300 rounded-lg shadow-md translate-x-2.5 translate-y-1.5 flex flex-col justify-around p-1 mm-animate-float-delay">
                <div className="h-0.5 w-7 bg-blue-300 rounded-sm mx-auto"></div>
                <div className="h-0.5 w-7 bg-blue-300 rounded-sm mx-auto"></div>
              </div>
              <span className="text-[12px] mm-animate-float z-10">☁️</span>
            </div>
          </div>
        );
      case "API Design & Integrations":
        return (
          <div className="ill-meetings">
            <div className="ill-meetings-pros border-t-4 border-t-indigo-400 flex flex-col justify-between p-2">
              <span className="text-[7px] font-black text-indigo-700 block mb-0.5">REQUEST</span>
              <div className="h-1 w-10 bg-slate-100 rounded" />
              <div className="h-2 w-full bg-indigo-50 border border-indigo-100 rounded text-[5px] text-indigo-600 flex items-center justify-center font-mono">{"GET /api"}</div>
            </div>
            <div className="ill-meetings-cons border-t-4 border-t-emerald-400 flex flex-col justify-between p-2">
              <span className="text-[7px] font-black text-emerald-700 block mb-0.5">RESPONSE</span>
              <div className="h-1 w-10 bg-slate-100 rounded" />
              <div className="h-2 w-full bg-emerald-50 border border-emerald-100 rounded text-[5px] text-emerald-600 flex items-center justify-center font-mono">{"200 OK ✓"}</div>
            </div>
          </div>
        );

      // PRODUCTS
      case "All Products":
        return (
          <div className="ill-brainstorming bg-emerald-50">
            <div className="ill-brainstorming-board p-2 flex flex-col">
              <div className="flex gap-1 border-b border-emerald-100 pb-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-200"></span>
              </div>
              <div className="flex gap-2 justify-center">
                <div className="w-8 h-8 bg-emerald-100 border border-emerald-200 rounded shadow-sm flex items-center justify-center text-[12px] mm-animate-float">📦</div>
                <div className="w-8 h-8 bg-blue-100 border border-blue-200 rounded shadow-sm flex items-center justify-center text-[12px] mm-animate-float-delay">🛠️</div>
              </div>
            </div>
          </div>
        );
      case "IceDeploy":
        return (
          <div className="ill-diagramming ml-2 flex-shrink-0 bg-emerald-50/50">
            <div className="flex flex-col items-center gap-1.5">
              <div className="text-[12px] mm-animate-float">🚀</div>
              <div className="w-12 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-[5px] font-mono text-emerald-600 font-black">DEPLOYING</span>
            </div>
          </div>
        );
      case "IceInsight":
        return (
          <div className="ill-games ml-2 flex-shrink-0">
            <div className="flex items-end gap-1 h-12 pb-2">
              <div className="w-2.5 h-5 bg-rose-200 rounded-sm"></div>
              <div className="w-2.5 h-8 bg-rose-400 rounded-sm"></div>
              <div className="w-2.5 h-4 bg-rose-300 rounded-sm"></div>
              <div className="w-2.5 h-10 bg-rose-500 rounded-sm"></div>
            </div>
          </div>
        );

      // SOLUTIONS
      case "SaaS Solutions":
        return (
          <div className="ill-brainstorming bg-purple-50">
            <div className="ill-brainstorming-board p-2 flex flex-col">
              <div className="flex gap-1 border-b border-purple-100 pb-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-300"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-purple-200"></span>
              </div>
              <div className="flex gap-1.5 items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-[10px] mm-animate-float">👤</div>
                <div className="w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center text-[10px] mm-animate-float-delay">👥</div>
              </div>
            </div>
          </div>
        );
      case "FinTech Platforms":
        return (
          <div className="ill-diagramming ml-2 flex-shrink-0">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-[16px] mm-animate-float">💳</span>
              <span className="text-[6px] font-black text-blue-700 bg-blue-50 px-1 border border-blue-200 rounded">SECURE</span>
            </div>
          </div>
        );
      case "Healthcare Platforms":
        return (
          <div className="ill-games ml-2 flex-shrink-0">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-[16px] mm-animate-float">❤️</span>
              <div className="w-12 h-1 bg-rose-200 rounded-full overflow-hidden">
                <div className="w-5/6 h-full bg-rose-500"></div>
              </div>
            </div>
          </div>
        );
      case "Retail & eCommerce":
        return (
          <div className="ill-meetings bg-amber-50">
            <div className="ill-meetings-pros border-t-4 border-t-amber-400 flex flex-col justify-between p-2">
              <span className="text-[7px] font-black text-amber-700">CART</span>
              <div className="text-[12px] text-center">🛒</div>
              <div className="h-1.5 w-full bg-amber-50 rounded flex items-center justify-center text-[5px] font-mono text-amber-600 font-bold">$129.00</div>
            </div>
            <div className="ill-meetings-cons border-t-4 border-t-emerald-400 flex flex-col justify-between p-2">
              <span className="text-[7px] font-black text-emerald-700">PAY</span>
              <div className="text-[12px] text-center">💳</div>
              <span className="text-[5px] text-center font-bold text-emerald-600 bg-emerald-50 rounded">PAID</span>
            </div>
          </div>
        );

      // RESOURCES
      case "Blog / Insights":
        return (
          <div className="ill-brainstorming bg-amber-50">
            <div className="ill-brainstorming-board p-2 flex flex-col gap-1.5">
              <div className="h-3 w-3/4 bg-amber-100 rounded"></div>
              <div className="h-1.5 w-full bg-slate-100 rounded"></div>
              <div className="h-1.5 w-5/6 bg-slate-100 rounded"></div>
              <div className="flex gap-1 items-center mt-1">
                <div className="w-3 h-3 rounded-full bg-amber-300"></div>
                <div className="h-1 w-6 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        );
      case "Resources & Guides":
        return (
          <div className="ill-diagramming ml-2 flex-shrink-0 bg-indigo-50/30">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] text-indigo-500 font-bold">✓</span>
                <div className="h-1.5 w-8 bg-slate-300 rounded"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] text-indigo-500 font-bold">✓</span>
                <div className="h-1.5 w-6 bg-slate-300 rounded"></div>
              </div>
            </div>
          </div>
        );

      // COMPANY
      case "Careers":
        return (
          <div className="ill-brainstorming bg-sky-50">
            <div className="ill-brainstorming-board p-2.5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-[12px] mm-animate-float">🌍</span>
                <span className="text-[5px] font-black text-sky-600 bg-sky-50 border border-sky-200 px-1 rounded">HIRING</span>
              </div>
              <div className="h-2 w-full bg-sky-100 rounded-sm"></div>
            </div>
          </div>
        );
      case "Partners & Ecosystem":
        return (
          <div className="ill-diagramming ml-2 flex-shrink-0">
            <div className="text-[12px] mm-animate-rotate inline-block">⚙️</div>
            <div className="text-[11px] inline-block -translate-x-1 translate-y-1">🤝</div>
          </div>
        );
      case "Security Center":
        return (
          <div className="ill-games ml-2 flex-shrink-0 bg-blue-50/30 border-l border-blue-100">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[14px] mm-animate-float">🛡️</span>
              <span className="text-[5px] font-bold text-emerald-600 bg-emerald-50 px-1 border border-emerald-200 rounded">ACTIVE</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Mega Menu Dropdown Render function
  const renderMegaMenu = (link) => {
    const dropdown = link.dropdown;
    if (!dropdown || dropdown.length === 0) return null;

    const colCount = dropdown.length;
    const firstItem = dropdown[0];
    const secondItem = dropdown[1];
    const thirdItem = dropdown[2];
    const fourthItem = dropdown[3];
    const remainingItems = dropdown.slice(4);

    // If dropdown length <= 3, render a 2-column layout (Left large card, right stacked small cards)
    if (colCount <= 3) {
      const FirstIcon = firstItem?.icon;
      const SecondIcon = secondItem?.icon;
      const ThirdIcon = thirdItem?.icon;

      return (
        <div className="grid grid-cols-2 gap-6 w-full">
          {firstItem && (
            <Link href={firstItem.href} className="mm-card-large group/mm">
              <div className="flex items-start gap-3">
                {FirstIcon && (
                  <div className="p-2 rounded-xl bg-blue-50 text-[#2C5EAD] group-hover/mm:bg-[#2C5EAD] group-hover/mm:text-white transition-all duration-300 flex-shrink-0 shadow-sm border border-slate-100 group-hover/mm:border-[#2C5EAD]">
                    <FirstIcon className="w-5 h-5" />
                  </div>
                )}
                <div>
                  <span className="text-[9px] tracking-widest font-black text-[#2c5ead] uppercase block mb-1">FEATURED</span>
                  <h3 className="text-base font-bold text-slate-900 group-hover/mm:text-[#2c5ead] transition-colors leading-snug">{firstItem.name}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{firstItem.desc}</p>
                </div>
              </div>
              <DropdownVisual name={firstItem.name} index={0} type="bottom" />
            </Link>
          )}
          
          <div className="flex flex-col gap-4">
            {secondItem && (
              <Link href={secondItem.href} className="mm-card-small group/mm">
                <div className="flex items-start gap-3">
                  {SecondIcon && (
                    <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600 group-hover/mm:bg-amber-500 group-hover/mm:text-white transition-all duration-300 flex-shrink-0 shadow-sm border border-amber-100 group-hover/mm:border-amber-500">
                      <SecondIcon className="w-4 h-4" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover/mm:text-[#2C5EAD] transition-colors leading-snug">{secondItem.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{secondItem.desc}</p>
                  </div>
                </div>
                <DropdownVisual name={secondItem.name} index={1} type="side" />
              </Link>
            )}
            {thirdItem && (
              <Link href={thirdItem.href} className="mm-card-small group/mm bg-rose-50/40 border-rose-200 hover:bg-rose-100/60 hover:border-rose-300">
                <div className="flex items-start gap-3">
                  {ThirdIcon && (
                    <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600 group-hover/mm:bg-rose-500 group-hover/mm:text-white transition-all duration-300 flex-shrink-0 shadow-sm border border-rose-100 group-hover/mm:border-rose-500">
                      <ThirdIcon className="w-4 h-4" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover/mm:text-rose-600 transition-colors leading-snug">{thirdItem.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{thirdItem.desc}</p>
                  </div>
                </div>
                <DropdownVisual name={thirdItem.name} index={2} type="side" />
              </Link>
            )}
          </div>
        </div>
      );
    }

    const hasRemaining = remainingItems.length > 0;
    
    // Choose dynamic widths: if there are remaining links, we use a 4-col layout, otherwise 3-col symmetric
    const gridClass = hasRemaining 
      ? "grid grid-cols-[1.2fr_1fr_1.2fr_0.8fr] gap-6 w-full" 
      : "grid grid-cols-3 gap-6 w-full";

    const FirstIcon = firstItem?.icon;
    const SecondIcon = secondItem?.icon;
    const ThirdIcon = thirdItem?.icon;
    const FourthIcon = fourthItem?.icon;

    return (
      <div className={gridClass}>
        {/* Column 1: Large Card */}
        {firstItem && (
          <Link href={firstItem.href} className="mm-card-large group/mm">
            <div className="flex items-start gap-3">
              {FirstIcon && (
                <div className="p-2 rounded-xl bg-blue-50 text-[#2C5EAD] group-hover/mm:bg-[#2C5EAD] group-hover/mm:text-white transition-all duration-300 flex-shrink-0 shadow-sm border border-slate-100 group-hover/mm:border-[#2C5EAD]">
                  <FirstIcon className="w-5 h-5" />
                </div>
              )}
              <div>
                <span className="text-[9px] tracking-widest font-black text-[#2C5EAD] uppercase block mb-1">FEATURED</span>
                <h3 className="text-base font-bold text-slate-900 group-hover/mm:text-[#2C5EAD] transition-colors leading-snug">{firstItem.name}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{firstItem.desc}</p>
              </div>
            </div>
            <DropdownVisual name={firstItem.name} index={0} type="bottom" />
          </Link>
        )}

        {/* Column 2: Two Small stacked Cards */}
        <div className="flex flex-col gap-4">
          {secondItem && (
            <Link href={secondItem.href} className="mm-card-small group/mm">
              <div className="flex items-start gap-3">
                {SecondIcon && (
                  <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600 group-hover/mm:bg-amber-500 group-hover/mm:text-white transition-all duration-300 flex-shrink-0 shadow-sm border border-amber-100 group-hover/mm:border-amber-500">
                    <SecondIcon className="w-4 h-4" />
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover/mm:text-[#2C5EAD] transition-colors leading-snug">{secondItem.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">{secondItem.desc}</p>
                </div>
              </div>
              <DropdownVisual name={secondItem.name} index={1} type="side" />
            </Link>
          )}
          {thirdItem && (
            <Link href={thirdItem.href} className="mm-card-small group/mm bg-rose-50/40 border-rose-200 hover:bg-rose-100/60 hover:border-rose-300">
              <div className="flex items-start gap-3">
                {ThirdIcon && (
                  <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600 group-hover/mm:bg-rose-500 group-hover/mm:text-white transition-all duration-300 flex-shrink-0 shadow-sm border border-rose-100 group-hover/mm:border-rose-500">
                    <ThirdIcon className="w-4 h-4" />
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover/mm:text-rose-600 transition-colors leading-snug">{thirdItem.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">{thirdItem.desc}</p>
                </div>
              </div>
              <DropdownVisual name={thirdItem.name} index={2} type="side" />
            </Link>
          )}
        </div>

        {/* Column 3: Large Card */}
        {fourthItem && (
          <Link href={fourthItem.href} className="mm-card-large group/mm">
            <div className="flex items-start gap-3">
              {FourthIcon && (
                <div className="p-2 rounded-xl bg-purple-50 text-purple-600 group-hover/mm:bg-purple-600 group-hover/mm:text-white transition-all duration-300 flex-shrink-0 shadow-sm border border-purple-100 group-hover/mm:border-purple-600">
                  <FourthIcon className="w-5 h-5" />
                </div>
              )}
              <div>
                <span className="text-[9px] tracking-widest font-black text-purple-600 uppercase block mb-1">CORE PLATFORM</span>
                <h3 className="text-base font-bold text-slate-900 group-hover/mm:text-purple-600 transition-colors leading-snug">{fourthItem.name}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{fourthItem.desc}</p>
              </div>
            </div>
            <DropdownVisual name={fourthItem.name} index={3} type="bottom" />
          </Link>
        )}

        {/* Column 4: Remaining vertical links */}
        {hasRemaining && (
          <div className="flex flex-col pl-4 border-l border-slate-300">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-3">More Options</h4>
            <div className="flex flex-col gap-2.5">
              {remainingItems.map((sub) => {
                const isLinkActive = pathname === sub.href;
                const SubIcon = sub.icon;
                return (
                  <Link 
                    key={sub.name}
                    href={sub.href}
                    className={`text-xs font-semibold hover:text-[#2C5EAD] transition-colors leading-relaxed flex items-center gap-2 group/sublink ${
                      isLinkActive ? "text-[#2C5EAD]" : "text-slate-600"
                    }`}
                  >
                    {SubIcon && (
                      <SubIcon className="w-3.5 h-3.5 text-slate-400 group-hover/sublink:text-[#2C5EAD] transition-colors" />
                    )}
                    <span>{sub.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] flex items-center justify-center shadow-md shadow-primary/10">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-2xl tracking-wider bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              AETHERIS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              // Simple check if user is on this category path
              const isCategoryActive = link.dropdown.some(sub => pathname.startsWith(sub.href));

              return (
                <div 
                  key={link.title}
                  className="group py-6"
                  onMouseEnter={() => handleMouseEnter(link.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={`flex items-center space-x-1 px-4 py-2 text-sm font-semibold transition-all rounded-lg relative ${
                    isCategoryActive || activeDropdown === link.title ? "bg-slate-100 text-slate-900" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}>
                    <span>{link.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.title ? "rotate-180" : "group-hover:rotate-180"}`} />
                    {isCategoryActive && (
                      <motion.div 
                        layoutId="activeCategoryUnderline"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary"
                      />
                    )}
                  </button>

                  {/* Dropdown menu */}
                  <AnimatePresence>
                    {activeDropdown === link.title && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, x: "-50%" }}
                        transition={{ duration: 0.15 }}
                        className="mega-menu-panel"
                        onMouseEnter={() => handleMouseEnter(link.title)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {renderMegaMenu(link)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            
            {/* Standalone links */}
            <Link 
              href="/about" 
              className={`px-4 py-2 text-sm font-semibold transition-colors rounded-lg hover:bg-slate-50 relative ${
                pathname === "/about" ? "text-primary" : "text-slate-700 hover:text-primary"
              }`}
            >
              <span>About Us</span>
              {pathname === "/about" && (
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary" />
              )}
            </Link>

          </div>

          {/* Action Button */}
          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 transition-all glow-btn"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[380px] bg-white border-l border-slate-200 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 flex-shrink-0">
                <span className="font-extrabold text-xl tracking-wider text-slate-950">NAVIGATION</span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-950 hover:bg-slate-50"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {navLinks.map((link) => (
                  <div key={link.title} className="space-y-2">
                    <h3 className="text-xs font-black tracking-widest text-slate-400 uppercase px-3">
                      {link.title}
                    </h3>
                    <div className="space-y-1">
                      {link.dropdown.map((sub) => {
                        const Icon = sub.icon;
                        const isLinkActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`flex items-center px-3 py-2.5 rounded-xl transition-all text-sm ${
                              isLinkActive ? "bg-slate-50 text-primary font-semibold" : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                            }`}
                          >
                            <Icon className={`w-4.5 h-4.5 mr-3 ${isLinkActive ? "text-primary" : "text-slate-400"}`} />
                            <span>{sub.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <div className="border-t border-slate-100 pt-4 space-y-2">
                  <Link
                    href="/about"
                    className={`flex items-center px-3 py-2.5 rounded-xl transition-all text-sm font-semibold ${
                      pathname === "/about" ? "bg-slate-50 text-primary" : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                    }`}
                  >
                    <span>About Us</span>
                  </Link>

                </div>
              </div>

              <div className="p-6 border-t border-slate-100 flex-shrink-0">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 text-center shadow-md shadow-primary/10"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
