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
  title: 'Jain Catering in Noida | No Onion No Garlic | Pure Vegetarian Catering',
  description:
    'Authentic Jain catering in Noida. Strictly no onion, no garlic, no root vegetables. Pure sattvik menu for weddings, parties, and religious events. Starting ₹300/plate.',
  path: '/jain-catering-noida/',
  image: IMAGES.bhandara.hero,
});

const faqs = [
  {
    question: 'What is Jain catering and how is it different from regular vegetarian catering?',
    answer:
      'Jain catering follows strict dietary guidelines that exclude onion, garlic, potatoes, and all root vegetables. We also avoid ingredients that may harm micro-organisms. Our kitchen maintains separate utensils and preparation areas for Jain food to ensure zero contamination.',
  },
  {
    question: 'What is the cost of Jain catering in Noida?',
    answer: `Our Jain catering packages start from ₹300/plate for basic menus and go up to ₹700/plate for premium royal menus. The pricing depends on menu complexity, number of dishes, and event size. For 50 guests, expect ₹15,000-35,000 total cost.`,
  },
  {
    question: 'Do you use any root vegetables in Jain catering?',
    answer:
      'Absolutely not. We strictly avoid all root vegetables including potatoes, onion, garlic, ginger, carrots, radish, turnips, beetroot, and all tubers. Our Jain menu only uses vegetables that grow above ground.',
  },
  {
    question: 'Can you cater for mixed gatherings with both Jain and non-Jain guests?',
    answer:
      'Yes! We often cater for events where some guests follow Jain dietary requirements. We can set up separate Jain and regular vegetarian buffet sections, clearly labeled, ensuring everyone enjoys their preferred cuisine without any confusion.',
  },
  {
    question: 'What occasions do you provide Jain catering for?',
    answer:
      'We provide Jain catering for all occasions: weddings (haldi, mehendi, sangeet, reception), religious ceremonies (puja, bhandara, satyanarayan katha), birthday parties, anniversary celebrations, greh pravesh, corporate events, and family gatherings.',
  },
  {
    question: 'How do you ensure there is no contamination with onion and garlic?',
    answer:
      'For Jain catering orders, we use dedicated cooking equipment, separate preparation areas, and distinct serving utensils. Our cooks are trained in Jain food preparation protocols. We can also prepare food at your venue to ensure complete transparency.',
  },
  {
    question: 'What Jain-friendly starters do you offer?',
    answer:
      'Our Jain starters include: Paneer Tikka (no onion-garlic), Dhokla, Khandvi, Dry Fruit Samosa, Corn Cheese Balls, Veg Spring Rolls, Hara Bhara Kabab (without potato), Palak Patta Chaat, and various chaats made without any root vegetables.',
  },
  {
    question: 'Do you provide live counters for Jain catering?',
    answer:
      'Yes! We offer Jain-friendly live counters including: Live Chaat Counter (no potato/onion), Dosa Counter, Pav Bhaji (without onion-garlic, no potato), Live Pasta Counter, and Jalebi-Rabri Counter. All prepared fresh without any prohibited ingredients.',
  },
  {
    question: 'Can you provide Jain sweets and desserts?',
    answer:
      'Absolutely! Our Jain dessert menu includes: Gulab Jamun, Rasgulla, Kheer (without any prohibited ingredients), Shrikhand, Rabri, Jalebi, Malpua, Ice Cream, and various dry fruit-based sweets. All prepared in sattvik manner.',
  },
  {
    question: 'What is the minimum order for Jain catering in Noida?',
    answer:
      'Our minimum order for Jain catering is 30 guests. For smaller gatherings, we offer specialized tiffin-style Jain catering. Contact us for customized solutions for any gathering size.',
  },
];

const jainMenuHighlights = [
  {
    category: 'Starters',
    items: ['Paneer Tikka', 'Dhokla', 'Khandvi', 'Corn Cheese Balls', 'Dry Fruit Samosa', 'Palak Patta Chaat'],
  },
  {
    category: 'Main Course',
    items: ['Paneer Butter Masala', 'Dal Tadka', 'Lauki Kofta', 'Tinda Masala', 'Sev Tamatar', 'Kadhi Pakora'],
  },
  {
    category: 'Rice & Breads',
    items: ['Jeera Rice', 'Veg Pulao', 'Tandoori Roti', 'Naan', 'Paratha', 'Puri'],
  },
  {
    category: 'Desserts',
    items: ['Gulab Jamun', 'Rasgulla', 'Kheer', 'Shrikhand', 'Jalebi', 'Ice Cream'],
  },
];

const jainPackages = [
  {
    name: 'Sattvik Essential',
    price: 300,
    bestFor: 'Simple family gatherings, puja events',
    includes: [
      '2 Jain Starters',
      '1 Paneer Dish',
      '1 Dal',
      '1 Seasonal Vegetable',
      'Rice + 2 Breads',
      'Salad & Papad',
      '1 Sweet',
      'Basic Buffet Setup',
    ],
  },
  {
    name: 'Sattvik Premium',
    price: 450,
    bestFor: 'Weddings, anniversaries, special occasions',
    popular: true,
    includes: [
      '3 Jain Starters',
      '2 Paneer/Veg Mains',
      'Special Dal',
      '2 Seasonal Vegetables',
      'Pulao + Jeera Rice',
      'Assorted Breads',
      'Raita & Accompaniments',
      '2 Desserts',
      'Premium Buffet Setup',
      '2 Service Staff',
    ],
  },
  {
    name: 'Sattvik Royal',
    price: 700,
    bestFor: 'Grand weddings, premium celebrations',
    includes: [
      '4 Premium Jain Starters',
      '3 Main Course Options',
      'Dal Makhani (Jain style)',
      '2 Premium Vegetables',
      'Live Counter (1 choice)',
      'Biryani + Pulao (Jain)',
      'Assorted Breads',
      'Complete Accompaniments',
      'Premium Dessert Spread',
      '3+ Service Staff',
      'Elegant Presentation',
    ],
  },
];

