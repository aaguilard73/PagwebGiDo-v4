import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0px", "30px"]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="quienes-somos" className="section-padding bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Texto Justificado */}
          <motion.div variants={itemVariants} className="order-2 md:order-1 text-justify">
            <h2>El latido de un taller, el pulso de una visión</h2>
            <p className="text-lg mb-4">
              Lo que comenzó como un experimento entre planos y maquetas se transformó en un santuario de creatividad: un taller donde cada herramienta resuena como un martillo de arquitecto y cada joya brota de un boceto que desafía los límites.
            </p>
            <p className="text-lg mb-6">
              Aquí, la plata late al ritmo de la lima y el pulido: utilizamos la proporción áurea, el juego del vacío y el lleno, y materiales como perlas Biwa, arcilla de Oaxaca y hasta meteorito, para construir miniestructuras que dialogan con tu propio espacio interior.
            </p>
            <a href="/nuestra-historia" className="btn btn-outline">
              Conoce Nuestra Trayectoria
            </a>
          </motion.div>

          {/* Video Cinematográfico con Parallax Sutil */}
          <motion.div 
            variants={itemVariants} 
            className="order-1 md:order-2"
          >
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-2xl"
              style={{ y }}
            >
              <motion.video
                src="/images/videoabout.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
              {/* Opcional: capa sutil para cinematic look */}
              <div className="absolute inset-0 bg-black/10 rounded-xl"></div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
