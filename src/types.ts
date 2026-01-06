export interface UsageRecord {
  model: string;
  promptTokens: number;
  completionTokens: number;
  latencyMs: number;
}
