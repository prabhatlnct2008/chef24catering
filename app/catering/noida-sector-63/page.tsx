import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import ImageGallery from '@/components/ui/ImageGallery';
import SectionHeading from '@/components/ui/SectionHeading';
import SectorGrid from '@/components/sections/SectorGrid';
import FAQ from '@/components/sections/FAQ';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: `Caterer in Noida Sector 63 | Corporate & Office Catering | Packages from ₹${SITE_CONFIG.pricing.starting}/plate`,
  description:
    `Catering in Noida Sector 63. Office lunches, corporate events, team parties. Buffet or lunch boxes from ₹${SITE_CONFIG.pricing.starting}/plate. WhatsApp for quote.`,
  path: '/catering/noida-sector-63/',
});

const localStyles = [
  'Office lunch trays or buffet-style pantry setup',
  'Evening snacks + tea counter',
  'Clean, time-bound execution',
];

const proofImages = [
  IMAGES.parties.corporate,
  IMAGES.parties.hero,
  IMAGES.wedding.tiles[0],
  IMAGES.wedding.tiles[1],
];

export default function Sector63Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Catering', href: '/catering/noida-sector-63/' },
          { name: 'Sector 63', href: '/catering/noida-sector-63/' },
        ]}
      />

      <Hero
        title={`Caterer in Noida Sector 63 — Veg & Multi-Cuisine Catering | Packages from ₹${SITE_CONFIG.pricing.starting}/plate`}
        subtitle="Perfect for office lunches, team parties, and fast-execution events. Share date + guests — we'll send menu + quote on WhatsApp."
        backgroundImage={IMAGES.banner}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Sector 63 Catering Style (Most Requested)" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {localStyles.map((style) => (
              <div key={style} className="bg-background rounded-xl p-6 text-center shadow-sm">
                <p className="text-ink font-medium">{style}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Proof Gallery" />
          <ImageGallery images={proofImages} columns={4} />
        </div>
      </section>

      <section className="py-12 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing/" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              See Pricing
            </Link>
            <Link href="/menu/" className="bg-gold text-white hover:bg-gold/90 px-6 py-3 rounded-lg font-semibold transition-colors">
              See Menu
            </Link>
            <WhatsAppLink variant="primary">Get Sector 63 Quote</WhatsAppLink>
          </div>
        </div>
      </section>

      <SectorGrid currentSector="63" />
      <FAQ />
    </>
  );
}
