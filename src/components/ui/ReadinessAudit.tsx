import React, { useState } from 'react';

interface Question {
  id: string;
  framework: string;
  label: string;
  redFlagTitle: string;
  options: { text: string; score: number; blocker?: boolean }[];
}

const AUDIT_QUESTIONS: Question[] = [
  {
    id: "logic_trap",
    framework: "NIST AI RMF (MAP 1.1) - Algorithmic Selection",
    label: "How are process workflows structured for automation?",
    redFlagTitle: "The Logic Trap",
    options: [
      { text: "Attempting to use AI agents on fully deterministic, rule-based workflows", score: 0, blocker: true },
      { text: "Hybrid workflows with some rule-based code and experimental agentic steps", score: 2 },
      { text: "Deterministic code used for rule-based logic; AI reserved strictly for probabilistic tasks", score: 5 },
    ],
  },
  {
    id: "data_silos",
    framework: "ISO/IEC 42001 §8.4 - Data Lineage & Pipeline Integration",
    label: "What is the architecture state of your operational data?",
    redFlagTitle: "Data Silos",
    options: [
      { text: "Fragmented data stored in static, batch-updated spreadsheets or isolated databases", score: 0, blocker: true },
      { text: "Centralized data warehouse with periodic scheduled ingestion jobs", score: 2 },
      { text: "Real-time streaming pipelines integrated into a centralized semantic layer", score: 5 },
    ],
  },
  {
    id: "magic_crutch",
    framework: "NIST AI RMF (GOVERN 1.2) - Process Governance",
    label: "Are underlying operational processes standardized prior to scaling?",
    redFlagTitle: "The 'Magic Crutch' Fallacy",
    options: [
      { text: "Unstandardized, chaotic human processes expected to be 'fixed' by AI", score: 0, blocker: true },
      { text: "Documented processes with manual edge-case handling", score: 2 },
      { text: "Standardized, highly documented processes with clear human-in-the-loop escalation paths", score: 5 },
    ],
  },
  {
    id: "blast_radius",
    framework: "NIST AI RMF (MANAGE 2.2) - Security & Identity Governance",
    label: "How are non-human agent identities and permissions managed?",
    redFlagTitle: "Security & Blast Radius",
    options: [
      { text: "Broad service-account privileges with no zero-trust controls or fallback limits", score: 0, blocker: true },
      { text: "Basic RBAC applied, but lacking non-human identity (NHI) isolation", score: 2 },
      { text: "Zero-Trust IAM, scoped NHI permissions, and strict execution guardrails with human fallbacks", score: 5 },
    ],
  },
];

export const ReadinessAuditSection = () => {
  const [answers, setAnswers] = useState<Record<string, { text: string; score: number; blocker?: boolean }>>({});

  const handleSelect = (qId: string, option: { text: string; score: number; blocker?: boolean }) => {
    setAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = AUDIT_QUESTIONS.length;
  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr.score, 0);
  const maxScore = totalQuestions * 5;
  const scorePercent = Math.round((totalScore / maxScore) * 100) || 0;
  const hasBlocker = Object.values(answers).some((a) => a.blocker);

  const getVerdict = () => {
    if (answeredCount < totalQuestions) return null;

    if (hasBlocker || scorePercent < 50) {
      return {
        verdict: "NO-GO: INFRASTRUCTURE & GOVERNANCE NOT READY",
        badgeColor: "bg-red-100 text-red-800 border-red-300",
        containerColor: "bg-red-50 border-red-200 text-red-900",
        summary: "Your organization displays critical red flags. Scaling automation now will amplify process chaos, create security liabilities, or waste resources on probabilistic tooling for deterministic logic.",
        action: "Action Required: Address foundational data silos and security guardrails before deploying agentic scaling models.",
      };
    }

    if (scorePercent < 80) {
      return {
        verdict: "CONDITIONAL: LIMITED PHASED ROLLOUT ONLY",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
        containerColor: "bg-amber-50 border-amber-200 text-amber-900",
        summary: "Foundational elements exist, but observability, process standardization, or zero-trust identity gaps present operational risk.",
        action: "Recommendation: Restrict deployments to non-critical workflows while completing the Progressive Pivot transformations.",
      };
    }

    return {
      verdict: "GO: READY FOR SCALED AUTOMATION",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      containerColor: "bg-emerald-50 border-emerald-200 text-emerald-900",
      summary: "Governance controls, streaming architectures, and algorithmic scope strictly align with NIST AI RMF and ISO/IEC 42001 standards.",
      action: "Recommendation: Full authorization to scale agentic workflows and automated architectures.",
    };
  };

  const verdict = getVerdict();

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-6">
          <h2 className="text-3xl font-bold text-slate-900">AI Readiness & Governance Audit</h2>
          <p className="text-slate-600 mt-2">
            Evaluated against <strong>NIST AI RMF 1.0</strong> and <strong>ISO/IEC 42001</strong> standards. Select your organization's current state for each operational domain.
          </p>
        </div>

        {/* Scored Diagnostic Questions */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900">1. Interactive Diagnostic Assessment</h3>
          <div className="grid gap-6">
            {AUDIT_QUESTIONS.map((q) => (
              <div key={q.id} className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block font-mono">
                      {q.framework}
                    </span>
                    <h4 className="font-bold text-lg text-slate-900">{q.redFlagTitle}: <span className="font-normal text-slate-700">{q.label}</span></h4>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {q.options.map((opt, idx) => {
                    const isSelected = answers[q.id]?.text === opt.text;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(q.id, opt)}
                        className={`w-full text-left p-3.5 rounded-lg text-sm transition-all border ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 font-medium shadow-sm'
                            : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        {opt.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decision Engine Verdict */}
        {verdict ? (
          <div className={`p-6 rounded-xl border ${verdict.containerColor} transition-all space-y-3`}>
            <div className="flex justify-between items-center flex-wrap gap-2">
              <span className={`px-3 py-1 text-xs font-extrabold uppercase rounded-full border ${verdict.badgeColor}`}>
                {verdict.verdict}
              </span>
              <span className="font-mono text-sm font-bold">{scorePercent}% Compliance Score</span>
            </div>
            <p className="text-sm font-medium leading-relaxed">{verdict.summary}</p>
            <div className="pt-3 border-t border-current/20 text-xs font-bold">
              {verdict.action}
            </div>
          </div>
        ) : (
          <div className="p-4 bg-slate-100 rounded-lg text-center text-slate-500 text-sm">
            Select an answer for all 4 domains above to generate your Governance & Risk Assessment Verdict.
          </div>
        )}

        {/* The Progressive Pivot Table */}
        <div className="space-y-4 pt-6 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">2. The Progressive Pivot Framework</h3>
          <p className="text-sm text-slate-600">Architectural remediation required to resolve identified red flags:</p>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-4 font-semibold text-slate-900">Identified Red Flag</th>
                  <th className="p-4 font-semibold text-slate-900">The Progressive Pivot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                <tr>
                  <td className="p-4 font-medium text-slate-900">The Logic Trap</td>
                  <td className="p-4 text-slate-600">If it's deterministic, use code—not an agent. Reserve LLMs for probabilistic tasks.</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900">Fragmented Data Silos</td>
                  <td className="p-4 text-slate-600">Transition to a Centralized Semantic Layer & Streaming Data Paths.</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900">The "Magic Crutch" Fallacy</td>
                  <td className="p-4 text-slate-600">Standardize and document manual processes before attempting automation.</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-slate-900">Security & Blast Radius</td>
                  <td className="p-4 text-slate-600">Implement Non-Human Identity (NHI) IAM, Zero-Trust, & Human Fallbacks.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
