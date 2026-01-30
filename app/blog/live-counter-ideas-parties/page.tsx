import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import JsonLd from '@/components/seo/JsonLd';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Live Counter Ideas for Parties | Chaat, Tandoor, Pasta, Mocktails | Noida',
  description:
    'Top live counter ideas for parties and weddings in Noida. Chaat, tandoor, pasta, Chinese, mocktail and dessert counters. Pricing, setup tips, and best combinations.',
  path: '/blog/live-counter-ideas-parties/',
  image: IMAGES.parties.mocktail,
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Live Counter Ideas for Parties — Chaat, Tandoor, Pasta, Mocktails & More',
  author: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    logo: {
      '@type': 'ImageObject',
      url: 'https://chef24catering.in/images/logo.jpg',
    },
  },
  datePublished: '2026-01-25',
  dateModified: '2026-01-25',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://chef24catering.in/blog/live-counter-ideas-parties/',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a live counter cost at parties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Live counter costs vary by type and guest count. Chaat counters typically range from Rs 3,000-6,000, tandoor counters from Rs 4,000-8,000, and mocktail stations from Rs 5,000-10,000. Pricing often includes staff, equipment, and ingredients for the expected guest count.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many live counters should I have at my party?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For 50-100 guests, 1-2 counters work well. For 100-200 guests, consider 2-3 counters. For 200+ guests, 3-4 counters provide good variety without overwhelming. Quality matters more than quantity — fewer excellent counters beat many average ones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What space is needed for live counters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each live counter typically needs 6-10 feet of table space plus room for guests to queue. A tandoor counter may need additional space for the clay oven. Ensure 3-4 feet clearance around each counter for staff movement and guest flow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can live counters be set up at home parties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most live counters can be set up at home parties. Chaat, pasta, and mocktail counters work especially well. Tandoor counters need outdoor space or good ventilation. Discuss your venue constraints with the caterer beforehand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which live counter is best for weddings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chaat counters are universally popular at weddings. Tandoor counters add a premium touch with fresh breads and kebabs. For modern weddings, pasta or mocktail counters appeal to younger guests. The best combination depends on your crowd and budget.',
      },
    },
  ],
};

