import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { IMAGES } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Catering Tips & Guides | Chef24Catering Blog',
  description:
    'Expert catering tips for Noida events. Pricing guides, menu ideas, corporate catering checklists. Learn from Chef24Catering.',
  path: '/blog/',
});

const blogPosts = [
  {
    title: 'Budget Catering Tips — How to Save Money Without Sacrificing Quality',
    excerpt:
      'Smart strategies to reduce catering costs while keeping guests happy. Menu planning, timing, negotiation, and avoiding common budget mistakes.',
    slug: 'budget-catering-tips',
    image: IMAGES.parties.corporate,
    date: '2026-01-28',
  },
  {
    title: 'Live Counter Ideas for Parties — Chaat, Tandoor, Pasta, Mocktails & More',
    excerpt:
      'Complete guide to live counters for parties and weddings. Popular options, pricing, best combinations, and setup tips.',
    slug: 'live-counter-ideas-parties',
    image: IMAGES.parties.mocktail,
    date: '2026-01-25',
  },
  {
    title: 'Jain Menu Ideas for Events — Weddings, Parties & Functions',
    excerpt:
      'Delicious Jain catering menus for every occasion. Sample menus, popular dishes, and tips for planning Jain-friendly events.',
    slug: 'jain-menu-ideas-events',
    image: IMAGES.services.bhandara,
    date: '2026-01-22',
  },
  {
    title: 'Complete Wedding Catering Checklist 2026 — Your Ultimate Planning Guide',
    excerpt:
      'Everything you need to plan perfect wedding catering, from choosing a caterer to execution day. Timeline, menu planning, and budget tips.',
    slug: 'wedding-catering-checklist',
    image: IMAGES.wedding.hero,
    date: '2026-01-20',
  },
  {
    title: 'How to Choose the Right Caterer in Noida — Complete Guide 2026',
    excerpt:
      '15 essential questions to ask, red flags to avoid, and a proven evaluation framework to find your perfect catering partner.',
    slug: 'how-to-choose-caterer-noida',
    image: IMAGES.parties.corporate,
    date: '2026-01-18',
  },
  {
    title: 'Catering Cost Per Plate in Noida (2026) — Simple Pricing Breakdown',
    excerpt:
      'Understand what affects catering prices in Noida. Complete breakdown of per-plate costs for different event types.',
    slug: 'catering-cost-per-plate-noida',
    image: IMAGES.parties.corporate,
    date: '2026-01-15',
  },
  {
    title: 'Corporate Catering in Noida (Sector 63–65): Zero-Chaos Office Checklist',
    excerpt:
      'Everything you need to know about organizing corporate catering. Sample menus, hygiene tips, and booking guide.',
    slug: 'corporate-catering-noida-sector-63-65',
    image: IMAGES.parties.mocktail,
    date: '2026-01-10',
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog/' }]} />

      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Catering Tips & Guides"
            subtitle="Expert advice for planning your perfect event"
          />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${post.slug}/`} className="block md:flex">
                  <div className="relative h-48 md:h-auto md:w-64 flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 256px"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-gray-500">{post.date}</time>
                    <h2 className="font-heading text-xl font-semibold text-ink mt-1 mb-2 hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <span className="inline-block mt-4 text-accent font-medium">
                      Read more →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
