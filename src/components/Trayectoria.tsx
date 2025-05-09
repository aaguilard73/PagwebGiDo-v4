import React, { useState } from 'react';
import { motion } from 'framer-motion';

const storyCards = [
  "Algunos comienzan con una idea. Nosotros comenzamos con una inquietud: ¿Y si la arquitectura pudiera abrazarse?",
  "Así nació Gi.Do. Como una búsqueda entre disciplinas. Entre los trazos de la ingeniería y los silencios del arte. Entre estructuras que sostienen ciudades… y otras que sostienen memorias.",
  "No vinimos a diseñar joyas decorativas. Vinimos a levantar micromundos simbólicos.",
  "Más de 20 años después, seguimos combinando técnicas ancestrales con geometría pura, piedras que nacen del corazón de la Tierra con metales que narran el paso del tiempo.",
  "Cada colección no solo refleja una etapa de Gi.Do. Es también una huella de evolución personal, artística y emocional.",
  "Porque para nosotros, crear joyería es una forma de habitar el mundo, desde la precisión, la emoción y la belleza."
];

const Trayectoria = () => {
  const [flipped, setFlipped] = useState(Array(storyCards.length).fill(false));

  const handleFlip = (index: number) => {
    setFlipped(prev => prev.map((f, i) => i === index ? !f : f));
  };

  return (
    <section id="trayectoria" className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Una historia que se construye en capas, como la plata</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center max-w-6xl mx-auto">
        {storyCards.map((text, index) => (
          <div key={index} className="relative perspective h-64">
            <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flipped[index] ? 'rotate-y-180' : ''}`}>
              
              {/* Front */}
              <motion.div
                className="absolute w-full h-full backface-hidden bg-gray-800 rounded-xl flex flex-col justify-center items-center shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="absolute text-8xl font-black text-white/10 pointer-events-none">{index + 1}</span>
                <button
                  onClick={() => handleFlip(index)}
                  className="z-10 mt-auto mb-8 px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
                >
                  Presiona aquí
                </button>
              </motion.div>

              {/* Back */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-900 rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-xl">
                <p className="text-base sm:text-lg mb-6">{text}</p>
                <button
                  onClick={() => handleFlip(index)}
                  className="px-5 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition"
                >
                  Volver
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Trayectoria;

     
