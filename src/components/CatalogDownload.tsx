import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const CatalogDownload = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="catalogo-pdf" className="bg-primary text-white py-20" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tu pasaporte al mundo Gi.Do</h2>
          <p className="text-lg mb-8">
            Descarga el PDF con nuestras 50-60 creaciones (desde perlas Biwa hasta meteorito) y sumérgete en la narrativa completa de cada diseño, su historia y su alma.
          </p>
          <motion.a
            href="#"
            className="btn btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={20} />
            <span>Descargar Catálogo</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogDownload;