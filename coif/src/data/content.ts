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
   image: 'bienvenida.jpg',
  },
  {
    time: '9:30',
    title: 'Juego libre',
    text: 'Exploración guiada en nuestros rincones de construcción, arte y motricidad.',
    image: 'juegolibre.jpg',
  },
  {
    time: '11:00',
  title: 'recreo y merienda',
    text: 'Un momento para compartir y nutrirse en un ambiente tranquilo,donde fortalecen sus hábitos e  independencia a su propio ritmo.',
    image: 'nutricion.jpg',
  },
  {
    time: '12:00',
    title: 'Siesta reparadora',
    text: 'Descanso individual en colchonetas, con luz tenue y vigilacion constante para garantizar un sueño seguro y reparador.',
    image: 'siesta.jpg',
  },
{
  time: "2:30 PM", 
  title: "After school", 
  text: "Actividades de refuerzo escolar y talleres creativos para niños de 1.° a 6.° grado, fomentando el aprendizaje y la expresión artística.",
  image: "after.jpg",
}
,{
  time: "5:30PM", 
  title: "Encuentro Familiar y Despedida", 
  text: "Cerramos el día preparando a cada niño para su reencuentro con la familia de manera serena y segura. Mientras los más pequeños de CAIPI se alistan con canciones de cierre e informes sobre su día, los grandes de After School revisan sus mochilas y comparten los logros del día. Garantizamos un proceso de salida fluido y seguro, donde los niños disfrutan de actividades tranquilas (cuentos, juegos de mesa) hasta la llegada de sus padres.",
  image: "salida.jpg",
}
];

export const testimonials: Testimonial[] = [
  {
    name: 'Zaida',
    childInfo: 'mamá de Darnell (3 años)',
    quote: 'Tenía miedo de dejarlo, pero las maestras hicieron que el proceso fuera hermoso. Ahora Darnell va feliz cada mañana.',
    avatar: 'Darnell.jpg',
  },
  {
    name: 'Andrés',
    childInfo: 'papá de Sofía (2 años)',
    quote: 'La transición fue mucho más suave de lo que esperaba. Sentimos que Sofía está en un segundo hogar de verdad.',
    avatar: 'https://images.pexels.com/photos/4971323/pexels-photo-4971323.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'sasha',
    childInfo: 'mamá de Jomar (2 años)',
    quote: 'Cada tarde nos cuentan cómo fue su día con fotos y detalles. Esa comunicación nos da una tranquilidad enorme.',
    avatar: 'Antony.jpg',
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
    answer: 'Es un proceso gradual de una a dos semanas, en compañía de las maestras al inicio, hasta que tu hijo se sienta seguro con su nueva rutina y educadoras.',
  },
  {
    question: '¿Qué pasa si mi hijo se enferma?',
    answer: 'Promovemos un entorno sano, por lo que pedimos no asistir si hay malestar o fiebre. Si el niño presenta síntomas en el centro, lo cuidamos con atención personalizada mientras contactamos inmediatamente a los padres o tutores autorizados para que vengan a buscarlo.',
  },
  {
    question: '¿Tienen flexibilidad de horario?',
    answer: 'Sí, ofrecemos jornada completa, con opción de horario extendido bajo previa coordinación.',
  },
  {
    question: '¿Qué incluyen las cuotas?',
    answer: 'Alimentación completa, materiales educativos, seguro escolar y reportes diarios de actividades.',
  },
  {
    question: '¿Cómo organizan los grupos y la atención de los estudiantes?',
    answer: 'Contamos con instalaciones y una estructura docente diseñadas para recibir a una amplia comunidad escolar. Organizados por niveles (Pre-Kinder, Kinder y After School), adaptamos la asignación de nuestras educadoras y equipos de apoyo según la dinámica de cada grupo, garantizando una supervisión profesional, ordenada y de alta calidad en todo momento.',
  },
];

export const heroImage =
  'portada.jpg';

export const ageOptions = [
  { value: '1-2a', label: '1 a 2 años' },
  { value: '2-3a', label: '2 a 3 años' },
  { value: '3-4a', label: '3 a 4 años' },
  { value: '4-5a', label: '4 a 5 años' },
];

// Static slot templates for the booking calendar.
export const slotTemplates = ['9:00', '10:30', '1:00', '3:30'];

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
