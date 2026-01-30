import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import JsonLd from '@/components/seo/JsonLd';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Complete Wedding Catering Checklist 2026 | Planning Guide for Noida',
  description:
    'Ultimate wedding catering checklist for Indian weddings. Timeline, menu planning, budget tips, vendor questions, and execution checklist. Free downloadable guide.',
  path: '/blog/wedding-catering-checklist/',
  image: IMAGES.wedding.hero,
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Complete Wedding Catering Checklist 2026 — Your Ultimate Planning Guide',
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
  datePublished: '2026-01-20',
  dateModified: '2026-01-20',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://chef24catering.in/blog/wedding-catering-checklist/',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How far in advance should I book wedding catering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For peak wedding season (October-February), book 3-4 months in advance. For off-season weddings, 6-8 weeks is usually sufficient. Popular caterers get booked quickly, so earlier is always better.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average cost of wedding catering per plate in Noida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wedding catering in Noida ranges from Rs 400-800 per plate for standard packages and Rs 800-1500+ for premium packages with live counters and exotic dishes. The cost depends on menu complexity, guest count, and service requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I do a food tasting before booking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, always request a tasting session before finalizing. Most caterers offer tastings for weddings above 200 guests. This helps you verify taste, presentation, and portion sizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many dishes should be in a wedding menu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A balanced Indian wedding menu typically has 3-4 starters, 4-5 main course items including dal and vegetables, 2-3 bread varieties, 1-2 rice options, and 2-3 desserts. Live counters add variety without overwhelming guests.',
      },
    },
    {
      '@type': 'Question',
      name: 'What questions should I ask a wedding caterer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key questions include: What is included in the per-plate price? How many service staff will be provided? Do you handle setup and cleanup? Can you accommodate dietary restrictions? What is your cancellation policy? Do you have liability insurance?',
      },
    },
  ],
};

const timelineChecklist = [
  {
    period: '4-6 Months Before',
    tasks: [
      'Determine your catering budget (typically 35-45% of total wedding budget)',
      'Research and shortlist 3-5 caterers based on reviews and recommendations',
      'Schedule initial consultations with shortlisted caterers',
      'Collect detailed quotes with itemized pricing',
      'Check availability for your wedding dates',
    ],
  },
  {
    period: '3-4 Months Before',
    tasks: [
      'Finalize guest count estimate (add 5-10% buffer)',
      'Arrange tasting sessions with top 2-3 caterers',
      'Decide on service style (buffet, sit-down, or hybrid)',
      'Discuss dietary requirements (Jain, vegan, allergies)',
      'Review and compare final quotes',
      'Book caterer and sign contract with clear terms',
    ],
  },
  {
    period: '6-8 Weeks Before',
    tasks: [
      'Finalize complete menu for all functions',
      'Confirm live counter selections',
      'Discuss table setup and buffet layout',
      'Coordinate with venue on kitchen access and timing',
      'Confirm rental items needed (tables, chairs, chinaware)',
    ],
  },
  {
    period: '2-4 Weeks Before',
    tasks: [
      'Provide final guest count (with dietary breakdown)',
      'Confirm timeline for each function',
      'Arrange pre-wedding tasting if needed',
      'Finalize presentation and decor preferences',
      'Confirm staff uniform and grooming standards',
    ],
  },
  {
    period: '1 Week Before',
    tasks: [
      'Final walkthrough with caterer at venue',
      'Confirm delivery and setup times',
      'Share emergency contact numbers',
      'Review backup plans for weather or delays',
      'Make final payment as per contract',
    ],
  },
  {
    period: 'Wedding Day',
    tasks: [
      'Caterer arrives 3-4 hours before serving time',
      'Verify setup matches agreed layout',
      'Taste-check food before guests arrive',
      'Assign family point of contact for caterer',
      'Monitor serving flow and replenishment',
    ],
  },
];

