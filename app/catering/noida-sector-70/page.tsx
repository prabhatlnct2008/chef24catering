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
  title: 'Catering in Noida Sector 70 | Society Events & Birthday Parties | Chef24Catering',
  description:
    'Professional catering in Noida Sector 70. Society events, birthday parties, anniversaries, and community celebrations. Starting ₹250/plate with full setup.',
  path: '/catering/noida-sector-70/',
});

const sectorFaqs = [
  {
    question: 'What types of events do you cater in Sector 70 Noida?',
    answer:
      'We cater all types of events in Sector 70: Society annual days, festival celebrations (Diwali, Holi, Navratri), birthday parties (kids and adults), anniversary celebrations, Greh Pravesh, baby showers, and retirement parties. Our team is experienced with both apartment gatherings and larger society-level events.',
  },
  {
    question: 'What is the catering rate per plate in Sector 70?',
    answer: `Our rates in Sector 70 start from ₹${SITE_CONFIG.pricing.essential}/plate for basic packages and go up to ₹${SITE_CONFIG.pricing.royal}/plate for premium packages with live counters. For society events with 100+ guests, we offer special volume pricing. WhatsApp us for a customized quote.`,
  },
  {
    question: 'Do you set up catering in Sector 70 society common areas?',
    answer:
      'Yes, we frequently set up in Sector 70 society common areas, club houses, and terraces. We bring all necessary equipment including tables, buffet setup, and serving items. We coordinate with society security for smooth entry and setup. Post-event cleanup is included.',
  },
  {
    question: 'Can you cater for children\'s birthday parties in Sector 70?',
    answer:
      'Absolutely! Kids\' birthday parties are very popular in Sector 70 societies. We offer special kids menus with pasta, mini pizzas, French fries, sandwiches, and fun desserts. We can also arrange themed food presentations. Packages start from ₹300/child with minimum 20 guests.',
  },
  {
    question: 'Do you provide catering for Diwali and Holi parties in Sector 70?',
    answer:
      'Yes, festival catering is one of our specialties. For Diwali, we offer festive thalis, mithai counters, and chat stations. For Holi, we have special menus with thandai, gujiya, and holi snacks. Many Sector 70 societies book us for their annual festival celebrations.',
  },
  {
    question: 'What is the minimum order for society events in Sector 70?',
    answer:
      'For society common area events, our minimum order is 50 guests for buffet setup. For smaller apartment gatherings, we can cater from 25 guests. For very large society events (200+), we recommend 2-3 weeks advance booking.',
  },
  {
    question: 'Do you offer anniversary catering packages in Sector 70?',
    answer:
      'Yes, we have special anniversary packages perfect for Sector 70 celebrations. Our Silver Anniversary package (₹450/person) includes mocktails, premium starters, and a special cake-cutting arrangement. We also offer décor coordination for milestone anniversaries.',
  },
  {
    question: 'How do you handle parking and logistics in Sector 70?',
    answer:
      'We\'re familiar with Sector 70 society layouts and parking situations. Our vehicles are clearly marked, and we coordinate with security in advance. For large events, we schedule our arrival during low-traffic hours. We ensure no inconvenience to other residents.',
  },
];

const popularSocieties = [
  'Gardenia Glory',
  'Express Zenith',
  'Amrapali Zodiac',
  'Supertech Eco Village',
  'Ajnara Homes',
  'Prateek Wisteria',
];

const eventTypes = [
  {
    name: 'Society Annual Days',
    description: 'Large-scale events with multiple food counters',
    icon: '🎪',
  },
  {
    name: 'Birthday Parties',
    description: 'Kids and adults celebrations with themed menus',
    icon: '🎈',
  },
  {
    name: 'Anniversary Celebrations',
    description: 'Elegant setups for milestone celebrations',
    icon: '💝',
  },
  {
    name: 'Festival Events',
    description: 'Diwali, Holi, and other cultural celebrations',
    icon: '🪔',
  },
];

