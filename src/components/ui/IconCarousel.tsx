import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IconFeature } from '../../types';

interface IconCarouselProps {
  icons: IconFeature[];
}

const IconCarousel: React.FC<IconCarouselProps> = ({ icons }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === icons.length - 3 ? 0 : prevIndex + 1
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, [icons.length]);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => 
      prev < icons.length - 3 ? prev + 1 : icons.length - 3
    );
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center mb-8 text-white"
      aria-label="Características"
    >
      <button
        onClick={handlePrev}
        className="p-1 hover:text-accent transition-colors"
        disabled={activeIndex === 0}
        aria-label="Anterior característica"
      >
        <ChevronLeft size={24} />
      </button>
      
      <div className="overflow-hidden w-64 sm:w-96 mx-2">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * (100 / icons.length)}%)`, width: `${icons.length * 100}%` }}
        >
          {icons.map((icon, index) => {
            const Icon = icon.icon;
            return (
              <div 
                key={icon.id} 
                className="flex flex-col items-center justify-center"
                style={{ width: `${100 / icons.length}%` }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-2">
                  <Icon size={24} className="text-accent" />
                </div>
                <span className="text-xs sm:text-sm text-center px-2">{icon.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      
      <button
        onClick={handleNext}
        className="p-1 hover:text-accent transition-colors"
        disabled={activeIndex >= icons.length - 3}
        aria-label="Siguiente característica"
      >
        <ChevronRight size={24} />
      </button>
    </motion.div>
  );
};

export default IconCarousel;