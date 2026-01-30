import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';
import ImageGallery from '@/components/ui/ImageGallery';
import SectionHeading from '@/components/ui/SectionHeading';
import SectorGrid from '@/components/sections/SectorGrid';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import FAQSchema from '@/components/seo/FAQSchema';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Catering in Noida Sector 65 | House Parties & Family Functions | Chef24Catering',
  description:
    'Best catering service in Noida Sector 65. Specializing in house parties, family functions, birthday celebrations, and intimate gatherings. Packages from ₹250/plate.',
  path: '/catering/noida-sector-65/',
});

const sectorFaqs = [
  {
    question: 'Do you cater for small house parties in Sector 65?',
    answer:
      'Yes, house parties are our specialty in Sector 65! We offer packages starting from just 20 guests, perfect for intimate gatherings in apartments and independent houses. Our setup is designed to work efficiently in home spaces without creating any mess.',
  },
  {
    question: 'What is the cost of catering for 50 guests in Sector 65 Noida?',
    answer: `For 50 guests in Sector 65, our packages range from ₹${SITE_CONFIG.pricing.essential * 50} (Essential at ₹${SITE_CONFIG.pricing.essential}/plate) to ₹${SITE_CONFIG.pricing.royal * 50} (Royal at ₹${SITE_CONFIG.pricing.royal}/plate). This includes complete setup, serving, and cleanup in your home or society community hall.`,
  },
  {
    question: 'Can you set up catering in Sector 65 apartments?',
    answer:
      'Absolutely! We regularly cater in Sector 65 apartments and builder floors. We bring compact equipment, work in limited kitchen spaces, and set up elegant buffets in living rooms. We\'re familiar with most Sector 65 societies and their access protocols.',
  },
  {
    question: 'Do you provide catering for birthday parties in Sector 65?',
    answer:
      'Yes, birthday party catering is very popular in Sector 65. We offer kids-friendly menus (pasta, pizza-style items, fun desserts), themed setups, and can coordinate with decorators. Packages for birthday parties start from ₹300/person with minimum 25 guests.',
  },
  {
    question: 'Is Jain food available for events in Sector 65?',
    answer:
      'Yes, we offer complete Jain catering (no onion, no garlic, no root vegetables) for Sector 65 families. Many residents here prefer Jain food for Greh Pravesh, puja functions, and family gatherings. We use separate utensils for Jain preparation.',
  },
  {
    question: 'What types of family functions do you cater in Sector 65?',
    answer:
      'We cater all family functions in Sector 65: Greh Pravesh, anniversaries, birthday parties, baby showers, engagement ceremonies, and small weddings. The mixed residential nature of Sector 65 means we handle events in both apartments and independent houses regularly.',
  },
  {
    question: 'How early should I book catering for Sector 65 events?',
    answer:
      'For weekday events, 5-7 days advance booking is usually sufficient. For weekends, especially during wedding season or festive periods, we recommend 2 weeks advance booking. Same-day catering may be possible for smaller events if you contact us before 10 AM.',
  },
  {
    question: 'Do you cater for society events in Sector 65?',
    answer:
      'Yes, we handle society-level events including Diwali parties, Holi celebrations, society annual days, and building inauguration events. We can set up in common areas, terraces, or ground floors. Volume discounts available for 100+ guest events.',
  },
];

const popularVenues = [
  'Paras Tierea Society',
  'Lotus Boulevard',
  'Supertech Cape Town',
  'ATS Pristine',
  'Builder Floors - Block A-F',
  'Independent Houses',
];

const eventTypes = [
  {
    name: 'House Parties',
    description: 'Intimate gatherings with customized menus for 20-50 guests',
    icon: '🏠',
  },
  {
    name: 'Birthday Celebrations',
    description: 'Kids and adults parties with themed food options',
    icon: '🎂',
  },
  {
    name: 'Family Functions',
    description: 'Greh Pravesh, anniversaries, pujas, and get-togethers',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    name: 'Society Events',
    description: 'Festival celebrations and community gatherings',
    icon: '🏢',
  },
];

const packages = [
  {
    name: 'House Party Special',
    price: '₹350',
    description: 'Per person | Min 20 guests',
    items: [
      '3 Starters',
      '4 Main Course',
      'Dal + Rice + Roti',
      '2 Desserts',
      'Home Setup & Cleanup',
    ],
  },
  {
    name: 'Family Celebration',
    price: '₹450',
    description: 'Per person | Min 35 guests',
    items: [
      'Welcome Drink',
      '4 Starters',
      '5 Main Course',
      'Live Roti Counter',
      '3 Desserts',
      'Premium Crockery',
    ],
  },
  {
    name: 'Premium Event',
    price: '₹600',
    description: 'Per person | Min 50 guests',
    items: [
      'Mocktail Counter',
      '5 Starters + Chaat',
      '6 Main Course',
      'Live Counters (2)',
      'Ice Cream + Desserts',
      'Uniformed Staff',
    ],
  },
];

