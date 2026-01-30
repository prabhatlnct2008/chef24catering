import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import JsonLd from '@/components/seo/JsonLd';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Catering Cost Per Plate in Noida (2026) | Pricing Guide',
  description:
    'How much does catering cost in Noida? Complete 2026 pricing breakdown for house parties, weddings, corporate events. Per-plate price guide.',
  path: '/blog/catering-cost-per-plate-noida/',
  image: IMAGES.parties.corporate,
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Catering Cost Per Plate in Noida (2026) — Simple Pricing Breakdown',
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
  datePublished: '2026-01-15',
  dateModified: '2026-01-15',
};

const priceBands = [
  { type: 'Basic home function', range: '₹200–₹350/plate' },
  { type: 'Standard buffet', range: '₹350–₹500/plate' },
  { type: 'Premium buffet + counters', range: '₹500–₹800/plate' },
];

const priceFactors = [
  'Guest count (more guests often lowers per-plate cost)',
  'Starters + premium paneer gravies',
  'Live counters and equipment',
  'Service staff requirement',
];

const costSavingTips = [
  'Choose 2 strong starters instead of 4 average ones',
  'Keep 1 paneer + 1 seasonal veg + 1 dal (balanced)',
  'Pick one signature dessert',
];

export default function CateringCostBlogPage() {
  return (
    <>
      <JsonLd data={articleSchema} />

      <Breadcrumbs
        items={[
          { name: 'Blog', href: '/blog/' },
          { name: 'Catering Cost Per Plate', href: '/blog/catering-cost-per-plate-noida/' },
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <time className="text-sm text-gray-500">January 15, 2026</time>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-ink mt-2">
              Catering Cost Per Plate in Noida (2026) — Simple Pricing Breakdown
            </h1>
          </header>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src={IMAGES.parties.corporate}
              alt="Catering setup in Noida"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              If you&apos;re searching &quot;catering price per plate in Noida,&quot; pricing depends on guest count, menu complexity, and service style (buffet vs lunch boxes). Here&apos;s the simple breakdown.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-ink mt-10 mb-4">
              Typical Price Bands
            </h2>
            <div className="bg-background rounded-xl p-6 not-prose">
              <div className="space-y-4">
                {priceBands.map((band) => (
                  <div key={band.type} className="flex justify-between items-center border-b border-muted pb-3 last:border-0 last:pb-0">
                    <span className="text-gray-700">{band.type}</span>
                    <span className="font-semibold text-primary">{band.range}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-ink mt-10 mb-4">
              What Changes the Price Most
            </h2>
            <ul className="space-y-2">
              {priceFactors.map((factor) => (
                <li key={factor} className="flex items-start gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  {factor}
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-ink mt-10 mb-4">
              Buffet vs Lunch Boxes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              <div className="bg-background rounded-xl p-4">
                <h3 className="font-semibold text-ink mb-2">Lunch Boxes</h3>
                <p className="text-gray-600 text-sm">Best for seminars and office lunches</p>
              </div>
              <div className="bg-background rounded-xl p-4">
                <h3 className="font-semibold text-ink mb-2">Buffet</h3>
                <p className="text-gray-600 text-sm">Best for family gatherings and weddings</p>
              </div>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-ink mt-10 mb-4">
              How to Reduce Cost Without Reducing Quality
            </h2>
            <ul className="space-y-2">
              {costSavingTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 p-6 bg-primary rounded-xl text-center">
            <h3 className="font-heading text-xl font-semibold text-white mb-4">
              Get Your Exact Quote
            </h3>
            <p className="text-white/80 mb-4">
              WhatsApp your event details for exact menu + quote
            </p>
            <WhatsAppLink variant="primary">Get Quote on WhatsApp</WhatsAppLink>
          </div>

          <div className="mt-8 pt-8 border-t border-muted">
            <p className="text-sm text-gray-600 mb-4">Related pages:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/pricing/" className="text-accent hover:text-accent/80 font-medium">
                See Full Pricing
              </Link>
              <Link href="/menu/" className="text-accent hover:text-accent/80 font-medium">
                View Menu
              </Link>
              <Link href="/catering/noida-sector-63/" className="text-accent hover:text-accent/80 font-medium">
                Sector 63 Catering
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
