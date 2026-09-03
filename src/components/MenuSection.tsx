import { PizzaCard } from './PizzaCard';
import { BUSINESS_CONFIG } from '../data/business';

export function MenuSection() {
  return (
    <section
      id="cardapio"
      className="py-16 sm:py-20 lg:py-24 bg-[#121417] border-t border-[#1A1E24]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2
            id="menu-section-title"
            className="font-heading text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight mb-3"
          >
            Escolha sua pizza
          </h2>
          <p
            id="menu-section-subtitle"
            className="text-base sm:text-lg text-[#94A3B8]"
          >
            Alguns sabores para deixar a escolha mais fácil.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          id="menu-items-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BUSINESS_CONFIG.menu.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  );
}
