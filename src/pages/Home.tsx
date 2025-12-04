// src/pages/Home.tsx
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { events as allEvents } from '../data/events'
import DemoPromo from '../components/DemoPromo'
import '../styles/home.css'
import Meta from '../components/Meta'


// petit helper pour que les images marchent en local ET sur GitHub Pages
const base = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace('//','/')

// util: prochaine(s) date(s)
function getUpcoming(limit = 3) {
  const now = new Date()
  return [...allEvents]
    .filter(e => new Date(e.start) >= new Date(now.toDateString()))
    .sort((a, b) => +new Date(a.start) - +new Date(b.start))
    .slice(0, limit)
}

function fmt(dateISO: string) {
  return new Date(dateISO).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Home() {
  const next = getUpcoming(3)

  return (
    <>
      <Meta
        title="Spectacles historiques, fantastiques & combats chorégraphiés"
        description="La Compagnie Armata crée des spectacles historiques, fantastiques et de science-fiction :
         combats chorégraphiés, cascades, animations et reconstitutions partout en France."
        path="/"
      />

      {/* HERO simple (image de fond + overlay) */}
      <section
        className="py-5 hero"
        style={{
          position: 'relative',
          //minHeight: '70vh',                 // ajuste si tu veux : 50–65vh marche bien
          display: 'grid',
          alignItems: 'center',
          // 1er calque = gradient (cover), 2e calque = image (contain)
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.6)), url('${base('images/IMG-test1600.jpg')}')`,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundColor: '#000',           // couleur des bandes (letterboxing)
        }}
      >
        <Container style={{ color: '#fff' }}>
          <h1 className="display-5 fw-bold mb-2">Combats & cascades chorégraphiés</h1>
          <p className="lead mb-3" style={{ maxWidth: 720 }}>
            Spectacles & camps historiques, démonstrations de combat chorégraphiés — de l’Antiquité au
            fantastique.
          </p>
          <Button color="primary" tag={Link} to="/contact">Demandez-nous</Button>
        </Container>
      </section>

      <section
        className="py-5 hero"
        style={{
          position: 'relative',
          //minHeight: '80vh',
          display: 'grid',
          alignItems: 'start',
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.55)), url('${base('images/img-001.jpg')}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Container style={{ color: '#fff' }}>
          <h2 className="display-5 fw-bold mb-2">La Compagnie Armata...</h2>
          <p className="lead mb-3" style={{ maxWidth: 720 }}>
            ...se spécialise dans la création de combats chorégraphiés, permettant de plonger les petits et grands dans différentes époques.
            <br /> <br />
            Les univers historiques, fantastiques, littéraires, théâtral et tant d’autres sont nos sources d’inspiration de nos créations, que nous mettons en scène tout en magnifiant l’arme blanche.
            <br /><br />
            Des Château aux fêtes de villages, des scènes de théâtres aux guinguettes, nos terrains de jeux sont divers et variés……
          </p>
          
        </Container>
      </section>
      

      {/* UNIVERS / PRESTATIONS (exemples) */}
      <section className="py-5">
        <Container>
          <h2 className="h2 fw-bold mb-3"><strong>Nos univers</strong></h2>
          <Row className="g-3">
            {[
              { k:'medievale', t:'Médiéval', img:'images/Med001.JPG' },
              { k:'grand', t:'Renaissance-Grand Siècle', img:'images/img-GS002.JPG' },
              { k:'starwars', t:'Fantastique', img:'images/IMG-SW01.jpg' }
            ].map(item => (
              <Col key={item.k} md="4">
                <Card className="h-100">
                  <img
                    src={base(item.img)}
                    alt={item.t}
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio:'4/3', objectFit:'cover' }}
                  />
                  <CardBody>
                    <div className="d-flex align-items-center justify-content-center">
                      <h5 className="mb-1">{item.t}</h5>                      
                    </div>                    
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* DEMO / PROMO (YouTube au clic) */}
      <DemoPromo
        videoId="ay_pphQG2fU"               // ← remplace par l’ID de votre vidéo promo
        title="Démo / Bande promo"
        poster="images/logo/logo-master.png"// ← image locale pour éviter tout appel à YouTube avant clic
        subtitle="Extraits de spectacles : antique, médiéval, grand siècle, renaissance et fantastique."
        maxVh={60}
      />




      {/* PROCHAINES DATES (aperçu) */}
      <section className="py-5 bg-body-tertiary">
        <Container>
          <div className="d-flex align-items-baseline justify-content-between mb-3">
            <h2 className="h3 mb-0">Prochaines dates</h2>
            <Button size="sm" color="secondary" tag={Link} to="/evenements" outline>Tout voir</Button>
          </div>
          {next.length === 0 ? (
            <p className="text-muted mb-0">Le calendrier se prépare — revenez très vite !</p>
          ) : (
            <Row className="g-3">
              {next.map(e => (
                <Col key={e.title + e.start} md="4">
                  <Card>
                    <CardBody>
                      <div className="small text-muted">{fmt(e.start)}</div>
                      <div className="fw-semibold">{e.title}</div>
                      {e.location && <div className="text-muted">{e.location}</div>}
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      {/* APPEL À ACTION */}
      <section className="py-5">
        <Container className="text-center">
          <h2 className="h3 mb-2">Vous organisez un événement&nbsp;?</h2>
          <p className="text-muted mb-3">Parlons-en : nous construisons des prestations sur-mesure.</p>
          <Button color="primary" tag={Link} to="/contact">Nous contacter</Button>
        </Container>
      </section>
    </>
  )
}
