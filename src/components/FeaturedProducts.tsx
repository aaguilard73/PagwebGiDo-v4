import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import products from '../data/products';

const FeaturedProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 4));
  const [loadingMore, setLoadingMore] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(true);
  
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [sentinelRef, sentinelInView] = useInView({
    threshold: 0,
    rootMargin: '200px 0px',
  });
  
  // Handle infinite scrolling
  useEffect(() => {
    if (sentinelInView && !loadingMore && visibleProducts.length < products.length) {
      loadMore();
    }
  }, [sentinelInView]);
  
  const loadMore = () => {
    if (loadingMore || visibleProducts.length >= products.length) return;
    
    setLoadingMore(true);
    
    // Simulate API fetch delay
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
        
        {/* Loading indicator */}
        {loadingMore && (
          <div className="flex justify-center mt-8">
            <div className="w-10 h-10 border-4 border-accent/30 border-t-accent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Infinite scroll sentinel */}
        {canLoadMore && (
          <div ref={sentinelRef} className="h-4 mt-8" aria-hidden="true"></div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;