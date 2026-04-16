import { Container } from 'reactstrap'

const base = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace('//', '/')

export default function HomeAbout() {
  return (
    <section
      className="py-5 hero hero--about"
      style={{
        position: 'relative',
        display: 'grid',
        alignItems: 'start',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      <img
        src={base('images/img-001.jpg')}
        alt="La Compagnie Armata en démonstration"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.55))',
          pointerEvents: 'none',
        }}
      />

      <Container style={{ color: '#fff', position: 'relative', zIndex: 1 }}>
        <h2 className="display-5 fw-bold mb-2">La Compagnie Armata...</h2>
        <p className="lead mb-3" style={{ maxWidth: 720 }}>
          ...se spécialise dans la création de combats chorégraphiés, permettant de
          plonger les petits et grands dans différentes époques.
          <br />
          <br />
          Les univers historiques, fantastiques, littéraires, théâtral et tant d’autres
          sont nos sources d’inspiration de nos créations, que nous mettons en scène tout
          en magnifiant l’arme blanche.
          <br />
          <br />
          Des Château aux fêtes de villages, des scènes de théâtres aux guinguettes, nos
          terrains de jeux sont divers et variés……
        </p>
      </Container>
    </section>
  )
}