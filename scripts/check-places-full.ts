import * as fs from 'fs'; import * as path from 'path'; import { createClient } from '@supabase/supabase-js';
function loadEnvLocal() { const envPath = path.resolve(process.cwd(), '.env.local'); if (!fs.existsSync(envPath)) return; const lines = fs.readFileSync(envPath, 'utf-8').split('\n'); for (const line of lines) { const trimmed = line.trim(); if (!trimmed || trimmed.startsWith('#')) continue; const eqIdx = trimmed.indexOf('='); if (eqIdx === -1) continue; const key = trimmed.slice(0, eqIdx).trim(); const val = trimmed.slice(eqIdx + 1).trim(); if (!process.env[key]) process.env[key] = val; } }
loadEnvLocal();
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });
async function main() {
  const { data } = await supabase.from('places').select('*').limit(1);
  console.log('Full place record keys:', Object.keys(data?.[0] ?? {}));
  console.log('Sample:', JSON.stringify(data?.[0], null, 2));
}
main().catch(console.error);
