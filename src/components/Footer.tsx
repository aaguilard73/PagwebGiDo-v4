import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light/80 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="#" className="text-2xl font-bold text-white mb-4 inline-block">
              Gi.Do
            </a>
            <p className="mb-4">Alta joyería arquitectónica en plata.</p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-accent hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-accent hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-accent hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#quienes-somos" className="hover:text-accent transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#colecciones" className="hover:text-accent transition-colors">
                  Colecciones
                </a>
              </li>
              <li>
                <a href="#destacados" className="hover:text-accent transition-colors">
                  Destacados
                </a>
              </li>
              <li>
                <a href="#catalogo-pdf" className="hover:text-accent transition-colors">
                  Catálogo
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1" />
                <span>Paseo de la Reforma 222, Juárez, 06600 Ciudad de México, CDMX</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>contacto@gido.mx</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-light/10 text-center text-light/60">
          <p>&copy; {new Date().getFullYear()} Gi.Do - Arquitectura en Plata. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;