const liveCounters = [
  {
    name: 'Chaat Counter',
    popularity: 'Very High',
    items: ['Pani Puri / Golgappa', 'Bhel Puri', 'Papdi Chaat', 'Dahi Puri', 'Sev Puri', 'Ragda Patties', 'Aloo Tikki'],
    bestFor: 'All events — weddings, parties, corporate gatherings',
    priceRange: 'Rs 3,000 - 6,000',
    staffNeeded: '1-2 persons',
    spaceRequired: '6-8 feet table',
    tips: [
      'Ensure crisp puris are served immediately',
      'Multiple chutney options increase appeal',
      'Jain version available without onion-garlic',
      'Works great as starter during cocktail hour',
    ],
    image: IMAGES.parties.corporate,
  },
  {
    name: 'Tandoor Counter',
    popularity: 'High',
    items: ['Naan varieties', 'Kulcha', 'Lachha Paratha', 'Paneer Tikka', 'Seekh Kebab (veg)', 'Malai Chaap', 'Tandoori Mushroom'],
    bestFor: 'Weddings, premium parties, dinner events',
    priceRange: 'Rs 4,000 - 8,000',
    staffNeeded: '1-2 persons',
    spaceRequired: '8-10 feet (needs ventilation)',
    tips: [
      'Hot breads are the main attraction — serve quickly',
      'Needs outdoor space or very good ventilation',
      'Kebabs should be served fresh off the tandoor',
      'Pairs well with main course timing',
    ],
    image: IMAGES.wedding.hero,
  },
  {
    name: 'Pasta / Italian Counter',
    popularity: 'High',
    items: ['Penne Arrabiata', 'Spaghetti Aglio Olio', 'Alfredo Pasta', 'Mac and Cheese', 'Garlic Bread', 'Bruschetta'],
    bestFor: 'Modern parties, corporate events, kids parties',
    priceRange: 'Rs 3,500 - 7,000',
    staffNeeded: '1 person',
    spaceRequired: '6-8 feet table',
    tips: [
      'Live tossing adds visual appeal',
      'Offer multiple sauce options',
      'Very popular with younger guests',
      'Can be made Jain-friendly easily',
    ],
    image: IMAGES.parties.kitty,
  },
  {
    name: 'Chinese / Pan Asian Counter',
    popularity: 'High',
    items: ['Hakka Noodles', 'Fried Rice', 'Manchurian', 'Spring Rolls', 'Dim Sum', 'Chili Paneer', 'Sweet Corn Soup'],
    bestFor: 'Parties, corporate events, kitty parties',
    priceRange: 'Rs 3,500 - 7,000',
    staffNeeded: '1-2 persons',
    spaceRequired: '6-8 feet table',
    tips: [
      'Live wok tossing creates engagement',
      'Customize spice levels on request',
      'Vegetarian versions very popular',
      'Good for both starters and mains',
    ],
    image: IMAGES.parties.farmhouse,
  },
  {
    name: 'Mocktail / Beverage Station',
    popularity: 'Very High',
    items: ['Virgin Mojito', 'Blue Lagoon', 'Fruit Punch', 'Mocktail Tower', 'Fresh Fruit Juices', 'Coolers', 'Sharbats'],
    bestFor: 'Weddings, evening parties, summer events',
    priceRange: 'Rs 5,000 - 10,000',
    staffNeeded: '1-2 persons',
    spaceRequired: '8-10 feet table',
    tips: [
      'Visual presentation is key — use garnishes',
      'Include both sweet and tangy options',
      'Mocktail tower creates wow factor',
      'Essential for cocktail-hour events',
    ],
    image: IMAGES.parties.mocktail,
  },
  {
    name: 'Dessert Counter',
    popularity: 'High',
    items: ['Jalebi with Rabri', 'Live Kulfi', 'Gulab Jamun', 'Ice Cream Station', 'Malpua', 'Churros', 'Chocolate Fountain'],
    bestFor: 'Weddings, birthday parties, celebrations',
    priceRange: 'Rs 3,000 - 8,000',
    staffNeeded: '1 person',
    spaceRequired: '6-8 feet table',
    tips: [
      'Hot jalebi is always a crowd pleaser',
      'Variety of kulfi flavors adds interest',
      'Chocolate fountain works great for kids events',
      'Position near end of food flow',
    ],
    image: IMAGES.parties.birthday,
  },
  {
    name: 'Dosa / South Indian Counter',
    popularity: 'Medium-High',
    items: ['Plain Dosa', 'Masala Dosa', 'Mysore Dosa', 'Uttapam', 'Idli', 'Vada', 'Coconut Chutney', 'Sambar'],
    bestFor: 'Breakfast functions, brunch events, variety addition',
    priceRange: 'Rs 3,000 - 6,000',
    staffNeeded: '1-2 persons',
    spaceRequired: '6-8 feet table',
    tips: [
      'Crispy dosas served hot are essential',
      'Multiple chutney varieties enhance experience',
      'Great for morning or brunch events',
      'Can be part of main spread too',
    ],
    image: IMAGES.grehPravesh.section,
  },
  {
    name: 'Pizza / Wood-Fired Counter',
    popularity: 'Medium',
    items: ['Margherita', 'Farmhouse Veggie', 'Paneer Tikka Pizza', 'Garlic Bread', 'Focaccia', 'Calzone'],
    bestFor: 'Modern parties, kids parties, casual events',
    priceRange: 'Rs 4,000 - 8,000',
    staffNeeded: '1-2 persons',
    spaceRequired: '10+ feet (for oven)',
    tips: [
      'Wood-fired oven creates authentic taste',
      'Needs outdoor space for oven setup',
      'Very popular with kids and teens',
      'Good for informal, casual events',
    ],
    image: IMAGES.parties.farmhouse,
  },
];

