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
  title: 'Catering in Noida Sector 125 | Tech Parks, Campus Events & Seminars | Chef24Catering',
  description:
    'Professional catering in Noida Sector 125 for tech campuses, corporate seminars, training sessions, and business events. Packages from ₹250/plate. Bulk orders welcome.',
  path: '/catering/noida-sector-125/',
});

const sectorFaqs = [
  {
    question: 'Do you cater for tech park events in Sector 125?',
    answer: 'Yes, we specialize in tech park and campus catering in Sector 125. We regularly serve companies in Candor TechSpace, WTC, and other corporate campuses. Our team understands building protocols, security procedures, and service area layouts.',
  },
  {
    question: 'Can you handle large conference and seminar catering?',
    answer: `Absolutely! Conference catering is one of our strengths. We offer packages from working lunch boxes (₹${SITE_CONFIG.pricing.essential}/person) to elaborate buffets (₹${SITE_CONFIG.pricing.royal}/person). We can handle events from 50 to 1000+ attendees with proper planning.`,
  },
  {
    question: 'What options do you have for corporate training sessions?',
    answer: 'Training sessions need flexible catering solutions. We offer tea/coffee breaks with snacks, working lunch boxes that are easy to eat during sessions, and hi-tea packages for longer programs. Our delivery is timed to match your training schedule.',
  },
  {
    question: 'Do you provide catering for product launch events?',
    answer: 'Product launches in Sector 125 tech companies are a specialty. We offer premium presentation with customized menus, branded service stations, and elegant finger food options that allow networking. Live counters add excitement to launch events.',
  },
  {
    question: 'What about catering for hackathons and coding events?',
    answer: 'Tech events like hackathons need fuel for creativity! We provide late-night snack packages, energy-boosting meals, and continuous tea/coffee service. Our hackathon package includes breakfast, lunch, dinner, and midnight snacks.',
  },
  {
    question: 'Can you set up cafeteria-style service for large campuses?',
    answer: 'Yes, we offer cafeteria-style catering for large tech campuses. This includes self-service stations, multiple cuisine counters, and efficient crowd management. Perfect for company annual days and all-hands meetings.',
  },
  {
    question: 'Do you offer regular lunch subscriptions for companies?',
    answer: 'Many companies in Sector 125 use our daily lunch service. We offer weekly and monthly subscriptions with rotating menus, fixed delivery schedules, and bulk discounts. Contact us for corporate tie-up rates.',
  },
  {
    question: 'What vegetarian and dietary options do you have for diverse teams?',
    answer: 'Tech teams are diverse! We always include Jain options (no onion/garlic), provide clearly labeled allergen information, and can accommodate vegan, gluten-free, and other dietary requirements. Just let us know in advance.',
  },
  {
    question: 'How quickly can you arrange catering for unplanned meetings?',
    answer: 'For Sector 125 offices, we can deliver for unplanned events with just 3-4 hours notice for groups up to 30 people. For larger gatherings, 24 hours notice is preferred. We keep emergency inventory ready for quick deployments.',
  },
  {
    question: 'Do you handle outdoor campus events and town halls?',
    answer: 'Yes, many tech campuses in Sector 125 have outdoor amphitheaters and lawn areas. We provide complete outdoor catering with weather-appropriate setups, mobile service stations, and efficient waste management.',
  },
];

const popularVenues = [
  'Candor TechSpace',
  'WTC Noida',
  'Galaxy Business Park',
  'Logix Infotech Park',
  'Stellar IT Hub',
  'Express Trade Tower',
];

const popularEventTypes = [
  {
    name: 'Conference & Seminar Catering',
    desc: 'Professional lunch service for business conferences and industry events',
    popular: true,
  },
  {
    name: 'Corporate Training Sessions',
    desc: 'Tea breaks, working lunches, and full-day catering for training programs',
    popular: true,
  },
  {
    name: 'Product Launch Events',
    desc: 'Premium catering for product unveils and media events',
    popular: false,
  },
  {
    name: 'Hackathons & Tech Events',
    desc: '24-hour catering support for developer events and competitions',
    popular: true,
  },
  {
    name: 'Campus Town Halls',
    desc: 'Large-scale catering for company-wide gatherings',
    popular: false,
  },
  {
    name: 'Client Entertainment',
    desc: 'Impressive catering for client visits and business dinners',
    popular: false,
  },
];

