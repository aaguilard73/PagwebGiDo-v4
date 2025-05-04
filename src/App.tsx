import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import FeaturedProducts from './components/FeaturedProducts';
import CatalogDownload from './components/CatalogDownload';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import { skipTabbableElements } from './utils/accessibility';

function App() {
  useEffect(() => {
    // Set up skip link behavior
    skipTabbableElements();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>
      <ScrollProgress />
      <BackToTop />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Collections />
        <FeaturedProducts />
        <CatalogDownload />
      </main>
      <Footer />
    </>
  );
}

export default App;