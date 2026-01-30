import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import JsonLd from '@/components/seo/JsonLd';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Budget Catering Tips | Save Money Without Sacrificing Quality | Noida',
  description:
    'Smart budget catering tips for events in Noida. How to reduce catering costs without compromising quality. Menu planning hacks, timing strategies, and negotiation tips.',
  path: '/blog/budget-catering-tips/',
  image: IMAGES.parties.corporate,
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Budget Catering Tips — How to Save Money Without Sacrificing Quality',
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
  datePublished: '2026-01-28',
  dateModified: '2026-01-28',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://chef24catering.in/blog/budget-catering-tips/',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cheapest catering option for events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lunch boxes or thali-style service is typically the most economical option, starting from Rs 150-250 per plate. For buffet-style, focusing on fewer dishes with quality ingredients keeps costs down while maintaining satisfaction.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I reduce catering costs for my wedding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key strategies include: choosing off-peak dates, limiting menu items to 8-10 high-quality dishes, opting for seasonal ingredients, reducing live counters to 2-3, negotiating for larger guest counts, and booking early for better rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is buffet cheaper than plated service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, buffet service is generally 15-25% cheaper than plated/sit-down service. Buffet requires fewer service staff and allows better portion control. However, buffet may lead to more food waste if not managed properly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I negotiate with caterers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, negotiation is common and expected, especially for larger events. Focus on value additions rather than just price cuts. Ask for extra items, longer service hours, or upgraded presentation rather than lowering per-plate rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I budget for catering per person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Noida, budget Rs 250-400 per plate for basic events, Rs 400-600 for standard functions, and Rs 600-1000+ for premium celebrations. Wedding catering typically requires Rs 500-1200 per plate depending on menu complexity.',
      },
    },
  ],
};

const budgetMistakes = [
  {
    mistake: 'Choosing the cheapest caterer',
    why: 'Ultra-low prices often mean poor ingredients, untrained staff, or hidden charges that appear later',
    solution: 'Compare quotes for same menu items; look for best value, not lowest price',
  },
  {
    mistake: 'Too many dishes thinking variety = value',
    why: 'More dishes means spreading budget thin, resulting in mediocre quality across all items',
    solution: 'Fewer excellent dishes beat many average ones; focus on 8-10 well-executed items',
  },
  {
    mistake: 'Ignoring seasonal ingredients',
    why: 'Off-season vegetables and fruits cost 2-3x more and taste worse',
    solution: 'Plan menu around seasonal produce for better taste and lower cost',
  },
  {
    mistake: 'Overestimating guest count significantly',
    why: 'Paying for food that will not be consumed wastes money directly',
    solution: 'Get accurate RSVPs; most caterers allow 10% adjustment until 48 hours before',
  },
  {
    mistake: 'Not reading the contract carefully',
    why: 'Hidden charges for overtime, extra plates, or equipment add up quickly',
    solution: 'Get itemized quotes; ask specifically about all potential additional charges',
  },
  {
    mistake: 'Booking too late',
    why: 'Last-minute bookings often cost premium rates; limited negotiation leverage',
    solution: 'Book 2-3 months ahead for better rates and more caterer options',
  },
];

const menuStrategies = [
  {
    strategy: 'Quality Over Quantity',
    description: 'Choose 2-3 excellent starters instead of 5 average ones. Guests remember outstanding dishes, not variety.',
    savings: '15-20%',
    example: 'Instead of 5 starters, offer 3 premium ones like paneer tikka, hara bhara kebab, and crispy corn',
  },
  {
    strategy: 'Seasonal Menu Planning',
    description: 'Build your menu around seasonal vegetables and fruits which are fresher and cheaper.',
    savings: '10-15%',
    example: 'Winter: cauliflower, peas, carrots | Summer: lauki, tori, bhindi | Monsoon: corn, mushrooms',
  },
  {
    strategy: 'Smart Paneer Allocation',
    description: 'Paneer is expensive. Use it strategically in 1-2 dishes rather than throughout the menu.',
    savings: '10-12%',
    example: 'One paneer main course + one paneer starter is sufficient; fill with dal and seasonal vegetables',
  },
  {
    strategy: 'Signature Dish Focus',
    description: 'Have one showstopper dish that guests will remember; go standard on the rest.',
    savings: '5-10%',
    example: 'Premium dal makhani as signature + standard seasonal sabzi and basic rotis',
  },
  {
    strategy: 'Strategic Dessert Selection',
    description: 'One excellent dessert beats three mediocre ones. Choose wisely.',
    savings: '8-10%',
    example: 'Fresh gulab jamun OR quality rasmalai; not both if budget is tight',
  },
  {
    strategy: 'Limit Live Counters',
    description: 'Live counters are expensive. One excellent counter creates more impact than three basic ones.',
    savings: '15-25%',
    example: 'Choose chaat counter (universally loved) over multiple mediocre stations',
  },
];

