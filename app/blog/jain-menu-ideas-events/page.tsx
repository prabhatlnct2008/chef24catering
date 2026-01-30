import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import JsonLd from '@/components/seo/JsonLd';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Jain Menu Ideas for Events | Weddings, Parties & Functions | Noida',
  description:
    'Complete Jain catering menu guide for weddings, parties, and religious functions. No onion-garlic recipes, sattvik food ideas, sample menus for 50-500 guests.',
  path: '/blog/jain-menu-ideas-events/',
  image: IMAGES.services.bhandara,
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Jain Menu Ideas for Events — Complete Guide for Weddings, Parties & Functions',
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
  datePublished: '2026-01-22',
  dateModified: '2026-01-22',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://chef24catering.in/blog/jain-menu-ideas-events/',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What foods are not allowed in Jain diet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jain diet excludes all root vegetables (onion, garlic, potato, carrot, radish, ginger), eggs, meat, fish, and alcohol. Some stricter observers also avoid eating after sunset and during certain religious periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Jain food be tasty without onion and garlic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! Jain cuisine uses alternatives like hing (asafoetida), cumin, coriander, green chilies, tomatoes, and various spices to create flavorful dishes. Many people find well-prepared Jain food equally delicious.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you ensure separate Jain food preparation at events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use separate utensils, cooking vessels, and serving equipment for Jain food. Preparation happens in a designated area to prevent cross-contamination. Our staff is trained on Jain food requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Jain catering more expensive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jain catering is typically priced similarly to regular vegetarian catering. Some premium Jain ingredients may cost slightly more, but the overall pricing remains comparable. Ask for a specific quote based on your menu.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Jain and Sattvik food?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All Jain food is sattvik, but not all sattvik food is Jain. Sattvik food avoids onion, garlic, and heavy spices but may include root vegetables like potato and ginger which Jain diet prohibits.',
      },
    },
  ],
};

const jainRestrictions = [
  { item: 'Root Vegetables', examples: 'Onion, garlic, potato, carrot, radish, beet, ginger, turmeric root', reason: 'Considered to have many micro-organisms' },
  { item: 'Non-Vegetarian', examples: 'Meat, fish, eggs, any animal-derived products', reason: 'Ahimsa (non-violence) principle' },
  { item: 'Alcohol', examples: 'Wine, beer, spirits, vinegar made from alcohol', reason: 'Fermented products are avoided' },
  { item: 'Certain Vegetables', examples: 'Mushrooms, certain leafy greens after sunset', reason: 'Traditional beliefs about these foods' },
];

const flavorAlternatives = [
  { instead: 'Onion', use: 'Hing (asafoetida), cumin seeds, fennel', effect: 'Adds depth and aroma' },
  { instead: 'Garlic', use: 'Hing, black pepper, green chilies', effect: 'Provides pungency and heat' },
  { instead: 'Ginger', use: 'Dry ginger powder (if allowed), green chilies, black pepper', effect: 'Adds warmth and spice' },
  { instead: 'Potato', use: 'Raw banana, arbi (colocasia), sweet potato (check preference)', effect: 'Provides bulk and texture' },
];

const weddingMenu = {
  title: 'Jain Wedding Reception Menu',
  guests: '200-300 guests',
  sections: [
    {
      name: 'Welcome Drinks',
      items: ['Jaljeera (without hing if preferred)', 'Fresh lime soda', 'Aam panna', 'Kokum sharbat', 'Rose sherbet'],
    },
    {
      name: 'Starters',
      items: ['Paneer tikka (Jain style)', 'Crispy corn', 'Spring rolls (Jain)', 'Dahi ke kebab', 'Hara bhara kebab (without potato)', 'Cheese balls'],
    },
    {
      name: 'Live Counters',
      items: ['Jain chaat counter (pani puri, bhel, papdi)', 'Pasta counter (without garlic)', 'Dosa counter', 'Kulfi counter'],
    },
    {
      name: 'Main Course',
      items: ['Paneer butter masala (Jain)', 'Malai kofta (without potato)', 'Dal tadka (without garlic)', 'Kadai paneer (Jain)', 'Mixed vegetable korma', 'Palak paneer (Jain)', 'Jeera rice', 'Jain biryani', 'Naan, roti, paratha'],
    },
    {
      name: 'Desserts',
      items: ['Gulab jamun', 'Rasmalai', 'Malpua', 'Shrikhand', 'Jalebi', 'Fruit cream'],
    },
  ],
};

