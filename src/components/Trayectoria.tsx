// src/components/Trayectoria.tsx

import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface TrayectoriaProps {
  onClose: () => void;
}

const Trayectoria: React.FC<TrayectoriaProps> = ({ onClose }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section
      id="trayectoria"
      ref={sectionRef}
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-20 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl"
      >
        {/* VIDEO: autoplay, muted, loop, sin controles */}
        <div className="mb-12">
          <video
            src="/video1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* TARJETAS: oscuras, numeradas, botón "Presiona aquí" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="bg-gray-900 text-white flex flex-col items-center justify-center rounded-lg h-40"
            >
              <div className="text-5xl font-bold mb-4">{n}</div>
              <button className="bg-white text-black px-4 py-2 rounded-full shadow">
                Presiona aquí
              </button>
            </div>
          ))}
        </div>

        {/* BOTÓN: volver al sitio */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-black text-white px-6 py-3 rounded-full shadow hover:bg-gray-800 transition"
          >
            Volver al sitio
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Trayectoria;