const timingStrategies = [
  {
    strategy: 'Off-Peak Dates',
    description: 'Avoid peak wedding season (Nov-Feb) and auspicious dates when possible',
    savings: '10-20%',
    details: 'Weekday events, monsoon season, or early/late month dates typically cost less',
  },
  {
    strategy: 'Lunch Over Dinner',
    description: 'Lunch events often cost less than dinner as expectations are slightly lower',
    savings: '5-15%',
    details: 'Guests expect lighter fare at lunch; you can skip some heavier items',
  },
  {
    strategy: 'Single Meal Events',
    description: 'Full-day events with multiple meals cost more; consider single-meal format',
    savings: '30-40%',
    details: 'Reception-only instead of mehendi + sangeet + reception on same day',
  },
  {
    strategy: 'Shorter Service Duration',
    description: 'Tighter event timelines mean less overtime and lower staff costs',
    savings: '5-10%',
    details: '3-4 hour service window vs. open-ended timing',
  },
];

const negotiationTips = [
  {
    tip: 'Get Multiple Quotes',
    description: 'Always get 3-5 quotes for the same menu. This gives you market context and negotiation leverage.',
    key: 'Compare apples to apples — same dishes, same service level',
  },
  {
    tip: 'Ask for Value Additions',
    description: 'Instead of pushing for lower prices, ask for extras at same price — better presentation, extra counter, longer service.',
    key: 'Caterers often prefer adding value over cutting price',
  },
  {
    tip: 'Bundle Multiple Events',
    description: 'If you have multiple functions, bundle them with one caterer for volume discount.',
    key: 'Mehendi + Sangeet + Wedding with same caterer = better rates',
  },
  {
    tip: 'Early Booking Discount',
    description: 'Book 3-4 months ahead and ask for early bird pricing; caterers value confirmed bookings.',
    key: 'Cash flow certainty is valuable to caterers',
  },
  {
    tip: 'Flexible on Dates',
    description: 'If you can be flexible on dates, let the caterer suggest their less busy periods for better rates.',
    key: 'Their slow days = your savings',
  },
  {
    tip: 'Payment Terms',
    description: 'Larger advance payments sometimes get discounts; ask about payment-based concessions.',
    key: 'But never pay 100% upfront',
  },
];

const sampleBudgetMenus = [
  {
    name: 'Economy Menu',
    price: 'Rs 250-350/plate',
    guests: '50-100',
    items: [
      '2 Starters (1 paneer, 1 veg)',
      '1 Dal',
      '2 Sabzi (1 seasonal, 1 paneer)',
      'Jeera Rice',
      'Roti/Naan',
      '1 Dessert',
    ],
    tips: 'Best for house parties, small gatherings. Focus on execution quality.',
  },
  {
    name: 'Standard Menu',
    price: 'Rs 400-550/plate',
    guests: '100-200',
    items: [
      '3 Starters',
      '1 Live Counter (chaat)',
      'Dal Makhani',
      '3 Sabzi (including paneer)',
      'Rice + Biryani option',
      'Variety breads',
      '2 Desserts',
    ],
    tips: 'Good balance for most celebrations. Include one signature item.',
  },
  {
    name: 'Premium Budget',
    price: 'Rs 600-800/plate',
    guests: '150-300',
    items: [
      '4 Starters',
      '2 Live Counters',
      'Premium Dal',
      '4 Main Course items',
      'Biryani + Rice',
      'Multiple breads',
      'Welcome drinks',
      '3 Desserts',
    ],
    tips: 'Wedding-worthy without excess. Prioritize food quality over quantity.',
  },
];

