import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import SectorGrid from '@/components/sections/SectorGrid';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import ServiceSchema from '@/components/seo/ServiceSchema';
import { IMAGES } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Party Catering in Noida | Birthday, Corporate & House Parties',
  description:
    'Party catering for Noida. Birthdays, corporate events, kitty parties, farmhouse parties. Snacks, buffet, live counters. WhatsApp for menu + pricing.',
  path: '/services/party-catering-noida/',
  image: IMAGES.parties.hero,
});

const partyTypes = [
  { name: 'Corporate Events', image: IMAGES.parties.corporate, description: 'Clean setup, timely serving, and flexible menu formats (buffet or lunch boxes).' },
  { name: 'Mocktail/Cocktail Counters', image: IMAGES.parties.mocktail, description: 'Optional beverage station for premium party vibe.' },
  { name: 'Farmhouse Parties', image: IMAGES.parties.farmhouse, description: 'Higher guest volume handling with disciplined serving.' },
  { name: 'Birthday Parties', image: IMAGES.parties.birthday, description: 'Kids-friendly add-ons available.' },
  { name: 'Kitty Parties', image: IMAGES.parties.kitty, description: 'Elegant snack counters + desserts.' },
];

export default function PartyCateringPage() {
  return (
    <>
      <ServiceSchema
        name="Party Catering in Noida"
        description="Party catering services in Noida for birthdays, corporate events, kitty parties, and farmhouse parties."
      />

      <Breadcrumbs
        items={[
          { name: 'Services', href: '/services/party-catering-noida/' },
          { name: 'Party Catering', href: '/services/party-catering-noida/' },
        ]}
      />

      <Hero
        title="Party Catering in Noida — Birthdays, Corporate & Home Celebrations"
        subtitle="Snacks, buffet, live counters, and clean service flow — designed for high guest satisfaction."
        backgroundImage={IMAGES.parties.hero}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Party Types We Cater" />

          <div className="space-y-12">
            {partyTypes.map((party, index) => (
              <div
                key={party.name}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={party.image}
                      alt={party.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="font-heading text-2xl font-semibold text-ink mb-4">
                    {party.name}
                  </h3>
                  <p className="text-gray-700 text-lg">{party.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing/"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              See Pricing
            </Link>
            <Link
              href="/menu/"
              className="bg-gold text-white hover:bg-gold/90 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              See Menu
            </Link>
            <WhatsAppLink variant="primary">Get Party Quote</WhatsAppLink>
          </div>
        </div>
      </section>

      <SectorGrid />
    </>
  );
}
