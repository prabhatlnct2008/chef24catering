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
  title: 'Catering for 50 Guests in Noida | Small Party Packages | Chef24Catering',
  description:
    'Perfect catering packages for 50 guests in Noida. Ideal for birthday parties, house warmings, kitty parties. Starting ₹12,500. Menu + setup included.',
  path: '/catering-for-50-guests-noida/',
});

const faqs = [
  {
    question: 'What is the cost of catering for 50 guests in Noida?',
    answer: `For 50 guests, our packages range from ₹${50 * SITE_CONFIG.pricing.essential} (Essential) to ₹${50 * SITE_CONFIG.pricing.royal} (Royal). The Essential package at ₹${SITE_CONFIG.pricing.essential}/plate is perfect for casual gatherings, while the Royal package at ₹${SITE_CONFIG.pricing.royal}/plate is ideal for special celebrations with premium menu and service.`,
  },
  {
    question: 'What\'s included in catering for 50 people?',
    answer: 'Our 50-guest packages include: Full menu as per selected package, buffet setup with chafing dishes, serving spoons and basic crockery, 2 service staff for buffet management, and post-event cleanup. Premium packages include additional service staff and live counters.',
  },
  {
    question: 'Can you set up catering for 50 guests in an apartment?',
    answer: 'Yes! We specialize in apartment-friendly setups. For 50 guests, we can efficiently set up a buffet in your living/dining area or balcony. We use compact buffet arrangements that don\'t overwhelm the space.',
  },
  {
    question: 'How much space is needed for 50-guest catering?',
    answer: 'For buffet setup, we need approximately 6-8 feet of table space (we provide tables). Guests will need standing/seating area of about 400-500 sq ft for comfortable movement. We can work with smaller spaces using smart arrangements.',
  },
  {
    question: 'What events are best suited for 50-guest catering?',
    answer: 'Perfect for: Birthday parties, kitty parties, anniversary celebrations, house warming ceremonies, engagement parties, baby showers, farewell parties, and small office celebrations.',
  },
  {
    question: 'Do you provide chairs and tables for 50 guests?',
    answer: 'We provide buffet tables and serving equipment. For guest seating, we can arrange chairs and tables at additional cost (₹50-80 per chair, ₹200-300 per table). Many clients use their existing furniture or rent separately.',
  },
];

const packages = [
  {
    name: 'Essential Package',
    price: 50 * SITE_CONFIG.pricing.essential,
    perPlate: SITE_CONFIG.pricing.essential,
    bestFor: 'Casual gatherings, kitty parties',
    includes: [
      '2 Starters',
      '1 Paneer Gravy',
      '1 Dal',
      '1 Seasonal Veg',
      'Rice',
      '2 Types of Bread',
      'Salad + Chutney',
      '1 Dessert',
      'Basic Buffet Setup',
      '1 Service Staff',
    ],
  },
  {
    name: 'Signature Package',
    price: 50 * SITE_CONFIG.pricing.signature,
    perPlate: SITE_CONFIG.pricing.signature,
    bestFor: 'Birthdays, anniversaries, special occasions',
    popular: true,
    includes: [
      '3 Starters',
      '2 Paneer/Veg Mains',
      'Dal Makhani',
      '1 Seasonal Veg',
      'Veg Biryani/Pulao',
      'Assorted Breads',
      'Raita + Salad',
      '2 Desserts',
      'Premium Buffet Setup',
      '2 Service Staff',
      'Buffet Decoration',
    ],
  },
  {
    name: 'Royal Package',
    price: 50 * SITE_CONFIG.pricing.royal,
    perPlate: SITE_CONFIG.pricing.royal,
    bestFor: 'Premium celebrations, milestone events',
    includes: [
      '4 Premium Starters',
      '3 Main Course Options',
      'Dal + Premium Veg',
      'Biryani + Pulao',
      'Live Counter (1 choice)',
      'Assorted Breads',
      'Complete Accompaniments',
      'Premium Dessert Spread',
      'Full Buffet Setup',
      '3 Service Staff',
      'Premium Presentation',
    ],
  },
];

const idealEvents = [
  { name: 'Birthday Parties', desc: 'Adult and kids birthday celebrations', image: IMAGES.parties.birthday },
  { name: 'Kitty Parties', desc: 'Ladies gatherings with elegant menu', image: IMAGES.parties.kitty },
  { name: 'House Warming', desc: 'Greh pravesh with traditional menu', image: IMAGES.grehPravesh.section },
  { name: 'Anniversary', desc: 'Milestone anniversary celebrations', image: IMAGES.wedding.anniversary },
];

export default function CateringFor50GuestsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <Breadcrumbs
        items={[{ name: 'Catering for 50 Guests', href: '/catering-for-50-guests-noida/' }]}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Catering for 50 Guests in Noida
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Perfect packages for intimate gatherings. Birthday parties, house warmings,
              kitty parties, and small celebrations. Complete catering starting from just
              ₹{50 * SITE_CONFIG.pricing.essential}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppLink variant="primary">Get 50-Guest Quote</WhatsAppLink>
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
                ₹{50 * SITE_CONFIG.pricing.essential}
              </p>
              <p className="text-gray-600">Starting Price</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">2-3</p>
              <p className="text-gray-600">Service Staff</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">3-4 hrs</p>
              <p className="text-gray-600">Event Duration</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">24 hrs</p>
              <p className="text-gray-600">Min. Booking Notice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="50-Guest Catering Packages"
            subtitle="Complete pricing for your intimate gathering"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-background rounded-xl p-6 ${pkg.popular ? 'ring-2 ring-accent' : ''}`}
              >
                {pkg.popular && (
                  <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-3">
                    Most Popular for 50 Guests
                  </span>
                )}
                <h3 className="font-heading text-2xl font-semibold text-ink">{pkg.name}</h3>
                <p className="text-gray-600 mt-1">{pkg.bestFor}</p>
                <div className="mt-4">
                  <p className="text-4xl font-heading font-bold text-accent">
                    ₹{pkg.price.toLocaleString()}
                  </p>
                  <p className="text-gray-500">₹{pkg.perPlate}/plate × 50 guests</p>
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
            title="Perfect Events for 50 Guests"
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
                What&apos;s Included for 50 Guests
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Complete Food Preparation:</strong>
                    <span className="text-gray-600"> Fresh food prepared on the day of your event</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Buffet Setup:</strong>
                    <span className="text-gray-600"> Tables, chafing dishes, serving equipment, and presentation</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Service Staff:</strong>
                    <span className="text-gray-600"> 1-3 trained staff for buffet management and serving</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Basic Crockery:</strong>
                    <span className="text-gray-600"> Plates, bowls, glasses, and cutlery for all guests</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Cleanup:</strong>
                    <span className="text-gray-600"> Post-event cleanup of catering area and waste disposal</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.parties.birthday}
                alt="50-guest catering setup in Noida"
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
          <SectionHeading title="FAQs - Catering for 50 Guests" />
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
              href="/catering-for-100-guests-noida/"
              className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <p className="text-4xl font-heading font-bold text-accent">100</p>
              <p className="text-ink font-semibold mt-2">Guests</p>
              <p className="text-gray-600 text-sm mt-1">Medium events & celebrations</p>
            </Link>
            <Link
              href="/catering-for-200-guests-noida/"
              className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <p className="text-4xl font-heading font-bold text-accent">200</p>
              <p className="text-ink font-semibold mt-2">Guests</p>
              <p className="text-gray-600 text-sm mt-1">Large parties & functions</p>
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
            Ready to Plan Your 50-Guest Event?
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
