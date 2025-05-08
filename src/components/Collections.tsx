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

// Datos con descripciones homogéneas y completas
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
      'Arketípika: vibración, frecuencia y color; la flexibilidad y luminosidad de la plata, la fortaleza del acero y la nobleza de la perla se conjugan como una síntesis universal de la eterna tejedora que construye eternidades.',
    image: 'arketipica.png'
  },
  {
    id: 'luminika',
    name: 'Lumínika',
    description:
      'Lumínika: transparencias arquitectónicas; cristales pulidos que refractan tus recuerdos más luminosos y revelan nuevas perspectivas de luz y forma, fusionando simplicidad y sofisticación en cada pieza.',
    image: 'luminika.png'
  },
  {
    id: 'kromatika',
    name: 'Kromátika',
    description:
      'Kromátika: el color como lenguaje; cada gema encierra un sentimiento que vibra con tu esencia, jugando con matices audaces y sutiles en un diálogo cromático que trasciende lo efímero.',
    image: 'kromatika.png'
  },
  {
    id: 'jardinsEtFleurs',
    name: 'Jardins et Fleurs 2024',
    description:
      'Jardins et Fleurs 2024: la fusión de la sutil belleza floral con el encanto del glamour francés, donde pétalos y estructuras metálicas se entrelazan en un ballet de formas y elegancia atemporal.',
    image: 'jardinsetFleurs.png'
  },
  {
    id: 'antropika',
    name: 'Antrópika',
    description:
      'Antrópika: la esencia de la masculinidad moderna; audacia, fuerza y vanguardia en joyería que dialoga con líneas arquitectónicas, ofreciendo una estética que fusiona lo sobrio con lo disruptivo.',
    image: 'antropika.png'
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
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
      className="section-padding bg-gradient-to-b from-gray-300 via-gray-200 to-white"
    >
      <div className="container mx-auto">
        {/* Título */}
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

        {/* Grid responsivo */}
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
              {/* Imagen con ligero zoom al hover */}
              <div className="relative w-full pb-[75%] overflow-hidden">
                <img
                  src={`/images/${c.image}`}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-contain transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              {/* Texto justificado */}
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
