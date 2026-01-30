import { Metadata } from 'next';
import ImageGallery from '@/components/ui/ImageGallery';
import VideoEmbed from '@/components/ui/VideoEmbed';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import { IMAGES } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Catering Gallery | Real Event Photos & Videos',
  description:
    'See real catering setups, buffet presentations, and event moments from Chef24Catering. Weddings, parties, corporate events in Noida.',
  path: '/gallery/',
});

const allImages = [
  ...IMAGES.wedding.tiles,
  ...IMAGES.wedding.gallery,
  ...IMAGES.venues,
  IMAGES.parties.corporate,
  IMAGES.parties.birthday,
  IMAGES.parties.kitty,
  IMAGES.parties.farmhouse,
];

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Gallery', href: '/gallery/' }]} />

      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Catering Gallery"
            subtitle="Real setups, food spreads, and event moments from Chef24Catering"
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink mb-8">
            Wedding & Event Photos
          </h2>
          <ImageGallery images={allImages} columns={4} />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink mb-8">
            Event Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <VideoEmbed
              src={IMAGES.videos.haldi1}
              title="Haldi Ceremony Catering"
            />
            <VideoEmbed
              src={IMAGES.videos.haldi2}
              title="Haldi Event Setup"
            />
            <VideoEmbed
              src={IMAGES.videos.mehendi}
              title="Mehendi Ceremony"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink mb-4">
            Want to See More?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us for more photos and videos from our recent events
          </p>
          <WhatsAppLink variant="primary">
            WhatsApp for More Photos
          </WhatsAppLink>
        </div>
      </section>
    </>
  );
}
