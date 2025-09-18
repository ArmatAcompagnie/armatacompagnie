import { useState } from 'react'
import { Container, Button } from 'reactstrap'

type Props = {
  /** ID YouTube (ex: dQw4w9WgXcQ) */
  videoId: string
  /** Titre affiché au-dessus de la vidéo */
  title?: string
  /** Poster local (ex: "images/hero/hero-1920x1080.jpg"). Si non fourni, on utilisera la miniature YouTube (moins RGPD-friendly). */
  poster?: string
  /** Texte sous-titre (optionnel) */
  subtitle?: string

  maxWidth?: number      // largeur max en px (par défaut 960)
  maxVh?: number         // hauteur max relative à la fenêtre (par défaut 60 = 60vh)
}

const base = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace('//','/')

export default function DemoPromo({ videoId, title = 'Démo / Bande promo', poster, subtitle, maxWidth = 960, maxVh = 60 }: Props) {
  const [play, setPlay] = useState(false)
  const posterSrc = poster ? base(poster) : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  const ytWatch = `https://www.youtube.com/watch?v=${videoId}`
  const iframeSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`

  return (
    <section className="py-5">
      <Container>
        <h2 className="h3 mb-2">{title}</h2>
        {subtitle && <p className="text-muted mb-4">{subtitle}</p>}

        <div className="card border-0 shadow-sm">
          {/* wrapper qui limite la taille finale */}
          <div
            className="mx-auto"
            style={{
              // la largeur ne dépassera pas 960px, ni ce qui correspond à maxVh à 16:9
              width: `min(100%, ${maxWidth}px, calc(${maxVh}vh * (16/9)))`,
            }}
          >
            {/* la boîte vidéo garde 16:9 et remplit la largeur disponible */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
              {!play ? (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0,.35)), url('${posterSrc}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-light"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      padding: '0.8rem 1.2rem',
                      borderRadius: '999px',
                      fontWeight: 600,
                    }}
                    onClick={() => setPlay(true)}
                    aria-label="Lire la vidéo"
                  >
                    ▶︎ Lire la vidéo
                  </button>
                </div>
              ) : (
                <iframe
                  title="Vidéo de démonstration YouTube"
                  src={iframeSrc}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  style={{ position: 'absolute', inset: 0, border: 0, width: '100%', height: '100%' }}
                />
              )}
            </div>
          </div>

          <div className="card-body d-flex gap-2 justify-content-end">
            {!play && (
              <Button color="primary" onClick={() => setPlay(true)}>
                Lire ici
              </Button>
            )}
            <a className="btn btn-outline-secondary" href={ytWatch} target="_blank" rel="noopener noreferrer">
              Ouvrir sur YouTube
            </a>
          </div>

          <p className="text-muted small px-3 pb-3 mb-0">
            La vidéo YouTube ne se charge qu’après votre clic.
          </p>
        </div>
      </Container>
    </section>
  )
}
