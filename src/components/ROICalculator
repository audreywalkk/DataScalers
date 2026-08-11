// components/ROICalculator.tsx
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MATURITY_STAGES, calculateROIRange } from "@/lib/calculator";

export function ROICalculator() {
  const [stageId, setStageId] = useState<number>(2);
  const [teamSize, setTeamSize] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(85); // Cited default
  const [weeklyHours, setWeeklyHours] = useState<number>(15);

  const results = calculateROIRange({
    maturityStageId: stageId,
    teamSize,
    hourlyRate,
    weeklyHoursPerFTE: weeklyHours,
  });

  const fmt = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl border-slate-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Data Automation Savings Calculator</CardTitle>
        <CardDescription>
          Adjust inputs below to test assumptions. Selected maturity stage dictates realistic efficiency ceilings.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Maturity Stage Selector */}
        <div className="space-y-2">
          <Label className="font-semibold">Org Data Maturity Stage</Label>
          <Select value={String(stageId)} onValueChange={(v) => setStageId(Number(v))}>
            <SelectTrigger>
              <SelectValue placeholder="Select Maturity Stage" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(MATURITY_STAGES).map((s) => (
                <SelectItem key={s.id} value={String(s.id)}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">{MATURITY_STAGES[stageId]?.description}</p>
        </div>

        {/* Editable Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Data Team Size (FTEs)</Label>
            <Input type="number" value={teamSize} onChange={(e) => setTeamSize(Number(e.target.value))} />
          </div>

          <div className="space-y-2">
            <Label>
              Blended Rate ($/hr)
              <span className="text-[10px] text-muted-foreground block font-normal">Default: $85/hr (BLS Benchmark)</span>
            </Label>
            <Input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} />
          </div>

          <div className="space-y-2">
            <Label>Manual Hours / Wk / FTE</Label>
            <Input type="number" value={weeklyHours} onChange={(e) => setWeeklyHours(Number(e.target.value))} />
          </div>
        </div>

        {/* Range Spread */}
        <div className="pt-4 border-t border-border">
          <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground block mb-3">
            Estimated Annual Savings Range
          </Label>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-muted/40 border">
              <span className="text-xs text-muted-foreground font-medium uppercase block">Conservative</span>
              <span className="text-xl font-semibold">{fmt(results.annualSavings.conservative)}</span>
            </div>
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
              <span className="text-xs text-primary font-bold uppercase block">Expected</span>
              <span className="text-2xl font-bold text-primary">{fmt(results.annualSavings.expected)}</span>
            </div>
            <div className="p-4 rounded-lg bg-muted/40 border">
              <span className="text-xs text-muted-foreground font-medium uppercase block">Optimistic</span>
              <span className="text-xl font-semibold">{fmt(results.annualSavings.optimistic)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
