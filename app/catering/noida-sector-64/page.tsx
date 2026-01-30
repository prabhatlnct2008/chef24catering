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
  title: 'Catering in Noida Sector 64 | Corporate & Residential Events | Chef24Catering',
  description:
    'Professional catering service in Noida Sector 64. Corporate events, society functions, house parties. Veg & Jain options. Packages from ₹250/plate.',
  path: '/catering/noida-sector-64/',
});

const sectorFaqs = [
  {
    question: 'Do you cater for society events in Sector 64?',
    answer: 'Yes, we regularly cater for residential society events in Sector 64. This includes Diwali melas, Holi celebrations, Republic Day events, and society AGMs. We\'re familiar with most society premises and their setup requirements.',
  },
  {
    question: 'What\'s the delivery time for catering orders in Sector 64?',
    answer: 'For Sector 64, we offer delivery slots throughout the day. Morning events (8 AM - 12 PM), afternoon (12 PM - 4 PM), and evening (4 PM - 9 PM). We arrive 30-60 minutes before serving time for setup.',
  },
  {
    question: 'Can you cater for small apartment gatherings in Sector 64?',
    answer: 'Absolutely! We specialize in apartment-friendly catering with minimal space requirements. Our smallest package serves 15-20 guests, perfect for birthday parties, kitty parties, or family get-togethers in Sector 64 apartments.',
  },
  {
    question: 'Do you provide catering for corporate offices in Sector 64?',
    answer: 'Yes, several corporate offices and small businesses in Sector 64 use our catering services. We offer daily lunch subscriptions, meeting catering, and celebration packages tailored for office environments.',
  },
  {
    question: 'What Jain catering options do you have for Sector 64?',
    answer: 'We offer complete Jain catering with no onion, no garlic, and no root vegetables. This includes Jain paneer dishes, satvik dal, seasonal vegetables, and Jain-friendly desserts. Many families in Sector 64 regularly order our Jain menu.',
  },
  {
    question: 'Can you set up outdoor catering in Sector 64 parks or common areas?',
    answer: 'Yes, we handle outdoor setups in society common areas, terraces, and designated party zones. We bring our own tables, buffet setup, and can arrange for tent/canopy coordination if needed.',
  },
  {
    question: 'What is your minimum order for Sector 64 delivery?',
    answer: `Minimum order is 15 plates for delivery catering or ₹${15 * SITE_CONFIG.pricing.essential} total order value. For setup and service staff, minimum is 30 plates. This ensures we can provide quality service.`,
  },
  {
    question: 'Do you offer catering packages for senior citizen events?',
    answer: 'Yes, we have special menus considering dietary preferences of senior citizens - low oil, low spice, diabetic-friendly options. Many senior citizen groups in Sector 64 societies order from us for their monthly gatherings.',
  },
];

const popularVenues = [
  'Prateek Wisteria',
  'Supertech Capetown',
  'Ajnara Homes',
  'Paramount Emotions',
  'Stellar Jeevan',
  'Various Independent Houses',
];

const popularEventTypes = [
  {
    name: 'House Warming (Greh Pravesh)',
    desc: 'Auspicious menus with puja thali options for new home celebrations',
    popular: true,
  },
  {
    name: 'Birthday Parties',
    desc: 'Kid-friendly and adult birthday celebration packages',
    popular: true,
  },
  {
    name: 'Society Festival Events',
    desc: 'Large-scale catering for Diwali, Holi, and cultural programs',
    popular: true,
  },
  {
    name: 'Kitty Party Catering',
    desc: 'Elegant snack and meal combinations for ladies\' gatherings',
    popular: false,
  },
  {
    name: 'Anniversary Celebrations',
    desc: 'Intimate family dinners to grand celebration buffets',
    popular: false,
  },
  {
    name: 'Puja & Religious Functions',
    desc: 'Satvik and Jain menu options for religious occasions',
    popular: false,
  },
];

const localTestimonial = {
  quote: 'We ordered from Chef24Catering for our society Diwali mela serving 200+ families. The food was delicious, service was professional, and they handled the entire setup in our common area beautifully. Highly recommended for society events!',
  name: 'Priya Sharma',
  designation: 'Cultural Committee Head',
  company: 'Prateek Wisteria, Sector 64',
};

const proofImages = [
  IMAGES.parties.birthday,
  IMAGES.parties.kitty,
  IMAGES.venues[0],
  IMAGES.venues[1],
];

