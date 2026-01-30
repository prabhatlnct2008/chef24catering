import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';
import SectorGrid from '@/components/sections/SectorGrid';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Corporate Catering in Noida | Office Lunch & Event Catering | Chef24Catering',
  description:
    'Professional corporate catering in Noida. Daily office lunch, meeting catering, annual day events, team parties. Reliable service for Sector 62, 63, 65, 125. Starting ₹200/plate.',
  path: '/corporate-catering-noida/',
  image: IMAGES.parties.corporate,
});

const faqs = [
  {
    question: 'What is the cost of corporate catering in Noida?',
    answer:
      'Our corporate catering starts from ₹200/plate for basic lunch boxes and goes up to ₹500/plate for premium buffet spreads. Daily office lunch subscriptions are available at ₹150-250/person/day. Large corporate events (100+ guests) get volume discounts.',
  },
  {
    question: 'Do you provide daily office lunch catering in Noida?',
    answer:
      'Yes! We offer daily lunch catering for corporate offices across Noida. Options include: individual lunch boxes (₹150-200), buffet setup (₹200-350/person), and customized meal plans. We serve offices in Sector 62, 63, 64, 65, 125, 127, and other areas.',
  },
  {
    question: 'What is included in corporate meeting catering?',
    answer:
      'Our meeting catering packages include: tea/coffee with snacks (₹80-150/person), working lunch boxes (₹200-300/person), or full buffet setup (₹350-500/person). We also provide disposables, setup, and serving staff as needed.',
  },
  {
    question: 'Can you cater for large corporate events like Annual Day?',
    answer:
      'Absolutely! We specialize in large corporate events including Annual Days, Award Ceremonies, Team Outings, and Corporate Parties. We have served events for 500+ guests with multiple food counters, live stations, and professional service.',
  },
  {
    question: 'Do you provide vegetarian and non-vegetarian options for corporate events?',
    answer:
      'We specialize in pure vegetarian catering. Our menu includes diverse options like North Indian, South Indian, Chinese, Continental, and regional cuisines - all vegetarian. We can create menus that satisfy all dietary preferences while maintaining our vegetarian commitment.',
  },
  {
    question: 'What is the minimum order for corporate catering?',
    answer:
      'For daily office lunch, minimum is 20 meals per day. For meeting catering, minimum is 10 people. For corporate events, minimum is 50 guests. We offer flexible packages for startups and small teams as well.',
  },
  {
    question: 'How far in advance should we book corporate catering?',
    answer:
      'For daily lunch subscriptions: 2-3 days notice. For meeting catering: 24-48 hours (subject to availability). For large corporate events: 1-2 weeks preferred. Emergency same-day catering available for small orders.',
  },
  {
    question: 'Do you provide catering for tech parks and corporate campuses in Noida?',
    answer:
      'Yes! We regularly cater to offices in major tech parks and corporate hubs including Sector 62 (NSEZ), Sector 63, Sector 125, 127, and Express Way area. We are familiar with building access protocols and timing requirements.',
  },
  {
    question: 'Can you handle dietary restrictions for corporate events?',
    answer:
      'Yes, we accommodate various dietary needs including Jain food (no onion/garlic), sattvik options, gluten-free, and regional preferences. We clearly label all dishes and can create custom menus for specific requirements.',
  },
  {
    question: 'Do you provide billing and invoices for corporate orders?',
    answer:
      'Yes, we provide proper GST invoices for all corporate orders. Monthly billing arrangements available for regular clients. We can accommodate your procurement and payment processes for seamless vendor management.',
  },
];

const corporateServices = [
  {
    name: 'Daily Office Lunch',
    description: 'Regular meal service for your team',
    priceRange: '₹150-250/person',
    features: ['Fresh daily preparation', 'Rotating menu', 'On-time delivery', 'Healthy options'],
  },
  {
    name: 'Meeting Catering',
    description: 'Impress clients and teams',
    priceRange: '₹80-350/person',
    features: ['Tea/coffee service', 'Snacks platters', 'Working lunches', 'Premium presentations'],
  },
  {
    name: 'Corporate Events',
    description: 'Annual days, parties, celebrations',
    priceRange: '₹300-600/person',
    features: ['Buffet setup', 'Live counters', 'Service staff', 'Theme catering'],
  },
  {
    name: 'Team Outings',
    description: 'Offsite and team building events',
    priceRange: '₹250-450/person',
    features: ['Picnic packs', 'BBQ options', 'Outdoor setup', 'Fun food stations'],
  },
];

const corporatePackages = [
  {
    name: 'Executive Lunch',
    price: 200,
    bestFor: 'Daily office lunches, small meetings',
    includes: [
      '2 Rotis/Rice',
      '1 Dal',
      '1 Sabzi',
      '1 Paneer/Veg Main',
      'Salad',
      'Pickle/Chutney',
      'Sweet',
      'Packed in eco-friendly boxes',
    ],
  },
  {
    name: 'Business Lunch Buffet',
    price: 350,
    bestFor: 'Client meetings, board lunches',
    popular: true,
    includes: [
      '2 Starters',
      '2 Main Course Options',
      'Dal + Seasonal Veg',
      'Rice + 2 Breads',
      'Salad Bar',
      'Raita & Papad',
      '2 Desserts',
      'Buffet Setup + Serving',
      'Disposables included',
    ],
  },
  {
    name: 'Premium Corporate',
    price: 500,
    bestFor: 'Annual days, award ceremonies, galas',
    includes: [
      '4 Assorted Starters',
      '3 Main Course Options',
      'Premium Dal Makhani',
      'Live Counter (1 choice)',
      'Biryani/Pulao',
      'Assorted Breads',
      'Complete Accompaniments',
      'Dessert Counter',
      'Full Service Staff',
      'Premium Presentation',
    ],
  },
];

