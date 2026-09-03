import { MessageCircle } from 'lucide-react';
import { getWhatsAppOrderUrl } from '../data/business';

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento rápido via WhatsApp">
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppOrderUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fazer pedido pelo WhatsApp da Forno Nobile"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#EA580C]/40 group"
      >
        <MessageCircle className="w-7 h-7" aria-hidden="true" />
        <span className="sr-only">Pedir pelo WhatsApp</span>
      </a>
    </aside>
  );
}
