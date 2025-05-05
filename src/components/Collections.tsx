import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import collections from '../data/collections'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const Collections: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="colecciones"
      ref={ref}
      className="section-padding bg-gradient-to-b from-gray-300 via-gray-200 to-white"
    >
      <div className="container mx-auto relative z-10">
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
              className="relative"
              style={{ perspective: 1000 }}
            >
              {/* Card 3D con semimarco rojo */}
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative w-full pb-[75%] bg-white rounded-lg
                           border-t-4 border-l-4 border-[#8B0000]
                           overflow-hidden shadow-lg hover:shadow-2xl
                           transition-shadow duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Frontal: imagen completa */}
                <div
                  className="absolute inset-0"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Dorso: título + descripción */}
                <div
                  className="absolute inset-0 p-6 flex flex-col justify-center
                             bg-white text-gray-900 text-justify"
                  style={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <h3 className="text-2xl font-semibold mb-2">{c.name}</h3>
                  <p className="leading-relaxed">{c.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Collections
