import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/content'

export const runtime = 'edge'
export const alt = `${siteConfig.name} twitter sharing image`
export const size = {
  width: 1200,
  height: 675,
}
export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: 'radial-gradient(circle at top left, #6d4820 0%, #23160e 45%, #100d0a 100%)',
          color: '#f7eedf',
          display: 'flex',
          height: '100%',
          justifyContent: 'space-between',
          padding: '72px',
          width: '100%',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 26,
            border: '1px solid rgba(216, 176, 122, 0.28)',
            borderRadius: 28,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 760, gap: 22 }}>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Arial, sans-serif',
              fontSize: 22,
              letterSpacing: 5,
              textTransform: 'uppercase',
              color: '#d8b07a',
            }}
          >
            The Whisky Partners
          </div>
          <div style={{ display: 'flex', fontSize: 78, lineHeight: 1.04, fontWeight: 700 }}>
            Learning and enjoying whisky.
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Arial, sans-serif',
              fontSize: 32,
              lineHeight: 1.35,
              color: 'rgba(247, 238, 223, 0.82)',
            }}
          >
            {siteConfig.seoDescription}
          </div>
        </div>
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: 999,
            border: '8px solid rgba(216, 176, 122, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
          }}
        >
          <div
            style={{
              width: 104,
              height: 116,
              background: 'linear-gradient(180deg, #f2c27b 0%, #b97825 100%)',
              clipPath: 'polygon(18% 0%, 82% 0%, 70% 100%, 30% 100%)',
            }}
          />
        </div>
      </div>
    ),
    size
  )
}
