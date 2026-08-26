import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { Projects } from './collections/Projects'
import { Capabilities } from './collections/Capabilities'
import { Tools } from './collections/Tools'
import { Industries } from './collections/Industries'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { QuoteSubmissions } from './collections/QuoteSubmissions'

import { SiteSettings } from './globals/SiteSettings'
import { HomePage } from './globals/HomePage'
import { AboutPage } from './globals/AboutPage'
import { ServicesPage } from './globals/ServicesPage'
import { ProductsPage } from './globals/ProductsPage'
import { ProjectsPage } from './globals/ProjectsPage'
import { ContactPage } from './globals/ContactPage'
import { QuotePage } from './globals/QuotePage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000',
  cors: [process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000'],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Products,
    Projects,
    Capabilities,
    Tools,
    Industries,
    ContactSubmissions,
    QuoteSubmissions,
  ],
  globals: [
    SiteSettings,
    HomePage,
    AboutPage,
    ServicesPage,
    ProductsPage,
    ProjectsPage,
    ContactPage,
    QuotePage,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET ?? '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? '',
    },
  }),
  upload: {
    limits: {
      fileSize: 10_000_000, // 10 MB
    },
  },
})
