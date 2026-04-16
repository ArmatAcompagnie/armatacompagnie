import { useMemo } from 'react'
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { events as allEvents } from '../../data/events'

function getUpcoming(limit = 3) {
  const now = new Date()

  return [...allEvents]
    .filter((eventItem) => new Date(eventItem.start) >= new Date(now.toDateString()))
    .sort((a, b) => +new Date(a.start) - +new Date(b.start))
    .slice(0, limit)
}

function formatDate(dateISO: string) {
  return new Date(dateISO).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function HomeUpcomingEvents() {
  const upcomingEvents = useMemo(() => getUpcoming(3), [])

  return (
    <section className="py-5 bg-body-tertiary">
      <Container>
        <div className="d-flex align-items-baseline justify-content-between mb-3">
          <h2 className="h3 mb-0">Prochaines dates</h2>
          <Button size="sm" color="secondary" tag={Link} to="/evenements" outline>
            Tout voir
          </Button>
        </div>

        {upcomingEvents.length === 0 ? (
          <p className="text-muted mb-0">Le calendrier se prépare — revenez très vite !</p>
        ) : (
          <Row className="g-3">
            {upcomingEvents.map((eventItem) => (
              <Col key={`${eventItem.title}-${eventItem.start}`} md="4">
                <Card>
                  <CardBody>
                    <div className="small text-muted">{formatDate(eventItem.start)}</div>
                    <div className="fw-semibold">{eventItem.title}</div>
                    {eventItem.location && (
                      <div className="text-muted">{eventItem.location}</div>
                    )}
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  )
}