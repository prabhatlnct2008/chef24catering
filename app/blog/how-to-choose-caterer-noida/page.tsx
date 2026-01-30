import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import JsonLd from '@/components/seo/JsonLd';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'How to Choose the Right Caterer in Noida | Complete Guide 2026',
  description:
    'Expert guide on choosing a caterer in Noida. 15 essential questions to ask, red flags to avoid, evaluation checklist. Make the right choice for your event.',
  path: '/blog/how-to-choose-caterer-noida/',
  image: IMAGES.parties.corporate,
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Choose the Right Caterer in Noida — Complete Guide 2026',
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
  datePublished: '2026-01-18',
  dateModified: '2026-01-18',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://chef24catering.in/blog/how-to-choose-caterer-noida/',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I find good caterers in Noida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with Google reviews and ratings, ask friends and family for recommendations, check wedding planning websites and local Facebook groups. Shortlist caterers with consistent positive reviews and verified photos of their work.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should be included in a catering contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A proper catering contract should include: detailed menu with quantities, per-plate or total cost breakdown, payment schedule, cancellation policy, staff count, setup and cleanup responsibilities, equipment provided, liability coverage, and contingency plans.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many caterers should I get quotes from?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Get quotes from at least 3-5 caterers to understand market rates and compare offerings. This helps you identify fair pricing and see what different caterers include in their packages.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to book a caterer online without meeting them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While initial research can be done online, always meet the caterer in person before booking. Visit their kitchen if possible, schedule a tasting, and verify their credentials. Never make full payment without an in-person interaction.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical staff-to-guest ratio for catering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For buffet service, 1 server per 25-30 guests is standard. For plated/sit-down service, 1 server per 15-20 guests. Additionally, you need kitchen staff, supervisors, and specialized counter staff as needed.',
      },
    },
  ],
};

const questionsToAsk = [
  {
    category: 'Experience & Credentials',
    questions: [
      'How many years have you been in the catering business?',
      'Do you have FSSAI registration and food safety certifications?',
      'Can you share photos and references from recent similar events?',
      'How many events of this size have you handled?',
    ],
  },
  {
    category: 'Menu & Food',
    questions: [
      'Can I customize the menu or only choose from fixed packages?',
      'Do you accommodate dietary restrictions (Jain, vegan, allergies)?',
      'Where is the food prepared — central kitchen or on-site?',
      'Can we arrange a tasting session before finalizing?',
    ],
  },
  {
    category: 'Pricing & Payments',
    questions: [
      'What exactly is included in the per-plate price?',
      'Are there any additional charges (transportation, overtime, equipment)?',
      'What is your payment schedule and cancellation policy?',
      'How do you handle changes in guest count?',
    ],
  },
  {
    category: 'Service & Execution',
    questions: [
      'How many service staff will be assigned to my event?',
      'What time will setup begin and how long will it take?',
      'Who will be the on-site supervisor I can contact?',
      'Do you handle complete cleanup after the event?',
    ],
  },
];

const redFlagsDetailed = [
  {
    flag: 'No Written Contract',
    description: 'Verbal agreements lead to disputes. Everything should be documented — menu, pricing, timing, responsibilities.',
    severity: 'Critical',
  },
  {
    flag: 'Demands Full Payment Upfront',
    description: 'Standard practice is 30-50% advance, with balance on or after the event. Full upfront payment removes accountability.',
    severity: 'Critical',
  },
  {
    flag: 'No Verifiable References',
    description: 'Reputable caterers have past clients willing to vouch for them. Unable to provide references is a major concern.',
    severity: 'High',
  },
  {
    flag: 'Significantly Lower Pricing',
    description: 'If quotes are 30-40% below market rates, question where they are cutting costs — usually food quality or staff.',
    severity: 'High',
  },
  {
    flag: 'Vague About Staff Count',
    description: 'Understaffing leads to poor service. Good caterers can tell you exactly how many staff they will deploy.',
    severity: 'Medium',
  },
  {
    flag: 'No Kitchen Visit Allowed',
    description: 'Professional caterers are proud of their kitchen. Reluctance to show it suggests hygiene issues.',
    severity: 'High',
  },
  {
    flag: 'Poor Communication',
    description: 'If they are slow to respond or unclear before booking, service will likely be worse after.',
    severity: 'Medium',
  },
  {
    flag: 'No Insurance or Liability Coverage',
    description: 'For larger events, caterers should have basic liability coverage. This protects you from unforeseen issues.',
    severity: 'Medium',
  },
];

