import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const iconItems = [
  { src: '/images/anillo.png', text: 'Diseño que cuenta tu historia' },
  { src: '/images/aretes.png', text: 'Luz y forma que enmarcan' },
  { src: '/images/collar.png', text: 'El centro de tu expresión' },
  { src: '/images/pulsera.png', text: 'Diseño que sigue tu pulso' },
  { src: '/images/anillo2.png', text: 'Tu esencia, estructura eterna' },
  { src: '/images/aretes2.png', text: 'Detalles que vibran contigo' },
  { src: '/images/collar2.png', text: 'Materiales nobles, diseño atemporal' },
  { src: '/images/pulsera2.png', text: 'Construye tu estilo, pieza a pieza' }
];

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Fondo con sombra */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url('/images/fondo-gido.png')`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Carrusel de íconos */}
      <div className="w-full overflow-hidden relative z-10 pt-6">
        <div className="animate-slide flex gap-x-8 sm:gap-x-10 lg:gap-x-12 items-center w-max px-4">
          {[...iconItems, ...iconItems].map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-2 min-w-max whitespace-nowrap"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-full p-2 shadow-md transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src={item.src}
                  alt={item.text}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                />
              </div>
              <span className="text-white text-xs sm:text-sm drop-shadow-sm transform transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:opacity-100">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container relative z-10 text-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 drop-shadow-md">
            Arquitectura en Plata
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 text-shadow">
            Imagina un plano en blanco que cobra vida al tacto de un diseñador: la plata se curva,
            se pliega y se eleva en cada trazo hasta convertirse en joyas que cuentan tu propia historia.
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-shadow">
            En Gi.Do llevamos dos décadas uniendo la precisión de la arquitectura con la delicadeza
            de la joyería, para que cada pieza sea un pequeño refugio de arte y emoción que habita tu piel.
          </p>
          <a
            href="#colecciones"
            className="inline-block bg-white text-black font-medium px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Explora Nuestras Colecciones
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
