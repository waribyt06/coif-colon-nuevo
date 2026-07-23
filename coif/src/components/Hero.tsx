import { CalendarHeart, ArrowRight } from 'lucide-react';
import { heroImage } from '@/data/content';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background photo with warm overlay for readability */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 via-ink-900/55 to-ink-900/20" />
      </div>

      <div className="container-page relative flex min-h-[92vh] flex-col justify-center py-28">
        <div className="max-w-2xl animate-fade-up">
          <span className="chip bg-white/15 text-white backdrop-blur-sm">
            <CalendarHeart className="h-4 w-4" />
            Centro infantil · 3 meses a 4 años
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            El segundo hogar donde tus hijos crecen seguros, felices y amados.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-100/90">
            Cada día, un paso más hacia su propia raíz: acompañamiento cercano,
            educadoras tituladas y un espacio pensado para que florezcan a su ritmo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#agenda" className="btn-primary">
              Agenda una visita guiada
            </a>
            <a
              href="#confianza"
              className="btn-ghost border border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              Conoce nuestro método
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Soft wave divider into the next section */}
      <svg
        className="absolute bottom-0 left-0 w-full text-cream-50"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 80h1440V40c-240 40-480 40-720 20S240 0 0 40v40z"
        />
      </svg>
    </section>
  );
}
