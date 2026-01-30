import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import ImageGallery from '@/components/ui/ImageGallery';
import SectionHeading from '@/components/ui/SectionHeading';
import SectorGrid from '@/components/sections/SectorGrid';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import ServiceSchema from '@/components/seo/ServiceSchema';
import { IMAGES } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Greh Pravesh Catering in Noida | Family-Friendly & Jain Options',
  description:
    'Greh Pravesh catering in Noida. Simple, family-friendly veg menus with Jain/no-onion-garlic options. WhatsApp for menu and pricing.',
  path: '/services/greh-pravesh-catering-noida/',
  image: IMAGES.grehPravesh.hero,
});

const menuStyles = [
  'Balanced veg mains',
  'Light dessert',
  'Optional Jain/sattvik plan',
];

export default function GrehPraveshCateringPage() {
  return (
    <>
      <ServiceSchema
        name="Greh Pravesh Catering in Noida"
        description="Family-friendly Greh Pravesh catering in Noida with Jain and sattvik menu options."
      />

      <Breadcrumbs
        items={[
          { name: 'Services', href: '/services/greh-pravesh-catering-noida/' },
          { name: 'Greh Pravesh Catering', href: '/services/greh-pravesh-catering-noida/' },
        ]}
      />

      <Hero
        title="Greh Pravesh Catering in Noida — Simple, Family-Friendly & Jain Options"
        subtitle="Warm, clean, and balanced menus — with optional no onion/no garlic preferences."
        backgroundImage={IMAGES.grehPravesh.hero}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.grehPravesh.section}
                alt="Greh Pravesh catering setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <SectionHeading
                title="Recommended Greh Pravesh Menu Style"
                centered={false}
              />
              <ul className="space-y-4">
                {menuStyles.map((style) => (
                  <li key={style} className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-gold rounded-full" />
                    <span className="text-lg text-gray-700">{style}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WhatsAppLink variant="primary">
                  Get Greh Pravesh Quote
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Greh Pravesh Gallery" />
          <ImageGallery images={IMAGES.grehPravesh.gallery} columns={4} />
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
