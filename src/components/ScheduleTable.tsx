import { Table, Badge } from 'reactstrap'
import type { Session } from '../data/schedule'

export default function ScheduleTable({ sessions }: { sessions: Session[] }) {
  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          <th>Jour</th><th>Horaire</th><th>Niveau</th><th>Lieu</th>
        </tr>
      </thead>
      <tbody>
        {sessions.map((s, i) => (
          <tr key={i}>
            <td>{s.day}</td>
            <td>{s.time}</td>
            <td><Badge color="primary">{s.level}</Badge></td>
            <td>{s.location}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
