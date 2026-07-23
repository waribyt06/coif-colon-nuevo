import { admissionSteps } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';
import SectionHeading from './SectionHeading';

export default function Admission() {
  const { ref, visible } = useReveal<HTMLOListElement>();

  return (
    <section id="admision" className="bg-cream-100 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Proceso de admisión"
          title="Tres pasos, sin complicaciones"
        />

        <ol ref={ref} className="mt-14 grid gap-6 md:grid-cols-3">
          {admissionSteps.map((step, i) => (
            <li
              key={step.title}
              className={`card relative p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-peach-500 font-display text-xl font-bold text-white shadow-soft">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-700">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
