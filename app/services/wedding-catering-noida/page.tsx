import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import ImageGallery from '@/components/ui/ImageGallery';
import VideoEmbed from '@/components/ui/VideoEmbed';
import SectionHeading from '@/components/ui/SectionHeading';
import SectorGrid from '@/components/sections/SectorGrid';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Wedding Catering in Noida | Haldi to Reception | Premium Veg & Multi-Cuisine',
  description:
    'Premium wedding catering in Noida. Haldi, Mehendi, Sangeet, Reception menus. Buffet setup, professional service, Jain options. Packages from ₹400/plate.',
  path: '/services/wedding-catering-noida/',
  image: IMAGES.wedding.hero,
});

const weddingFaqs = [
  {
    question: 'What is the cost of wedding catering in Noida?',
    answer: `Wedding catering packages in Noida start from ₹${SITE_CONFIG.pricing.signature}/plate for standard buffet and go up to ₹${SITE_CONFIG.pricing.royal}+/plate for premium packages with live counters. The exact cost depends on guest count, menu selection, number of live counters, and service level. For 200 guests, expect ₹80,000-₹1,50,000 total.`,
  },
  {
    question: 'Do you cater for all wedding functions (Haldi, Mehendi, Sangeet)?',
    answer: 'Yes, we provide specialized catering for all wedding functions: Haldi, Mehendi, Sangeet, Ring Ceremony, Wedding Day, and Reception. Each function can have a different menu tailored to its vibe - casual for Haldi, elegant for Sangeet, grand for Reception.',
  },
  {
    question: 'How far in advance should I book wedding catering?',
    answer: 'We recommend booking 1-2 months in advance for weddings, especially during peak season (October-February). Popular dates get booked quickly. Early booking also gives us time for menu planning, tasting sessions, and coordination with your wedding planner.',
  },
  {
    question: 'Do you provide Jain food for weddings?',
    answer: 'Yes, we specialize in Jain wedding catering. We prepare separate Jain food with no onion, no garlic, and no root vegetables using dedicated utensils. Many Marwari and Jain families in Noida trust us for their wedding catering.',
  },
  {
    question: 'What live counters do you recommend for weddings?',
    answer: 'Popular wedding live counters include: Chaat Counter (most requested), Live Dosa/Uttapam, Tandoor Counter, Pasta/Chinese, Pav Bhaji, and Dessert Counters (Jalebi-Rabri, Kulfi). We recommend 2-3 live counters for 200+ guest weddings.',
  },
  {
    question: 'Do you provide tasting before booking?',
    answer: 'Yes, for wedding bookings of 150+ guests, we offer a paid tasting session (₹2,500-3,500 for 4-6 people). The tasting amount is adjusted against your final bill upon confirmation. This helps you finalize the exact menu items.',
  },
  {
    question: 'Can you coordinate with our wedding venue and decorator?',
    answer: 'Absolutely. We regularly work with wedding planners, decorators, and venue managers across Noida. We coordinate on setup timing, buffet placement, color themes for presentation, and overall event flow.',
  },
  {
    question: 'How many service staff do you provide for weddings?',
    answer: 'For weddings, we provide approximately 1 service staff per 25-30 guests for buffet service. For a 200-guest wedding, expect 7-8 service staff including buffet managers and live counter operators. All staff wear uniforms.',
  },
  {
    question: 'What is included in wedding catering setup?',
    answer: 'Our wedding packages include: Menu consultation, food preparation, complete buffet setup with premium chafing dishes, uniformed service staff, crockery (plates, bowls, glasses), buffet table decoration, live counter setup, and post-event cleanup.',
  },
  {
    question: 'Do you handle outdoor wedding catering?',
    answer: 'Yes, we cater for farmhouse weddings, lawn weddings, and terrace events. We bring all necessary equipment including generators for chafing dishes if needed. We\'ve catered at most major wedding venues and farmhouses in Noida.',
  },
  {
    question: 'What is your cancellation policy for weddings?',
    answer: 'For weddings: Cancellation 30+ days before: 80% refund. 15-30 days: 50% refund. Less than 15 days: No refund but can reschedule. We understand plans change, so we try to be flexible with rescheduling.',
  },
  {
    question: 'Can you handle last-minute guest count changes?',
    answer: 'We prepare 10% extra food as buffer for weddings. For larger changes, inform us at least 24 hours before the event, and we can adjust quantities. We understand wedding guest counts are always estimates.',
  },
];