const hiddenCosts = [
  { item: 'Overtime charges', typical: 'Rs 2,000-5,000 per hour after agreed time', avoidHow: 'Keep strict timelines; inform caterer of exact end time' },
  { item: 'Extra plates', typical: '10-25% premium over base rate', avoidHow: 'Accurate guest count; negotiate bulk rate for extras' },
  { item: 'Equipment rental', typical: 'Rs 5,000-15,000 for special setups', avoidHow: 'Clarify what is included; use standard equipment' },
  { item: 'Transportation', typical: 'Rs 2,000-5,000 for distant venues', avoidHow: 'Choose caterer close to venue; confirm transport inclusion' },
  { item: 'Cleaning/disposal', typical: 'Rs 1,000-3,000', avoidHow: 'Confirm cleanup is included in quote' },
  { item: 'Service charge', typical: '10-15% of total', avoidHow: 'Get all-inclusive quotes; no surprises' },
];

const faqs = [
  {
    question: 'What is the cheapest catering option for events?',
    answer: 'Lunch boxes or thali-style service is typically the most economical option, starting from Rs 150-250 per plate. For buffet-style, focusing on fewer dishes with quality ingredients keeps costs down while maintaining satisfaction.',
  },
  {
    question: 'How can I reduce catering costs for my wedding?',
    answer: 'Key strategies include: choosing off-peak dates, limiting menu items to 8-10 high-quality dishes, opting for seasonal ingredients, reducing live counters to 2-3, negotiating for larger guest counts, and booking early for better rates.',
  },
  {
    question: 'Is buffet cheaper than plated service?',
    answer: 'Yes, buffet service is generally 15-25% cheaper than plated/sit-down service. Buffet requires fewer service staff and allows better portion control. However, buffet may lead to more food waste if not managed properly.',
  },
  {
    question: 'Should I negotiate with caterers?',
    answer: 'Yes, negotiation is common and expected, especially for larger events. Focus on value additions rather than just price cuts. Ask for extra items, longer service hours, or upgraded presentation rather than lowering per-plate rates.',
  },
  {
    question: 'How much should I budget for catering per person?',
    answer: 'In Noida, budget Rs 250-400 per plate for basic events, Rs 400-600 for standard functions, and Rs 600-1000+ for premium celebrations. Wedding catering typically requires Rs 500-1200 per plate depending on menu complexity.',
  },
  {
    question: 'Can I save money by providing some ingredients myself?',
    answer: 'Generally not recommended. Caterers source ingredients at wholesale rates and know quality requirements. Self-sourcing often creates coordination issues and quality concerns without significant savings.',
  },
  {
    question: 'Is it cheaper to have fewer guests?',
    answer: 'Per-plate costs may actually increase with fewer guests because fixed costs (staff, transport, setup) are spread over fewer people. However, total cost will be lower. Sweet spot is usually 75-200 guests for best per-plate economics.',
  },
  {
    question: 'Should I skip live counters to save money?',
    answer: 'Live counters are a significant cost (Rs 3,000-8,000 each). If budget is tight, skip them entirely or choose one high-impact counter (chaat is most universal). A great main buffet beats mediocre live counters.',
  },
  {
    question: 'How can I reduce food waste at events?',
    answer: 'Accurate guest count is crucial. Use buffet monitors to control portions. Order slightly less than estimated (5-10% buffer instead of 20%). Choose dishes that store well for potential leftovers. Donate excess to local shelters.',
  },
  {
    question: 'Are weekday events really cheaper?',
    answer: 'Yes, weekday events can be 10-20% cheaper. Caterers have lower demand and may offer better rates to fill their schedule. Venue costs are also typically lower on weekdays.',
  },
];

