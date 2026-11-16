# AbujaConnect 2.0 — injected engineering package

## Contents
- `app/AbujaConnect_2_0.html`: updated standalone prototype with supplied seed listings, ward-reference panel and IoT demo panel.
- `scripts/fetch_fct_records.sh`: Overpass fetcher for OSM school, market/transport, police and settlement/admin-boundary features.
- `scripts/normalize_fct_records.sh`: combines OSM extracts into normalized JSON with verification_status=pending.
- `data/fctMasterRecords.ts`: typed master seed and illustrative telemetry.
- `app/api/iot-telemetry/route.ts`: guarded Next.js route skeleton that validates incoming telemetry but does not persist it.

## Important data-quality caveats
1. The supplied list of 62 ward names is included as a *reference draft*, not certified INEC/FCTA data. Validate council/ward names and boundaries with the authoritative current register before production.
2. User-supplied facility examples and coordinates are marked `pending` / unverified. Coordinates are not field-confirmed. The prototype does not silently mark these verified.
3. OSM is a community-mapped open dataset, not UBEC/UBEB, FCDA/FCTA, NPF or FCT PHCB official records. It may be incomplete, mis-tagged or outdated. Review each record and comply with OSM attribution/licensing.
4. IoT values in the HTML and TypeScript are simulated demo values. No sensor, fridge, battery, LoRaWAN/GSM gateway or classroom server is connected. The endpoint currently validates only and returns `persisted:false`.
5. The shell script needs `curl` and `jq`. Run from this directory: `./scripts/fetch_fct_records.sh`. Optional HDX download requires a manually verified resource URL in `HDX_RESOURCE_URL`; the script intentionally invents no HDX endpoint.

## Next production steps
- Confirm all 62 wards against current INEC/FCTA datasets and polygon boundaries.
- Cross-check school levels/ownership with FCT UBEB/education authorities; facilities with FCT PHCB; police with NPF; markets/transport with FCTA/Area Councils.
- Add field verification workflow (named verifier, date, evidence, review status).
- Add authenticated admin roles, Supabase/Postgres persistence, RLS, audit trail and import deduplication.
- Register physical IoT devices, provision per-device credentials, validate timestamps/replay, persist telemetry and set alert thresholds before displaying any `LIVE` status.
