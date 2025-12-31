export type TeamMember = {
  name: string
  role: string
  bio?: string
  photo?: string          // ex : "images/team/romain.jpg"
  order?: number          // permet de trier l’affichage
}

export const team: TeamMember[] = [
  {
    name: 'Romain',
    order: 1,
    role: 'combat – média',
    bio: '« Je demande un certain engagement, pour ne pas dire un engagement certain. » C’est cette maxime qui résume le mieux Romain — enfin “Monsieur le Président”, comme il aime nous le rappeler.',
    photo: 'images/team/rom1.webp'
  },
  {
    name: 'Romain',
    order: 2,
    role: 'combat',
    bio: 'Imagination, organisation, planification… enfin plein d’autres trucs en “-tion”. Lorsqu’il s’agit d’être sérieux, Romain est notre caution.',
    photo: 'images/team/rom2.webp'
  },
  {
    name: 'Nicolas',
    order: 4,
    role: 'combat – théâtre – mise en scène',
    bio: '« On ne tourne pas le dos au public » et « Va pas chercher la parade » sont ses deux mantras — bien que lui-même ne les respecte pas toujours.',
    photo: 'images/team/nicolas1.webp'
  },
  {
    name: 'Margot',
    order: 3,
    role: 'combat',
    bio: 'Détente, agilité, finesse… avec un soupçon de brutalité. Voici Margot, dite « EL TAUREAU ».',
    photo: 'images/team/Margot.webp'
  },
  {
    name: 'Julien',
    order: 5,
    role: 'combat – costumes – théâtre – décors',
    bio: 'Une ambiance, une lumière, un décor, un costume ? C’est lui qui s’y colle, son imagination est sans limites. Comme il aime à le dire : « Efficace et pas cher, y a qu’Armata qui peut le faire. »',
    photo: 'images/team/julien1.webp'
  },
  {
    name: 'Loïc',
    order: 6,
    role: 'combat – site web',
    bio: '« La technique, la technique, encore la technique… et surtout de la technique ! » C’est grâce à ce dogme que nos combats ne se résument pas à du tic-tic / tac-tac.',
    photo: 'images/team/loic1.webp'
  },
  {
    name: 'Jérémy',
    order: 7,
    role: 'combat',
    bio: 'Détenteur du record de blessures, toutes catégories confondues : quand il y va, il y va à fond! Une roulade, une volte, un “tasser”… Il est toujours partant!',
    photo: 'images/team/jay.webp'
  },
  // …
]
