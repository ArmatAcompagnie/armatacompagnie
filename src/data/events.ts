export type Category =
  | 'Antique' | 'Médiévale' | 'Renaissance' | 'Grand Siècle' | 'Fantastique' | 'Star Wars' | 'Autre'

export type EventItem = {
  title: string
  start: string        // ISO ex: '2025-09-06'
  end?: string         // optionnel
  location?: string
  category?: Category
  url?: string         // lien orga / billetterie
}

export const events: EventItem[] = [
  { title: 'test1 Campement médiéval — Fête des Remparts', start: '2025-09-06', end: '2025-09-07', location: 'Dinan', category: 'Médiévale', url: 'https://exemple.org' },
  { title: 'test2 Duel de cape et d’épée',                 start: '2025-10-12', location: 'Château de X', category: 'Grand Siècle' },
  { title: 'test3 Gala escrime artistique',                start: '2025-11-02', location: 'Lyon', category: 'Autre' },
]