const weddingFunctions = [
  { name: 'Haldi', desc: 'Casual, colorful menu with light snacks and refreshments', image: IMAGES.wedding.gallery[0] },
  { name: 'Mehendi', desc: 'Elegant snacks and chaat counters for ladies\' gathering', image: IMAGES.wedding.gallery[1] },
  { name: 'Sangeet', desc: 'Party-style menu with starters and live counters', image: IMAGES.wedding.sangeet },
  { name: 'Ring Ceremony', desc: 'Formal sit-down or buffet for intimate gathering', image: IMAGES.wedding.ring },
  { name: 'Wedding Day', desc: 'Grand buffet with complete North Indian spread', image: IMAGES.wedding.hero },
  { name: 'Reception', desc: 'Premium multi-cuisine buffet with live counters', image: IMAGES.wedding.tiles[0] },
];

const packages = [
  {
    name: 'Silver Package',
    price: SITE_CONFIG.pricing.signature,
    bestFor: 'Budget-friendly weddings, intimate functions',
    includes: [
      '3 Starters',
      '2 Paneer Dishes',
      'Dal Makhani',
      '2 Seasonal Vegetables',
      'Veg Biryani + Pulao',
      'Assorted Breads',
      'Raita + Salad',
      '2 Desserts',
      'Basic Buffet Setup',
      'Service Staff',
    ],
  },
  {
    name: 'Gold Package',
    price: 500,
    popular: true,
    bestFor: 'Most weddings, good variety',
    includes: [
      '4 Premium Starters',
      '3 Main Course Dishes',
      'Dal Makhani + Special Dal',
      '2 Vegetables',
      'Biryani + Pulao',
      '1 Live Counter',
      'Premium Breads',
      'Complete Accompaniments',
      '3 Desserts',
      'Premium Setup',
      'Uniformed Staff',
    ],
  },
  {
    name: 'Platinum Package',
    price: SITE_CONFIG.pricing.royal,
    bestFor: 'Grand weddings, premium celebrations',
    includes: [
      '5+ Premium Starters',
      '4+ Main Course Options',
      'Premium Dals',
      'Specialty Vegetables',
      'Biryani + 2 Rice Options',
      '2 Live Counters',
      'Premium Breads + Parathas',
      'All Accompaniments',
      'Premium Dessert Spread',
      'Buffet Decoration',
      'Dedicated Event Manager',
    ],
  },
];

const setupFeatures = [
  {
    title: 'Premium Buffet Setup',
    desc: 'Elegant presentation with chafing dishes, runners, and themed decoration',
  },
  {
    title: 'Uniformed Service Staff',
    desc: 'Professional, trained staff in formal uniforms for seamless service',
  },
  {
    title: 'Live Counter Experience',
    desc: 'Interactive food stations that add excitement to your wedding',
  },
  {
    title: 'Smooth Guest Flow',
    desc: 'Strategic buffet layout ensuring no crowding or long queues',
  },
];

