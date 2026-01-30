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
  title: 'Bhandara Catering in Noida | Large-Scale Sattvik Catering',
  description:
    'Bhandara and religious event catering in Noida. Large-scale sattvik menus, disciplined service, on-time distribution. Contact for quote.',
  path: '/services/bhandara-catering-noida/',
  image: IMAGES.bhandara.hero,
});

const bhandaraFeatures = [
  {
    title: 'Sattvik Menu Planning',
    description:
      'Pure vegetarian menus without onion, garlic, and root vegetables. We follow traditional sattvik cooking principles using fresh ingredients, minimal spices, and pure ghee.',
  },
  {
    title: 'Large-Scale Cooking Coordination',
    description:
      'Experienced in handling 500 to 10,000+ guests. Our team includes dedicated head cooks, assistants, and quality supervisors who ensure consistent taste across all batches.',
  },
  {
    title: 'Clean Serving Flow',
    description:
      'Systematic queue management, multiple serving lines, and trained volunteers coordination. We ensure every guest is served efficiently without long waits.',
  },
  {
    title: 'Timing Discipline',
    description:
      'Precise scheduling from setup to cleanup. We understand the religious significance and ensure food is ready exactly when needed for puja timings.',
  },
];

const bhandaraPackages = [
  {
    name: 'Basic Bhandara',
    price: '₹80',
    description: 'Per person | Minimum 200 guests',
    items: [
      'Puri (4 pcs)',
      'Aloo Sabzi',
      'Suji Halwa',
      'Serving in Dona-Pattal',
    ],
    ideal: 'Ideal for: Temple events, small religious gatherings',
  },
  {
    name: 'Standard Bhandara',
    price: '₹120',
    description: 'Per person | Minimum 300 guests',
    items: [
      'Puri/Roti + Rice',
      '2 Sabzis (Aloo + Seasonal)',
      'Dal',
      'Kheer or Halwa',
      'Serving Setup Included',
    ],
    ideal: 'Ideal for: Jagran, Kirtan, Sunderkand Path',
  },
  {
    name: 'Premium Bhandara',
    price: '₹180',
    description: 'Per person | Minimum 500 guests',
    items: [
      'Complete Thali Setup',
      'Puri + Rice + 3 Sabzis',
      'Dal Makhani',
      'Raita + Salad',
      'Gulab Jamun/Kheer',
      'Steel Plates + Service Staff',
    ],
    ideal: 'Ideal for: Temple inaugurations, major religious functions',
  },
];

const occasionsServed = [
  'Temple Inaugurations & Anniversaries',
  'Jagran & Kirtan Events',
  'Sunderkand Path & Havan',
  'Navratri Bhandara',
  'Shiv Ratri Events',
  'Guru Purnima Celebrations',
  'Satyanarayan Katha',
  'Ram Navami & Janmashtami',
  'Dussehra & Diwali Bhandara',
  'School/College Religious Events',
];

const bhandaraFaqs = [
  {
    question: 'What is bhandara catering and how is it different from regular catering?',
    answer:
      'Bhandara catering is large-scale community feeding, typically for religious events. It differs from regular catering in several ways: The food is sattvik (no onion, garlic, root vegetables), served in traditional style (often in dona-pattal), prepared in large quantities (500+ guests typical), and follows religious guidelines for purity. We use separate utensils dedicated to bhandara cooking.',
  },
  {
    question: 'What is the minimum order for bhandara catering in Noida?',
    answer:
      'Our minimum order for bhandara catering is 200 guests for basic packages starting at ₹80/person. For standard packages (₹120/person), minimum is 300 guests. Premium bhandara packages with full thali require minimum 500 guests. For smaller religious gatherings under 100 people, we recommend our regular vegetarian catering with sattvik menu options.',
  },
  {
    question: 'Do you provide sattvik/no onion-garlic food for bhandara?',
    answer:
      'Yes, all our bhandara menus are strictly sattvik. We do not use onion, garlic, or any tamasic ingredients. We also avoid root vegetables like carrots and beetroot if required. Our cooking follows traditional methods using pure desi ghee, rock salt, and fresh seasonal vegetables. Separate utensils and cooking areas are used to prevent contamination.',
  },
  {
    question: 'Can you handle bhandara for 1000+ guests?',
    answer:
      'Absolutely. We regularly handle bhandaras for 1000-5000 guests and have experience with events up to 10,000+ guests. For large bhandaras, we deploy multiple cooking stations, industrial equipment, and teams of 20-50 staff. We coordinate with venue management and local authorities if needed. Advance booking of 2-4 weeks is recommended for mega bhandaras.',
  },
  {
    question: 'What serving options are available for bhandara?',
    answer:
      'We offer multiple serving styles: Traditional dona-pattal (disposable leaf plates) for authentic feel, steel thalis with katori set for premium events, buffet-style lines for medium gatherings, and seated pangat-style service for traditional setup. Our team includes trained servers who manage queue flow and ensure systematic distribution.',
  },
  {
    question: 'Do you provide cooking at venue for bhandara?',
    answer:
      'Yes, for large bhandaras (500+ guests), we set up cooking facilities at your venue. This includes portable burners, large kadhai/patilas, and industrial equipment. We bring our own LPG cylinders and cooking supplies. For smaller events, food is prepared at our facility and transported in insulated containers. Fresh items like puri are made on-site regardless of size.',
  },
  {
    question: 'How do you ensure food quantity is sufficient for bhandara?',
    answer:
      'We prepare 10-15% extra food as buffer for bhandaras. Our experienced team estimates requirements based on event type, timing, and expected turnout. For open bhandaras where exact count is uncertain, we can arrange quick replenishment. We also station quality checkers who monitor consumption and alert kitchen for additional batches if needed.',
  },
  {
    question: 'What is the cost of bhandara catering for Navratri in Noida?',
    answer:
      `Navratri bhandara catering starts at ₹100/person for basic prasad distribution (kala chana, puri, halwa) and goes up to ₹200/person for complete fasting menu (sabudana khichdi, kuttu puri, fruit chaat, sweets). For daily Navratri bhandaras, we offer special 9-day packages with menu rotation. Contact us for customized Navratri quotes.`,
  },
  {
    question: 'Do you handle bhandara for temple events?',
    answer:
      'Yes, temple events are our specialty. We cater for temple inaugurations, pran pratishtha, deity anniversaries, and regular temple bhandaras. We understand temple protocols, coordinate with pandits for timing, and ensure food preparation aligns with religious requirements. Many temples in Noida and Greater Noida trust us for their regular bhandara needs.',
  },
  {
    question: 'Can you arrange langar-style service for bhandara?',
    answer:
      'Yes, we specialize in langar-style (pangat) service where guests sit in rows and food is served continuously. Our servers move along the lines topping up plates. This traditional style is popular for Gurudwara events, Satyanarayan Katha, and large religious gatherings. We provide floor mats, serving buckets, and trained staff for smooth pangat service.',
  },
  {
    question: 'What hygiene measures do you follow for bhandara cooking?',
    answer:
      'We maintain strict hygiene: All cooks wear clean clothes, head caps, and gloves. Utensils are washed and sanitized before use. Raw materials are sourced from trusted suppliers. Cooking area is cleaned before and after. We use filtered water for cooking. For large events, we have dedicated hygiene supervisors. Food safety certificates are available on request.',
  },
  {
    question: 'Do you provide prasad packaging for distribution?',
    answer:
      'Yes, we offer prasad packaging services for temple distributions and religious events. Options include small pouches for dry prasad (batasha, makhana, dry fruits), boxes for sweets (peda, laddoo, barfi), and sealed containers for wet items. Custom packaging with temple name/event details can be arranged for larger orders.',
  },
];

