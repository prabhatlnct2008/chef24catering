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
  title: 'Birthday Catering in Noida | Kids & Adult Birthday Party Caterer | Chef24Catering',
  description:
    'Birthday party catering in Noida for kids and adults. Fun food stations, buffet setups, themed menus. Starting ₹250/plate. Book your birthday caterer today!',
  path: '/birthday-catering-noida/',
  image: IMAGES.parties.birthday,
});

const faqs = [
  {
    question: 'What is the cost of birthday catering in Noida?',
    answer:
      'Birthday catering in Noida starts from ₹250/plate for basic packages. Kids birthday parties typically cost ₹200-350/child, while adult birthday parties range from ₹300-600/person. For 50 guests, expect ₹12,500-30,000 total depending on the menu and services chosen.',
  },
  {
    question: 'Do you provide catering for kids birthday parties?',
    answer:
      'Yes! We specialize in kids birthday catering with fun food options like mini burgers, pizza, pasta, finger foods, mocktails, and exciting dessert stations. We can theme the food presentation to match your party theme (superheroes, princesses, etc.).',
  },
  {
    question: 'What food items are popular for birthday party catering?',
    answer:
      'Popular items include: Starters (spring rolls, paneer tikka, corn cheese balls), Main course (biryani, noodles, pasta, paneer dishes), Live counters (chaat, dosa, pasta station), and Desserts (cake, ice cream, pastries, gulab jamun). We customize based on age group and preferences.',
  },
  {
    question: 'Can you arrange a birthday cake as part of catering?',
    answer:
      'While we primarily focus on catering, we can coordinate with trusted bakeries to arrange birthday cakes as part of your package. We can also set up a beautiful cake cutting station with all arrangements.',
  },
  {
    question: 'Do you cater for milestone birthdays like 1st birthday, 50th, 60th?',
    answer:
      'Absolutely! Milestone birthdays are our specialty. First birthdays often include both kids and adult menus. For 50th/60th birthdays, we create elegant menus suitable for family gatherings with traditional and modern options.',
  },
  {
    question: 'What is the minimum guest count for birthday catering?',
    answer:
      'Our minimum for birthday party catering is 30 guests. For smaller gatherings (15-30 guests), we offer special intimate party packages with adjusted pricing. Contact us for customized solutions.',
  },
  {
    question: 'Do you provide decoration along with birthday catering?',
    answer:
      'We focus on food catering but provide attractive buffet decoration and food presentation. For party decoration (balloons, banners, themes), we can recommend trusted decoration partners who work well with our catering setup.',
  },
  {
    question: 'Can you set up catering for a birthday party at home?',
    answer:
      'Yes! Most of our birthday catering is for house parties. We efficiently set up buffets in living rooms, balconies, or terraces. For apartment parties, we work within space constraints and building guidelines.',
  },
  {
    question: 'What live counters work best for birthday parties?',
    answer:
      'Popular birthday party live counters include: Chaat Counter (kids and adults love it), Pasta/Noodle Station, Dosa Counter, Ice Cream Station, Mocktail Bar, and Sandwich/Burger Station. These add fun and engagement to the party.',
  },
  {
    question: 'How early should I book birthday catering?',
    answer:
      'We recommend booking 5-7 days in advance for regular birthdays and 2-3 weeks for large parties (100+ guests). Weekend dates fill up quickly, so early booking is advised. Last-minute bookings (2-3 days) possible subject to availability.',
  },
];

const birthdayPackages = [
  {
    name: 'Fun Party Pack',
    price: 250,
    bestFor: 'Kids birthdays, casual celebrations',
    includes: [
      '2 Kid-Friendly Starters',
      'Pasta/Noodles Station',
      'Pizza/Burger Option',
      '1 Main Course',
      'French Fries',
      'Soft Drinks/Juice',
      'Ice Cream',
      'Basic Buffet Setup',
      'Disposables included',
    ],
  },
  {
    name: 'Celebration Package',
    price: 400,
    bestFor: 'Adult birthdays, milestone celebrations',
    popular: true,
    includes: [
      '3 Assorted Starters',
      '2 Main Course Options',
      'Dal + Seasonal Veg',
      'Veg Biryani/Pulao',
      'Live Counter (1 choice)',
      'Assorted Breads',
      'Raita & Accompaniments',
      'Dessert Station',
      'Premium Buffet Setup',
      '2 Service Staff',
    ],
  },
  {
    name: 'Grand Birthday',
    price: 550,
    bestFor: 'Milestone birthdays, large parties',
    includes: [
      '4 Premium Starters',
      '3 Main Course Options',
      'Premium Dal Makhani',
      'Live Chaat Counter',
      'Live Pasta/Dosa Counter',
      'Biryani + Pulao',
      'Assorted Breads',
      'Complete Accompaniments',
      'Premium Dessert Spread',
      '3+ Service Staff',
      'Elegant Presentation',
      'Mocktail Station',
    ],
  },
];

