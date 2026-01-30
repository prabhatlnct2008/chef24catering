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
  title: 'Catering for 500 Guests in Noida | Wedding & Grand Event Packages | Chef24Catering',
  description:
    'Premium catering for 500+ guests in Noida. Specialized in weddings, grand receptions, bhandara, large corporate events. Starting ₹1,25,000. Complete event management.',
  path: '/catering-for-500-guests-noida/',
});

const faqs = [
  {
    question: 'What is the cost of catering for 500 guests in Noida?',
    answer: `For 500 guests, our packages range from ₹${(500 * SITE_CONFIG.pricing.essential).toLocaleString()} (Essential) to ₹${(500 * SITE_CONFIG.pricing.royal).toLocaleString()} (Royal). The Essential package at ₹${SITE_CONFIG.pricing.essential}/plate is perfect for bhandaras and community events, while the Royal package at ₹${SITE_CONFIG.pricing.royal}/plate creates a memorable grand wedding experience.`,
  },
  {
    question: "What's included in catering for 500 people?",
    answer:
      'Our 500-guest packages include: Extensive multi-course menu with variety, 4-6 parallel buffet stations, premium equipment and crockery, 15-25 trained service staff, dedicated event management team, multiple live counters, professional buffet setup with grand decoration, full logistics management, and complete post-event cleanup.',
  },
  {
    question: 'How do you manage catering for 500+ guests efficiently?',
    answer:
      'For 500+ guests, we deploy multiple parallel buffet lines (4-6 stations), strategic placement for crowd flow, dedicated staff for each station, continuous food replenishment, and a central coordination team. Our experience with large events ensures smooth service without long queues.',
  },
  {
    question: 'Can you handle both lunch and dinner for 500 guests?',
    answer:
      'Yes! For multi-meal events like weddings, we offer special packages covering breakfast, lunch, high-tea, and dinner. We manage menu variety across meals and ensure fresh preparation for each service. Contact us for customized multi-meal pricing.',
  },
  {
    question: 'What events are ideal for 500-guest catering?',
    answer:
      'Perfect for: Grand weddings, wedding receptions, bhandaras, religious functions, large corporate events, community gatherings, political functions, school/college events, and any large-scale celebration requiring professional catering.',
  },
  {
    question: 'How far in advance should I book for 500+ guests?',
    answer:
      'For events with 500+ guests, we strongly recommend booking 2-4 weeks in advance. For wedding season (October-February) or auspicious dates, booking 1-2 months ahead is advisable to ensure availability and allow time for detailed planning.',
  },
  {
    question: 'Do you provide catering for bhandaras?',
    answer:
      'Yes! We specialize in bhandara catering with sattvik menu options. We can serve 500-5000+ guests with disciplined service flow, timely distribution, and pure vegetarian preparations. Special rates available for religious and charitable events.',
  },
  {
    question: 'What logistics support do you provide for 500-guest events?',
    answer:
      'For 500+ guests, we provide complete logistics including: transportation of equipment and food, on-site cooking facilities if needed, power backup arrangements, tent/pandal coordination, waste management, and a dedicated event manager for seamless execution.',
  },
];

const packages = [
  {
    name: 'Essential Package',
    price: 500 * SITE_CONFIG.pricing.essential,
    perPlate: SITE_CONFIG.pricing.essential,
    bestFor: 'Bhandaras, community gatherings',
    includes: [
      '4 Starters',
      '4 Main Course Options',
      'Dal + 3 Vegetables',
      'Rice + Pulao',
      '4 Types of Bread',
      'Complete Accompaniments',
      '2 Desserts',
      '4 Buffet Stations',
      '15 Service Staff',
      'Event Supervisor',
      'Basic Logistics Support',
    ],
  },
  {
    name: 'Signature Package',
    price: 500 * SITE_CONFIG.pricing.signature,
    perPlate: SITE_CONFIG.pricing.signature,
    bestFor: 'Weddings, large receptions',
    popular: true,
    includes: [
      '6 Starters (incl. 3 live)',
      '5 Main Course Options',
      'Dal Makhani + Premium Veg',
      'Biryani + Pulao + Rice',
      'Assorted Premium Breads',
      'Live Counters (4 choices)',
      'Chaat Counter',
      'Dessert Counter (4 items)',
      '5 Premium Buffet Stations',
      '20 Staff + Supervisors',
      'Elegant Decoration',
      'Full Logistics Management',
    ],
  },
  {
    name: 'Royal Package',
    price: 500 * SITE_CONFIG.pricing.royal,
    perPlate: SITE_CONFIG.pricing.royal,
    bestFor: 'Grand weddings, premium events',
    includes: [
      '8 Premium Starters',
      '6 Main Course Options',
      'Premium Dal + Vegetables',
      'Biryani + Pulao + Jeera Rice',
      'Live Counters (6 choices)',
      'Chaat + Mocktail Counter',
      'Premium Bread Station',
      'Grand Dessert Spread',
      '6 Royal Buffet Stations',
      '25 Staff + Event Manager',
      'Grand Decoration & Lighting',
      'Complete Event Management',
      'VIP Service for Family',
    ],
  },
];

const idealEvents = [
  {
    name: 'Grand Weddings',
    desc: 'Complete wedding catering with multiple meals',
    image: IMAGES.wedding.hero,
  },
  {
    name: 'Bhandara Services',
    desc: 'Large-scale sattvik catering for religious events',
    image: IMAGES.bhandara.section,
  },
  {
    name: 'Corporate Events',
    desc: 'Annual functions and large conferences',
    image: IMAGES.parties.corporate,
  },
  {
    name: 'Community Functions',
    desc: 'Religious gatherings and social events',
    image: IMAGES.grehPravesh.section,
  },
];

