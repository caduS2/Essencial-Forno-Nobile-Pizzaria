import { Flame, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/business';

export function AboutSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#EA580C]" aria-hidden="true" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#EA580C]" aria-hidden="true" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 text-[#EA580C]" aria-hidden="true" />;
      default:
        return <Flame className="w-5 h-5 text-[#EA580C]" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="sobre"
      className="py-16 sm:py-20 lg:py-24 bg-[#1A1E24] border-t border-[#2E3642]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Photograph */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#2E3642] shadow-xl bg-[#222730] aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
              <img
                src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=1000&q=80"
                alt="Massa artesanal sendo preparada à mão com farinha e técnicas tradicionais"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Text & Differentials */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222730] border border-[#2E3642] text-xs font-semibold uppercase tracking-wider text-[#EA580C] w-fit mb-4">
              Nossa Proposta
            </div>

            <h2
              id="about-section-title"
              className="font-heading text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight mb-6"
            >
              Pizza feita para reunir.
            </h2>

            <p
              id="about-section-text"
              className="text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-8 font-normal"
            >
              {BUSINESS_CONFIG.aboutText}
            </p>

            {/* Exactly 3 Differentials */}
            <div
              id="about-differentials-list"
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[#2E3642]"
            >
              {BUSINESS_CONFIG.differentials.map((item, idx) => (
                <div
                  key={idx}
                  id={`differential-item-${idx}`}
                  className="bg-[#222730] p-4 rounded-xl border border-[#2E3642]/80 flex flex-col gap-2"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1A1E24] border border-[#2E3642] flex items-center justify-center shrink-0">
                    {getIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#F8FAFC] mb-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-xs text-[#94A3B8] leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
