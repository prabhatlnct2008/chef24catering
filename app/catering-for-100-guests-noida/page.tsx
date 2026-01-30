import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import FAQSchema from '@/components/seo/FAQSchema';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Catering for 100 Guests in Noida | Medium Event Packages | Chef24Catering',
  description:
    'Professional catering packages for 100 guests in Noida. Perfect for office parties, engagement ceremonies, corporate events. Starting ₹25,000. Complete service included.',
  path: '/catering-for-100-guests-noida/',
});

const faqs = [
  {
    question: 'What is the cost of catering for 100 guests in Noida?',
    answer: `For 100 guests, our packages range from ₹${100 * SITE_CONFIG.pricing.essential} (Essential) to ₹${100 * SITE_CONFIG.pricing.royal} (Royal). The Essential package at ₹${SITE_CONFIG.pricing.essential}/plate is great for corporate events, while the Royal package at ₹${SITE_CONFIG.pricing.royal}/plate is perfect for engagement ceremonies and milestone celebrations.`,
  },
  {
    question: "What's included in catering for 100 people?",
    answer:
      'Our 100-guest packages include: Complete menu as per selected package, full buffet setup with multiple serving stations, chafing dishes and premium crockery, 3-5 trained service staff, buffet tables and presentation, and complete post-event cleanup. Premium packages include live counters and dedicated supervisors.',
  },
  {
    question: 'How much space is needed for 100-guest catering?',
    answer:
      'For 100 guests, we recommend 800-1000 sq ft of dining space for comfortable movement. The buffet setup requires approximately 12-15 feet of table space. We can adapt to smaller spaces using multiple serving stations and staggered service times.',
  },
  {
    question: 'Can you cater for 100 guests at a farmhouse or outdoor venue?',
    answer:
      'Absolutely! We specialize in outdoor and farmhouse catering. For 100 guests, we bring our complete mobile kitchen setup, generators if needed, tented buffet stations, and all necessary equipment. Additional charges may apply for distant locations.',
  },
  {
    question: 'What events are best suited for 100-guest catering?',
    answer:
      'Ideal for: Office parties, corporate team lunches, engagement ceremonies, anniversary celebrations, retirement parties, product launches, religious gatherings, and medium-sized family functions.',
  },
  {
    question: 'How many service staff do you provide for 100 guests?',
    answer:
      'For 100 guests, we typically provide 3-5 service staff depending on the package. Essential package includes 3 staff, Signature includes 4 staff with a supervisor, and Royal includes 5 staff with a dedicated event coordinator for smooth service.',
  },
];

const packages = [
  {
    name: 'Essential Package',
    price: 100 * SITE_CONFIG.pricing.essential,
    perPlate: SITE_CONFIG.pricing.essential,
    bestFor: 'Corporate lunches, office parties',
    includes: [
      '3 Starters',
      '2 Paneer/Veg Mains',
      '1 Dal',
      '2 Seasonal Vegetables',
      'Rice + Pulao',
      '3 Types of Bread',
      'Salad + Raita + Chutney',
      '1 Dessert',
      'Complete Buffet Setup',
      '3 Service Staff',
    ],
  },
  {
    name: 'Signature Package',
    price: 100 * SITE_CONFIG.pricing.signature,
    perPlate: SITE_CONFIG.pricing.signature,
    bestFor: 'Engagements, family celebrations',
    popular: true,
    includes: [
      '4 Starters (incl. 1 live)',
      '3 Paneer/Veg Mains',
      'Dal Makhani',
      '2 Seasonal Vegetables',
      'Veg Biryani + Pulao',
      'Assorted Breads',
      'Complete Accompaniments',
      '2 Desserts',
      'Premium Buffet Setup',
      '4 Service Staff + Supervisor',
      'Buffet Decoration',
    ],
  },
  {
    name: 'Royal Package',
    price: 100 * SITE_CONFIG.pricing.royal,
    perPlate: SITE_CONFIG.pricing.royal,
    bestFor: 'Grand celebrations, premium events',
    includes: [
      '5 Premium Starters',
      '4 Main Course Options',
      'Dal + Premium Vegetables',
      'Biryani + Pulao + Jeera Rice',
      'Live Counters (2 choices)',
      'Assorted Premium Breads',
      'Complete Accompaniments',
      'Premium Dessert Spread',
      'Grand Buffet Setup',
      '5 Service Staff + Coordinator',
      'Premium Presentation & Decor',
    ],
  },
];

const idealEvents = [
  {
    name: 'Office Parties',
    desc: 'Team celebrations and corporate events',
    image: IMAGES.parties.corporate,
  },
  {
    name: 'Engagement Ceremonies',
    desc: 'Ring ceremonies and family celebrations',
    image: IMAGES.wedding.ring,
  },
  {
    name: 'Farmhouse Parties',
    desc: 'Outdoor celebrations with complete setup',
    image: IMAGES.parties.farmhouse,
  },
  {
    name: 'Anniversary Parties',
    desc: 'Milestone celebrations with family',
    image: IMAGES.wedding.anniversary,
  },
];

