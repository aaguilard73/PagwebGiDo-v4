// src/App.tsx

import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Trayectoria from './components/Trayectoria';
import Collections from './components/Collections';
import FeaturedProducts from './components/FeaturedProducts';
import CatalogDownload from './components/CatalogDownload';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import { skipTabbableElements } from './utils/accessibility';

function App() {
  const [showTrayectoria, setShowTrayectoria] = useState(false);
  const trayectoriaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    skipTabbableElements();
  }, []);

  useEffect(() => {
    if (showTrayectoria && trayectoriaRef.current) {
      setTimeout(() => {
        trayectoriaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [showTrayectoria]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>
      <ScrollProgress />
      <BackToTop />
      <Header />

      {!showTrayectoria ? (
        <main id="main-content">
          <Hero />
          <About onShowTrayectoria={() => setShowTrayectoria(true)} />
          <Collections />
          <FeaturedProducts />
          <CatalogDownload />
        </main>
      ) : (
        <div ref={trayectoriaRef}>
          <Trayectoria
            onClose={() => {
              setShowTrayectoria(false);
              setTimeout(() => {
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
          />
        </div>
      )}

      {!showTrayectoria && <Footer />}
    </>
  );
}

export default App;
