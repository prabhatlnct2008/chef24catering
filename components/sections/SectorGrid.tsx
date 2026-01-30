import Link from 'next/link';
import { MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SECTORS } from '@/lib/constants';

interface SectorGridProps {
  currentSector?: string;
}

export default function SectorGrid({ currentSector }: SectorGridProps) {
  const filteredSectors = currentSector
    ? SECTORS.filter((s) => s.id !== currentSector)
    : SECTORS;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Serving Noida Sectors"
          subtitle="Professional catering services across Noida"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredSectors.map((sector) => (
            <Link
              key={sector.id}
              href={`/catering/${sector.slug}/`}
              className="group bg-background hover:bg-primary rounded-xl p-6 text-center transition-colors shadow-sm hover:shadow-md"
            >
              <MapPin className="w-8 h-8 mx-auto mb-3 text-accent group-hover:text-gold transition-colors" />
              <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-white transition-colors">
                {sector.name}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors mt-1">
                Noida
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
