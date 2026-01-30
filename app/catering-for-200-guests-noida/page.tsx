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
  title: 'Catering for 200 Guests in Noida | Large Event Packages | Chef24Catering',
  description:
    'Professional catering for 200 guests in Noida. Ideal for wedding receptions, large family functions, corporate events. Starting ₹50,000. Full service included.',
  path: '/catering-for-200-guests-noida/',
});

const faqs = [
  {
    question: 'What is the cost of catering for 200 guests in Noida?',
    answer: `For 200 guests, our packages range from ₹${200 * SITE_CONFIG.pricing.essential} (Essential) to ₹${200 * SITE_CONFIG.pricing.royal} (Royal). The Essential package at ₹${SITE_CONFIG.pricing.essential}/plate works well for community gatherings, while the Royal package at ₹${SITE_CONFIG.pricing.royal}/plate is ideal for wedding receptions and grand celebrations.`,
  },
  {
    question: "What's included in catering for 200 people?",
    answer:
      'Our 200-guest packages include: Complete multi-course menu, multiple buffet stations for faster service, premium chafing dishes and crockery, 6-10 trained service staff, dedicated event supervisor, professional buffet setup with decoration, and complete post-event cleanup. Royal packages include multiple live counters and dedicated event coordinator.',
  },
  {
    question: 'How do you manage service flow for 200 guests?',
    answer:
      'For 200 guests, we set up 2-3 parallel buffet lines to ensure smooth flow and minimal wait times. Our trained staff guides guests, replenishes dishes promptly, and maintains the buffet presentation throughout the event. A dedicated supervisor oversees the entire operation.',
  },
  {
    question: 'Can you handle 200-guest catering at banquet halls?',
    answer:
      'Yes! We regularly cater at all major banquet halls and hotels in Noida. We coordinate with venue staff, follow their guidelines, and bring our complete setup. We can also work with venue-provided equipment if needed.',
  },
  {
    question: 'What events are ideal for 200-guest catering?',
    answer:
      'Perfect for: Wedding receptions, sangeet ceremonies, engagement parties, large anniversary celebrations, corporate annual functions, religious gatherings, community events, and large family reunions.',
  },
  {
    question: 'How far in advance should I book for 200 guests?',
    answer:
      'For 200-guest events, we recommend booking at least 1-2 weeks in advance for regular dates, and 3-4 weeks for wedding season (October-February) or public holidays. Early booking ensures menu customization and better coordination.',
  },
];

const packages = [
  {
    name: 'Essential Package',
    price: 200 * SITE_CONFIG.pricing.essential,
    perPlate: SITE_CONFIG.pricing.essential,
    bestFor: 'Community gatherings, religious functions',
    includes: [
      '4 Starters',
      '3 Paneer/Veg Mains',
      'Dal + 2 Seasonal Vegetables',
      'Rice + Pulao',
      '4 Types of Bread',
      'Salad + Raita + Chutneys',
      '2 Desserts',
      'Multi-Station Buffet Setup',
      '6 Service Staff',
      'Event Supervisor',
    ],
  },
  {
    name: 'Signature Package',
    price: 200 * SITE_CONFIG.pricing.signature,
    perPlate: SITE_CONFIG.pricing.signature,
    bestFor: 'Wedding receptions, large celebrations',
    popular: true,
    includes: [
      '5 Starters (incl. 2 live)',
      '4 Paneer/Veg Mains',
      'Dal Makhani + Premium Veg',
      'Veg Biryani + Pulao + Rice',
      'Assorted Premium Breads',
      'Complete Accompaniments',
      'Dessert Counter (3 items)',
      'Premium Multi-Station Setup',
      '8 Service Staff + Supervisor',
      'Elegant Buffet Decoration',
    ],
  },
  {
    name: 'Royal Package',
    price: 200 * SITE_CONFIG.pricing.royal,
    perPlate: SITE_CONFIG.pricing.royal,
    bestFor: 'Grand weddings, premium receptions',
    includes: [
      '6 Premium Starters',
      '5 Main Course Options',
      'Dal + Premium Vegetables',
      'Biryani + Pulao + Jeera Rice',
      'Live Counters (3 choices)',
      'Chaat Counter',
      'Premium Breads Station',
      'Grand Dessert Spread',
      'Royal Buffet Setup',
      '10 Staff + Event Coordinator',
      'Premium Decor & Presentation',
    ],
  },
];

