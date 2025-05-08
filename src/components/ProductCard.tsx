import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Ejemplo de contenedor */}
      <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-48"> {/* Ejemplo de contenedor de imagen */}
          <img
            src={product.images.primary}
            alt={product.name}
            className={`w-full h-full object-cover b-full b-full ${product.imageClassName}`} // Aplicamos la clase dinámicamente
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">${product.price} MXN</p>
          {/* ... otros detalles del producto */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