const kidsFoodItems = [
  { name: 'Mini Burgers', popular: true },
  { name: 'Pizza Slices', popular: true },
  { name: 'Pasta Arrabiata', popular: true },
  { name: 'Veg Noodles', popular: true },
  { name: 'French Fries', popular: true },
  { name: 'Corn Cheese Balls', popular: false },
  { name: 'Veg Spring Rolls', popular: false },
  { name: 'Sandwiches', popular: false },
  { name: 'Fruit Chaat', popular: false },
  { name: 'Ice Cream Sundae', popular: true },
  { name: 'Chocolate Fountain', popular: true },
  { name: 'Mocktails', popular: true },
];

const adultFoodItems = [
  { name: 'Paneer Tikka', popular: true },
  { name: 'Veg Seekh Kebab', popular: false },
  { name: 'Hara Bhara Kabab', popular: true },
  { name: 'Dahi Kebab', popular: false },
  { name: 'Paneer Butter Masala', popular: true },
  { name: 'Dal Makhani', popular: true },
  { name: 'Veg Biryani', popular: true },
  { name: 'Live Chaat', popular: true },
  { name: 'Pasta Station', popular: false },
  { name: 'Gulab Jamun', popular: true },
  { name: 'Rabri Jalebi', popular: false },
  { name: 'Ice Cream Counter', popular: true },
];

const birthdayTypes = [
  {
    type: '1st Birthday',
    description: 'Special annaprashan menus with both kids and adult options',
    guestRange: '50-200 guests',
  },
  {
    type: 'Kids Birthday (2-12 yrs)',
    description: 'Fun food, finger foods, and exciting desserts kids love',
    guestRange: '20-100 guests',
  },
  {
    type: 'Teen Birthday',
    description: 'Trendy food options - pasta, burgers, mocktails, and more',
    guestRange: '30-80 guests',
  },
  {
    type: 'Adult Birthday',
    description: 'Sophisticated menus with starters, mains, and premium desserts',
    guestRange: '30-150 guests',
  },
  {
    type: 'Milestone Birthday (50th/60th)',
    description: 'Elegant traditional menus perfect for family gatherings',
    guestRange: '50-300 guests',
  },
  {
    type: 'Surprise Party',
    description: 'Quick setup, silent delivery, and impressive presentation',
    guestRange: '20-80 guests',
  },
];

const liveCounters = [
  {
    name: 'Chaat Counter',
    items: ['Pani Puri', 'Bhel Puri', 'Dahi Puri', 'Papdi Chaat'],
    popular: true,
  },
  {
    name: 'Pasta Station',
    items: ['Live Pasta', 'Choice of Sauces', 'Custom Toppings'],
    popular: true,
  },
  {
    name: 'Dosa Counter',
    items: ['Plain Dosa', 'Masala Dosa', 'Cheese Dosa', 'Uttapam'],
    popular: false,
  },
  {
    name: 'Ice Cream Station',
    items: ['Multiple Flavors', 'Toppings Bar', 'Sundae Options'],
    popular: true,
  },
  {
    name: 'Mocktail Bar',
    items: ['Virgin Mojito', 'Blue Lagoon', 'Fruit Punch', 'Smoothies'],
    popular: true,
  },
  {
    name: 'Sandwich/Burger Station',
    items: ['Grilled Sandwiches', 'Mini Burgers', 'Wraps'],
    popular: false,
  },
];

