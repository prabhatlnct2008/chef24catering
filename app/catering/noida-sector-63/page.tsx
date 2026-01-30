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
  title: 'Caterer in Noida Sector 63 | Corporate & Office Catering | Chef24Catering',
  description:
    'Best catering service in Noida Sector 63. Specializing in corporate lunches, office parties, IT company events. Packages from ₹250/plate. Same-day delivery available.',
  path: '/catering/noida-sector-63/',
});

const sectorFaqs = [
  {
    question: 'Do you deliver catering to all IT parks in Sector 63?',
    answer: 'Yes, we deliver to all major IT parks and corporate buildings in Sector 63 including Stellar IT Park, Logix Cyber Park, Logix Techno Park, and all offices along the main Sector 63 road. We\'re familiar with building entry protocols and service elevator timings.',
  },
  {
    question: 'What\'s the minimum order for office lunch catering in Sector 63?',
    answer: 'For Sector 63 corporate clients, our minimum order is 20 plates for buffet service or 15 lunch boxes. For regular daily office lunch arrangements, we offer flexible packages starting from 10 meals per day.',
  },
  {
    question: 'Can you handle last-minute corporate catering requests?',
    answer: 'Yes, we understand the fast-paced nature of corporate events. For Sector 63 offices, we can handle same-day requests for up to 50 guests if ordered before 10 AM. For larger events, we recommend 24-48 hours notice.',
  },
  {
    question: 'Do you provide catering for late-night office events?',
    answer: 'Absolutely. Many IT companies in Sector 63 have project deadlines requiring late-night meals. We offer dinner and midnight snack catering till 11 PM, with special packages for extended work hours.',
  },
  {
    question: 'What corporate catering packages do you offer for Sector 63?',
    answer: `We offer three main packages: Basic Office Lunch (₹${SITE_CONFIG.pricing.essential}/plate) with dal, sabzi, rice, roti, and dessert; Premium Buffet (₹${SITE_CONFIG.pricing.signature}/plate) with starters, multiple mains, and live counters; and Executive Package (₹${SITE_CONFIG.pricing.royal}/plate) for client meetings and celebrations.`,
  },
  {
    question: 'Do you offer weekly or monthly catering contracts for offices?',
    answer: 'Yes, we offer corporate tie-ups with weekly and monthly contracts. This includes dedicated menu planning, fixed delivery schedules, and 10-15% discount on regular prices. Many IT companies in Sector 63 use our subscription service.',
  },
  {
    question: 'Can you set up a live food counter in our office pantry?',
    answer: 'Yes, we specialize in compact live counter setups perfect for office pantries. Popular options include chaat counter, pasta station, and sandwich/wrap counter. We bring our own equipment and handle complete setup and cleanup.',
  },
  {
    question: 'Do you cater for office birthday celebrations and team parties?',
    answer: 'Office celebrations are our specialty in Sector 63. We offer party packages including snacks, main course, cake arrangement, and even decoration coordination. Perfect for birthdays, farewells, promotions, and festival celebrations.',
  },
];

const popularVenues = [
  'Stellar IT Park',
  'Logix Cyber Park',
  'Logix Techno Park',
  'Vatika Business Centre',
  'Bhutani Alphathum',
  'Corenthum Tower',
];

const popularEventTypes = [
  {
    name: 'Daily Office Lunches',
    desc: 'Consistent quality meals for your team, delivered hot and on time',
    popular: true,
  },
  {
    name: 'Client Meeting Catering',
    desc: 'Premium presentation for important business meetings',
    popular: true,
  },
  {
    name: 'Team Celebrations',
    desc: 'Birthdays, promotions, farewells, and milestone celebrations',
    popular: false,
  },
  {
    name: 'Conference & Seminar Lunch',
    desc: 'Boxed meals or buffet for large corporate events',
    popular: false,
  },
  {
    name: 'Festival Celebrations',
    desc: 'Diwali, Holi, and other festival special menus',
    popular: true,
  },
  {
    name: 'Late Night Project Meals',
    desc: 'Dinner and snacks for teams working extended hours',
    popular: false,
  },
];

const localTestimonial = {
  quote: 'We\'ve been using Chef24Catering for our office lunches for over a year now. The consistency in quality and punctual delivery has been impressive. Their corporate packages are perfectly suited for our IT team of 80+ people.',
  name: 'Rajesh Kumar',
  designation: 'Admin Manager',
  company: 'Tech Solutions Pvt Ltd, Sector 63',
};

const proofImages = [
  IMAGES.parties.corporate,
  IMAGES.parties.hero,
  IMAGES.wedding.tiles[0],
  IMAGES.wedding.tiles[1],
];