const testimonial = {
  quote:
    'We ordered catering for my daughter\'s first birthday in our Sector 65 apartment. Chef24Catering managed everything in our small space beautifully. The kids loved the pasta counter and adults appreciated the variety. Will definitely order again!',
  author: 'Sneha Agarwal',
  location: 'Lotus Boulevard, Sector 65',
  event: 'Birthday Party - 40 guests',
};

const proofImages = [
  IMAGES.parties.birthday,
  IMAGES.venues[2],
  IMAGES.wedding.tiles[2],
  IMAGES.wedding.tiles[3],
];

export default function Sector65Page() {
  return (
    <>
      <FAQSchema faqs={sectorFaqs} />

      <Breadcrumbs
        items={[
          { name: 'Catering', href: '/catering/noida-sector-65/' },
          { name: 'Sector 65', href: '/catering/noida-sector-65/' },
        ]}
      />

      <Hero
        title="Catering in Noida Sector 65 — House Parties & Family Functions"
        subtitle="From intimate home gatherings to society celebrations — fresh food, professional service, hassle-free experience."
        backgroundImage={IMAGES.banner}
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-6">
              Your Trusted Caterer in Sector 65, Noida
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sector 65 is a vibrant residential area with a perfect mix of apartments, builder floors,
              and independent houses. We understand the unique catering needs here — from compact
              apartment parties to large society celebrations. Our team is experienced in setting up
              in various spaces, managing parking constraints, and delivering delicious food on time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it&apos;s your child&apos;s birthday, a Greh Pravesh ceremony, or a weekend get-together
              with friends, we bring the same passion and quality to every event in Sector 65.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Events We Cater in Sector 65"
            subtitle="Specialized catering for every occasion"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event) => (
              <div
                key={event.name}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl mb-4 block">{event.icon}</span>
                <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                  {event.name}
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Popular Packages for Sector 65"
            subtitle="Designed for home events and intimate gatherings"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow ${
                  index === 1 ? 'ring-2 ring-accent' : ''
                }`}
              >
                {index === 1 && (
                  <span className="bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-2xl font-bold text-ink">
                  {pkg.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">{pkg.description}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppLink
                  variant="primary"
                  message={`Hi, I'm interested in your ${pkg.name} for an event in Sector 65.`}
                  className="mt-6 w-full justify-center"
                >
                  Get Quote
                </WhatsAppLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Venues */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="We Cater Across Sector 65"
            subtitle="Familiar with all major societies and residential blocks"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularVenues.map((venue) => (
              <div
                key={venue}
                className="bg-white rounded-lg p-4 text-center shadow-sm"
              >
                <span className="text-gray-700 font-medium text-sm">{venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <p className="text-xl md:text-2xl text-white italic mb-6">
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="text-white/90">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm">{testimonial.location}</p>
              <p className="text-sm text-gold">{testimonial.event}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Recent Events in Sector 65" />
          <ImageGallery images={proofImages} columns={4} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Sector 65 Catering FAQs"
            subtitle="Common questions from Sector 65 residents"
          />
          <div className="space-y-4">
            {sectorFaqs.map((faq, index) => (
              <details
                key={index}
                className="bg-background rounded-xl shadow-sm group"
              >
                <summary className="p-6 cursor-pointer font-semibold text-ink flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-accent group-open:rotate-180 transition-transform flex-shrink-0">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Planning an Event in Sector 65?
          </h2>
          <p className="text-white/80 mb-6">
            WhatsApp us your event details for a customized quote
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing/"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              See Pricing
            </Link>
            <Link
              href="/menu/"
              className="bg-gold text-white hover:bg-gold/90 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              See Menu
            </Link>
            <WhatsAppLink variant="primary">Get Sector 65 Quote</WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Nearby Sectors */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Also Serving Nearby Sectors"
            subtitle="Quick service to neighboring areas"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/catering/noida-sector-63/"
              className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-primary font-semibold">Sector 63</span>
            </Link>
            <Link
              href="/catering/noida-sector-64/"
              className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-primary font-semibold">Sector 64</span>
            </Link>
            <Link
              href="/catering/noida-sector-70/"
              className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-primary font-semibold">Sector 70</span>
            </Link>
            <Link
              href="/catering/noida-sector-125/"
              className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-primary font-semibold">Sector 125</span>
            </Link>
          </div>
        </div>
      </section>

      <SectorGrid currentSector="65" />
    </>
  );
}
