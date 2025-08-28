import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { team } from '../data/team'
const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`

export default function Equipe() {
  return (
    <Container style={{ paddingTop: '6rem' }}>
      <h2 className="mb-4">L’équipe</h2>
      <Row className="g-3">
        {team.map((m, i) => (
          <Col md="6" lg="4" key={i}>
            <Card className="h-100">
              {m.photo && <img src={asset(m.photo)} alt={m.name} className="card-img-top" loading="lazy" />}
              <CardBody>
                <h5 className="mb-1">{m.name}</h5>
                <div className="text-muted mb-2">{m.role}</div>
                <p className="mb-0">{m.bio}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
