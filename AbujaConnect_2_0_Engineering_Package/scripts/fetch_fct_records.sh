#!/usr/bin/env bash
# AbujaConnect 2.0 public-data ingestion — OSM Overpass only; no UBEC/FCDA private API implied.
set -Eeuo pipefail
mkdir -p data/raw data/processed
OVERPASS_URL="${OVERPASS_URL:-https://overpass-api.de/api/interpreter}"
# south,west,north,east (as supplied in the project brief)
FCT_BBOX="${FCT_BBOX:-8.39,6.74,9.36,7.62}"
fetch() {
  local label="$1" query="$2" outfile="$3"
  echo "Fetching ${label}..."
  local tmp="${outfile}.tmp"
  curl --fail --show-error --silent --retry 3 --retry-delay 2 \
    --connect-timeout 20 --max-time 180 -X POST "$OVERPASS_URL" \
    --data-urlencode "data=${query}" -o "$tmp"
  # Fail fast if server returned HTML/error or malformed JSON.
  jq -e '.elements and (.elements|type=="array")' "$tmp" >/dev/null
  mv "$tmp" "$outfile"
  echo "  saved $(jq '.elements|length' "$outfile") elements -> $outfile"
}
fetch "schools (OSM school features; not UBEC-certified)" \
  "[out:json][timeout:90];(node[\"amenity\"=\"school\"](${FCT_BBOX});way[\"amenity\"=\"school\"](${FCT_BBOX});relation[\"amenity\"=\"school\"](${FCT_BBOX}););out center tags;" \
  data/raw/fct_osm_schools.json
fetch "markets and bus transport (OSM tags)" \
  "[out:json][timeout:90];(node[\"amenity\"=\"marketplace\"](${FCT_BBOX});way[\"amenity\"=\"marketplace\"](${FCT_BBOX});node[\"highway\"=\"bus_stop\"](${FCT_BBOX});node[\"amenity\"=\"bus_station\"](${FCT_BBOX});way[\"amenity\"=\"bus_station\"](${FCT_BBOX}););out center tags;" \
  data/raw/fct_osm_markets_transport.json
fetch "police features (OSM; not NPF official register)" \
  "[out:json][timeout:90];(node[\"amenity\"=\"police\"](${FCT_BBOX});way[\"amenity\"=\"police\"](${FCT_BBOX});relation[\"amenity\"=\"police\"](${FCT_BBOX}););out center tags;" \
  data/raw/fct_osm_police.json
fetch "settlements and administrative boundaries (OSM tags; ward completeness not guaranteed)" \
  "[out:json][timeout:90];(node[\"place\"~\"town|village|suburb|hamlet|neighbourhood\"](${FCT_BBOX});way[\"place\"~\"town|village|suburb|hamlet|neighbourhood\"](${FCT_BBOX});relation[\"boundary\"=\"administrative\"][\"admin_level\"~\"6|8\"](${FCT_BBOX}););out center tags;" \
  data/raw/fct_osm_settlements_admin.json
# Optional HDX/Nigeria GRID3 downloads. Supply exact dataset resource URLs after selecting
# the correct current FCT dataset; this script deliberately does not invent an endpoint.
if [[ -n "${HDX_RESOURCE_URL:-}" ]]; then
  echo "Downloading configured HDX/GRID3 resource..."
  curl --fail --show-error --silent --location --retry 3 "$HDX_RESOURCE_URL" -o data/raw/hdx_grid3_resource
  echo "Downloaded data/raw/hdx_grid3_resource (inspect licence/schema before import)."
else
  echo "Skipping HDX/GRID3: set HDX_RESOURCE_URL to a verified resource download URL."
fi
cat > data/raw/README.txt <<'EOF'
OpenStreetMap Overpass extracts are community-mapped features, not official UBEC/UBEB,
FCDA/FCTA, NPF, INEC, or FCT PHCB registries. Coverage and tagging vary. Validate
identity, school level, ownership, coordinates, ward, hours, and operating status with
the responsible authority before publication. OSM attribution/licence obligations apply.
EOF
echo "Raw JSON saved under data/raw/. Run ./scripts/normalize_fct_records.sh to produce a normalized pending-verification JSON file."
