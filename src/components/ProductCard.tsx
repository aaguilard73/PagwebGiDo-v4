// src/components/ProductCard.tsx

import React from 'react';
import type { Product } from '../types';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md flex flex-col justify-between">
      <div className="w-full h-64 flex items-center justify-center overflow-hidden">
        <img
          src={product.images.primary}
          alt={product.name}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm font-bold text-gray-800">{product.name}</h3>
        <p className="text-xs text-gray-500 mt-1">{product.description}</p>
        <p className="text-sm font-bold text-red-600 mt-2">${product.price} MXN</p>
      </div>
    </div>
  );
};

export default ProductCard;
