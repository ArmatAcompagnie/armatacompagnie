type Props = { srcBase: string; alt: string; w?: number; h?: number }
export default function SmartImage({ srcBase, alt, w = 1200, h = 800 }: Props) {
  // srcBase = import.meta.env.BASE_URL + 'images/2025/event/img-001'
  const src = `${srcBase}-1200.webp`
  const srcSet = [
    `${srcBase}-400.webp 400w`,
    `${srcBase}-800.webp 800w`,
    `${srcBase}-1200.webp 1200w`,
    `${srcBase}-1600.webp 1600w`,
  ].join(', ')
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes="(max-width: 768px) 100vw, 800px"
      alt={alt}
      loading="lazy"
      width={w}
      height={h}
      className="img-fluid rounded-3"
    />
  )
}
