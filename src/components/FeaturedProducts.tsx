 import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import products from '../data/products';

const FeaturedProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 8)); // Mostrar los 8 productos inicialmente
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="destacados" className="section-padding bg-white" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2>Piezas Imperdibles</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Estas joyas son un epítome de nuestra obra: experimentación y técnica, materiales nobles y formas que acarician la arquitectura de tu propio estilo.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
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