const evaluationCriteria = [
  { criterion: 'Food Quality', weight: '30%', checkpoints: 'Taste, freshness, presentation, consistency' },
  { criterion: 'Service Quality', weight: '25%', checkpoints: 'Staff professionalism, attentiveness, problem-solving' },
  { criterion: 'Reliability', weight: '20%', checkpoints: 'Punctuality, promise delivery, track record' },
  { criterion: 'Value for Money', weight: '15%', checkpoints: 'Price vs quality, inclusions, no hidden costs' },
  { criterion: 'Flexibility', weight: '10%', checkpoints: 'Menu customization, handling last-minute changes' },
];

const greenFlags = [
  'Detailed, itemized quotation without asking',
  'Proactively mentions what is NOT included',
  'Offers to show their kitchen or recent event photos',
  'Clear communication via WhatsApp/email with quick responses',
  'Asks detailed questions about your event needs',
  'Provides references without hesitation',
  'Has a proper contract with fair terms',
  'Staff are uniformed and professional during tasting',
];

const faqs = [
  {
    question: 'How do I find good caterers in Noida?',
    answer: 'Start with Google reviews and ratings, ask friends and family for recommendations, check wedding planning websites and local Facebook groups. Shortlist caterers with consistent positive reviews and verified photos of their work.',
  },
  {
    question: 'What should be included in a catering contract?',
    answer: 'A proper catering contract should include: detailed menu with quantities, per-plate or total cost breakdown, payment schedule, cancellation policy, staff count, setup and cleanup responsibilities, equipment provided, liability coverage, and contingency plans.',
  },
  {
    question: 'How many caterers should I get quotes from?',
    answer: 'Get quotes from at least 3-5 caterers to understand market rates and compare offerings. This helps you identify fair pricing and see what different caterers include in their packages.',
  },
  {
    question: 'Is it safe to book a caterer online without meeting them?',
    answer: 'While initial research can be done online, always meet the caterer in person before booking. Visit their kitchen if possible, schedule a tasting, and verify their credentials. Never make full payment without an in-person interaction.',
  },
  {
    question: 'What is the typical staff-to-guest ratio for catering?',
    answer: 'For buffet service, 1 server per 25-30 guests is standard. For plated/sit-down service, 1 server per 15-20 guests. Additionally, you need kitchen staff, supervisors, and specialized counter staff as needed.',
  },
  {
    question: 'Should I visit the caterer kitchen before booking?',
    answer: 'Yes, if possible. A kitchen visit reveals hygiene standards, equipment quality, and overall professionalism. Most good caterers welcome kitchen visits as it builds trust.',
  },
  {
    question: 'How important are online reviews for choosing a caterer?',
    answer: 'Online reviews are helpful but should not be the only criterion. Look for patterns in reviews — consistent praise or complaints tell you more than individual reviews. Also verify reviews are recent and authentic.',
  },
  {
    question: 'What happens if the caterer fails to deliver on the day?',
    answer: 'This is why contracts matter. A good contract includes penalties for non-performance and backup plans. Ask about their contingency measures during evaluation.',
  },
  {
    question: 'Can I negotiate catering prices?',
    answer: 'Yes, especially for larger events. You can negotiate on per-plate rates, additional counters, or service extras. However, avoid pushing too hard on price as it may affect quality.',
  },
  {
    question: 'Is tasting always free?',
    answer: 'Policies vary. Many caterers offer free tasting for events above a certain size (usually 150-200 guests). For smaller events, there may be a nominal charge that is often adjusted against the final bill.',
  },
];

