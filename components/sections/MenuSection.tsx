import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import WhatsAppLink from '@/components/shared/WhatsAppLink';

interface MenuCategory {
  title: string;
  items: string[];
}

const menuCategories: MenuCategory[] = [
  {
    title: 'Starters',
    items: ['Paneer Tikka', 'Hara Bhara Kebab', 'Crispy Veg', 'Dahi ke Sholay'],
  },
  {
    title: 'Mains',
    items: ['Shahi Paneer', 'Dal Makhani', 'Seasonal Mix Veg', 'Chole/Rajma'],
  },
  {
    title: 'Rice & Breads',
    items: ['Jeera Rice', 'Veg Biryani', 'Tandoori Roti', 'Naan'],
  },
  {
    title: 'Desserts',
    items: ['Gulab Jamun', 'Rasmalai', 'Kulfi', 'Jalebi'],
  },
];

interface MenuSectionProps {
  showFull?: boolean;
}

export default function MenuSection({ showFull = false }: MenuSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={showFull ? 'Most Ordered Veg Menu' : 'Veg / Jain / Custom Menus + Live Counters'}
          subtitle={showFull ? 'Balanced & crowd-friendly options for every event' : undefined}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-4 pb-2 border-b border-muted">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {showFull && (
          <>
            <div className="mt-12 bg-white rounded-xl p-6 md:p-8 shadow-md">
              <h3 className="font-heading text-2xl font-semibold text-ink mb-4">
                Jain / Sattvik Menu (No Onion, No Garlic)
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="text-gray-700">• Jain paneer gravy options</li>
                <li className="text-gray-700">• Jain seasonal sabzi</li>
                <li className="text-gray-700">• Dal (as per Jain preference)</li>
                <li className="text-gray-700">• Rice + roti</li>
                <li className="text-gray-700">• Light dessert</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600 italic">
                Note: If you need separate prep, tell us in advance.
              </p>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 md:p-8 shadow-md">
              <h3 className="font-heading text-2xl font-semibold text-ink mb-4">
                Live Counters (Optional Add-ons)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  'Chaat Counter',
                  'Tandoor Counter',
                  'Pasta Counter',
                  'Mocktail Station',
                  'Dessert Counter',
                ].map((counter) => (
                  <div
                    key={counter}
                    className="bg-background rounded-lg p-4 text-center"
                  >
                    <span className="text-ink font-medium">{counter}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="mt-10 text-center">
          {showFull ? (
            <WhatsAppLink variant="primary">
              Get Complete Menu PDF + Package Pricing
            </WhatsAppLink>
          ) : (
            <Link
              href="/menu/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              See Full Menu →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
