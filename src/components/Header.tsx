import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppOrderUrl } from '../data/business';

interface HeaderProps {
  activeSection?: string;
}

export function Header({ activeSection = 'inicio' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#121417]/95 backdrop-blur-sm border-b border-[#2E3642] shadow-sm'
          : 'bg-[#121417] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="header-brand-link"
          href="#inicio"
          className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] rounded"
        >
          <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#EA580C] transition-colors">
            FORNO NOBILE
          </span>
          <span className="text-[11px] sm:text-xs font-medium uppercase tracking-widest text-[#94A3B8]">
            {BUSINESS_CONFIG.tagline}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          id="desktop-navigation"
          aria-label="Navegação principal"
          className="hidden md:flex items-center space-x-7"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#EA580C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] rounded px-1 py-0.5 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-[#EA580C]'
                  : 'text-[#F8FAFC]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            id="header-cta-desktop"
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121417]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Pedir pelo WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            id="header-cta-mobile-mini"
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir pelo WhatsApp"
            className="inline-flex items-center justify-center p-2 rounded-lg bg-[#EA580C] text-white hover:bg-[#C2410C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
          </a>
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-[#F8FAFC] hover:text-white hover:bg-[#1A1E24] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#1A1E24] border-b border-[#2E3642] px-4 pt-2 pb-6 space-y-3"
        >
          <nav aria-label="Navegação mobile" className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`mobile-nav-link-${link.href.replace('#', '')}`}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-3 rounded-md text-base font-medium text-[#F8FAFC] hover:bg-[#222730] hover:text-[#EA580C] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              id="mobile-menu-whatsapp-btn"
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold px-4 py-3 rounded-lg text-center transition-colors shadow-sm"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Pedir pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
