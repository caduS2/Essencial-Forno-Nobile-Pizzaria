import { useState } from 'react';
import { MapPin, ExternalLink, Copy, Check, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/business';

export function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS_CONFIG.address.fullFormatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted in iframe
      const textArea = document.createElement('textarea');
      textArea.value = BUSINESS_CONFIG.address.fullFormatted;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="localizacao"
      className="py-16 sm:py-20 lg:py-24 bg-[#121417] border-t border-[#1A1E24]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2
            id="location-section-title"
            className="font-heading text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight mb-3"
          >
            Encontre a Forno Nobile
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Localizada no coração de São Paulo.
          </p>
        </div>

        <div className="bg-[#1A1E24] border border-[#2E3642] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Address Details */}
            <div className="md:col-span-7 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#222730] border border-[#2E3642] flex items-center justify-center shrink-0 text-[#EA580C]">
                <MapPin className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                  Endereço
                </span>
                <p
                  id="business-address-text"
                  className="text-lg sm:text-xl font-medium text-[#F8FAFC] leading-snug"
                >
                  {BUSINESS_CONFIG.address.street}
                  <br />
                  {BUSINESS_CONFIG.address.neighborhood}
                  <br />
                  {BUSINESS_CONFIG.address.cityState}
                </p>

                <div className="pt-3 flex items-center gap-2 text-sm text-[#94A3B8]">
                  <Clock className="w-4 h-4 text-[#EA580C] shrink-0" aria-hidden="true" />
                  <span id="business-hours-notice">{BUSINESS_CONFIG.hoursNotice}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <a
                id="location-map-btn"
                href={BUSINESS_CONFIG.address.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
              >
                <span>Ver no mapa</span>
                <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <button
                id="location-copy-btn"
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 bg-[#222730] hover:bg-[#2A313C] text-[#F8FAFC] border border-[#2E3642] font-semibold text-sm px-5 py-3 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94A3B8]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                    <span className="text-emerald-300 font-medium">Endereço copiado.</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#94A3B8] shrink-0" aria-hidden="true" />
                    <span>Copiar endereço</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
