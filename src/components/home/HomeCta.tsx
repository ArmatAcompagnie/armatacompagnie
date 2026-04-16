import { Container, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function HomeCta() {
  return (
    <section className="py-5">
      <Container className="text-center">
        <h2 className="h3 mb-2">Vous organisez un événement&nbsp;?</h2>
        <p className="text-muted mb-3">
          Parlons-en : nous construisons des prestations sur-mesure.
        </p>
        <Button color="primary" tag={Link} to="/contact">
          Nous contacter
        </Button>
      </Container>
    </section>
  )
}