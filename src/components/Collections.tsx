import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import collections from '../data/collections';

const Collections = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemsPerView = { mobile: 1, tablet: 2, desktop: 3 };
  
  const getVisibleItems = () => {
    if (window.innerWidth < 640) return itemsPerView.mobile;
    if (window.innerWidth < 1024) return itemsPerView.tablet;
    return itemsPerView.desktop;
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    const visibleItems = getVisibleItems();
    const maxIndex = collections.length - visibleItems;
    setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="colecciones" ref={ref} className="section-padding bg-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2>Cinco universos para dibujar tu propia narrativa</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Elige la línea que susurre tu voz interior.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideVariants}
            className="flex items-center"
          >
            <button
              onClick={handlePrev}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-dark hover:text-primary transition-colors mr-4 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={activeIndex === 0}
              aria-label="Anterior colección"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="overflow-hidden" ref={sliderRef}>
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${activeIndex * (100 / getVisibleItems())}%)`,
                  width: `${(collections.length * 100) / getVisibleItems()}%`
                }}
              >
                {collections.map((collection, index) => (
                  <motion.div
                    key={collection.id}
                    variants={itemVariants}
                    className="px-2"
                    style={{ width: `${100 / collections.length}%` }}
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={collection.image}
                          alt={collection.name}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold">{collection.name}</h3>
                        <p className="mt-2">{collection.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-dark hover:text-primary transition-colors ml-4 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={activeIndex >= collections.length - getVisibleItems()}
              aria-label="Siguiente colección"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>

          {/* Mobile controls */}
          <div className="flex justify-center mt-6 md:hidden">
            <button
              onClick={handlePrev}
              className="mx-2 p-2 rounded-full bg-white shadow-md text-dark hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={activeIndex === 0}
              aria-label="Anterior colección"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="mx-2 p-2 rounded-full bg-white shadow-md text-dark hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={activeIndex >= collections.length - getVisibleItems()}
              aria-label="Siguiente colección"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;