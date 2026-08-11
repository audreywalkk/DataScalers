export interface RiskInput {
  targetStage: number;
  dataReadinessScore: number;
  hasHumanAuditing: boolean;
  brandSensitivity: number;
}

export interface RiskResult {
  status: "GO" | "CAUTION" | "HALT";
  riskScore: number;
  productivityLossEstimate: string;
  recommendation: string;
}

export function calculateRisk(input: RiskInput): RiskResult {
  const stageGap = Math.max(0, input.targetStage - Math.ceil(input.dataReadinessScore / 2));
  
  let baseRisk = stageGap * 25;
  if (!input.hasHumanAuditing && input.targetStage >= 4) {
    baseRisk += 30;
  }
  baseRisk += input.brandSensitivity * 5;

  const riskScore = Math.min(100, baseRisk);

  if (riskScore >= 65) {
    return {
      status: "HALT",
      riskScore,
      productivityLossEstimate: "High risk: Employees may spend 15+ hrs/week fixing AI hallucination errors.",
      recommendation: "Strategic Pause Required: Your underlying data foundation or brand risk profile suggests scaling to autonomous stages will lead to negative ROI. An SME gatekeeper review is recommended.",
    };
  } else if (riskScore >= 35) {
    return {
      status: "CAUTION",
      riskScore,
      productivityLossEstimate: "Moderate risk: Expect 5-10 hrs/week overhead in auditing and manual corrections.",
      recommendation: "Proceed with Guardrails: Establish clear human-in-the-loop audit checkpoints before activating full prescriptive automation.",
    };
  }

  return {
    status: "GO",
    riskScore,
    productivityLossEstimate: "Low risk: System automation alignment is healthy.",
    recommendation: "Proceed: Your data infrastructure and operational oversight adequately support this maturity leap.",
  };
}
