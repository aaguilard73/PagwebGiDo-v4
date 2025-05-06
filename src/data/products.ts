// src/data/products.ts

import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'producto1',
    name: 'Producto 1',
    price: 1000,
    description: 'Descripción breve del producto 1.',
    images: {
      primary: '/images/producto1.png',
      secondary: '/images/producto1.png',
    },
  },
  {
    id: 'producto2',
    name: 'Producto 2',
    price: 1200,
    description: 'Descripción breve del producto 2.',
    images: {
      primary: '/images/producto2.png',
      secondary: '/images/producto2.png',
    },
  },
  {
    id: 'producto3',
    name: 'Producto 3',
    price: 1400,
    description: 'Descripción breve del producto 3.',
    images: {
      primary: '/images/producto3.png',
      secondary: '/images/producto3.png',
    },
  },
  {
    id: 'producto4',
    name: 'Producto 4',
    price: 1600,
    description: 'Descripción breve del producto 4.',
    images: {
      primary: '/images/producto4.png',
      secondary: '/images/producto4.png',
    },
  },
  {
    id: 'producto5',
    name: 'Producto 5',
    price: 1800,
    description: 'Descripción breve del producto 5.',
    images: {
      primary: '/images/producto5.png',
      secondary: '/images/producto5.png',
    },
  },
  {
    id: 'producto6',
    name: 'Producto 6',
    price: 2000,
    description: 'Descripción breve del producto 6.',
    images: {
      primary: '/images/producto6.png',
      secondary: '/images/producto6.png',
    },
  },
  {
    id: 'producto7',
    name: 'Producto 7',
    price: 2200,
    description: 'Descripción breve del producto 7.',
    images: {
      primary: '/images/producto7.png',
      secondary: '/images/producto7.png',
    },
  },
  {
    id: 'producto8',
    name: 'Producto 8',
    price: 2400,
    description: 'Descripción breve del producto 8.',
    images: {
      primary: '/images/producto8.png',
      secondary: '/images/producto8.png',
    },
  },
];

export default products;