const comparisonTable = [
  { aspect: 'Price Transparency', good: 'Itemized quote shared proactively', bad: 'Vague pricing, hidden charges revealed later' },
  { aspect: 'Communication', good: 'Quick responses, clear answers', bad: 'Slow replies, avoids direct questions' },
  { aspect: 'References', good: 'Readily provides contacts and photos', bad: 'Hesitant or unable to provide' },
  { aspect: 'Contract', good: 'Detailed terms, fair policies', bad: 'No contract or one-sided terms' },
  { aspect: 'Flexibility', good: 'Accommodates reasonable requests', bad: 'Rigid, no customization allowed' },
];

export default function HowToChooseCatererPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <Breadcrumbs
        items={[
          { name: 'Blog', href: '/blog/' },
          { name: 'How to Choose a Caterer', href: '/blog/how-to-choose-caterer-noida/' },
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <time className="text-sm text-gray-500">January 18, 2026</time>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-ink mt-2">
              How to Choose the Right Caterer in Noida — Complete Guide 2026
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              15 essential questions, red flags to watch for, and a proven evaluation framework to find your perfect catering partner.
            </p>
          </header>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src={IMAGES.parties.corporate}
              alt="Professional catering setup at an event"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Choosing the right caterer can make or break your event. Great food with professional service elevates any celebration, while a poor catering experience can overshadow even the best-planned occasions. With hundreds of caterers operating in Noida, how do you identify the right one for your specific needs?
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This guide draws from our experience serving 500+ events across Noida, conversations with countless event planners, and feedback from families who have shared their catering selection stories — both positive and negative. Use this framework to make a confident, informed decision.
            </p>

            <div className="my-8 p-6 bg-gold/10 rounded-xl border border-gold/20 not-prose">
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">What You Will Learn</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li><a href="#research" className="text-accent hover:underline">How to Research Caterers</a></li>
                <li><a href="#questions" className="text-accent hover:underline">15 Questions to Ask</a></li>
                <li><a href="#red-flags" className="text-accent hover:underline">Red Flags to Avoid</a></li>
                <li><a href="#green-flags" className="text-accent hover:underline">Green Flags to Look For</a></li>
                <li><a href="#evaluation" className="text-accent hover:underline">Evaluation Framework</a></li>
                <li><a href="#faqs" className="text-accent hover:underline">FAQs</a></li>
              </ul>
            </div>

            <h2 id="research" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Step 1: Research and Shortlist
            </h2>

            <p className="text-gray-700">
              Start your search with multiple sources to build a diverse shortlist. Relying on just one source may give you a skewed picture.
            </p>

            <h3 className="font-heading text-xl font-semibold text-ink mt-8 mb-4">
              Where to Find Caterers
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Personal Recommendations</h4>
                <p className="text-gray-600 text-sm">Ask friends, family, and colleagues who have recently hosted events. First-hand experiences are invaluable and often most reliable.</p>
              </div>
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Google Maps & Reviews</h4>
                <p className="text-gray-600 text-sm">Search &quot;caterers in Noida&quot; and filter by rating. Read recent reviews carefully — look for specific details, not just generic praise.</p>
              </div>
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Local Facebook Groups</h4>
                <p className="text-gray-600 text-sm">Noida resident groups often have recommendations and honest feedback about local services including caterers.</p>
              </div>
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">Wedding Planning Platforms</h4>
                <p className="text-gray-600 text-sm">Sites like WedMeGood and WeddingBazaar have vendor listings with verified reviews and pricing information.</p>
              </div>
            </div>

            <h3 className="font-heading text-xl font-semibold text-ink mt-8 mb-4">
              Initial Filtering Criteria
            </h3>

            <p className="text-gray-700">
              From your initial list, filter based on these basic criteria:
            </p>

            <ul className="my-4">
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Service Area</strong> — Confirm they serve your specific location in Noida
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Event Type Experience</strong> — Wedding caterer may not be ideal for corporate events
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Scale Compatibility</strong> — Can they handle your guest count comfortably?
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Cuisine Match</strong> — Do they specialize in the cuisine you want?
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Budget Range</strong> — Their typical pricing should align with your budget
              </li>
            </ul>

            <p className="text-gray-700">
              Aim to shortlist 4-6 caterers for detailed evaluation. Too few limits comparison; too many becomes overwhelming.
            </p>

            <h2 id="questions" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Step 2: Questions to Ask Every Caterer
            </h2>

            <p className="text-gray-700">
              Prepare these questions before meeting caterers. Their answers — and how they answer — tell you a lot about their professionalism.
            </p>

            <div className="space-y-8 my-8 not-prose">
              {questionsToAsk.map((category) => (
                <div key={category.category} className="bg-background rounded-xl p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.questions.map((question) => (
                      <li key={question} className="flex items-start gap-3 text-gray-700">
                        <span className="text-accent font-bold text-lg">?</span>
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 my-6 not-prose">
              <h4 className="font-semibold text-accent mb-2">Pro Tip: Note How They Respond</h4>
              <p className="text-gray-700 text-sm">
                Clear, confident answers indicate experience. Vague responses, defensiveness, or reluctance to commit specifics are warning signs.
              </p>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden my-8">
              <Image
                src={IMAGES.parties.mocktail}
                alt="Professional mocktail counter at an event"
                fill
                className="object-cover"
              />
            </div>

            <h2 id="red-flags" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Step 3: Red Flags to Watch For
            </h2>

            <p className="text-gray-700">
              These warning signs should make you think twice before booking a caterer. The more red flags you spot, the higher the risk.
            </p>

            <div className="space-y-4 not-prose my-6">
              {redFlagsDetailed.map((item) => (
                <div key={item.flag} className="bg-white border border-muted rounded-xl p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-ink flex items-center gap-2">
                        <span className="text-red-500">!</span> {item.flag}
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                      item.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                      item.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <h2 id="green-flags" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Step 4: Green Flags — Signs of a Good Caterer
            </h2>

            <p className="text-gray-700">
              Look for these positive indicators that suggest a professional, reliable caterer:
            </p>

            <div className="bg-green-50 border border-green-100 rounded-xl p-6 my-6 not-prose">
              <h4 className="font-semibold text-green-800 mb-4">Positive Signs</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {greenFlags.map((flag) => (
                  <li key={flag} className="flex items-start gap-2 text-green-700">
                    <span className="text-green-500 font-bold mt-0.5">+</span>
                    <span className="text-sm">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="font-heading text-xl font-semibold text-ink mt-8 mb-4">
              Good vs. Bad: Quick Comparison
            </h3>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full bg-white border border-muted rounded-xl overflow-hidden">
                <thead className="bg-background">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-ink">Aspect</th>
                    <th className="px-4 py-3 text-left font-semibold text-green-700">Good Sign</th>
                    <th className="px-4 py-3 text-left font-semibold text-red-700">Bad Sign</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={row.aspect} className={index % 2 === 0 ? '' : 'bg-background/50'}>
                      <td className="px-4 py-3 font-medium text-ink">{row.aspect}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{row.good}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{row.bad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="evaluation" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Step 5: Evaluation Framework
            </h2>

            <p className="text-gray-700">
              Use this weighted scoring system to objectively compare your shortlisted caterers:
            </p>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full bg-white border border-muted rounded-xl overflow-hidden">
                <thead className="bg-background">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-ink">Criterion</th>
                    <th className="px-4 py-3 text-left font-semibold text-ink">Weight</th>
                    <th className="px-4 py-3 text-left font-semibold text-ink">What to Check</th>
                  </tr>
                </thead>
                <tbody>
                  {evaluationCriteria.map((item, index) => (
                    <tr key={item.criterion} className={index % 2 === 0 ? '' : 'bg-background/50'}>
                      <td className="px-4 py-3 font-medium text-ink">{item.criterion}</td>
                      <td className="px-4 py-3 font-semibold text-accent">{item.weight}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{item.checkpoints}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-heading text-xl font-semibold text-ink mt-8 mb-4">
              The Tasting Session
            </h3>

            <p className="text-gray-700">
              A tasting session is your best opportunity to evaluate food quality first-hand. Here is how to make the most of it:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">What to Taste</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>- Request your actual menu items, not samples</li>
                  <li>- Taste a variety: starters, mains, breads, desserts</li>
                  <li>- If live counters are planned, see them in action</li>
                </ul>
              </div>
              <div className="bg-background rounded-xl p-5">
                <h4 className="font-semibold text-ink mb-2">What to Observe</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>- Presentation and plating quality</li>
                  <li>- Consistency across dishes</li>
                  <li>- Service style and staff behavior</li>
                </ul>
              </div>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden my-8">
              <Image
                src={IMAGES.wedding.tiles[1]}
                alt="Elegant wedding food presentation"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Step 6: Making the Final Decision
            </h2>

            <p className="text-gray-700">
              After evaluating all caterers, compare scores and consider these final factors:
            </p>

            <ol className="space-y-3 my-4">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">1</span>
                <span><strong>Trust Your Instinct</strong> — If something feels off despite good scores, pay attention to that feeling</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">2</span>
                <span><strong>Communication Quality</strong> — You will work closely with them; good communication is essential</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">3</span>
                <span><strong>Value Over Price</strong> — Cheapest is rarely best; focus on what you get for the price</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">4</span>
                <span><strong>Verify Everything</strong> — Cross-check references, visit kitchen, confirm availability</span>
              </li>
            </ol>

            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Contract Essentials
            </h2>

            <p className="text-gray-700">
              Never book without a written contract. Ensure it includes:
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6 not-prose">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-accent">+</span> Complete menu with quantities
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-accent">+</span> Total cost and payment schedule
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-accent">+</span> Staff count and uniforms
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-accent">+</span> Setup and cleanup responsibilities
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-accent">+</span> Cancellation and refund policy
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-accent">+</span> Guest count change provisions
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-accent">+</span> Equipment and rentals included
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-accent">+</span> Contact person details
                </li>
              </ul>
            </div>

            <p className="text-gray-700">
              For wedding-specific guidance, read our complete{' '}
              <Link href="/blog/wedding-catering-checklist/" className="text-accent hover:underline font-medium">
                wedding catering checklist
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
              Choosing the right caterer requires research, careful evaluation, and attention to both obvious and subtle signs. Use this guide as your framework, but ultimately trust your judgment. A good caterer becomes a partner in making your event successful — invest the time to find the right one.
            </p>

            <p className="text-gray-700 mt-4">
              Read what customers say about their experience with us on our{' '}
              <Link href="/reviews/" className="text-accent hover:underline font-medium">
                reviews page
              </Link>, or learn more about our approach on the{' '}
              <Link href="/about/" className="text-accent hover:underline font-medium">
                about page
              </Link>.
            </p>
          </div>

          <div className="mt-12 p-6 bg-primary rounded-xl text-center">
            <h3 className="font-heading text-xl font-semibold text-white mb-4">
              Have Questions? Let&apos;s Talk
            </h3>
            <p className="text-white/80 mb-4">
              We&apos;re happy to answer any catering questions or discuss your event needs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppLink variant="primary">Chat With Us</WhatsAppLink>
              <Link
                href="/about/"
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-muted">
            <p className="text-sm text-gray-600 mb-4">Related articles and pages:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about/" className="text-accent hover:text-accent/80 font-medium">
                About Chef24Catering
              </Link>
              <Link href="/reviews/" className="text-accent hover:text-accent/80 font-medium">
                Customer Reviews
              </Link>
              <Link href="/blog/wedding-catering-checklist/" className="text-accent hover:text-accent/80 font-medium">
                Wedding Checklist
              </Link>
              <Link href="/blog/catering-cost-per-plate-noida/" className="text-accent hover:text-accent/80 font-medium">
                Cost Per Plate Guide
              </Link>
              <Link href="/pricing/" className="text-accent hover:text-accent/80 font-medium">
                Our Pricing
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
