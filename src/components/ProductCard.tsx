import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-300">
      {/* Imagen */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img
          src={product.images.primary}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 text-center space-y-2">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="text-primary font-bold text-sm sm:text-base">
          ${product.price.toLocaleString()} MXN
        </p>
        {product.description && (
          <p className="text-gray-600 text-xs sm:text-sm leading-snug">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
