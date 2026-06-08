"use client";

import Carousel from "@/components/ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    {
      title: "Outcome Focused",
      desc: "We target measurable success metrics, driving projects to produce real commercial value rather than just delivering code.",
      button: "Learn More",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      href: "/about/outcome-focused",
    },
    {
      title: "Security First",
      desc: "We treat security as a primary dimension of architecture, integrating strict compliance and access controls at the core.",
      button: "Learn More",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      href: "/about/security-first",
    },
    {
      title: "Data Driven",
      desc: "We leverage analytics, logging, and performance telemetry to make informed engineering and hosting optimizations.",
      button: "Learn More",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      href: "/about/data-driven",
    },
    {
      title: "Partnership",
      desc: "We operate as an extension of your own engineering team, aligning completely on mission, velocity, and communication.",
      button: "Learn More",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
      href: "/about/partnership",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full py-10 pb-24">
      <Carousel slides={slideData} />
    </div>
  );
}
