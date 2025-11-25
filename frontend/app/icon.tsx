import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#ff0000ff',
          color: '#000000ff',
          fontSize: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'semibold',
          borderRadius: '50%',
        }}
      >
        SF
      </div>
    ),
    size
  )
}
