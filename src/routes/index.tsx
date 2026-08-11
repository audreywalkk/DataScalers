import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { ReadinessAuditSection } from "../components/ui/ReadinessAudit";
import { RiskPredictorSection } from "../components/ui/RiskPredictor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Data Scaling & Analytics Maturity Journey" },
      {
        name: "description",
        content:
          "An interactive corporate strategy simulator mapping the evolution of data from descriptive analytics to agentic AI.",
      },
    ],
  }),
  component: Index,
});

// --- Types & Interfaces ---

type TrackId = "marketing" | "finance" | "operations" | "technology";

interface Stage {
  id: number;
  name: string;
  question: string;
}

interface Leap {
  infrastructure: string;
  culture: string;
}

interface TrackStageContent {
  example: string;
  leap: Leap;
}

interface Track {
  id: TrackId;
  title: string;
  description: string;
  icon: React.ReactNode;
  stages: Record<number, TrackStageContent>;
}

// --- Static Data ---

const STAGES: Stage[] = [
  { id: 1, name: "Descriptive Analytics", question: "What happened?" },
  { id: 2, name: "Diagnostic Analytics", question: "Why did it happen?" },
  { id: 3, name: "Predictive Analytics", question: "What will happen next?" },
  { id: 4, name: "Prescriptive Analytics", question: "How do we optimize it?" },
  { id: 5, name: "Cognitive & Agentic AI", question: "How does the system act autonomously?" },
];

