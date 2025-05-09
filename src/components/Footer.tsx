import React, { useRef } from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.footer
      ref={(el) => {
        ref.current = el;
        inViewRef(el);
      }}
      className="bg-dark text-light/80"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* 🌐 VERSIÓN COMPLETA */}
      <div className="hidden sm:block py-12">
        <div className="container px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Marca + redes */}
            <div>
              <a href="#" className="text-2xl font-bold text-white mb-4 inline-block">
                Gi.Do
              </a>
              <p className="mb-4">Alta joyería arquitectónica en plata.</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/gi.do_joyeria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors duration-300">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Enlaces */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li><a href="#quienes-somos" className="hover:text-accent transition-colors">Sobre Nosotros</a></li>
                <li><a href="#colecciones" className="hover:text-accent transition-colors">Colecciones</a></li>
                <li><a href="#destacados" className="hover:text-accent transition-colors">Destacados</a></li>
                <li><a href="#catalogo-pdf" className="hover:text-accent transition-colors">Catálogo</a></li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contacto</h3>
              <ul className="space-y-3 text-sm sm:text-base leading-relaxed">
                <li className="flex items-center">
                  <Phone size={20} className="mr-2 flex-shrink-0" />
                  <a
                    href="https://wa.me/525512345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    +52 55 1234 5678
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-2 flex-shrink-0" />
                  <a
                    href="mailto:contacto@gido.mx"
                    className="hover:text-accent transition-colors"
                  >
                    contacto@gido.mx
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Gi.Do - Arquitectura en Plata. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>

      {/* 📱 VERSIÓN COMPACTA (solo móvil) */}
      <div className="block sm:hidden py-10 px-6 text-center space-y-6">
        <a href="#" className="text-2xl font-bold text-white inline-block">
          Gi.Do
        </a>
        <p className="text-sm text-white/70">Alta joyería en plata</p>

        <div className="flex justify-center space-x-4">
          <a
            href="https://www.instagram.com/gi.do_joyeria/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition"
          >
            <Instagram size={18} />
          </a>
          <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition">
            <Facebook size={18} />
          </a>
          <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent transition">
            <Twitter size={18} />
          </a>
        </div>

        <div className="text-sm space-y-2 text-white/80">
          <div className="flex items-center justify-center gap-2">
            <Phone size={16} />
            <a
              href="https://wa.me/525512345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              +52 55 1234 5678
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail size={16} />
            <a
              href="mailto:contacto@gido.mx"
              className="hover:text-accent transition-colors"
            >
              contacto@gido.mx
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-white/50 text-xs">
          &copy; {new Date().getFullYear()} Gi.Do
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
