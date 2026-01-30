import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import { SERVICES, IMAGES } from '@/lib/constants';

interface ServiceItem {
  name: string;
  slug: string;
  description: string;
  image: string;
  href?: string;
}

export default function ServicesGrid() {
  const services: ServiceItem[] = [
    ...SERVICES,
    {
      name: 'Gallery',
      slug: '',
      description: 'See our real setups, food spreads, and event moments.',
      image: IMAGES.gallery,
      href: '/gallery/',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Choose Your Catering Service" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href || `/services/${service.slug}/`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <WhatsAppLink variant="primary">
            Get Full Menu + Package Pricing
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
