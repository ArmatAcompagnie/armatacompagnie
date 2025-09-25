// src/data/gallery.ts
export type GalleryItem = {
  id: string
  src: string          // image "medium" (800–1200px)
  srcLarge?: string    // image "large" (≥1600px) pour le modal
  alt: string
  tags: string[]       // ex: ['Médiévale'] ; utilise les mêmes noms partout
  caption?: string
}

export const TAGS = [
  'Antique',
  'Médiévale',
  'Grand Siècle - Renaissance',
  'Fantastique',
  'Star Wars',
] as const

export const gallery: GalleryItem[] = [
  {
    id: 'medieval-001',
    src: 'images/gallery/Med001.JPG',
    //srcLarge: 'images/gallery/medieval-001-1920.jpg',
    alt: 'Combat médiéval chorégraphié en extérieur',
    tags: ['Médiévale'],
    caption: 'Fête historique — mêlée et duel.',
  },
  {
    id: 'grand-001',
    src: 'images/gallery/img-GS002.JPG',
    //srcLarge: 'images/gallery/grand-001-1920.jpg',
    alt: 'Duel cape & épée — Grand Siècle',
    tags: ['Grand Siècle - Renaissance'],
  },
  {
    id: 'sw-001',
    src: 'images/gallery/IMG-SW01.jpg',
    //srcLarge: 'images/gallery/sw-001-1920.jpg',
    alt: 'Duels sabre-laser — Star Wars',
    tags: ['Star Wars', 'Fantastique'],
  },
]
