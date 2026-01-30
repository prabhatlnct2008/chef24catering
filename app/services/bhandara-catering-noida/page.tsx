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
  title: 'Bhandara Catering in Noida | Large-Scale Sattvik Catering',
  description:
    'Bhandara and religious event catering in Noida. Large-scale sattvik menus, disciplined service, on-time distribution. Contact for quote.',
  path: '/services/bhandara-catering-noida/',
  image: IMAGES.bhandara.hero,
});

const bhandaraFeatures = [
  'Sattvik menu planning',
  'Large-scale cooking coordination',
  'Clean serving flow',
  'Timing discipline',
];

export default function BhandaraCateringPage() {
  return (
    <>
      <ServiceSchema
        name="Bhandara Catering in Noida"
        description="Large-scale bhandara and religious event catering in Noida with sattvik menus and disciplined service."
      />

      <Breadcrumbs
        items={[
          { name: 'Services', href: '/services/bhandara-catering-noida/' },
          { name: 'Bhandara Catering', href: '/services/bhandara-catering-noida/' },
        ]}
      />

      <Hero
        title="Bhandara Catering in Noida — Large-Scale, Sattvik & Disciplined Service"
        subtitle="We handle volume planning, on-time prep, and smooth distribution with hygiene-first execution."
        backgroundImage={IMAGES.bhandara.hero}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="What We Provide" centered={false} />
              <ul className="space-y-4">
                {bhandaraFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-gold rounded-full" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WhatsAppLink variant="primary">
                  Get Bhandara Quote
                </WhatsAppLink>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.bhandara.section}
                alt="Bhandara catering setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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
          </div>
        </div>
      </section>

      <SectorGrid />
    </>
  );
}
