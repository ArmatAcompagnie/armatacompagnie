import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default function Contact() {
  return (
    <Container style={{ paddingTop: '6rem' }}>
      <h2 className="mb-3">Contact</h2>
      <p className="text-muted">Pour toute questions, écris-nous :</p>
      {/* Remplace l'action par ton endpoint Formspree/Getform */}
      <Form action="https://formspree.io/f/xxxxxxxx" method="POST" className="mb-4">
        <FormGroup>
          <Label htmlFor="name">Nom</Label>
          <Input id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Input id="message" name="message" type="textarea" rows={4} required />
        </FormGroup>
        <Button color="primary" type="submit">Envoyer</Button>
      </Form>
      <div>
        <strong>Email :</strong> compagnie.armata@gmail.com<br/>
        <strong>Instagram :</strong> @armata_cie
      </div>
    </Container>
  )
}