export default function CateringFor500GuestsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <Breadcrumbs
        items={[{ name: 'Catering for 500 Guests', href: '/catering-for-500-guests-noida/' }]}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Catering for 500+ Guests in Noida
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Grand-scale catering for weddings, bhandaras, and large events. Professional event
              management, multiple buffet stations, and flawless execution. Complete catering
              starting from ₹{(500 * SITE_CONFIG.pricing.essential).toLocaleString()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppLink variant="primary">Get 500-Guest Quote</WhatsAppLink>
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
                ₹{(500 * SITE_CONFIG.pricing.essential).toLocaleString()}
              </p>
              <p className="text-gray-600">Starting Price</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">15-25</p>
              <p className="text-gray-600">Service Staff</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">4-6</p>
              <p className="text-gray-600">Buffet Stations</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">2+ weeks</p>
              <p className="text-gray-600">Recommended Notice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="500-Guest Catering Packages"
            subtitle="Complete pricing for your grand event"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-background rounded-xl p-6 ${pkg.popular ? 'ring-2 ring-accent' : ''}`}
              >
                {pkg.popular && (
                  <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-3">
                    Most Popular for Weddings
                  </span>
                )}
                <h3 className="font-heading text-2xl font-semibold text-ink">{pkg.name}</h3>
                <p className="text-gray-600 mt-1">{pkg.bestFor}</p>
                <div className="mt-4">
                  <p className="text-4xl font-heading font-bold text-accent">
                    ₹{pkg.price.toLocaleString()}
                  </p>
                  <p className="text-gray-500">₹{pkg.perPlate}/plate × 500 guests</p>
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
          <p className="text-center text-gray-600 mt-8">
            Need catering for more than 500 guests? We handle events up to 5000+ guests.{' '}
            <WhatsAppLink variant="text" className="text-accent hover:underline">
              Contact us for custom pricing
            </WhatsAppLink>
            .
          </p>
        </div>
      </section>

      {/* Ideal Events */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Perfect Events for 500+ Guests"
            subtitle="Our expertise in large-scale catering"
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
                What&apos;s Included for 500+ Guests
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Large-Scale Food Preparation:</strong>
                    <span className="text-gray-600">
                      {' '}
                      Industrial kitchen setup with expert chefs for fresh, quality food in large
                      quantities
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Multiple Buffet Stations:</strong>
                    <span className="text-gray-600">
                      {' '}
                      4-6 parallel serving lines strategically placed for efficient crowd management
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
                      15-25 trained staff with supervisors and dedicated event manager
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Live Counters:</strong>
                    <span className="text-gray-600">
                      {' '}
                      Multiple live food stations including chaat, dosa, pasta, and more
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Grand Setup & Decoration:</strong>
                    <span className="text-gray-600">
                      {' '}
                      Elegant buffet presentation with flowers, lighting, and themed decor
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Complete Logistics:</strong>
                    <span className="text-gray-600">
                      {' '}
                      Transportation, setup, power backup coordination, and waste management
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Event Management:</strong>
                    <span className="text-gray-600">
                      {' '}
                      End-to-end coordination from planning to execution with dedicated manager
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.wedding.hero}
                alt="500-guest wedding catering setup in Noida"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bhandara Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src={IMAGES.bhandara.section}
                alt="Bhandara catering services in Noida"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                Specialized Bhandara Catering
              </h2>
              <p className="text-gray-600 mb-6">
                We offer dedicated bhandara and langar catering services for religious and
                charitable events. Our sattvik menu preparations follow all traditional guidelines
                while ensuring efficient service for large gatherings.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-accent">✓</span>
                  Pure sattvik vegetarian menu
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-accent">✓</span>
                  Disciplined service flow for 500-5000+ guests
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-accent">✓</span>
                  On-time food distribution
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-accent">✓</span>
                  Special rates for religious events
                </li>
              </ul>
              <Link
                href="/bhandara-catering-noida/"
                className="inline-block bg-accent text-white hover:bg-accent/90 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More About Bhandara Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="FAQs - Catering for 500+ Guests" />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-background rounded-xl shadow-sm group">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Need Different Guest Count?"
            subtitle="We have packages for all event sizes"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/catering-for-50-guests-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <p className="text-4xl font-heading font-bold text-accent">50</p>
              <p className="text-ink font-semibold mt-2">Guests</p>
              <p className="text-gray-600 text-sm mt-1">Intimate gatherings & parties</p>
            </Link>
            <Link
              href="/catering-for-100-guests-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <p className="text-4xl font-heading font-bold text-accent">100</p>
              <p className="text-ink font-semibold mt-2">Guests</p>
              <p className="text-gray-600 text-sm mt-1">Medium events & office parties</p>
            </Link>
            <Link
              href="/catering-for-200-guests-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow text-center"
            >
              <p className="text-4xl font-heading font-bold text-accent">200</p>
              <p className="text-ink font-semibold mt-2">Guests</p>
              <p className="text-gray-600 text-sm mt-1">Large parties & receptions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Plan Your Grand Event?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Share your event details and get a customized quote for 500+ guests
          </p>
          <WhatsAppLink variant="primary">Get Your Free Quote</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