const packages = [
  {
    name: 'Society Event Basic',
    price: '₹300',
    description: 'Per person | Min 50 guests',
    items: [
      '3 Starters',
      '4 Main Course',
      'Dal + Rice + Roti',
      '2 Desserts',
      'Buffet Setup',
      'Service Staff',
    ],
  },
  {
    name: 'Celebration Package',
    price: '₹450',
    description: 'Per person | Min 40 guests',
    items: [
      'Welcome Mocktail',
      '4 Starters',
      '5 Main Course',
      'Live Roti Counter',
      '3 Desserts',
      'Premium Crockery',
    ],
  },
  {
    name: 'Grand Event',
    price: '₹600',
    description: 'Per person | Min 75 guests',
    items: [
      'Mocktail + Chaat Counter',
      '5 Starters',
      '6 Main Course Premium',
      'Live Counters (2)',
      'Dessert Buffet',
      'Decorated Setup',
    ],
  },
];

const testimonial = {
  quote:
    'We booked Chef24Catering for our society\'s Diwali celebration with 150 guests. The food was delicious, setup was beautiful, and service was impeccable. Everyone appreciated the variety and quality. They\'ve become our go-to caterer for all society events!',
  author: 'Rajesh Sharma',
  location: 'Gardenia Glory, Sector 70',
  event: 'Society Diwali Event - 150 guests',
};

const proofImages = [
  IMAGES.parties.birthday,
  IMAGES.venues[0],
  IMAGES.wedding.tiles[0],
  IMAGES.wedding.tiles[1],
];

export default function Sector70Page() {
  return (
    <>
      <FAQSchema faqs={sectorFaqs} />

      <Breadcrumbs
        items={[
          { name: 'Catering', href: '/catering/noida-sector-70/' },
          { name: 'Sector 70', href: '/catering/noida-sector-70/' },
        ]}
      />

      <Hero
        title="Catering in Noida Sector 70 — Society Events & Birthday Parties"
        subtitle="From intimate birthday celebrations to grand society events — we make every gathering memorable."
        backgroundImage={IMAGES.banner}
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-6">
              Sector 70&apos;s Preferred Catering Service
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sector 70 is home to several large residential societies with active community life.
              From annual days to festival celebrations, birthday parties to anniversary events —
              we&apos;ve been privileged to cater many memorable occasions here.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team understands the dynamics of society events — coordinating with RWAs,
              managing large guest counts efficiently, and ensuring every resident enjoys
              quality food with excellent service.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Popular Events in Sector 70"
            subtitle="What Sector 70 residents love to celebrate"
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
            title="Sector 70 Catering Packages"
            subtitle="Designed for society and community events"
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
                  message={`Hi, I'm interested in your ${pkg.name} for an event in Sector 70.`}
                  className="mt-6 w-full justify-center"
                >
                  Get Quote
                </WhatsAppLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Societies */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Trusted by Sector 70 Societies"
            subtitle="Regularly serving these communities"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularSocieties.map((society) => (
              <div
                key={society}
                className="bg-white rounded-lg p-4 text-center shadow-sm"
              >
                <span className="text-gray-700 font-medium text-sm">{society}</span>
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
          <SectionHeading title="Recent Events in Sector 70" />
          <ImageGallery images={proofImages} columns={4} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Sector 70 Catering FAQs"
            subtitle="Common questions from Sector 70 residents"
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
            Planning an Event in Sector 70?
          </h2>
          <p className="text-white/80 mb-6">
            Get a customized quote for your society event or celebration
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
            <WhatsAppLink variant="primary">Get Sector 70 Quote</WhatsAppLink>
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
              href="/catering/noida-sector-65/"
              className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-primary font-semibold">Sector 65</span>
            </Link>
            <Link
              href="/catering/noida-sector-127/"
              className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-primary font-semibold">Sector 127</span>
            </Link>
          </div>
        </div>
      </section>

      <SectorGrid currentSector="70" />
    </>
  );
}
