// src/components/FeaturedProducts.tsx

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

// Sustituimos el import original de productos por nuestro array local
interface Product {
  id: string;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 'product1',  name: 'Producto 1',  image: '/images/producto1.png' },
  { id: 'product2',  name: 'Producto 2',  image: '/images/producto2.png' },
  { id: 'product3',  name: 'Producto 3',  image: '/images/producto3.png' },
  { id: 'product4',  name: 'Producto 4',  image: '/images/producto4.png' },
  { id: 'product5',  name: 'Producto 5',  image: '/images/producto5.png' },
  { id: 'product6',  name: 'Producto 6',  image: '/images/producto6.png' },
  { id: 'product7',  name: 'Producto 7',  image: '/images/producto7.png' },
  { id: 'product8',  name: 'Producto 8',  image: '/images/producto8.png' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const FeaturedProducts: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 4));
  const [loadingMore, setLoadingMore]     = useState(false);
  const [canLoadMore, setCanLoadMore]     = useState(true);

  const [sectionRef, sectionInView]   = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sentinelRef, sentinelInView] = useInView({ threshold: 0, rootMargin: '200px 0px' });

  // infinite scroll
  useEffect(() => {
    if (sentinelInView && !loadingMore && visibleProducts.length < products.length) {
      loadMore();
    }
  }, [sentinelInView]);

  const loadMore = () => {
    if (loadingMore || visibleProducts.length >= products.length) return;
    setLoadingMore(true);
    setTimeout(() => {
      const nextBatch = products.slice(visibleProducts.length, visibleProducts.length + 4);
      setVisibleProducts(prev => [...prev, ...nextBatch]);
      setLoadingMore(false);
      if (visibleProducts.length + nextBatch.length >= products.length) {
        setCanLoadMore(false);
      }
    }, 800);
  };

  return (
    <section id="destacados" className="section-padding bg-white" ref={sectionRef}>
      <div className="container">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold">Piezas Imperdibles</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Estas joyas son un epítome de nuestra obra: experimentación y técnica, materiales nobles y formas que acarician la arquitectura de tu propio estilo.
          </p>
        </motion.div>

        {/* Grid de productos */}
        <motion.div
          initial="hidden"
          animate={sectionInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {visibleProducts.map(product => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Loading spinner */}
        {loadingMore && (
          <div className="flex justify-center mt-8">
            <div className="w-10 h-10 border-4 border-accent/30 border-t-accent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Sentinel para infinite scroll */}
        {canLoadMore && <div ref={sentinelRef} className="h-4 mt-8" aria-hidden="true" />}
      </div>
    </section>
  );
};

export default FeaturedProducts;
