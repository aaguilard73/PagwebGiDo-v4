import type { Product } from '../types';
import producto1 from '../../src/assets/images/producto1.png';
import producto2 from '../../src/assets/images/producto2.png';
import producto3 from '../../src/assets/images/producto3.png';
import producto4 from '../../src/assets/images/producto4.png';
import producto5 from '../../src/assets/images/producto5.png';
import producto6 from '../../src/assets/images/producto6.png';
import producto7 from '../../src/assets/images/producto7.png';
import producto8 from '../../src/assets/images/producto8.png';

export const products: Product[] = [
  {
    id: 'producto1',
    name: 'Producto 1',
    price: 1000,
    description: 'Descripción breve del producto 1.',
    images: {
      primary: producto1,
      secondary: producto1,
    },
  },
  {
    id: 'producto2',
    name: 'Producto 2',
    price: 1200,
    description: 'Descripción breve del producto 2.',
    images: {
      primary: producto2,
      secondary: producto2,
    },
  },
  {
    id: 'producto3',
    name: 'Producto 3',
    price: 1400,
    description: 'Descripción breve del producto 3.',
    images: {
      primary: producto3,
      secondary: producto3,
    },
  },
  {
    id: 'producto4',
    name: 'Producto 4',
    price: 1600,
    description: 'Descripción breve del producto 4.',
    images: {
      primary: producto4,
      secondary: producto4,
    },
  },
  {
    id: 'producto5',
    name: 'Producto 5',
    price: 1800,
    description: 'Descripción breve del producto 5.',
    images: {
      primary: producto5,
      secondary: producto5,
    },
  },
  {
    id: 'producto6',
    name: 'Producto 6',
    price: 2000,
    description: 'Descripción breve del producto 6.',
    images: {
      primary: producto6,
      secondary: producto6,
    },
  },
  {
    id: 'producto7',
    name: 'Producto 7',
    price: 2200,
    description: 'Descripción breve del producto 7.',
    images: {
      primary: producto7,
      secondary: producto7,
    },
  },
  {
    id: 'producto8',
    name: 'Producto 8',
    price: 2400,
    description: 'Descripción breve del producto 8.',
    images: {
      primary: producto8,
      secondary: producto8,
    },
  },
];

export default products;
