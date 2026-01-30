import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: 'Home', href: '/' }, ...items];

  return (
    <>
      <BreadcrumbSchema items={allItems} />
      <nav aria-label="Breadcrumb" className="bg-muted/30 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center flex-wrap gap-1 text-sm">
            {allItems.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                )}
                {index === allItems.length - 1 ? (
                  <span className="text-gray-600 font-medium">
                    {index === 0 ? <Home className="w-4 h-4" /> : item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    {index === 0 ? <Home className="w-4 h-4" /> : item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