export default function WeddingCateringPage() {
  return (
    <>
      <ServiceSchema
        name="Wedding Catering in Noida"
        description="Premium wedding catering services in Noida. From Haldi to Reception, we handle menu planning, buffet setup, and professional service."
      />
      <FAQSchema faqs={weddingFaqs} />

      <Breadcrumbs
        items={[
          { name: 'Services', href: '/services/wedding-catering-noida/' },
          { name: 'Wedding Catering', href: '/services/wedding-catering-noida/' },
        ]}
      />

      <Hero
        title="Wedding Catering in Noida — Haldi to Reception | Premium Veg & Multi-Cuisine"
        subtitle="From intimate Mehendi to grand Reception — we plan menus, execute setup, and manage service flow so your wedding functions feel premium and stress-free."
        backgroundImage={IMAGES.wedding.hero}
      />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                Why Noida Families Choose Us for Wedding Catering
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                A wedding is a once-in-a-lifetime event, and food is what guests remember most. We understand the pressure and importance of getting it right:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">200+ Weddings Catered:</strong>
                    <span className="text-gray-600"> We&apos;ve handled weddings of all sizes across Noida&apos;s best venues.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Dedicated Wedding Coordinator:</strong>
                    <span className="text-gray-600"> One person manages your entire catering experience from planning to cleanup.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Venue Expertise:</strong>
                    <span className="text-gray-600"> We know the setup requirements of all major banquet halls and farmhouses.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Jain & Dietary Options:</strong>
                    <span className="text-gray-600"> Complete Jain menu with separate preparation, plus other dietary accommodations.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.wedding.tiles[0]}
                alt="Wedding buffet setup by Chef24Catering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Functions */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Wedding Functions We Cater"
            subtitle="Customized menus for every ceremony"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingFunctions.map((func) => (
              <div
                key={func.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-40">
                  <Image
                    src={func.image}
                    alt={`${func.name} catering`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-xl font-semibold text-ink">{func.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{func.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Videos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Real Wedding Moments" subtitle="See our setups in action" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <VideoEmbed src={IMAGES.videos.haldi1} title="Haldi Function Catering" />
            <VideoEmbed src={IMAGES.videos.haldi2} title="Haldi Ceremony" />
            <VideoEmbed src={IMAGES.videos.mehendi} title="Mehendi Function" />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Wedding Catering Packages"
            subtitle="Choose the package that fits your celebration"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-xl p-6 shadow-sm ${pkg.popular ? 'ring-2 ring-accent' : ''}`}
              >
                {pkg.popular && (
                  <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-2xl font-semibold text-ink">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{pkg.bestFor}</p>
                <p className="text-3xl font-heading font-bold text-accent mt-4">
                  ₹{pkg.price}/plate
                </p>
                <ul className="mt-6 space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="text-accent">✓</span>
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
          <p className="text-center text-gray-600 mt-8">
            *Prices are per plate. Minimum 100 guests for wedding packages. Custom packages available.
          </p>
        </div>
      </section>

      {/* Setup Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Premium Setup & Service" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {setupFeatures.map((feature) => (
              <div key={feature.title} className="bg-background rounded-xl p-6 text-center">
                <h3 className="font-heading text-lg font-semibold text-ink mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Wedding Gallery" subtitle="Real setups from recent weddings" />
          <ImageGallery images={IMAGES.wedding.gallery} columns={4} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Wedding Catering FAQs" />
          <div className="space-y-4">
            {weddingFaqs.slice(0, 8).map((faq, index) => (
              <details key={index} className="bg-background rounded-xl shadow-sm group">
                <summary className="p-6 cursor-pointer font-semibold text-ink flex items-center justify-between">
                  {faq.question}
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/faq/" className="text-accent hover:text-accent/80 font-medium">
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">
            Planning Your Dream Wedding?
          </h2>
          <p className="text-white/80 mb-6">
            Let&apos;s discuss your wedding catering requirements and create the perfect menu
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing/"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              See Full Pricing
            </Link>
            <Link
              href="/menu/"
              className="bg-gold text-white hover:bg-gold/90 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Menu
            </Link>
            <WhatsAppLink variant="primary">Get Wedding Quote</WhatsAppLink>
          </div>
        </div>
      </section>

      <SectorGrid />
    </>
  );
}
