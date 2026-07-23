import { useMemo, useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
  ageOptions,
  buildAvailableDays,
  slotTemplates,
} from '@/data/content';
import SectionHeading from './SectionHeading';
import {
  CheckCircle2,
  Loader2,
  CalendarCheck,
  Clock,
  ShieldCheck,
  Users,
  MessagesSquare,
} from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const bookingPoints = [
  { icon: CalendarCheck, text: 'Visita guiada de 30 minutos' },
  { icon: Users, text: 'Conoce las salas y al equipo educativo' },
  { icon: MessagesSquare, text: 'Resolvemos todas tus dudas en el momento' },
];

export default function Booking() {
  // Available days are stable for the session — computed once.
  const days = useMemo(() => buildAvailableDays(), []);

  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ parentName: '', contact: '', babyAge: '' });

  const slotLabel = selectedDay && selectedSlot ? `${selectedDay} · ${selectedSlot}` : '';

  const handleDayClick = (label: string) => {
    setSelectedDay(label);
    setSelectedSlot(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!slotLabel) {
      setErrorMsg('Por favor selecciona un día y horario para tu visita.');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');

    // Persist the booking request to Supabase (single insert, no auth needed).
    const { error } = await supabase.from('bookings').insert({
      parent_name: form.parentName,
      contact: form.contact,
      baby_age: form.babyAge,
      slot: slotLabel,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('No pudimos registrar tu visita. Inténtalo nuevamente.');
      return;
    }
    setStatus('success');
    setForm({ parentName: '', contact: '', babyAge: '' });
    setSelectedDay(null);
    setSelectedSlot(null);
  };

  return (
    <section id="agenda" className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Intro column */}
          <div>
            <SectionHeading
              eyebrow="Agenda tu visita"
              title="Ven a conocernos, sin compromiso"
              lead="Elige el horario que te acomode. Te confirmamos por WhatsApp o correo en minutos."
              align="left"
            />
            <ul className="mt-8 space-y-4">
              {bookingPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <li key={point.text} className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-teal-100 text-teal-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-ink-800">{point.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Form column */}
          <div className="card p-7 sm:p-9">
            {status === 'success' ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-teal-100 text-teal-600">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                  ¡Estamos felices de conocer a tu familia!
                </h3>
                <p className="mt-2 text-ink-700">
                  Hemos registrado tu solicitud de visita. Te contactaremos en
                  minutos para confirmar los detalles.
                </p>
                <button
                  type="button"
                  className="btn-ghost mt-6"
                  onClick={() => setStatus('idle')}
                >
                  Agendar otra visita
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-display text-lg font-bold text-ink-900">
                  Reserva tu horario
                </h3>

                <div className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="parent-name" className="label">
                      Nombre del padre/madre
                    </label>
                    <input
                      id="parent-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.parentName}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, parentName: e.target.value }))
                      }
                      className="input"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="label">
                      Correo o WhatsApp
                    </label>
                    <input
                      id="contact"
                      type="text"
                      required
                      autoComplete="email"
                      value={form.contact}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, contact: e.target.value }))
                      }
                      className="input"
                      placeholder="ejemplo@correo.com o +507 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="baby-age" className="label">
                      Edad de tu pequeño
                    </label>
                    <select
                      id="baby-age"
                      required
                      value={form.babyAge}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, babyAge: e.target.value }))
                      }
                      className="input"
                    >
                      <option value="" disabled>
                        Selecciona una edad
                      </option>
                      {ageOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <fieldset>
                    <legend className="label">Elige fecha y hora</legend>
                    <div
                      className="grid grid-cols-3 gap-2 sm:grid-cols-6"
                      role="group"
                      aria-label="Días disponibles"
                    >
                      {days.map((day) => {
                        const active = selectedDay === day.label;
                        return (
                          <button
                            key={day.date}
                            type="button"
                            aria-pressed={active}
                            onClick={() => handleDayClick(day.label)}
                            className={`flex flex-col items-center rounded-2xl border-2 px-2 py-3 transition ${
                              active
                                ? 'border-peach-400 bg-peach-50 text-peach-600'
                                : 'border-cream-200 bg-white text-ink-800 hover:border-teal-300'
                            }`}
                          >
                            <span className="text-xs font-semibold">{day.dow}</span>
                            <span className="font-display text-lg font-bold">
                              {day.dom}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {selectedDay && (
                      <div
                        className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"
                        role="group"
                        aria-label="Horarios disponibles"
                      >
                        {slotTemplates.map((time) => {
                          const active = selectedSlot === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              aria-pressed={active}
                              onClick={() => setSelectedSlot(time)}
                              className={`flex items-center justify-center gap-1.5 rounded-2xl border-2 px-3 py-2.5 text-sm font-semibold transition ${
                                active
                                  ? 'border-teal-400 bg-teal-50 text-teal-700'
                                  : 'border-cream-200 bg-white text-ink-800 hover:border-teal-300'
                              }`}
                            >
                              <Clock className="h-3.5 w-3.5" />
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </fieldset>

                  {errorMsg && (
                    <p className="rounded-2xl bg-rose-100 px-4 py-3 text-sm font-semibold text-rose-400">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="h-4 w-4" />
                        Confirmar mi visita
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
