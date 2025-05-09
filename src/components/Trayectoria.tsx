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

  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const storytelling = [
    "Algunos comienzan con una idea. Nosotros comenzamos con una inquietud: ¿Y si la arquitectura pudiera abrazarse?",
    "Así nació Gi.Do. Como una búsqueda entre disciplinas. Entre los trazos de la ingeniería y los silencios del arte. Entre estructuras que sostienen ciudades… y otras que sostienen memorias.",
    "No vinimos a diseñar joyas decorativas. Vinimos a levantar micromundos simbólicos.",
    "Más de 20 años después, seguimos combinando técnicas ancestrales con geometría pura, piedras que nacen del corazón de la Tierra con metales que narran el paso del tiempo.",
    "Cada colección no solo refleja una etapa de Gi.Do. Es también una huella de evolución personal, artística y emocional.",
    "Porque para nosotros, crear joyería es una forma de habitar el mundo, desde la precisión, la emoción y la belleza."
  ];

  return (
    <section
      id="trayectoria"
      ref={ref}
      className="relative min-h-screen bg-dark text-white px-4 sm:px-6 py-16 overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0 bg-dark" style={{ y, opacity }} />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 items-center">

        {/* Video en parte superior */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-xl"
        >
          <video
            ref={videoRef}
            src="/video1.mp4"
            autoPlay={!isMobile}
            loop
            controls
            playsInline
            muted={isMobile}
            className="w-full h-[220px] sm:h-[280px] md:h-[300px] object-cover"
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
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded shadow-md animate-pulse">
              🔊 Activa el sonido
            </div>
          )}
        </motion.div>

        {/* Tarjetas estilo Pokémon con números destacados */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {storytelling.map((text, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group bg-white/10 text-white border border-white/10 p-6 rounded-xl shadow-lg hover:scale-[1.03] hover:shadow-2xl transition duration-300 backdrop-blur"
            >
              <div className="absolute -top-5 -left-5 bg-gradient-to-br from-white/70 to-white/30 text-dark w-12 h-12 flex items-center justify-center font-bold text-xl rounded-full border border-white/20 shadow-md">
                {index + 1}
              </div>
              <p className="text-sm sm:text-base leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={onClose}
            className="text-sm text-gray-300 border border-gray-400 px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Volver al sitio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Trayectoria;
