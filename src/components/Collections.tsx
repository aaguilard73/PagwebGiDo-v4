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
  // ... tus 6 colecciones (igual que antes)
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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
      {/* Fondo degradado gris oxford, mantiene lo anterior */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-700 to-transparent opacity-20 pointer-events-none" />

      <div className="relative z-10 container">
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

        {/* Grid responsivo con giro en hover y fondo rojo */}
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
              className="perspective-1000" // clase utilitaria para perspective
            >
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative w-full pb-[75%] rounded-lg bg-[#8B0000] shadow-lg overflow-hidden transform-style-preserve-3d"
              >
                {/* Cara frontal */}
                <div className="absolute inset-0 backface-hidden">
                  <img
                    src={`/images/${c.image}`}
                    alt={c.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Cara posterior: nombre y descripción */}
                <div className="absolute inset-0 p-6 backface-hidden rotateY-180 flex flex-col justify-center text-white text-justify">
                  <h3 className="text-2xl font-semibold mb-2">{c.name}</h3>
                  <p className="leading-relaxed">{c.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
