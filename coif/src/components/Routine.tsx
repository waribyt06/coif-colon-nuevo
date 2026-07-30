import { routine } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';
import { Clock } from 'lucide-react';

export default function Routine() {
  const { ref, visible } = useReveal<HTMLOListElement>();

  return (
    <section id="rutina" className="bg-cream-100 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="El día a día"
          title="Un día en este CAIPI"
          lead="La misma calma, todos los días. Así se ve el ritmo que aprenderá a reconocer como suyo."
        />

        <ol ref={ref} className="mt-14 flex flex-col gap-6">
          {routine.map((step, i) => (
            <li
              key={step.time}
              className={`card overflow-hidden transition-all duration-500 md:grid md:grid-cols-[260px_1fr] ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* CAMBIO AQUÍ: 'h-auto' en móvil en lugar de 'h-48' */}
              <div className="relative h-auto overflow-hidden md:h-full">
                {/* CAMBIO AQUÍ: 'object-contain' en móvil y 'object-cover' solo en pantallas medianas (md:object-cover) */}
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="h-auto w-full object-contain md:h-full md:object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="p-7 md:p-9">
                <span className="chip bg-peach-100 text-peach-600">
                  <Clock className="h-4 w-4" />
                  {step.time}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-700">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}