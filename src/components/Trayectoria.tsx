import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TrayectoriaProps {
  onClose: () => void;
}

const Trayectoria: React.FC<TrayectoriaProps> = ({ onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="trayectoria"
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-b from-gray-100 to-white overflow-hidden"
    >
      {/* Fondo animado */}
      <motion.div className="absolute inset-0 z-0 bg-white" style={{ y, opacity }} />

      {/* Contenido */}
      <div ref={sectionRef} className="relative z-10 max-w-4xl mx-auto text-center text-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold mb-8"
        >
          Una historia que se construye en capas, como la plata
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6 text-lg sm:text-xl leading-relaxed"
        >
          <p>
            Algunos comienzan con una idea.  
            <br />Nosotros comenzamos con una inquietud:  
            <br /><strong>¿Y si la arquitectura pudiera abrazarse?</strong>
          </p>

          <p>
            Así nació Gi.Do. Como una búsqueda entre disciplinas.  
            Entre los trazos de la ingeniería y los silencios del arte.  
            Entre estructuras que sostienen ciudades… y otras que sostienen memorias.
          </p>

          <p>
            No vinimos a diseñar joyas decorativas.  
            <strong>Vinimos a levantar micromundos simbólicos.</strong>
          </p>

          <p>
            Más de 20 años después, seguimos combinando técnicas ancestrales con geometría pura,  
            piedras que nacen del corazón de la Tierra con metales que narran el paso del tiempo.
          </p>

          <p>
            Cada colección no solo refleja una etapa de Gi.Do.  
            Es también una huella de evolución personal, artística y emocional.
          </p>

          <p>
            Porque para nosotros, <strong>crear joyería es una forma de habitar el mundo</strong>,  
            desde la precisión, la emoción y la belleza.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10"
        >
          <a
            href="#colecciones"
            className="inline-block bg-black text-white font-medium px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300"
          >
            Explora Nuestras Colecciones
          </a>
        </motion.div>

        {/* Botón Volver */}
        <motion.div className="mt-12">
          <button
            onClick={onClose}
            className="text-sm text-gray-600 hover:text-black underline"
          >
            ← Volver al sitio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Trayectoria;
