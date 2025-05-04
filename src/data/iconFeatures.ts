import { IconFeature } from '../types';
import { Building2, Gem, Star, Trophy, Lightbulb } from 'lucide-react';

export const iconFeatures: IconFeature[] = [
  {
    id: "precision",
    name: "Precisión Arquitectónica",
    icon: Building2
  },
  {
    id: "artesania",
    name: "Artesanía Tradicional",
    icon: Trophy
  },
  {
    id: "materiales",
    name: "Materiales Exclusivos",
    icon: Gem
  },
  {
    id: "innovacion",
    name: "Innovación Continua",
    icon: Lightbulb
  },
  {
    id: "emocion",
    name: "Emoción y Diseño",
    icon: Star
  }
];

export default iconFeatures;