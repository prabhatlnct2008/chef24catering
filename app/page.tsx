import Hero from '@/components/sections/Hero';
import QuoteWidget from '@/components/ui/QuoteWidget';
import ServicesGrid from '@/components/sections/ServicesGrid';
import WeddingShowcase from '@/components/sections/WeddingShowcase';
import PackageCards from '@/components/sections/PackageCards';
import MenuSection from '@/components/sections/MenuSection';
import About from '@/components/sections/About';
import VenueProof from '@/components/sections/VenueProof';
import Testimonials from '@/components/sections/Testimonials';
import SectorGrid from '@/components/sections/SectorGrid';
import FAQ from '@/components/sections/FAQ';
import { IMAGES } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Catering in Noida (Sector 63–65, 70, 125, 127) — Menu + Quote in 10 Minutes on WhatsApp"
        subtitle="Premium veg & multi-cuisine catering for house parties, corporate events, weddings, and bhandara. Clean setup • Trained staff • On-time service • Custom menus"
        backgroundImage={IMAGES.banner}
        microcopy="Share your date + guests + location — we'll reply with menu options + best package pricing."
      />

      <QuoteWidget />

      <ServicesGrid />

      <WeddingShowcase />

      <PackageCards />

      <MenuSection />

      <About />

      <VenueProof />

      <Testimonials />

      <SectorGrid />

      <FAQ />
    </>
  );
}
