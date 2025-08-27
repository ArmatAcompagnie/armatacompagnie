import { Container, Row, Col, Card, CardBody } from 'reactstrap'

const team = [
  { name: 'Alex', role: 'Chorégraphe & Coach', bio: '10 ans de scène et cinéma.' },
  { name: 'Sam', role: 'Coach Sécurité', bio: 'Spécialiste chutes et câblage.' },
]

export default function Equipe() {
  return (
    <Container style={{ paddingTop: '6rem' }}>
      <h2 className="mb-4">L’équipe</h2>
      <Row className="g-3">
        {team.map((m, i) => (
          <Col md="6" key={i}>
            <Card className="h-100">
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
