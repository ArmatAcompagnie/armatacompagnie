export type TeamMember = {
  name: string
  role: string
  bio?: string
  photo?: string          // ex: "images/team/romain.jpg"
  order?: number          // permet de trier l’affichage
}

export const team: TeamMember[] = [
  { name: 'Romain', order:1, role: 'combat-média', bio: '« Je demande un certain engagement, pour ne pas dire un engagement certain » C’est cette Maxime qui résume le mieux Romain, enfin Monsieur le Président, comme il aime à nous le rappeler.', photo: 'images/team/rom1.jpg' },
  { name: 'Romain', order:2, role: 'combat', bio: 'Imagination, organisation, planification... enfin plein d’autre trucs en « tion », lorsqu’il s’agit d’être sérieux Romain est notre caution.', photo: 'images/team/rom2.jpg' },
  { name: 'Nicolas', order:4, role: 'combat-théatre-mise en scène', bio: '« On ne tourne pas les dos au public » et « Va pas chercher la parade » sont ces 2 mantras, bien que lui même ne les respectent pas.', photo: 'images/team/nicolas1.jpg' },
  { name: 'Margot', order:3, role: 'combat', bio: 'Le combat à l’épée est une danse, Margot l’a très bien compris. Mais.... « Y a pas de mais !!! »', photo: 'images/team/Margot.jpg' },
  { name: 'Julien', order:5, role: 'combat-costumes-théatre-décors', bio: 'Une ambiance, une lumière ou un décor, un costume ? C’est lui qu s’y colle son imagination est sans limites. Comme il aime à le dire : «Efficace et pas cher y a qu’Armata qui peut le faire ».', photo: 'images/team/julien1.jpg' },
  { name: 'Loïc', order:6, role: 'combat-site web', bio: '« La technique, la technique, encore la technique et surtout de la technique » C’est grâce à ce dogme que nos combats ne se résument pas à du tic-tic/tac-tac.', photo: 'images/team/loic1.jpg' },
  { name: 'Jérémy', order:7, role: 'combat', bio: 'Détenteur du record de blessures toute catégorie confondue, quand il y va, il y va à fond. Une roulade, une volte, un tasser... Il est toujours partant.', photo: 'images/team/jay.jpg' },
  // ...
]