const menuCategories = [
  {
    name: 'Welcome Drinks',
    items: ['Jaljeera', 'Aam Panna', 'Rose Sharbat', 'Fresh Lime Soda', 'Mocktails'],
    tip: 'Offer 2-3 options including one seasonal special',
  },
  {
    name: 'Starters',
    items: ['Paneer Tikka', 'Hara Bhara Kebab', 'Dahi Ke Kebab', 'Veg Seekh', 'Crispy Corn'],
    tip: 'Balance between spicy and mild options',
  },
  {
    name: 'Main Course',
    items: ['Paneer Butter Masala', 'Dal Makhani', 'Mix Veg', 'Seasonal Sabzi', 'Kadhai Paneer'],
    tip: 'Include one signature dish as highlight',
  },
  {
    name: 'Breads & Rice',
    items: ['Naan', 'Roti', 'Lachha Paratha', 'Jeera Rice', 'Veg Biryani'],
    tip: 'Freshly made breads make a huge difference',
  },
  {
    name: 'Desserts',
    items: ['Gulab Jamun', 'Rasmalai', 'Kulfi', 'Jalebi', 'Kheer'],
    tip: 'One hot dessert + one cold dessert works well',
  },
];

const budgetBreakdown = [
  { category: 'Food Cost', percentage: '50-55%', description: 'Raw ingredients, preparation, cooking' },
  { category: 'Service Staff', percentage: '15-20%', description: 'Waiters, supervisors, chefs on-site' },
  { category: 'Equipment & Setup', percentage: '10-15%', description: 'Chafing dishes, counters, serving ware' },
  { category: 'Transportation', percentage: '5-8%', description: 'Delivery vehicles, insulated containers' },
  { category: 'Overheads', percentage: '10-15%', description: 'Profit margin, contingency, coordination' },
];

const redFlags = [
  'No written contract or vague terms',
  'Unwilling to provide references from recent events',
  'Significantly lower prices than market average',
  'No liability or food safety certifications',
  'Pressuring for full payment upfront',
  'Unclear about staff count or experience',
];

const faqs = [
  {
    question: 'How far in advance should I book wedding catering?',
    answer: 'For peak wedding season (October-February), book 3-4 months in advance. For off-season weddings, 6-8 weeks is usually sufficient. Popular caterers get booked quickly, so earlier is always better.',
  },
  {
    question: 'What is the average cost of wedding catering per plate in Noida?',
    answer: 'Wedding catering in Noida ranges from Rs 400-800 per plate for standard packages and Rs 800-1500+ for premium packages with live counters and exotic dishes. The cost depends on menu complexity, guest count, and service requirements.',
  },
  {
    question: 'Should I do a food tasting before booking?',
    answer: 'Yes, always request a tasting session before finalizing. Most caterers offer tastings for weddings above 200 guests. This helps you verify taste, presentation, and portion sizes.',
  },
  {
    question: 'How many dishes should be in a wedding menu?',
    answer: 'A balanced Indian wedding menu typically has 3-4 starters, 4-5 main course items including dal and vegetables, 2-3 bread varieties, 1-2 rice options, and 2-3 desserts. Live counters add variety without overwhelming guests.',
  },
  {
    question: 'What questions should I ask a wedding caterer?',
    answer: 'Key questions include: What is included in the per-plate price? How many service staff will be provided? Do you handle setup and cleanup? Can you accommodate dietary restrictions? What is your cancellation policy? Do you have liability insurance?',
  },
  {
    question: 'How do I handle dietary restrictions at my wedding?',
    answer: 'Communicate all dietary needs (Jain, vegan, allergies) to your caterer at least 2 weeks before. Request separate cooking and serving for Jain food. Label dishes clearly at the buffet. Have your caterer brief their staff on which dishes suit which dietary requirements.',
  },
  {
    question: 'Should I tip the catering staff?',
    answer: 'Tipping is appreciated but not mandatory. If the service is exceptional, Rs 100-500 per staff member is customary. Some families prefer to provide a lump sum to the supervisor to distribute.',
  },
  {
    question: 'What happens if guest count changes last minute?',
    answer: 'Most caterers allow 10-15% variation in guest count up to 48-72 hours before the event. Discuss this flexibility when signing the contract. Having a buffer built into your estimate helps manage unexpected changes.',
  },
];

