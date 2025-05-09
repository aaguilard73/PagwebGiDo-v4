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
    const hash = window.location.hash;
    if (hash === '#trayectoria' && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
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
        {/* Video de trayectoria */}
        <div className="mb-12">
          <video
            src="/videos/trayectoria.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Tarjetas visibles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 shadow rounded">Tarjeta 1</div>
          <div className="bg-white p-6 shadow rounded">Tarjeta 2</div>
          <div className="bg-white p-6 shadow rounded">Tarjeta 3</div>
          {/* Puedes agregar más aquí */}
        </div>

        {/* Botón funcional */}
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