export default function Sector64Page() {
  return (
    <>
      <FAQSchema faqs={sectorFaqs} />

      <Breadcrumbs
        items={[
          { name: 'Catering', href: '/catering/noida-sector-64/' },
          { name: 'Noida Sector 64', href: '/catering/noida-sector-64/' },
        ]}
      />

      <Hero
        title="Catering in Noida Sector 64 — For Homes, Societies & Offices"
        subtitle="From intimate apartment gatherings to grand society celebrations. Trusted by families and communities across Sector 64 for delicious, hygienic catering."
        backgroundImage={IMAGES.banner}
      />

      {/* Why Sector 64 Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.parties.birthday}
                alt="House party catering in Noida Sector 64"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                Catering That Understands Sector 64
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Sector 64 is a vibrant mix of established residential societies, independent homes, and growing commercial spaces. We&apos;ve been serving this community for years and understand its unique character:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Family-Focused Menus:</strong>
                    <span className="text-gray-600"> Our menus cater to all age groups - from kids&apos; favorites to senior-friendly options.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Society Event Experts:</strong>
                    <span className="text-gray-600"> We know the common areas, parking situations, and event spaces of major societies here.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Apartment-Friendly Setup:</strong>
                    <span className="text-gray-600"> Compact, efficient setups that work in apartment spaces without creating mess.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Religious Menu Options:</strong>
                    <span className="text-gray-600"> Jain, Satvik, and fasting-friendly menus for the diverse community here.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Event Types */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Popular Catering Occasions in Sector 64"
            subtitle="What families and societies here commonly book us for"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularEventTypes.map((event) => (
              <div
                key={event.name}
                className={`bg-white rounded-xl p-6 shadow-sm ${event.popular ? 'ring-2 ring-accent' : ''}`}
              >
                {event.popular && (
                  <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-3">
                    Frequently Booked
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold text-ink mb-2">{event.name}</h3>
                <p className="text-gray-600">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Societies We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Societies & Residential Areas We Serve"
            subtitle="Familiar with setup requirements at these locations"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularVenues.map((venue) => (
              <div key={venue} className="bg-background rounded-lg p-4 text-center">
                <p className="font-medium text-ink">{venue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonial */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gold text-4xl mb-6">&quot;</div>
          <blockquote className="text-white text-xl md:text-2xl font-heading mb-6">
            {localTestimonial.quote}
          </blockquote>
          <div className="text-white/80">
            <p className="font-semibold">{localTestimonial.name}</p>
            <p>{localTestimonial.designation}, {localTestimonial.company}</p>
          </div>
        </div>
      </section>

      {/* Sample Menu */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Popular Menu Combinations for Sector 64"
            subtitle="Crowd-pleasers for family and society events"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">House Party Package</h3>
              <p className="text-accent font-semibold mb-4">₹{SITE_CONFIG.pricing.essential}/plate</p>
              <ul className="space-y-2 text-gray-600">
                <li>• 2 Starters (1 Paneer + 1 Veg)</li>
                <li>• Shahi Paneer / Paneer Butter Masala</li>
                <li>• Dal Makhani</li>
                <li>• Seasonal Mix Veg</li>
                <li>• Jeera Rice + Naan</li>
                <li>• Gulab Jamun</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm ring-2 ring-accent">
              <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-2">
                Family Favorite
              </span>
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Celebration Buffet</h3>
              <p className="text-accent font-semibold mb-4">₹{SITE_CONFIG.pricing.signature}/plate</p>
              <ul className="space-y-2 text-gray-600">
                <li>• 3 Starters with Chutney</li>
                <li>• 2 Paneer Dishes</li>
                <li>• Dal + 2 Vegetables</li>
                <li>• Veg Biryani</li>
                <li>• Assorted Breads</li>
                <li>• Raita + Salad + Papad</li>
                <li>• 2 Desserts</li>
                <li>• Buffet Setup Included</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Society Event Special</h3>
              <p className="text-accent font-semibold mb-4">₹{SITE_CONFIG.pricing.royal}/plate</p>
              <ul className="space-y-2 text-gray-600">
                <li>• 4 Premium Starters</li>
                <li>• 3 Main Course Options</li>
                <li>• Dal Makhani + Veg Korma</li>
                <li>• Biryani + Pulao</li>
                <li>• Live Chaat Counter</li>
                <li>• Premium Dessert Spread</li>
                <li>• Full Service Staff</li>
                <li>• Decoration Coordination</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <WhatsAppLink variant="primary">Customize Your Menu</WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Proof Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Recent Events in Sector 64" />
          <ImageGallery images={proofImages} columns={4} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Sector 64 Catering FAQs" />
          <div className="space-y-4">
            {sectorFaqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl shadow-sm group"
              >
                <summary className="p-6 cursor-pointer font-semibold text-ink flex items-center justify-between">
                  {faq.question}
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">
            Planning an Event in Sector 64?
          </h2>
          <p className="text-white/80 mb-6">
            Let us handle the food while you enjoy with your guests
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing/" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              See Pricing
            </Link>
            <Link href="/menu/" className="bg-gold text-white hover:bg-gold/90 px-6 py-3 rounded-lg font-semibold transition-colors">
              View Full Menu
            </Link>
            <WhatsAppLink variant="primary">Get Free Quote</WhatsAppLink>
          </div>
        </div>
      </section>

      <SectorGrid currentSector="64" />
    </>
  );
}
