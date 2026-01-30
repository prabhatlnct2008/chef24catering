import { Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

interface Testimonial {
  text: string;
  author: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    text: 'Food quality and service were excellent. Guests loved the starters.',
    author: 'Rahul S.',
    location: 'Noida',
    rating: 5,
  },
  {
    text: 'On-time setup and clean serving. Smooth experience throughout the event.',
    author: 'Priya M.',
    location: 'Noida',
    rating: 5,
  },
  {
    text: 'Great taste and polite staff. Highly recommended for family functions.',
    author: 'Amit K.',
    location: 'Noida',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Clients Say"
          className="text-white [&_h2]:text-white"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-gold/30" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-gold fill-gold"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>

              <div className="border-t border-muted pt-4">
                <p className="font-semibold text-ink">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
