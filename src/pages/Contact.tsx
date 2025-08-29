import { useRef, useState } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import { Container, Form, FormGroup, Label, Input, Button, Alert, Spinner } from 'reactstrap'

const ACCESS_KEY = '911f2f23-0874-413e-b303-a74dbb1404b0'; // IMPORTANT: ta access_key Web3Forms (format UUID v4)
const isUUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/; // IMPORTANT: validation

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [captchaToken, setCaptchaToken] = useState('')
  const captchaRef = useRef<HCaptcha>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isUUID.test(ACCESS_KEY)) { // IMPORTANT: bloque si la clé est mal formée
      alert("Access key invalide. Vérifie qu'elle suit le format UUID (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).")
      return
    }
    if (!captchaToken) {
      alert('Merci de valider le captcha.')
      return
    }

    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

    data.append('access_key', ACCESS_KEY) // IMPORTANT: on l’ajoute une seule fois ici
    data.append('subject', 'Nouveau message depuis le site Armata Compagnie')
    data.append('h-captcha-response', captchaToken)

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setSucceeded(true)
        form.reset()
        setCaptchaToken('')
        captchaRef.current?.resetCaptcha()
      } else {
        alert(json.message || 'Échec de l’envoi, merci de réessayer.')
      }
    } catch {
      alert("Erreur réseau. Réessaie dans un instant.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Container style={{ paddingTop: '6rem', maxWidth: 720 }}>
      <h2 className="mb-3">Contact & Devis</h2>

      {succeeded ? (
        <Alert color="success">Merci ! Votre message a bien été envoyé.</Alert>
      ) : (
        <Form onSubmit={onSubmit}>
          <FormGroup><Label htmlFor="name">Nom</Label><Input id="name" name="name" required /></FormGroup>
          <FormGroup><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required /></FormGroup>
          <FormGroup><Label htmlFor="message">Votre demande</Label><Input id="message" name="message" type="textarea" rows={5} required /></FormGroup>

          <div className="mb-3">
            <HCaptcha
              ref={captchaRef}
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              onVerify={(token) => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken('')}
            />
          </div>

          <FormGroup check className="mb-3">
            <Input type="checkbox" id="rgpd" required />
            <Label check htmlFor="rgpd">J’accepte que mes informations soient utilisées pour être recontacté·e.</Label>
          </FormGroup>

          <Button color="primary" type="submit" disabled={submitting || !captchaToken}>
            {submitting ? (<><Spinner size="sm" /> Envoi…</>) : 'Envoyer'}
          </Button>
        </Form>
      )}
    </Container>
  )
}
