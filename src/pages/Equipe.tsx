import { useMemo } from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { team } from '../data/team'
import Meta from '../components/Meta'
import '../styles/team.css' // (cf. plus bas)

const asset = (p?: string) =>
  p ? `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`.replace('//', '/') : ''

export default function Equipe() {
  const members = useMemo(
    () => [...team].sort((a, b) => (a.order ?? 999) - (b.order ?? 999)),
    []
  )

  const fallback = asset('images/team/placeholder.jpg') // mets un fichier dans public/images/team/

  return (
    <Container style={{ paddingTop: '6rem' }}>
      <Meta
        title="Équipe"
        description="Présentation de notre équipe."
        path="/equipe"
      />

      <h1 className="mb-4 text-center text-uppercase ">Notre équipe</h1>

      <Row className="g-3 justify-content-center">
        {members.map((m, i) => {
          const src = m.photo ? asset(m.photo) : fallback
          return (
            <Col key={i} xs="12" md="6" lg="4">
              <Card className="h-100 shadow-sm">
                {/* Photo (3:4) */}
                <img
                  className="card-img-top team-photo"
                  src={src}
                  alt={m.photo ? `Portrait de ${m.name}` : `Portrait indisponible — ${m.name}`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    if (img.src !== fallback) img.src = fallback
                  }}
                />
                <CardBody>
                  <h2 className="mb-1">{m.name}</h2>
                  {m.role && <div className="text-muted mb-2">{m.role}</div>}
                  {m.bio && <p className="mb-0">{m.bio}</p>}
                </CardBody>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
