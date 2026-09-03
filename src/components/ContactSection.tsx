import { useState, FormEvent } from 'react';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppOrderUrl, getWhatsAppCustomMessageUrl } from '../data/business';

export function ContactSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppCustomMessageUrl(name, message);
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened || opened.closed || typeof opened.closed === 'undefined') {
      window.location.assign(url);
    }
  };

  return (
    <section
      id="contato"
      className="py-16 sm:py-20 lg:py-24 bg-[#1A1E24] border-t border-[#2E3642]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#222730] border border-[#2E3642] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#EA580C]/15 border border-[#EA580C]/30 text-[#EA580C] mb-6">
            <MessageCircle className="w-7 h-7" aria-hidden="true" />
          </div>

          <h2
            id="contact-section-title"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC] tracking-tight mb-4"
          >
            Bateu a vontade?
          </h2>

          <p
            id="contact-section-desc"
            className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto mb-6"
          >
            Fale com a Forno Nobile pelo WhatsApp e faça seu pedido.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A1E24] border border-[#2E3642] text-sm text-[#F8FAFC] mb-8">
            <Phone className="w-4 h-4 text-[#EA580C]" aria-hidden="true" />
            <span className="font-semibold">{BUSINESS_CONFIG.phoneFormatted}</span>
          </div>

          {/* Direct CTA button */}
          <div className="mb-10">
            <a
              id="contact-main-whatsapp-cta"
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222730]"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Fazer pedido pelo WhatsApp</span>
            </a>
          </div>

          {/* Simple optional quick message sender */}
          <div className="pt-8 border-t border-[#2E3642]/80 max-w-lg mx-auto text-left">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-4 text-center">
              Ou envie uma mensagem direta
            </h3>

            <form id="contact-quick-form" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name-input"
                  className="block text-xs font-medium text-[#F8FAFC] mb-1"
                >
                  Seu Nome
                </label>
                <input
                  id="contact-name-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Carlos Oliveira"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1E24] border border-[#2E3642] text-[#F8FAFC] placeholder-[#94A3B8]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message-input"
                  className="block text-xs font-medium text-[#F8FAFC] mb-1"
                >
                  Mensagem (opcional)
                </label>
                <textarea
                  id="contact-message-input"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex: Gostaria de saber os sabores disponíveis para entrega hoje."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#1A1E24] border border-[#2E3642] text-[#F8FAFC] placeholder-[#94A3B8]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:border-transparent transition-colors resize-none"
                />
              </div>

              <button
                id="contact-form-submit-btn"
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2E3642] hover:bg-[#384252] text-[#F8FAFC] font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
              >
                <Send className="w-4 h-4 text-[#EA580C]" aria-hidden="true" />
                <span>Enviar pelo WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
