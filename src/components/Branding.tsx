import type { SVGProps } from 'react'

const base = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace('//','/')

// === Logo Armata 
export function ArmataLogo(props: { height?: number }) {
  const { height = 100 } = props   
  return (
    <picture>
      <source
        srcSet={base('images/logo/logo_black_sansBordure.svg')}
        type="image/svg+xml"
      />
      <img
        src={base('images/logo/logo-200_black_sansBordure.png')}
        alt="Compagnie ArmatA"
        height={height}               
        style={{ width: 'auto', display: 'block' }}
      />
    </picture>
  )
}

// === Icônes sociales uniformes (carrés)
const ICON_BOX = 28
const ICON_RADIUS = 6

export function IconFacebookSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={ICON_BOX} height={ICON_BOX} aria-hidden focusable="false" {...props}>
      <rect x="2" y="2" width="20" height="20" rx={ICON_RADIUS} fill="#1877F2" />
      <path fill="#fff" d="M13.5 18.5v-6h2.2l.4-2.5h-2.6v-1c0-.8.3-1.3 1.5-1.3h1.1V5.4c-.5-.1-1.3-.1-2.1-.1-2.3 0-3.8 1.2-3.8 3.7v1.9H8.1V12.5h2.1v6h3.3z"/>
    </svg>
  )
}

export function IconInstagramSquare(props: SVGProps<SVGSVGElement>) {
  const id = 'igGradient'
  return (
    <svg viewBox="0 0 24 24" width={ICON_BOX} height={ICON_BOX} aria-hidden focusable="false" {...props}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#f58529" />
          <stop offset="30%"  stopColor="#feda77" />
          <stop offset="50%"  stopColor="#dd2a7b" />
          <stop offset="70%"  stopColor="#8134af" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx={ICON_RADIUS} fill={`url(#${id})`} />
      <path fill="#fff" d="M12 7.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm4.1-7.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
    </svg>
  )
}

export function IconYouTubeSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={ICON_BOX} height={ICON_BOX} aria-hidden focusable="false" {...props}>
      <rect x="2" y="2" width="20" height="20" rx={ICON_RADIUS} fill="#FF0000" />
      <polygon points="10,8 16,12 10,16" fill="#fff" />
    </svg>
  )
}