const avoidedIngredients = [
  { name: 'Onion', reason: 'Root vegetable' },
  { name: 'Garlic', reason: 'Root vegetable' },
  { name: 'Potato', reason: 'Root vegetable' },
  { name: 'Ginger', reason: 'Root/Rhizome' },
  { name: 'Carrot', reason: 'Root vegetable' },
  { name: 'Radish', reason: 'Root vegetable' },
  { name: 'Beetroot', reason: 'Root vegetable' },
  { name: 'Turnip', reason: 'Root vegetable' },
];

export default function JainCateringPage() {
  return (
    <>
      <ServiceSchema
        name="Jain Catering in Noida"
        description="Authentic Jain catering services in Noida. Strictly no onion, no garlic, no root vegetables. Pure sattvik menus for all occasions."
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumbs
        items={[{ name: 'Jain Catering Noida', href: '/jain-catering-noida/' }]}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-gold text-white text-sm px-3 py-1 rounded-full mb-4">
              100% Sattvik | No Onion | No Garlic
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Jain Catering in Noida
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Authentic Jain food catering with strict adherence to dietary guidelines.
              No onion, no garlic, no root vegetables. Pure vegetarian sattvik cuisine
              for weddings, parties, and religious ceremonies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppLink variant="primary">Get Jain Catering Quote</WhatsAppLink>
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

      {/* What We Avoid */}
      <section className="py-12 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl font-semibold text-ink">
              Strictly Avoided Ingredients
            </h2>
            <p className="text-gray-600 mt-2">
              We never use these ingredients in our Jain catering
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {avoidedIngredients.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-red-100"
              >
                <span className="text-red-500 text-2xl">✕</span>
                <p className="font-semibold text-ink mt-2">{item.name}</p>
                <p className="text-xs text-gray-500">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-heading font-bold text-accent">₹300</p>
              <p className="text-gray-600">Starting per plate</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">100%</p>
              <p className="text-gray-600">Sattvik Guarantee</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">50+</p>
              <p className="text-gray-600">Jain Dish Options</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">200+</p>
              <p className="text-gray-600">Jain Events Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jain Menu Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Jain Menu Highlights"
            subtitle="All dishes prepared without onion, garlic, or root vegetables"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jainMenuHighlights.map((section) => (
              <div key={section.category} className="bg-background rounded-xl p-6">
                <h3 className="font-heading text-xl font-semibold text-ink mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      {item}
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
            title="Jain Catering Packages"
            subtitle="Complete pricing for authentic Jain cuisine"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jainPackages.map((pkg) => (
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
                  <p className="text-gray-500">per plate</p>
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
                    Get {pkg.name} Quote
                  </WhatsAppLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                Why Choose Us for Jain Catering?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Strict Dietary Compliance:</strong>
                    <span className="text-gray-600"> 100% adherence to Jain dietary guidelines with no exceptions</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Separate Preparation:</strong>
                    <span className="text-gray-600"> Dedicated utensils and cooking areas for Jain food</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Experienced Jain Cooks:</strong>
                    <span className="text-gray-600"> Our team understands Jain cuisine traditions and requirements</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Authentic Flavors:</strong>
                    <span className="text-gray-600"> Delicious food that proves Jain cuisine can be flavorful</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-sm">✓</span>
                  </span>
                  <div>
                    <strong className="text-ink">Transparent Process:</strong>
                    <span className="text-gray-600"> We can prepare food at your venue for complete peace of mind</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.bhandara.section}
                alt="Jain catering setup in Noida"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events We Cater */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Jain Catering for Every Occasion"
            subtitle="We provide authentic Jain food for all types of events"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Weddings',
              'Engagement',
              'Birthday Parties',
              'Anniversaries',
              'Puja Ceremonies',
              'Greh Pravesh',
              'Satyanarayan Katha',
              'Mundan Ceremony',
              'Bhandara',
              'Corporate Events',
              'Family Gatherings',
              'Religious Events',
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
          <SectionHeading title="FAQs - Jain Catering in Noida" />
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

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Related Catering Services"
            subtitle="Explore our other specialized catering options"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/wedding-catering-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink">Wedding Catering</h3>
              <p className="text-gray-600 mt-2">Complete wedding catering with Jain options available</p>
            </Link>
            <Link
              href="/services/bhandara-catering-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink">Bhandara Catering</h3>
              <p className="text-gray-600 mt-2">Large-scale sattvik catering for religious events</p>
            </Link>
            <Link
              href="/services/greh-pravesh-catering-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink">Greh Pravesh Catering</h3>
              <p className="text-gray-600 mt-2">House warming catering with pure vegetarian options</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Need Authentic Jain Catering in Noida?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Share your event details and dietary requirements. We will create a customized
            Jain menu that satisfies both your religious beliefs and taste buds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppLink variant="primary">Get Your Jain Catering Quote</WhatsAppLink>
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
