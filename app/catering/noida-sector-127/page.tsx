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
  title: 'Premium Catering in Noida Sector 127 | Luxury Events & High-End Functions | Chef24Catering',
  description:
    'Exclusive catering service in Noida Sector 127. Specializing in premium events, luxury weddings, corporate galas, and high-end residential functions along Noida Expressway.',
  path: '/catering/noida-sector-127/',
});

const sectorFaqs = [
  {
    question: 'What makes your catering suitable for premium events in Sector 127?',
    answer: 'We understand that Sector 127 residents expect exceptional quality. Our premium service includes chef-curated menus, elegant presentation with fine china and glassware options, uniformed service staff, and attention to every detail. We\'ve catered at Mahagun Moderne, ATS Pristine, and other luxury societies.',
  },
  {
    question: 'Do you offer luxury wedding catering in Sector 127?',
    answer: `Yes, luxury weddings are our specialty. We offer bespoke menus starting at ₹${SITE_CONFIG.pricing.royal}/plate with options going up to ₹1200+ for ultra-premium experiences. This includes live cooking stations, imported ingredients, and designer food presentation.`,
  },
  {
    question: 'Can you cater for high-profile corporate events?',
    answer: 'Absolutely. Many executives residing in Sector 127 host business dinners and corporate entertaining at home. We provide discreet, professional service with menus that impress - from intimate board member dinners to CEO hosting events.',
  },
  {
    question: 'What premium cuisine options do you offer?',
    answer: 'Beyond traditional Indian, we offer Pan-Asian, Continental, Mediterranean, and fusion cuisines. Our chefs can prepare authentic Italian pasta stations, Japanese-inspired items, Lebanese mezze spreads, and more for the cosmopolitan tastes of Sector 127.',
  },
  {
    question: 'Do you provide catering for pool parties and terrace events?',
    answer: 'Yes, many premium societies in Sector 127 have rooftop venues and pool areas. We specialize in outdoor luxury catering with appropriate setups including elegant gazebos, temperature-controlled food stations, and weather-proof arrangements.',
  },
  {
    question: 'Can you accommodate international dietary preferences?',
    answer: 'Sector 127 has a global community, and we cater to all preferences - Keto, Paleo, Vegan, Gluten-free, Halal-style, and various international dietary requirements. We can create menus that cater to NRI families and expatriate residents.',
  },
  {
    question: 'What is included in your luxury service package?',
    answer: 'Our luxury package includes menu consultation with our head chef, tasting session, premium crockery and linen, professional bartender service (mocktails), dedicated event manager, live cooking demonstrations, and complete post-event cleanup.',
  },
  {
    question: 'Do you cater for private chef experiences?',
    answer: 'Yes, we offer private chef services where our chef comes to your home in Sector 127 and prepares a bespoke multi-course meal. Perfect for anniversary dinners, proposal celebrations, or intimate gatherings of 4-12 guests.',
  },
  {
    question: 'What engagement and pre-wedding events do you handle?',
    answer: 'We cater for the entire wedding journey - Roka ceremonies, engagement parties, sangeet nights, mehendi functions, and wedding receptions. Our packages can be customized for each event type with appropriate menus and setups.',
  },
  {
    question: 'How do you ensure exclusivity for premium events?',
    answer: 'For premium events in Sector 127, we limit our bookings to ensure dedicated attention. We assign a dedicated event coordinator, conduct venue visits, provide multiple tasting sessions, and ensure our A-team handles your event.',
  },
];

const popularVenues = [
  'Mahagun Moderne',
  'ATS Pristine',
  'Supertech Supernova',
  'Jaypee Wishtown',
  'Paras Tierea',
  'Ace Golfshire',
];

const popularEventTypes = [
  {
    name: 'Luxury Weddings & Receptions',
    desc: 'Grand celebrations with bespoke menus and impeccable service',
    popular: true,
  },
  {
    name: 'Pre-Wedding Functions',
    desc: 'Engagement, Sangeet, Mehendi with themed catering experiences',
    popular: true,
  },
  {
    name: 'Executive Home Entertaining',
    desc: 'Impress business guests with premium at-home dining',
    popular: false,
  },
  {
    name: 'Milestone Celebrations',
    desc: 'Silver/Golden anniversaries, 50th birthdays, achievements',
    popular: true,
  },
  {
    name: 'Private Chef Experiences',
    desc: 'Intimate multi-course meals prepared in your home',
    popular: false,
  },
  {
    name: 'Terrace & Pool Parties',
    desc: 'Stylish outdoor events in premium society amenity areas',
    popular: false,
  },
];

