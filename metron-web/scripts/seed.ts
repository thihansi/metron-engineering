/**
 * Seed script — populates Payload collections and globals from scripts/seed-data.ts
 *
 *   npm run seed           # fails if data already exists (use --fresh)
 *   npm run seed -- --fresh  # wipe collections/globals content then re-seed
 */
import { readFileSync } from 'fs'
try {
  const env = readFileSync('.env.local', 'utf8')
  for (const line of env.split('\n')) {
    const [k, ...v] = line.split('=')
    if (k && !k.startsWith('#')) process.env[k.trim()] = v.join('=').trim()
  }
} catch {
  /* rely on existing env */
}

import config from '../payload.config'
import { getPayload, type Payload } from 'payload'
import {
  ABOUT_PAGE,
  CAPABILITIES,
  CONTACT_PAGE,
  HOME_PAGE,
  INDUSTRIES,
  PRODUCTS,
  PRODUCTS_PAGE,
  PROJECTS,
  PROJECTS_PAGE,
  SERVICES_PAGE,
  SITE_SETTINGS,
  TOOLS,
} from './seed-data'

const FRESH = process.argv.includes('--fresh')

const COLLECTION_SLUGS = [
  'capabilities',
  'tools',
  'industries',
  'services',
  'products',
  'projects',
] as const

async function clearCollection(payload: Payload, slug: (typeof COLLECTION_SLUGS)[number]) {
  const existing = await payload.find({ collection: slug, limit: 500, depth: 0 })
  for (const doc of existing.docs) {
    await payload.delete({ collection: slug, id: doc.id })
  }
}

async function seed() {
  const payload = await getPayload({ config })

  if (FRESH) {
    console.log('Fresh seed: clearing collections…')
    for (const slug of COLLECTION_SLUGS) {
      await clearCollection(payload, slug)
      console.log(`  cleared ${slug}`)
    }
  }

  for (const cap of CAPABILITIES) {
    await payload.create({ collection: 'capabilities', data: cap })
  }
  console.log(`✓ Capabilities (${CAPABILITIES.length})`)

  for (const t of TOOLS) {
    await payload.create({ collection: 'tools', data: t })
  }
  console.log(`✓ Tools (${TOOLS.length})`)

  for (const ind of INDUSTRIES) {
    await payload.create({ collection: 'industries', data: ind })
  }
  console.log(`✓ Industries (${INDUSTRIES.length})`)

  for (const prod of PRODUCTS) {
    await payload.create({ collection: 'products', data: prod })
  }
  console.log(`✓ Products (${PRODUCTS.length})`)

  for (const prj of PROJECTS) {
    await payload.create({ collection: 'projects', data: prj })
  }
  console.log(`✓ Projects (${PROJECTS.length})`)

  await payload.updateGlobal({ slug: 'site-settings', data: SITE_SETTINGS })
  console.log('✓ site-settings')

  await payload.updateGlobal({ slug: 'home-page', data: HOME_PAGE })
  console.log('✓ home-page')

  await payload.updateGlobal({ slug: 'about-page', data: ABOUT_PAGE })
  console.log('✓ about-page')

  await payload.updateGlobal({ slug: 'products-page', data: PRODUCTS_PAGE })
  console.log('✓ products-page')

  await payload.updateGlobal({ slug: 'projects-page', data: PROJECTS_PAGE })
  console.log('✓ projects-page')

  await payload.updateGlobal({ slug: 'services-page', data: SERVICES_PAGE })
  console.log('✓ services-page')

  await payload.updateGlobal({ slug: 'contact-page', data: CONTACT_PAGE })
  console.log('✓ contact-page')

  // Admin user — create only if missing
  const adminPassword = process.env.SEED_ADMIN_PASSWORD
  if (!adminPassword) throw new Error('SEED_ADMIN_PASSWORD is not set in .env.local')

  const existingAdmin = await payload.find({
    collection: 'users',
    where: { email: { equals: 'admin@metronengineering.com.au' } },
    limit: 1,
  })
  if (existingAdmin.docs.length === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@metronengineering.com.au',
        password: adminPassword,
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
      },
    })
    console.log('✓ Admin user created (admin@metronengineering.com.au)')
  } else {
    console.log('✓ Admin user already exists')
  }

  console.log('\n✅  Seed complete.')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