const partyMenu = {
  title: 'Jain Birthday/House Party Menu',
  guests: '50-100 guests',
  sections: [
    {
      name: 'Starters',
      items: ['Paneer tikka', 'Crispy corn', 'Spring rolls', 'Cheese pakora', 'Mushroom-free manchurian'],
    },
    {
      name: 'Main Course',
      items: ['Dal makhani (Jain)', 'Paneer do pyaza (without onion - named for texture)', 'Seasonal vegetable', 'Jeera rice', 'Breads'],
    },
    {
      name: 'Desserts',
      items: ['Gulab jamun', 'Ice cream', 'Fresh fruit'],
    },
  ],
};

const religiousMenu = {
  title: 'Jain Religious Function / Puja Menu',
  guests: 'Varies',
  sections: [
    {
      name: 'Simple Sattvik Options',
      items: ['Khichdi', 'Kadhi (without besan fried in onion)', 'Plain rice', 'Dal', 'Seasonal sabzi', 'Rotis', 'Kheer', 'Ladoo'],
    },
    {
      name: 'Prasad Items',
      items: ['Panchamrit', 'Dry fruits', 'Fresh fruits', 'Mishri', 'Traditional sweets'],
    },
  ],
};

const corporateMenu = {
  title: 'Jain Corporate Lunch Menu',
  guests: '30-100 guests',
  sections: [
    {
      name: 'Lunch Box Option',
      items: ['Dal (Jain)', '2 Sabzi options (1 dry, 1 gravy)', 'Rice', 'Rotis', 'Salad', 'Sweet'],
    },
    {
      name: 'Buffet Option',
      items: ['Starters (2 options)', 'Dal', 'Paneer dish', 'Seasonal vegetable', 'Rice/biryani', 'Breads', 'Dessert'],
    },
  ],
};

const popularDishes = [
  { name: 'Jain Paneer Butter Masala', description: 'Rich, creamy gravy with hing and tomato base instead of onion-garlic', popular: true },
  { name: 'Jain Dal Makhani', description: 'Slow-cooked black dal with cream, hing providing depth', popular: true },
  { name: 'Malai Kofta (Jain)', description: 'Cottage cheese dumplings in cashew-cream gravy, no potato', popular: true },
  { name: 'Jain Biryani', description: 'Fragrant rice with paneer/vegetables, layered without onion', popular: true },
  { name: 'Kadai Paneer (Jain)', description: 'Bell peppers and paneer in tomato-based spiced gravy', popular: false },
  { name: 'Palak Paneer (Jain)', description: 'Spinach-based gravy with paneer cubes, no garlic', popular: false },
  { name: 'Jain Chole', description: 'Chickpeas cooked with tomatoes and spices, no onion-garlic', popular: false },
  { name: 'Vegetable Korma', description: 'Mixed vegetables in mild cashew-cream sauce', popular: false },
];

const faqs = [
  {
    question: 'What foods are not allowed in Jain diet?',
    answer: 'Jain diet excludes all root vegetables (onion, garlic, potato, carrot, radish, ginger), eggs, meat, fish, and alcohol. Some stricter observers also avoid eating after sunset and during certain religious periods.',
  },
  {
    question: 'Can Jain food be tasty without onion and garlic?',
    answer: 'Absolutely! Jain cuisine uses alternatives like hing (asafoetida), cumin, coriander, green chilies, tomatoes, and various spices to create flavorful dishes. Many people find well-prepared Jain food equally delicious.',
  },
  {
    question: 'How do you ensure separate Jain food preparation at events?',
    answer: 'We use separate utensils, cooking vessels, and serving equipment for Jain food. Preparation happens in a designated area to prevent cross-contamination. Our staff is trained on Jain food requirements.',
  },
  {
    question: 'Is Jain catering more expensive?',
    answer: 'Jain catering is typically priced similarly to regular vegetarian catering. Some premium Jain ingredients may cost slightly more, but the overall pricing remains comparable. Ask for a specific quote based on your menu.',
  },
  {
    question: 'What is the difference between Jain and Sattvik food?',
    answer: 'All Jain food is sattvik, but not all sattvik food is Jain. Sattvik food avoids onion, garlic, and heavy spices but may include root vegetables like potato and ginger which Jain diet prohibits.',
  },
  {
    question: 'Can you do partial Jain menu at mixed events?',
    answer: 'Yes, we regularly cater events where some guests follow Jain diet and others do not. We prepare and serve Jain food separately with clear labeling. This is very common at weddings and large gatherings.',
  },
  {
    question: 'How do I communicate Jain requirements to the caterer?',
    answer: 'Be specific about restrictions. Some families avoid only root vegetables while others have additional restrictions. Share a clear list of what is and is not acceptable. We will confirm the menu items with you.',
  },
  {
    question: 'Are your desserts also Jain-friendly?',
    answer: 'Most traditional Indian desserts are naturally Jain-friendly. We ensure no prohibited ingredients are used. Items like gulab jamun, rasmalai, kheer, and halwa are typically safe for Jain consumption.',
  },
  {
    question: 'Can you provide Jain food for breakfast functions?',
    answer: 'Yes, we offer Jain breakfast options including poha (without potato), upma, idli-sambar (Jain style), dhokla, thepla, and various parathas. All prepared without onion, garlic, or root vegetables.',
  },
  {
    question: 'Do you cater Paryushan or other religious observances?',
    answer: 'Yes, we understand the special requirements during Paryushan and other Jain religious observances. We can prepare simpler, more sattvik menus appropriate for these occasions.',
  },
];