const TRACKS: Track[] = [
  {
    id: "marketing",
    title: "Marketing",
    description: "From static campaign reports to real-time agentic budget allocation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    stages: {
      1: {
        example: "Generating static end-of-month campaign reports via CSV exports to measure basic Click-Through Rates (CTR) and total spend.",
        leap: {
          infrastructure: "Shift from disparate CSVs and siloed channel tools to a centralized Customer Data Platform (CDP) or data warehouse.",
          culture: "Move teams away from vanity metrics and siloed data hoarding. Establish a single source of truth for marketing performance.",
        },
      },
      2: {
        example: "Analyzing funnel drop-off rates and reviewing A/B test results to understand exactly why a specific ad group underperformed last week.",
        leap: {
          infrastructure: "Implement scalable machine learning modeling environments to begin scoring customers and predicting behavior based on historical logs.",
          culture: "Train marketers to interpret statistical significance and adopt a hypothesis-driven mindset rather than relying purely on intuition.",
        },
      },
      3: {
        example: "Utilizing ML models to predict customer churn probability and forecast Lifetime Value (LTV) before the next billing cycle.",
        leap: {
          infrastructure: "Deploy real-time data streaming pipelines (e.g., Kafka) and recommendation engines to serve dynamic content instantly.",
          culture: "Build trust in algorithmic audience segmentation. Shift the mindset from \"gut-feel\" campaign targeting to trusting predictive outputs.",
        },
      },
      4: {
        example: "Receiving automated, dynamic pricing recommendations and having the system suggest the optimal reallocation of ad spend across social platforms to maximize ROAS.",
        leap: {
          infrastructure: "Integrate LLMs, autonomous agent frameworks, and robust API endpoints that allow the system to push changes directly to ad networks.",
          culture: "Overcome the fear of automation. Leaders must learn to manage system guardrails and constraints rather than micro-managing individual bids.",
        },
      },
      5: {
        example: "Real-time autonomous AI agents independently allocating a million-dollar ad budget, tweaking creative copy, and launching net-new micro-campaigns on the fly based on conversion velocity.",
        leap: {
          infrastructure: "Implement robust continuous evaluation loops, automated compliance checks, and multi-agent coordination architectures.",
          culture: "Transition human roles from operators to \"AI Managers.\" Focus on ethical alignment, brand safety governance, and overarching strategic goal-setting.",
        },
      },
    },
  },
  {
    id: "finance",
    title: "Strategy & Finance",
    description: "From backward-looking P&L reviews to self-correcting cognitive risk execution.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stages: {
      1: {
        example: "Compiling quarterly backward-looking Profit & Loss (P&L) statements and tracking historical departmental expenses using massive Excel spreadsheets.",
        leap: {
          infrastructure: "Migrate financial data from localized spreadsheets into cloud-based ERPs and automated financial reporting dashboards.",
          culture: "Shift the finance department's focus from manual data entry and reconciliation to data validation and initial analysis.",
        },
      },
      2: {
        example: "Conducting variance analysis to identify the specific root causes of cost overruns in Q3, drilling down into vendor-specific billing anomalies.",
        leap: {
          infrastructure: "Adopt predictive forecasting tools and integrate external market data feeds (e.g., commodity prices, interest rates) into internal models.",
          culture: "Evolve from a backward-looking reporting function to a forward-looking advisory role, actively warning departments of emerging trends.",
        },
      },
      3: {
        example: "Generating automated cash flow forecasts and running predictive macro-economic risk models to anticipate revenue shortfalls six months in advance.",
        leap: {
          infrastructure: "Implement prescriptive optimization solvers and rules engines that can calculate millions of financial scenarios simultaneously.",
          culture: "Foster a proactive risk culture. Executives must learn to make strategic capital allocation decisions based on probabilistic forecasts.",
        },
      },
      4: {
        example: "The system provides automated portfolio rebalancing recommendations and prescribes exact capital restructuring steps to minimize tax liabilities.",
        leap: {
          infrastructure: "Deploy secure, multi-agent execution systems with direct API access to trading platforms, banking portals, and treasury systems.",
          culture: "Let go of manual trade/approval clicks for standard financial operations. Build deep trust in automated execution within strict financial parameters.",
        },
      },
      5: {
        example: "Self-correcting cognitive risk-hedging agents autonomously executing macro-strategies, dynamically moving capital, and restructuring debt in real-time to exploit brief market anomalies.",
        leap: {
          infrastructure: "Develop advanced systemic kill-switches, real-time audit trails, and explainable AI layers for regulatory compliance.",
          culture: "Focus purely on macro-strategy formulation and regulatory relations. The human role shifts to setting the \"rules of engagement\" for the financial AI.",
        },
      },
    },
  },
  {
    id: "operations",
    title: "Operations",
    description: "From manual inventory logging to weather-responsive agentic supply chains.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    stages: {
      1: {
        example: "Conducting standard historical inventory counts, logging warehouse shifts, and reviewing weekly throughput reports on a static dashboard.",
        leap: {
          infrastructure: "Integrate IoT sensors, RFID tags, and edge computing devices to capture real-time operational state data continuously.",
          culture: "Move warehouse and floor managers away from clipboard tracking to utilizing digital, real-time dashboards.",
        },
      },
      2: {
        example: "Performing root cause analysis to discover exactly why a specific manufacturing line produced a higher defect rate or why a delivery fleet was delayed last Tuesday.",
        leap: {
          infrastructure: "Implement predictive maintenance machine learning models and integrate external logistics data (e.g., traffic, weather APIs).",
          culture: "Shift operational culture from \"reactive fixing\" to \"proactive tuning.\" Train teams to investigate warnings before actual failures occur.",
        },
      },
      3: {
        example: "Forecasting seasonal supply chain demand down to the SKU level and predicting specific machine component failures hours before they happen.",
        leap: {
          infrastructure: "Deploy complex digital twins of your supply chain and mathematical optimization solvers (e.g., linear programming models).",
          culture: "Learn to execute based on model recommendations. Build operational workflows where AI insights automatically trigger human review tickets.",
        },
      },
      4: {
        example: "The platform generates algorithmic routing recommendations for delivery fleets and automatically suggests re-ordering quantities from suppliers to avoid stockouts.",
        leap: {
          infrastructure: "Build agentic control systems and establish secure B2B API integrations that allow your AI to interact directly with supplier ordering systems.",
          culture: "Empower the system to make operational decisions. Overcome the friction of allowing an algorithm to spend company money on raw materials.",
        },
      },
      5: {
        example: "Autonomous agentic supply chains that auto-reroute international shipping logistics, negotiate spot-freight rates, and adjust manufacturing schedules instantly based on global weather anomalies.",
        leap: {
          infrastructure: "Establish global agentic oversight meshes that monitor multiple AI sub-agents for system resilience and catastrophic failure prevention.",
          culture: "Transition operators to \"System Architects.\" Focus on designing resilient physical networks that the AI can seamlessly manipulate.",
        },
      },
    },
  },
  {
    id: "technology",
    title: "Technology",
    description: "From core server logging to self-healing agentic infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    stages: {
      1: {
        example: "Logging core server uptime, tracking basic HTTP error rates, and relying on static alerts when CPU usage spikes above 90%.",
        leap: {
          infrastructure: "Implement centralized, high-volume observability platforms (e.g., Datadog, ELK stack) with distributed tracing capabilities.",
          culture: "Move engineering teams away from SSH-ing into individual servers. Establish a culture of centralized logging and blameless post-mortems.",
        },
      },
      2: {
        example: "Utilizing distributed tracing to conduct deep root cause analysis for sudden API latency spikes, pinpointing exact database query bottlenecks.",
        leap: {
          infrastructure: "Adopt anomaly detection models and AIOps tools that can learn normal baseline behaviors for massive microservice architectures.",
          culture: "Implement strict Site Reliability Engineering (SRE) practices. Shift focus from simply finding bugs to understanding systemic interactions.",
        },
      },
      3: {
        example: "Executing predictive capacity planning to auto-scale database read replicas ahead of a known traffic spike, and detecting anomalous access patterns before a breach.",
        leap: {
          infrastructure: "Integrate Automated Runbooks, robust Infrastructure-as-Code (IaC), and continuous deployment pipelines capable of safe rollbacks.",
          culture: "Trust automated alerts over human monitoring. Cultivate an engineering culture that values writing automation scripts over manual patching.",
        },
      },
      4: {
        example: "The platform provides prescriptive performance tuning, automatically recommending optimal memory allocations and database index creations to reduce cloud costs.",
        leap: {
          infrastructure: "Deploy self-healing architectural frameworks, AI-driven code generation, and robust testing suites that validate machine-written infrastructure changes.",
          culture: "Cross the \"Trust Chasm.\" Allow the AI to automatically push infrastructure changes and code fixes directly to production environments.",
        },
      },
      5: {
        example: "Self-healing infrastructure agents continuously monitoring the stack, automatically writing code fixes for detected vulnerabilities, testing them, and deploying to production to maintain SLAs.",
        leap: {
          infrastructure: "Develop infallible rollback mechanisms, agentic containment sandboxes, and continuous alignment engines to prevent rogue deployments.",
          culture: "Engineers evolve into AI overseers and architectural strategists, defining the parameters and goals within which the AI autonomously operates and builds.",
        },
      },
    },
  },
];

