import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TrayectoriaProps {
  onClose: () => void;
}

const Trayectoria: React.FC<TrayectoriaProps> = ({ onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    setShowPlayButton(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayButton(false);
    }
  };

  return (
    <section
      id="trayectoria"
      ref={ref}
      className="relative py-24 px-6 bg-dark text-light overflow-hidden"
    >
      {/* Fondo animado */}
      <motion.div className="absolute inset-0 z-0 bg-dark" style={{ y, opacity }} />

      {/* Contenido principal */}
      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Video con botón de reproducción en móviles */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-xl overflow-hidden shadow-2xl"
        >
          <video
            ref={videoRef}
            src="/video1.mp4"
            autoPlay={!isMobile}
            loop
            controls
            playsInline
            muted={isMobile}
            className="w-full h-auto object-cover"
          />
          {showPlayButton && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-lg font-semibold hover:bg-black/70 transition"
            >
              ▶ Reproducir Video
            </button>
          )}
        </motion.div>

        {/* Texto narrativo animado */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-6 text-lg sm:text-xl leading-relaxed"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Una historia que se construye en capas, como la plata
          </motion.h2>

          <motion.p variants={itemVariants}>
            Algunos comienzan con una idea.  <br />Nosotros comenzamos con una inquietud:  <br /><strong>¿Y si la arquitectura pudiera abrazarse?</strong>
          </motion.p>

          <motion.p variants={itemVariants}>
            Así nació Gi.Do. Como una búsqueda entre disciplinas.  Entre los trazos de la ingeniería y los silencios del arte.  Entre estructuras que sostienen ciudades… y otras que sostienen memorias.
          </motion.p>

          <motion.p variants={itemVariants}>
            No vinimos a diseñar joyas decorativas.  <strong>Vinimos a levantar micromundos simbólicos.</strong>
          </motion.p>

          <motion.p variants={itemVariants}>
            Más de 20 años después, seguimos combinando técnicas ancestrales con geometría pura,  piedras que nacen del corazón de la Tierra con metales que narran el paso del tiempo.
          </motion.p>

          <motion.p variants={itemVariants}>
            Cada colección no solo refleja una etapa de Gi.Do.  Es también una huella de evolución personal, artística y emocional.
          </motion.p>

          <motion.p variants={itemVariants}>
            Porque para nosotros, <strong>crear joyería es una forma de habitar el mundo</strong>,  desde la precisión, la emoción y la belleza.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-6">
            <a
              href="#colecciones"
              onClick={onClose}
              className="inline-block bg-white text-black font-medium px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Explora Nuestras Colecciones
            </a>
          </motion.div>

          {/* Botón Volver */}
          <motion.div variants={itemVariants} className="pt-8">
            <button
              onClick={onClose}
              className="text-sm text-gray-300 hover:text-white underline"
            >
              ← Volver al sitio
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trayectoria;

