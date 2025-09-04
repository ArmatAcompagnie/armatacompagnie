import { useState } from 'react'
import { Card, CardBody, Button } from 'reactstrap'

type Props = {
  /** Adresse ou requête à passer à Google Maps */
  query: string
  /** Libellé affiché à l'écran (par défaut = query) */
  label?: string
  /** Hauteur de l'iframe (px) */
  height?: number
}

export default function MapPreview({ query, label, height = 360 }: Props) {
  const [embed, setEmbed] = useState(false)
  const q = encodeURIComponent(query)

  // Lien pour ouvrir Google Maps (nouvel onglet)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${q}`

  // URL d'embed (chargée uniquement après consentement)
  const iframeSrc = `https://www.google.com/maps?hl=fr&q=${q}&output=embed`

  return (
    <Card className="border-0 shadow-sm">
      <CardBody>
        {!embed ? (
          <>
            <div className="mb-2">
              <strong>{label || query}</strong>
            </div>
            <p className="text-muted small mb-3">
              Cette carte Google Maps se charge uniquement si vous cliquez.
              Google peut déposer des traceurs et traiter votre adresse IP.
            </p>
            <div className="d-flex gap-2">
              <Button
                color="primary"
                onClick={() => setEmbed(true)}
                aria-label="Afficher la carte Google Maps ici"
              >
                Afficher la carte ici
              </Button>
              <a
                className="btn btn-outline-secondary"
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir dans Google Maps"
              >
                Ouvrir dans Google Maps
              </a>
            </div>
          </>
        ) : (
          <div className="ratio ratio-16x9" style={{ height }}>
            <iframe
              title={`Carte - ${label || query}`}
              src={iframeSrc}
              loading="lazy"
              style={{ border: 0, width: '100%', height: '100%' }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}
      </CardBody>
    </Card>
  )
}
