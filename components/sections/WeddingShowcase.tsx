import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { IMAGES } from '@/lib/constants';

export default function WeddingShowcase() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Signature Wedding Moments"
          subtitle="From Haldi to Reception — we handle the food experience with premium presentation and disciplined serving."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMAGES.wedding.tiles.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group"
            >
              <Image
                src={image}
                alt={`Wedding setup ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services/wedding-catering-noida/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            View Wedding Service Page →
          </Link>
        </div>
      </div>
    </section>
  );
}
