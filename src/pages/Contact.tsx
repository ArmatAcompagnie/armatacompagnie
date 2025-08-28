import { useState } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { Container, Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap'

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [captchaToken, setCaptchaToken] = useState('')

  return (
    <Container style={{ paddingTop: '6rem', maxWidth: 720 }}>
      <h2 className="mb-3">Contact & Devis</h2>

      <Form
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={() => setSubmitting(true)}
      >
        <input type="hidden" name="access_key" value="911f2f23-0874-413e-b303-a74dbb1404b0" />
        <input type="hidden" name="subject" value="Nouveau message depuis le site Armata Compagnie" />
        <input type="hidden" name="redirect" value="https://armataccompagnie.github.io/armatacompagnie/merci.html" />

        <FormGroup>
          <Label htmlFor="name">Nom</Label>
          <Input id="name" name="name" required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Votre demande</Label>
          <Input id="message" name="message" type="textarea" rows={5} required />
        </FormGroup>

        <div className="mb-3">
          <HCaptcha
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            reCaptchaCompat={false}
            onVerify={(token) => setCaptchaToken(token)}
            onExpire={() => setCaptchaToken('')}
          />
        </div>

        <FormGroup check className="mb-3">
          <Input type="checkbox" id="rgpd" required />
          <Label check htmlFor="rgpd">J’accepte que mes informations soient utilisées pour être recontacté·e par l’association.</Label>
        </FormGroup>

        <Button color="primary" type="submit" disabled={submitting || !captchaToken}>
          {submitting ? <><Spinner size="sm" /> Envoi…</> : 'Envoyer'}
        </Button>
      </Form>
    </Container>
  )
}
