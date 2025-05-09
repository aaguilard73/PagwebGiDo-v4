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
  const [showAudioHint, setShowAudioHint] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
    setShowPlayButton(isMobileDevice);
    setShowAudioHint(isMobileDevice);
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setShowPlayButton(false);
      setShowAudioHint(false);
    }
  };

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

  return (
    <section
      id="trayectoria"
      ref={ref}
      className="relative py-24 px-6 bg-dark text-light overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0 bg-dark" style={{ y, opacity }} />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Video con botón de reproducción y mensaje */}
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
          {showAudioHint && (
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded shadow-md animate-fade-in">
              🔊 Activa el sonido
            </div>
          )}
        </motion.div>

        {/* Tarjetas encapsuladas */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-semibold text-white mb-2">
            Una historia que se construye en capas, como la plata
          </motion.h2>

          {[ // Story blocks encapsulated
            "Algunos comienzan con una idea. Nosotros comenzamos con una inquietud: ¿Y si la arquitectura pudiera abrazarse?",
            "Así nació Gi.Do. Como una búsqueda entre disciplinas. Entre los trazos de la ingeniería y los silencios del arte. Entre estructuras que sostienen ciudades… y otras que sostienen memorias.",
            "No vinimos a diseñar joyas decorativas. Vinimos a levantar micromundos simbólicos.",
            "Más de 20 años después, seguimos combinando técnicas ancestrales con geometría pura, piedras que nacen del corazón de la Tierra con metales que narran el paso del tiempo.",
            "Cada colección no solo refleja una etapa de Gi.Do. Es también una huella de evolución personal, artística y emocional.",
            "Porque para nosotros, crear joyería es una forma de habitar el mundo, desde la precisión, la emoción y la belleza."
          ].map((text, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 border border-white/20 rounded-lg p-6 shadow-md text-sm sm:text-base"
            >
              {text}
            </motion.div>
          ))}

          {/* Botón Volver */}
          <motion.div variants={itemVariants} className="pt-4">
            <button
              onClick={onClose}
              className="text-sm text-gray-300 border border-gray-400 px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              Volver al sitio
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trayectoria;
