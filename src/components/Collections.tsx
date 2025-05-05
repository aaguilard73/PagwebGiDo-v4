// src/components/Collections.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import collections from '../data/collections';

const Collections: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="colecciones"
      ref={ref}
      className="relative section-padding overflow-hidden"
    >
      {/* Fondo degradado suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 pointer-events-none" />

      <div className="relative z-10 container mx-auto">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((c) => (
            <motion.div
              key={c.id}
              ref={ref}
              whileHover={{ rotateY: 8, rotateX: 5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative"
              style={{ perspective: 800 }}
            >
              {/* Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-l-4 border-red-700">
                {/* Imagen */}
                <div className="relative w-full pb-[75%] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                {/* Texto */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {c.name}
                  </h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
