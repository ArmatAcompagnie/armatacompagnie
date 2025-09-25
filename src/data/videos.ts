// src/data/videos.ts
export type VideoItem = {
  id: string           // ID YouTube (ex: "dQw4w9WgXcQ")
  title: string
  tags: string[]       // mêmes familles que tes photos si tu veux
  poster?: string      // poster local recommandé (ex: "images/videos/promo-2025.jpg")
  caption?: string
}

export const VIDEO_TAGS = [
  'Promo',
  'Médiévale',
  'Grand Siècle-Renaissance',
  'Fantastique',
  'Star Wars',
  'Making-of',
] as const

export const videos: VideoItem[] = [
  {
    id: '72zmo390glc',
    title: 'le premier jour',
    tags: ['Grand Siècle-Renaissance'],
    //poster: 'images/videos/promo-2025.jpg',
    caption: 'Extraits de spectacles.',
  },
  {
    id: 'ay_pphQG2fU',
    title: 'vidéo promo',
    tags: ['Promo'],
    //poster: 'images/videos/sw-duel-01.jpg',
  },
  // …
]
