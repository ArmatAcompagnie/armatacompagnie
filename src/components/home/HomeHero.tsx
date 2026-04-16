import { Container, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const base = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace('//', '/')

export default function HomeHero() {
  return (
    <section className="py-5 hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <img
        src={base('images/gallery/large/La_Faye_1600/Faye_DSC_0080_1600.jpg')}
        alt="Compagnie Armata – combats et cascades chorégraphiés"
        fetchPriority="high"
        decoding="async"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.6))',
          zIndex: 1,
        }}
      />

      <Container style={{ color: '#fff', position: 'relative', zIndex: 2 }}>
        <h1 className="display-5 fw-bold mb-2">Combats & cascades chorégraphiés</h1>
        <p className="lead mb-3" style={{ maxWidth: 720 }}>
          Spectacles & camps historiques, démonstrations de combat chorégraphiés — de
          l’Antiquité au fantastique.
        </p>
        <Button color="primary" tag={Link} to="/contact">
          Demandez-nous
        </Button>
      </Container>
    </section>
  )
}