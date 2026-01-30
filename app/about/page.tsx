import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Chef24Catering | Our Story, Team & Values | Noida Catering',
  description:
    'Learn about Chef24Catering - Noida\'s trusted catering partner. Our story, experienced team, hygiene standards, and commitment to making your events memorable.',
  path: '/about/',
});

const milestones = [
  { year: '2018', title: 'Founded', desc: 'Started with a small team serving house parties in Noida' },
  { year: '2019', title: 'Corporate Expansion', desc: 'Began serving IT companies in Sector 62-63' },
  { year: '2020', title: 'Survived & Thrived', desc: 'Adapted to home delivery and small gatherings during pandemic' },
  { year: '2021', title: 'Wedding Catering', desc: 'Expanded to full-service wedding and large event catering' },
  { year: '2022', title: '500+ Events', desc: 'Crossed milestone of 500 successful events' },
  { year: '2023', title: 'Team Growth', desc: 'Expanded to 25+ trained service professionals' },
  { year: '2024', title: 'Multi-Sector Coverage', desc: 'Now serving all major Noida sectors with dedicated teams' },
];

const values = [
  {
    title: 'Taste First',
    desc: 'We never compromise on flavor. Our recipes are perfected over years, using fresh ingredients and authentic spices.',
    icon: '🍽️',
  },
  {
    title: 'Hygiene Always',
    desc: 'Kitchen cleanliness, food handling protocols, and staff hygiene are non-negotiable standards we maintain.',
    icon: '✨',
  },
  {
    title: 'Punctuality',
    desc: 'We understand events run on tight schedules. Our setup is always complete before your first guest arrives.',
    icon: '⏰',
  },
  {
    title: 'Transparent Pricing',
    desc: 'No hidden charges, no surprises. What we quote is what you pay. All inclusions are clearly mentioned.',
    icon: '💰',
  },
  {
    title: 'Flexibility',
    desc: 'Menu customization, last-minute changes, dietary requirements - we adapt to make your event perfect.',
    icon: '🔄',
  },
  {
    title: 'Personal Touch',
    desc: 'Every event gets dedicated attention. We treat your celebration as if it were our own family function.',
    icon: '❤️',
  },
];

const teamHighlights = [
  { stat: '25+', label: 'Trained Service Staff' },
  { stat: '8+', label: 'Experienced Chefs' },
  { stat: '5+', label: 'Event Coordinators' },
  { stat: '100%', label: 'Background Verified' },
];

const certifications = [
  'FSSAI Registered',
  'Regular Health Checkups for Staff',
  'Food Safety Training Certified',
  'COVID-19 Safety Protocols',
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'About Us', href: '/about/' }]} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Serving Happiness, One Plate at a Time
            </h1>
            <p className="text-xl text-white/80">
              Chef24Catering is Noida&apos;s trusted partner for memorable food experiences.
              From intimate house parties to grand weddings, we bring passion, precision, and
              uncompromising quality to every event.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.about}
                alt="Chef24Catering team preparing food"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Chef24Catering was born from a simple observation: families in Noida deserved
                  better catering options. Too often, people had to choose between expensive hotel
                  catering or unreliable local caterers with inconsistent quality.
                </p>
                <p>
                  We started in 2018 with a small team and a big vision — to provide restaurant-quality
                  food with professional service at honest prices. Our first events were small house
                  parties in Sector 62, where word-of-mouth recommendations helped us grow.
                </p>
                <p>
                  Today, we&apos;re proud to serve across Noida&apos;s major sectors, from corporate
                  offices in Sector 63 to grand weddings in premium venues. But our core promise
                  remains the same: delicious food, reliable service, and complete peace of mind
                  for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in our growth story"
          />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-muted hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <span className="text-accent font-bold text-lg">{milestone.year}</span>
                      <h3 className="font-heading text-xl font-semibold text-ink mt-1">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-accent rounded-full z-10 flex-shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Stand For"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-background rounded-xl p-6">
                <span className="text-4xl">{value.icon}</span>
                <h3 className="font-heading text-xl font-semibold text-ink mt-4 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Team"
            subtitle="Trained professionals committed to excellence"
            className="text-white [&_p]:text-white/80"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamHighlights.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-5xl md:text-6xl font-heading font-bold text-gold">
                  {item.stat}
                </p>
                <p className="text-white/80 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Safety */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                Hygiene & Food Safety
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We take food safety seriously. Our kitchen operations follow strict hygiene protocols,
                and all our staff undergo regular training on food handling best practices.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent text-sm">✓</span>
                    </span>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-background rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>FSSAI License:</strong> Our operations are FSSAI registered, ensuring
                  compliance with India&apos;s food safety standards.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.parties.corporate}
                alt="Hygienic food preparation at Chef24Catering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Noida Trusts Chef24Catering"
            subtitle="What sets us apart from other caterers"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">
                Local Expertise
              </h3>
              <p className="text-gray-600">
                We know Noida inside out — the venue access protocols, building timings, traffic
                patterns, and even which lifts work better for heavy loads. This local knowledge
                ensures smooth execution every time.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">
                Single Point of Contact
              </h3>
              <p className="text-gray-600">
                You get a dedicated coordinator for your event who handles everything — menu planning,
                logistics, staff coordination, and on-ground execution. No confusion, no miscommunication.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">
                Flexible Customization
              </h3>
              <p className="text-gray-600">
                Our menus are not fixed templates. Want to add your grandmother&apos;s special recipe?
                Need a fusion dish? Have specific dietary requirements? We work with you to create
                the perfect menu.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">
                After-Event Cleanup
              </h3>
              <p className="text-gray-600">
                Our service doesn&apos;t end when guests leave. We handle complete cleanup of
                the catering area, dispose of waste properly, and ensure the venue is left
                in clean condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Experience the Chef24 Difference?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Let&apos;s discuss your event and create a memorable food experience together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppLink variant="primary">Start Planning Your Event</WhatsAppLink>
            <Link
              href="/pricing/"
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Our Packages
            </Link>
          </div>
          <p className="text-white/60 mt-6">
            Or call us directly: {SITE_CONFIG.phone}
          </p>
        </div>
      </section>
    </>
  );
}
