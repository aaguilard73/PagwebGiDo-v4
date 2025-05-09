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
      'Audacia, sobriedad, dulzura, fuerza y vanguardia se fusionan en ritmos y proporciones que exaltan tu identidad.',
    image: 'dinamika.png'
  },
  {
    id: 'arketipica',
    name: 'Arketípika',
    description:
      'Frecuencia y color: una sinfonía visual de plata, acero y perlas como símbolos universales de eternidad.',
    image: 'arketipica.png'
  },
  {
    id: 'luminika',
    name: 'Lumínika',
    description:
      'Cristales que refractan tus recuerdos: luz, forma y simplicidad arquitectónica convertidas en joya.',
    image: 'luminika.png'
  },
  {
    id: 'kromatika',
    name: 'Kromátika',
    description:
      'Gemas que vibran con tu esencia: el color como lenguaje emocional y diseño como expresión personal.',
    image: 'kromatika.png'
  },
  {
    id: 'jardinsEtFleurs',
    name: 'Jardins et Fleurs 2024',
    description:
      'Belleza floral + glamour francés: un ballet entre lo natural y lo arquitectónico con elegancia atemporal.',
    image: 'jardinsetFleurs.png'
  },
  {
    id: 'antropika',
    name: 'Antrópika',
    description:
      'Joyería con carácter arquitectónico: masculinidad contemporánea, sobriedad y fuerza en cada línea.',
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-200 via-gray-100 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Seis universos para dibujar tu propia narrativa
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mt-2 text-gray-700">
            Elige la línea que susurre tu voz interior.
          </p>
        </motion.div>

        {/* Grid */}
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
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Imagen */}
              <div className="relative w-full pb-[75%] overflow-hidden">
                <img
                  src={`/images/${c.image}`}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Texto */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {c.name}
                </h3>
                <p className="text-gray-700 text-justify text-sm sm:text-base leading-relaxed">
                  {c.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA al catálogo (opcional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#catalogo-pdf"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-red-800 transition-colors duration-300"
          >
            Ver Catálogo Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Collections;