const corporateClients = [
  'IT Companies',
  'Startups',
  'MNCs',
  'Banks & Financial Services',
  'Manufacturing Units',
  'BPOs & Call Centers',
  'Co-working Spaces',
  'Government Offices',
];

const noidaSectors = [
  { sector: 'Sector 62', area: 'NSEZ, Tech Companies' },
  { sector: 'Sector 63', area: 'IT Hub, Corporate Offices' },
  { sector: 'Sector 64', area: 'Industrial Area' },
  { sector: 'Sector 65', area: 'Residential & Commercial' },
  { sector: 'Sector 125', area: 'Express Way, Tech Parks' },
  { sector: 'Sector 127', area: 'Business District' },
];

export default function CorporateCateringPage() {
  return (
    <>
      <ServiceSchema
        name="Corporate Catering in Noida"
        description="Professional corporate catering services in Noida. Daily office lunch, meeting catering, annual day events, and team parties. Reliable service across all sectors."
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumbs
        items={[{ name: 'Corporate Catering Noida', href: '/corporate-catering-noida/' }]}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-gold text-white text-sm px-3 py-1 rounded-full mb-4">
              Trusted by 100+ Offices in Noida
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Corporate Catering in Noida
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Professional office catering for daily lunches, meetings, annual days, and corporate events.
              Reliable service, on-time delivery, and food that impresses. Serving Sector 62, 63, 65, 125
              and all Noida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppLink variant="primary">Get Corporate Quote</WhatsAppLink>
              <Link
                href="/menu/"
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                View Menu Options
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
              <p className="text-3xl font-heading font-bold text-accent">₹150</p>
              <p className="text-gray-600">Starting per person</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">100+</p>
              <p className="text-gray-600">Corporate Clients</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">99%</p>
              <p className="text-gray-600">On-time Delivery</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">GST</p>
              <p className="text-gray-600">Invoice Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Corporate Catering Services"
            subtitle="Customized solutions for every business need"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateServices.map((service) => (
              <div key={service.name} className="bg-background rounded-xl p-6">
                <h3 className="font-heading text-xl font-semibold text-ink">{service.name}</h3>
                <p className="text-gray-600 mt-1">{service.description}</p>
                <p className="text-accent font-bold mt-3">{service.priceRange}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Corporate Catering Packages"
            subtitle="Transparent pricing for your business events"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporatePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-xl p-6 ${pkg.popular ? 'ring-2 ring-accent' : ''}`}
              >
                {pkg.popular && (
                  <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-2xl font-semibold text-ink">{pkg.name}</h3>
                <p className="text-gray-600 mt-1">{pkg.bestFor}</p>
                <div className="mt-4">
                  <p className="text-4xl font-heading font-bold text-accent">
                    ₹{pkg.price}
                  </p>
                  <p className="text-gray-500">per person</p>
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
                    Get Quote
                  </WhatsAppLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="We Serve Corporate Noida"
            subtitle="On-time delivery across all major business hubs"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {noidaSectors.map((item) => (
              <div
                key={item.sector}
                className="bg-background rounded-xl p-4 text-center shadow-sm"
              >
                <p className="font-semibold text-ink">{item.sector}</p>
                <p className="text-xs text-gray-500 mt-1">{item.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.parties.corporate}
                alt="Corporate catering setup in Noida office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                Why Businesses Choose Us
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Punctual Delivery:</strong>
                    <span className="text-gray-600"> 99% on-time delivery rate. We understand business timelines.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Consistent Quality:</strong>
                    <span className="text-gray-600"> Same great taste every time. Standardized recipes and processes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Professional Service:</strong>
                    <span className="text-gray-600"> Trained staff, proper uniforms, and client-facing presentation.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Flexible Billing:</strong>
                    <span className="text-gray-600"> GST invoices, monthly billing, corporate payment terms.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Single Point Contact:</strong>
                    <span className="text-gray-600"> Dedicated account manager for regular corporate clients.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="We Serve All Business Types"
            subtitle="From startups to large enterprises"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {corporateClients.map((client) => (
              <div
                key={client}
                className="bg-background rounded-xl p-6 text-center shadow-sm"
              >
                <span className="font-medium text-ink">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Corporate Events We Cater"
            subtitle="Complete catering solutions for all business occasions"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Daily Office Lunch',
              'Board Meetings',
              'Client Presentations',
              'Training Sessions',
              'Annual Day',
              'Award Ceremonies',
              'Team Lunches',
              'Product Launches',
              'Conference Catering',
              'Workshop Catering',
              'Farewell Parties',
              'Festival Celebrations',
            ].map((event) => (
              <div
                key={event}
                className="bg-white rounded-xl p-4 text-center shadow-sm"
              >
                <span className="font-medium text-ink">{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="FAQs - Corporate Catering in Noida" />
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

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Upgrade Your Office Catering?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Whether it is daily lunch for your team or catering for your annual day,
            we deliver quality food on time, every time. Get a customized quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppLink variant="primary">Get Corporate Quote</WhatsAppLink>
            <Link
              href="/pricing/"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              View All Pricing
            </Link>
          </div>
        </div>
      </section>

      <SectorGrid />
    </>
  );
}
