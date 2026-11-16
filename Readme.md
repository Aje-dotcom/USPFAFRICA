# AbujaConnect 2.0 (MamaCare & Bwari Learn)
**USPF Changemaker Challenge Submission — Low-Bandwidth, Multilingual Digital Public Infrastructure for the FCT, Nigeria**

[![Version](https://img.shields.io/badge/release-v2.0.0-0B7A43.svg)](https://github.com/aje-dotcom/USPF_ChangeMakerChallenge/releases)
[![Region](https://img.shields.io/badge/FCT_Abuja-6_Area_Councils_%7C_62_Wards-0E5AA8.svg)](#coverage)
[![Offline-First](https://img.shields.io/badge/Architecture-Offline--First_%2B_USSD_%2B_WhatsApp-F2B705.svg)](#architecture)

## Overview
**AbujaConnect 2.0** (evolving from the **Bwari Connect** field prototype) addresses delayed maternal/child healthcare referrals, zero-data learning interruptions, and fragmented civic/emergency directory access across underserved rural and peri-urban communities in the **Federal Capital Territory (FCT), Nigeria**.

### Core Modules
1. **MamaCare (Multilingual Health Triage & Referral Engine):**
   - **Channels:** WhatsApp Cloud API, Progressive Web App (PWA), and feature-phone USSD (`*384*725#`) + SMS.
   - **Languages:** English, Nigerian Pidgin, Hausa, Yoruba, Igbo, and **Gbagyi** (audio prompts + community volunteer translation).
   - **Clinical & Safety Controls:** Step 0 explicit informed consent gate, immediate **RED** emergency circuit-breaker for clinical danger signs (*heavy bleeding, fits/convulsions, breathing difficulty, baby not crying*) routing to **Bwari General Hospital**, **YELLOW** routing to local PHCs (*Ushafa, Kogo, Kuduru, Jigo, Sabon Gari, Dutse Alhaji*), and **GREEN** home care with 24-hour follow-up SMS.
2. **Bwari Learn (100% Offline Curriculum Tutor):**
   - **Target:** Primary 4–6 and Junior Secondary (JSS 1–2) pupils and teachers in low-connectivity wards (e.g., Kawu Ward / LEA Primary School Gidan-Bijimi).
   - **Workflow:** Single WiFi download caches lessons offline. Human-verified GenAI converts one textbook topic into 4 localized assets: a 10-minute visual lesson (e.g., Primary 5 Fractions using 3 oranges shared among 4 friends in Ushafa Market), a 3-question interactive quiz with tactile feedback, an automated Parent SMS, and a Teacher Class Progress Dashboard.
3. **FCT Emergency & Civic Directory (`AbujaConnect 2.0`):**
   - **Coverage:** All **6 FCT Area Councils** (`AMAC`, `Bwari`, `Gwagwalada`, `Kuje`, `Kwali`, `Abaji`) and **62 reference wards** across 8 categories: *Ambulance Services, Police Stations & Posts, Government Hospitals, Private Hospitals, Primary Health Centres (PHCs), Primary Schools, Junior Secondary Schools, Markets, Bus Stops & Terminals,* and *Communities & Wards*.
   - **Decision & Verification Engine:** One-tap `112` and FCT EMS (`09157892931`) emergency bar, 100-point transparent suitability scoring (`Capability 45 + Hours 25 + Referral Clarity 15 + Verification 15`), and explicit data-governance badges (`✓ Source checked` vs. `⚠ Unverified` / `SIMULATED DATA`).

---

## Repository Structure

```text
USPF_ChangeMakerChallenge/
├── app/
│   ├── AbujaConnect_2_0.html          # Standalone offline-ready FCT directory & decision engine
│   ├── actions.js                     # Server-authoritative Zod triage calculation & Supabase persistence
│   ├── emergency/page.tsx             # Next.js App Router emergency directory view
│   └── api/
│       ├── facilities/route.ts        # PIN-protected Admin CRUD endpoint for 6 Area Councils
│       └── iot-telemetry/route.ts     # Token-guarded IoT edge-node telemetry validation endpoint
├── components/
│   ├── EmergencyDirectory.tsx         # GPS Haversine & manual landmark emergency directory
│   ├── AbujaCivicExplorer.tsx         # 6-Area-Council, 62-ward & IoT civic explorer
│   ├── HealthTriage.jsx               # Step 0 consent gate & Step 3 RED emergency circuit-breaker
│   └── Quiz.jsx                       # Offline quiz with tactile flash/shake micro-interactions
├── data/
│   └── fctMasterRecords.ts            # Typed master seed (45 community + 17 health/safety records)
├── scripts/
│   ├── fetch_fct_records.sh           # Overpass API public GIS ingestion script for FCT bounding box
│   └── normalize_fct_records.sh       # Normalizes raw GIS extracts into pending-verification JSON
├── schema.sql                         # PostgreSQL / Supabase schema with CHECK(has_consent = TRUE)
├── README.md                          # Project overview, architecture & field evidence
├── CHANGELOG.md                       # Semantic version history (v1.0.0 -> v2.0.0)
└── CONTRIBUTING.md                    # Branching strategy, commit conventions & data verification rules