export default function Sector63Page() {
  return (
    <>
      <FAQSchema faqs={sectorFaqs} />

      <Breadcrumbs
        items={[
          { name: 'Catering', href: '/catering/noida-sector-63/' },
          { name: 'Noida Sector 63', href: '/catering/noida-sector-63/' },
        ]}
      />

      <Hero
        title="Caterer in Noida Sector 63 — Corporate & Office Catering Specialists"
        subtitle="Trusted by 50+ IT companies and corporate offices in Sector 63. From daily office lunches to grand client events — we deliver excellence on time, every time."
        backgroundImage={IMAGES.banner}
      />

      {/* Why Sector 63 Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                Why We&apos;re the Preferred Caterer in Sector 63
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Noida Sector 63 is the IT and corporate hub of the city, home to hundreds of tech companies, startups, and multinational offices. We understand the unique catering needs of this fast-paced environment:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Time-Critical Delivery:</strong>
                    <span className="text-gray-600"> Corporate lunches must be on time. We guarantee delivery within your specified window.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Building Protocol Knowledge:</strong>
                    <span className="text-gray-600"> We know the entry procedures, service elevator timings, and parking rules of all major buildings.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Flexible Portions:</strong>
                    <span className="text-gray-600"> Tech teams have varying headcounts. We accommodate last-minute changes up to 10% without extra charges.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  <div>
                    <strong className="text-ink">Dietary Accommodations:</strong>
                    <span className="text-gray-600"> Jain, no-onion-garlic, and specific dietary requirements handled with care for diverse teams.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.parties.corporate}
                alt="Corporate catering setup in Noida Sector 63 office"
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
            title="Most Requested Catering in Sector 63"
            subtitle="Based on orders from IT parks and corporate offices in this area"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularEventTypes.map((event) => (
              <div
                key={event.name}
                className={`bg-white rounded-xl p-6 shadow-sm ${event.popular ? 'ring-2 ring-accent' : ''}`}
              >
                {event.popular && (
                  <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold text-ink mb-2">{event.name}</h3>
                <p className="text-gray-600">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues We Serve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="IT Parks & Buildings We Serve in Sector 63"
            subtitle="Regular catering partners with these corporate complexes"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularVenues.map((venue) => (
              <div key={venue} className="bg-background rounded-lg p-4 text-center">
                <p className="font-medium text-ink">{venue}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            + All other corporate buildings, co-working spaces, and offices in Sector 63
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

      {/* Sample Corporate Menu */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Sample Corporate Lunch Menu"
            subtitle="Our most popular office lunch combination in Sector 63"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Basic Office Lunch</h3>
              <p className="text-accent font-semibold mb-4">₹{SITE_CONFIG.pricing.essential}/plate</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Dal Tadka / Dal Makhani</li>
                <li>• Seasonal Vegetable</li>
                <li>• Paneer Dish (rotation)</li>
                <li>• Jeera Rice</li>
                <li>• Roti (4 pcs)</li>
                <li>• Salad & Pickle</li>
                <li>• Sweet (Gulab Jamun)</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm ring-2 ring-accent">
              <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded mb-2">
                Most Ordered
              </span>
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Premium Buffet</h3>
              <p className="text-accent font-semibold mb-4">₹{SITE_CONFIG.pricing.signature}/plate</p>
              <ul className="space-y-2 text-gray-600">
                <li>• 2 Starters (Paneer Tikka + Veg)</li>
                <li>• 2 Main Course Dishes</li>
                <li>• Dal + Seasonal Veg</li>
                <li>• Veg Biryani / Pulao</li>
                <li>• Assorted Breads</li>
                <li>• Raita + Salad</li>
                <li>• 2 Desserts</li>
                <li>• Buffet Setup Included</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">Executive Package</h3>
              <p className="text-accent font-semibold mb-4">₹{SITE_CONFIG.pricing.royal}/plate</p>
              <ul className="space-y-2 text-gray-600">
                <li>• 3 Premium Starters</li>
                <li>• 3 Main Course Dishes</li>
                <li>• Dal Makhani + Veg</li>
                <li>• Biryani + Pulao</li>
                <li>• Live Counter (1 choice)</li>
                <li>• Premium Dessert Spread</li>
                <li>• Uniformed Service Staff</li>
                <li>• Complete Setup & Cleanup</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <WhatsAppLink variant="primary">Get Custom Corporate Quote</WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Proof Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Corporate Catering Setups" />
          <ImageGallery images={proofImages} columns={4} />
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions - Sector 63 Catering" />
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

      {/* CTA Section */}
      <section className="py-12 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">
            Ready to Elevate Your Office Catering?
          </h2>
          <p className="text-white/80 mb-6">
            Join 50+ companies in Sector 63 who trust us for their catering needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing/" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              See Pricing
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
            title="Also Serving Nearby Sectors"
            subtitle="Quick delivery to adjacent areas"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/catering/noida-sector-64/" className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">Sector 64</h3>
              <p className="text-gray-600">Corporate offices and residential societies. 5 minutes from Sector 63.</p>
            </Link>
            <Link href="/catering/noida-sector-65/" className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">Sector 65</h3>
              <p className="text-gray-600">Mixed residential-commercial area. Perfect for house parties and small events.</p>
            </Link>
            <Link href="/catering/noida-sector-62/" className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">Sector 62</h3>
              <p className="text-gray-600">IT companies and corporate parks. Similar corporate catering needs.</p>
            </Link>
          </div>
        </div>
      </section>

      <SectorGrid currentSector="63" />
    </>
  );
}
