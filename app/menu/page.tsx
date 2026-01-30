import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import MenuSection from '@/components/sections/MenuSection';
import ImageGallery from '@/components/ui/ImageGallery';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import { IMAGES } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Catering Menu in Noida | Veg, Jain & Live Counters',
  description:
    'Explore catering menus for Noida events. Veg/Jain options, starters, mains, desserts and live counters. WhatsApp to get the full menu PDF and pricing.',
  path: '/menu/',
});

const galleryImages = [
  ...IMAGES.wedding.tiles,
  ...IMAGES.wedding.gallery.slice(0, 4),
];

export default function MenuPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Menu', href: '/menu/' }]} />

      <Hero
        title="Chef24Catering Menu — Veg, Jain & Multi-Cuisine Options in Noida"
        subtitle="Choose a menu style — we'll customize based on your event, guest count, and preference."
        backgroundImage={IMAGES.banner}
        showTrustStrip={false}
      />

      <MenuSection showFull />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Real Event Moments"
            subtitle="Food + Setup + Service from our recent events"
          />

          <ImageGallery images={galleryImages} columns={4} />

          <div className="mt-10 text-center">
            <WhatsAppLink variant="primary">
              Get Complete Menu PDF + Package Pricing
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </>
  );
}
