// src/types/index.ts

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  line: string;
  collection: string;
  images: {
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
