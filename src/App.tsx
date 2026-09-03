import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = ['inicio', 'cardapio', 'sobre', 'localizacao', 'contato'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#121417] text-[#F8FAFC]">
      {/* Header */}
      <Header activeSection={activeSection} />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        <Hero />
        <MenuSection />
        <AboutSection />
        <LocationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

