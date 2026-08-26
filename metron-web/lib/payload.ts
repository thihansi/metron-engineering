import config from '@payload-config'
import { getPayload as getPayloadBase } from 'payload'

let cachedPromise: ReturnType<typeof getPayloadBase> | null = null

export async function getPayload() {
  if (!cachedPromise) {
    if (!process.env.PAYLOAD_SECRET) {
      throw new Error('PAYLOAD_SECRET env var must be set')
    }
    cachedPromise = getPayloadBase({ config }).catch((e) => {
      cachedPromise = null
      throw e
    })
  }
  return cachedPromise
}
