import config from '@payload-config'
import { getPayload as getPayloadBase } from 'payload'

let cachedPromise: ReturnType<typeof getPayloadBase> | null = null

export async function getPayload() {
  if (!cachedPromise) {
    cachedPromise = getPayloadBase({ config })
  }
  return cachedPromise
}
