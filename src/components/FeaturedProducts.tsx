import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProductCard from './ProductCard';
import products from '../data/products';

const FeaturedProducts: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [visibleProducts] = useState(products.slice(0, 8)); // Mostrar los primeros 8 productos

  return (
    <section
      id="destacados"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Fondo animado */}
      <motion.div
        className="absolute inset-0 z-0 bg-black"
        style={{ y, opacity }}
      />

      {/* Contenido */}
      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Piezas Imperdibles
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-300">
            Estas joyas son el epítome de nuestra obra: experimentación, técnica, materiales nobles y formas que acarician la arquitectura de tu propio estilo.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={sectionInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
