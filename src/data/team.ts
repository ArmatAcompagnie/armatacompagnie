export type Member = { name: string; role: string; bio: string; photo?: string }

export const team: Member[] = [
  { name: 'Nom 1', role: 'Chorégraphe & Coach', bio: 'Bio courte (2–3 lignes).', photo: 'images/team/nom1.webp' },
  { name: 'Nom 2', role: 'Coach Sécurité',      bio: 'Spécialiste chutes, câblage.', photo: 'images/team/nom2.webp' },
  // ...
]
