// src/components/About.tsx

import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useTransform, useScroll } from 'framer-motion';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Zoom lento aplicado al video
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="quienes-somos" ref={ref} className="section-padding bg-primary relative overflow-hidden">
      {/* Fondo animado igual que en Hero */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-primary" />
      </motion.div>

      {/* Contenido principal */}
      <div ref={sectionRef} className="container relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Texto */}
          <motion.div variants={itemVariants} className="order-2 md:order-1 text-justify text-white">
            <h2>El latido de un taller, el pulso de una visión</h2>
            <p className="text-lg">
              Lo que comenzó como un experimento entre planos y maquetas se transformó en un santuario de creatividad: un taller donde cada herramienta resuena como un martillo de arquitecto y cada joya brota de un boceto que desafía los límites.
            </p>
            <p className="text-lg mb-6">
              Aquí, la plata late al ritmo de la lima y el pulido: utilizamos la proporción áurea, el juego del vacío y el lleno, y materiales como perlas Biwa, arcilla de Oaxaca y hasta meteorito, para construir miniestructuras que dialogan con tu propio espacio interior.
            </p>
            <a href="/nuestra-historia" className="btn btn-outline">
              Conoce Nuestra Trayectoria
            </a>
          </motion.div>

          {/* Video con zoom */}
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-2xl max-h-[500px] w-full"
              style={{ scale }}
            >
              <motion.video
                src="/images/videoabout.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-black/10 rounded-xl pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
