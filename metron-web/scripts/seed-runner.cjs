// CJS wrapper that:
// 1. Loads .env.local before any imports run (tsx hoists imports above readFileSync)
// 2. Fixes the @next/env ESM interop issue — tsx CJS mode sees __esModule:true but
//    no .default, returning undefined; patching .default = module fixes it.
'use strict'
const fs = require('fs')
const path = require('path')

// Load .env.local
try {
  const envFile = fs.readFileSync(path.join(__dirname, '..', '.env.local'), 'utf8')
  for (const line of envFile.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    const val = trimmed.slice(eq + 1).trim()
    if (key && !(key in process.env)) process.env[key] = val
  }
} catch { /* .env.local not found */ }

// Patch @next/env default export for tsx CJS interop
const Module = require('module')
const _load = Module._load.bind(Module)
Module._load = function (request, parent, isMain) {
  const mod = _load(request, parent, isMain)
  if (request === '@next/env' && mod && mod.__esModule && !mod.default) {
    mod.default = mod
  }
  return mod
}

require('tsx/cjs')
require('./seed.ts')
