"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, CheckCircle2, ChevronDown, Database, 
  Zap, Cpu, Sparkles, Lock, Globe, ArrowUpRight, 
  Layers, Settings, BarChart2, GitBranch, Brain, Network, Terminal, AlertTriangle,
  Activity, Users, FileText, Eye, TrendingUp, ShieldCheck
} from "lucide-react";

const TechLogo = ({ name }) => {
  const logos = {
    "Python": (
      <svg viewBox="0 0 110 110" className="w-8 h-8">
        <path fill="#3776AB" d="M55 2C42.8 2 31.8 5.7 31.8 17.5v8.7h23.7v3.3H23.5C11.3 29.5 2 36.8 2 49v17.5C2 78.7 11.3 88 23.5 88h8.7V79.2c0-11.8 9.3-21.1 21.6-21.1h23.7V39.4C77.5 27.2 68.2 17.5 56 17.5H45.7v8.7h8.7c6.1 0 11-4.9 11-11v-4.3C65.4 3 58 2 55 2z"/>
        <path fill="#FFE873" d="M55 108c12.2 0 23.2-3.7 23.2-15.5v-8.7H54.5v-3.3h32c12.2 0 21.5-7.3 21.5-19.5V49c0-12.2-9.3-21.5-21.5-21.5h-8.7v8.8c0 11.8-9.3 21.1-21.6 21.1H32.5v18.7c0 12.2 9.3 21.9 21.5 21.9h11.8v-8.7h-8.7c-6.1 0-11 4.9-11 11v4.3c0 6.1 7.4 7.1 10.4 7.1z"/>
      </svg>
    ),
    "Apache Airflow": (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="40" fill="#011627" />
        <path d="M128 40c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm38.1 138.2l-38.1-22-38.1 22v-44l38.1-22 38.1 22v44zm0-66.2l-38.1-22-38.1 22v-44l38.1-22 38.1 22v44z" fill="#00B1FF" />
        <path d="M128 128m-20 0a20 20 0 1 0 40 0a20 20 0 1 0 -40 0" fill="#E0FF4F" />
      </svg>
    ),
    "Snowflake": (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="40" fill="#29B6F6" />
        <path d="M128 40v176M40 128h176M66 66l124 124M66 190L190 66" stroke="white" strokeWidth="18" strokeLinecap="round" />
        <path d="M128 100l28 28-28 28-28-28z" fill="white" />
      </svg>
    ),
    "Google BigQuery": (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="40" fill="#4285F4" />
        <path d="M128 60c37.5 0 68 30.5 68 68s-30.5 68-68 68-68-30.5-68-68 30.5-68 68-68z" fill="#FFFFFF" fillOpacity="0.2" />
        <circle cx="128" cy="128" r="45" fill="#FFFFFF" />
        <path d="M160 160l40 40" stroke="#FFFFFF" strokeWidth="18" strokeLinecap="round" />
      </svg>
    ),
    "TensorFlow": (
      <svg viewBox="0 0 256 295" className="w-8 h-8">
        <path fill="#FF9F00" d="M128 0L24 60v120l104 60 104-60V60L128 0zm79.9 166.1l-79.9 46.1-79.9-46.1v-92.2l79.9-46.1 79.9 46.1v92.2z"/>
        <path fill="#E53935" d="M128 295l104-60v-68.9l-104 60V295z" />
      </svg>
    ),
    "PyTorch": (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <rect width="256" height="256" rx="40" fill="#EE4C2C" />
        <path d="M128 60c-35 0-60 25-60 68s25 68 60 68 60-25 60-68-25-68-60-68z" fill="white" />
        <path d="M128 85c-20 0-35 15-35 43s15 43 35 43 35-15 35-43-15-43-35-43z" fill="#EE4C2C" />
        <circle cx="160" cy="100" r="16" fill="white" />
      </svg>
    ),
    "OpenAI": (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#10a37f]" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7zm0 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
      </svg>
    ),
    "LangChain": (
      <svg viewBox="0 0 256 256" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="40" fill="#000000" />
        <path d="M70 128c0-30 25-55 55-55h10v20h-10c-20 0-35 15-35 35s15 35 35 35h10v20h-10c-30 0-55-25-55-55zm116-55c30 0 55 25 55 55s-25 55-55 55h-10v-20h-10c20 0 35-15 35-35s-15-35-35-35h10v-20h10z" fill="#00D2B4" />
        <rect x="100" y="118" width="56" height="20" rx="6" fill="#FFFFFF" />
      </svg>
    ),
    "Tableau": (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <rect width="256" height="256" rx="40" fill="#FFFFFF" stroke="#E2E2E2" strokeWidth="2" />
        <path d="M128 40v176M40 128h176" stroke="#E22722" strokeWidth="18" strokeLinecap="round" />
        <path d="M85 85l86 86M85 171l86-86" stroke="#1F77B4" strokeWidth="14" strokeLinecap="round" />
        <circle cx="128" cy="128" r="22" fill="#E22722" />
        <circle cx="128" cy="70" r="14" fill="#FF7F0E" />
        <circle cx="128" cy="186" r="14" fill="#FF7F0E" />
        <circle cx="70" cy="128" r="14" fill="#FF7F0E" />
        <circle cx="186" cy="128" r="14" fill="#FF7F0E" />
      </svg>
    ),
    "PowerBI": (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="5" fill="#F2C811" />
        <rect x="5" y="12" width="3.5" height="7" rx="1" fill="#F2A104" />
        <rect x="10.25" y="8" width="3.5" height="11" rx="1" fill="#E28903" />
        <rect x="15.5" y="4" width="3.5" height="15" rx="1" fill="#FFD95A" />
      </svg>
    )
  };
  return logos[name] || <Cpu className="w-8 h-8 text-slate-400" />;
};

