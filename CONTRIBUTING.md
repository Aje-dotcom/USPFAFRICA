# Version Control & Data Stewardship Workflow

## Branching Strategy
- `main`: Production-ready, field-tested release branch submitted to the USPF Changemaker Challenge.
- `develop`: Integration branch for new FCT ward datasets, UI refinements, and API routes.
- `feat/<scope>`: Feature branches (e.g., `feat/ussd-termii-gateway`, `feat/gbagyi-audio-prompts`).
- `data/<area-council>`: Community verification branches (e.g., `data/bwari-ward-audit`, `data/kuje-godozhi-phcs`).

## Conventional Commit Format
All commits follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` New user-facing capability (e.g., `feat(triage): add Step 3 RED emergency circuit-breaker`)
- `fix:` Bug or usability fix (e.g., `fix(ui): remove 900ms debounce on language selector pills`)
- `data:` Directory or ward dataset updates (e.g., `data(fct): add 10 community & ward seed records across 6 councils`)
- `docs:` Documentation, pitch scripts, and USPF evidence updates

## Data Verification Rules (Mandatory Before Merging `data/*` PRs)
1. Never mark any facility `verified: true` (`verificationStatus: "verified"`) without a dated authoritative source (FCT PHCB, FCT UBEB, NPF, or signed facility log).
2. Never commit `.env.local`, Supabase `SERVICE_ROLE_KEY`, or `IOT_INGEST_TOKEN` secrets to the repository.
3. Never store patient names, phone numbers, or personally identifiable health records in public directory JSON/TypeScript files.