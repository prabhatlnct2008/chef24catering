import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG, IMAGES, SECTORS, SERVICES } from '@/lib/constants';
import WhatsAppLink from '@/components/shared/WhatsAppLink';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src={IMAGES.logo}
              alt="Chef24Catering Logo"
              width={150}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Premium veg & multi-cuisine catering in Noida. Quality food, professional service, memorable events.
            </p>
            <WhatsAppLink variant="primary">Get Menu + Quote</WhatsAppLink>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/gallery/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {SECTORS.map((sector) => (
                <li key={sector.id}>
                  <Link
                    href={`/catering/${sector.slug}/`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Noida {sector.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-accent" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-accent" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <div className="flex gap-4">
                <Link href="/pricing/" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="/menu/" className="text-gray-300 hover:text-white transition-colors">
                  Menu
                </Link>
                <Link href="/blog/" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