export default function BudgetCateringTipsPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <Breadcrumbs
        items={[
          { name: 'Blog', href: '/blog/' },
          { name: 'Budget Catering Tips', href: '/blog/budget-catering-tips/' },
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <time className="text-sm text-gray-500">January 28, 2026</time>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-ink mt-2">
              Budget Catering Tips — How to Save Money Without Sacrificing Quality
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              Smart strategies to reduce catering costs while keeping guests happy. Menu planning, timing, negotiation, and avoiding common budget mistakes.
            </p>
          </header>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src={IMAGES.parties.corporate}
              alt="Well-organized catering setup demonstrating quality presentation"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Catering is often one of the largest expenses for any event — typically accounting for 35-50% of your total budget. The good news? With smart planning and strategic choices, you can significantly reduce costs without your guests noticing any difference in quality.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This guide shares practical, tested strategies from our experience catering 500+ events across Noida. These are not about cutting corners — they are about making intelligent choices that maximize value while minimizing waste.
            </p>

            <div className="my-8 p-6 bg-gold/10 rounded-xl border border-gold/20 not-prose">
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">In This Guide</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li><a href="#mistakes" className="text-accent hover:underline">Common Budget Mistakes</a></li>
                <li><a href="#menu" className="text-accent hover:underline">Menu Optimization Strategies</a></li>
                <li><a href="#timing" className="text-accent hover:underline">Timing and Date Strategies</a></li>
                <li><a href="#negotiation" className="text-accent hover:underline">Negotiation Tips</a></li>
                <li><a href="#sample-menus" className="text-accent hover:underline">Sample Budget Menus</a></li>
                <li><a href="#hidden-costs" className="text-accent hover:underline">Hidden Costs to Watch</a></li>
                <li><a href="#faqs" className="text-accent hover:underline">FAQs</a></li>
              </ul>
            </div>

            <h2 id="mistakes" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Common Budget Mistakes to Avoid
            </h2>

            <p className="text-gray-700">
              Before diving into savings strategies, let us understand the mistakes that actually end up costing more money:
            </p>

            <div className="space-y-4 not-prose my-6">
              {budgetMistakes.map((item) => (
                <div key={item.mistake} className="bg-white border border-muted rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-sm flex-shrink-0 mt-0.5">
                      X
                    </span>
                    <div>
                      <h4 className="font-semibold text-ink">{item.mistake}</h4>
                      <p className="text-gray-600 text-sm mt-1"><strong>Why it costs more:</strong> {item.why}</p>
                      <p className="text-accent text-sm mt-1"><strong>Better approach:</strong> {item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 id="menu" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Menu Optimization Strategies
            </h2>

            <p className="text-gray-700">
              The menu is where the biggest savings opportunities lie. Here are proven strategies that reduce costs while maintaining guest satisfaction:
            </p>

            <div className="space-y-6 not-prose my-8">
              {menuStrategies.map((strategy, index) => (
                <div key={strategy.strategy} className="bg-background rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </span>
                      <h3 className="font-heading text-lg font-semibold text-ink">{strategy.strategy}</h3>
                    </div>
                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                      Save {strategy.savings}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{strategy.description}</p>
                  <div className="bg-white rounded-lg p-3">
                    <span className="text-sm text-gray-500">Example: </span>
                    <span className="text-sm text-ink">{strategy.example}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-700">
              For more menu ideas and pricing, explore our{' '}
              <Link href="/menu/" className="text-accent hover:underline font-medium">
                complete catering menu
              </Link>{' '}
              and{' '}
              <Link href="/pricing/" className="text-accent hover:underline font-medium">
                pricing packages
              </Link>.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-8">
              <Image
                src={IMAGES.wedding.tiles[0]}
                alt="Elegant catering presentation showing quality over quantity"
                fill
                className="object-cover"
              />
            </div>

            <h2 id="timing" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Timing and Date Strategies
            </h2>

            <p className="text-gray-700">
              When you host your event can significantly impact catering costs. Consider these timing strategies:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              {timingStrategies.map((strategy) => (
                <div key={strategy.strategy} className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-ink">{strategy.strategy}</h4>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded">
                      {strategy.savings}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{strategy.description}</p>
                  <p className="text-gray-500 text-xs">{strategy.details}</p>
                </div>
              ))}
            </div>

            <h2 id="negotiation" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              How to Negotiate with Caterers
            </h2>

            <p className="text-gray-700">
              Negotiation is expected and acceptable in the catering industry. Here is how to do it effectively:
            </p>

            <div className="space-y-4 not-prose my-6">
              {negotiationTips.map((item) => (
                <div key={item.tip} className="bg-background rounded-xl p-5">
                  <h4 className="font-semibold text-ink mb-2">{item.tip}</h4>
                  <p className="text-gray-700 text-sm mb-2">{item.description}</p>
                  <p className="text-accent text-sm"><strong>Key:</strong> {item.key}</p>
                </div>
              ))}
            </div>

            <div className="bg-gold/10 border border-gold/20 rounded-xl p-6 my-6 not-prose">
              <h4 className="font-semibold text-ink mb-2">Negotiation Script Example</h4>
              <p className="text-gray-700 text-sm italic">
                &quot;I really like your menu and service quality. I have received a few quotes and yours is slightly above my budget of Rs X per plate. Rather than cutting items, could we discuss either an early booking discount or perhaps adding a welcome drink station at the same price? I am ready to confirm and pay advance today if we can work something out.&quot;
              </p>
            </div>

            <p className="text-gray-700">
              For guidance on evaluating caterers beyond price, read our detailed guide on{' '}
              <Link href="/blog/how-to-choose-caterer-noida/" className="text-accent hover:underline font-medium">
                how to choose a caterer in Noida
              </Link>.
            </p>

            <h2 id="sample-menus" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Sample Budget-Optimized Menus
            </h2>

            <p className="text-gray-700">
              Here are example menus at different budget levels that maximize value:
            </p>

            <div className="space-y-6 not-prose my-8">
              {sampleBudgetMenus.map((menu) => (
                <div key={menu.name} className="bg-white border border-muted rounded-xl overflow-hidden">
                  <div className="bg-background px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-ink">{menu.name}</h3>
                      <span className="text-sm text-gray-500">Ideal for {menu.guests} guests</span>
                    </div>
                    <span className="text-lg font-bold text-accent">{menu.price}</span>
                  </div>
                  <div className="p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      {menu.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-gray-700">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-muted">
                      <span className="text-sm text-gray-500">Pro Tip: </span>
                      <span className="text-sm text-ink">{menu.tips}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-700">
              For detailed pricing breakdowns, see our{' '}
              <Link href="/blog/catering-cost-per-plate-noida/" className="text-accent hover:underline font-medium">
                cost per plate guide
              </Link>.
            </p>

            <h2 id="hidden-costs" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Hidden Costs to Watch For
            </h2>

            <p className="text-gray-700">
              Budget planning fails when hidden costs appear. Here are common extras to clarify upfront:
            </p>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full bg-white border border-muted rounded-xl overflow-hidden">
                <thead className="bg-background">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-ink">Cost Item</th>
                    <th className="px-4 py-3 text-left font-semibold text-ink">Typical Range</th>
                    <th className="px-4 py-3 text-left font-semibold text-ink">How to Avoid</th>
                  </tr>
                </thead>
                <tbody>
                  {hiddenCosts.map((item, index) => (
                    <tr key={item.item} className={index % 2 === 0 ? '' : 'bg-background/50'}>
                      <td className="px-4 py-3 font-medium text-ink">{item.item}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{item.typical}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{item.avoidHow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6 my-6 not-prose">
              <h4 className="font-semibold text-red-800 mb-2">Always Get This In Writing</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-red-700">
                <li className="flex items-center gap-2">
                  <span>+</span> All-inclusive per plate rate
                </li>
                <li className="flex items-center gap-2">
                  <span>+</span> Service hours included
                </li>
                <li className="flex items-center gap-2">
                  <span>+</span> Staff count and duties
                </li>
                <li className="flex items-center gap-2">
                  <span>+</span> Equipment provided
                </li>
                <li className="flex items-center gap-2">
                  <span>+</span> Extra plate rates
                </li>
                <li className="flex items-center gap-2">
                  <span>+</span> Cancellation terms
                </li>
              </ul>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Budget Tips by Event Type
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-3">Wedding Budget Tips</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Limit functions to essential ones
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Choose 2-3 live counters max
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Invest in main course quality
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Consider day wedding for savings
                  </li>
                </ul>
                <Link href="/blog/wedding-catering-checklist/" className="text-accent hover:underline text-sm mt-3 inline-block">
                  Read Wedding Checklist
                </Link>
              </div>

              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-3">Party Budget Tips</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Home venue saves 20-30%
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Skip welcome drinks if budget-tight
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    One live counter is enough
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Focus on starters for cocktail parties
                  </li>
                </ul>
                <Link href="/services/party-catering-noida/" className="text-accent hover:underline text-sm mt-3 inline-block">
                  View Party Services
                </Link>
              </div>

              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-3">Corporate Budget Tips</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Lunch boxes for seminars
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Standard menu for regular events
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Monthly contracts save 15-20%
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Accurate headcount is crucial
                  </li>
                </ul>
                <Link href="/blog/corporate-catering-noida-sector-63-65/" className="text-accent hover:underline text-sm mt-3 inline-block">
                  Read Corporate Guide
                </Link>
              </div>

              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-3">Religious Function Tips</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Simple sattvik menu is economical
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Standard items work well
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Skip elaborate presentation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">-</span>
                    Focus on taste and purity
                  </li>
                </ul>
                <Link href="/services/bhandara-catering-noida/" className="text-accent hover:underline text-sm mt-3 inline-block">
                  View Bhandara Services
                </Link>
              </div>
            </div>

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
              Conclusion: Smart Spending, Not Less Spending
            </h2>

            <p className="text-gray-700">
              Budget catering is not about spending less — it is about spending smarter. The goal is to maximize the impact of every rupee, ensuring your guests enjoy excellent food and service while you stay within your financial comfort zone.
            </p>

            <p className="text-gray-700 mt-4">
              Remember these key principles:
            </p>

            <ul className="my-4">
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                Quality over quantity — fewer excellent dishes beat many mediocre ones
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                Plan strategically — timing, dates, and menu composition matter
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                Negotiate smartly — focus on value, not just price cuts
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                Avoid hidden costs — get everything in writing
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                Choose reliable over cheap — the lowest price often costs more in the end
              </li>
            </ul>

            <p className="text-gray-700">
              At Chef24Catering, we work with clients across budget levels to create the best possible food experience within their means. Transparent pricing, no hidden charges, and honest guidance are our commitments.
            </p>
          </div>

          <div className="mt-12 p-6 bg-primary rounded-xl text-center">
            <h3 className="font-heading text-xl font-semibold text-white mb-4">
              Get a Budget-Friendly Quote
            </h3>
            <p className="text-white/80 mb-4">
              Share your budget and event details — we&apos;ll create the best possible menu within your range
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppLink variant="primary">Get Quote</WhatsAppLink>
              <Link
                href="/pricing/"
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing Packages
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-muted">
            <p className="text-sm text-gray-600 mb-4">Related articles and pages:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/pricing/" className="text-accent hover:text-accent/80 font-medium">
                Pricing Packages
              </Link>
              <Link href="/blog/catering-cost-per-plate-noida/" className="text-accent hover:text-accent/80 font-medium">
                Cost Per Plate Guide
              </Link>
              <Link href="/blog/wedding-catering-checklist/" className="text-accent hover:text-accent/80 font-medium">
                Wedding Checklist
              </Link>
              <Link href="/blog/how-to-choose-caterer-noida/" className="text-accent hover:text-accent/80 font-medium">
                How to Choose Caterer
              </Link>
              <Link href="/menu/" className="text-accent hover:text-accent/80 font-medium">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
