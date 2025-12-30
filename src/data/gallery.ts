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
    src: 'images/gallery/vignettes/Maintenon-800x600/DSC_0226_800x600.jpg',
    srcLarge: 'images/gallery/large/Maintenon_1600/DSC_0226_1600.jpg',
    alt: 'Combat médiéval chorégraphié en extérieur',
    tags: ['Médiévale'],
    caption: 'Fête historique — mêlée et duel.',
  },
  {
    id: 'grand-001',
    src: 'images/gallery/vignettes/La_Faye_800x600/Faye_DSC_0071_8x6.jpg',
    srcLarge: 'images/gallery/large/La_Faye_1600/Faye_DSC_0071_1600.jpg',
    alt: 'Duel cape & épée — Grand Siècle',
    tags: ['Grand Siècle - Renaissance'],
  },
  {
    id: 'sw-001',
    src: 'images/gallery/IMG-SW01.jpg',
    srcLarge: 'images/gallery/IMG-SW01_1600.jpg',
    alt: 'Duels sabre-laser — Star Wars',
    tags: ['Star Wars', 'Fantastique'],
  },
  {
    id: 'grand-002',
    src: 'images/gallery/vignettes/GS_800x600/tourAction_800x600.jpg',
    srcLarge: 'images/gallery/large/GS_1600/tourAction_1600.jpg',
    alt: 'action en haut d une tour - grand siècle',
    tags: ['Grand Siècle - Renaissance'],
  },
  {
    id: 'grand-003',
    src: 'images/gallery/vignettes/GS_800x600/rom1_vs_nico_maint01_8x6.jpg',
    srcLarge: 'images/gallery/large/GS_1600/rom1_vs_nico_maint01_1600.jpg',
    alt: 'duel rapière face au chateau de maintenon- grand siècle',
    tags: ['Grand Siècle - Renaissance'],
  },
  {
    id: 'grand-004',
    src: 'images/gallery/vignettes/GS_800x600/rom1_vs_jul_maint01_8x6.jpg',
    srcLarge: 'images/gallery/large/GS_1600/rom1_vs_jul_maint01_1600.jpg',
    alt: 'duel deux armes rapiere + main gauche- grand siècle',
    tags: ['Grand Siècle - Renaissance'],
  },
  {
    id: 'grand-005',
    src: 'images/gallery/vignettes/La_Faye_800x600/Faye_DSC_0055_8x6.jpg',
    srcLarge: 'images/gallery/large/La_Faye_1600/Faye_DSC_0055_1600.jpg',
    alt: 'trio rapiere JRM',
    tags: ['Grand Siècle - Renaissance'],
  },
  {
    id: 'grand-006',
    src: 'images/gallery/vignettes/LBetLB-800x600/_MG_1923_800x600.jpg',
    srcLarge: 'images/gallery/large/LBetLB_1600/_MG_1923_1600.jpg',
    alt: 'photo de groupe la belle et la bete',
    tags: ['Fantastique'],
  },
  {
    id: 'grand-007',
    src: 'images/gallery/vignettes/LBetLB-800x600/_MG_1859_800x600.jpg',
    srcLarge: 'images/gallery/large/LBetLB_1600/_MG_1859_1600.jpg',
    alt: 'La Belle et la Bête live action rapiere',
    tags: ['Fantastique'],
  },
  {
    id: 'grand-008',
    src: 'images/gallery/vignettes/Maintenon-800x600/P1100078_800x600.jpg',
    srcLarge: 'images/gallery/large/Maintenon_1600/P1100078_1600.jpg',
    alt: 'combat a la queue de billard',
    tags: ['Fantastique'],
  },
  {
    id: 'grand-009',
    src: 'images/gallery/vignettes/Maintenon-800x600/_MG_2281_800x600.jpg',
    srcLarge: 'images/gallery/large/Maintenon_1600/_MG_2281_1600.jpg',
    alt: 'combat au boken japonais',
    tags: ['Fantastique'],
  },
  {
    id: 'grand-010',
    src: 'images/gallery/vignettes/Maintenon-800x600/DSC_0028_800x600.jpg',
    srcLarge: 'images/gallery/large/Maintenon_1600/DSC_0028_1600.jpg',
    alt: 'trio rapiere et deusieme main sur le thème des pirates',
    tags: ['Fantastique'],
  },
  {
    id: 'grand-011',
    src: 'images/gallery/vignettes/telethon-2023_800x600/IMG-20231201-WA0034_800x600.jpg',
    srcLarge: 'images/gallery/large/telethon_1600/IMG-20231201-WA0034_1600.jpg',
    alt: 'duel rapiere mr mouche contre clochette, thème de Peter Pan, sur scene ',
    tags: ['Fantastique'],
  },
  {
    id: 'grand-012',
    src: 'images/gallery/vignettes/StMT-800x600/IMG-20230702-WA0005_800x600.jpg',
    srcLarge: 'images/gallery/large/StMT_1600/IMG-20230702-WA0005_1600.jpg',
    alt: 'photo de groupe, renaissance rapiere ',
    tags: ['Grand Siècle - Renaissance'],
  },

]
