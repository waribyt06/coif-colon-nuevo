import { testimonials } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="historias" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Familias que confiaron"
          title="Lo que otros padres sintieron"
        />

        <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`card relative flex flex-col p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="h-9 w-9 text-peach-200" />
              <p className="mt-3 flex-1 leading-relaxed text-ink-800">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display font-semibold text-ink-900">{t.name}</p>
                  <p className="text-sm text-ink-700">{t.childInfo}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
