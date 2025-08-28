import { Container, Alert, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Merci() {
  return (
    <Container style={{ paddingTop: '6rem', maxWidth: 720 }}>
      <Alert color="success" className="mb-4">
        Merci ! Votre message a bien été envoyé. Nous revenons vers vous rapidement.
      </Alert>
      <Button color="primary" tag={Link} to="/">Retour à l’accueil</Button>
    </Container>
  )
}
