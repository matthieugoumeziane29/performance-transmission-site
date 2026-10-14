import { ImageResponse } from 'next/og'

export const alt = 'Performance Transmission, fiduciaire à Tolochenaz'
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
          justifyContent: 'space-between',
          background: '#0f0080',
          color: '#fff',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 34, opacity: 0.85 }}>Performance Transmission Sàrl</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Fiduciaire à Tolochenaz</div>
          <div style={{ fontSize: 36, marginTop: 24, opacity: 0.9 }}>
            Comptabilité, TVA, salaires et impôts pour indépendants, Sàrl et SA
          </div>
        </div>
        <div style={{ fontSize: 28, opacity: 0.75 }}>performancetransmission.ch</div>
      </div>
    ),
    size,
  )
}
