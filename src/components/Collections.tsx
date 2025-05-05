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

// Aquí puedes mover este array a src/data/collections.ts
const collections: Collection[] = [
  { id: 'dinamika',       name: 'Dinámika',       description: 'Dinámika: audacia, sobriedad…',             image: 'dinamika.png' },
  { id: 'arketipica',     name: 'Arketípika',     description: 'Vibración, frecuencia y color…',           image: 'arketipica.png' },
  { id: 'luminika',       name: 'Lumínika',       description: 'Transparencias arquitectónicas…',          image: 'luminika.png' },
  { id: 'kromatika',      name: 'Kromátika',      description: 'Color como lenguaje: cada gema…',           image: 'kromatika.png' },
  { id: 'jardinsEtFleurs',name: 'Jardins et Fleurs 2024', description: 'La fusión de la sutil belleza…', image: 'jardinsetFleurs.png' },
  { id: 'antropika',      name: 'Antrópika',      description: 'Antrópika representa la esencia…',          image: 'antropika.png' },
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
      <div className="container">
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
              className="bg-white rounded-lg overflow-hidden border-2 border-red-700 shadow-lg 
                         hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              {/* Imagen completa sin recortes */}
              <div className="relative w-full pb-[75%] overflow-hidden">
                <img
                  src={`/images/${c.image}`}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-contain"
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


