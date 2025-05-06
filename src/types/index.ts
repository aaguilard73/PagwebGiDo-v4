// src/types/index.ts

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string; // ✅ Nuevo: para mostrar la descripción
  images: {             // ✅ Cambiado: ahora son dos imágenes
    primary: string;
    secondary: string;
  };
};

export type Collection = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type IconFeature = {
  id: string;
  name: string;
  icon: string;
};
