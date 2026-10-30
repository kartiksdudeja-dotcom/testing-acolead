import { createHash } from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'

const allowedOrigins = new Set(['https://www.acolead.com', 'https://acolead.com', 'https://acoleaddemo.acolead.com', 'http://localhost:3001'])
const hash = (value: string) => createHash('sha256').update(value.trim().toLowerCase()).digest('hex')

function response(body: unknown, status: number, origin: string) {
  return NextResponse.json(body, { status, headers: { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', Vary: 'Origin' } })
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin') || ''
  if (!allowedOrigins.has(origin)) return new NextResponse(null, { status: 403 })
  return new NextResponse(null, { status: 204, headers: { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', Vary: 'Origin' } })
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin') || ''
  if (!allowedOrigins.has(origin)) return response({ message: 'Origin is not allowed.' }, 403, origin)
  const pixelId = process.env.META_PIXEL_ID
  const accessToken = process.env.META_CONVERSIONS_ACCESS_TOKEN
  const graphVersion = process.env.META_GRAPH_API_VERSION
  if (!pixelId || !accessToken || !graphVersion) return response({ message: 'Meta Conversions API is not configured.' }, 503, origin)

  let body: { eventId?: string; eventName?: string; email?: string; phone?: string; page?: string; campaignCode?: string; fbp?: string; fbc?: string }
  try { body = await request.json() } catch { return response({ message: 'Request body must be valid JSON.' }, 400, origin) }
  if (!body.eventId || !body.eventName || !body.phone) return response({ message: 'Required conversion fields are missing.' }, 400, origin)
  const phone = body.phone.replace(/\D/g, '')
  const userData: Record<string, unknown> = {
    ph: [hash(phone)],
    client_user_agent: request.headers.get('user-agent') || undefined,
    client_ip_address: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || undefined,
    fbp: body.fbp || undefined,
    fbc: body.fbc || undefined,
  }
  if (body.email?.trim()) userData.em = [hash(body.email)]
  const payload = {
    data: [{ event_name: body.eventName, event_time: Math.floor(Date.now() / 1000), event_id: body.eventId, action_source: 'website', event_source_url: body.page ? new URL(body.page, 'https://www.acolead.com').toString() : 'https://www.acolead.com/', user_data: userData, custom_data: { campaign_code: body.campaignCode || 'Website - organic' } }],
  }
  try {
    const upstream = await fetch(`https://graph.facebook.com/${graphVersion}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), cache: 'no-store' })
    const result = await upstream.json().catch(() => ({}))
    return response(result, upstream.ok ? 200 : upstream.status, origin)
  } catch {
    return response({ message: 'Unable to reach Meta Conversions API.' }, 502, origin)
  }
}
