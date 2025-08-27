export type Session = { day: string; time: string; level: string; location: string }

export const schedule: Session[] = [
  { day: 'Lundi',  time: '19:00–21:00', level: 'Tous niveaux', location: 'Gymnase A' },
  { day: 'Mercredi', time: '19:00–21:00', level: 'Intermédiaire', location: 'Gymnase B' },
  { day: 'Samedi', time: '10:00–12:00', level: 'Débutant', location: 'Dojo C' },
]