export default function BirthdayCateringPage() {
  return (
    <>
      <ServiceSchema
        name="Birthday Catering in Noida"
        description="Professional birthday party catering in Noida for kids and adults. Fun food stations, buffet setups, themed menus, and live counters for memorable celebrations."
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumbs
        items={[{ name: 'Birthday Catering Noida', href: '/birthday-catering-noida/' }]}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-gold text-white text-sm px-3 py-1 rounded-full mb-4">
              Kids & Adult Birthday Parties
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Birthday Catering in Noida
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Make birthdays memorable with delicious food! From fun kids parties with pizza and
              pasta to elegant adult celebrations with premium menus. Complete catering with
              live counters, buffet setup, and professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppLink variant="primary">Get Birthday Quote</WhatsAppLink>
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

      {/* Quick Stats */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-heading font-bold text-accent">₹250</p>
              <p className="text-gray-600">Starting per plate</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">500+</p>
              <p className="text-gray-600">Birthday Parties</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">6+</p>
              <p className="text-gray-600">Live Counters</p>
            </div>
            <div>
              <p className="text-3xl font-heading font-bold text-accent">30+</p>
              <p className="text-gray-600">Min Guests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Birthday Catering for Every Age"
            subtitle="Customized menus for all types of birthday celebrations"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {birthdayTypes.map((item) => (
              <div key={item.type} className="bg-background rounded-xl p-6">
                <h3 className="font-heading text-xl font-semibold text-ink">{item.type}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-accent font-medium mt-3">{item.guestRange}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Birthday Catering Packages"
            subtitle="Complete packages for stress-free birthday celebrations"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {birthdayPackages.map((pkg) => (
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
                  <p className="text-gray-500">per person</p>
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
                    Book This Package
                  </WhatsAppLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Food */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                Kids Love Our Food!
              </h2>
              <p className="text-gray-600 mb-6">
                We know what kids enjoy! Our kids party menu features fun, tasty foods that
                little ones love while ensuring they are fresh and hygienic. From mini burgers
                to chocolate fountains, we make kids parties delicious.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {kidsFoodItems.map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center gap-2 p-2 rounded-lg ${item.popular ? 'bg-gold/10' : 'bg-background'}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${item.popular ? 'bg-gold' : 'bg-gray-400'}`} />
                    <span className="text-ink text-sm">{item.name}</span>
                    {item.popular && <span className="text-xs text-gold">★</span>}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.parties.birthday}
                alt="Kids birthday party catering in Noida"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Adult Food */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={IMAGES.parties.hero}
                alt="Adult birthday party catering in Noida"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-ink mb-6">
                Sophisticated Adult Menus
              </h2>
              <p className="text-gray-600 mb-6">
                Adult birthday celebrations deserve elegant cuisine. Our menus feature premium
                starters, rich mains, and indulgent desserts that impress guests. Perfect for
                milestone birthdays and sophisticated celebrations.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {adultFoodItems.map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center gap-2 p-2 rounded-lg ${item.popular ? 'bg-gold/10' : 'bg-white'}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${item.popular ? 'bg-gold' : 'bg-gray-400'}`} />
                    <span className="text-ink text-sm">{item.name}</span>
                    {item.popular && <span className="text-xs text-gold">★</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Counters */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Fun Live Counters"
            subtitle="Add excitement to your birthday party with interactive food stations"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveCounters.map((counter) => (
              <div
                key={counter.name}
                className={`bg-background rounded-xl p-6 ${counter.popular ? 'ring-2 ring-gold' : ''}`}
              >
                {counter.popular && (
                  <span className="inline-block bg-gold text-white text-xs px-2 py-1 rounded mb-3">
                    Party Favorite
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold text-ink">{counter.name}</h3>
                <ul className="mt-4 space-y-2">
                  {counter.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us for Birthday Catering?"
            subtitle="We make birthday parties stress-free and delicious"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-accent text-2xl">★</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink">Age-Appropriate Menus</h3>
              <p className="text-gray-600 mt-2">
                Customized menus for every age group - from toddler-friendly options to sophisticated adult cuisine.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-accent text-2xl">★</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink">Home Party Experts</h3>
              <p className="text-gray-600 mt-2">
                We specialize in apartment and house party setups. Efficient space utilization without compromising on presentation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-accent text-2xl">★</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink">Interactive Elements</h3>
              <p className="text-gray-600 mt-2">
                Live counters, food stations, and interactive elements that engage guests and create memorable experiences.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-accent text-2xl">★</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink">Clean & Hygienic</h3>
              <p className="text-gray-600 mt-2">
                Fresh preparation, clean service, and hygienic handling - especially important for kids parties.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-accent text-2xl">★</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink">Flexible Packages</h3>
              <p className="text-gray-600 mt-2">
                Mix and match options. Add or remove items based on your budget and preferences.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-accent text-2xl">★</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink">Post-Party Cleanup</h3>
              <p className="text-gray-600 mt-2">
                We handle buffet area cleanup so you can enjoy the party without worrying about the mess.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="FAQs - Birthday Catering in Noida" />
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
            subtitle="Explore our other party catering options"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/services/party-catering-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink">Party Catering</h3>
              <p className="text-gray-600 mt-2">All types of party catering - kitty parties, anniversaries, and more</p>
            </Link>
            <Link
              href="/catering-for-50-guests-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink">Catering for 50 Guests</h3>
              <p className="text-gray-600 mt-2">Perfect packages for intimate birthday celebrations</p>
            </Link>
            <Link
              href="/jain-catering-noida/"
              className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink">Jain Catering</h3>
              <p className="text-gray-600 mt-2">Birthday catering with Jain dietary options</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Plan Your Birthday Celebration?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Share your birthday party details - date, guest count, age group, and preferences.
            We will create a customized menu that makes your celebration unforgettable!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppLink variant="primary">Get Birthday Party Quote</WhatsAppLink>
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
