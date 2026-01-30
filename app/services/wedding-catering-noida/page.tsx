import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import ImageGallery from '@/components/ui/ImageGallery';
import VideoEmbed from '@/components/ui/VideoEmbed';
import SectionHeading from '@/components/ui/SectionHeading';
import SectorGrid from '@/components/sections/SectorGrid';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import CallLink from '@/components/shared/CallLink';
import ServiceSchema from '@/components/seo/ServiceSchema';
import { IMAGES } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Wedding Catering in Noida | Haldi to Reception | Premium Veg & Multi-Cuisine',
  description:
    'Premium wedding catering in Noida. Haldi, Mehendi, Sangeet, Reception menus. Buffet setup, professional service, Jain options. Get quote on WhatsApp.',
  path: '/services/wedding-catering-noida/',
  image: IMAGES.wedding.hero,
});

const weddingFunctions = [
  'Haldi',
  'Mehendi',
  'Sangeet',
  'Ring Ceremony',
  'Reception',
  'Anniversary & family celebrations',
];

const setupFeatures = [
  'Buffet layout with smooth guest movement',
  'Uniformed service staff',
  'Clean counters and controlled serving',
];

export default function WeddingCateringPage() {
  return (
    <>
      <ServiceSchema
        name="Wedding Catering in Noida"
        description="Premium wedding catering services in Noida. From Haldi to Reception, we handle menu planning, buffet setup, and professional service."
      />

      <Breadcrumbs
        items={[
          { name: 'Services', href: '/services/wedding-catering-noida/' },
          { name: 'Wedding Catering', href: '/services/wedding-catering-noida/' },
        ]}
      />

      <Hero
        title="Wedding Catering in Noida — Haldi to Reception | Premium Veg & Multi-Cuisine"
        subtitle="We plan menus, execute setup, and manage serving flow — so your wedding functions feel premium and stress-free."
        backgroundImage={IMAGES.wedding.hero}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Wedding Functions We Cater" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {weddingFunctions.map((func) => (
              <div
                key={func}
                className="bg-background rounded-xl p-4 text-center shadow-sm"
              >
                <span className="font-medium text-ink">{func}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Haldi Moments" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VideoEmbed src={IMAGES.videos.haldi1} title="Haldi Ceremony" />
            <VideoEmbed src={IMAGES.videos.haldi2} title="Haldi Event" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Mehendi Moments" />
          <div className="max-w-2xl mx-auto">
            <VideoEmbed src={IMAGES.videos.mehendi} title="Mehendi Ceremony" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Premium Setup & Service" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {setupFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <p className="text-ink font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Wedding Gallery" />
          <ImageGallery images={IMAGES.wedding.gallery} columns={4} />
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
            <WhatsAppLink variant="primary">Get Wedding Quote</WhatsAppLink>
          </div>
        </div>
      </section>

      <SectorGrid />
    </>
  );
}
