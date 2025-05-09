import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Inicio' },
  { id: 'quienes-somos', label: 'Quiénes Somos' },
  { id: 'colecciones', label: 'Colecciones' },
  { id: 'destacados', label: 'Destacados' },
  { id: 'catalogo-pdf', label: 'Catálogo' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1, when: 'afterChildren' },
    },
  };

  const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -20, opacity: 0 },
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300"
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Gi.Do"
            className="h-16 w-auto max-h-16 transition-all duration-300"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-gray-800 hover:text-red-800 font-medium transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-800 p-2"
          onClick={() => setMobileMenuOpen(o => !o)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <motion.nav
        id="mobile-menu"
        className="md:hidden bg-white overflow-hidden"
        initial="closed"
        animate={mobileMenuOpen ? 'open' : 'closed'}
        variants={navVariants}
      >
        <motion.ul className="flex flex-col py-4">
          {navItems.map(item => (
            <motion.li key={item.id} variants={itemVariants}>
              <a
                href={`#${item.id}`}
                className="block py-3 px-6 text-gray-800 hover:text-red-800 hover:bg-gray-50 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </header>
  );
};

export default Header;
