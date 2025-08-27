import { Container } from 'reactstrap'
import ScheduleTable from '../components/ScheduleTable'
import { schedule } from '../data/schedule'

export default function Planning() {
  return (
    <Container style={{ paddingTop: '6rem' }}>
      <h2 className="mb-3">Planning & Tarifs</h2>
      <p className="text-muted">Horaires indicatifs — mise à jour à la rentrée.</p>
      <ScheduleTable sessions={schedule} />
    </Container>
  )
}