const idealEvents = [
  {
    name: 'Wedding Receptions',
    desc: 'Grand wedding celebrations with full service',
    image: IMAGES.wedding.hero,
  },
  {
    name: 'Sangeet Ceremonies',
    desc: 'Pre-wedding functions with elegant menus',
    image: IMAGES.wedding.sangeet,
  },
  {
    name: 'Corporate Events',
    desc: 'Annual functions and large team gatherings',
    image: IMAGES.parties.corporate,
  },
  {
    name: 'Family Functions',
    desc: 'Large family celebrations and reunions',
    image: IMAGES.wedding.anniversary,
  },
];

export default function CateringFor200GuestsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <Breadcrumbs
        items={[{ name: 'Catering for 200 Guests', href: '/catering-for-200-guests-noida/' }]}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Catering for 200 Guests in Noida
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Professional catering for large events. Wedding receptions, sangeet ceremonies,
              corporate functions, and grand celebrations. Complete catering starting from just
              ₹{200 * SITE_CONFIG.pricing.essential}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppLink variant="primary">Get 200-Guest Quote</WhatsAppLink>
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
                ₹{200 * SITE_CONFIG.pricing.essential}
              </p>
              <p className="text-gray-600">Starting Price</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">6-10</p>
              <p className="text-gray-600">Service Staff</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">5-6 hrs</p>
              <p className="text-gray-600">Event Duration</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">1 week</p>
              <p className="text-gray-600">Recommended Notice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="200-Guest Catering Packages"
            subtitle="Complete pricing for your large event"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-background rounded-xl p-6 ${pkg.popular ? 'ring-2 ring-accent' : ''}`}
              >
                {pkg.popular && (
                  <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-3">
                    Most Popular for 200 Guests
                  </span>
                )}
                <h3 className="font-heading text-2xl font-semibold text-ink">{pkg.name}</h3>
                <p className="text-gray-600 mt-1">{pkg.bestFor}</p>
                <div className="mt-4">
                  <p className="text-4xl font-heading font-bold text-accent">
                    ₹{pkg.price.toLocaleString()}
                  </p>
                  <p className="text-gray-500">₹{pkg.perPlate}/plate × 200 guests</p>
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
            title="Perfect Events for 200 Guests"
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
                What&apos;s Included for 200 Guests
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Premium Food Preparation:</strong>
                    <span className="text-gray-600">
                      {' '}
                      All dishes freshly prepared with high-quality ingredients by our expert chefs
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Multi-Station Buffet:</strong>
                    <span className="text-gray-600">
                      {' '}
                      2-3 parallel serving lines for efficient service and minimal wait times
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Professional Team:</strong>
                    <span className="text-gray-600">
                      {' '}
                      6-10 trained service staff with dedicated supervisor for seamless operations
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Complete Equipment:</strong>
                    <span className="text-gray-600">
                      {' '}
                      Premium crockery, chafing dishes, serving equipment, and buffet tables
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Buffet Decoration:</strong>
                    <span className="text-gray-600">
                      {' '}
                      Elegant presentation with flowers, draping, and themed setup (Signature &
                      Royal)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Complete Cleanup:</strong>
                    <span className="text-gray-600">
                      {' '}
                      Full post-event cleanup, waste disposal, and equipment removal
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.wedding.hero}
                alt="200-guest catering setup in Noida"
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
          <SectionHeading title="FAQs - Catering for 200 Guests" />
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
              href="/catering-for-100-guests-noida/"
              className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <p className="text-4xl font-heading font-bold text-accent">100</p>
              <p className="text-ink font-semibold mt-2">Guests</p>
              <p className="text-gray-600 text-sm mt-1">Medium events & office parties</p>
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
            Ready to Plan Your 200-Guest Event?
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
