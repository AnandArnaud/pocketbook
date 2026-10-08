# pocketbook

Pocketbook is a minimal single-page spending tracker — add expenses, filter them, raise the budget.

**Stack:** Vite + React (TypeScript, SPA)

It is intentionally small.

## Key user actions

add expense · filter · raise budget

## Running it

```bash
npm install
npm run dev   # http://localhost:5173
```

## Flags and experiments

Statsig is wired through `@statsig/js-client` and `@statsig/react-bindings` (`src/main.tsx`). One feature gate, `compact_budget_panel`, controls the budget card layout; one running experiment, `budget_nudge_copy`, sets the call-to-action text (`cta_text`); the app logs `expense_added`, `expenses_filtered` and `budget_raised` as Statsig events. The client key comes from `VITE_STATSIG_CLIENT_KEY` (see `.env.example`).