export default function CateringFor100GuestsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <Breadcrumbs
        items={[{ name: 'Catering for 100 Guests', href: '/catering-for-100-guests-noida/' }]}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Catering for 100 Guests in Noida
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Professional catering for medium-sized events. Office parties, engagement ceremonies,
              corporate gatherings, and family celebrations. Complete catering starting from just
              ₹{100 * SITE_CONFIG.pricing.essential}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppLink variant="primary">Get 100-Guest Quote</WhatsAppLink>
              <Link
                href="/menu/"
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-heading font-bold text-accent">
                ₹{100 * SITE_CONFIG.pricing.essential}
              </p>
              <p className="text-gray-600">Starting Price</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">3-5</p>
              <p className="text-gray-600">Service Staff</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">4-5 hrs</p>
              <p className="text-gray-600">Event Duration</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">48 hrs</p>
              <p className="text-gray-600">Min. Booking Notice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="100-Guest Catering Packages"
            subtitle="Complete pricing for your medium-sized event"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-background rounded-xl p-6 ${pkg.popular ? 'ring-2 ring-accent' : ''}`}
              >
                {pkg.popular && (
                  <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-3">
                    Most Popular for 100 Guests
                  </span>
                )}
                <h3 className="font-heading text-2xl font-semibold text-ink">{pkg.name}</h3>
                <p className="text-gray-600 mt-1">{pkg.bestFor}</p>
                <div className="mt-4">
                  <p className="text-4xl font-heading font-bold text-accent">
                    ₹{pkg.price.toLocaleString()}
                  </p>
                  <p className="text-gray-500">₹{pkg.perPlate}/plate × 100 guests</p>
                </div>
                <ul className="mt-6 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent text-xs">✓</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <WhatsAppLink variant="primary" className="w-full justify-center">
                    Book {pkg.name}
                  </WhatsAppLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Events */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Perfect Events for 100 Guests"
            subtitle="Our most popular occasions for this guest count"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {idealEvents.map((event) => (
              <div key={event.name} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-40">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg font-semibold text-ink">{event.name}</h3>
                  <p className="text-gray-600 text-sm">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                What&apos;s Included for 100 Guests
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Fresh Food Preparation:</strong>
                    <span className="text-gray-600">
                      {' '}
                      All dishes freshly prepared on event day with premium ingredients
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Professional Buffet Setup:</strong>
                    <span className="text-gray-600">
                      {' '}
                      Multiple serving stations, chafing dishes, elegant presentation
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Trained Service Staff:</strong>
                    <span className="text-gray-600">
                      {' '}
                      3-5 professional staff for buffet management and guest service
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Complete Crockery:</strong>
                    <span className="text-gray-600">
                      {' '}
                      Quality plates, bowls, glasses, and cutlery for all guests
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Full Cleanup:</strong>
                    <span className="text-gray-600">
                      {' '}
                      Complete post-event cleanup of catering area and equipment removal
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Event Coordination:</strong>
                    <span className="text-gray-600">
                      {' '}
                      Dedicated supervisor for smooth service flow (Signature & Royal)
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.parties.corporate}
                alt="100-guest catering setup in Noida"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="FAQs - Catering for 100 Guests" />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl shadow-sm group">
                <summary className="p-6 cursor-pointer font-semibold text-ink flex items-center justify-between">
                  {faq.question}
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Guest Counts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Need Different Guest Count?"
            subtitle="We have packages for all event sizes"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/catering-for-50-guests-noida/"
              className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <p className="text-4xl font-heading font-bold text-accent">50</p>
              <p className="text-ink font-semibold mt-2">Guests</p>
              <p className="text-gray-600 text-sm mt-1">Intimate gatherings & parties</p>
            </Link>
            <Link
              href="/catering-for-200-guests-noida/"
              className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <p className="text-4xl font-heading font-bold text-accent">200</p>
              <p className="text-ink font-semibold mt-2">Guests</p>
              <p className="text-gray-600 text-sm mt-1">Large parties & receptions</p>
            </Link>
            <Link
              href="/catering-for-500-guests-noida/"
              className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <p className="text-4xl font-heading font-bold text-accent">500+</p>
              <p className="text-ink font-semibold mt-2">Guests</p>
              <p className="text-gray-600 text-sm mt-1">Weddings & grand events</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Plan Your 100-Guest Event?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Share your event details and get a customized quote within minutes
          </p>
          <WhatsAppLink variant="primary">Get Your Free Quote</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
