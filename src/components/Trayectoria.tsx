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
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

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
      className="relative min-h-screen bg-black text-white px-4 sm:px-6 py-16 overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0 bg-black" style={{ y, opacity }} />

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 items-center">

        {/* Video superior */}
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

        {/* Tarjetas con animación flip y números destacados */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {storytelling.map((text, index) => (
            <motion.div
              key={index}
              className="relative w-full h-64 [transform-style:preserve-3d] [perspective:1000px]"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`w-full h-full transition-transform duration-700 rounded-xl relative [transform-style:preserve-3d] ${flippedIndex === index ? 'rotate-y-180' : ''}`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl flex flex-col justify-center items-center p-4 backface-hidden">
                  <div className="text-[5rem] font-black text-white/20 mb-2 drop-shadow-sm">
                    {index + 1}
                  </div>
                  <button
                    className="text-sm text-white bg-white/10 border border-white/20 px-4 py-2 rounded-full hover:bg-white/20 transition"
                    onClick={() => setFlippedIndex(index)}
                  >
                    Presiona aquí
                  </button>
                </div>

                {/* Back */}
                <div className="absolute inset-0 rotate-y-180 bg-white/10 border border-white/10 rounded-xl flex flex-col justify-between p-4 backface-hidden">
                  <p className="text-white text-sm leading-relaxed">
                    {text}
                  </p>
                  <button
                    className="text-xs text-white/80 mt-4 border border-white/20 px-3 py-1 rounded-full hover:bg-white/20 transition"
                    onClick={() => setFlippedIndex(null)}
                  >
                    Volver
                  </button>
                </div>
              </div>
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