const localTestimonial = {
  quote: 'Chef24Catering has been managing our quarterly all-hands meetings at Candor TechSpace for two years now. 400+ employees, multiple dietary requirements, and they never miss a beat. Their seminar catering is efficient, professional, and the food quality is consistently excellent.',
  name: 'Deepak Verma',
  designation: 'Head of Administration',
  company: 'TechCorp Solutions, Sector 125',
};

const proofImages = [
  IMAGES.parties.corporate,
  IMAGES.parties.hero,
  IMAGES.venues[0],
  IMAGES.wedding.tiles[0],
];

export default function Sector125Page() {
  return (
    <>
      <FAQSchema faqs={sectorFaqs} />

      <Breadcrumbs
        items={[
          { name: 'Catering', href: '/catering/noida-sector-125/' },
          { name: 'Noida Sector 125', href: '/catering/noida-sector-125/' },
        ]}
      />

      <Hero
        title="Catering in Noida Sector 125 — Tech Parks, Campuses & Corporate Events"
        subtitle="Powering innovation with great food. Trusted by leading tech companies and corporate campuses across Sector 125 for seminars, conferences, and business events."
        backgroundImage={IMAGES.banner}
      />

      {/* Why Sector 125 Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                The Tech Campus Catering Experts
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Sector 125 is Noida&apos;s emerging tech corridor, home to modern corporate campuses, IT parks, and innovative companies. We&apos;ve developed specialized expertise in catering for this dynamic business environment:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Campus-Scale Operations:</strong>
                    <span className="text-gray-600"> Equipped to handle events from boardroom meetings to 1000+ person campus gatherings.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Tech Event Specialists:</strong>
                    <span className="text-gray-600"> Experience with hackathons, product launches, and 24-hour event catering.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Security Compliant:</strong>
                    <span className="text-gray-600"> Our team is trained in corporate security protocols, access procedures, and professional conduct.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Diverse Menu Options:</strong>
                    <span className="text-gray-600"> From global cuisines to regional specialties, catering to Sector 125&apos;s multicultural workforce.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.parties.corporate}
                alt="Corporate campus catering in Noida Sector 125"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Event Types */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Most Requested Corporate Catering in Sector 125"
            subtitle="What tech companies and campuses book us for"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularEventTypes.map((event) => (
              <div
                key={event.name}
                className={`bg-white rounded-xl p-6 shadow-sm ${event.popular ? 'ring-2 ring-accent' : ''}`}
              >
                {event.popular && (
                  <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-3">
                    High Demand
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold text-ink mb-2">{event.name}</h3>
                <p className="text-gray-600">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Parks We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Tech Parks & Campuses We Serve"
            subtitle="Regular catering partners with these business centers"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularVenues.map((venue) => (
              <div key={venue} className="bg-background rounded-lg p-4 text-center">
                <p className="font-medium text-ink">{venue}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            + All corporate offices, startups, and business centers in Sector 125
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

      {/* Corporate Menu Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Corporate Catering Packages"
            subtitle="Designed for tech campuses and business events"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Seminar Lunch Box</h3>
              <p className="text-accent font-semibold mb-4">₹{SITE_CONFIG.pricing.essential}/person</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Individual Packed Box</li>
                <li>• Starter (Cutlet/Tikka)</li>
                <li>• Main Course + Rice</li>
                <li>• Roti (3 pcs)</li>
                <li>• Salad + Pickle</li>
                <li>• Sweet Dish</li>
                <li>• Disposable Cutlery</li>
                <li>• Water Bottle</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm ring-2 ring-accent">
              <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-2">
                Most Popular
              </span>
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Conference Buffet</h3>
              <p className="text-accent font-semibold mb-4">₹{SITE_CONFIG.pricing.signature}/person</p>
              <ul className="space-y-2 text-gray-600">
                <li>• 2 Starters</li>
                <li>• 2 Main Courses</li>
                <li>• Dal + Seasonal Veg</li>
                <li>• Veg Biryani / Pulao</li>
                <li>• Assorted Breads</li>
                <li>• Raita + Salad Bar</li>
                <li>• 2 Desserts</li>
                <li>• Complete Buffet Setup</li>
                <li>• Service Staff Included</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Executive Event Package</h3>
              <p className="text-accent font-semibold mb-4">₹{SITE_CONFIG.pricing.royal}/person</p>
              <ul className="space-y-2 text-gray-600">
                <li>• 4 Premium Starters</li>
                <li>• 3 Signature Main Courses</li>
                <li>• Dal Makhani + Specialty Veg</li>
                <li>• Biryani + Pulao</li>
                <li>• Live Counter (1 choice)</li>
                <li>• Premium Dessert Station</li>
                <li>• Uniformed Service Team</li>
                <li>• Elegant Buffet Presentation</li>
                <li>• Complete Event Support</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <WhatsAppLink variant="primary">Get Corporate Quote</WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Special Tech Event Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Specialized Tech Event Packages"
            subtitle="Unique catering solutions for tech industry needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink mb-4">Hackathon Package</h3>
              <p className="text-gray-600 mb-4">24-hour catering support for developer events</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Breakfast spread (7-9 AM)</li>
                <li>• Mid-morning snacks + coffee</li>
                <li>• Lunch buffet (12-2 PM)</li>
                <li>• Evening high-tea (4-6 PM)</li>
                <li>• Dinner buffet (8-10 PM)</li>
                <li>• Midnight snack station</li>
                <li>• Continuous tea/coffee service</li>
                <li>• Energy drinks coordination</li>
              </ul>
              <p className="mt-4 text-accent font-semibold">Custom pricing based on duration</p>
            </div>
            <div className="bg-background rounded-xl p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink mb-4">Training Day Package</h3>
              <p className="text-gray-600 mb-4">Full-day catering for corporate training</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Welcome tea/coffee (9-9:30 AM)</li>
                <li>• Morning break with cookies/namkeen</li>
                <li>• Working lunch (easy-to-eat items)</li>
                <li>• Afternoon tea break with samosa/pakora</li>
                <li>• Evening refreshments (optional)</li>
                <li>• Notepads, pens arrangement (optional)</li>
                <li>• Flexible timing adjustments</li>
              </ul>
              <p className="mt-4 text-accent font-semibold">Starting ₹450/person for full day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Gallery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Corporate Events We&apos;ve Catered" />
          <ImageGallery images={proofImages} columns={4} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Sector 125 Corporate Catering FAQs" />
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
            Planning a Corporate Event in Sector 125?
          </h2>
          <p className="text-white/80 mb-6">
            From small meetings to large conferences - we power your events with great food
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing/" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Corporate Pricing
            </Link>
            <Link href="/menu/" className="bg-gold text-white hover:bg-gold/90 px-6 py-3 rounded-lg font-semibold transition-colors">
              View Full Menu
            </Link>
            <WhatsAppLink variant="primary">Get Instant Quote</WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Nearby Sectors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Also Serving Nearby Areas"
            subtitle="Extended coverage in Noida Expressway belt"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/catering/noida-sector-127/" className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">Sector 127</h3>
              <p className="text-gray-600">Premium residential area along Noida Expressway. 5 minutes from Sector 125.</p>
            </Link>
            <Link href="/catering/noida-sector-63/" className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">Sector 63</h3>
              <p className="text-gray-600">Established IT hub with corporate offices. 15 minutes via expressway.</p>
            </Link>
            <Link href="/catering/noida-sector-70/" className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">Sector 70</h3>
              <p className="text-gray-600">Residential societies for employee celebrations and personal events.</p>
            </Link>
          </div>
        </div>
      </section>

      <SectorGrid currentSector="125" />
    </>
  );
}
