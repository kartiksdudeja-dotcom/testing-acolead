import { NextRequest, NextResponse } from 'next/server'

const allowedOrigins = new Set([
  'https://acoleaddemo.acolead.com',
  'http://localhost:3001',
])
const requestsByIp = new Map<string, { windowStartedAt: number; count: number }>()
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5

function corsHeaders(origin: string) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  }
}

function jsonResponse(body: unknown, status: number, origin: string) {
  return NextResponse.json(body, { status, headers: corsHeaders(origin) })
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin') || ''
  if (!allowedOrigins.has(origin)) return new NextResponse(null, { status: 403 })
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) })
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin') || ''
  if (!allowedOrigins.has(origin)) return jsonResponse({ message: 'Origin is not allowed.' }, 403, origin)

  const now = Date.now()
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const current = requestsByIp.get(ip)
  if (current && now - current.windowStartedAt < RATE_LIMIT_WINDOW_MS && current.count >= RATE_LIMIT_MAX) {
    return jsonResponse({ message: 'Too many OTP requests. Try again shortly.' }, 429, origin)
  }
  if (!current || now - current.windowStartedAt >= RATE_LIMIT_WINDOW_MS) {
    requestsByIp.set(ip, { windowStartedAt: now, count: 1 })
  } else {
    current.count += 1
  }

  const token = process.env.DEMO_OTP_SEND_TOKEN
  if (!token) return jsonResponse({ message: 'Demo OTP proxy is not configured.' }, 503, origin)

  let body: { mobileNumber?: unknown }
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ message: 'Request body must be valid JSON.' }, 400, origin)
  }
  if (typeof body.mobileNumber !== 'string' || !body.mobileNumber.trim()) {
    return jsonResponse({ message: 'A mobileNumber is required.' }, 400, origin)
  }

  const backendUrl = (process.env.CRM_BACKEND_URL || 'https://api.acolead.com/crm-backend/api').replace(/\/$/, '')
  try {
    const upstream = await fetch(`${backendUrl}/v1/cp/demo-otp/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        Origin: 'https://acoleaddemo.acolead.com',
      },
      body: JSON.stringify({ mobileNumber: body.mobileNumber }),
      cache: 'no-store',
    })
    const responseBody = await upstream.json().catch(() => ({}))
    return jsonResponse(responseBody, upstream.status, origin)
  } catch {
    return jsonResponse({ message: 'Unable to reach the OTP service.' }, 502, origin)
  }
}
