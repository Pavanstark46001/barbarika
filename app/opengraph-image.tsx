import { ImageResponse } from 'next/og'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

export const runtime = 'edge'
export const alt = `${SITE_NAME} — Premium Software & Digital Marketing Agency`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#09090f',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow center */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(90deg, transparent, #6366f1, #a78bfa, transparent)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 24,
            padding: '0 80px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '8px 20px',
              borderRadius: 40,
              border: '1px solid rgba(99,102,241,0.35)',
              background: 'rgba(99,102,241,0.1)',
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#6366f1' }} />
            <span style={{ fontSize: 14, color: 'rgba(165,180,252,1)', letterSpacing: '0.1em', fontWeight: 600 }}>
              SOFTWARE &amp; DIGITAL MARKETING
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #ffffff 30%, #a78bfa 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1,
            }}
          >
            {SITE_NAME}
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.5)',
              maxWidth: 680,
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            {SITE_DESCRIPTION}
          </div>

          {/* Services pills */}
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            {['Web Development', 'Mobile Apps', 'AI Agents', 'SEO & Marketing'].map((s) => (
              <div
                key={s}
                style={{
                  padding: '6px 16px',
                  borderRadius: 20,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.55)',
                  fontWeight: 500,
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366f1' }} />
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em' }}>
            barbarika.com
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
