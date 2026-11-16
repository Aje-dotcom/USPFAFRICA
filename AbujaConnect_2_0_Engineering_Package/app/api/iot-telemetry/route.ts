import { NextRequest, NextResponse } from 'next/server';

// Demo-safe ingestion endpoint. Configure IOT_INGEST_TOKEN on the server and send
// Authorization: Bearer <token>. Do not expose this token in the browser.
const allowedModes = new Set(['LIVE', 'SIMULATED']);
export async function POST(req: NextRequest) {
  const expected = process.env.IOT_INGEST_TOKEN;
  if (!expected) return NextResponse.json({ error: 'Telemetry ingestion is not configured.' }, { status: 503 });
  if (req.headers.get('authorization') !== `Bearer ${expected}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  let body: any;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }
  const { node_id, facility_id, online, signal_dbm, solar_battery_pct, sensor_metric, last_ping, mode } = body ?? {};
  if (typeof node_id !== 'string' || node_id.length > 80 || typeof facility_id !== 'string' ||
      typeof online !== 'boolean' || !allowedModes.has(mode) || typeof sensor_metric !== 'string' ||
      sensor_metric.length > 300 || typeof last_ping !== 'string' || last_ping.length > 80 ||
      (signal_dbm !== null && (!Number.isFinite(signal_dbm) || signal_dbm < -150 || signal_dbm > 0)) ||
      (solar_battery_pct !== null && (!Number.isFinite(solar_battery_pct) || solar_battery_pct < 0 || solar_battery_pct > 100))) {
    return NextResponse.json({ error: 'Telemetry payload failed validation.' }, { status: 422 });
  }
  // TODO production: persist to Supabase/Postgres with device registry, replay protection,
  // timestamp validation, audit trail and per-node authorization. Never trust client time.
  return NextResponse.json({ accepted: true, persisted: false, mode, node_id,
    warning: 'Validated only; no database or physical device integration is configured.' }, { status: 202 });
}
