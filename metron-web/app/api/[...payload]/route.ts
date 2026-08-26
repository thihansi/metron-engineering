import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST, REST_PUT } from '@payloadcms/next/routes'
import config from '@payload-config'
import type { NextRequest } from 'next/server'

// Payload REST handlers are designed for [...]slug routes; we adapt them here.
// The param key name difference (payload vs slug) is handled internally by Payload.
type Handler = (request: NextRequest, ctx: { params: Promise<{ payload: string[] }> }) => Promise<Response>

const wrapHandler = (h: ReturnType<typeof REST_GET>): Handler =>
  (request, ctx) => h(request, { params: ctx.params.then(({ payload }) => ({ slug: payload })) })

export const GET: Handler = wrapHandler(REST_GET(config))
export const POST: Handler = wrapHandler(REST_POST(config))
export const DELETE: Handler = wrapHandler(REST_DELETE(config))
export const PATCH: Handler = wrapHandler(REST_PATCH(config))
export const PUT: Handler = wrapHandler(REST_PUT(config))
export const OPTIONS = REST_OPTIONS(config) as unknown as Handler
