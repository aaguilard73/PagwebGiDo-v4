// src/components/ProductCard.tsx

import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Imagen */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img
          src={product.images.primary}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-primary font-bold mt-2">${product.price.toLocaleString()} MXN</p>
        {product.description && (
          <p className="text-gray-600 text-sm mt-2">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
