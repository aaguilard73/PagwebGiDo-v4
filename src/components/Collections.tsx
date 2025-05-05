// src/components/Collections.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
}

const collections: Collection[] = [
  {
    id: 'dinamika',
    name: 'Dinámika',
    description:
      'Dinámika: audacia, sobriedad, dulzura, fuerza, progresismo, dinamismo y vanguardia se fusionan en modulaciones de ritmo, proporción y jerarquía, imprimendo armonía y un carácter propio a cada creación, exaltando la identidad única de quien la porta.',
    image: 'dinamika.png'
  },
  {
    id: 'arketipica',
    name: 'Arketípika',
    description:
      'Vibración, frecuencia y color: la flexibilidad y luminosidad de la plata, la fortaleza del acero y la noble belleza brillo y color de la perla se conjugan como una síntesis universal de la eterna tejedora que construye eternidades: la mujer.',
    image: 'arketipica.png'
  },
  {
    id: 'luminika',
    name: 'Lumínika',
    description:
      'Transparencias arquitectónicas: cristales pulidos que refractan tus recuerdos más luminosos.',
    image: 'luminika.png'
  },
  {
    id: 'kromatika',
    name: 'Kromátika',
    description:
      'Color como lenguaje: cada gema encierra un sentimiento que vibra con tu esencia.',
    image: 'kromatika.png'
  },
  {
    id: 'jardinsEtFleurs',
    name: 'Jardins et Fleurs 2024',
    description:
      'La fusión de la sutil belleza de las flores con el encanto del glamour francés. Contrastes únicos y plata minimalista para resaltar tu elegancia en cualquier ocasión.',
    image: 'jardinsetFleurs.png'
  },
  {
    id: 'antropika',
    name: 'Antrópika',
    description:
      'Antrópika representa la esencia de la masculinidad moderna: audacia, fuerza y vanguardia en joyería que refleja confianza y sofisticación.',
    image: 'antropika.png'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Collections: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="colecciones"
      ref={ref}
      className="relative section-padding overflow-hidden"
    >
      {/* Fondo degradado gris oxford */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-transparent opacity-20 pointer-events-none" />

      <div className="relative z-10 container">
        {/* Título y subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-semibold text-gray-900">
            Seis universos para dibujar tu propia narrativa
          </h2>
          <p className="text-xl max-w-2xl mx-auto mt-2 text-gray-700">
            Elige la línea que susurre tu voz interior.
          </p>
        </motion.div>

        {/* Grid responsivo de colecciones */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {collections.map((c) => (
            <motion.div
              key={c.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative w-full pb-[75%]"> {/* Aspect ratio 4:3 */}
                <img
                  src={`/images/${c.image}`}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {c.name}
                </h3>
                <p className="text-gray-700 text-justify leading-relaxed">
                  {c.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
