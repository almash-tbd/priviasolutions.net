"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, HelpCircle, ChevronDown, ChevronUp, Headphones, Send, Bot, User, X, ArrowRight } from "lucide-react";
import { toast } from "react-hot-toast";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedTopic, setExpandedTopic] = useState("General");
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", text: "Hi! I'm Privia AI. Ask me anything about our cloud architectures, security standards, SRE support, or system services." }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const faqCategories = [
    {
      id: "General",
      title: "General",
      desc: "Common questions about Privia and our services.",
      questions: [
        { q: "What types of services does Privia Solutions offer?", a: "We offer end-to-end IT services including custom software engineering, native and cross-platform mobile apps, cloud migrations & SRE, API designs, QA automation, cybersecurity auditing, and 24/7 managed operations support." },
        { q: "Can we request a dedicated engineering team?", a: "Yes. We offer flexible engagement models, including dedicated Scrum teams, project-based contracts, and staff augmentation, fitting your operational requirements." }
      ]
    },
    {
      id: "Services",
      title: "Services",
      desc: "Questions about our cloud, DevOps, and security services.",
      questions: [
        { q: "How do you ensure zero downtime during database migrations?", a: "We utilize standard migration patterns like the Strangler Pattern. By deploying new microservices in parallel, utilizing feature flags, and configuring double-write databases before phasing out legacy components, we ensure zero downtime." },
        { q: "What is your software delivery workflow?", a: "We operate on a GitOps-driven deployment model with automated staging gates, integration testing, and weekly sprint reviews. All source transfers completely on project handoff." }
      ]
    },
    {
      id: "Security",
      title: "Security",
      desc: "Learn about our security practices and data protection.",
      questions: [
        { q: "How do you ensure data security in transit and at rest?", a: "Data is encrypted at rest using AES-256 and in transit using TLS 1.3. Key management is controlled via cloud hardware security modules (HSMs) and strictly audited." }
      ]
    },
    {
      id: "Compliance",
      title: "Compliance",
      desc: "Compliance standards, certifications, and policies.",
      questions: [
        { q: "Are your projects aligned with healthcare security standards?", a: "Yes. All healthcare projects are developed inside encrypted cloud networks with role-based access control, strict database logs, and encrypted data fields, satisfying strict industry compliance regulations." }
      ]
    },
    {
      id: "Billing",
      title: "Billing & Payments",
      desc: "Information about billing, engagement models, and invoicing.",
      questions: [
        { q: "What is the billing model for SRE and software engineering?", a: "We offer flexible SLA-backed plans, including monthly Scrum subscriptions, sprint-based co-development support, or milestone budgets. Connect with us for a custom quote." }
      ]
    },
    {
      id: "Support",
      title: "Support",
      desc: "Get help with support, SLAs, and request procedures.",
      questions: [
        { q: "What is your support response SLA?", a: "Our dedicated managed support plans include a 15-minute response SLA for critical (P1) incidents, backed by active on-call rotation schedules." }
      ]
    }
  ];

  // Smart Search logic
  const filteredCategories = faqCategories.map(cat => {
    const matchedQuestions = cat.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      questions: matchedQuestions
    };
  }).filter(cat => cat.questions.length > 0);

  const toggleTopic = (id) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  const toggleQuestion = (qText) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [qText]: !prev[qText]
    }));
  };

  const handleBubbleClick = (term) => {
    setSearchQuery(term);
    // Find the category containing the term
    if (term.toLowerCase() === "security" || term.toLowerCase() === "data security") {
      setExpandedTopic("Security");
    } else if (term.toLowerCase() === "billing") {
      setExpandedTopic("Billing");
    } else if (term.toLowerCase() === "cloud" || term.toLowerCase() === "devops") {
      setExpandedTopic("Services");
    }
  };

  // Mock AI Chat Logic
  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setChatMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setChatInput("");
    setIsTyping(true);

    // Simulate AI reply
    setTimeout(() => {
      let replyText = "I can help with that. Privia specializes in building secure cloud networks, SRE pipelines, and cloud migrations. Would you like to schedule a consultation with our SRE lead?";
      
      const lowerMsg = userMsg.toLowerCase();
      if (lowerMsg.includes("security") || lowerMsg.includes("data")) {
        replyText = "We encrypt all data in transit via TLS 1.3 and at rest with AES-256. Access is guarded by multi-factor auth and VPC perimeters.";
      } else if (lowerMsg.includes("billing") || lowerMsg.includes("model")) {
        replyText = "Our engagement models are flexible. We offer monthly Sprint-based co-development support, fixed-scope budgets, or SLA-backed Scrum team packages.";
      } else if (lowerMsg.includes("compliance") || lowerMsg.includes("guidelines")) {
        replyText = "Privia automates configuration audits and policy creation, helping you align with standard industry security frameworks and guidelines.";
      } else if (lowerMsg.includes("devops") || lowerMsg.includes("cloud")) {
        replyText = "Our DevOps pipelines are SRE-managed. We write clean, modular Terraform files and manage canary releases via automated CI/CD tools.";
      }

      setChatMessages(prev => [...prev, { role: "assistant", text: replyText }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-slate-50/50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden text-left"
      style={{
        background: `
          radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.035), transparent 40%),
          #f8fafc
        `
      }}
    >
      
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e2e8f0_1.5px,transparent_1.5px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none opacity-[0.03]" />

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ================= MAIN COLUMN SPLIT ================= */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= LEFT COLUMN: HERO, SEARCH, BUBBLE CLOUD ================= */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-black tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 shadow-sm inline-block uppercase font-mono">
                FAQ
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-outfit tracking-tight leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
                Find answers to the most common questions about our services, processes, and policies.
              </p>
            </div>

            {/* Smart Search box */}
            <div className="relative max-w-md">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your question..."
                className="w-full pl-5 pr-12 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none transition-all placeholder-slate-400 font-medium"
              />
              <Search className="absolute right-4.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>

            {/* Floating Popular Questions Cloud */}
            <div className="space-y-3.5 max-w-md text-left">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono pl-0.5">Popular Topics Cloud</span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "Data Security", tag: "data security" },
                  { name: "Security Audit", tag: "security" },
                  { name: "Billing & Plans", tag: "billing" },
                  { name: "Cloud Migrations", tag: "cloud" },
                  { name: "DevOps SRE", tag: "devops" }
                ].map((bubble) => (
                  <motion.button
                    key={bubble.name}
                    onClick={() => handleBubbleClick(bubble.tag)}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="px-3.5 py-2 rounded-full bg-blue-50/50 border border-blue-100 text-blue-600 text-xs font-extrabold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors shadow-2xs hover:shadow-sm"
                  >
                    🎈 {bubble.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Still have questions Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-6 max-w-md text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-blue-50/20 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 relative z-10">
                <Headphones className="w-5 h-5" />
              </div>
              <div className="space-y-3 relative z-10">
                <h4 className="font-extrabold text-sm text-slate-900 tracking-tight leading-tight">Still have questions?</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">Our team is here to help you with detailed answers.</p>
                <button 
                  onClick={() => {
                    const el = document.getElementById("ai-assistant");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-extrabold rounded-xl transition-all shadow shadow-blue-600/5 active:scale-98"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: TOPIC CATEGORIES ACCORDIONS ================= */}
          <div className="lg:col-span-7 space-y-4">
            
            {filteredCategories.length === 0 ? (
              <div className="p-12 text-center bg-white border border-slate-200/80 rounded-2xl text-slate-550 font-bold">
                No matching questions found. Try typing a different term or ask Privia AI below!
              </div>
            ) : (
              filteredCategories.map((cat) => {
                const isTopicExpanded = expandedTopic === cat.id;
                return (
                  <article key={cat.id} className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                    
                    {/* Category Accordion Header */}
                    <button
                      onClick={() => toggleTopic(cat.id)}
                      className="w-full flex items-center justify-between p-5 hover:bg-slate-50/40 transition-colors"
                      style={isTopicExpanded ? { borderBottom: "1px solid #f1f5f9" } : {}}
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                          <HelpCircle className="w-4.5 h-4.5" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">{cat.title}</h3>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-mono">{cat.desc}</span>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-slate-650 transition-colors">
                        {isTopicExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {/* Collapsible Category Questions */}
                    <AnimatePresence initial={false}>
                      {isTopicExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, filter: "blur(5px)" }}
                          animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                          exit={{ height: 0, opacity: 0, filter: "blur(5px)" }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="divide-y divide-slate-100 bg-white"
                        >
                          {cat.questions.map((faq) => {
                            const isQExpanded = expandedQuestions[faq.q];
                            return (
                              <div key={faq.q} className="p-5 space-y-3">
                                
                                {/* Question Title Trigger */}
                                <button
                                  onClick={() => toggleQuestion(faq.q)}
                                  className="w-full flex items-center justify-between font-extrabold text-xs sm:text-sm text-slate-900 hover:text-blue-600 text-left transition-colors"
                                >
                                  <span>{faq.q}</span>
                                  <span className="text-slate-450 text-[10px] ml-4 shrink-0 font-bold uppercase tracking-wide font-mono">
                                    {isQExpanded ? "Close" : "Open"}
                                  </span>
                                </button>

                                {/* Question Answer Expanded */}
                                <AnimatePresence initial={false}>
                                  {isQExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                                      animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                                      exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed pt-1.5 border-t border-slate-50">
                                        {faq.a}
                                      </p>
                                    </motion.div>
                                  )}
                                </AnimatePresence>

                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </article>
                );
              })
            )}

          </div>

        </div>

        {/* ================= POPULAR QUESTIONS QUICK-LINKS ================= */}
        <section className="space-y-6 pt-6">
          <div className="text-center md:text-left">
            <h3 className="text-xs font-black tracking-widest text-slate-550 uppercase font-mono pl-1">Popular Questions</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              { q: "What services does Privia offer?", tag: "What types of services does Privia Solutions offer?" },
              { q: "Where is my data hosted?", tag: "data security" },
              { q: "How do you ensure data security?", tag: "How do you ensure data security in transit and at rest?" },
              { q: "Do you offer 24/7 support?", tag: "What is your support response SLA?" }
            ].map((item) => (
              <button
                key={item.q}
                onClick={() => {
                  setSearchQuery(item.tag);
                  setExpandedTopic(null);
                  faqCategories.forEach(cat => {
                    if (cat.questions.some(qa => qa.q.includes(item.tag) || item.tag.toLowerCase().includes(cat.id.toLowerCase()))) {
                      setExpandedTopic(cat.id);
                    }
                  });
                  setExpandedQuestions(prev => ({ ...prev, [item.tag]: true }));
                  toast.success(`Search loaded: "${item.q}"`);
                }}
                className="p-5 rounded-2xl bg-white border border-slate-200/85 hover:border-blue-600 transition-all hover:shadow-2xs text-left group"
              >
                <div className="flex justify-between items-start gap-4">
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{item.q}</h4>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all shrink-0 mt-0.5" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ================= INTERACTIVE MOCKUP AI ASSISTANT ================= */}
        <section id="ai-assistant" className="max-w-4xl mx-auto space-y-6 text-left">
          <div className="flex items-center space-x-3 mb-2 pl-1">
            <Bot className="w-5 h-5 text-blue-600" />
            <h3 className="text-xs font-black tracking-widest text-blue-600 uppercase font-mono">Ask AI Assistant</h3>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200/80 shadow-md overflow-hidden flex flex-col h-[380px]">
            {/* Header console */}
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-extrabold text-slate-900">Privia AI Client</span>
              </div>
              <button 
                onClick={() => setChatMessages([{ role: "assistant", text: "Hi! I'm Privia AI. Ask me anything about our cloud architectures, security standards, SRE support, or system services." }])}
                className="text-[9px] font-black text-slate-450 uppercase hover:text-slate-650 tracking-wider font-mono border border-slate-200 rounded px-2 py-0.5 bg-white"
              >
                Reset Chat
              </button>
            </div>

            {/* Message History list */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/20">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex items-start gap-3.5 max-w-2xl ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border shadow-2xs ${
                    msg.role === "user" ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-slate-200 text-blue-600"
                  }`}>
                    {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed font-medium ${
                    msg.role === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-white border border-slate-200/80 rounded-tl-none shadow-3xs text-slate-750"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60 rounded-tl-none text-xs text-slate-400 font-bold flex gap-1 items-center font-mono">
                    Privia AI is typing
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce [animation-delay:0.2s]">.</span>
                    <span className="animate-bounce [animation-delay:0.4s]">.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Submission bar */}
            <form onSubmit={handleChatSubmit} className="p-4 border-t border-slate-100 bg-white flex gap-3">
              <input 
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask me about encryption, security guidelines, SRE team sizes, or services..."
                className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white text-xs text-slate-900 outline-none placeholder-slate-400 font-medium"
              />
              <button 
                type="submit"
                className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow shadow-blue-600/10 active:scale-95 transition-all shrink-0"
              >
                <Send className="w-4.5 h-4.5" />
              </button>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}
