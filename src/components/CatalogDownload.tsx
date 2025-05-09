import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download } from 'lucide-react';

const catalogs = [
  { name: 'KROMÁTIKA', file: 'kromatika.pdf' },
  { name: 'JARDINS ET FLEURS', file: 'jardins-et-fleurs.pdf' },
  { name: 'ARKETÍPIKA', file: 'arketipika.pdf' },
  { name: 'LUMÍNIKA', file: 'luminika.pdf' },
  { name: 'ANTRÓPIKA', file: 'antropika.pdf' },
];

const CatalogDownload = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="catalogo-pdf"
      ref={ref}
      className="relative bg-primary text-white py-20 overflow-hidden"
    >
      {/* Fondo animado tipo Hero */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-primary" />
      </motion.div>

      {/* Contenido principal */}
      <div ref={sectionRef} className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tu pasaporte al mundo Gi.Do
          </h2>
          <p className="text-base sm:text-lg mb-8">
            Descarga los catálogos de cada una de nuestras colecciones y explora sus universos únicos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {catalogs.map((cat) => (
              <motion.a
                key={cat.file}
                href={`/catalogos/${cat.file}`}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
              >
                <Download size={20} />
                <span>{cat.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogDownload;
