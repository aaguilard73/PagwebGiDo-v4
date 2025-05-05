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
    description: 'Dinámika: audacia, sobriedad, dulzura, fuerza, progresismo, dinamismo y vanguardia se fusionan en modulaciones de ritmo, proporción y jerarquía, imprimendo armonía y un carácter propio a cada creación, exaltando la identidad única de quien la porta.', // :contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}
    image: 'dinamika.png'
  },
  {
    id: 'arketipica',
    name: 'Arketípika',
    description: 'Vibración, frecuencia y color: la flexibilidad y luminosidad de la plata, la fortaleza del acero y la noble belleza brillo y color de la perla se conjugan como una síntesis universal de la eterna tejedora que construye eternidades: la mujer.', // :contentReference[oaicite:2]{index=2}:contentReference[oaicite:3]{index=3}
    image: 'arketipica.png'
  },
  {
    id: 'luminika',
    name: 'Lumínika',
    description: 'Vibración, frecuencia y color: la flexibilidad y luminosidad de la plata, la fortaleza del acero y la noble belleza brillo y color de la perla se conjugan como una síntesis universal de la eterna tejedora que construye eternidades: la mujer.', // :contentReference[oaicite:4]{index=4}:contentReference[oaicite:5]{index=5}
    image: 'luminika.png'
  },
  {
    id: 'kromatika',
    name: 'Kromátika',
    description: 'Vibración, frecuencia y color: la flexibilidad y luminosidad de la plata, la fortaleza del acero y la noble belleza brillo y color de la perla se conjugan como una síntesis universal de la eterna tejedora que construye eternidades: la mujer.', // :contentReference[oaicite:6]{index=6}:contentReference[oaicite:7]{index=7}
    image: 'kromatika.png'
  },
  {
    id: 'jardinsetFleurs',
    name: 'Jardins et Fleurs 2024',
    description: 'La fusión de la sutil belleza de las flores con la sensualidad y el encanto del antiguo glamour francés. Cada pieza juega con contrastes únicos, alternando con plata minimalista para lograr una mezcla de épocas y culturas que te hará destacar en cualquier ocasión.', // :contentReference[oaicite:8]{index=8}:contentReference[oaicite:9]{index=9}
    image: 'jardinsetFleurs.png'
  },
  {
    id: 'antropika',
    name: 'Antrópika',
    description: 'Antrópika representa la esencia de la masculinidad moderna, combinando audacia, fuerza y vanguardia. Diseñada para el hombre contemporáneo, equilibra lo sobrio y lo casual, adaptándose a cualquier ocasión con un estilo que refleja confianza y sofisticación. Es la vanguardia de la masculinidad en forma de joyería.', // :contentReference[oaicite:10]{index=10}:contentReference[oaicite:11]{index=11}
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
    <section id="colecciones" ref={ref} className="section-padding bg-bg">
      <div className="container">
        {/* Título y subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-semibold">
            Seis universos para dibujar tu propia narrativa
          </h2>
          <p className="text-xl max-w-2xl mx-auto mt-2">
            Elige la línea que susurre tu voz interior.
          </p>
        </motion.div>

        {/* Grid responsivo de colecciones */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {collections.map((c) => (
            <motion.div
              key={c.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`/images/${c.image}`}
                  alt={c.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{c.name}</h3>
                <p className="mt-2 text-gray-700">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
