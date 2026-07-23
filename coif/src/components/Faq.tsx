import { useState } from 'react';
import { faq } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';
import { Plus } from 'lucide-react';

export default function Faq() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  // Single-open accordion: only one FAQ expanded at a time (replaces the
  // original event-delegation approach with simple React state).
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Todo lo que quieres saber"
        />

        <div ref={ref} className="mx-auto mt-12 max-w-3xl space-y-3">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className={`card overflow-hidden transition-all duration-500 ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="font-display font-semibold text-ink-900">
                      {item.question}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cream-100 text-ink-700 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-peach-100 text-peach-600' : ''
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-ink-700">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