const bestCombinations = [
  {
    event: 'Wedding Reception (300+ guests)',
    counters: ['Chaat Counter', 'Tandoor Counter', 'Mocktail Station', 'Dessert Counter'],
    budget: 'Rs 15,000 - 25,000',
    tip: 'Classic combination that covers all bases. Place chaat and mocktail for cocktail hour, tandoor with main course, dessert at the end.',
  },
  {
    event: 'House Party (50-100 guests)',
    counters: ['Chaat Counter', 'Pasta Counter'],
    budget: 'Rs 6,000 - 12,000',
    tip: 'Compact but effective. Chaat for Indian taste, pasta for variety. Both can be set up indoors easily.',
  },
  {
    event: 'Corporate Event (100-200 guests)',
    counters: ['Chinese Counter', 'Mocktail Station'],
    budget: 'Rs 8,000 - 15,000',
    tip: 'Professional yet fun. Chinese appeals to most palates, mocktails add celebration feel without alcohol.',
  },
  {
    event: 'Birthday Party (Kids)',
    counters: ['Pizza Counter', 'Dessert Counter'],
    budget: 'Rs 7,000 - 14,000',
    tip: 'Kids favorites! Pizza is universally loved, dessert counter with chocolate fountain creates excitement.',
  },
  {
    event: 'Kitty Party (30-50 guests)',
    counters: ['Chaat Counter', 'Mocktail Station'],
    budget: 'Rs 5,000 - 10,000',
    tip: 'Perfect for smaller gatherings. Interactive elements create conversation. Light and fun options.',
  },
  {
    event: 'Engagement / Sangeet',
    counters: ['Tandoor Counter', 'Chaat Counter', 'Mocktail Station'],
    budget: 'Rs 12,000 - 20,000',
    tip: 'Celebratory combination. Hot kebabs and fresh breads plus refreshing drinks set the party mood.',
  },
];

const setupTips = [
  {
    title: 'Space Planning',
    tips: [
      'Allow 4-5 feet between counters for smooth guest movement',
      'Place counters in a logical flow — drinks first, desserts last',
      'Ensure electrical outlets are nearby for equipment',
      'Keep emergency exits and pathways clear',
    ],
  },
  {
    title: 'Timing Coordination',
    tips: [
      'Stagger counter openings with event flow',
      'Chaat/mocktails during welcome and cocktail hour',
      'Tandoor/pasta with main course service',
      'Dessert counter opens after main course winds down',
    ],
  },
  {
    title: 'Guest Management',
    tips: [
      'Plan for queuing space at popular counters',
      'Consider multiple serving stations for 200+ guests',
      'Brief guests on counter locations and timing',
      'Have staff guide first-time visitors',
    ],
  },
  {
    title: 'Quality Control',
    tips: [
      'Insist on fresh preparation only — no pre-made items',
      'Check ingredient freshness before event',
      'Monitor portion sizes throughout the event',
      'Have backup ingredients for popular items',
    ],
  },
];

const faqs = [
  {
    question: 'How much does a live counter cost at parties?',
    answer: 'Live counter costs vary by type and guest count. Chaat counters typically range from Rs 3,000-6,000, tandoor counters from Rs 4,000-8,000, and mocktail stations from Rs 5,000-10,000. Pricing often includes staff, equipment, and ingredients for the expected guest count.',
  },
  {
    question: 'How many live counters should I have at my party?',
    answer: 'For 50-100 guests, 1-2 counters work well. For 100-200 guests, consider 2-3 counters. For 200+ guests, 3-4 counters provide good variety without overwhelming. Quality matters more than quantity — fewer excellent counters beat many average ones.',
  },
  {
    question: 'What space is needed for live counters?',
    answer: 'Each live counter typically needs 6-10 feet of table space plus room for guests to queue. A tandoor counter may need additional space for the clay oven. Ensure 3-4 feet clearance around each counter for staff movement and guest flow.',
  },
  {
    question: 'Can live counters be set up at home parties?',
    answer: 'Yes, most live counters can be set up at home parties. Chaat, pasta, and mocktail counters work especially well. Tandoor counters need outdoor space or good ventilation. Discuss your venue constraints with the caterer beforehand.',
  },
  {
    question: 'Which live counter is best for weddings?',
    answer: 'Chaat counters are universally popular at weddings. Tandoor counters add a premium touch with fresh breads and kebabs. For modern weddings, pasta or mocktail counters appeal to younger guests. The best combination depends on your crowd and budget.',
  },
  {
    question: 'Are live counters worth the extra cost?',
    answer: 'Yes, live counters significantly enhance guest experience. They add entertainment value, ensure freshly prepared food, and create interactive moments. Guests remember live counters long after the event — they are often the most talked about element.',
  },
  {
    question: 'Can live counters be made Jain-friendly?',
    answer: 'Most live counters can be adapted for Jain requirements. Chaat can be made without onion-garlic, pasta with Jain-friendly sauces, and desserts are typically already Jain-compliant. Inform your caterer in advance for proper preparation.',
  },
  {
    question: 'What equipment do caterers bring for live counters?',
    answer: 'Caterers typically bring all required equipment — cooking stations, burners, display counters, serving utensils, and decoration. You may need to provide electrical connections and table space. Clarify equipment inclusions in your contract.',
  },
  {
    question: 'How early should live counter staff arrive?',
    answer: 'Live counter staff typically need 1-2 hours for setup before serving time. Tandoor counters may need more time to heat the oven. Coordinate arrival times with your overall event timeline.',
  },
  {
    question: 'Can I have live counters for small gatherings (under 30 guests)?',
    answer: 'Yes, but it may not be cost-effective. For small gatherings, consider 1 counter or a mini-counter setup. Some caterers have minimum charges. Discuss scaled-down options with your caterer.',
  },
];

