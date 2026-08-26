'use client'

import { useState } from 'react'

const SERVICES = [
  'Structural Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Architectural Engineering',
  'Drafting & CAD',
  'BIM Services',
  'FEA Analysis',
  'Steel Detailing',
  'Metron Specials / Products',
  'Other',
]

interface FileEntry {
  name: string
  size: string
}

function formatSize(bytes: number): string {
  if (bytes > 1_048_576) return (bytes / 1_048_576).toFixed(1) + ' MB'
  return Math.max(1, Math.round(bytes / 1024)) + ' KB'
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-archivo)',
  fontWeight: 600,
  fontSize: '12.5px',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: '#7c848e',
  marginBottom: '8px',
}

const inputStyle: React.CSSProperties = { height: '50px', padding: '0 15px' }

export function QuoteForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [files, setFiles] = useState<FileEntry[]>([])
  const [dragging, setDragging] = useState(false)

  function addFiles(fileList: FileList | null) {
    if (!fileList) return
    const added: FileEntry[] = Array.from(fileList).map(f => ({
      name: f.name,
      size: formatSize(f.size),
    }))
    if (added.length) setFiles(prev => [...prev, ...added])
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const getVal = (name: string) =>
      ((form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null)?.value?.trim() ?? '')

    const data = {
      name: getVal('name'),
      company: getVal('company') || undefined,
      email: getVal('email'),
      phone: getVal('phone') || undefined,
      serviceRequired: selectedService,
      projectLocation: getVal('projectLocation') || undefined,
      indicativeTiming: getVal('indicativeTiming') || undefined,
      description: getVal('description'),
      attachments: files.length > 0 ? files.map(f => ({ filename: f.name, size: f.size })) : undefined,
    }

    if (!data.name || !data.email || !data.serviceRequired || !data.description) {
      setErrorMsg('Please fill in all required fields.')
      setStatus('error')
      return
    }

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error((json as { error?: string }).error ?? 'Submission failed.')
      }

      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '48px', background: '#f0f9f4', border: '1px solid #b8e6c8', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '20px', color: '#0b1c33', marginBottom: '10px' }}>
          Quote request received
        </div>
        <p style={{ margin: 0, fontSize: '15px', color: '#5a626c' }}>
          Thanks for reaching out. We will review your project details and come back with an approach and a price — typically within two business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mtr-quote-form">
      {/* Row 1 — Name + Company */}
      <div>
        <label htmlFor="qf-name" style={labelStyle}>Name *</label>
        <input id="qf-name" name="name" type="text" required placeholder="Full name" className="mtr-field" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="qf-company" style={labelStyle}>Company</label>
        <input id="qf-company" name="company" type="text" placeholder="Company or organisation" className="mtr-field" style={inputStyle} />
      </div>

      {/* Row 2 — Email + Phone */}
      <div>
        <label htmlFor="qf-email" style={labelStyle}>Email *</label>
        <input id="qf-email" name="email" type="email" required placeholder="name@company.com.au" className="mtr-field" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="qf-phone" style={labelStyle}>Phone</label>
        <input id="qf-phone" name="phone" type="tel" placeholder="04XX XXX XXX" className="mtr-field" style={inputStyle} />
      </div>

      {/* Service chip selector — full width */}
      <div style={{ gridColumn: '1 / -1' }}>
        <div style={labelStyle}>Service required *</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {SERVICES.map(s => {
            const on = selectedService === s
            return (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedService(on ? '' : s)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: '40px',
                  padding: '0 18px',
                  border: `1px solid ${on ? '#0b1c33' : '#cfd5dc'}`,
                  background: on ? '#0b1c33' : '#fff',
                  color: on ? '#fff' : '#26303b',
                  fontFamily: 'var(--font-archivo)',
                  fontWeight: 600,
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  transition: 'background 260ms ease, border-color 260ms ease, color 260ms ease',
                }}
              >
                {s}
              </button>
            )
          })}
        </div>
      </div>

      {/* Row 3 — Location + Timing */}
      <div>
        <label htmlFor="qf-location" style={labelStyle}>Project location</label>
        <input id="qf-location" name="projectLocation" type="text" placeholder="Town, state or site name" className="mtr-field" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="qf-timing" style={labelStyle}>Indicative timing</label>
        <input id="qf-timing" name="indicativeTiming" type="text" placeholder="e.g. shutdown in October" className="mtr-field" style={inputStyle} />
      </div>

      {/* Description — full width */}
      <div style={{ gridColumn: '1 / -1' }}>
        <label htmlFor="qf-desc" style={labelStyle}>Project description *</label>
        <textarea
          id="qf-desc"
          name="description"
          required
          placeholder="Scope, dimensions, loads, site conditions and anything else that helps us understand the job"
          className="mtr-field"
          style={{ resize: 'vertical', padding: '14px 15px', minHeight: '150px', lineHeight: 1.6 }}
        />
      </div>

      {/* File upload — full width */}
      <div style={{ gridColumn: '1 / -1' }}>
        <div style={labelStyle}>Attach drawings or specifications</div>
        <label
          className={`mtr-dropzone${dragging ? ' mtr-dropzone--active' : ''}`}
          onDragOver={e => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={e => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files) }}
        >
          <input
            type="file"
            multiple
            accept=".pdf,.dwg,.dxf,.ifc,.jpg,.jpeg,.png,.gif,.webp"
            style={{ display: 'none' }}
            onChange={e => addFiles(e.target.files)}
          />
          <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 700, fontSize: '16px', color: '#0b1c33' }}>
            Drop files here or browse
          </span>
          <span style={{ fontSize: '14px', color: '#7c848e' }}>
            PDF, DWG, DXF, IFC, images — up to 25 MB each
          </span>
        </label>
        {files.length > 0 && (
          <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '1px', background: '#e4e7eb', border: '1px solid #e4e7eb' }}>
            {files.map((f, i) => (
              <div key={i} style={{ background: '#fff', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '14.5px', color: '#26303b' }}>{f.name}</span>
                <span style={{ fontFamily: 'var(--font-archivo)', fontWeight: 600, fontSize: '12.5px', color: '#7c848e', flexShrink: 0 }}>{f.size}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Error message */}
      {status === 'error' && (
        <p style={{ margin: 0, gridColumn: '1 / -1', fontSize: '14px', color: '#c0392b', fontFamily: 'var(--font-archivo)', fontWeight: 600 }}>
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <div style={{ gridColumn: '1 / -1', marginTop: '8px' }}>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mtr-cta-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            height: '56px',
            padding: '0 34px',
            background: status === 'submitting' ? '#8b929b' : '#0b1c33',
            color: '#fff',
            fontFamily: 'var(--font-archivo)',
            fontSize: '15.5px',
            fontWeight: 700,
            border: 'none',
            cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
            clipPath: 'polygon(0 0,100% 0,100% 66%,calc(100% - 16px) 100%,0 100%)',
          }}
        >
          {status === 'submitting' ? 'Submitting…' : 'Send enquiry'}
        </button>
      </div>
    </form>
  )
}
