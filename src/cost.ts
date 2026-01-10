import { UsageRecord } from "./types.js";

export function estimateCostUSD(rec: UsageRecord, pricePer1k: number): number {
  const total = rec.promptTokens + rec.completionTokens;
  const estimate = (total / 1000) * pricePer1k;
  return Number(estimate.toFixed(6));
}
