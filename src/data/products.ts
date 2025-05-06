// src/data/products.ts

import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Producto 1',
    price: 1000,
    line: '',
    collection: '',
    images: {
      primary: '/images/producto1.png',
      secondary: '/images/producto1.png', // Misma imagen por ahora
    },
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 1200,
    line: '',
    collection: '',
    images: {
      primary: '/images/producto2.png',
      secondary: '/images/producto2.png',
    },
  },
  {
    id: 3,
    name: 'Producto 3',
    price: 1400,
    line: '',
    collection: '',
    images: {
      primary: '/images/producto3.png',
      secondary: '/images/producto3.png',
    },
  },
  {
    id: 4,
    name: 'Producto 4',
    price: 1600,
    line: '',
    collection: '',
    images: {
      primary: '/images/producto4.png',
      secondary: '/images/producto4.png',
    },
  },
  {
    id: 5,
    name: 'Producto 5',
    price: 1800,
    line: '',
    collection: '',
    images: {
      primary: '/images/producto5.png',
      secondary: '/images/producto5.png',
    },
  },
  {
    id: 6,
    name: 'Producto 6',
    price: 2000,
    line: '',
    collection: '',
    images: {
      primary: '/images/producto6.png',
      secondary: '/images/producto6.png',
    },
  },
  {
    id: 7,
    name: 'Producto 7',
    price: 2200,
    line: '',
    collection: '',
    images: {
      primary: '/images/producto7.png',
      secondary: '/images/producto7.png',
    },
  },
  {
    id: 8,
    name: 'Producto 8',
    price: 2400,
    line: '',
    collection: '',
    images: {
      primary: '/images/producto8.png',
      secondary: '/images/producto8.png',
    },
  },
];

export default products;
