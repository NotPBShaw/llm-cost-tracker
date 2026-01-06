import { UsageRecord } from "./types.js";

export function estimateCostUSD(rec: UsageRecord, pricePer1k: number): number {
  const total = rec.promptTokens + rec.completionTokens;
  return Number(((total / 1000) * pricePer1k).toFixed(6));
}
