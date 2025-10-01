import { useMemo, useState, useEffect } from 'react'
import { Container, Row, Col, Button, Badge, Modal, ModalBody } from 'reactstrap'
import { videos as allVideos, VIDEO_TAGS, type VideoItem } from '../data/videos'

const base = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace('//','/')

export default function VideoSection() {
  const [tag, setTag] = useState<string>('Tous')
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)

  const vids = useMemo<VideoItem[]>(() => {
    if (tag === 'Tous') return allVideos
    return allVideos.filter(v => v.tags.includes(tag))
  }, [tag])

  const openAt = (i: number) => { setIdx(i); setOpen(true) }
  const close = () => setOpen(false)
  const prev = () => setIdx(i => (i - 1 + vids.length) % vids.length)
  const next = () => setIdx(i => (i + 1) % vids.length)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, vids.length])

  return (
    <section className="py-5">
      <Container>
        <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
          <h2 className="h3 mb-0">Nos Vidéos</h2>
          <div className="vr d-none d-sm-inline mx-2" />
          <div className="d-flex flex-wrap gap-2">
            <Button size="sm" color={tag === 'Tous' ? 'primary' : 'secondary'} outline={tag !== 'Tous'} onClick={() => setTag('Tous')}>
              Tous
            </Button>
            {VIDEO_TAGS.map(t => (
              <Button key={t} size="sm" color={tag === t ? 'primary' : 'secondary'} outline={tag !== t} onClick={() => setTag(t)}>
                {t}
              </Button>
            ))}
          </div>
        </div>

        {/* Grille */}
        <Row className="g-3">
          {vids.map((v, i) => {
            const poster = v.poster ? base(v.poster) : `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`
            return (
              <Col key={v.id} xs="12" sm="6" md="4" lg="3">
                <figure
                  className="position-relative m-0 border rounded overflow-hidden"
                  role="button"
                  onClick={() => openAt(i)}
                  style={{ aspectRatio: '16/9', cursor: 'zoom-in', background: '#000' }}
                >
                  <img
                    src={poster}
                    alt={v.title}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: .92 }}
                  />
                  {/* Play badge + tag */}
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <span className="btn btn-light fw-semibold rounded-pill px-3 py-2">▶︎ Lire</span>
                  </div>
                  {v.tags[0] && (
                    <Badge color="dark" className="position-absolute top-0 end-0 m-1">{v.tags[0]}</Badge>
                  )}
                  <figcaption className="position-absolute bottom-0 start-0 end-0 small text-white-50 bg-black bg-opacity-25 px-2 py-1">
                    {v.title}
                  </figcaption>
                </figure>
              </Col>
            )
          })}
        </Row>

        <p className="text-muted small mt-3">{vids.length} vidéo(s){tag !== 'Tous' ? ` — ${tag}` : ''}</p>
      </Container>

      {/* Lightbox vidéo */}
<Modal isOpen={open} toggle={close} size="xl" centered>
  <ModalBody className="p-2" style={{ background: '#000' }}>
    {open && vids[idx] && (
      <div className="position-relative">

        {/* Ligne principale : flèches (≥ sm) + vidéo au centre */}
        <div className="d-none d-sm-flex align-items-center justify-content-center">
          <button
            type="button"
            className="btn btn-light me-3"
            onClick={prev}
            aria-label="Précédent"
          >
            ‹
          </button>

          <div className="ratio ratio-16x9" style={{ width: 'min(100%, 1100px)' }}>
            <iframe
              title={vids[idx].title}
              src={`https://www.youtube-nocookie.com/embed/${vids[idx].id}?autoplay=1&rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              // @ts-expect-error (attributs vendor utiles iOS)
              webkitAllowFullScreen
              
              mozallowfullscreen="true"
              playsInline
              loading="lazy"
              style={{ border: 0, width: '100%', height: '100%' }}
            />
          </div>

          <button
            type="button"
            className="btn btn-light ms-3"
            onClick={next}
            aria-label="Suivant"
          >
            ›
          </button>
        </div>

        {/* Mobile : vidéo seule, puis grosses actions en dessous */}
        <div className="d-sm-none">
          <div className="ratio ratio-16x9">
            <iframe
              title={vids[idx].title}
              src={`https://www.youtube-nocookie.com/embed/${vids[idx].id}?autoplay=1&rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              // @ts-expect-error
              webkitAllowFullScreen
              
              mozallowfullscreen="true"
              playsInline
              loading="lazy"
              style={{ border: 0, width: '100%', height: '100%' }}
            />
          </div>

          <div className="d-flex gap-2 mt-2">
            <button type="button" className="btn btn-light flex-fill" onClick={prev} aria-label="Précédent">‹ Précédent</button>
            <button type="button" className="btn btn-light flex-fill" onClick={next} aria-label="Suivant">Suivant ›</button>
          </div>
        </div>

        {/* Caption (sous la vidéo) */}
        {(vids[idx].caption || vids[idx].tags?.length) && (
          <div className="p-2 text-white-50 small">
            {vids[idx].caption && <div>{vids[idx].caption}</div>}
            {vids[idx].tags?.length > 0 && (
              <div className="mt-1">
                {vids[idx].tags.map(t => (
                  <Badge key={t} color="secondary" className="me-1">{t}</Badge>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Fermer (reste en overlay, coin haut droit) */}
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

    </section>
  )
}
