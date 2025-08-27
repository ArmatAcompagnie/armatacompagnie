import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import SmartImage from '../components/SmartImage'

const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`

const images = [
  { base: asset('images/2025/stage-ete/img-001'), alt: 'Chute coordonnée' },
  { base: asset('images/2025/stage-ete/img-002'), alt: 'Combat chorégraphié' },
  { base: asset('images/2025/stage-ete/img-003'), alt: 'Cascade haute' },
]

export default function Galerie() {
  return (
    <Container style={{ paddingTop: '6rem' }}>
      <h2 className="mb-3">Galerie</h2>
      <Row xs="1" sm="2" md="3" className="g-3">
        {images.map((img, i) => (
          <Col key={i}>
            <Card className="h-100">
              <SmartImage srcBase={img.base} alt={img.alt} />
              <CardBody>{img.alt}</CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
