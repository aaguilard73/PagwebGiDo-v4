// src/components/ProductCard.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
        <img 
          src={product.images.primary}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="font-medium text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
        <span className="block text-primary font-semibold mt-2">
          ${product.price.toLocaleString()} MXN
        </span>
      </div>
    </motion.div>
  );
};

export default ProductCard;