export default function Index() {
  // Simulator State
  const [activeTrackId, setActiveTrackId] = useState<TrackId | null>("marketing");
  const [activeStageId, setActiveStageId] = useState<number>(1);

  // Form & Report State
  const [auditForm, setAuditForm] = useState({ name: "", email: "", company: "", message: "" });
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);

  const activeTrack = TRACKS.find((t) => t.id === activeTrackId);
  const currentStageInfo = STAGES.find((s) => s.id === activeStageId);
  const currentContent = activeTrack?.stages[activeStageId];

  const handleTrackSelect = (id: TrackId) => {
    setActiveTrackId(id);
    setActiveStageId(1);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAuditForm({ ...auditForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Strategic Consultation Request Submitted. An SME will contact you shortly.");
    setAuditForm({ name: "", email: "", company: "", message: "" });
  };

  const scrollToConsultation = () => {
    document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 font-sans pb-20 print:hidden">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2.243a2 2 0 011.567.752l2.38 3.174a2 2 0 003.134 0l3.656-4.874a2 2 0 011.567-.752H21" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Data<span className="text-indigo-600">Scale</span> Simulator
            </span>
          </div>
          <button
            onClick={() => setIsReportModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3.5 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
            </svg>
            Export Report
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-20 space-y-20">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Interactive Strategy Simulator
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            The Data & Analytics <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Maturity Journey
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Explore how modern enterprise departments scale their data capabilities. 
            Select your track below to trace the evolution from static historical reporting all the way to autonomous agentic AI.
          </p>
        </section>

        {/* 1. Track Selector */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 text-center mb-6">
            1. Select a Corporate Track
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRACKS.map((track) => {
              const isActive = activeTrackId === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => handleTrackSelect(track.id)}
                  className={`relative flex flex-col items-start p-6 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white border-indigo-600 shadow-md shadow-indigo-600/10 ring-1 ring-indigo-600 scale-[1.02]"
                      : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-sm"
                  }`}
                >
                  <div className={`p-3 rounded-xl mb-4 ${isActive ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                    {track.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{track.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {track.description}
                  </p>
                  {isActive && (
                    <div className="absolute top-4 right-4 text-indigo-600">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* 2. Simulator Dashboard */}
        {activeTrack && currentContent && currentStageInfo && (
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 text-center mb-6">
              2. Explore The 5-Stage Evolution
            </h2>
            
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
              {/* Header inside Dashboard */}
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-indigo-600 bg-indigo-100 p-2 rounded-lg">
                    {activeTrack.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{activeTrack.title} Evolution</h3>
                </div>
              </div>

              {/* Stepper UI */}
              <div className="px-6 py-8 md:px-10 border-b border-slate-100">
                <div className="relative">
                  <div className="absolute top-5 left-0 w-full h-1 bg-slate-100 rounded-full" aria-hidden="true"></div>
                  <div 
                    className="absolute top-5 left-0 h-1 bg-indigo-600 rounded-full transition-all duration-500 ease-in-out" 
                    style={{ width: `${((activeStageId - 1) / (STAGES.length - 1)) * 100}%` }}
                    aria-hidden="true"
                  ></div>

                  <div className="relative flex justify-between">
                    {STAGES.map((stage) => {
                      const isActive = activeStageId === stage.id;
                      const isPast = activeStageId > stage.id;
                      return (
                        <div key={stage.id} className="flex flex-col items-center group relative w-1/5">
                          <button
                            onClick={() => setActiveStageId(stage.id)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors duration-300 ring-4 ring-white ${
                              isActive
                                ? "bg-indigo-600 text-white shadow-md"
                                : isPast
                                ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                                : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                            }`}
                          >
                            {isPast ? "✓" : stage.id}
                          </button>
                          <div className="mt-3 text-center hidden md:block">
                            <p className={`text-xs font-bold tracking-wide uppercase transition-colors ${isActive ? "text-indigo-600" : "text-slate-400"}`}>
                              Stage {stage.id}
                            </p>
                            <p className={`text-sm mt-1 font-medium transition-colors ${isActive ? "text-slate-900" : "text-slate-500"}`}>
                              {stage.name}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-6 text-center md:hidden">
                  <p className="text-xs font-bold tracking-wide uppercase text-indigo-600">Stage {currentStageInfo.id}</p>
                  <p className="text-lg font-bold text-slate-900">{currentStageInfo.name}</p>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="p-6 md:p-10 bg-white grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Left Column: The Example */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-md mb-4 w-max">
                    The Reality
                  </div>
                  <h4 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    "{currentStageInfo.question}"
                  </h4>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {currentStageInfo.name}
                  </p>
                  <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      {activeTrack.icon}
                    </div>
                    <p className="relative text-slate-800 text-lg leading-relaxed font-medium">
                      {currentContent.example}
                    </p>
                  </div>
                </div>

                {/* Right Column: The Leap */}
                <div className="lg:col-span-3">
                  <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {activeStageId === 5 ? "Securing The Future" : "The Leap to Next Stage"}
                      </h4>
                    </div>
                    
                    <p className="text-slate-500 mb-8 leading-relaxed">
                      {activeStageId === 5 
                        ? "Maintaining and governing this autonomous state requires advanced frameworks." 
                        : "To scale your data capabilities to the next level, your organization must fundamentally shift both its technical stack and its human mindset."}
                    </p>

                    <div className="space-y-6">
                      {/* Infra Card */}
                      <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-slate-100/50 transition-colors">
                        <h5 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                          <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                          </svg>
                          Infrastructure Needed
                        </h5>
                        <p className="text-slate-600 leading-relaxed">
                          {currentContent.leap.infrastructure}
                        </p>
                      </div>

                      {/* Culture Card */}
                      <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-slate-100/50 transition-colors">
                        <h5 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                          <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          Cultural Shift Required
                        </h5>
                        <p className="text-slate-600 leading-relaxed">
                          {currentContent.leap.culture}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. Values & Ethical Risk Predictor (Circuit Breaker) */}
        <section>
          <RiskPredictorSection 
            currentStage={activeStageId} 
            onConsultSme={scrollToConsultation} 
          />
        </section>

        {/* 4. Readiness & Organizational Audit */}
        <section>
          <ReadinessAuditSection />
        </section>

        {/* 5. Executive SME Consultation Form */}
        <section id="consultation-form" className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">SME Gatekeeper Access</span>
            <h3 className="text-3xl font-extrabold text-white mt-2 mb-4">Request a Strategic Data & Ethics Audit</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Speak with a Data Maturity Consultant before committing capital to next-stage AI expansion. We validate technical readiness, protect brand equity, and prevent negative-ROI rollouts.
            </p>
            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={auditForm.name}
                  onChange={handleFormChange}
                  className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-xl p-3 focus:outline-none focus:border-indigo-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  required
                  value={auditForm.email}
                  onChange={handleFormChange}
                  className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-xl p-3 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
                value={auditForm.company}
                onChange={handleFormChange}
                className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-xl p-3 focus:outline-none focus:border-indigo-500"
              />
              <textarea
                name="message"
                placeholder="Briefly describe your current stage & objectives..."
                rows={3}
                value={auditForm.message}
                onChange={handleFormChange}
                className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-xl p-3 focus:outline-none focus:border-indigo-500"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-600/30"
              >
                Schedule Executive Consultation
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
