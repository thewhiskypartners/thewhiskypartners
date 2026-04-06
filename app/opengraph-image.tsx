import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/content'

export const runtime = 'edge'
export const alt = `${siteConfig.name} social sharing image`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'stretch',
          background: 'linear-gradient(135deg, #120f0c 0%, #25180f 42%, #5f3d17 100%)',
          color: '#f5ead7',
          display: 'flex',
          height: '100%',
          width: '100%',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 28,
            border: '1px solid rgba(216, 176, 122, 0.35)',
            borderRadius: 28,
          }}
        />
        <div
          style={{
            display: 'flex',
            flex: 1,
            padding: '72px 76px',
            justifyContent: 'space-between',
            gap: 48,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              maxWidth: 760,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 24,
                  letterSpacing: 6,
                  textTransform: 'uppercase',
                  color: '#d8b07a',
                }}
              >
                Whisky Culture • Events • Bars
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 84,
                  lineHeight: 1.02,
                  fontWeight: 700,
                }}
              >
                {siteConfig.seoTitle}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: 34,
                  lineHeight: 1.35,
                  color: 'rgba(245, 234, 215, 0.82)',
                  maxWidth: 720,
                }}
              >
                {siteConfig.seoDescription}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                fontFamily: 'Arial, sans-serif',
                fontSize: 28,
                color: '#d8b07a',
              }}
            >
              thewhiskypartners.com
            </div>
          </div>
          <div
            style={{
              alignItems: 'center',
              border: '2px solid rgba(216, 176, 122, 0.55)',
              borderRadius: 36,
              display: 'flex',
              height: 400,
              justifyContent: 'center',
              marginTop: 40,
              minWidth: 280,
              position: 'relative',
              width: 280,
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 18,
                borderRadius: 28,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(0,0,0,0.08))',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 168,
                  borderRadius: 28,
                  border: '8px solid #d8b07a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 28,
                    width: 52,
                    height: 10,
                    borderRadius: 999,
                    background: '#f5ead7',
                  }}
                />
                <div
                  style={{
                    width: 84,
                    height: 92,
                    background: 'linear-gradient(180deg, #f2c27b 0%, #b97825 100%)',
                    clipPath: 'polygon(18% 0%, 82% 0%, 70% 100%, 30% 100%)',
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  marginTop: 24,
                  fontFamily: 'Arial, sans-serif',
                  fontSize: 22,
                  letterSpacing: 4,
                  textTransform: 'uppercase',
                  color: '#d8b07a',
                }}
              >
                Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  )
}
