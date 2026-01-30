import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import CallLink from '@/components/shared/CallLink';
import { SITE_CONFIG, SECTORS } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Chef24Catering | Noida Catering Service | Phone & WhatsApp',
  description:
    'Get in touch with Chef24Catering for catering inquiries in Noida. WhatsApp for quick quote, call for bookings, or visit our location.',
  path: '/contact/',
});

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: SITE_CONFIG.address,
    href: null,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Sun: 8:00 AM - 10:00 PM',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact/' }]} />

      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Contact Chef24Catering"
            subtitle="Get in touch for catering inquiries, quotes, and bookings"
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-ink mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <WhatsAppLink variant="primary">
                  WhatsApp for Quick Quote
                </WhatsAppLink>
                <CallLink variant="secondary">Call Now</CallLink>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-ink mb-6">
                Service Areas
              </h2>
              <p className="text-gray-600 mb-4">
                We provide catering services across Noida, including:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {SECTORS.map((sector) => (
                  <div
                    key={sector.id}
                    className="bg-background rounded-lg p-4 text-center"
                  >
                    <span className="font-medium text-ink">
                      Noida {sector.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-background rounded-xl p-6">
                <h3 className="font-semibold text-ink mb-3">Quick Booking</h3>
                <p className="text-gray-600 text-sm mb-4">
                  For fastest response, send us your event details on WhatsApp:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Event date</li>
                  <li>• Number of guests</li>
                  <li>• Event type (wedding, party, corporate, etc.)</li>
                  <li>• Location/sector</li>
                  <li>• Any dietary preferences (Jain, veg only)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
