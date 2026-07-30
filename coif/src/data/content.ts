// Centralized content for the nursery site. Replaces the original data.json with
// typed structures and reliable Pexels stock imagery (no hotlinking downloads).
import type { LucideIcon } from 'lucide-react';
import { ShieldCheck, HeartHandshake, Leaf, Salad } from 'lucide-react';

export interface Pillar {
  id: string;
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface RoutineStep {
  time: string;
  title: string;
  text: string;
  image: string;
}

export interface Testimonial {
  name: string;
  childInfo: string;
  quote: string;
  avatar: string;
}

export interface AdmissionStep {
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const pillars: Pillar[] = [
  {
    id: 'seguridad',
    icon: ShieldCheck,
    title: 'Seguridad 24/7',
    text: 'Sistemas de vigilancia supervisados internamente en cada área y personal capacitado con años de experiencia para reaccionar al instante y eficacia ante cualquier eventualidad.',
  },
  {
    id: 'personal',
    icon: HeartHandshake,
    title: 'Personal idóneo',
    text: 'Educadoras con amplia trayectoria en el cuidado infantil, comprometidas con el desarrollo integral, el bienestar y la atención con amor de tu pequeño.',
  },
  {
    id: 'ambiente',
    icon: Leaf,
    title: 'Ambiente estimulante',
    text: 'Áreas adaptadas para la estimulación temprana de los más pequeños y un área dedicada al refuerzo escolar para niños de 1.° a 6.° grado.',
  },
  {
    id: 'nutricion',
    icon: Salad,
    title: 'Hábitos Saludables',
    text: 'espacios limpios y adecuados para la hora de la merienda o almuerzo, fomentando la autonomía, los buenos hábitos en la mesa y el respeto por los alimentos que traen desde casa.',
  },
];

export const routine: RoutineStep[] = [
  {
    time: '8:30',
    title: 'Bienvenida y estimulación',
    text: 'Recibimiento uno a uno y actividades sensoriales suaves para empezar el día con calma.',
    image: '/bienvenida.jpg', 
  },
  {
    time: '9:30',
    title: 'Juego libre',
    text: 'Exploración guiada en nuestros rincones de construcción, arte y motricidad.',
    image: 'https://images.pexels.com/photos/8535193/pexels-photo-8535193.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    time: '12:00',
    title: 'Alimentación guiada',
    text: 'Comidas balanceadas en un ambiente tranquilo, fomentando autonomía a su ritmo.',
    image: 'https://images.pexels.com/photos/5083238/pexels-photo-5083238.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    time: '13:30',
    title: 'Siesta reparadora',
    text: 'Descanso individual en cunas o colchonetas, con luz tenue y música suave.',
    image: 'https://images.pexels.com/photos/35422467/pexels-photo-35422467.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Elena',
    childInfo: 'mamá de Mateo (18 meses)',
    quote: 'Tenía miedo de dejarlo, pero las maestras hicieron que el proceso fuera hermoso. Ahora Mateo va feliz cada mañana.',
    avatar: 'https://images.pexels.com/photos/29096583/pexels-photo-29096583.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Andrés',
    childInfo: 'papá de Sofía (2 años)',
    quote: 'La transición fue mucho más suave de lo que esperaba. Sentimos que Sofía está en un segundo hogar de verdad.',
    avatar: 'https://images.pexels.com/photos/4971323/pexels-photo-4971323.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Camila',
    childInfo: 'mamá de Lucas (14 meses)',
    quote: 'Cada tarde nos cuentan cómo fue su día con fotos y detalles. Esa comunicación nos da una tranquilidad enorme.',
    avatar: 'https://images.pexels.com/photos/27176211/pexels-photo-27176211.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export const admissionSteps: AdmissionStep[] = [
  { title: 'Agenda tu visita', text: 'Virtual o presencial, eliges el formato que más te acomode.' },
  { title: 'Conocemos a tu pequeño', text: 'Conversamos sobre sus necesidades, rutinas y personalidad.' },
  { title: 'Reserva de plaza', text: 'Iniciamos juntos un periodo de adaptación acompañado.' },
];

export const faq: FaqItem[] = [
  {
    question: '¿Cómo es el periodo de adaptación?',
    answer: 'Es un proceso gradual de una a dos semanas, en compañía de un adulto de confianza al inicio, hasta que tu hijo se sienta seguro con su nueva rutina y educadoras.',
  },
  {
    question: '¿Qué pasa si mi hijo se enferma?',
    answer: 'Contamos con protocolo de aislamiento y enfermería propia. Te contactamos de inmediato por WhatsApp y seguimos las indicaciones de tu pediatra.',
  },
  {
    question: '¿Tienen flexibilidad de horario?',
    answer: 'Sí, ofrecemos jornada media y completa, con opción de horario extendido bajo previa coordinación.',
  },
  {
    question: '¿Qué incluyen las cuotas?',
    answer: 'Alimentación completa, materiales educativos, seguro escolar y reportes diarios de actividades.',
  },
  {
    question: '¿Cuál es la proporción educadora-niños?',
    answer: 'Mantenemos un máximo de 4 niños por educadora en sala cuna, y 6 niños por educadora en sala de exploradores.',
  },
];

export const heroImage =
  'https://images.pexels.com/photos/8535592/pexels-photo-8535592.jpeg?auto=compress&cs=tinysrgb&w=1600';

export const ageOptions = [
  { value: '3-12m', label: '3 a 12 meses' },
  { value: '1-2a', label: '1 a 2 años' },
  { value: '2-3a', label: '2 a 3 años' },
  { value: '3-4a', label: '3 a 4 años' },
];

// Static slot templates for the booking calendar.
export const slotTemplates = ['9:00', '10:30', '13:00', '15:30'];

const DOW = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

export interface DayChip {
  date: string;
  label: string;
  dow: string;
  dom: number;
}

// Build the next 6 available weekdays starting tomorrow, skipping Sundays.
export function buildAvailableDays(): DayChip[] {
  const today = new Date();
  const days: DayChip[] = [];
  let offset = 1;
  while (days.length < 6) {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    offset += 1;
    if (d.getDay() === 0) continue; // skip Sundays
    days.push({
      date: d.toISOString().slice(0, 10),
      label: `${DOW[d.getDay()]} ${d.getDate()}`,
      dow: DOW[d.getDay()],
      dom: d.getDate(),
    });
  }
  return days;
}
