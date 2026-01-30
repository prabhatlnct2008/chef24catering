import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import PackageCards from '@/components/sections/PackageCards';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQ from '@/components/sections/FAQ';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Catering Pricing in Noida | Per Plate Packages',
  description:
    'Transparent catering packages in Noida. Per-plate pricing for house parties, corporate events, weddings, bhandara & greh pravesh. WhatsApp for menu + quote.',
  path: '/pricing/',
});

const addons = [
  'Live Chaat Counter',
  'Tandoor Counter',
  'Pasta / Chinese Counter',
  'Mocktail Station',
  'Dessert Counter (jalebi-rabri / kulfi)',
];

const pricingFactors = [
  'Guest count',
  'Menu complexity',
  'Service style (buffet vs lunch boxes)',
  'Live counters and equipment',
  'Venue access + timing',
];

const bookingSteps = [
  { step: 1, text: 'WhatsApp: date + guests + sector' },
  { step: 2, text: 'We send menu options + package pricing' },
  { step: 3, text: 'Confirm menu + finalize slot' },
];

const pricingFAQs = [
  {
    question: 'Do you have Jain/no-onion-garlic options?',
    answer: 'Yes, available with advance notice.',
  },
  {
    question: 'Is staff included?',
    answer: 'Included as per package and event format.',
  },
  {
    question: 'Do you do tasting?',
    answer: 'For larger events, tasting can be arranged (terms apply).',
  },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Pricing', href: '/pricing/' }]} />

      <Hero
        title="Catering Packages & Pricing in Noida — Clear Per-Plate Options"
        subtitle="Tell us your guest count + event type + sector — we'll send the best package and menu options on WhatsApp."
        backgroundImage={IMAGES.banner}
        showTrustStrip={false}
      />

      <PackageCards showFull />

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Popular Add-ons (Optional)" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {addons.map((addon) => (
              <div
                key={addon}
                className="bg-white rounded-xl p-4 text-center shadow-sm"
              >
                <span className="text-ink font-medium">{addon}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <WhatsAppLink variant="primary">
              WhatsApp to Add Counters
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="What Changes the Final Price"
                centered={false}
              />
              <ul className="space-y-3">
                {pricingFactors.map((factor) => (
                  <li key={factor} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-600 italic">
                No surprise charges — everything is shared before confirmation.
              </p>
            </div>

            <div>
              <SectionHeading title="Booking in 3 Steps" centered={false} />
              <div className="space-y-4">
                {bookingSteps.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <p className="text-gray-700 pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={pricingFAQs} title="Pricing FAQs" />
    </>
  );
}
