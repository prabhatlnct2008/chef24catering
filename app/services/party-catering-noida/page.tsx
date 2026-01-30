import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import SectionHeading from '@/components/ui/SectionHeading';
import SectorGrid from '@/components/sections/SectorGrid';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Party Catering in Noida | Birthday, Corporate & House Parties',
  description:
    'Party catering for Noida. Birthdays, corporate events, kitty parties, farmhouse parties. Snacks, buffet, live counters. WhatsApp for menu + pricing.',
  path: '/services/party-catering-noida/',
  image: IMAGES.parties.hero,
});

const partyTypes = [
  {
    name: 'Corporate Events & Office Parties',
    image: IMAGES.parties.corporate,
    description:
      'Professional catering for corporate events, team lunches, annual days, and office celebrations. Clean setup, timely serving, and flexible menu formats including buffet, boxed meals, or live counters. We handle everything from small team gatherings of 20 people to large corporate events with 500+ guests.',
  },
  {
    name: 'Mocktail & Beverage Counters',
    image: IMAGES.parties.mocktail,
    description:
      'Elevate your party with our premium mocktail and beverage stations. Fresh fruit mocktails, smoothies, lassi, chaas, and hot beverages served by our trained bartenders. Perfect for adding that extra flair to any celebration.',
  },
  {
    name: 'Farmhouse Parties',
    image: IMAGES.parties.farmhouse,
    description:
      'Specialized catering for farmhouse parties and outdoor events. We handle higher guest volumes with disciplined serving, bring all necessary equipment, and ensure your outdoor celebration runs smoothly. Popular for bachelor parties, family reunions, and corporate retreats.',
  },
  {
    name: 'Birthday Parties',
    image: IMAGES.parties.birthday,
    description:
      'Make birthday celebrations memorable with our customized party menus. Kids-friendly options, themed food presentations, and special add-ons like cake cutting arrangements, return gift packaging assistance, and dedicated party coordinators.',
  },
  {
    name: 'Kitty Parties',
    image: IMAGES.parties.kitty,
    description:
      'Elegant catering for kitty parties and ladies\' get-togethers. Beautiful snack counters, premium desserts, and Instagram-worthy presentations. We understand the importance of variety and presentation for these special gatherings.',
  },
];

const partyPackages = [
  {
    name: 'Snack Party',
    price: '₹200',
    description: 'Per person | Minimum 25 guests',
    items: [
      '4 Snack Items (2 dry + 2 chaat)',
      'Welcome Drink',
      'Basic Service Staff',
      'Disposable Plates & Napkins',
    ],
    ideal: 'Ideal for: Short gatherings, evening snacks, kids parties',
  },
  {
    name: 'Buffet Party',
    price: '₹400',
    description: 'Per person | Minimum 30 guests',
    items: [
      '2 Starters + 3 Main Course',
      'Dal, Rice, Roti',
      '2 Desserts',
      'Chafing Dish Setup',
      'Service Staff Included',
    ],
    ideal: 'Ideal for: Birthday dinners, family gatherings, house parties',
  },
  {
    name: 'Premium Party',
    price: '₹600',
    description: 'Per person | Minimum 40 guests',
    items: [
      '4 Starters + 5 Main Course',
      'Live Counter (1 choice)',
      'Dal, Rice, Variety Roti',
      '3 Desserts + Ice Cream',
      'Premium Crockery',
      'Uniformed Service Team',
    ],
    ideal: 'Ideal for: Milestone birthdays, engagement parties, anniversary celebrations',
  },
];