export default function JainMenuIdeasPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <Breadcrumbs
        items={[
          { name: 'Blog', href: '/blog/' },
          { name: 'Jain Menu Ideas', href: '/blog/jain-menu-ideas-events/' },
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <time className="text-sm text-gray-500">January 22, 2026</time>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-ink mt-2">
              Jain Menu Ideas for Events — Complete Guide for Weddings, Parties &amp; Functions
            </h1>
            <p className="text-xl text-gray-600 mt-4">
              Delicious Jain catering menus for every occasion. Sample menus, popular dishes, and tips for planning Jain-friendly events.
            </p>
          </header>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src={IMAGES.services.bhandara}
              alt="Traditional Jain vegetarian catering setup"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Planning a Jain-friendly event does not mean compromising on taste or variety. With the right understanding of Jain dietary principles and creative menu planning, you can create a memorable food experience that respects religious requirements while delighting all your guests.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              This comprehensive guide covers everything you need to know about Jain catering — from understanding dietary restrictions to sample menus for weddings, parties, and religious functions. Whether you are hosting a large wedding or an intimate gathering, these ideas will help you plan the perfect Jain menu.
            </p>

            <div className="my-8 p-6 bg-gold/10 rounded-xl border border-gold/20 not-prose">
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">In This Guide</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li><a href="#understanding" className="text-accent hover:underline">Understanding Jain Diet</a></li>
                <li><a href="#flavor" className="text-accent hover:underline">Creating Flavor Without Onion-Garlic</a></li>
                <li><a href="#wedding-menu" className="text-accent hover:underline">Wedding Menu Sample</a></li>
                <li><a href="#party-menu" className="text-accent hover:underline">Party Menu Sample</a></li>
                <li><a href="#religious-menu" className="text-accent hover:underline">Religious Function Menu</a></li>
                <li><a href="#popular-dishes" className="text-accent hover:underline">Popular Jain Dishes</a></li>
                <li><a href="#tips" className="text-accent hover:underline">Planning Tips</a></li>
                <li><a href="#faqs" className="text-accent hover:underline">FAQs</a></li>
              </ul>
            </div>

            <h2 id="understanding" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Understanding Jain Dietary Requirements
            </h2>

            <p className="text-gray-700">
              Jain diet is rooted in the principle of ahimsa (non-violence) and minimizing harm to all living beings. This includes avoiding foods that may involve harming organisms during harvesting or that naturally contain many micro-organisms.
            </p>

            <h3 className="font-heading text-xl font-semibold text-ink mt-8 mb-4">
              Foods to Avoid in Jain Cuisine
            </h3>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full bg-white border border-muted rounded-xl overflow-hidden">
                <thead className="bg-background">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-ink">Category</th>
                    <th className="px-4 py-3 text-left font-semibold text-ink">Examples</th>
                    <th className="px-4 py-3 text-left font-semibold text-ink hidden md:table-cell">Traditional Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {jainRestrictions.map((item, index) => (
                    <tr key={item.item} className={index % 2 === 0 ? '' : 'bg-background/50'}>
                      <td className="px-4 py-3 font-medium text-ink">{item.item}</td>
                      <td className="px-4 py-3 text-gray-600 text-sm">{item.examples}</td>
                      <td className="px-4 py-3 text-gray-500 text-sm hidden md:table-cell">{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 my-6 not-prose">
              <h4 className="font-semibold text-accent mb-2">Important Note</h4>
              <p className="text-gray-700 text-sm">
                Jain dietary practices vary among families and communities. Some may follow stricter rules while others are more flexible. Always confirm specific requirements with your guests or host family.
              </p>
            </div>

            <h2 id="flavor" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Creating Flavor Without Onion and Garlic
            </h2>

            <p className="text-gray-700">
              The biggest concern people have about Jain food is taste. The secret lies in using the right alternatives and techniques. Professional Jain cooking can be just as flavorful as regular Indian cuisine.
            </p>

            <h3 className="font-heading text-xl font-semibold text-ink mt-8 mb-4">
              Flavor Substitutes
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              {flavorAlternatives.map((alt) => (
                <div key={alt.instead} className="bg-background rounded-xl p-5">
                  <h4 className="font-semibold text-ink mb-2">Instead of {alt.instead}</h4>
                  <p className="text-gray-700 text-sm"><strong>Use:</strong> {alt.use}</p>
                  <p className="text-gray-500 text-sm mt-1"><strong>Effect:</strong> {alt.effect}</p>
                </div>
              ))}
            </div>

            <h3 className="font-heading text-xl font-semibold text-ink mt-8 mb-4">
              Cooking Techniques for Better Flavor
            </h3>

            <ul className="my-4">
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Roasting spices properly</strong> — Dry roasting whole spices before grinding releases deeper flavors
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Using hing (asafoetida) correctly</strong> — Adding to hot oil at the right temperature is crucial
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Layering flavors</strong> — Building taste through sequential addition of spices
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Fresh herbs</strong> — Generous use of coriander leaves and mint adds freshness
              </li>
              <li className="flex items-start gap-2 text-gray-700 mb-2">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <strong>Quality ingredients</strong> — Fresh vegetables and pure spices make a noticeable difference
              </li>
            </ul>

            <div className="relative aspect-video rounded-xl overflow-hidden my-8">
              <Image
                src={IMAGES.grehPravesh.section}
                alt="Jain food preparation and presentation"
                fill
                className="object-cover"
              />
            </div>

            <h2 id="wedding-menu" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Jain Wedding Reception Menu
            </h2>

            <p className="text-gray-700">
              Weddings call for variety and grandeur. Here is a comprehensive Jain menu suitable for wedding receptions and large functions.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6 not-prose">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-xl font-semibold text-ink">{weddingMenu.title}</h3>
                <span className="text-sm text-gray-500">For {weddingMenu.guests}</span>
              </div>
              <div className="space-y-6">
                {weddingMenu.sections.map((section) => (
                  <div key={section.name}>
                    <h4 className="font-semibold text-primary mb-2">{section.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {section.items.map((item) => (
                        <span key={item} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-muted">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-700">
              For complete wedding planning guidance, see our{' '}
              <Link href="/blog/wedding-catering-checklist/" className="text-accent hover:underline font-medium">
                wedding catering checklist
              </Link>{' '}
              and{' '}
              <Link href="/services/wedding-catering-noida/" className="text-accent hover:underline font-medium">
                wedding catering services
              </Link>.
            </p>

            <h2 id="party-menu" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Jain Birthday &amp; House Party Menu
            </h2>

            <p className="text-gray-700">
              For smaller gatherings like birthday parties, anniversaries, or house parties, a focused menu works better than overwhelming variety.
            </p>

            <div className="bg-background rounded-xl p-6 my-6 not-prose">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-xl font-semibold text-ink">{partyMenu.title}</h3>
                <span className="text-sm text-gray-500">For {partyMenu.guests}</span>
              </div>
              <div className="space-y-6">
                {partyMenu.sections.map((section) => (
                  <div key={section.name}>
                    <h4 className="font-semibold text-primary mb-2">{section.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {section.items.map((item) => (
                        <span key={item} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-muted">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-700">
              Looking for party catering? Explore our{' '}
              <Link href="/services/party-catering-noida/" className="text-accent hover:underline font-medium">
                party catering services
              </Link>.
            </p>

            <h2 id="religious-menu" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Jain Religious Function &amp; Puja Menu
            </h2>

            <p className="text-gray-700">
              Religious occasions call for simpler, more sattvik food. The focus is on purity and simplicity rather than elaborate preparation.
            </p>

            <div className="bg-gold/5 border border-gold/20 rounded-xl p-6 my-6 not-prose">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">{religiousMenu.title}</h3>
              <div className="space-y-6">
                {religiousMenu.sections.map((section) => (
                  <div key={section.name}>
                    <h4 className="font-semibold text-gold mb-2">{section.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {section.items.map((item) => (
                        <span key={item} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-muted">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-700">
              For large religious gatherings, see our{' '}
              <Link href="/services/bhandara-catering-noida/" className="text-accent hover:underline font-medium">
                bhandara catering services
              </Link>{' '}
              and{' '}
              <Link href="/services/greh-pravesh-catering-noida/" className="text-accent hover:underline font-medium">
                greh pravesh catering
              </Link>.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Jain Corporate Lunch Options
            </h2>

            <p className="text-gray-700">
              Many offices in Noida have employees who follow Jain diet. Here are suitable options for corporate catering.
            </p>

            <div className="bg-white border border-muted rounded-xl p-6 my-6 not-prose">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">{corporateMenu.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {corporateMenu.sections.map((section) => (
                  <div key={section.name}>
                    <h4 className="font-semibold text-primary mb-2">{section.name}</h4>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-700">
              Read our{' '}
              <Link href="/blog/corporate-catering-noida-sector-63-65/" className="text-accent hover:underline font-medium">
                corporate catering guide
              </Link>{' '}
              for more office catering ideas.
            </p>

            <h2 id="popular-dishes" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Most Popular Jain Dishes
            </h2>

            <p className="text-gray-700">
              These dishes are crowd favorites that work well at any Jain event:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              {popularDishes.map((dish) => (
                <div key={dish.name} className={`rounded-xl p-5 ${dish.popular ? 'bg-primary/5 border border-primary/20' : 'bg-background'}`}>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-semibold text-ink">{dish.name}</h4>
                    {dish.popular && (
                      <span className="text-xs bg-gold text-white px-2 py-0.5 rounded-full">Popular</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{dish.description}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700">
              View our complete <Link href="/menu/" className="text-accent hover:underline font-medium">catering menu</Link> including Jain options.
            </p>

            <div className="relative aspect-video rounded-xl overflow-hidden my-8">
              <Image
                src={IMAGES.wedding.tiles[3]}
                alt="Jain catering presentation at an event"
                fill
                className="object-cover"
              />
            </div>

            <h2 id="tips" className="font-heading text-2xl md:text-3xl font-semibold text-ink mt-12 mb-6">
              Tips for Planning Jain-Friendly Events
            </h2>

            <ol className="space-y-4 my-4">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">1</span>
                <div>
                  <strong>Communicate Early</strong>
                  <p className="text-gray-600 text-sm">Share your Jain requirements with the caterer during initial discussions. Different families have varying levels of strictness.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">2</span>
                <div>
                  <strong>Request Separate Preparation</strong>
                  <p className="text-gray-600 text-sm">At mixed events, ensure Jain food is prepared separately using dedicated utensils.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">3</span>
                <div>
                  <strong>Label Dishes Clearly</strong>
                  <p className="text-gray-600 text-sm">At buffets, have clear labels showing which dishes are Jain-friendly.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">4</span>
                <div>
                  <strong>Consider Timing</strong>
                  <p className="text-gray-600 text-sm">Some Jain guests may not eat after sunset. Plan serving times accordingly.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">5</span>
                <div>
                  <strong>Do a Tasting</strong>
                  <p className="text-gray-600 text-sm">Request tasting of Jain dishes specifically. Verify the taste meets your expectations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">6</span>
                <div>
                  <strong>Plan for Mixed Events</strong>
                  <p className="text-gray-600 text-sm">Estimate the number of Jain guests accurately. Usually 20-30% extra is safe for mixed events.</p>
                </div>
              </li>
            </ol>

            <p className="text-gray-700">
              For pricing information, visit our{' '}
              <Link href="/pricing/" className="text-accent hover:underline font-medium">
                pricing page
              </Link>{' '}
              or check the{' '}
              <Link href="/blog/catering-cost-per-plate-noida/" className="text-accent hover:underline font-medium">
                cost per plate guide
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
              Jain catering requires understanding and attention to detail, but the result can be as delicious and varied as any other cuisine. With proper planning and an experienced caterer, your Jain event will be a memorable culinary experience for all guests.
            </p>

            <p className="text-gray-700 mt-4">
              At Chef24Catering, we have extensive experience preparing Jain food for events of all sizes across Noida. Our chefs understand the nuances of Jain cooking and take pride in creating flavorful dishes that respect all dietary requirements.
            </p>
          </div>

          <div className="mt-12 p-6 bg-primary rounded-xl text-center">
            <h3 className="font-heading text-xl font-semibold text-white mb-4">
              Planning a Jain Event?
            </h3>
            <p className="text-white/80 mb-4">
              Share your event details and we&apos;ll create a customized Jain menu for you
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppLink variant="primary">Get Jain Menu Quote</WhatsAppLink>
              <Link
                href="/menu/"
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Full Menu
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
              <Link href="/services/bhandara-catering-noida/" className="text-accent hover:text-accent/80 font-medium">
                Bhandara Catering
              </Link>
              <Link href="/services/wedding-catering-noida/" className="text-accent hover:text-accent/80 font-medium">
                Wedding Catering
              </Link>
              <Link href="/blog/wedding-catering-checklist/" className="text-accent hover:text-accent/80 font-medium">
                Wedding Checklist
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
