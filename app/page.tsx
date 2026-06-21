import Hero from '@/components/Hero';
import About from '@/components/About';
import Results from '@/components/Results';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Results />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  );
}
