import { site } from '../site.config'

type Props = {
  title?: string
  description?: string
  path?: string       // ex: '', 'evenements', 'galerie'
  image?: string      // ex: 'images/og.jpg'
  noIndex?: boolean   // ex: true pour une page à ne pas indexer
}

export default function Meta({
  title,
  description = site.description,
  path = '',
  image = site.ogImage,
  noIndex = false,
}: Props) {
  const canonical = new URL(path.replace(/^\//, ''), site.url).toString()
  const imgUrl = new URL(image.replace(/^\//, ''), site.url).toString()
  const fullTitle = title ? `${title} • ${site.name}` : site.name

  const robotsContent = noIndex ? 'noindex,nofollow' : 'index,follow'

  return (
    <>
      <title>{fullTitle}</title>
      <link rel="canonical" href={canonical} />

      {/* Search / SEO de base */}
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />

      {/* Open Graph (Facebook / LinkedIn / etc.) */}
      <meta property="og:site_name" content={site.name} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
    </>
  )
}
