import { BUSINESS_CONFIG } from '../data/business';

export function Footer() {
  const footerLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer
      id="main-footer"
      className="bg-[#0F1114] border-t border-[#1A1E24] text-[#94A3B8] pt-12 pb-24 sm:pb-16 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#1A1E24]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div>
              <span className="font-heading text-xl font-bold text-[#F8FAFC] tracking-tight">
                {BUSINESS_CONFIG.name}
              </span>
              <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-medium mt-0.5">
                {BUSINESS_CONFIG.tagline}
              </p>
            </div>
            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              {BUSINESS_CONFIG.address.fullFormatted}
            </p>
            <p className="text-sm font-semibold text-[#F8FAFC]">
              {BUSINESS_CONFIG.phoneFormatted}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-7 flex flex-wrap gap-y-3 gap-x-8 md:justify-end items-start pt-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                id={`footer-link-${link.href.replace('#', '')}`}
                href={link.href}
                className="text-sm text-[#F8FAFC]/80 hover:text-[#EA580C] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] rounded"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer note from CF Web Studio */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]/70">
          <p>© {new Date().getFullYear()} {BUSINESS_CONFIG.name}. Todos os direitos reservados.</p>
          <p className="text-center sm:text-right max-w-md">
            {BUSINESS_CONFIG.studioDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
