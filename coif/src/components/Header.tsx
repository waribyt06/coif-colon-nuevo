import { useEffect, useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';

const navLinks = [
  { href: '#confianza', label: 'Nuestro método' },
  { href: '#rutina', label: 'El día a día' },
  { href: '#historias', label: 'Familias' },
  { href: '#admision', label: 'Admisión' },
];

export default function Header() {
  // Tracks whether the header background should be solid (after scrolling).
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-50/90 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-2 text-ink-900">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-peach-500 text-white shadow-soft">
            <Sprout className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold">Raíces</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink-700 transition hover:text-peach-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#agenda" className="btn-primary text-sm">
            Agenda una visita
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl bg-white text-ink-800 shadow-card md:hidden"
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="mx-4 mb-4 rounded-4xl bg-white p-5 shadow-soft md:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-2xl px-4 py-3 font-semibold text-ink-800 transition hover:bg-cream-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#agenda"
                className="btn-primary w-full"
                onClick={() => setMenuOpen(false)}
              >
                Agenda una visita
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