export default function BhandaraCateringPage() {
  return (
    <>
      <ServiceSchema
        name="Bhandara Catering in Noida"
        description="Large-scale bhandara and religious event catering in Noida with sattvik menus and disciplined service."
      />
      <FAQSchema faqs={bhandaraFaqs} />

      <Breadcrumbs
        items={[
          { name: 'Services', href: '/services/bhandara-catering-noida/' },
          { name: 'Bhandara Catering', href: '/services/bhandara-catering-noida/' },
        ]}
      />

      <Hero
        title="Bhandara Catering in Noida — Large-Scale, Sattvik & Disciplined Service"
        subtitle="We handle volume planning, on-time prep, and smooth distribution with hygiene-first execution."
        backgroundImage={IMAGES.bhandara.hero}
      />

      {/* What We Provide */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="What We Provide" centered={false} />
              <div className="space-y-6">
                {bhandaraFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <span className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-ink text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <WhatsAppLink variant="primary">Get Bhandara Quote</WhatsAppLink>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.bhandara.section}
                alt="Bhandara catering setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Occasions We Serve */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Religious Events We Cater"
            subtitle="Trusted by temples, societies, and families across Noida"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {occasionsServed.map((occasion) => (
              <div
                key={occasion}
                className="bg-white rounded-lg p-4 text-center shadow-sm"
              >
                <span className="text-gray-700 font-medium">{occasion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Bhandara Catering Packages"
            subtitle="Affordable pricing for community feeding"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bhandaraPackages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow ${
                  index === 1 ? 'ring-2 ring-gold' : ''
                }`}
              >
                {index === 1 && (
                  <span className="bg-gold text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
                    Popular Choice
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
                      <span className="text-gold mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-gray-500 italic">{pkg.ideal}</p>
                <WhatsAppLink
                  variant="primary"
                  message={`Hi, I'm interested in your ${pkg.name} package for a bhandara in Noida.`}
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
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Bhandara Catering FAQs"
            subtitle="Common questions about our bhandara and religious event catering"
          />

          <div className="space-y-4">
            {bhandaraFaqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl shadow-sm group"
              >
                <summary className="p-6 cursor-pointer font-semibold text-ink flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-gold group-open:rotate-180 transition-transform flex-shrink-0">
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
            Planning a Bhandara or Religious Event?
          </h2>
          <p className="text-white/80 mb-6">
            Share your event date, expected guests, and menu preferences for a quick quote
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
            <WhatsAppLink variant="primary">Get Bhandara Quote</WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Related Services"
            subtitle="Explore more catering options"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/jain-catering-noida/"
              className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Jain Catering
              </h3>
              <p className="text-gray-600">
                Specialized no onion-garlic menus for Jain families and events.
              </p>
            </Link>
            <Link
              href="/services/greh-pravesh-catering-noida/"
              className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Greh Pravesh Catering
              </h3>
              <p className="text-gray-600">
                Family-friendly menus for housewarming ceremonies.
              </p>
            </Link>
            <Link
              href="/catering-for-500-guests-noida/"
              className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Catering for 500 Guests
              </h3>
              <p className="text-gray-600">
                Large-scale catering solutions for major events.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <SectorGrid />
    </>
  );
}
