import Image from 'next/image';
import { Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { IMAGES } from '@/lib/constants';

const features = [
  'Menu planning support',
  'Professional service staff',
  'On-time setup and smooth flow',
  'Hygienic food preparation',
  'Custom menu options',
];

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={IMAGES.about}
              alt="Chef24Catering team preparing food"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <SectionHeading
              title="About Chef24Catering"
              centered={false}
            />

            <p className="text-lg text-gray-700 mb-6">
              We&apos;re focused on taste, hygiene, and calm execution — so your
              guests enjoy and you don&apos;t have to manage chaos.
            </p>

            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
