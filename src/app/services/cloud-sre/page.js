"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Server,
  Zap, Cpu, Sparkles, Database, Lock, Globe, ArrowUpRight, 
  Layers, Settings, Play, Cloud, ShieldAlert, ThumbsUp,
  Terminal, Activity, RefreshCw, Sliders
} from "lucide-react";

export default function CloudSrePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [faqPage, setFaqPage] = useState(0);
  const [faqInput, setFaqInput] = useState("");
  const [faqSent, setFaqSent] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const [activePillar, setActivePillar] = useState("migration");
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [activeMigrationStep, setActiveMigrationStep] = useState(0);
  const [activeTuningIds, setActiveTuningIds] = useState(["rightSize", "autoscaling", "cleanup"]);
  const [displayedSavings, setDisplayedSavings] = useState(4200);

  const consoleScripts = {
    migration: [
      "guest@sre-console:~$ cat db_migration_worker.js",
      "// Database migration task configuration",
      "const migrationConfig = {",
      "  source: \"postgres://on-premise-db:5432/prod\",",
      "  target: \"postgres://rds-cluster.aws.internal/prod\",",
      "  syncOptions: {",
      "    concurrency: 4,",
      "    enableReplicationTunnel: true,",
      "    verifyDataIntegrity: true",
      "  },",
      "  tables: [\"users\", \"orders\", \"ledger\"]",
      "};",
      "",
      "async function runMigration() {",
      "  console.log(\"Initializing secure database sync...\");",
      "  await SchemaMigrator.sync(migrationConfig);",
      "  await DataReplicator.start(migrationConfig);",
      "}",
      "// Connection tunnel established ... [OK]",
      "// Replicating records (3.4M records) ... [SUCCESS]"
    ],
    iac: [
      "guest@sre-console:~$ cat main.tf",
      "# Infrastructure as Code: AWS VPC Network setup",
      "resource \"aws_vpc\" \"prod_network\" {",
      "  cidr_block           = \"10.0.0.0/16\"",
      "  enable_dns_hostnames = true",
      "  tags = {",
      "    Environment = \"production\"",
      "    ManagedBy   = \"terraform\"",
      "  }",
      "}",
      "",
      "module \"eks_cluster\" {",
      "  source          = \"terraform-aws-modules/eks/aws\"",
      "  cluster_name    = \"prod-k8s-orchestrator\"",
      "  vpc_id          = aws_vpc.prod_network.id",
      "  subnets         = aws_vpc.prod_network.private_subnets",
      "  instance_types  = [\"m5.xlarge\"]",
      "  desired_capacity = 3",
      "}",
      "# terraform validate ... [SUCCESS]",
      "# terraform plan ... 15 resources to add, 0 to destroy"
    ],
    sre: [
      "guest@sre-console:~$ cat prometheus_alerts.yml",
      "# Site Reliability Engineering monitoring rules",
      "apiVersion: monitoring.coreos.com/v1",
      "kind: PrometheusRule",
      "metadata:",
      "  name: sre-sla-alerts",
      "spec:",
      "  groups:",
      "  - name: api-slo-rules",
      "    rules:",
      "    - alert: HighErrorRate",
      "      expr: sum(rate(http_requests_total{status=~\"5..\"}[5m])) > 0.001",
      "      for: 2m",
      "      labels:",
      "        severity: critical",
      "        tier: sre",
      "      annotations:",
      "        summary: \"Error rate is high: SLA error budget at risk\"",
      "# Prometheus service status ... [OK]",
      "# Active target health check ... [99.995% SLA COMPLIANT]"
    ]
  };

  useEffect(() => {
    setTerminalLogs([]);
    let currentIdx = 0;
    const script = consoleScripts[activePillar];
    setTerminalLogs([script[0]]);

    const interval = setInterval(() => {
      currentIdx++;
      if (currentIdx < script.length) {
        setTerminalLogs(prev => [...prev, script[currentIdx]]);
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [activePillar]);

  const costTuningItems = [
    {
      id: "rightSize",
      title: "Right-sizing Instances",
      desc: "Analyze CPU/RAM load metrics to scale down over-provisioned nodes.",
      saving: 1800,
      percent: 12,
      icon: Cpu,
    },
    {
      id: "reserved",
      title: "Reserved Configurations",
      desc: "Lock in committed usage discounts (1-3 year terms) for base workloads.",
      saving: 1400,
      percent: 9,
      icon: Lock,
    },
    {
      id: "spot",
      title: "Spot Workload Run",
      desc: "Use spare cloud capacity for fault-tolerant and batch processing tasks.",
      saving: 1100,
      percent: 7,
      icon: Zap,
    },
    {
      id: "autoscaling",
      title: "Auto-scaling Thresholds",
      desc: "Provision capacity dynamically based on active request volumes.",
      saving: 1500,
      percent: 10,
      icon: Server,
    },
    {
      id: "storage",
      title: "Storage Lifecycle Rules",
      desc: "Move cold assets automatically to archive storage classes.",
      saving: 600,
      percent: 4,
      icon: Database,
    },
    {
      id: "cleanup",
      title: "Unused Resources Sweep",
      desc: "Detect and release orphan elastic IPs, detached disks, and idle DBs.",
      saving: 900,
      percent: 6,
      icon: Settings,
    },
    {
      id: "multiregion",
      title: "Multi-region Tuning",
      desc: "Reroute cloud data transfer paths to bypass high egress zone fees.",
      saving: 700,
      percent: 5,
      icon: Globe,
    }
  ];

  const targetSavings = costTuningItems
    .filter(item => activeTuningIds.includes(item.id))
    .reduce((sum, item) => sum + item.saving, 0);

  useEffect(() => {
    let start = displayedSavings;
    const end = targetSavings;
    if (start === end) return;

    const diff = end - start;
    const step = Math.ceil(Math.abs(diff) / 10) * (diff > 0 ? 1 : -1);

    const timer = setInterval(() => {
      start += step;
      if ((diff > 0 && start >= end) || (diff < 0 && start <= end)) {
        setDisplayedSavings(end);
        clearInterval(timer);
      } else {
        setDisplayedSavings(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [targetSavings]);

  // Scroll targets for Success Stories Sticky animation
  const successStoriesRef = useRef(null);
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!successStoriesRef.current) return;
      const rect = successStoriesRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollHeight = rect.height - viewportHeight;
      
      let p = 0;
      if (rect.top > 0) {
        p = 0;
      } else if (rect.bottom < viewportHeight) {
        p = 1;
      } else {
        p = -rect.top / scrollHeight;
      }
      scrollProgress.set(p);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Run initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollProgress]);

  // Scroll Mitosis Card division coordinates
  const leftCardX = useTransform(scrollProgress, [0, 0.55], [0, -55]);
  const rightCardX = useTransform(scrollProgress, [0, 0.55], [0, 55]);

  // Inner border-radius morphing: goes from 0px (merged) to 24px (fully split)
  const leftCardRadius = useTransform(scrollProgress, [0, 0.55], [0, 24]);
  const rightCardRadius = useTransform(scrollProgress, [0, 0.55], [0, 24]);

  // Inner border color fading in
  const leftCardBorderColor = useTransform(scrollProgress, [0.15, 0.55], ["rgba(16, 185, 129, 0.02)", "rgba(16, 185, 129, 0.25)"]);
  const rightCardBorderColor = useTransform(scrollProgress, [0.15, 0.55], ["rgba(16, 185, 129, 0.02)", "rgba(16, 185, 129, 0.25)"]);

  // Inner content fade & scale
  const innerOpacity = useTransform(scrollProgress, [0.35, 0.55], [0, 1]);
  const innerScale = useTransform(scrollProgress, [0.35, 0.55], [0.95, 1]);

  // Merged overlay fade & scale
  const overlayOpacity = useTransform(scrollProgress, [0, 0.20], [1, 0]);
  const overlayScale = useTransform(scrollProgress, [0, 0.20], [1, 0.9]);

  const approach = {
    migration: {
      title: "Cloud Migration",
      desc: "Phased, safe workload migrations ensuring transaction safety and minimal disruption.",
      bullets: [
        "Readiness assessment & audit",
        "Landing zone baseline setup",
        "Lift-and-shift or microservices re-architecture",
        "Active data migration strategies",
        "Cutover dry-run & planning"
      ]
    },
    iac: {
      title: "Infrastructure as Code",
      desc: "Declarative configuration states that completely replace manual server setup cycles.",
      bullets: [
        "Terraform & CloudFormation modules",
        "GitOps delivery pipelines",
        "Multi-environment states lock",
        "Automated workspace provisioning",
        "Drift compliance detection rules"
      ]
    },
    sre: {
      title: "Site Reliability Engineering",
      desc: "Continuous performance audits, incident management systems, and target SLA tracking.",
      bullets: [
        "SLO/SLI baseline threshold definition",
        "Error budget tracking rules",
        "Automated incident escalations",
        "Observability dashboard (Grafana / Datadog)",
        "Disaster Recovery & active back syncs"
      ]
    }
  };

  const cloudPlatforms = [
    {
      name: "Amazon Web Services (AWS)",
      desc: "EC2 runtime nodes, EKS clusters, Lambda serverless, PostgreSQL RDS, S3 storage buckets, CloudFront CDN, and Route53 routing gateways.",
      color: "border-orange-500/20 text-orange-400"
    },
    {
      name: "Microsoft Azure",
      desc: "Azure VMs, AKS Kubernetes clusters, Functions backend handlers, SQL server directories, Blob Storage buckets, and Azure CDN.",
      color: "border-blue-500/20 text-blue-400"
    },
    {
      name: "Google Cloud Platform (GCP)",
      desc: "Compute Engine nodes, GKE orchestrators, Cloud Run handlers, Cloud SQL schemas, and Google Cloud Storage buckets.",
      color: "border-red-500/20 text-red-400"
    }
  ];

  const migrationSteps = [
    {
      title: "Assessment",
      desc: "We analyze your active server states, catalog database assets, calculate cloud TCO (Total Cost of Ownership), and map system dependencies.",
      bullets: ["Asset inventory audits", "TCO cost calculators", "Initial risks matrix"]
    },
    {
      title: "Planning",
      desc: "We draft secure landing zones, configure virtual networks, map IAM identity groups, and draft migration waves.",
      bullets: ["Landing zone design", "IAM user controls setup", "Compliance baseline checks"]
    },
    {
      title: "Migration",
      desc: "We migrate core files and database layers in waves, running parallel pilot validations before final DNS switchovers.",
      bullets: ["Pilot wave run", "Microservices extraction", "Ledger sync validation"]
    },
    {
      title: "Optimization",
      desc: "We tune database indices, implement automated autoscaling rules, configure monitoring dashboards, and set budget guardrails.",
      bullets: ["Cost scaling guardrails", "Grafana alerts thresholds", "Continuous load auditing"]
    }
  ];

  // costTuning configuration replaced by costTuningItems

  const successStories = [
    {
      title: "E-Commerce Platform Cloud Migration",
      challenge: "Migrating legacy on-premise ERP infrastructure to the cloud with zero transactional downtime.",
      solution: "A phased migration strategy with blue-green deployment gates and real-time active data synchronization.",
      results: [
        "Zero downtime during cutover phases",
        "Active blue-green deployment waves",
        "Real-time database sync pipelines"
      ],
      borderColor: "border-blue-500/25"
    },
    {
      title: "SaaS Company Multi-Cloud Strategy",
      challenge: "Reducing platform vendor lock-in risk and optimizing delivery latency for globally distributed users.",
      solution: "A multi-cloud deployment strategy utilizing declarative Terraform modules and Kubernetes container orchestrators.",
      results: [
        "Eliminated single vendor dependency risk",
        "Reduced latency for global users by 35%",
        "100% automated infrastructure setups"
      ],
      borderColor: "border-purple-500/25"
    }
  ];

  const faqs = [
    {
      q: "How long does a typical cloud migration take?",
      a: "Simple migrations can take 8-12 weeks. Complex enterprise migrations typically range from 6-12 months depending on workload complexity, data volume, and regulatory requirements. We use a phased approach to minimize risk."
    },
    {
      q: "What is the typical cost savings from cloud migration?",
      a: "Most clients see 20-40% cost reduction after optimization. Initial costs may be similar to on-premise, but savings come from eliminating hardware refresh cycles, reducing data center costs, and optimizing resource utilization."
    },
    {
      q: "Do you provide ongoing support after migration?",
      a: "Yes! We offer managed cloud services with 24/7 monitoring, incident response, optimization, and cost management. Our SRE team ensures your infrastructure remains reliable and efficient."
    },
    {
      q: "Can you help with multi-cloud strategy?",
      a: "Absolutely. We design cloud-agnostic architectures using Kubernetes, Terraform, and container technologies that work across multiple cloud platforms. This prevents vendor lock-in and optimizes costs."
    },
    {
      q: "What about compliance and security?",
      a: "We implement security best practices including encryption at rest/transit, IAM policies, network segmentation, security compliance frameworks, and regular security audits."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <Cloud className="w-3.5 h-3.5 text-[#1591DC]" />
                <span>Cloud & Site Reliability Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Cloud Migrations <br />
                <span className="bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  & SRE Practices
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Migrate to the cloud safely, automate infrastructure setups using declarative states, and implement Site Reliability Engineering workflows.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#process" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  Our Process
                </a>
              </div>
            </motion.div>

            {/* Right Side Vector/SVG Blueprint Gimmick */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-sre" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(168, 85, 247, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-sre)" />
                  <circle cx="200" cy="150" r="50" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5 5" />
                  <circle cx="200" cy="150" r="18" fill="#090d16" stroke="#8b5cf6" strokeWidth="2.5" />
                  <Server className="w-4 h-4 text-[#8b5cf6] -translate-x-2 -translate-y-2" style={{ transform: "translate(200px, 150px)" }} />
                  
                  <g transform="translate(100, 100)">
                    <circle r="16" fill="#0c0e1e" stroke="#c084fc" strokeWidth="2" />
                    <Cpu className="w-4 h-4 text-[#c084fc] -translate-x-2 -translate-y-2" />
                  </g>
                  <g transform="translate(300, 100)">
                    <circle r="16" fill="#0c0e1e" stroke="#c084fc" strokeWidth="2" />
                    <Layers className="w-4 h-4 text-[#c084fc] -translate-x-2 -translate-y-2" />
                  </g>
                  <g transform="translate(200, 250)">
                    <circle r="16" fill="#0c0e1e" stroke="#c084fc" strokeWidth="2" />
                    <Database className="w-4 h-4 text-[#c084fc] -translate-x-2 -translate-y-2" />
                  </g>
                  <path d="M 100,100 Q 200,100 200,132" fill="none" stroke="#8b5cf6" strokeWidth="1.5" className="svg-blueprint-line" />
                  <path d="M 300,100 Q 200,100 200,132" fill="none" stroke="#8b5cf6" strokeWidth="1.5" className="svg-blueprint-line" />
                  <path d="M 200,250 L 200,168" fill="none" stroke="#8b5cf6" strokeWidth="1.5" className="svg-blueprint-line" />
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. THE THREE-COLUMN APPROACH (REDESIGNED: INTERACTIVE CONSOLE) */}
      <section className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#1c2c5c] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">operational::framework</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Our SRE & Infrastructure Approach</h3>
          </div>

          <div className="grid grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Interactive Tab Selector */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full">
                {Object.entries(approach).map(([key, value]) => {
                  const isActive = activePillar === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActivePillar(key)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between flex-1 sm:flex-initial ${
                        isActive
                          ? "bg-[#1b203a] border-[#2C5EAD] shadow-lg shadow-[#2C5EAD]/10 text-white"
                          : "bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-xl ${isActive ? "bg-[#2C5EAD]/20 text-[#4BB8FA]" : "bg-slate-800 text-slate-400"}`}>
                          {key === "migration" && <Cloud className="w-4 h-4" />}
                          {key === "iac" && <Settings className="w-4 h-4" />}
                          {key === "sre" && <Activity className="w-4 h-4" />}
                        </div>
                        <div>
                          <h4 className="text-xs font-extrabold tracking-wide">{value.title}</h4>
                        </div>
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? "-rotate-90 text-[#4BB8FA]" : "text-slate-500"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dynamic Info Panel (Replaces Terminal on Desktop/Tablet) */}
            <div className="col-span-12 lg:col-span-8 flex flex-col h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-3xl bg-slate-900/60 border border-white/5 flex flex-col justify-between h-full min-h-[300px] w-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span className="text-[9px] font-bold text-cyan-400 font-mono uppercase tracking-wider">active_scope::details</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white">{approach[activePillar].title}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{approach[activePillar].desc}</p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/5">
                      {approach[activePillar].bullets.map((b) => (
                        <li key={b} className="flex items-start text-xs text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUPPORTED PLATFORMS */}
      <section className="relative bg-gradient-to-b from-[#1c2c5c] via-[#263c75] to-[#334e8f] py-20 border-b border-white/5 overflow-hidden">
        {/* Floating Background Cloud */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6, 
              ease: "easeInOut" 
            }}
            className="w-[480px] h-[480px] relative opacity-[0.12] sm:opacity-[0.16]"
          >
            {/* Glow Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-cyan-400/25 blur-[90px] pointer-events-none" />
            
            <svg 
              className="w-full h-full text-cyan-400"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.4"
              strokeDasharray="0.8 2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.54 0-1.1.09-1.61.26A5.5 5.5 0 0 0 4.5 13a4.5 4.5 0 0 0 0 9h13Z" />
            </svg>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#4BB8FA] uppercase font-mono">supported::ecosystem</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Cloud Platforms We Support</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cloudPlatforms.map((plat) => (
              <div 
                key={plat.name}
                className={`p-6 rounded-2xl bg-slate-950/40 border ${plat.color} flex flex-col space-y-3 backdrop-blur-sm`}
              >
                <h4 className="text-base font-bold text-white">{plat.name}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{plat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MIGRATION TIMELINE PROCESS */}
      <section id="process" className="relative bg-gradient-to-b from-[#334e8f] via-[#5978be] to-[#cddbf7] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 text-white">
            <h2 className="text-[10px] font-black tracking-widest text-slate-300 uppercase font-mono">migration::waves</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">The Migration Process</h3>
          </div>

          {/* Custom Horizontal Step Pipeline Stepper */}
          <div className="relative max-w-4xl mx-auto mb-16 select-none">
            {/* SVG Connecting pipeline underlay */}
            <div className="absolute top-[28px] sm:top-[32px] left-0 right-0 h-0.5 bg-[#ffffff]/10 -z-10">
              <motion.div 
                className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-[#10b981]" 
                style={{ width: `${(activeMigrationStep / 3) * 100}%` }}
                layoutId="stepper-pipeline"
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
              />
            </div>

            <div className="flex flex-row justify-between items-center w-full gap-2 sm:gap-0">
              {migrationSteps.map((step, idx) => {
                const isActive = activeMigrationStep === idx;
                const isCompleted = idx < activeMigrationStep;
                return (
                  <button
                    key={step.title}
                    onClick={() => setActiveMigrationStep(idx)}
                    className="flex flex-col items-center group relative z-10 focus:outline-none"
                  >
                    <div 
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-mono font-bold text-sm sm:text-lg transition-all duration-300 border shadow-lg ${
                        isActive
                          ? "bg-slate-900 text-white border-cyan-400 scale-110 shadow-cyan-400/20"
                          : isCompleted
                          ? "bg-cyan-500 text-slate-950 border-cyan-500 shadow-cyan-500/10"
                          : "bg-slate-950 text-slate-400 border-white/10 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      0{idx + 1}
                    </div>
                    <span className={`text-[9px] sm:text-xs font-extrabold font-mono tracking-wider mt-3 transition-colors duration-300 uppercase ${
                      isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                    }`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details & Visual Pipeline */}
          <div className="grid grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Card: Details for active step */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between max-w-2xl mx-auto lg:mx-0 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMigrationStep}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-3xl bg-white border border-slate-300 shadow-lg flex flex-col justify-between h-full text-slate-800 relative shadow-[inset_1px_1px_0px_#fff,0_4px_12px_rgba(0,0,0,0.05)] border-t-[#ffffff] border-l-[#ffffff] border-b-[#b8c2cc] border-r-[#b8c2cc]"
                >
                  <div className="text-center flex flex-col items-center">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-100/60 border border-blue-200/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                        step_wave::0{activeMigrationStep + 1}
                      </span>
                      <h3 className="text-xl font-bold text-[#0a1e3b] pt-1">{migrationSteps[activeMigrationStep].title}</h3>
                      
                      {/* Accent Blue Separator Line */}
                      <div className="w-12 h-1 bg-blue-600 rounded mx-auto my-3" />
                      
                      <p className="text-xs text-slate-650 leading-relaxed max-w-sm mx-auto">{migrationSteps[activeMigrationStep].desc}</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-5 mt-6 flex flex-col items-center">
                    <ul className="space-y-2 text-left w-fit">
                      {migrationSteps[activeMigrationStep].bullets.map((b) => (
                        <li key={b} className="flex items-center text-xs text-slate-700 font-medium">
                          <Check className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Card: SVG Visual Network Pipeline */}
            <div className="col-span-12 lg:col-span-7 p-6 rounded-3xl bg-[#090b16]/95 border border-white/5 hidden lg:flex flex-col items-center justify-center relative overflow-hidden h-[300px] lg:h-auto">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.02),transparent_70%)] pointer-events-none" />
              
              <div className="w-full h-full max-w-[480px] max-h-[220px]">
                <svg viewBox="0 0 500 240" className="w-full h-full select-none" fill="none">
                  {/* Pipeline Path Connecting Nodes */}
                  <path 
                    d="M 120 120 C 200 120, 300 120, 380 120" 
                    stroke="rgba(255, 255, 255, 0.08)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 120 120 C 200 120, 300 120, 380 120" 
                    stroke="url(#pipeline-grad)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeDasharray={activeMigrationStep === 2 ? "12, 12" : "none"} 
                    className={activeMigrationStep === 2 ? "animate-pulse" : ""} 
                  />
                  
                  {/* Gradient Definitions */}
                  <defs>
                    <linearGradient id="pipeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#818cf8" />
                    </linearGradient>
                    
                    <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                  </defs>

                  {/* Left Node: Local Host Core Database / Rack */}
                  <g transform="translate(60, 120)">
                    {/* Glowing Aura if active */}
                    {activeMigrationStep === 0 && (
                      <motion.circle 
                        r="55" 
                        fill="rgba(34, 211, 238, 0.05)" 
                        stroke="rgba(34, 211, 238, 0.15)"
                        strokeWidth="1.5"
                        animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0.2, 0.8] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                      />
                    )}
                    <rect x="-40" y="-45" width="80" height="90" rx="8" fill="#11142a" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                    
                    {/* Server Rack Draw */}
                    <rect x="-32" y="-35" width="64" height="15" rx="3" fill="#0c0e1e" stroke={activeMigrationStep === 0 ? "#22d3ee" : "rgba(255,255,255,0.05)"} strokeWidth="1" />
                    <circle cx="-20" cy="-27.5" r="2.5" fill="#22d3ee" />
                    <circle cx="-10" cy="-27.5" r="1.5" fill="#10b981" />
                    <line x1="5" y1="-27.5" x2="24" y2="-27.5" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />

                    <rect x="-32" y="-12" width="64" height="15" rx="3" fill="#0c0e1e" stroke={activeMigrationStep === 0 ? "#22d3ee" : "rgba(255,255,255,0.05)"} strokeWidth="1" />
                    <circle cx="-20" cy="-4.5" r="2.5" fill="#ef4444" className="animate-pulse" />
                    <circle cx="-10" cy="-4.5" r="1.5" fill="#22d3ee" />
                    <line x1="5" y1="-4.5" x2="24" y2="-4.5" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />

                    <rect x="-32" y="11" width="64" height="15" rx="3" fill="#0c0e1e" stroke={activeMigrationStep === 0 ? "#22d3ee" : "rgba(255,255,255,0.05)"} strokeWidth="1" />
                    <circle cx="-20" cy="18.5" r="2.5" fill="#10b981" />
                    <circle cx="-10" cy="18.5" r="1.5" fill="#10b981" />
                    <line x1="5" y1="18.5" x2="24" y2="18.5" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />

                    <text x="0" y="58" textAnchor="middle" fill="#94a3b8" fontSize="8" fontWeight="bold" fontFamily="monospace">ON-PREM HOST</text>

                    {/* Step 0 Radar Scan overlay */}
                    {activeMigrationStep === 0 && (
                      <g>
                        <circle r="36" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="6, 6" className="animate-spin-slow" />
                        <line x1="-36" y1="0" x2="36" y2="0" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" />
                      </g>
                    )}
                  </g>

                  {/* Step 2: Flying Particle packets */}
                  {activeMigrationStep === 2 && (
                    <>
                      <motion.circle
                        cx="0"
                        cy="0"
                        r="5"
                        fill="#22d3ee"
                        className="shadow-sm shadow-cyan-400"
                        animate={{
                          x: [120, 250, 380],
                          y: [120, 110, 120],
                          scale: [0.7, 1.2, 0.7],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.circle
                        cx="0"
                        cy="0"
                        r="4"
                        fill="#818cf8"
                        animate={{
                          x: [120, 250, 380],
                          y: [120, 130, 120],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          delay: 0.7,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.circle
                        cx="0"
                        cy="0"
                        r="4"
                        fill="#10b981"
                        animate={{
                          x: [120, 250, 380],
                          y: [120, 115, 120],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          delay: 1.4,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  )}

                  {/* Right Node: Cloud Target Infrastructure */}
                  <g transform="translate(440, 120)">
                    {/* Glowing Aura if active */}
                    {(activeMigrationStep === 1 || activeMigrationStep === 3) && (
                      <motion.circle 
                        r="55" 
                        fill="rgba(129, 140, 248, 0.05)" 
                        stroke="rgba(129, 140, 248, 0.15)"
                        strokeWidth="1.5"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.3, 0.7] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                      />
                    )}
                    
                    {/* Cloud Node Draw */}
                    <path 
                      d="M -25 -15 C -25 -30, -5 -35, 5 -30 C 15 -35, 30 -30, 30 -15 C 38 -15, 38 -2, 30 5 C 30 15, 10 20, 0 15 C -15 20, -25 15, -25 5 C -35 5, -35 -15, -25 -15 Z" 
                      fill="url(#cloud-grad)" 
                      stroke="rgba(255,255,255,0.15)" 
                      strokeWidth="2" 
                    />

                    <text x="0" y="42" textAnchor="middle" fill="#818cf8" fontSize="8" fontWeight="bold" fontFamily="monospace">CLOUD VPC</text>

                    {/* Step 1: Planning (Draw Blueprint Lock/Shield) */}
                    {activeMigrationStep === 1 && (
                      <g transform="translate(0, -5)">
                        <rect x="-14" y="-12" width="28" height="24" rx="4" fill="#0a0c16" stroke="#22d3ee" strokeWidth="1.5" />
                        <circle cx="0" cy="-2" r="3" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
                        <path d="M -3 3 L 3 3" stroke="#22d3ee" strokeWidth="1.5" />
                      </g>
                    )}

                    {/* Step 3: Optimization (Spinning Dial/Settings Gear) */}
                    {activeMigrationStep === 3 && (
                      <g transform="translate(0, -5)">
                        <motion.g
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        >
                          <circle r="14" stroke="#10b981" strokeWidth="3" strokeDasharray="6, 3" fill="none" />
                          <circle r="7" fill="#10b981" />
                        </motion.g>
                        <circle r="3" fill="#ffffff" />
                      </g>
                    )}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COST OPTIMIZATION AND CHECKS (REDESIGNED: CALCULATOR DASHBOARD) */}
      <section className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">efficiency::audit</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Cost Optimization Guardrails</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Toggle our SRE tuning policies below to estimate your dynamic cloud cost savings.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Premium Interactive Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {costTuningItems.map((item) => {
                const isActive = activeTuningIds.includes(item.id);
                const IconComponent = item.icon;
                
                const handleToggle = () => {
                  if (isActive) {
                    setActiveTuningIds(activeTuningIds.filter(id => id !== item.id));
                  } else {
                    setActiveTuningIds([...activeTuningIds, item.id]);
                  }
                };

                return (
                  <motion.div
                    key={item.id}
                    onClick={handleToggle}
                    whileHover={{ y: -4 }}
                    className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer select-none ${
                      isActive 
                        ? "bg-[#f0f9ff] border-[#2C5EAD] shadow-md shadow-[#2C5EAD]/5" 
                        : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className={`p-2 rounded-xl ${isActive ? "bg-[#2C5EAD]/15 text-[#2C5EAD]" : "bg-slate-100 text-slate-500"}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      
                      {/* Toggle Switch */}
                      <div className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 ${isActive ? "bg-emerald-500" : "bg-slate-200"}`}>
                        <div 
                          className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 transform ${
                            isActive ? "translate-x-4" : "translate-x-0"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-extrabold text-slate-900">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">SAVINGS TARGET</span>
                      <span className={`text-[10px] font-extrabold font-mono px-2 py-0.5 rounded ${
                        isActive ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-600"
                      }`}>
                        +{item.percent}% / +${item.saving}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Premium Calculator Visualizer Dashboard */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xl flex flex-col items-center justify-center text-center sticky top-6">
              <div className="space-y-6 w-full">
                <h4 className="text-base font-extrabold text-slate-900 uppercase tracking-wider font-mono">Savings Estimator</h4>
                
                {/* SVG Gauge Visualizer */}
                <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Circle Background */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="42" 
                      stroke="#f1f5f9" 
                      strokeWidth="8" 
                      fill="none" 
                    />
                    {/* Animated Progress Ring */}
                    <motion.circle 
                      cx="50" 
                      cy="50" 
                      r="42" 
                      stroke="#10b981" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                      fill="none" 
                      strokeDasharray={2 * Math.PI * 42}
                      animate={{
                        strokeDashoffset: (2 * Math.PI * 42) * (1 - (costTuningItems
                          .filter(item => activeTuningIds.includes(item.id))
                          .reduce((sum, item) => sum + item.percent, 0) / 100))
                      }}
                      transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    />
                  </svg>
                  {/* Gauge Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-slate-900 font-mono leading-none">
                      {costTuningItems
                        .filter(item => activeTuningIds.includes(item.id))
                        .reduce((sum, item) => sum + item.percent, 0)}%
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">REDUCED</span>
                  </div>
                </div>

                {/* Savings Dollar Counter */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">ESTIMATED MONTHLY SAVINGS</span>
                  <div className="text-3xl font-black text-[#2C5EAD] font-mono tracking-tight">
                    ${displayedSavings.toLocaleString()}/mo
                  </div>
                  <p className="text-[10px] text-slate-500 leading-normal max-w-xs mx-auto">
                    *Based on average client clusters sizing from 50 to 500 active compute nodes.
                  </p>
                </div>

                {/* Checklist Summary */}
                <div className="pt-5 border-t border-slate-100 space-y-2.5 text-left">
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 font-mono">
                    <span>ACTIVE GUARDRAILS</span>
                    <span>{activeTuningIds.length} / 7 ACTIVE</span>
                  </div>
                  <div className="space-y-1.5 max-h-32 overflow-y-auto scrollbar-thin pr-1">
                    {costTuningItems.map(item => {
                      const isActive = activeTuningIds.includes(item.id);
                      if (!isActive) return null;
                      return (
                        <div key={item.id} className="flex items-center text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                          <Check className="w-3 h-3 text-emerald-600 mr-1.5 flex-shrink-0" />
                          <span className="truncate">{item.title}</span>
                        </div>
                      );
                    })}
                    {activeTuningIds.length === 0 && (
                      <div className="text-[10px] text-slate-400 text-center py-2 font-mono">
                        No active cost-tuning policies
                      </div>
                    )}
                  </div>
                </div>

                <Link 
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-xs shadow-md shadow-[#2C5EAD]/15"
                >
                  Schedule A Cost Audit
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section 
        ref={successStoriesRef} 
        className="relative h-auto lg:h-[135vh] bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] border-b border-black/5 text-slate-950"
      >
        <div className="relative lg:sticky lg:top-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto lg:h-screen py-12 lg:py-0 flex flex-col justify-center overflow-visible lg:overflow-hidden z-10">
          {/* Background Big Dotted Thumbs Up Icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
            {/* Soft Radial Glow */}
            <div className="absolute w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] lg:w-[850px] lg:h-[850px] rounded-full bg-emerald-500/5 blur-[80px]" />
            <svg 
              className="w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] lg:w-[750px] lg:h-[750px] text-emerald-600 opacity-[0.15]" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="thumbs-up-dots-sre" width="0.4" height="0.4" patternUnits="userSpaceOnUse">
                  <circle cx="0.2" cy="0.2" r="0.05" fill="currentColor" />
                </pattern>
              </defs>
              <path 
                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                fill="url(#thumbs-up-dots-sre)"
              />
              <path 
                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                stroke="currentColor"
                strokeWidth="0.12"
                strokeDasharray="0.01 0.3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Animation container */}
          <div className="relative w-full max-w-5xl mx-auto h-auto lg:h-[450px] flex justify-center items-center">
            
            {/* Desktop Mitosis Scroll Animation */}
            <div className="hidden lg:flex justify-center items-center relative w-full max-w-[900px] h-full">
              
              {/* Central Separating Seam Line */}
              <motion.div 
                style={{ opacity: overlayOpacity }}
                className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/25 to-transparent z-25 pointer-events-none"
              />

              {/* 1. Left Card */}
              <motion.div 
                style={{ 
                  x: leftCardX, 
                  borderTopRightRadius: leftCardRadius, 
                  borderBottomRightRadius: leftCardRadius,
                  borderRightColor: leftCardBorderColor
                }}
                className="w-[420px] h-[450px] bg-[#060b14] border border-emerald-500/25 shadow-[0_20px_50px_rgba(6,11,20,0.25)] relative flex flex-col justify-between p-6 md:p-8 rounded-l-3xl z-10 transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.25)] pointer-events-auto text-white"
              >
                <div className="absolute inset-0 rounded-inherit bg-[radial-gradient(circle_at_100%_50%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />
                
                <motion.div 
                  style={{ opacity: innerOpacity, scale: innerScale }}
                  className="w-full h-full flex flex-col justify-between relative z-10"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">MIGRATION</span>
                      <span className="text-xl font-bold text-slate-700 font-mono">01</span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight">{successStories[0].title}</h3>
                    
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono">The Challenge</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{successStories[0].challenge}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-teal-400 tracking-wider uppercase block font-mono">Our Strategy</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{successStories[0].solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-5 mt-4">
                    <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono mb-2">Key Results</span>
                    <ul className="space-y-1">
                      {successStories[0].results.map((res, i) => (
                        <li key={i} className="flex items-center text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 flex-shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>

              {/* 2. Right Card */}
              <motion.div 
                style={{ 
                  x: rightCardX, 
                  borderTopLeftRadius: rightCardRadius, 
                  borderBottomLeftRadius: rightCardRadius,
                  borderLeftColor: rightCardBorderColor
                }}
                className="w-[420px] h-[450px] bg-[#060b14] border border-emerald-500/25 shadow-[0_20px_50px_rgba(6,11,20,0.25)] relative flex flex-col justify-between p-6 md:p-8 rounded-r-3xl z-10 transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.25)] pointer-events-auto text-white"
              >
                <div className="absolute inset-0 rounded-inherit bg-[radial-gradient(circle_at_0%_50%,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none" />
                
                <motion.div 
                  style={{ opacity: innerOpacity, scale: innerScale }}
                  className="w-full h-full flex flex-col justify-between relative z-10"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-bold text-teal-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">MULTI-CLOUD</span>
                      <span className="text-xl font-bold text-slate-700 font-mono">02</span>
                    </div>
                    <h3 className="text-xl font-black text-white leading-tight">{successStories[1].title}</h3>
                    
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono">The Challenge</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{successStories[1].challenge}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-teal-400 tracking-wider uppercase block font-mono">Our Strategy</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{successStories[1].solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-5 mt-4">
                    <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono mb-2">Key Results</span>
                    <ul className="space-y-1">
                      {successStories[1].results.map((res, i) => (
                        <li key={i} className="flex items-center text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 flex-shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>

              {/* 3. Central Overlay */}
              <motion.div 
                style={{ opacity: overlayOpacity, scale: overlayScale }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-30 pointer-events-none w-full px-8"
              >
                <h4 className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                  Our <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Success Stories</span>
                </h4>
                <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mt-4 font-mono">
                  Scroll down to divide cluster
                </p>
              </motion.div>

            </div>

            {/* Mobile View: Standard Stacked Cards */}
            <div className="block lg:hidden space-y-6 px-2 w-full max-w-md mx-auto">
              <div className="p-6 rounded-2xl bg-[#060b14] border border-emerald-500/20 shadow-md flex flex-col items-center justify-center text-center py-10 text-white">
                <ThumbsUp className="w-10 h-10 text-emerald-400 mb-4 animate-bounce" />
                <h4 className="text-xl font-extrabold text-white">Our Success Stories</h4>
                <p className="text-xs text-emerald-400 mt-2 font-medium">Read our featured case studies below</p>
              </div>
              
              {successStories.map((story) => (
                <div 
                  key={story.title}
                  className="p-6 rounded-2xl bg-[#060b14] border border-emerald-500/20 shadow-md flex flex-col justify-between text-white"
                >
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-white">{story.title}</h4>
                    
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono">The Challenge</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{story.challenge}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-teal-400 tracking-wider uppercase block font-mono">Our Strategy</span>
                      <p className="text-xs text-slate-300 leading-relaxed">{story.solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-4">
                    <span className="text-[8px] font-bold text-emerald-400 tracking-wider uppercase block font-mono mb-2">Key Results</span>
                    <ul className="space-y-1.5">
                      {story.results.map((res, i) => (
                        <li key={i} className="flex items-center text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 flex-shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="relative bg-gradient-to-b from-[#d6e5fb] via-[#e6effb] to-[#edf4fc] py-24 overflow-hidden text-slate-950 border-b border-slate-100">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          {/* Watermark text behind */}
          <div className="absolute inset-0 flex items-center justify-center -top-8 pointer-events-none select-none overflow-hidden">
            <span className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-100 tracking-wider whitespace-nowrap opacity-70 uppercase">
              Frequently Ask Question
            </span>
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 relative z-10">
            Frequently Ask Question
          </h3>
          <p className="text-sm font-bold text-cyan-500 mt-2 relative z-10 cursor-pointer hover:underline">
            <Link href="/contact">Click Here to contact now.</Link>
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Accordions & Pagination */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <div className="space-y-4 min-h-[380px]">
                {faqs.slice(faqPage * 3, (faqPage + 1) * 3).map((faq, pageIdx) => {
                  const globalIdx = faqPage * 3 + pageIdx;
                  const isOpen = openFaqIndex === globalIdx;
                  return (
                    <div 
                      key={globalIdx} 
                      className="border border-slate-100 rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                    >
                      <button
                        onClick={() => toggleFaq(globalIdx)}
                        className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                      >
                        <span>{faq.q}</span>
                        <div className="w-8 h-8 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white text-base font-black flex-shrink-0 transition-colors shadow-sm">
                          {isOpen ? "−" : "+"}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              <div className="flex items-center justify-start gap-4 pt-6 pl-4">
                <button 
                  onClick={() => setFaqPage(0)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-sm ${
                    faqPage === 0 ? "bg-cyan-600 scale-105" : "bg-cyan-500/70 hover:bg-cyan-500"
                  }`}
                >
                  1
                </button>
                <button 
                  onClick={() => setFaqPage(1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-sm ${
                    faqPage === 1 ? "bg-cyan-600 scale-105" : "bg-cyan-500/70 hover:bg-cyan-500"
                  }`}
                >
                  2
                </button>
              </div>
            </div>

            {/* Right Column: Illustration & Question Input Form */}
            <div className="lg:col-span-5 flex flex-col items-center p-8 bg-slate-50/50 rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
              {/* Question mark illustration */}
              <div className="w-56 h-48 relative mb-6">
                <img 
                  src="/assets/cloud_faq_illustration.png" 
                  alt="Cloud FAQ Illustration" 
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="text-2xl font-extrabold text-slate-900 mb-1">Any Question?</h4>
              <p className="text-xs text-slate-500 text-center mb-6">
                You can ask anything you want to know about Cloud Migrations & SRE.
              </p>

              {/* Submission Form */}
              <div className="w-full space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono pl-1">
                    Let me know.
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Enter Here"
                      value={faqInput}
                      onChange={(e) => setFaqInput(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 pr-10 shadow-sm"
                    />
                    {faqInput && (
                      <button 
                        onClick={() => setFaqInput("")}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold font-mono"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <button 
                    onClick={() => {
                      if (!faqInput.trim()) return;
                      setFaqSent(true);
                      setFaqInput("");
                      setTimeout(() => setFaqSent(false), 4000);
                    }}
                    className="w-full sm:w-auto px-10 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
                  >
                    {faqSent ? "Sent Successfully!" : "Sent"}
                  </button>
                </div>
                
                {faqSent && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-[10px] font-bold text-emerald-600 font-mono mt-2"
                  >
                    Thank you! Your question has been forwarded to our support queue.
                  </motion.div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#edf4fc] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Plan Your Cloud Migration
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Let's assess your infrastructure and create a migration roadmap tailored to your needs. Talk with our site reliability engineers.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Talk to SRE Crew
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
