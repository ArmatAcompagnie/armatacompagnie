import { useState } from 'react'
import { Container, Row, Col, Card, CardBody, Modal, ModalBody } from 'reactstrap'
import SmartImage from '../components/SmartImage'
const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`

const images = [
  { base: asset('images/img-001'), alt: 'Chute coordonnée' },
  { base: asset('images/img-002'), alt: 'Combat chorégraphié' },
  { base: asset('images/img-003'), alt: 'Cascade haute' },
]

export default function Galerie() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<typeof images[0] | null>(null)
  return (
    <Container style={{ paddingTop: '6rem' }}>
      <h2 className="mb-3">Galerie</h2>
      <Row xs="1" sm="2" md="3" className="g-3">
        {images.map((img, i) => (
          <Col key={i}>
            <Card className="h-100" role="button" onClick={() => { setCurrent(img); setOpen(true) }}>
              <SmartImage srcBase={img.base} alt={img.alt} />
              <CardBody>{img.alt}</CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal isOpen={open} toggle={() => setOpen(!open)} size="xl" centered>
        <ModalBody className="p-0">
          {current && <img src={`${current.base}-1600.webp`} alt={current.alt} className="img-fluid w-100" />}
        </ModalBody>
      </Modal>
    </Container>
  )
}
