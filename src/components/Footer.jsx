import Link from "next/link";
import Image from "next/image";
import { Cpu, Mail, Phone } from "lucide-react";

export default function Footer() {
  const footerGroups = [
    {
      title: "Services",
      links: [
        { name: "Custom Software Engineering", href: "/services/custom-development" },
        { name: "Mobile Apps", href: "/services/mobile-apps" },
        { name: "Cloud Migrations & SRE", href: "/services/cloud-sre" },
        { name: "API Design & Integrations", href: "/services/api-integrations" },
        { name: "QA Automation & Performance", href: "/services/qa-performance" },
        { name: "Managed Support", href: "/services/managed-support" },
        { name: "Cybersecurity & Compliance", href: "/services/cybersecurity" },
        { name: "Data & AI", href: "/services/data-ai" },
        { name: "UX/UI & Product Design", href: "/services/ux-ui" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "SaaS Solutions", href: "/solutions/saas" },
        { name: "FinTech Solutions", href: "/solutions/fintech" },
        { name: "Healthcare Solutions", href: "/solutions/healthcare" },
        { name: "Retail & eCommerce", href: "/solutions/retail" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "FAQ", href: "/faq" }
      ]
    },
    {
      title: "Account",
      links: [
        { name: "Login", href: "?auth=login" },
        { name: "Sign Up", href: "?auth=signup" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Data Processing Addendum", href: "/dpa" },
        { name: "Cookie Policy", href: "/cookies" }
      ]
    }
  ];

  return (
    <footer className="relative isolate bg-gradient-to-br from-[#1d3f75] to-[#2C5EAD] border-t border-white/10 pt-16 sm:pt-20 pb-10 text-white overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#4BB8FA]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      {/* Background brand name watermark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-12 sm:translate-y-16 pointer-events-none overflow-hidden select-none -z-10 opacity-[0.04]">
        <span className="text-[12vw] sm:text-[10vw] font-light tracking-[0.22em] text-white uppercase block leading-none font-sans whitespace-nowrap">
          PRIVIA
        </span>
        <span className="text-[12vw] sm:text-[10vw] font-light tracking-[0.22em] text-white uppercase block leading-none font-sans whitespace-nowrap mt-2 sm:mt-4">
          SOLUTIONS
        </span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top brand header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-white/10 mb-12 gap-6">
          <div className="max-w-md">
            <Link href="/" className="flex items-center group mb-4">
              <Image 
                src="/assets/logo.webp" 
                alt="Privia Solutions" 
                width={192} 
                height={48} 
                className="h-12 w-auto object-contain brightness-0 invert"
                unoptimized={true}
              />
            </Link>
            <p className="text-sm text-slate-200 leading-relaxed">
              Orchestrating next-generation cloud architectures, bespoke software environments, and robust security systems for progressive enterprises globally.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-200">
            <a href="mailto:info@priviasolutions.net" className="flex items-center space-x-2 hover:text-[#4BB8FA] transition-colors">
              <Mail className="w-4 h-4 text-[#4BB8FA]" />
              <span>info@priviasolutions.net</span>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 w-full justify-between">
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-xs font-black tracking-widest text-[#4BB8FA] uppercase">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-xs text-slate-200 hover:text-[#4BB8FA] transition-colors leading-relaxed block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 gap-4">
          <p className="text-[11px] text-slate-300 tracking-wide text-center sm:text-left">
            &copy; 2012-{new Date().getFullYear()} Privia Solutions. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-[11px] text-slate-300">
            <Link href="/" className="hover:text-[#4BB8FA] transition-colors">Privia Solutions official website</Link>
          </div>
        </div>


      </div>
    </footer>
  );
}
