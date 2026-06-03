import Link from "next/link";
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
      title: "Products",
      links: [
        { name: "All Products", href: "/products" },
        { name: "IceDeploy", href: "/products/icedeploy" },
        { name: "IceInsight", href: "/products/iceinsight" }
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
        { name: "Login", href: "/login" },
        { name: "Sign Up", href: "/signup" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Security", href: "/security" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Data Processing Addendum", href: "/dpa" },
        { name: "Cookie Policy", href: "/cookies" }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#1d3f75] to-[#2C5EAD] border-t border-white/10 pt-16 sm:pt-20 pb-10 text-white">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#4BB8FA]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top brand header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 border-b border-white/10 mb-12 gap-6">
          <div className="max-w-md">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-9 h-9 rounded-lg bg-white text-[#2C5EAD] flex items-center justify-center">
                <Cpu className="w-4.5 h-4.5" />
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white">
                AETHERIS
              </span>
            </Link>
            <p className="text-sm text-slate-200 leading-relaxed">
              Orchestrating next-generation cloud architectures, bespoke software environments, and robust security systems for progressive enterprises globally.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-200">
            <a href="mailto:info@aetherissystems.com" className="flex items-center space-x-2 hover:text-[#4BB8FA] transition-colors">
              <Mail className="w-4 h-4 text-[#4BB8FA]" />
              <span>info@aetherissystems.com</span>
            </a>
            <div className="flex items-center space-x-4 ml-2">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#4BB8FA]/50 text-slate-300 hover:text-[#4BB8FA] transition-all" aria-label="Instagram Profile">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#4BB8FA]/50 text-slate-300 hover:text-[#4BB8FA] transition-all" aria-label="Facebook Page">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-16">
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
            &copy; {new Date().getFullYear()} Aetheris Systems. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-[11px] text-slate-300">
            <Link href="/" className="hover:text-[#4BB8FA] transition-colors">Aetheris Systems official website</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
