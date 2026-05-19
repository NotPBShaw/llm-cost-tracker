# Llm Cost Tracker

Token cost and latency observability for LLM workloads.

[![CI](https://github.com/NotPBShaw/llm-cost-tracker/actions/workflows/ci.yml/badge.svg)](https://github.com/NotPBShaw/llm-cost-tracker/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Estimate USD spend from token usage records and aggregate costs across model calls.

## Why this exists

LLM bills surprise teams when token usage is invisible. This library provides deterministic cost estimation from usage records.

## Quickstart

```bash
npm install
make check
node --test tests/cost.test.ts
```

## Usage

```typescript
import { estimateCostUSD } from "./src/cost.js";

const cost = estimateCostUSD(
  { model: "gpt-4o-mini", promptTokens: 1200, completionTokens: 400, latencyMs: 890 },
  0.002,
);
console.log(cost);
```

## Architecture

- `cost.ts` — per-record USD estimation
- `aggregate.ts` — roll-up helpers for batch usage
- `types.ts` — shared usage record types

## Development

```bash
make check
node --test tests/cost.test.ts
```

## License

MIT — see [LICENSE](LICENSE).
