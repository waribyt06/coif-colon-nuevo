import { MessageCircle } from 'lucide-react';

// Floating WhatsApp contact button — quick access to the nursery's chat.
export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/50763434582"
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2"
    >
      <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-800 shadow-soft transition group-hover:block">
        ¿Dudas rápidas? Escríbenos
      </span>
      <span className="grid h-14 w-14 place-items-center rounded-full bg-teal-500 text-white shadow-soft transition hover:bg-teal-600 hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