const partyFaqs = [
  {
    question: 'What is the minimum order for party catering in Noida?',
    answer: `Our minimum order varies by service type: Snack Party packages start at 25 guests (₹${SITE_CONFIG.pricing.essential}/person), Buffet Party packages require minimum 30 guests (₹${SITE_CONFIG.pricing.signature}/person), and Premium Party packages need at least 40 guests. For smaller gatherings under 20 people, we offer delivery-only options.`,
  },
  {
    question: 'Do you provide catering for birthday parties in apartments?',
    answer:
      'Yes, apartment and society terrace birthday parties are our specialty. We bring all equipment, set up in limited spaces, and handle cleanup. We\'ve catered in most major Noida societies and are familiar with their access rules. Our team arrives 1-2 hours before the party for seamless setup.',
  },
  {
    question: 'Can you set up live counters for house parties?',
    answer:
      'Absolutely! Popular live counters for house parties include Chaat Counter (papdi chaat, tikki, dahi bhalla), Pasta/Noodles Counter, Dosa Counter, and Pav Bhaji Counter. Live counters require minimum 50 guests and adequate space (approximately 6x4 feet per counter). We bring all cooking equipment and trained chefs.',
  },
  {
    question: 'What corporate catering options do you offer?',
    answer:
      'We offer multiple corporate catering formats: Daily office lunch subscriptions, one-time team lunch buffets, boxed meal deliveries for meetings, elaborate setups for annual days and corporate events. Corporate clients receive dedicated account managers, flexible payment terms, and 10-15% monthly contract discounts.',
  },
  {
    question: 'How much does kitty party catering cost in Noida?',
    answer:
      'Kitty party catering typically ranges from ₹300-500 per person depending on menu selection. Our popular kitty party package at ₹400/person includes 3 starter varieties, main course with 4 dishes, dessert counter with 3 options, and mocktails. We focus on variety, presentation, and Instagram-worthy setups.',
  },
  {
    question: 'Do you cater farmhouse parties outside Noida?',
    answer:
      'Yes, we cater farmhouse parties throughout NCR including popular farmhouse locations in Greater Noida, Noida Extension, Jewar, and areas up to 50km from Noida. Additional logistics charges may apply for distant locations. We handle all equipment transport and setup.',
  },
  {
    question: 'Can you handle last-minute party catering requests?',
    answer:
      'We accommodate same-day catering requests for parties up to 50 guests if ordered before 10 AM. Availability depends on our current bookings. Emergency/last-minute orders may have a 10-15% surcharge. For guaranteed availability, we recommend booking 3-7 days in advance.',
  },
  {
    question: 'What snacks do you provide for cocktail parties?',
    answer:
      'Our cocktail party menu includes both finger foods and substantial snacks: Paneer Tikka, Hara Bhara Kebab, Corn Cheese Balls, Stuffed Mushrooms, Mini Samosas, Spring Rolls, Bruschetta, and more. We also offer passed appetizers service where our staff circulates with trays for a more sophisticated experience.',
  },
  {
    question: 'Do you provide kids-specific menu for birthday parties?',
    answer:
      'Yes! Our kids\' party menu includes child-favorites: Mini Pizzas, Pasta, French Fries, Nuggets-style items (veg), Sandwiches, Fruit Platters, and fun desserts. We can also arrange themed food presentations (superhero, princess, cartoon characters) and coordinate with decorators for cohesive party themes.',
  },
  {
    question: 'What party sizes can you handle?',
    answer:
      'We cater parties of all sizes: intimate gatherings (20-30 guests), medium parties (50-100 guests), large celebrations (100-300 guests), and mega events (300-1000+ guests). Each size has optimized service ratios and equipment to ensure smooth execution.',
  },
  {
    question: 'Do you offer outdoor catering for terrace parties?',
    answer:
      'Yes, terrace and rooftop party catering is popular in Noida. We bring canopy/tent arrangements if needed, use windproof chafing dishes, and ensure food safety in outdoor conditions. We also coordinate timing based on weather and sunset for optimal dining experience.',
  },
  {
    question: 'What is included in your party catering packages?',
    answer:
      'Our party packages include: Menu planning consultation, food preparation and transport, complete buffet/counter setup, serving equipment (chafing dishes, serving spoons, tables), service staff, basic crockery (upgradable to premium), and post-event cleanup. Additional items like decorations, DJ, or photography can be arranged through our partner network.',
  },
];

export default function PartyCateringPage() {
  return (
    <>
      <ServiceSchema
        name="Party Catering in Noida"
        description="Party catering services in Noida for birthdays, corporate events, kitty parties, and farmhouse parties."
      />
      <FAQSchema faqs={partyFaqs} />

      <Breadcrumbs
        items={[
          { name: 'Services', href: '/services/party-catering-noida/' },
          { name: 'Party Catering', href: '/services/party-catering-noida/' },
        ]}
      />

      <Hero
        title="Party Catering in Noida — Birthdays, Corporate & Home Celebrations"
        subtitle="Snacks, buffet, live counters, and clean service flow — designed for high guest satisfaction."
        backgroundImage={IMAGES.parties.hero}
      />

      {/* Party Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Party Types We Cater"
            subtitle="From intimate home gatherings to large corporate events — we handle it all"
          />

          <div className="space-y-16">
            {partyTypes.map((party, index) => (
              <div
                key={party.name}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={party.image}
                      alt={party.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="font-heading text-2xl font-semibold text-ink mb-4">
                    {party.name}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {party.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Party Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Party Catering Packages"
            subtitle="Transparent pricing for every celebration size"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partyPackages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow ${
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
                  <span className="text-4xl font-bold text-primary">
                    {pkg.price}
                  </span>
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
                <p className="mt-6 text-sm text-gray-500 italic">{pkg.ideal}</p>
                <WhatsAppLink
                  variant="primary"
                  message={`Hi, I'm interested in your ${pkg.name} package for a party in Noida.`}
                  className="mt-6 w-full justify-center"
                >
                  Get Quote
                </WhatsAppLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Party Catering FAQs"
            subtitle="Common questions about our party catering services in Noida"
          />

          <div className="space-y-4">
            {partyFaqs.map((faq, index) => (
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
            Ready to Plan Your Party?
          </h2>
          <p className="text-white/80 mb-6">
            WhatsApp us with your party date and guest count for an instant quote
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
            <WhatsAppLink variant="primary">Get Party Quote</WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Related Services"
            subtitle="Explore more catering options"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/birthday-catering-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Birthday Party Catering
              </h3>
              <p className="text-gray-600">
                Specialized birthday packages with kids menus and themed setups.
              </p>
            </Link>
            <Link
              href="/corporate-catering-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Corporate Catering
              </h3>
              <p className="text-gray-600">
                Professional catering for offices, meetings, and corporate events.
              </p>
            </Link>
            <Link
              href="/catering-for-50-guests-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Catering for 50 Guests
              </h3>
              <p className="text-gray-600">
                Perfect package sizing for medium-sized celebrations.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <SectorGrid />
    </>
  );
}
