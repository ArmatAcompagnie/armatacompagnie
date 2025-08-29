import { site } from '../site.config'

type Props = {
  title?: string
  description?: string
  path?: string       // ex: '', 'evenements', 'galerie'
  image?: string      // ex: 'images/og.jpg'
}

export default function Meta({
  title,
  description = site.description,
  path = '',
  image = site.ogImage,
}: Props) {
  const canonical = new URL(path.replace(/^\//, ''), site.url).toString()
  const imgUrl = new URL(image.replace(/^\//, ''), site.url).toString()
  const fullTitle = title ? `${title} • ${site.name}` : site.name

  return (
    <>
      <title>{fullTitle}</title>
      <link rel="canonical" href={canonical} />

      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:site_name" content={site.name} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imgUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
    </>
  )
}
