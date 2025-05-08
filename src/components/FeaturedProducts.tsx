// src/components/FeaturedProducts.tsx

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import products from '../data/products'; // Importación por defecto (como estaba antes)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturedProducts: React.FC = () => {
  // Aquí podrías filtrar los productos destacados si es necesario
  const featured = products.slice(0, 4); // Ejemplo: tomar los primeros 4

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {featured.map((product) => (
        <motion.div key={product.id} variants={cardVariants}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturedProducts;
