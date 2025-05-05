// src/data/collections.ts

export interface Collection {
  id: string
  name: string
  description: string
  image: string
}

const collections: Collection[] = [
  {
    id: 'dinamika',
    name: 'Dinámika',
    description:
      'Dinámika: audacia, sobriedad, dulzura, fuerza, progresismo, dinamismo y vanguardia se fusionan en modulaciones de ritmo, proporción y jerarquía, imprimendo armonía y un carácter propio a cada creación, exaltando la identidad única de quien la porta.',
    image: '/images/dinamika.png'
  },
  {
    id: 'arketipica',
    name: 'Arketípika',
    description:
      'Vibración, frecuencia y color: la flexibilidad y luminosidad de la plata, la fortaleza del acero y la noble belleza brillo y color de la perla se conjugan como una síntesis universal de la eterna tejedora que construye eternidades: la mujer.',
    image: '/images/arketipica.png'
  },
  {
    id: 'luminika',
    name: 'Lumínika',
    description:
      'Transparencias arquitectónicas: cristales pulidos que refractan tus recuerdos más luminosos.',
    image: '/images/luminika.png'
  },
  {
    id: 'kromatika',
    name: 'Kromátika',
    description:
      'Color como lenguaje: cada gema encierra un sentimiento que vibra con tu esencia.',
    image: '/images/kromatika.png'
  },
  {
    id: 'jardinselFleurs',
    name: 'Jardins et Fleurs 2024',
    description:
      'La fusión de la sutil belleza de las flores con el encanto del glamour francés. Contrastes únicos y plata minimalista para resaltar tu elegancia en cualquier ocasión.',
    image: '/images/jardinselFleurs.png'  // <-- nombre EXACTO según tu carpeta
  },
  {
    id: 'antropika',
    name: 'Antrópika',
    description:
      'Antrópika representa la esencia de la masculinidad moderna: audacia, fuerza y vanguardia en joyería que refleja confianza y sofisticación.',
    image: '/images/antropika.png'
  }
]

export default collections

