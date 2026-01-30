import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import ImageGallery from '@/components/ui/ImageGallery';
import SectionHeading from '@/components/ui/SectionHeading';
import SectorGrid from '@/components/sections/SectorGrid';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Greh Pravesh Catering in Noida | Family-Friendly & Jain Options',
  description:
    'Greh Pravesh catering in Noida. Simple, family-friendly veg menus with Jain/no-onion-garlic options. WhatsApp for menu and pricing.',
  path: '/services/greh-pravesh-catering-noida/',
  image: IMAGES.grehPravesh.hero,
});

const menuStyles = [
  {
    title: 'Balanced Veg Mains',
    description:
      'Classic North Indian dishes that appeal to all age groups. Paneer preparations, seasonal vegetables, dal varieties, and aromatic rice that make your guests feel at home.',
  },
  {
    title: 'Light Desserts',
    description:
      'Sweet endings with traditional favorites like kheer, gulab jamun, and halwa. We also offer lighter options like fruit cream and ice cream for summer events.',
  },
  {
    title: 'Optional Jain/Sattvik Menu',
    description:
      'Complete no onion-garlic menu available for families following Jain traditions. We prepare Jain food in separate utensils to maintain purity.',
  },
  {
    title: 'Puja Prasad Arrangements',
    description:
      'Coordination with your pandit for prasad timing. We prepare traditional items like puri-halwa, panchamrit, and distribute to guests after ceremony.',
  },
];

const grehPraveshPackages = [
  {
    name: 'Simple Greh Pravesh',
    price: '₹300',
    description: 'Per person | Minimum 25 guests',
    items: [
      'Welcome Drink',
      '2 Starters',
      '3 Main Course Items',
      'Dal + Rice + Roti',
      '1 Dessert',
      'Basic Setup',
    ],
    ideal: 'Ideal for: Intimate family gatherings, small flats',
  },
  {
    name: 'Traditional Greh Pravesh',
    price: '₹450',
    description: 'Per person | Minimum 40 guests',
    items: [
      'Welcome Drink + Snacks',
      '3 Starters',
      '4 Main Course Items',
      'Dal Makhani + Jeera Rice',
      'Variety Roti (3 types)',
      '2 Desserts',
      'Chafing Dish Setup',
    ],
    ideal: 'Ideal for: Standard housewarming, society functions',
  },
  {
    name: 'Grand Greh Pravesh',
    price: '₹600',
    description: 'Per person | Minimum 60 guests',
    items: [
      'Mocktail Welcome',
      '4 Starters + Chaat Counter',
      '5 Main Course Premium',
      'Live Roti Counter',
      '3 Desserts + Ice Cream',
      'Premium Crockery',
      'Uniformed Staff',
    ],
    ideal: 'Ideal for: Lavish celebrations, villa/bungalow events',
  },
];

const whatWeHandle = [
  'Menu planning based on guest preferences',
  'Coordination with puja timing',
  'Setup in new home spaces',
  'Serving and guest management',
  'Complete cleanup after event',
  'Leftover packaging on request',
];

