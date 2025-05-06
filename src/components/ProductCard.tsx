// src/components/ProductCard.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Vista rápida', product);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Botones de acciones */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 hover:opacity-100 hover:bg-black/30">
          <button
            onClick={handleQuickView}
            className="w-10 h-10 rounded-full bg-white text-dark hover:text-primary flex items-center justify-center transition-transform duration-300 transform hover:scale-110"
            aria-label="Vista rápida"
          >
            <Eye size={18} />
          </button>
          <button
            onClick={toggleFavorite}
            className={`w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-300 transform hover:scale-110 ${
              isFavorite ? 'text-primary' : 'text-dark hover:text-primary'
            }`}
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        {product.description && (
          <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        )}
        {product.price && (
          <span className="block text-primary font-semibold mt-2">
            ${product.price.toLocaleString()} MXN
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
