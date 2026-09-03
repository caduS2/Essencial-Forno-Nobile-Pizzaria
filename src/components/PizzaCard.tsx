import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { MenuItem } from '../types';
import { getWhatsAppOrderUrl } from '../data/business';

interface PizzaCardProps {
  key?: string;
  pizza: MenuItem;
}

export function PizzaCard({ pizza }: PizzaCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const orderUrl = getWhatsAppOrderUrl(pizza.orderMessageName || pizza.name);

  return (
    <article
      id={`menu-card-${pizza.id}`}
      className="group bg-[#1A1E24] border border-[#2E3642] rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-[#EA580C]/40 hover:shadow-lg focus-within:ring-2 focus-within:ring-[#EA580C]"
    >
      {/* Photo Container */}
      <div className="relative aspect-4/3 sm:aspect-16/11 bg-[#222730] overflow-hidden">
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 bg-[#222730] animate-pulse" />
        )}

        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#222730] text-[#94A3B8] p-4 text-center">
            <span className="text-3xl mb-1">🍕</span>
            <span className="text-xs font-medium">{pizza.name}</span>
          </div>
        ) : (
          <img
            src={pizza.image}
            alt={pizza.imageAlt}
            loading="lazy"
            decoding="async"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3
            id={`pizza-title-${pizza.id}`}
            className="font-heading text-lg font-bold text-[#F8FAFC] tracking-wide mb-2"
          >
            {pizza.name}
          </h3>
          <p
            id={`pizza-desc-${pizza.id}`}
            className="text-sm text-[#94A3B8] leading-relaxed line-clamp-2 min-h-[2.5rem]"
          >
            {pizza.description}
          </p>
        </div>

        <div className="pt-5 mt-4 border-t border-[#2E3642] flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[11px] font-medium uppercase tracking-wider text-[#94A3B8]">
              A partir de
            </span>
            <span
              id={`pizza-price-${pizza.id}`}
              className="text-lg font-bold text-[#F8FAFC]"
            >
              {pizza.price}
            </span>
          </div>

          <a
            id={`pizza-order-btn-${pizza.id}`}
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pedir pizza ${pizza.name} pelo WhatsApp por ${pizza.price}`}
            className="inline-flex items-center justify-center gap-1.5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Pedir</span>
          </a>
        </div>
      </div>
    </article>
  );
}
