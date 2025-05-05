// src/data/products.ts

import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Aretes Aurora",
    price: 1250,
    line: "arquetipika",
    collection: "arquetipika",
    images: {
      primary: "/images/producto1.png",
      secondary: "/images/producto2.png"
    }
  },
  {
    id: 2,
    name: "Collar Lumina",
    price: 2350,
    line: "luminika",
    collection: "luminika",
    images: {
      primary: "/images/producto3.png",
      secondary: "/images/producto4.png"
    }
  },
  {
    id: 3,
    name: "Pulsera Geometría",
    price: 1850,
    line: "antropika",
    collection: "antropika",
    images: {
      primary: "/images/producto5.png",
      secondary: "/images/producto6.png"
    }
  },
  {
    id: 4,
    name: "Anillo Jardín",
    price: 1450,
    line: "jardinsEtFleurs",
    collection: "jardinsEtFleurs",
    images: {
      primary: "/images/producto7.png",
      secondary: "/images/producto8.png"
    }
  }
];

export default products;
