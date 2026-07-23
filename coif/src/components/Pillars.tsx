import { pillars } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';

export default function Pillars() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="confianza" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Nuestro método"
          title="Lo que sostiene cada día aquí"
          lead="Cuatro raíces firmes para que tu pequeño crezca con calma, aunque tú no estés mirando."
        />

        <div
          ref={ref}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.id}
                className={`card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal-100 text-teal-600">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {pillar.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
