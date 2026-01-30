import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import ImageGallery from '@/components/ui/ImageGallery';
import SectionHeading from '@/components/ui/SectionHeading';
import SectorGrid from '@/components/sections/SectorGrid';
import FAQ from '@/components/sections/FAQ';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import { IMAGES } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Catering in Noida Sector 127 | Premium Veg Catering | Buffets + Live Counters',
  description:
    'Premium catering in Noida Sector 127. Live counters, mocktail stations, premium desserts. Expressway belt events. Get quote on WhatsApp.',
  path: '/catering/noida-sector-127/',
});

const localStyles = [
  'Live chaat counter',
  'Mocktail station',
  'Premium dessert presentation',
];

const proofImages = [
  IMAGES.parties.mocktail,
  IMAGES.wedding.tiles[0],
  IMAGES.wedding.tiles[1],
  IMAGES.venues[2],
];

export default function Sector127Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Catering', href: '/catering/noida-sector-127/' },
          { name: 'Sector 127', href: '/catering/noida-sector-127/' },
        ]}
      />

      <Hero
        title="Catering in Noida Sector 127 — Premium Veg Catering | Buffets + Live Counters"
        subtitle="Premium residential and expressway belt events — upgrade with live counters and premium dessert spread."
        backgroundImage={IMAGES.banner}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Premium Options Popular in Sector 127" />
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
            <WhatsAppLink variant="primary">Get Sector 127 Quote</WhatsAppLink>
          </div>
        </div>
      </section>

      <SectorGrid currentSector="127" />
      <FAQ />
    </>
  );
}
