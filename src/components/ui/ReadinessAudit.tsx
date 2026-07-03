import React from 'react';

export const ReadinessAuditSection = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">AI Readiness & Risk Audit</h2>
        
        {/* Red Flags Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { title: "The Logic Trap", desc: "If it's deterministic, use code—not an agent." },
            { title: "Data Silos", desc: "Streaming data is required for agentic workflows." },
            { title: "The 'Magic Crutch' Fallacy", desc: "Standardize processes before automating." },
            { title: "Security & Blast Radius", desc: "Needs Zero-Trust IAM & human fallbacks." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Pivot Table */}
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4 font-semibold">Red Flag</th>
                <th className="p-4 font-semibold">The Progressive Pivot</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-4">Fragmented Data</td>
                <td className="p-4 text-slate-600">Centralized Semantic Layer</td>
              </tr>
              <tr>
                <td className="p-4">Security Risks</td>
                <td className="p-4 text-slate-600">Non-Human Identity (NHI) IAM</td>
              </tr>
              <tr>
                <td className="p-4">Static Reporting</td>
                <td className="p-4 text-slate-600">Streaming & Action-Ready Data Paths</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};