import { productsData } from "@/data/siteData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = productsData[slug];
  if (!data) return {};
  return {
    title: `${data.name} - Software Product | Privia Solutions`,
    description: data.tagline,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const data = productsData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Background visual element */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Hero section */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#1e2038]/50 border border-[#1e2038] text-xs font-semibold text-primary">
          <span>Privia Solutions Product</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
          {data.name}
        </h1>
        <p className="text-lg sm:text-xl text-primary font-semibold">
          {data.tagline}
        </p>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
          {data.description}
        </p>
      </div>

      {/* Highlight metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.metrics.map((m, idx) => (
          <div key={idx} className="p-8 rounded-2xl glass-card text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              {m.value}
            </div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Product Details Grid */}
      <div className="grid lg:grid-cols-2 gap-12 pt-8 border-t border-[#1e2038]/40">
        
        {/* Core Capabilities */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-100 border-l-2 border-secondary pl-3">
            Core Capabilities
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            {data.name} is engineered to address scaling and security bottlenecks in production clusters, providing software delivery teams with granular tracking controls and automated safeguards.
          </p>
          <ul className="space-y-4 pt-4">
            {data.features.map((feat) => (
              <li key={feat} className="flex items-start text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack and Deploy Info */}
        <div className="p-8 rounded-2xl glass-card space-y-6">
          <h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest text-slate-400">
            Technical Architecture
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Built using performant, reliable compilation layers and event structures, the product integrates seamlessly into modern Kubernetes frameworks and data lakes.
          </p>

          <div className="pt-6 border-t border-[#1e2038]/60 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Languages & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-xs text-slate-300 bg-white/[0.02] border border-[#1e2038] rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Box */}
      <div className="p-8 sm:p-12 rounded-2xl glass-panel text-center max-w-4xl mx-auto space-y-6 border border-primary/20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
          Request a Custom Demo of {data.name}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          See the product running inside your development environments. Arrange a technical session with our systems engineers.
        </p>
        <div>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-[#030308] bg-gradient-to-r from-primary to-[#4FACFE] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/15"
          >
            Arrange Technical Session
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

    </div>
  );
}
