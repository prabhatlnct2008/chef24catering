import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { IMAGES } from '@/lib/constants';

export default function VenueProof() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted for Events & Venues"
          subtitle="Premium buffet styling + disciplined service at venues like these"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {IMAGES.venues.map((venue, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden shadow-md group"
            >
              <Image
                src={venue}
                alt={`Venue ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