const localTestimonial = {
  quote: 'For our daughter\'s engagement at Mahagun Moderne clubhouse, we needed catering that matched the venue\'s elegance. Chef24Catering exceeded expectations - the presentation was stunning, the food was exceptional, and their team was so professional. Our guests are still talking about the live pasta station!',
  name: 'Sanjay Kapoor',
  designation: 'Business Owner',
  company: 'Mahagun Moderne, Sector 127',
};

const proofImages = [
  IMAGES.wedding.hero,
  IMAGES.wedding.tiles[0],
  IMAGES.venues[0],
  IMAGES.parties.corporate,
];

export default function Sector127Page() {
  return (
    <>
      <FAQSchema faqs={sectorFaqs} />

      <Breadcrumbs
        items={[
          { name: 'Catering', href: '/catering/noida-sector-127/' },
          { name: 'Noida Sector 127', href: '/catering/noida-sector-127/' },
        ]}
      />

      <Hero
        title="Premium Catering in Noida Sector 127 — Luxury Events & Exclusive Functions"
        subtitle="Where exceptional cuisine meets impeccable service. Trusted by discerning families along Noida Expressway for their most important celebrations."
        backgroundImage={IMAGES.banner}
      />

      {/* Why Sector 127 Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.wedding.hero}
                alt="Premium wedding catering in Noida Sector 127"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                Catering That Matches Sector 127&apos;s Elegance
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Sector 127 represents Noida&apos;s most premium residential corridor along the Expressway. Home to luxury high-rises, successful professionals, and families who appreciate the finer things in life. Our catering is designed to match these standards:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Chef-Curated Menus:</strong>
                    <span className="text-gray-600"> Custom menus designed by our head chef based on your preferences, theme, and guest profile.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Luxury Presentation:</strong>
                    <span className="text-gray-600"> Fine china, elegant serving ware, designer food displays that photograph beautifully.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">White-Glove Service:</strong>
                    <span className="text-gray-600"> Trained, uniformed staff who understand premium hospitality and discreet service.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Global Cuisine Expertise:</strong>
                    <span className="text-gray-600"> Beyond Indian - Italian, Oriental, Mediterranean, and fusion cuisines for cosmopolitan tastes.</span>
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
            title="Premium Events We Specialize In"
            subtitle="Exclusive catering for life's most important moments"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularEventTypes.map((event) => (
              <div
                key={event.name}
                className={`bg-white rounded-xl p-6 shadow-sm ${event.popular ? 'ring-2 ring-accent' : ''}`}
              >
                {event.popular && (
                  <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-3">
                    Signature Service
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold text-ink mb-2">{event.name}</h3>
                <p className="text-gray-600">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Societies We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Premium Societies We Serve"
            subtitle="Trusted by residents in Noida's finest addresses"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularVenues.map((venue) => (
              <div key={venue} className="bg-background rounded-lg p-4 text-center">
                <p className="font-medium text-ink">{venue}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            + All luxury residences and premium societies along Noida Expressway
          </p>
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

      {/* Premium Menu Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Premium Catering Packages"
            subtitle="Elevated experiences for distinguished occasions"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Elegant Dinner</h3>
              <p className="text-accent font-semibold mb-4">₹{SITE_CONFIG.pricing.signature}/plate</p>
              <ul className="space-y-2 text-gray-600">
                <li>• 3 Gourmet Starters</li>
                <li>• 2 Premium Main Courses</li>
                <li>• Dal Makhani + Seasonal Veg</li>
                <li>• Veg Biryani / Pulao</li>
                <li>• Assorted Indian Breads</li>
                <li>• Salad Bar + Raita</li>
                <li>• 2 Signature Desserts</li>
                <li>• Elegant Buffet Setup</li>
                <li>• Professional Service</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm ring-2 ring-accent">
              <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-2">
                Most Requested
              </span>
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Royal Celebration</h3>
              <p className="text-accent font-semibold mb-4">₹{SITE_CONFIG.pricing.royal}/plate</p>
              <ul className="space-y-2 text-gray-600">
                <li>• 5 Premium Starters</li>
                <li>• 3 Signature Main Courses</li>
                <li>• Dal Makhani + Veg Specialties</li>
                <li>• Dum Biryani + Pulao</li>
                <li>• Live Counter (1 choice)</li>
                <li>• Premium Dessert Station</li>
                <li>• Fine Crockery + Linen</li>
                <li>• Uniformed Service Team</li>
                <li>• Event Coordinator</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <span className="inline-block bg-gold text-white text-xs px-2 py-1 rounded mb-2">
                Ultra Premium
              </span>
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Luxe Experience</h3>
              <p className="text-accent font-semibold mb-4">₹950+/plate</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Bespoke Menu Design</li>
                <li>• 6+ Premium Starters</li>
                <li>• 4+ Signature Mains</li>
                <li>• 2 Live Counters</li>
                <li>• International Cuisine Options</li>
                <li>• Premium Imported Elements</li>
                <li>• Luxury Presentation</li>
                <li>• Dedicated Event Manager</li>
                <li>• Pre-Event Tasting</li>
                <li>• Complete Coordination</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <WhatsAppLink variant="primary">Schedule Consultation</WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Exclusive Services for Sector 127"
            subtitle="Premium add-ons for exceptional events"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink mb-4">Private Chef Experience</h3>
              <p className="text-gray-600 mb-4">Intimate dining at its finest</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Chef visits your home in Sector 127</li>
                <li>• Custom multi-course menu discussion</li>
                <li>• Fresh preparation in your kitchen</li>
                <li>• Course-by-course plated service</li>
                <li>• Wine/beverage pairing suggestions</li>
                <li>• Complete kitchen cleanup</li>
                <li>• Perfect for 4-12 guests</li>
              </ul>
              <p className="mt-4 text-accent font-semibold">Starting ₹15,000 for 4 guests</p>
            </div>
            <div className="bg-background rounded-xl p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink mb-4">Wedding Complete Package</h3>
              <p className="text-gray-600 mb-4">From Roka to Reception</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Roka ceremony catering</li>
                <li>• Engagement party menu</li>
                <li>• Mehendi function service</li>
                <li>• Sangeet night catering</li>
                <li>• Wedding day complete service</li>
                <li>• Reception grand buffet</li>
                <li>• Consistent quality across events</li>
                <li>• Single point coordination</li>
              </ul>
              <p className="mt-4 text-accent font-semibold">Special package pricing available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Gallery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Premium Events Gallery" />
          <ImageGallery images={proofImages} columns={4} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Premium Catering FAQs - Sector 127" />
          <div className="space-y-4">
            {sectorFaqs.map((faq, index) => (
              <details
                key={index}
                className="bg-background rounded-xl shadow-sm group"
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
            Planning a Premium Event in Sector 127?
          </h2>
          <p className="text-white/80 mb-6">
            Experience catering that matches your standards. Let&apos;s create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing/" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Premium Packages
            </Link>
            <Link href="/menu/" className="bg-gold text-white hover:bg-gold/90 px-6 py-3 rounded-lg font-semibold transition-colors">
              Explore Menus
            </Link>
            <WhatsAppLink variant="primary">Book Consultation</WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Nearby Sectors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Also Serving Expressway Corridor"
            subtitle="Premium service across Noida's upscale sectors"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/catering/noida-sector-125/" className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">Sector 125</h3>
              <p className="text-gray-600">Tech campus corridor with corporate events and seminars. 5 minutes from Sector 127.</p>
            </Link>
            <Link href="/catering/noida-sector-70/" className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">Sector 70</h3>
              <p className="text-gray-600">Established societies with frequent celebrations. 12 minutes via expressway.</p>
            </Link>
            <Link href="/catering/noida-sector-63/" className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">Sector 63</h3>
              <p className="text-gray-600">Corporate IT hub for office events. 15 minutes from Sector 127.</p>
            </Link>
          </div>
        </div>
      </section>

      <SectorGrid currentSector="127" />
    </>
  );
}
