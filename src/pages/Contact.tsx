import { useState, useEffect } from 'react'
import { Container, Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap'

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)

  // Empêche l'envoi si le captcha n'est pas coché
  useEffect(() => {
    const form = document.getElementById('contact-form') as HTMLFormElement | null
    if (!form) return
    const handler = (e: Event) => {
      const ta = form.querySelector('textarea[name="h-captcha-response"]') as HTMLTextAreaElement | null
      if (!ta || !ta.value) {
        e.preventDefault()
        alert('Merci de cocher le captcha.')
      }
    }
    form.addEventListener('submit', handler)
    return () => form.removeEventListener('submit', handler)
  }, [])

  return (
    <Container style={{ paddingTop: '6rem', maxWidth: 720 }}>
      <h2 className="mb-3">Contact & Devis</h2>

      <Form
        id="contact-form"
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={() => setSubmitting(true)}
      >
        {/* requis par Web3Forms */}
        <input type="hidden" name="access_key" value="911f2f23-0874-413e-b303-a74dbb1404b0" />
        <input type="hidden" name="subject" value="Nouveau message depuis le site Armata Compagnie" />
        {/* IMPORTANT: HashRouter => redirige vers #/merci */}
        <input type="hidden" name="redirect" value="https://armataccompagnie.github.io/armatacompagnie/#/merci" />

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

        {/* hCaptcha */}
        <div className="mb-3">
          <div className="h-captcha" data-captcha="true"></div>
        </div>

        {/* RGPD */}
        <FormGroup check className="mb-3">
          <Input type="checkbox" id="rgpd" required />
          <Label check htmlFor="rgpd">
            J’accepte que mes informations soient utilisées pour être recontacté·e par l’association.
          </Label>
        </FormGroup>

        <Button color="primary" type="submit" disabled={submitting}>
          {submitting ? <><Spinner size="sm" /> Envoi…</> : 'Envoyer'}
        </Button>
      </Form>
    </Container>
  )
}
