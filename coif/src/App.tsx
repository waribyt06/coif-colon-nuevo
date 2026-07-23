import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import Routine from '@/components/Routine';
import Testimonials from '@/components/Testimonials';
import Admission from '@/components/Admission';
import Booking from '@/components/Booking';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

// App composition: each section is an isolated, single-responsibility component.
// The original monolithic HTML/JS was split into modular pieces that share a
// consistent design system (Tailwind theme) and typed content module.
export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Routine />
        <Testimonials />
        <Admission />
        <Booking />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