export default function LiveCounterIdeasPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <Breadcrumbs
        items={[
          { name: 'Blog', href: '/blog/' },
          { name: 'Live Counter Ideas', href: '/blog/live-counter-ideas-parties/' },
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <time className="text-sm text-gray-500">January 25, 2026</time>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-ink mt-2">
              Live Counter Ideas for Parties — Chaat, Tandoor, Pasta, Mocktails &amp; More
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              Complete guide to live counters for parties and weddings. Popular options, pricing, best combinations, and setup tips.
            </p>
          </header>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src={IMAGES.parties.mocktail}
              alt="Colorful mocktail live counter setup at a party"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Live counters have transformed event catering from a simple food service into an interactive culinary experience. There is something magical about watching food being prepared fresh right in front of you — the sizzle of a tandoor, the colorful assembly of chaat, or the theatrical mixing of mocktails.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you are planning a wedding, birthday party, corporate event, or intimate gathering, the right live counters can elevate your event from ordinary to extraordinary. This comprehensive guide covers the most popular live counter options in Noida, complete with pricing, setup requirements, and expert tips.
            </p>

            <div className="my-8 p-6 bg-gold/10 rounded-xl border border-gold/20 not-prose">
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">In This Guide</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li><a href="#counters" className="text-accent hover:underline">Popular Live Counters</a></li>
                <li><a href="#combinations" className="text-accent hover:underline">Best Counter Combinations</a></li>
                <li><a href="#pricing" className="text-accent hover:underline">Pricing Guide</a></li>
                <li><a href="#setup" className="text-accent hover:underline">Setup Tips</a></li>
                <li><a href="#choosing" className="text-accent hover:underline">How to Choose</a></li>
                <li><a href="#faqs" className="text-accent hover:underline">FAQs</a></li>
              </ul>
            </div>

            <h2 id="counters" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Popular Live Counters for Parties &amp; Events
            </h2>

            <p className="text-gray-700">
              Here are the most requested live counter options for events in Noida, complete with details on items served, space requirements, and expert tips.
            </p>
          </div>

          {/* Live Counter Cards */}
          <div className="space-y-8 my-8">
            {liveCounters.map((counter, index) => (
              <div key={counter.name} className="bg-white border border-muted rounded-xl overflow-hidden shadow-sm">
                <div className="md:flex">
                  <div className="relative h-48 md:h-auto md:w-72 flex-shrink-0">
                    <Image
                      src={counter.image}
                      alt={`${counter.name} setup`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white rounded-lg px-3 py-1">
                      <span className="text-xs font-semibold text-accent">#{index + 1}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="font-heading text-xl font-semibold text-ink">{counter.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        counter.popularity === 'Very High' ? 'bg-green-100 text-green-700' :
                        counter.popularity === 'High' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {counter.popularity} Popularity
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Items Served</h4>
                      <div className="flex flex-wrap gap-2">
                        {counter.items.slice(0, 6).map((item) => (
                          <span key={item} className="bg-background px-2 py-1 rounded text-sm text-gray-700">
                            {item}
                          </span>
                        ))}
                        {counter.items.length > 6 && (
                          <span className="text-sm text-gray-500">+{counter.items.length - 6} more</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500 block">Price Range</span>
                        <span className="font-semibold text-accent">{counter.priceRange}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Staff Needed</span>
                        <span className="font-semibold text-ink">{counter.staffNeeded}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Space Required</span>
                        <span className="font-semibold text-ink">{counter.spaceRequired}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Best For</span>
                        <span className="font-semibold text-ink text-xs">{counter.bestFor}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-muted">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Pro Tips</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {counter.tips.slice(0, 2).map((tip) => (
                          <li key={tip} className="flex items-start gap-2">
                            <span className="text-gold">-</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="combinations" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Best Live Counter Combinations by Event Type
            </h2>

            <p className="text-gray-700">
              Choosing the right combination of live counters depends on your event type, guest count, and budget. Here are proven combinations that work well:
            </p>
          </div>

          <div className="space-y-4 my-8">
            {bestCombinations.map((combo) => (
              <div key={combo.event} className="bg-background rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <h3 className="font-heading text-lg font-semibold text-ink">{combo.event}</h3>
                  <span className="text-sm font-semibold text-accent">{combo.budget}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {combo.counters.map((counter) => (
                    <span key={counter} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-muted">
                      {counter}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gold">Tip:</span> {combo.tip}
                </p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              For wedding-specific guidance, check our{' '}
              <Link href="/blog/wedding-catering-checklist/" className="text-accent hover:underline font-medium">
                wedding catering checklist
              </Link>{' '}
              and{' '}
              <Link href="/services/wedding-catering-noida/" className="text-accent hover:underline font-medium">
                wedding catering services
              </Link>.
            </p>

            <h2 id="pricing" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Live Counter Pricing Guide
            </h2>

            <p className="text-gray-700">
              Live counter pricing in Noida depends on several factors:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              <div className="bg-white border border-muted rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">What Affects Pricing</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Guest count (more guests = higher cost)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Duration of service
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Quality of ingredients
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Equipment requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Venue location and accessibility
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-muted rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">What is Typically Included</h4>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">+</span>
                    Trained counter staff
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">+</span>
                    All cooking equipment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">+</span>
                    Ingredients and raw materials
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">+</span>
                    Serving utensils and plates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">+</span>
                    Basic counter decoration
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700">
              For detailed pricing information, visit our{' '}
              <Link href="/pricing/" className="text-accent hover:underline font-medium">
                pricing page
              </Link>{' '}
              or read about{' '}
              <Link href="/blog/catering-cost-per-plate-noida/" className="text-accent hover:underline font-medium">
                catering costs in Noida
              </Link>.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-8">
              <Image
                src={IMAGES.parties.corporate}
                alt="Live food counter at a corporate event"
                fill
                className="object-cover"
              />
            </div>

            <h2 id="setup" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Setup Tips for Live Counters
            </h2>

            <p className="text-gray-700">
              Proper setup is crucial for live counters to function smoothly and impress guests. Here are expert tips organized by category:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {setupTips.map((section) => (
              <div key={section.title} className="bg-background rounded-xl p-6">
                <h3 className="font-heading text-lg font-semibold text-ink mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center text-accent text-xs flex-shrink-0 mt-0.5">
                        +
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="choosing" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              How to Choose the Right Live Counters
            </h2>

            <p className="text-gray-700">
              Follow this framework to select the perfect live counters for your event:
            </p>

            <ol className="space-y-4 my-4">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">1</span>
                <div>
                  <strong>Know Your Audience</strong>
                  <p className="text-gray-600 text-sm">Consider age groups, dietary preferences (Jain, vegan), and cultural backgrounds. Kids love pizza and dessert counters; traditional families prefer chaat and tandoor.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">2</span>
                <div>
                  <strong>Assess Your Venue</strong>
                  <p className="text-gray-600 text-sm">Indoor venues may not suit tandoor counters. Small spaces limit the number of counters. Check electrical availability and ventilation.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">3</span>
                <div>
                  <strong>Match Event Flow</strong>
                  <p className="text-gray-600 text-sm">Welcome phase suits drinks and light snacks (mocktails, chaat). Main event pairs with substantial counters (tandoor, pasta). Closing works for desserts.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">4</span>
                <div>
                  <strong>Budget Wisely</strong>
                  <p className="text-gray-600 text-sm">Allocate 20-30% of your catering budget for live counters. Better to have 2 excellent counters than 4 mediocre ones.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">5</span>
                <div>
                  <strong>Consider Complementary Options</strong>
                  <p className="text-gray-600 text-sm">Mix Indian and international (chaat + pasta). Balance heavy and light (tandoor + mocktail). Include something sweet.</p>
                </div>
              </li>
            </ol>

            <p className="text-gray-700">
              Need help choosing? Read our guide on{' '}
              <Link href="/blog/how-to-choose-caterer-noida/" className="text-accent hover:underline font-medium">
                how to choose a caterer in Noida
              </Link>{' '}
              or explore our{' '}
              <Link href="/menu/" className="text-accent hover:underline font-medium">
                complete menu options
              </Link>.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Live Counters for Special Dietary Needs
            </h2>

            <p className="text-gray-700">
              Most live counters can be adapted for dietary restrictions:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-6">
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Jain-Friendly Counters</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>- Chaat (no onion-garlic)</li>
                  <li>- Pasta (Jain sauces)</li>
                  <li>- Mocktails (all varieties)</li>
                  <li>- Desserts (most options)</li>
                </ul>
              </div>
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Vegan Options</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>- Chaat (most items)</li>
                  <li>- Chinese (without dairy)</li>
                  <li>- Dosa counter (sambar-chutney)</li>
                  <li>- Mocktails</li>
                </ul>
              </div>
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Kid-Friendly</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>- Pizza counter</li>
                  <li>- Pasta (mild options)</li>
                  <li>- Dessert/ice cream</li>
                  <li>- Fresh juice station</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700">
              For comprehensive Jain options, see our{' '}
              <Link href="/blog/jain-menu-ideas-events/" className="text-accent hover:underline font-medium">
                Jain menu ideas for events
              </Link>.
            </p>

            <h2 id="faqs" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 not-prose my-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-background rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Conclusion
            </h2>

            <p className="text-gray-700">
              Live counters transform ordinary catering into an interactive experience that guests remember long after the event. The key is choosing counters that match your audience, venue, and budget — then ensuring flawless execution through an experienced caterer.
            </p>

            <p className="text-gray-700 mt-4">
              At Chef24Catering, we specialize in creating memorable live counter experiences for events across Noida. Our trained staff ensures fresh, hot food served with professionalism that reflects the importance of your occasion.
            </p>
          </div>

          <div className="mt-12 p-6 bg-primary rounded-xl text-center">
            <h3 className="font-heading text-xl font-semibold text-white mb-4">
              Add Live Counters to Your Event
            </h3>
            <p className="text-white/80 mb-4">
              Tell us about your event and we&apos;ll recommend the perfect counter combination
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppLink variant="primary">Get Counter Quote</WhatsAppLink>
              <Link
                href="/pricing/"
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-muted">
            <p className="text-sm text-gray-600 mb-4">Related articles and pages:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/menu/" className="text-accent hover:text-accent/80 font-medium">
                Full Menu
              </Link>
              <Link href="/pricing/" className="text-accent hover:text-accent/80 font-medium">
                Pricing
              </Link>
              <Link href="/services/party-catering-noida/" className="text-accent hover:text-accent/80 font-medium">
                Party Catering
              </Link>
              <Link href="/blog/wedding-catering-checklist/" className="text-accent hover:text-accent/80 font-medium">
                Wedding Checklist
              </Link>
              <Link href="/blog/budget-catering-tips/" className="text-accent hover:text-accent/80 font-medium">
                Budget Tips
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
