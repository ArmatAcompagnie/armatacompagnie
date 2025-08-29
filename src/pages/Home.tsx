import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import Meta from '../components/Meta'
import { site } from '../site.config'

export default function Home() {
  return (
    <Container style={{ paddingTop: '5rem' }}>
      <Meta title="Accueil" description={site.description} path="" />
      <Row className="align-items-center gy-4">
        <Col md="6">
          <h1 className="display-5 fw-bold">Combat & Cascade chorégraphiés</h1>
          <p className="lead">
            Spectacles et vie de camp historique avec du combat et de la cascade chorégraphié.
          </p>
          <div className="d-flex gap-2">
            <Button color="primary" tag={Link} to="/evenements">Evènements à venir</Button>
            <Button color="secondary" outline tag={Link} to="/galerie">Voir la galerie</Button>
          </div>
        </Col>
        <Col md="6">
          <img
            src={`${import.meta.env.BASE_URL}images/hero.webp`}
            alt="Démonstration de combat chorégraphié"
            className="img-fluid rounded-4 shadow-sm"
            loading="lazy"
          />
        </Col>
      </Row>
    </Container>
  )
}
