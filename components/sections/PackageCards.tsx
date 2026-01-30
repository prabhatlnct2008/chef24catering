import Link from 'next/link';
import { Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SITE_CONFIG } from '@/lib/constants';
import { generatePackageWhatsAppLink } from '@/lib/whatsapp';

interface Package {
  name: string;
  price: number;
  bestFor: string;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    name: 'Essential',
    price: SITE_CONFIG.pricing.essential,
    bestFor: 'small house parties, simple family functions',
    features: [
      '2 starters',
      '1 paneer gravy',
      '1 dal',
      '1 seasonal veg',
      'Rice',
      '2 breads',
      'Salad + chutney',
      '1 dessert',
    ],
  },
  {
    name: 'Signature',
    price: SITE_CONFIG.pricing.signature,
    bestFor: 'corporate lunches, medium gatherings, premium house parties',
    features: [
      '3 starters',
      '2 mains (paneer + veg)',
      'Dal',
      'Rice or biryani',
      'Breads',
      'Raita + salad',
      'Dessert',
      'Buffet setup + service staff',
    ],
    popular: true,
  },
  {
    name: 'Royal',
    price: SITE_CONFIG.pricing.royal,
    bestFor: 'weddings, receptions, large celebrations',
    features: [
      '4 starters',
      '3 mains',
      'Dal',
      'Rice/biryani',
      'Breads',
      'Premium dessert spread',
      'Buffet decor options',
      'Dedicated service flow',
    ],
  },
];

interface PackageCardsProps {
  showFull?: boolean;
}

export default function PackageCards({ showFull = false }: PackageCardsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={showFull ? 'Choose a Package (Per Plate)' : 'Packages (Per Plate) — Transparent & Flexible'}
          subtitle={showFull ? 'Transparent pricing with flexible options for every event size' : undefined}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-background rounded-2xl p-6 md:p-8 ${
                pkg.popular
                  ? 'ring-2 ring-accent shadow-xl'
                  : 'border border-muted shadow-md'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Most Booked
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-semibold text-ink">
                  {pkg.name} Package
                </h3>
                <div className="mt-2">
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    ₹{pkg.price}
                  </span>
                  <span className="text-gray-600">/plate</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">Best for: {pkg.bestFor}</p>
              </div>

              {showFull && (
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={generatePackageWhatsAppLink(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                  pkg.popular
                    ? 'bg-accent hover:bg-accent/90 text-white'
                    : 'bg-primary hover:bg-primary/90 text-white'
                }`}
              >
                WhatsApp this Package
              </a>
            </div>
          ))}
        </div>

        {!showFull && (
          <div className="mt-10 text-center">
            <Link
              href="/pricing/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              See Full Pricing →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
