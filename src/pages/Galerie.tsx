import { useMemo, useState, useEffect} from 'react'
import { Container, Row, Col, Button, Badge, Modal, ModalBody } from 'reactstrap'
import { gallery as allPhotos, TAGS } from '../data/gallery'
import VideoSection from '../components/VideoSection'
import '../styles/gallery.css'


const base = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace('//','/')

export default function Galerie() {
  const [tag, setTag] = useState<string>('Tous')
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  const photos = useMemo(() => {
    if (tag === 'Tous') return allPhotos
    return allPhotos.filter(p => p.tags.includes(tag))
  }, [tag])

  const openAt = (i: number) => { setIdx(i); setOpen(true) }
  const close = () => setOpen(false)
  const prev = () => setIdx(i => (i - 1 + photos.length) % photos.length)
  const next = () => setIdx(i => (i + 1) % photos.length)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, photos.length])

  return (
    <>
      <section className="py-4">
        <Container>
          <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
            <h1 className="h3 mb-0">Nos Photos</h1>
            <div className="vr d-none d-sm-inline mx-2" />
            <div className="d-flex flex-wrap gap-2">
              <Button size="sm" color={tag === 'Tous' ? 'primary' : 'secondary'} outline={tag !== 'Tous'} onClick={() => setTag('Tous')}>
                Tous
              </Button>
              {TAGS.map(t => (
                <Button key={t} size="sm" color={tag === t ? 'primary' : 'secondary'} outline={tag !== t} onClick={() => setTag(t)}>
                  {t}
                </Button>
              ))}
            </div>
          </div>

          {/* Grille responsive */}
          <Row className="g-3">
            {photos.map((p, i) => (
              <Col key={p.id} xs="6" md="4" lg="3">
                <figure
                  className="position-relative m-0 border rounded overflow-hidden"
                  role="button"
                  onClick={() => openAt(i)}
                  style={{ aspectRatio: '4 / 3', cursor: 'zoom-in' }}
                >
                  <img
                    src={base(p.src)}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {p.tags[0] && (
                    <Badge color="dark" className="position-absolute top-0 end-0 m-1">
                      {p.tags[0]}
                    </Badge>
                  )}
                </figure>
              </Col>
            ))}
          </Row>

          {/* Compteur */}
          <p className="text-muted small mt-3">{photos.length} photo(s){tag !== 'Tous' ? ` — ${tag}` : ''}</p>
        </Container>
      </section>
      <VideoSection />

      {/* Lightbox (Modal) */}
      <Modal isOpen={open} toggle={close} size="xl" centered>
        <ModalBody className="p-0" style={{ background: '#000' }}>
          {open && photos[idx] && (
            <div className="position-relative">
              <img
                src={base(photos[idx].srcLarge || photos[idx].src)}
                alt={photos[idx].alt}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />

              {/* Caption + tags */}
              {(photos[idx].caption || photos[idx].tags?.length) && (
                <div className="p-2 text-white-50 small">
                  {photos[idx].caption && <div>{photos[idx].caption}</div>}
                  {photos[idx].tags?.length > 0 && (
                    <div className="mt-1">
                      {photos[idx].tags.map(t => (
                        <Badge key={t} color="secondary" className="me-1">{t}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Controls */}
              <button
                type="button"
                className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-2"
                onClick={prev}
                aria-label="Précédent"
              >
                ‹
              </button>
              <button
                type="button"
                className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2"
                onClick={next}
                aria-label="Suivant"
              >
                ›
              </button>
              <button
                type="button"
                className="btn btn-outline-light position-absolute top-0 end-0 m-2"
                onClick={close}
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>
          )}
        </ModalBody>
      </Modal>
    </>
  )
}
