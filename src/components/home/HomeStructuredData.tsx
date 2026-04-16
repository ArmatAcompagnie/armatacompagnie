import { site } from '../../site.config'

export default function HomeStructuredData() {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PerformingGroup',
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    logo: new URL(site.logo.replace(/^\//, ''), site.url).toString(),
    sameAs: [site.facebook, site.instagram, site.youtube].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '84 rue de la Vallée de l’Eure, App 2 Bâtiment B',
      postalCode: '28600',
      addressLocality: 'Luisant',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    legalName: site.name,
    identifier: [
      {
        '@type': 'PropertyValue',
        propertyID: 'RNA',
        value: site.rna,
      },
      {
        '@type': 'PropertyValue',
        propertyID: 'SIREN',
        value: site.siren,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  )
}