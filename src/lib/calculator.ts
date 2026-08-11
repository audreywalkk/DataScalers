// lib/calculator.ts

export interface MaturityStage {
  id: number;
  name: string;
  description: string;
  // Based on Gartner Analytic Ascendancy & CMMI DMM frameworks
  efficiencyFactor: { conservative: number; expected: number; optimistic: number };
}

export const MATURITY_STAGES: Record<number, MaturityStage> = {
  1: {
    id: 1,
    name: "Stage 1: Ad-hoc / Reactive",
    description: "Siloed data, high manual reporting effort.",
    efficiencyFactor: { conservative: 0.05, expected: 0.10, optimistic: 0.15 },
  },
  2: {
    id: 2,
    name: "Stage 2: Managed / Repeatable",
    description: "Standardized metrics, basic pipeline automation.",
    efficiencyFactor: { conservative: 0.15, expected: 0.25, optimistic: 0.35 },
  },
  3: {
    id: 3,
    name: "Stage 3: Defined / Proactive",
    description: "Centralized warehouse, automated quality checks.",
    efficiencyFactor: { conservative: 0.30, expected: 0.45, optimistic: 0.55 },
  },
  4: {
    id: 4,
    name: "Stage 4: Quantitatively Managed",
    description: "Real-time telemetry, advanced observational pipelines.",
    efficiencyFactor: { conservative: 0.50, expected: 0.65, optimistic: 0.75 },
  },
  5: {
    id: 5,
    name: "Stage 5: Optimized / AI-Driven",
    description: "Self-healing data systems, autonomous AI governance.",
    efficiencyFactor: { conservative: 0.70, expected: 0.80, optimistic: 0.90 },
  },
};

export interface CalculatorInputs {
  teamSize: number;
  hourlyRate: number; // Default: $85/hr (Bureau of Labor Statistics benchmark)
  weeklyHoursPerFTE: number;
  maturityStageId: number;
}

export function calculateROIRange(inputs: CalculatorInputs) {
  const stage = MATURITY_STAGES[inputs.maturityStageId] || MATURITY_STAGES[1];
  const annualTotalHours = inputs.teamSize * inputs.weeklyHoursPerFTE * 52;

  const calc = (factor: number) => {
    const hoursSaved = annualTotalHours * factor;
    const dollarsSaved = hoursSaved * inputs.hourlyRate;
    return { hoursSaved, dollarsSaved };
  };

  const cons = calc(stage.efficiencyFactor.conservative);
  const exp = calc(stage.efficiencyFactor.expected);
  const opt = calc(stage.efficiencyFactor.optimistic);

  return {
    annualSavings: {
      conservative: cons.dollarsSaved,
      expected: exp.dollarsSaved,
      optimistic: opt.dollarsSaved,
    },
    hoursSaved: {
      conservative: cons.hoursSaved,
      expected: exp.hoursSaved,
      optimistic: opt.hoursSaved,
    },
  };
}
