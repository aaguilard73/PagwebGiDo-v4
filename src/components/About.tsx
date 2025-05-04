import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
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
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
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
          
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5370631/pexels-photo-5370631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Taller Gi.Do" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 to-transparent opacity-70"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;