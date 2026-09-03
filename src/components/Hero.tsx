import { MessageCircle, ArrowDown } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppOrderUrl } from '../data/business';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background Graphic & Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1800&q=80"
          alt="Pizza artesanal fresca saindo do forno com queijo derretido e massa crocante"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-90 contrast-105"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121417]/85 via-[#121417]/95 to-[#121417]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Discrete Brand Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1E24] border border-[#2E3642] text-xs font-semibold uppercase tracking-widest text-[#EA580C] mb-6 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" aria-hidden="true" />
          <span>{BUSINESS_CONFIG.badge}</span>
        </div>

        {/* Single H1 for SEO and Clear Semantic Hierarchy */}
        <h1
          id="hero-title"
          className="font-heading font-bold text-[#F8FAFC] tracking-tight leading-[1.15] mb-6 text-3xl sm:text-5xl lg:text-6xl max-w-4xl mx-auto"
        >
          {BUSINESS_CONFIG.headline}
        </h1>

        {/* Subheadline */}
        <p
          id="hero-subtitle"
          className="text-base sm:text-lg lg:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {BUSINESS_CONFIG.subheadline}
        </p>

        {/* Call to Actions */}
        <div
          id="hero-cta-group"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
        >
          <a
            id="hero-primary-cta"
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-base px-8 py-3.5 rounded-lg shadow-md transition-all duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121417]"
          >
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Pedir pelo WhatsApp</span>
          </a>

          <a
            id="hero-secondary-cta"
            href="#cardapio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1A1E24] hover:bg-[#222730] text-[#F8FAFC] border border-[#2E3642] hover:border-[#94A3B8]/40 font-semibold text-base px-7 py-3.5 rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94A3B8]"
          >
            <span>Ver Cardápio</span>
            <ArrowDown className="w-4 h-4 text-[#94A3B8] shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
