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
  title: 'Corporate Catering in Noida Sector 63-65 | Office Event Checklist',
  description:
    'Corporate catering guide for Noida offices. Sample menus, hygiene checklist, booking tips for Sector 63-65 companies.',
  path: '/blog/corporate-catering-noida-sector-63-65/',
  image: IMAGES.parties.corporate,
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Corporate Catering in Noida (Sector 63–65): Zero-Chaos Office Checklist',
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
  datePublished: '2026-01-10',
  dateModified: '2026-01-10',
};

const formatOptions = [
  { name: 'Lunch boxes', desc: 'Best for seminars' },
  { name: 'Pantry buffet', desc: 'Best for celebrations' },
  { name: 'Evening snacks + counter', desc: 'Best for parties' },
];

const menuA = [
  '1 paneer gravy',
  '1 dal',
  '1 seasonal veg',
  'Rice + breads',
  'Salad + dessert',
];

const menuB = [
  '2 starters',
  '2 mains + dal',
  'Rice/biryani + breads',
  'Dessert',
];

const hygieneChecklist = [
  'Gloves + hairnets',
  'Labeled serving spoons',
  'Controlled serving line',
  'Quick cleanup plan',
];

export default function CorporateCateringBlogPage() {
  return (
    <>
      <JsonLd data={articleSchema} />

      <Breadcrumbs
        items={[
          { name: 'Blog', href: '/blog/' },
          { name: 'Corporate Catering Guide', href: '/blog/corporate-catering-noida-sector-63-65/' },
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <time className="text-sm text-gray-500">January 10, 2026</time>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-ink mt-2">
              Corporate Catering in Noida (Sector 63–65): Zero-Chaos Office Checklist
            </h1>
          </header>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src={IMAGES.parties.corporate}
              alt="Corporate catering setup"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Offices don&apos;t want fancy — they want on-time service, clean setup, smooth serving flow, and consistent taste.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-ink mt-10 mb-4">
              Choose the Right Format
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
              {formatOptions.map((option) => (
                <div key={option.name} className="bg-background rounded-xl p-4 text-center">
                  <h3 className="font-semibold text-ink">{option.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{option.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-semibold text-ink mt-10 mb-4">
              Sample Menus (Copy-Paste)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              <div className="bg-background rounded-xl p-6">
                <h3 className="font-semibold text-ink mb-3">Menu A: Office Lunch</h3>
                <ul className="space-y-2">
                  {menuA.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background rounded-xl p-6">
                <h3 className="font-semibold text-ink mb-3">Menu B: Celebration Buffet</h3>
                <ul className="space-y-2">
                  {menuB.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-ink mt-10 mb-4">
              Hygiene & Execution Checklist
            </h2>
            <div className="bg-white border border-muted rounded-xl p-6 not-prose">
              <ul className="grid grid-cols-2 gap-3">
                {hygieneChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <span className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center text-accent text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden my-8">
              <Image
                src={IMAGES.parties.mocktail}
                alt="Corporate event mocktail counter"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary rounded-xl text-center">
            <h3 className="font-heading text-xl font-semibold text-white mb-4">
              Plan Your Corporate Event
            </h3>
            <p className="text-white/80 mb-4">
              WhatsApp your office event details for menu + pricing
            </p>
            <WhatsAppLink variant="primary">Get Corporate Quote</WhatsAppLink>
          </div>

          <div className="mt-8 pt-8 border-t border-muted">
            <p className="text-sm text-gray-600 mb-4">Related pages:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/catering/noida-sector-63/" className="text-accent hover:text-accent/80 font-medium">
                Sector 63 Catering
              </Link>
              <Link href="/catering/noida-sector-64/" className="text-accent hover:text-accent/80 font-medium">
                Sector 64 Catering
              </Link>
              <Link href="/catering/noida-sector-65/" className="text-accent hover:text-accent/80 font-medium">
                Sector 65 Catering
              </Link>
              <Link href="/pricing/" className="text-accent hover:text-accent/80 font-medium">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
