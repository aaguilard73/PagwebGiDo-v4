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
        {/* VIDEO ✅ Usa video1.mp4 que sí tienes en /public */}
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

        {/* TARJETAS ✅ Visibles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 shadow rounded text-center">
            <h3 className="text-lg font-semibold mb-2">Anillo de Plata</h3>
            <p className="text-gray-600 text-sm">Con perla negra natural</p>
          </div>
          <div className="bg-white p-6 shadow rounded text-center">
            <h3 className="text-lg font-semibold mb-2">Pulsera artesanal</h3>
            <p className="text-gray-600 text-sm">Diseño orgánico con ónix</p>
          </div>
          <div className="bg-white p-6 shadow rounded text-center">
            <h3 className="text-lg font-semibold mb-2">Collar minimal</h3>
            <p className="text-gray-600 text-sm">Estructura en plata mate</p>
          </div>
        </div>

        {/* BOTÓN FUNCIONAL ✅ */}
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
