import { Sprout, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const contactItems = [
  { icon: MapPin, text: 'Calle Las Orquídeas, San Miguelito' },
  { icon: Phone, text: '+507 000-0000' },
  { icon: Mail, text: 'hola@raices.cr' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-100">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-peach-500 text-white">
                <Sprout className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold">Raíces</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/70">
              Centro infantil de 3 meses a 4 años. Un espacio para crecer con calma.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-peach-300" />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white">Síguenos</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-cream-100/80 transition hover:text-peach-300"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-cream-100/80 transition hover:text-peach-300"
                >
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="text-cream-100/80 transition hover:text-peach-300">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-100/80 transition hover:text-peach-300">
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-cream-100/60">
          © 2026 Raíces. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
