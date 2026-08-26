# Metron Engineering — Website

Marketing website and CMS for Metron Engineering Services (Perth, WA).

**Stack:** Next.js 16 (App Router) · Payload CMS 3.x · PostgreSQL 16 · Tailwind CSS v4

---

## Local development

### Prerequisites
- Node.js 20+
- Docker (for the local Postgres instance)

### 1. Environment
```bash
cp .env.example .env.local
```
Fill in `.env.local`:
- `PAYLOAD_SECRET` — any random 32+ character string for local dev
- `SEED_ADMIN_PASSWORD` — password for the initial CMS admin account
- Leave SMTP vars blank to skip email during local dev

### 2. Start the database
```bash
docker compose up -d
```

### 3. Install dependencies
```bash
npm install
```

### 4. Run the dev server
```bash
npm run dev
```
Site: http://localhost:3000  
CMS admin: http://localhost:3000/admin

### 5. Seed initial data
```bash
npm run seed -- --fresh
```
Creates collections, page globals, and an admin user at `admin@metronengineering.com.au` using `SEED_ADMIN_PASSWORD`. **Change the password immediately after first login in production.**

To wipe local Postgres and re-seed from scratch:
```bash
docker compose down -v
docker compose up -d
npm run seed -- --fresh
```

All public page content (home, about, products, projects, etc.) is edited in Payload admin — there is no hardcoded catalogue in the UI.

---

## Project structure

```
app/
  (site)/          — Public-facing pages (layout with Header + Footer)
  (payload)/       — Payload CMS admin UI
  api/             — API routes (contact form, quote form, Payload)
collections/       — Payload collection schemas
globals/           — Payload global schemas (page content, site settings)
components/
  home/            — Page-level section components
  layout/          — Header, Footer
  ui/              — Shared UI primitives (InnerHero, RevealWrapper, etc.)
lib/               — Shared utilities (Payload client, email, validation, rate limiter)
scripts/           — Seed script
public/            — Static assets (logos, images)
```

---

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URI` | Yes | PostgreSQL connection string |
| `PAYLOAD_SECRET` | Yes | Payload CMS encryption secret (32+ chars) |
| `NEXT_PUBLIC_SERVER_URL` | Yes | Public URL of the site |
| `SEED_ADMIN_PASSWORD` | Seed only | Password for the initial admin account |
| `SMTP_HOST` | Optional | SMTP server (leave blank to disable email) |
| `SMTP_PORT` | Optional | SMTP port (default 587) |
| `SMTP_USER` | Optional | SMTP username |
| `SMTP_PASS` | Optional | SMTP password / app password |
| `SMTP_FROM` | Optional | From address for outgoing emails |
| `SMTP_NOTIFY_TO` | Optional | Email address to receive form submissions |

Form submissions are always saved to the Payload database regardless of SMTP configuration.

---

## Production checklist

- [ ] Generate a strong `PAYLOAD_SECRET` (`openssl rand -base64 32`)
- [ ] Set `NEXT_PUBLIC_SERVER_URL` to the live domain
- [ ] Configure SMTP (see `lib/email.ts` for provider options)
- [ ] Change the CMS admin password after first login
- [ ] Point `DATABASE_URI` to a managed Postgres instance