const grehPraveshFaqs = [
  {
    question: 'What is included in Greh Pravesh catering packages?',
    answer:
      `Our Greh Pravesh packages include complete catering setup: Menu planning consultation, food preparation, transport to your new home, buffet setup with chafing dishes, serving staff, crockery (basic or premium based on package), and post-event cleanup. Packages start from ₹${SITE_CONFIG.pricing.essential}/person. We also coordinate with your pandit for prasad timing.`,
  },
  {
    question: 'Do you provide Jain food for Greh Pravesh?',
    answer:
      'Yes, we specialize in Jain catering for Greh Pravesh. Our Jain menu excludes onion, garlic, and root vegetables. We use separate utensils for Jain food preparation. Many families in Noida order our Jain menu for housewarming ceremonies. No additional charge for Jain preparation.',
  },
  {
    question: 'What is the minimum order for Greh Pravesh catering?',
    answer:
      'Minimum order is 25 guests for our Simple Greh Pravesh package (₹300/person). For Traditional package (₹450/person), minimum is 40 guests. Grand package requires at least 60 guests. For smaller gatherings under 20 people, we offer delivery-only thali options.',
  },
  {
    question: 'Can you set up catering in a new apartment?',
    answer:
      'Absolutely! We regularly cater Greh Pravesh in new apartments across Noida. We work in limited kitchen spaces, bring all necessary equipment, and set up buffet in living rooms or common areas. We\'re familiar with most Noida societies and their entry protocols. Our team arrives 2 hours before serving for seamless setup.',
  },
  {
    question: 'Do you provide prasad for Greh Pravesh puja?',
    answer:
      'Yes, we prepare traditional prasad items including puri-halwa, panchamrit, and coconut prasad. We coordinate with your pandit for exact timing so prasad is ready immediately after the puja. Prasad distribution to guests is handled by our team. Special prasad packaging for relatives who leave early can also be arranged.',
  },
  {
    question: 'How far in advance should I book for Greh Pravesh?',
    answer:
      'We recommend booking 1-2 weeks in advance for regular dates. For auspicious dates (muhurat days) and weekends, 2-3 weeks advance booking is advisable as these dates fill up quickly. Same-week bookings may be possible based on availability. Contact us early for guaranteed date confirmation.',
  },
  {
    question: 'What happens if puja gets delayed?',
    answer:
      'We understand that puja timings can extend. Our food is prepared to stay fresh for 3-4 hours using proper chafing dishes with fuel. If significant delay is expected, we can coordinate and adjust serving time. Our team stays until all guests are served, regardless of minor timing variations.',
  },
  {
    question: 'Do you handle setup and cleanup in new homes?',
    answer:
      'Yes, complete setup and cleanup is included. Our team sets up the buffet area with table covers, decorative elements, and systematic food arrangement. After the event, we pack our equipment, dispose of food waste, and ensure your new home is left clean. We respect that it\'s your first day in a new home!',
  },
  {
    question: 'Can you cater for Vastu Shanti along with Greh Pravesh?',
    answer:
      'Yes, we often cater for combined Vastu Shanti and Greh Pravesh ceremonies. Since these events can be longer, we adjust food portions and timing accordingly. Sattvik menu is recommended for Vastu Shanti. We can serve in phases - light refreshments during puja and full meal after ceremony.',
  },
  {
    question: 'What menu do you recommend for Greh Pravesh?',
    answer:
      'For Greh Pravesh, we recommend crowd-pleasing North Indian menu: Paneer Butter Masala, Mix Veg, Dal Makhani, Jeera Rice, assorted rotis, and classic desserts like Gulab Jamun or Kheer. For Jain guests, we suggest separate Jain dishes or full Jain menu. Starters like Paneer Tikka and Hara Bhara Kebab are popular additions.',
  },
  {
    question: 'Do you provide catering for builder floor Greh Pravesh?',
    answer:
      'Yes, we cater for all types of properties - apartments, builder floors, villas, and independent houses. For builder floors, we can set up on the ground floor common area or in the home itself. We bring portable equipment if kitchen access is limited. Staircase access is not a problem for our experienced team.',
  },
  {
    question: 'What is your cancellation policy for Greh Pravesh booking?',
    answer:
      'We understand that property possession dates can change. Cancellation 5+ days before event: Full refund minus 10% processing. 2-5 days before: 50% refund. Less than 2 days: No refund, but we can reschedule to another date within 30 days. For date changes due to possession delays, we try to accommodate without penalty.',
  },
];

export default function GrehPraveshCateringPage() {
  return (
    <>
      <ServiceSchema
        name="Greh Pravesh Catering in Noida"
        description="Family-friendly Greh Pravesh catering in Noida with Jain and sattvik menu options."
      />
      <FAQSchema faqs={grehPraveshFaqs} />

      <Breadcrumbs
        items={[
          { name: 'Services', href: '/services/greh-pravesh-catering-noida/' },
          { name: 'Greh Pravesh Catering', href: '/services/greh-pravesh-catering-noida/' },
        ]}
      />

      <Hero
        title="Greh Pravesh Catering in Noida — Simple, Family-Friendly & Jain Options"
        subtitle="Warm, clean, and balanced menus — with optional no onion/no garlic preferences."
        backgroundImage={IMAGES.grehPravesh.hero}
      />

      {/* Menu Styles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.grehPravesh.section}
                alt="Greh Pravesh catering setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <SectionHeading
                title="Our Greh Pravesh Menu Approach"
                centered={false}
              />
              <div className="space-y-6">
                {menuStyles.map((style) => (
                  <div key={style.title} className="flex gap-4">
                    <span className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-ink text-lg">
                        {style.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{style.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <WhatsAppLink variant="primary">
                  Get Greh Pravesh Quote
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Handle"
            subtitle="End-to-end catering management for your housewarming"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeHandle.map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg p-6 shadow-sm flex items-start gap-3"
              >
                <span className="text-accent text-xl">✓</span>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Greh Pravesh Catering Packages"
            subtitle="From intimate gatherings to grand celebrations"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grehPraveshPackages.map((pkg, index) => (
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
                  message={`Hi, I'm interested in your ${pkg.name} package for Greh Pravesh in Noida.`}
                  className="mt-6 w-full justify-center"
                >
                  Get Quote
                </WhatsAppLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Greh Pravesh Gallery"
            subtitle="Glimpses from our recent housewarming catering events"
          />
          <ImageGallery images={IMAGES.grehPravesh.gallery} columns={4} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Greh Pravesh Catering FAQs"
            subtitle="Common questions about our housewarming catering services"
          />

          <div className="space-y-4">
            {grehPraveshFaqs.map((faq, index) => (
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
            Moving Into Your New Home?
          </h2>
          <p className="text-white/80 mb-6">
            Let us handle the catering while you focus on the celebration
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
            <WhatsAppLink variant="primary">Get Greh Pravesh Quote</WhatsAppLink>
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
              href="/jain-catering-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Jain Catering
              </h3>
              <p className="text-gray-600">
                Complete no onion-garlic menus for Jain families.
              </p>
            </Link>
            <Link
              href="/services/bhandara-catering-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Bhandara Catering
              </h3>
              <p className="text-gray-600">
                Large-scale sattvik catering for religious events.
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
                Perfect package for medium-sized family events.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <SectorGrid />
    </>
  );
}