export default function DataAiPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [faqPage, setFaqPage] = useState(0);
  const [faqInput, setFaqInput] = useState("");
  const [faqSent, setFaqSent] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // State for Data & AI Pillars simulator
  const [activePillar, setActivePillar] = useState("engineering");
  const [modelLogs, setModelLogs] = useState([]);

  // State for Pipeline steps stepper
  const [activeStep, setActiveStep] = useState(0);

  // State for Success Stories
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [activeStoryTab, setActiveStoryTab] = useState("challenge");

  const engineeringPillars = {
    engineering: {
      title: "Data Engineering",
      desc: "Architecting reliable data pipeline pipelines to scale information ingestion.",
      bullets: [
        "Reliable ETL/ELT pipeline builds",
        "Modern cloud data warehousing",
        "Real-time data streaming triggers",
        "Data quality & governance gates",
        "Data lakes & lakehouse systems"
      ]
    },
    mlOps: {
      title: "ML & AI Systems",
      desc: "Training and deploying machine learning models to production clusters.",
      bullets: [
        "Continuous MLOps pipelines",
        "Model training & deploy structures",
        "LLM & RAG vector store setup",
        "Predictive analytics engines",
        "Computer vision & NLP parsing"
      ]
    },
    analytics: {
      title: "Analytics & BI",
      desc: "Delivering business insights via structured intelligence dashboards.",
      bullets: [
        "Interactive analytics dashboards",
        "Custom scheduled business reports",
        "Enterprise Business Intelligence",
        "Responsive data visualizations",
        "Self-service data analytics models"
      ]
    }
  };

  const modelTrainingLogs = [
    "guest@ai-engine:~$ python train_recommender.py",
    "Initializing dataset loaders...",
    "Loaded 4.2M transactional records. Vectorizing user embeddings...",
    "Configuring deep learning neural net parameters...",
    "--------------------------------------------------",
    "Epoch 1/5 - loss: 0.8924 - accuracy: 0.6420 - val_loss: 0.7410",
    "Epoch 2/5 - loss: 0.4208 - accuracy: 0.8190 - val_loss: 0.3802",
    "Epoch 3/5 - loss: 0.2104 - accuracy: 0.9124 - val_loss: 0.2201",
    "Epoch 4/5 - loss: 0.1205 - accuracy: 0.9612 - val_loss: 0.1480",
    "Epoch 5/5 - loss: 0.0824 - accuracy: 0.9845 - val_loss: 0.0988",
    "--------------------------------------------------",
    "Model evaluation parameters verified. Metric checks [PASS]",
    "Model artifact saved to s3://ai-models/recommender_v2.bin",
    "MLOps pipelines state: Model deployed successfully [SUCCESS]"
  ];

  useEffect(() => {
    if (activePillar !== "mlOps") return;
    setModelLogs([]);
    let currentIdx = 0;
    setModelLogs([modelTrainingLogs[0]]);

    const interval = setInterval(() => {
      currentIdx++;
      if (currentIdx < modelTrainingLogs.length) {
        setModelLogs(prev => [...prev, modelTrainingLogs[currentIdx]]);
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [activePillar]);

  const approachSteps = [
    {
      title: "Enter Basic Criteria",
      desc: "Beginning with your basic criteria, we can provide a comprehensive list of solutions that are available."
    },
    {
      title: "Compare Options",
      desc: "See the different types of coverage options and start narrowing down which plans most satisfy your needs."
    },
    {
      title: "Purchase Plan",
      desc: "Get connected with fully qualified and licensed agents that will answer any additional questions and submit your application."
    }
  ];

  const useCases = [
    {
      title: "Predictive Maintenance",
      badge: "ACTIVE",
      desc: "Predict mechanical equipment failures, minimize unscheduled downtime, and optimize maintenance intervals using time-series forecasting models.",
      icon: Activity,
      detailType: "telemetry"
    },
    {
      title: "Customer Churn Prediction",
      badge: "PREDICTED",
      desc: "Identify high-risk customer profiles, analyze behavioral risk features, and trigger automated proactive customer retention workflows.",
      icon: Users,
      detailType: "churn-risk"
    },
    {
      title: "Document Intelligence",
      badge: "AUTOMATED",
      desc: "Extract structured tables, key-value parameters, and metadata variables from complex unstructured contracts and PDF invoices.",
      icon: FileText,
      detailType: "nlp-extract"
    },
    {
      title: "Recommendation Engines",
      badge: "OPTIMIZED",
      desc: "Deliver personalized product suggestions, dynamic search listings, and collaborative filtering recommendations for online commerce.",
      icon: Sparkles,
      detailType: "recommender"
    },
    {
      title: "Computer Vision",
      badge: "MONITORED",
      desc: "Automate manufacturing defect detections, object count tracking, and video telemetry auditing on production lines in real-time.",
      icon: Eye,
      detailType: "vision"
    },
    {
      title: "Large Language Models",
      badge: "INTEGRATED",
      desc: "Deploy Retrieval-Augmented Generation (RAG) vector stores, intelligent conversational assistants, and secure pipeline agents.",
      icon: Brain,
      detailType: "rag-chat"
    }
  ];

  const pipelineSteps = [
    {
      title: "Ingestion",
      desc: "Our ingestion layer acts as the high-throughput entry point for all structured, semi-structured, and unstructured data streams. We establish real-time streaming gates using Apache Kafka or AWS Kinesis to process high-frequency web events, clickstreams, and IoT sensor telemetry. Simultaneously, for traditional relational database replicas, we deploy Change Data Capture (CDC) pipelines via Debezium and Apache Flink to replicate transactions near-instantly. The system features auto-scaling buffering queues to absorb sudden traffic spikes, Schema Registry validation checks to prevent corrupt data propagation, and failure-tolerant backpressure handling.",
      bullets: [
        "High-throughput real-time streaming queues via Apache Kafka clusters and AWS Kinesis gates.",
        "Sub-second Change Data Capture (CDC) replication for relational and NoSQL databases.",
        "Automated Schema Registry validation checks to prevent corrupt data propagation.",
        "Dynamic backpressure control and dead-letter queue (DLQ) routing for ingress failures."
      ],
      metric: "Ingress Capacity: Up to 15.4 GB/s throughput with 99.999% packet delivery"
    },
    {
      title: "Transformation",
      desc: "Raw, unstructured data is seldom ready for analytical or machine learning model consumption. In this phase, we run distributed serverless processing jobs to clean, normalize, and enrich data streams on the fly. We employ Apache Spark for large-scale batch transformations and dbt (data build tool) for structured warehouse SQL modeling. Real-time stream filtering is managed by Apache Flink, allowing us to perform temporal joins, aggregate windowed events, and redact sensitive PII (Personally Identifiable Information) values. This ensures complete data privacy compliance while flattening nested JSON fields into clean schemas.",
      bullets: [
        "Distributed batch computing and modeling engines using Apache Spark clusters and dbt pipelines.",
        "Real-time streaming transformations, windows, and temporal joins powered by Apache Flink.",
        "Automated PII scrubbing, data masking, and field hashing for regulatory compliance.",
        "Dynamic schema evolutionary tracking, format normalization, and JSON flattening."
      ],
      metric: "Transformation Latency: < 35ms stream processing delay, daily batch runs in under 12 mins"
    },
    {
      title: "Storage",
      desc: "An optimized storage layer balances retrieval speed against infrastructure costs. We architect modern Data Lakehouses using open table formats like Apache Iceberg and Delta Lake on top of secure, low-cost object storage (AWS S3, Google Cloud Storage). This allows you to store petabytes of historical logs and query them directly using SQL. For high-performance business intelligence, we synchronize refined datasets to cloud data warehouses like Snowflake, Google BigQuery, or Amazon Redshift. We implement partition pruning, sorting key optimizations, and automatic clustering rules to speed up query execution.",
      bullets: [
        "Hybrid Data Lakehouse topologies using open formats like Apache Iceberg and Delta Lake.",
        "Auto-scaling analytical data warehouses including Snowflake, Google BigQuery, and Redshift.",
        "Dynamic table partition pruning, query clustering, and sorting key configurations.",
        "Hierarchical storage lifecycle policies transitioning cold datasets to Glacier/Archive tiers."
      ],
      metric: "Storage Volume: 42.8 TB active storage capacity with 60% query cost reduction"
    },
    {
      title: "Analysis",
      desc: "The final stage turns raw storage into business value. We expose sanitized datasets to end consumers via low-latency API gateways, cached views, and relational feature stores. For BI dashboard users, we build optimized connector nodes to Tableau, PowerBI, and Looker, ensuring dashboard interactions load in under 200ms. For machine learning use cases, we deploy real-time feature serving layers (e.g., Feast) that feed inference models with low-latency REST or GraphQL lookups. All query gates are protected by role-based access control (RBAC) and monitored for performance SLA compliance.",
      bullets: [
        "Sub-200ms interactive BI connectors for Tableau, PowerBI, Looker, and custom dashboards.",
        "Low-latency REST and GraphQL API gateways with Redis caching layers for query serving.",
        "ML Feature Store integrations (e.g., Feast) to serve real-time predictions.",
        "Granular row-and-column level security policies and RBAC compliance access gates."
      ],
      metric: "Uptime & Access: 99.995% service SLA availability, sub-15ms API response times"
    }
  ];

  const successStories = [
    {
      title: "E-Commerce Recommender",
      challenge: "Online retailer wanted to optimize conversion rates via personalized product listings.",
      solution: "We engineered a hybrid recommender using collaborative filtering matrices and LLM search embeddings.",
      results: "Increased product discovery rates and drove significant improvements in average order value.",
      stats: [
        { label: "Product Discovery", value: "+42% Boost" },
        { label: "Click-Through Rate", value: "3.2x Increase" },
        { label: "Average Order Value", value: "+18% Higher" }
      ]
    },
    {
      title: "Predictive Maintenance",
      challenge: "Factory floor suffered from costly, unplanned mechanical line downtimes.",
      solution: "We deployed time series forecasting models auditing sensor heat and vibration telemetry metrics.",
      results: "Significantly reduced unscheduled system downtimes and mechanical maintenance fees.",
      stats: [
        { label: "Line Downtime", value: "-50% Less" },
        { label: "Anomaly Detection", value: "99.4% Recall" },
        { label: "Maintenance Cost", value: "-28% Saved" }
      ]
    }
  ];

  const techStack = [
    { name: "Python", category: "Data Science" },
    { name: "Apache Airflow", category: "Orchestration" },
    { name: "Snowflake", category: "Data Warehouse" },
    { name: "Google BigQuery", category: "Serverless Analytics" },
    { name: "TensorFlow", category: "Deep Learning" },
    { name: "PyTorch", category: "AI Modeling" },
    { name: "OpenAI", category: "Large Language Models" },
    { name: "LangChain", category: "LLM Framework" },
    { name: "Tableau", category: "Visual BI" },
    { name: "PowerBI", category: "Enterprise BI" }
  ];

  const faqs = [
    {
      q: "Do I need a data scientist on staff to work with you?",
      a: "No. We handle the entire ML lifecycle from problem formulation to production deployment. We work with your domain experts to understand business requirements and deliver turnkey solutions with comprehensive documentation."
    },
    {
      q: "How do you ensure AI models remain accurate over time?",
      a: "We implement MLOps pipelines with automated model monitoring, drift detection, and retraining workflows. Models are continuously evaluated against production data, and we alert you when performance degrades below thresholds."
    },
    {
      q: "What is the typical timeline for an ML project?",
      a: "Simple ML projects (classification, regression) take 6-8 weeks. Complex projects (NLP, computer vision, recommendation systems) take 3-6 months. We always start with a 2-week proof-of-concept to validate feasibility."
    },
    {
      q: "Can you help with data quality issues?",
      a: "Yes. We implement data quality frameworks with automated validation, data profiling, and data contracts. We build data lineage mappings and set dashboards monitoring active pipeline health."
    },
    {
      q: "How do you approach LLM projects responsibly?",
      a: "We implement guardrails including prompt injection detection, content filtering, PII redaction, cost controls, and hallucination monitoring. We use RAG (Retrieval Augmented Generation) to ground responses in your data and reduce hallucinations."
    }
  ];

  return (
    <div className="bg-[#0a0c16] text-white min-h-screen font-sans selection:bg-[#C4E2F5] selection:text-[#2C5EAD] overflow-x-clip">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0a0c16] via-[#0b1022] to-[#101733] py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b203a] border border-[#2C5EAD]/30 text-xs font-bold text-[#4BB8FA] font-mono">
                <Brain className="w-3.5 h-3.5 text-[#1591DC]" />
                <span>Data & Artificial Intelligence Division</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Data & AI <br />
                <span className="bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] bg-clip-text text-transparent">
                  & Solutions
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Scalable ETL pipelines, robust MLOps orchestrations, interactive dashboards, and pragmatic AI deployments that drive value.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start font-mono pt-2">
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-lg shadow-primary/20 hover:scale-102"
                >
                  Unlock Your Data
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a 
                  href="#pillars" 
                  className="flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm"
                >
                  Our Process
                </a>
              </div>
            </motion.div>

            {/* Right Side SVG Gimmick */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:flex justify-center items-center relative"
            >
              <div className="w-[430px] h-[340px] relative glow-border-blue rounded-3xl p-6 overflow-hidden bg-slate-950/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="bp-grid-data" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59, 130, 246, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bp-grid-data)" />
                  
                  {/* Neural Net Nodes */}
                  <g transform="translate(100, 150)">
                    <circle r="14" fill="#090d16" stroke="#3b82f6" strokeWidth="2" />
                    <Database className="w-4 h-4 text-[#3b82f6] -translate-x-2 -translate-y-2" />
                  </g>
                  
                  <g transform="translate(200, 90)">
                    <circle r="14" fill="#090d16" stroke="#3b82f6" strokeWidth="2" />
                    <Cpu className="w-4 h-4 text-[#3b82f6] -translate-x-2 -translate-y-2" />
                  </g>

                  <g transform="translate(200, 210)">
                    <circle r="14" fill="#090d16" stroke="#3b82f6" strokeWidth="2" />
                    <Layers className="w-4 h-4 text-[#3b82f6] -translate-x-2 -translate-y-2" />
                  </g>

                  <g transform="translate(300, 150)">
                    <circle r="18" fill="#090d16" stroke="#3b82f6" strokeWidth="2.5" className="radar-glow-circle" />
                    <Brain className="w-5 h-5 text-[#3b82f6] -translate-x-2.5 -translate-y-2.5" />
                  </g>

                  {/* Pulsing connection lines */}
                  <path d="M 114,150 L 186,96" fill="none" stroke="#3b82f6" strokeWidth="2" className="svg-blueprint-line" />
                  <path d="M 114,150 L 186,204" fill="none" stroke="#3b82f6" strokeWidth="2" className="svg-blueprint-line" />
                  <path d="M 214,90 L 286,140" fill="none" stroke="#3b82f6" strokeWidth="2" className="svg-blueprint-line" />
                  <path d="M 214,210 L 286,160" fill="none" stroke="#3b82f6" strokeWidth="2" className="svg-blueprint-line" />
                </svg>
                
                <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-white/5 rounded-lg px-2.5 py-1 text-[9px] font-mono text-slate-400 flex items-center gap-1.5 shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span>ML SYSTEM: ONLINE</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. THREE-COLUMN PILLARS (REDESIGNED: INTERACTIVE PIPELINE SIMULATOR) */}
      <section id="pillars" className="relative bg-gradient-to-b from-[#101733] via-[#152147] to-[#cbdcf8] py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#1591dc] uppercase font-mono">system::pillars</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-white">Our Data & AI Framework</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              Select a pillar below to run a mock dashboard simulator representing its active operational state.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Selector list */}
            <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
              {Object.entries(engineeringPillars).map(([key, val]) => {
                const isActive = activePillar === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActivePillar(key)}
                    className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                      isActive 
                        ? "bg-[#1b203a] border-blue-500 text-white shadow-lg shadow-blue-500/10" 
                        : "bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                    }`}
                  >
                    <h4 className={`text-base font-bold ${isActive ? "text-white" : "text-slate-200"}`}>{val.title}</h4>
                    <p className="text-xs text-slate-400 leading-normal mt-1.5">{val.desc}</p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Live Simulator Panel */}
            <div className="lg:col-span-7 p-6 rounded-3xl bg-[#090b16]/95 border border-white/5 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.02),transparent_70%)] pointer-events-none" />
              
              <div className="space-y-4 relative z-10 w-full flex flex-col h-full justify-between">
                <div className="flex justify-between items-center pb-3 border-b border-white/5 font-mono text-[9px] text-[#4bb8fa] font-bold uppercase tracking-wider">
                  <span>pipeline_dashboard::live</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex-grow flex flex-col justify-center"
                  >
                    {activePillar === "engineering" && (
                      <div className="space-y-4 py-4 flex flex-col items-center">
                        {/* Data Ingestion SVG Flow */}
                        <svg viewBox="0 0 320 120" className="w-full max-w-[260px] h-auto select-none" fill="none">
                          <rect width="100%" height="100%" fill="none" />
                          <circle cx="40" cy="60" r="14" fill="#11142a" stroke="#3b82f6" strokeWidth="1.5" />
                          <text x="40" y="63" textAnchor="middle" fill="#3b82f6" fontSize="7" fontWeight="bold">SRC</text>
                          
                          <path d="M 54 60 L 266 60" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                          <motion.circle 
                            cx="0" cy="60" r="3.5" fill="#4bb8fa" 
                            animate={{ x: [54, 266] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                          />
                          
                          <circle cx="280" cy="60" r="14" fill="#11142a" stroke="#3b82f6" strokeWidth="1.5" />
                          <text x="280" y="63" textAnchor="middle" fill="#3b82f6" fontSize="7" fontWeight="bold">DW</text>
                        </svg>
                        <span className="text-[10px] font-mono text-slate-400">DATABASE EVENT STREAMS REPLICATING TO SNOWFLAKE</span>
                      </div>
                    )}

                    {activePillar === "mlOps" && (
                      <div className="font-mono text-[10px] text-slate-300 py-3 space-y-1 select-text">
                        {modelLogs.map((log, i) => (
                          <div key={i} className={log.includes("[PASS]") || log.includes("[SUCCESS]") ? "text-emerald-400" : log.startsWith("guest@") ? "text-teal-400" : ""}>
                            {log}
                          </div>
                        ))}
                      </div>
                    )}

                    {activePillar === "analytics" && (
                      <div className="space-y-4 py-4 flex flex-col items-center">
                        {/* BI Line graph */}
                        <svg viewBox="0 0 320 120" className="w-full max-w-[260px] h-auto select-none" fill="none">
                          <path d="M 20 100 L 300 100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                          <path d="M 20 20 L 20 100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                          
                          <path 
                            d="M 20 90 Q 60 70, 100 80 T 180 40 T 260 30 T 300 20" 
                            stroke="#4bb8fa" 
                            strokeWidth="2.5" 
                            className="analytics-chart-line"
                          />
                          <circle cx="300" cy="20" r="4" fill="#3b82f6" className="animate-ping" />
                          <circle cx="300" cy="20" r="3.5" fill="#3b82f6" />
                        </svg>
                        <span className="text-[10px] font-mono text-slate-400">ROI BUSINESS VALUE GROWTH SCORE (+42%)</span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="border-t border-white/5 pt-3 mt-4 text-[9px] font-mono text-slate-500 uppercase tracking-widest flex justify-between">
                  <span>METRICS BATCH CAP: ACTIVE</span>
                  <span>SLA HEALTH: 100% OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRAGMATIC AI APPROACH (REDESIGNED: SIMPLE & HONEST APPROACH DESIGN) */}
      <section className="relative bg-gradient-to-b from-[#cbdcf8] via-[#c6d8f6] to-[#d1e1fc] py-24 border-b border-slate-200/60 overflow-hidden text-slate-900">
        {/* Soft curvy background wavy path connecting the three illustrations */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <svg className="w-full h-full opacity-[0.25] text-blue-300" viewBox="0 0 1200 400" fill="none">
            <path 
              d="M -100,220 C 150,100 350,300 600,180 C 850,60 1050,220 1300,180" 
              stroke="url(#wave-gradient)" 
              strokeWidth="45" 
              strokeLinecap="round" 
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e0f2fe" />
                <stop offset="50%" stopColor="#dbeafe" />
                <stop offset="100%" stopColor="#eff6ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900 font-sans">Our simple & honest approach</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {approachSteps.map((prag, idx) => (
              <motion.div 
                key={prag.title}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-white border-2 border-slate-200/80 shadow-[0_12px_30px_rgba(10,12,22,0.04)] hover:shadow-[0_20px_45px_rgba(44,94,173,0.1)] hover:border-[#2C5EAD]/30 rounded-3xl p-6 transition-all duration-300 flex flex-col space-y-4 relative"
              >
                {/* SVG Illustration at the top */}
                <div className="w-full flex justify-center items-center h-40 bg-blue-50/30 border border-blue-100/50 rounded-2xl p-4 relative overflow-hidden group">
                  {/* Faint blue backdrop pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.015)_0%,transparent_70%)]" />
                  
                  {idx === 0 && (
                    <svg className="w-full h-full text-slate-400 group-hover:scale-102 transition-transform duration-300" viewBox="0 0 200 150" fill="none">
                      {/* Backboard/Frame on the wall */}
                      <rect x="50" y="20" width="40" height="30" rx="1.5" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="56" y1="28" x2="84" y2="28" stroke="#94a3b8" strokeWidth="1.5" />
                      <line x1="56" y1="36" x2="76" y2="36" stroke="#e2e8f0" strokeWidth="1.5" />
                      
                      {/* Desk */}
                      <line x1="20" y1="105" x2="160" y2="105" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="30" y1="105" x2="35" y2="140" stroke="#cbd5e1" strokeWidth="1.5" />
                      <line x1="150" y1="105" x2="145" y2="140" stroke="#cbd5e1" strokeWidth="1.5" />
                      
                      {/* Cactus */}
                      <rect x="135" y="93" width="10" height="12" rx="1" fill="#f97316" opacity="0.8" />
                      <path d="M 140,93 L 140,80 M 137,87 L 143,87 M 137,84 L 140,84" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                      
                      {/* Chair */}
                      <path d="M 40,95 L 45,95 C 45,75, 52,70, 52,70 L 35,70 C 35,70, 35,80, 40,95 Z" fill="#cbd5e1" />
                      <line x1="45" y1="95" x2="45" y2="135" stroke="#64748b" strokeWidth="2" />
                      <circle cx="45" cy="135" r="3" fill="#475569" />
                      <line x1="45" y1="115" x2="35" y2="130" stroke="#64748b" strokeWidth="1.5" />
                      <line x1="45" y1="115" x2="55" y2="130" stroke="#64748b" strokeWidth="1.5" />
                      <circle cx="35" cy="130" r="2.5" fill="#475569" />
                      <circle cx="55" cy="130" r="2.5" fill="#475569" />
                      
                      {/* Developer Person */}
                      {/* Body */}
                      <path d="M 52,70 L 68,70 Q 75,70, 75,78 L 78,110 L 60,110 Z" fill="#3b82f6" opacity="0.9" />
                      <path d="M 54,65 C 54,48, 70,48, 70,65 Z" fill="#10b981" />
                      {/* Head */}
                      <circle cx="62" cy="40" r="8" fill="#ffd6cc" />
                      <path d="M 57,38 Q 62,30, 67,38 C 70,38, 70,33, 62,33 C 54,33, 54,38, 57,38 Z" fill="#1e3a8a" />
                      {/* Arms typing */}
                      <path d="M 68,60 Q 82,60, 90,66" stroke="#10b981" strokeWidth="5" strokeLinecap="round" />
                      <path d="M 90,66 L 98,72" stroke="#ffd6cc" strokeWidth="4" strokeLinecap="round" />
                      
                      {/* Laptop */}
                      <rect x="100" y="65" width="40" height="28" rx="2" fill="#94a3b8" />
                      <rect x="103" y="68" width="34" height="22" fill="#eff6ff" />
                      <circle cx="120" cy="79" r="2" fill="#3b82f6" />
                      <path d="M 95,93 L 145,93 L 148,96 L 92,96 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="100" y1="95" x2="140" y2="95" stroke="#475569" strokeWidth="1" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-full h-full text-slate-400 group-hover:scale-102 transition-transform duration-300" viewBox="0 0 200 150" fill="none">
                      {/* Laptop */}
                      <rect x="50" y="80" width="100" height="10" rx="2" fill="#1e3a8a" opacity="0.9" />
                      <path d="M 60,80 L 68,35 Q 70,33, 75,33 L 125,33 Q 130,33, 132,35 L 140,80 Z" fill="#eff6ff" stroke="#1e3a8a" strokeWidth="1.5" />
                      <line x1="72" y1="42" x2="128" y2="42" stroke="#93c5fd" strokeWidth="1" />
                      
                      {/* Scale Center Pillar */}
                      <line x1="100" y1="33" x2="100" y2="90" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
                      <rect x="94" y="85" width="12" height="4" fill="#475569" />
                      
                      {/* Crossbar */}
                      <line x1="70" y1="42" x2="130" y2="42" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="100" cy="42" r="2.5" fill="#1e3a8a" />
                      
                      {/* Left Pan */}
                      <line x1="70" y1="42" x2="60" y2="68" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="70" y1="42" x2="80" y2="68" stroke="#94a3b8" strokeWidth="1" />
                      <path d="M 55,68 L 85,68" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                      {/* Left Weight */}
                      <rect x="63" y="52" width="14" height="15" rx="1.5" fill="#10b981" />
                      <path d="M 68,56 Q 70,55, 72,56 T 70,63" stroke="white" strokeWidth="1" fill="none" />
                      <circle cx="68" cy="62" r="0.8" fill="white" />
                      <circle cx="72" cy="57" r="0.8" fill="white" />
                      
                      {/* Right Pan */}
                      <line x1="130" y1="42" x2="120" y2="68" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="130" y1="42" x2="140" y2="68" stroke="#94a3b8" strokeWidth="1" />
                      <path d="M 115,68 L 145,68" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                      {/* Right Weight */}
                      <rect x="123" y="52" width="14" height="15" rx="1.5" fill="#10b981" />
                      <path d="M 128,56 Q 130,55, 132,56 T 130,63" stroke="white" strokeWidth="1" fill="none" />
                      <circle cx="128" cy="62" r="0.8" fill="white" />
                      <circle cx="132" cy="57" r="0.8" fill="white" />
                      
                      {/* Sparkles */}
                      <path d="M 45,40 L 48,43 L 45,46 L 42,43 Z" fill="#3b82f6" opacity="0.8" />
                      <path d="M 155,45 L 157,47 L 155,49 L 153,47 Z" fill="#3b82f6" opacity="0.8" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-full h-full text-slate-400 group-hover:scale-102 transition-transform duration-300" viewBox="0 0 200 150" fill="none">
                      {/* Path */}
                      <path d="M 20,120 C 60,115, 140,115, 180,120" stroke="#dbeafe" strokeWidth="4" strokeLinecap="round" />
                      
                      {/* Plant in tripod stand */}
                      <line x1="45" y1="90" x2="35" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                      <line x1="45" y1="90" x2="55" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                      <line x1="45" y1="90" x2="45" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                      <circle cx="45" cy="90" r="6" fill="#f97316" opacity="0.8" />
                      {/* Plant leaf */}
                      <path d="M 45,85 C 45,65, 38,60, 38,60 C 38,60, 48,70, 45,85 Z" fill="#10b981" />
                      <path d="M 45,85 C 45,65, 52,60, 52,60 C 52,60, 42,70, 45,85 Z" fill="#10b981" />
                      
                      {/* Walking Client */}
                      {/* Back leg */}
                      <path d="M 112,85 L 120,118 C 120,118, 125,120, 130,117" stroke="#3b82f6" strokeWidth="7" strokeLinecap="round" opacity="0.75" />
                      {/* Front leg */}
                      <path d="M 102,85 L 90,115 C 90,115, 85,118, 80,115" stroke="#3b82f6" strokeWidth="7.5" strokeLinecap="round" />
                      
                      {/* Torso & Head */}
                      <path d="M 98,55 Q 112,52, 115,85 L 98,85 Z" fill="#10b981" />
                      <circle cx="108" cy="40" r="7.5" fill="#ffd6cc" />
                      <path d="M 103,38 Q 108,30, 113,38 C 116,38, 116,33, 108,33 C 100,33, 100,38, 103,38 Z" fill="#1e3a8a" />
                      
                      {/* Bag/box of deliverables */}
                      <rect x="75" y="55" width="22" height="22" rx="2" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                      <path d="M 78,55 L 78,45 L 86,45 L 86,55 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
                      <path d="M 88,55 L 88,48 L 94,48 L 94,55 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
                      
                      {/* Arms carrying bag */}
                      <path d="M 110,62 Q 95,65, 82,70" stroke="#10b981" strokeWidth="4.5" strokeLinecap="round" />
                    </svg>
                  )}
                </div>

                {/* Badge and Title */}
                <div className="flex items-center space-x-3 pt-2 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-[#2C5EAD]/10 border border-[#2C5EAD]/30 text-[#2C5EAD] font-mono text-xs flex items-center justify-center font-bold flex-shrink-0">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-extrabold text-[#2C5EAD] hover:underline cursor-pointer decoration-2 underline-offset-4">
                    {prag.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed pl-11 relative z-10">
                  {prag.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. USE CASES (REDESIGNED: CENTRAL AI PLATFORM ENGINE) */}
      <section className="relative bg-gradient-to-b from-[#d1e1fc] via-[#d8e5fc] to-[#cddbf7] py-24 border-b border-slate-200 overflow-hidden text-slate-900">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.015)_0%,transparent_80%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="flex items-center justify-center gap-4 text-blue-600 mb-2 font-mono text-[9px] font-black tracking-[0.2em]">
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="w-10 h-px bg-blue-500/30 ml-1.5"></span>
              </div>
              <span>USE CASES</span>
              <div className="flex items-center">
                <span className="w-10 h-px bg-blue-500/30 mr-1.5"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              </div>
            </div>
            
            <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 font-sans leading-tight">
              AI Solutions Across Enterprise Workloads
            </h3>
            <p className="text-sm text-slate-550 max-w-2xl mx-auto leading-relaxed">
              Advanced intelligence frameworks tailored for modern enterprise environments.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Stack of 3 Use Case cards (Predictive Maintenance, Customer Churn, Document Intelligence) */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              {[useCases[0], useCases[1], useCases[2]].map((uc) => {
                const Icon = uc.icon;
                return (
              <motion.div
                key={uc.title}
                whileHover={{ x: 6, scale: 1.01 }}
                className="p-6 rounded-2xl bg-[#05070f] border border-[#2C5EAD]/30 shadow-[0_15px_35px_rgba(10,12,22,0.15)] hover:border-blue-500/60 transition-all duration-300 relative group flex flex-col justify-between text-white"
              >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-full bg-blue-950/40 text-blue-400 border border-blue-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-900/30 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[7.5px] font-black px-2 py-1 rounded bg-emerald-950/30 text-emerald-450 border border-emerald-500/20 tracking-wider">
                          {uc.badge}
                        </span>
                      </div>
                      
                      <h4 className="text-sm font-extrabold text-white font-sans">{uc.title}</h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{uc.desc}</p>
                    </div>

                    {/* Dynamic mini visual details */}
                    {uc.detailType === "telemetry" && (
                      <div className="mt-4 p-3 bg-slate-950/40 rounded-xl border border-slate-800 flex items-center justify-between">
                        <span className="text-[8px] font-mono text-slate-500 uppercase">Sensor Telemetry</span>
                        <div className="flex gap-0.5 items-end h-5">
                          <span className="w-1 h-3 bg-blue-500 rounded-full" />
                          <span className="w-1 h-4 bg-blue-500 rounded-full" />
                          <span className="w-1 h-2 bg-blue-500 rounded-full" />
                          <span className="w-1 h-5 bg-emerald-500 rounded-full animate-pulse" />
                        </div>
                      </div>
                    )}

                    {uc.detailType === "churn-risk" && (
                      <div className="mt-4 p-3 bg-slate-950/40 rounded-xl border border-slate-800 flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center">
                          <Users className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-grow space-y-1">
                          <div className="h-1.5 w-16 bg-slate-700 rounded" />
                          <div className="text-[7px] font-mono text-red-500 font-bold flex items-center gap-1">
                            <span>Churn Risk: 78%</span>
                            <span className="px-1 py-0.2 rounded bg-red-50 border border-red-200 text-[6px]">High</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {uc.detailType === "nlp-extract" && (
                      <div className="mt-4 p-3 bg-slate-950/40 rounded-xl border border-slate-800 flex items-center justify-between">
                        <div className="space-y-1 flex-grow">
                          <span className="text-[8px] font-mono text-slate-450 uppercase block">Invoice Processing</span>
                          <span className="text-[7px] text-slate-500 block font-mono">Confidence: 99.4%</span>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      </div>
                    )}

                    <div className="border-t border-slate-800/80 pt-3 mt-4 flex">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-400 hover:underline cursor-pointer">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Center Column: Platform Hub with connecting lines */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center relative min-h-[520px]">
              {/* Connector Lines SVG */}
              <svg className="absolute inset-0 w-full h-full text-[#2C5EAD]/60 pointer-events-none" viewBox="0 0 200 400" fill="none" stroke="currentColor" strokeWidth="1.5">
                {/* Concentric circles at the center */}
                <circle cx="100" cy="200" r="32" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 4" opacity="0.35" />
                <circle cx="100" cy="200" r="54" stroke="#3b82f6" strokeWidth="1" opacity="0.15" />
                <circle cx="100" cy="200" r="76" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.25" />

                {/* Lines to left cards */}
                <path d="M 75,180 L 35,75 L 0,75" strokeDasharray="3 3" />
                <path d="M 68,200 L 0,200" />
                <path d="M 75,220 L 35,325 L 0,325" strokeDasharray="3 3" />
                
                {/* Lines to right cards */}
                <path d="M 125,180 L 165,75 L 200,75" strokeDasharray="3 3" />
                <path d="M 132,200 L 200,200" />
                <path d="M 125,220 L 165,325 L 200,325" strokeDasharray="3 3" />

                {/* Static nodes on connections */}
                <circle cx="35" cy="75" r="3" fill="#3b82f6" />
                <circle cx="25" cy="200" r="3" fill="#3b82f6" />
                <circle cx="35" cy="325" r="3" fill="#3b82f6" />
                <circle cx="165" cy="75" r="3" fill="#3b82f6" />
                <circle cx="175" cy="200" r="3" fill="#3b82f6" />
                <circle cx="165" cy="325" r="3" fill="#3b82f6" />

                {/* Flowing data packets (circles) */}
                <motion.circle r="3.5" fill="#3b82f6" className="shadow-[0_0_8px_#3b82f6]" animate={{ cx: [75, 35, 0], cy: [180, 75, 75] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }} />
                <motion.circle r="3.5" fill="#3b82f6" className="shadow-[0_0_8px_#3b82f6]" animate={{ cx: [68, 0], cy: [200, 200] }} transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 0.8 }} />
                <motion.circle r="3.5" fill="#3b82f6" className="shadow-[0_0_8px_#3b82f6]" animate={{ cx: [75, 35, 0], cy: [220, 325, 325] }} transition={{ duration: 4.2, repeat: Infinity, ease: "linear", delay: 1.5 }} />
                <motion.circle r="3.5" fill="#3b82f6" className="shadow-[0_0_8px_#3b82f6]" animate={{ cx: [125, 165, 200], cy: [180, 75, 75] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.3 }} />
                <motion.circle r="3.5" fill="#3b82f6" className="shadow-[0_0_8px_#3b82f6]" animate={{ cx: [132, 200], cy: [200, 200] }} transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 1.2 }} />
                <motion.circle r="3.5" fill="#3b82f6" className="shadow-[0_0_8px_#3b82f6]" animate={{ cx: [125, 165, 200], cy: [220, 325, 325] }} transition={{ duration: 4.2, repeat: Infinity, ease: "linear", delay: 0.6 }} />
              </svg>
              
              {/* Central Platform Hub Circle */}
              <div className="relative flex flex-col items-center justify-center">
                {/* Concentric glowing circles behind the hub */}
                <div className="absolute w-44 h-44 rounded-full border border-blue-500/10 animate-pulse" />
                <div className="absolute w-32 h-32 rounded-full border border-blue-500/20" />
                <div className="absolute w-24 h-24 rounded-full border border-blue-500/30" />
                
                {/* Hub Card */}
                <div className="w-20 h-20 rounded-full bg-[#05070f] border-2 border-blue-500 flex items-center justify-center relative z-10 shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-inner relative">
                    <Brain className="w-7 h-7" />
                  </div>
                </div>
                <div className="mt-3 text-xs font-black text-slate-800 text-center uppercase tracking-wider font-sans relative z-10">
                  AI Platform
                </div>
              </div>
            </div>

            {/* Right Column: Stack of 3 Use Case cards (Recommendation Engines, Computer Vision, Large Language Models) */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              {[useCases[3], useCases[4], useCases[5]].map((uc) => {
                const Icon = uc.icon;
                return (
                  <motion.div
                    key={uc.title}
                    whileHover={{ x: -6, scale: 1.01 }}
                    className="p-6 rounded-2xl bg-[#05070f] border border-[#2C5EAD]/30 shadow-[0_15px_35px_rgba(10,12,22,0.15)] hover:border-blue-500/60 transition-all duration-300 relative group flex flex-col justify-between text-white"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-full bg-blue-950/40 text-blue-400 border border-blue-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-900/30 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[7.5px] font-black px-2 py-1 rounded tracking-wider ${
                          uc.badge === "INTEGRATED" 
                            ? "bg-blue-950/30 text-blue-400 border border-blue-500/20" 
                            : "bg-emerald-950/30 text-emerald-450 border border-emerald-500/20"
                        }`}>
                          {uc.badge}
                        </span>
                      </div>
                      
                      <h4 className="text-sm font-extrabold text-white font-sans">{uc.title}</h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">{uc.desc}</p>
                    </div>

                    {/* Dynamic mini visual details */}
                    {uc.detailType === "recommender" && (
                      <div className="mt-4 p-3 bg-slate-950/40 rounded-xl border border-slate-800 flex items-center justify-between">
                        <div className="flex gap-1 items-center">
                          <span className="text-[8px] font-mono text-emerald-400 font-bold uppercase">match::score</span>
                          <span className="text-[8px] font-mono text-slate-500">94.2%</span>
                        </div>
                        <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                      </div>
                    )}

                    {uc.detailType === "vision" && (
                      <div className="mt-4 p-3 bg-slate-950/40 rounded-xl border border-slate-800 flex items-center justify-center gap-3">
                        <div className="flex items-center gap-1">
                          <span className="text-[8px] font-mono text-slate-500">Object Count:</span>
                          <span className="text-[8.5px] font-mono text-emerald-400 font-bold">124</span>
                        </div>
                        <span className="h-px w-4 bg-slate-800" />
                        <div className="flex items-center gap-1">
                          <span className="text-[8px] font-mono text-slate-500">Accuracy:</span>
                          <span className="text-[8.5px] font-mono text-emerald-400 font-bold">99.8%</span>
                        </div>
                      </div>
                    )}

                    {uc.detailType === "rag-chat" && (
                      <div className="mt-4 p-3 bg-slate-950/40 rounded-xl border border-slate-800 flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="text-[7.5px] text-slate-500 font-mono">Semantic Search</div>
                          <div className="text-[9px] font-bold text-emerald-450 font-mono">Vector Hit: Match [PASS]</div>
                        </div>
                        <Check className="w-4 h-4 text-emerald-500" />
                      </div>
                    )}

                    <div className="border-t border-slate-800/80 pt-3 mt-4 flex">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-400 hover:underline cursor-pointer">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
          </div>

          {/* Bottom Metrics Ribbon */}
          <div className="mt-20 pt-8 border-t border-slate-200/80 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="space-y-2">
                <div className="flex justify-center text-blue-500"><ShieldCheck className="w-5 h-5" /></div>
                <div className="text-xl font-extrabold text-slate-900 font-sans">99.9%</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Pipeline Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center text-blue-500"><Activity className="w-5 h-5" /></div>
                <div className="text-xl font-extrabold text-slate-900 font-sans">24/7</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Model Monitoring</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center text-blue-500"><Cpu className="w-5 h-5" /></div>
                <div className="text-xl font-extrabold text-slate-900 font-sans">150M+</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Daily Predictions</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-center text-blue-500"><Layers className="w-5 h-5" /></div>
                <div className="text-xl font-extrabold text-slate-900 font-sans">10K+</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Active Pipelines</div>
              </div>
              <div className="space-y-2 col-span-2 md:col-span-1">
                <div className="flex justify-center text-blue-500"><TrendingUp className="w-5 h-5" /></div>
                <div className="text-xl font-extrabold text-slate-900 font-sans">2.5TB+</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Events Processed Daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PIPELINE ARCHITECTURE (REDESIGNED: INTERACTIVE PIPELINE STEPPER) */}
      <section id="process" className="relative bg-gradient-to-b from-[#cddbf7] via-[#e2ecfa] to-[#f0f5fd] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">infrastructure::pipeline</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Standard Data Pipeline Architecture</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Click the pipeline phases below to check parameter statistics.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl mx-auto">
            {pipelineSteps.map((step, idx) => (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all border ${
                  activeStep === idx 
                    ? "bg-white border-[#2C5EAD] text-[#2C5EAD] shadow-md"
                    : "bg-white/50 border-slate-200/80 text-slate-500 hover:bg-white"
                }`}
              >
                0{idx + 1} {step.title.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-slate-950 border border-white/5 p-8 text-white max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-[#4BB8FA] font-bold uppercase tracking-wider">
              pipeline_stage::logs
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                <h4 className="text-base font-extrabold text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#4bb8fa]" />
                  <span>Phase 0{activeStep + 1}: {pipelineSteps[activeStep].title}</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">{pipelineSteps[activeStep].desc}</p>
                
                {/* Dynamically render bullet points for each stage */}
                {pipelineSteps[activeStep].bullets && (
                  <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                    {pipelineSteps[activeStep].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4bb8fa] mt-1.5 mr-2.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="border-t border-white/5 pt-3 mt-4 text-[10px] font-mono text-[#4bb8fa] font-bold uppercase">
                  {pipelineSteps[activeStep].metric}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES (REDESIGNED: INTERACTIVE SLIDER) */}
      <section className="relative bg-gradient-to-b from-[#f0f5fd] via-[#f8fafc] to-[#edf4fc] py-20 border-b border-black/5 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">case::studies</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Data & AI Success Stories</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Interactive Story card with whole layouts */}
            <div className="lg:col-span-8 p-8 rounded-3xl bg-white border border-slate-350 shadow-xl flex flex-col justify-between h-full hover:shadow-2xl transition-shadow duration-300">
              <div className="space-y-6">
                
                {/* Intro Description text */}
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 leading-relaxed font-mono">
                    Explore our data pipelines and AI model deployments where we successfully turned raw data into scalable predictive engines and personalized user experiences.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our team specializes in training machine learning models, setting up robust MLOps infrastructure, and optimizing real-time analytics throughput. Select a success story below to read how we resolved core data obstacles and achieved positive business results.
                  </p>
                </div>

                {/* Main Selector Mini Cards (With Borders) */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {successStories.map((story, idx) => {
                    const isActive = activeStoryIdx === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveStoryIdx(idx)}
                        className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                          isActive 
                            ? "bg-[#090b16] border-2 border-blue-600 text-white shadow-lg shadow-blue-500/10" 
                            : "bg-white border border-slate-300 text-slate-500 hover:border-slate-400 hover:bg-slate-50"
                        }`}
                      >
                        <h4 className={`text-sm font-extrabold ${isActive ? "text-white" : "text-slate-900"}`}>{story.title}</h4>
                        <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{story.challenge}</p>
                      </button>
                    );
                  })}
                </div>

                {/* Display all sections: Challenge, Solution, Result as mini cards with borders */}
                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  {/* Challenge card */}
                  <div className="p-4 rounded-xl border border-red-200 bg-red-50/10 hover:border-red-300 transition-all duration-300 space-y-2 flex flex-col shadow-sm">
                    <span className="text-[8px] font-bold text-red-500 uppercase tracking-widest font-mono flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                      Challenge
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed flex-grow">{successStories[activeStoryIdx].challenge}</p>
                  </div>

                  {/* Solution card */}
                  <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/10 hover:border-blue-300 transition-all duration-300 space-y-2 flex flex-col shadow-sm">
                    <span className="text-[8px] font-bold text-blue-500 uppercase tracking-widest font-mono flex items-center gap-1.5">
                      <Settings className="w-3.5 h-3.5 text-blue-500" />
                      Solution
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed flex-grow">{successStories[activeStoryIdx].solution}</p>
                  </div>

                  {/* Result card */}
                  <div className="p-4 rounded-xl border border-emerald-250 bg-emerald-50/10 hover:border-emerald-350 transition-all duration-300 space-y-2 flex flex-col shadow-sm">
                    <span className="text-[8px] font-bold text-emerald-600 uppercase tracking-widest font-mono flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Results
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed flex-grow">{successStories[activeStoryIdx].results}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Performance Stats Widget */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-[#090b16] text-white border border-white/5 flex flex-col justify-between text-center min-h-[250px] lg:min-h-0">
              <div className="space-y-4 w-full my-auto">
                <span className="text-[9px] font-bold text-[#4bb8fa] uppercase tracking-wider block font-mono">Deployment Outcome</span>
                
                <div className="space-y-6">
                  {successStories[activeStoryIdx].stats.map((st, i) => (
                    <div key={i} className={i > 0 ? "border-t border-white/5 pt-4" : ""}>
                      <div className="text-3xl font-black text-white font-mono">{st.value}</div>
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono mt-1 block">{st.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGIES WE USE (REDESIGNED: CONTINUOUS HORIZONTAL MARQUEE) */}
      <section className="relative bg-gradient-to-b from-[#edf4fc] via-[#e6effb] to-[#d6e5fb] py-20 border-b border-black/5 text-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-[10px] font-black tracking-widest text-[#2C5EAD] uppercase font-mono">tools::ecosystem</h2>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Data & AI Tech Stack</h3>
          </div>

          <div className="relative w-full overflow-hidden py-4 select-none">
            {/* Left fade gradient overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#edf4fc] to-transparent z-10 pointer-events-none" />
            {/* Right fade gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#d6e5fb] to-transparent z-10 pointer-events-none" />

            <motion.div 
              className="flex space-x-6 w-max"
              animate={{ x: [0, -1120] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25
              }}
            >
              {/* Infinite scroller block: loop 3 times */}
              {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-white border border-slate-200/80 rounded-2xl flex flex-col justify-between text-center shadow-sm w-44 flex-shrink-0 group hover:shadow-lg hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">{tech.category}</span>
                    <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <TechLogo name={tech.name} />
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-slate-800 text-left block mt-2 group-hover:text-[#2C5EAD] transition-colors">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FAQs (REDESIGNED: WATERMARK & ACCORDION PAGINATION) */}
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
          <p className="text-sm font-bold text-blue-600 mt-2 relative z-10 cursor-pointer hover:underline">
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
                        <div className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white text-base font-black flex-shrink-0 transition-colors shadow-sm">
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
                    faqPage === 0 ? "bg-blue-600 scale-105" : "bg-blue-600/70 hover:bg-blue-600"
                  }`}
                >
                  1
                </button>
                <button 
                  onClick={() => setFaqPage(1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-sm ${
                    faqPage === 1 ? "bg-blue-600 scale-105" : "bg-blue-600/70 hover:bg-blue-600"
                  }`}
                >
                  2
                </button>
              </div>
            </div>

            {/* Right Column: Illustration & Question Input Form */}
            <div className="lg:col-span-5 flex flex-col items-center p-8 bg-slate-50/50 rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
              <div className="w-56 h-48 relative mb-6">
                <img 
                  src="/assets/data_ai_faq_illustration.webp" 
                  alt="Data & AI FAQ Illustration" 
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="text-2xl font-extrabold text-slate-900 mb-1">Any Question?</h4>
              <p className="text-xs text-slate-500 text-center mb-6">
                Ask us anything about ETL datasets integration, ML pipelines metrics, or data quality audits.
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
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-blue-600 pr-10 shadow-sm"
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
                    className="w-full sm:w-auto px-10 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95"
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

      {/* 9. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-b from-[#edf4fc] via-[#6c97db] to-[#1d3f75] text-white overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 lg:text-white">
            Unlock the Power of Your Data
          </h3>
          <p className="text-sm sm:text-base text-slate-700 lg:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Transform your bulk company logs and records into actionable business insights with our comprehensive data & AI engine builds.
          </p>
          <div className="flex justify-center font-mono pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#2C5EAD] to-[#1591DC] hover:opacity-95 transition-all text-sm shadow-xl shadow-primary/10 hover:scale-102"
            >
              Consult Data Engineers
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