export default function WeddingCateringChecklistPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <Breadcrumbs
        items={[
          { name: 'Blog', href: '/blog/' },
          { name: 'Wedding Catering Checklist', href: '/blog/wedding-catering-checklist/' },
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <time className="text-sm text-gray-500">January 20, 2026</time>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-ink mt-2">
              Complete Wedding Catering Checklist 2026 — Your Ultimate Planning Guide
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              Everything you need to plan perfect wedding catering, from choosing a caterer to execution day.
            </p>
          </header>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src={IMAGES.wedding.hero}
              alt="Beautiful wedding catering setup with buffet and decorations"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Planning wedding catering can feel overwhelming — there are menus to finalize, vendors to evaluate, timelines to coordinate, and hundreds of guests to feed. But with the right checklist and preparation, you can ensure your wedding food becomes a highlight that guests remember for years.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This comprehensive guide covers everything from initial planning to execution day. Whether you&apos;re organizing a intimate 100-guest celebration or a grand 500+ guest wedding, this checklist will help you navigate every decision with confidence. We&apos;ve created this based on our experience catering over 500 weddings across Noida and NCR.
            </p>

            <div className="my-8 p-6 bg-gold/10 rounded-xl border border-gold/20 not-prose">
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">Quick Navigation</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li><a href="#timeline" className="text-accent hover:underline">Planning Timeline</a></li>
                <li><a href="#choosing-caterer" className="text-accent hover:underline">How to Choose a Caterer</a></li>
                <li><a href="#menu-planning" className="text-accent hover:underline">Menu Planning Guide</a></li>
                <li><a href="#budget" className="text-accent hover:underline">Budget Breakdown</a></li>
                <li><a href="#red-flags" className="text-accent hover:underline">Red Flags to Avoid</a></li>
                <li><a href="#faqs" className="text-accent hover:underline">FAQs</a></li>
              </ul>
            </div>

            <h2 id="timeline" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Wedding Catering Timeline Checklist
            </h2>

            <p className="text-gray-700">
              Timing is crucial for wedding catering. Starting early gives you more options, better prices, and less stress. Here&apos;s a month-by-month breakdown of what to do and when.
            </p>

            <div className="space-y-8 my-8 not-prose">
              {timelineChecklist.map((phase) => (
                <div key={phase.period} className="bg-background rounded-xl p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                      {timelineChecklist.indexOf(phase) + 1}
                    </span>
                    {phase.period}
                  </h3>
                  <ul className="space-y-3">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-3 text-gray-700">
                        <span className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center text-accent text-xs flex-shrink-0 mt-0.5">
                          +
                        </span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 id="choosing-caterer" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              How to Choose the Right Wedding Caterer
            </h2>

            <p className="text-gray-700">
              Choosing the right caterer is perhaps the most important decision you&apos;ll make for your wedding food. Here&apos;s what to look for and what questions to ask.
            </p>

            <h3 className="font-heading text-xl font-semibold text-ink mt-8 mb-4">
              Key Factors to Evaluate
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              <div className="bg-white border border-muted rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Experience & Track Record</h4>
                <p className="text-gray-600 text-sm">Look for caterers with specific wedding experience. Ask for photos and references from similar-sized events.</p>
              </div>
              <div className="bg-white border border-muted rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Menu Flexibility</h4>
                <p className="text-gray-600 text-sm">Can they customize? Do they accommodate Jain, vegan, or allergy requirements easily?</p>
              </div>
              <div className="bg-white border border-muted rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Staff Quality</h4>
                <p className="text-gray-600 text-sm">Professional, uniformed staff makes a visible difference. Ask about staff-to-guest ratios.</p>
              </div>
              <div className="bg-white border border-muted rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Clear Pricing</h4>
                <p className="text-gray-600 text-sm">Transparent, itemized quotes with no hidden charges. Everything should be in writing.</p>
              </div>
            </div>

            <p className="text-gray-700">
              For a detailed guide on evaluating caterers, read our comprehensive article on{' '}
              <Link href="/blog/how-to-choose-caterer-noida/" className="text-accent hover:underline font-medium">
                how to choose a caterer in Noida
              </Link>.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-8">
              <Image
                src={IMAGES.wedding.tiles[0]}
                alt="Professional wedding buffet setup"
                fill
                className="object-cover"
              />
            </div>

            <h2 id="menu-planning" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Wedding Menu Planning Guide
            </h2>

            <p className="text-gray-700">
              Your wedding menu should reflect your family&apos;s taste while catering to diverse guest preferences. Here&apos;s how to build a balanced menu that impresses without overwhelming.
            </p>

            <h3 className="font-heading text-xl font-semibold text-ink mt-8 mb-4">
              Menu Categories & Sample Items
            </h3>

            <div className="space-y-4 not-prose my-6">
              {menuCategories.map((category) => (
                <div key={category.name} className="bg-background rounded-xl p-5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-ink mb-2">{category.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <span key={item} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:text-right">
                      <span className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-lg text-sm">
                        Tip: {category.tip}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-heading text-xl font-semibold text-ink mt-8 mb-4">
              Live Counters — The Modern Wedding Essential
            </h3>

            <p className="text-gray-700">
              Live counters have become a must-have at modern Indian weddings. They add entertainment value and ensure freshly prepared food. Popular options include:
            </p>

            <ul className="my-4">
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Live Chaat Counter</strong> — Pani puri, bhel, papdi chaat made fresh
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Tandoor Counter</strong> — Hot naan, kulcha, and kebabs on demand
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Pasta/Chinese Counter</strong> — Made-to-order fusion options
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Dessert Counter</strong> — Jalebi-rabri, kulfi, ice cream
              </li>
            </ul>

            <p className="text-gray-700">
              For detailed live counter options and pricing, check out our guide on{' '}
              <Link href="/blog/live-counter-ideas-parties/" className="text-accent hover:underline font-medium">
                live counter ideas for parties
              </Link>.
            </p>

            <p className="text-gray-700 mt-4">
              View our complete <Link href="/menu/" className="text-accent hover:underline font-medium">catering menu</Link> for more dish options and combinations.
            </p>

            <h2 id="budget" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Understanding Wedding Catering Budget
            </h2>

            <p className="text-gray-700">
              Wedding catering typically accounts for 35-45% of your total wedding budget. Here&apos;s how caterers typically break down their pricing:
            </p>

            <div className="bg-white border border-muted rounded-xl overflow-hidden my-6 not-prose">
              <table className="w-full text-left">
                <thead className="bg-background">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-ink">Category</th>
                    <th className="px-4 py-3 font-semibold text-ink">% of Total</th>
                    <th className="px-4 py-3 font-semibold text-ink hidden md:table-cell">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetBreakdown.map((item, index) => (
                    <tr key={item.category} className={index % 2 === 0 ? '' : 'bg-background/50'}>
                      <td className="px-4 py-3 text-gray-700">{item.category}</td>
                      <td className="px-4 py-3 font-semibold text-accent">{item.percentage}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm hidden md:table-cell">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-heading text-xl font-semibold text-ink mt-8 mb-4">
              Tips to Optimize Your Catering Budget
            </h3>

            <ol className="space-y-3 my-4">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">1</span>
                <span><strong>Quality over quantity</strong> — 6 excellent dishes beat 12 average ones</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">2</span>
                <span><strong>Choose seasonal ingredients</strong> — Fresh seasonal vegetables cost less and taste better</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">3</span>
                <span><strong>Limit live counters</strong> — 2-3 strategic counters create more impact than 5 basic ones</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">4</span>
                <span><strong>Off-peak booking</strong> — Consider off-season dates for better rates</span>
              </li>
            </ol>

            <p className="text-gray-700">
              Read our detailed guide on{' '}
              <Link href="/blog/budget-catering-tips/" className="text-accent hover:underline font-medium">
                budget catering tips
              </Link>{' '}
              for more money-saving strategies.
            </p>

            <p className="text-gray-700 mt-4">
              For transparent pricing information, visit our{' '}
              <Link href="/pricing/" className="text-accent hover:underline font-medium">
                pricing page
              </Link>{' '}
              or check our detailed breakdown of{' '}
              <Link href="/blog/catering-cost-per-plate-noida/" className="text-accent hover:underline font-medium">
                catering cost per plate in Noida
              </Link>.
            </p>

            <h2 id="red-flags" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Red Flags to Avoid When Choosing a Caterer
            </h2>

            <p className="text-gray-700">
              Protect yourself from disappointing experiences by watching for these warning signs:
            </p>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6 my-6 not-prose">
              <h4 className="font-semibold text-red-800 mb-4">Warning Signs</h4>
              <ul className="space-y-3">
                {redFlags.map((flag) => (
                  <li key={flag} className="flex items-start gap-3 text-red-700">
                    <span className="text-red-500 font-bold">!</span>
                    {flag}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Special Dietary Considerations
            </h2>

            <p className="text-gray-700">
              Modern Indian weddings often need to accommodate various dietary requirements. Plan for these in advance:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Jain Food</h4>
                <p className="text-gray-600 text-sm">No onion, garlic, or root vegetables. Requires separate preparation and serving.</p>
              </div>
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Vegan Options</h4>
                <p className="text-gray-600 text-sm">No dairy products. Many traditional dishes can be adapted with plant-based alternatives.</p>
              </div>
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Diabetic-Friendly</h4>
                <p className="text-gray-600 text-sm">Low-sugar desserts and controlled-carb options for elderly guests.</p>
              </div>
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Kids Menu</h4>
                <p className="text-gray-600 text-sm">Milder flavors, smaller portions, finger-friendly foods.</p>
              </div>
            </div>

            <p className="text-gray-700">
              For Jain menu options, explore our{' '}
              <Link href="/blog/jain-menu-ideas-events/" className="text-accent hover:underline font-medium">
                Jain menu ideas for events
              </Link>.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-8">
              <Image
                src={IMAGES.wedding.tiles[2]}
                alt="Wedding food presentation and service"
                fill
                className="object-cover"
              />
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
              Final Checklist Summary
            </h2>

            <p className="text-gray-700">
              Keep this quick reference checklist handy as you plan your wedding catering:
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6 not-prose">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" className="w-4 h-4 rounded" readOnly /> Start research 4-6 months before
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" className="w-4 h-4 rounded" readOnly /> Get quotes from 3-5 caterers
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" className="w-4 h-4 rounded" readOnly /> Schedule tasting sessions
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" className="w-4 h-4 rounded" readOnly /> Sign detailed contract
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" className="w-4 h-4 rounded" readOnly /> Finalize menu 6-8 weeks before
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" className="w-4 h-4 rounded" readOnly /> Confirm dietary requirements
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" className="w-4 h-4 rounded" readOnly /> Final walkthrough 1 week before
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" className="w-4 h-4 rounded" readOnly /> Assign day-of contact person
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary rounded-xl text-center">
            <h3 className="font-heading text-xl font-semibold text-white mb-4">
              Ready to Plan Your Wedding Catering?
            </h3>
            <p className="text-white/80 mb-4">
              Share your wedding details and we&apos;ll create a customized menu and quote
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppLink variant="primary">Get Wedding Quote</WhatsAppLink>
              <Link
                href="/services/wedding-catering-noida/"
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                See Wedding Services
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-muted">
            <p className="text-sm text-gray-600 mb-4">Related articles and pages:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services/wedding-catering-noida/" className="text-accent hover:text-accent/80 font-medium">
                Wedding Catering Services
              </Link>
              <Link href="/pricing/" className="text-accent hover:text-accent/80 font-medium">
                View Pricing
              </Link>
              <Link href="/menu/" className="text-accent hover:text-accent/80 font-medium">
                See Full Menu
              </Link>
              <Link href="/blog/catering-cost-per-plate-noida/" className="text-accent hover:text-accent/80 font-medium">
                Cost Per Plate Guide
              </Link>
              <Link href="/reviews/" className="text-accent hover:text-accent/80 font-medium">
                Customer Reviews
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
