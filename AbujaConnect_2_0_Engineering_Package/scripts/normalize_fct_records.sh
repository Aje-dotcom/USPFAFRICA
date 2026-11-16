#!/usr/bin/env bash
set -Eeuo pipefail
command -v jq >/dev/null || { echo "jq is required" >&2; exit 1; }
mkdir -p data/processed
jq -s '
  [ .[] | .elements[]? ]
  | map({
      osm_type: .type,
      osm_id: .id,
      name: (.tags.name // .tags["name:en"] // ""),
      latitude: (.lat // .center.lat // null),
      longitude: (.lon // .center.lon // null),
      tags: (.tags // {}),
      source: "OpenStreetMap / Overpass",
      verification_status: "pending",
      fetched_at: (now | todate)
    })
' data/raw/fct_osm_schools.json data/raw/fct_osm_markets_transport.json data/raw/fct_osm_police.json data/raw/fct_osm_settlements_admin.json   > data/processed/fct_osm_records_pending_verification.json
printf 'Wrote %s pending-verification records.
' "$(jq 'length' data/processed/fct_osm_records_pending_verification.json)"
