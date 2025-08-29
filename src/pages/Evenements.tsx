import { useMemo, useState } from 'react'
import { Container, FormGroup, Label, Input, Badge } from 'reactstrap'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import frLocale from '@fullcalendar/core/locales/fr'
import { events as allEvents, type Category } from '../data/events'

// CSS FullCalendar (si erreur de chemin, remplace "index.css" par "main.css")
import '@fullcalendar/daygrid/index.css'
import '@fullcalendar/bootstrap5/index.css'

export default function Evenements() {
  const [filter, setFilter] = useState<Category | 'Toutes'>('Toutes')

  const events = useMemo(() => {
    const list = (filter === 'Toutes')
      ? allEvents
      : allEvents.filter(e => e.category === filter)
    // FullCalendar attend une forme légèrement différente
    return list.map(e => ({
      title: e.title,
      start: e.start,
      end: e.end,
      url: e.url,
      extendedProps: { location: e.location, category: e.category }
    }))
  }, [filter])

  return (
    <Container style={{ paddingTop: '6rem' }}>
      <h2 className="mb-3">Événements & prestations</h2>

      <FormGroup className="mb-3" style={{ maxWidth: 360 }}>
        <Label htmlFor="cat">Filtrer par période/genre</Label>
        <Input id="cat" type="select" value={filter} onChange={e => setFilter(e.target.value as any)}>
          <option>Toutes</option>
          <option>Antique</option>
          <option>Médiévale</option>
          <option>Renaissance</option>
          <option>Grand Siècle</option>
          <option>Fantastique</option>
          <option>Star Wars</option>
          <option>Autre</option>
        </Input>
      </FormGroup>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, bootstrap5Plugin]}
        themeSystem="bootstrap5"
        locales={[frLocale]}
        locale="fr"
        initialView="dayGridMonth"
        height="auto"
        firstDay={1}
        events={events}
        eventClick={(arg) => {
          // ouvrir les liens externes dans un nouvel onglet
          if (arg.event.url) {
            arg.jsEvent.preventDefault()
            window.open(arg.event.url, '_blank', 'noopener,noreferrer')
          }
        }}
        eventDidMount={(info) => {
          // petit extra : afficher lieu + catégorie sous le titre
          const ex = info.event.extendedProps as { location?: string; category?: Category }
          if (ex.location || ex.category) {
            const el = document.createElement('div')
            el.className = 'small text-muted mt-1'
            el.innerHTML = `${ex.location ?? ''} ${ex.category ? `<span class="ms-2 badge bg-secondary">${ex.category}</span>` : ''}`
            info.el.appendChild(el)
          }
        }}
      />

      <div className="mt-3">
        Légende :{' '}
        <Badge color="secondary">Antique</Badge>{' '}
        <Badge color="secondary">Médiévale</Badge>{' '}
        <Badge color="secondary">Renaissance</Badge>{' '}
        <Badge color="secondary">Grand Siècle</Badge>{' '}
        <Badge color="secondary">Fantastique</Badge>{' '}
        <Badge color="secondary">Star Wars</Badge>
      </div>
    </Container>
  )
}
