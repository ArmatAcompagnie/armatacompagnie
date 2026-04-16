import { Container, Row, Col, Card, CardBody } from 'reactstrap'

const base = (p: string) => `${import.meta.env.BASE_URL}${p}`.replace('//', '/')

const univers = [
  {
    key: 'medievale',
    title: 'Médiéval',
    image: 'images/gallery/large/Maintenon_1600/DSC_0251_1600.jpg',
  },
  {
    key: 'grand',
    title: 'Renaissance-Grand Siècle',
    image: 'images/gallery/large/La_Faye_1600/Faye_DSC_0071_1600.jpg',
  },
  {
    key: 'starwars',
    title: 'Fantastique',
    image: 'images/IMG-SW01.jpg',
  },
]

export default function HomeUnivers() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="h2 fw-bold mb-3">
          <strong>Nos univers</strong>
        </h2>

        <Row className="g-3">
          {univers.map((item) => (
            <Col key={item.key} md="4">
              <Card className="h-100">
                <img
                  src={base(item.image)}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
                <CardBody>
                  <div className="d-flex align-items-center justify-content-center">
                    <h3 className="h5 mb-1">{item.title}</h3>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}