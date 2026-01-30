import { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import JsonLd from '@/components/seo/JsonLd';
import { IMAGES, SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';
import { Star } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Customer Reviews & Testimonials | Chef24Catering Noida',
  description:
    'Read what our customers say about Chef24Catering. Real reviews from weddings, corporate events, house parties across Noida. 4.8/5 rating from 500+ events.',
  path: '/reviews/',
});

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Chef24Catering',
  image: IMAGES.logo,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
};

const reviews = [
  {
    id: 1,
    name: 'Ankit Sharma',
    location: 'Sector 63, Noida',
    event: 'Corporate Annual Day',
    rating: 5,
    date: '2024-01-15',
    review: 'We hired Chef24Catering for our company\'s annual day celebration with 200+ employees. The food was outstanding - especially the live chaat counter which was a huge hit. Setup was done well before time, and the service staff was professional throughout. Highly recommend for corporate events!',
    image: IMAGES.parties.corporate,
  },
  {
    id: 2,
    name: 'Priya & Rahul Gupta',
    location: 'Sector 70, Noida',
    event: 'Wedding Reception',
    rating: 5,
    date: '2023-12-20',
    review: 'Chef24Catering handled our wedding reception catering for 350 guests. From the initial planning to the execution on the day, everything was seamless. The food quality was exceptional - our guests are still talking about the paneer tikka and biryani! The team managed the buffet flow perfectly even with the large crowd.',
    image: IMAGES.wedding.tiles[0],
  },
  {
    id: 3,
    name: 'Sneha Agarwal',
    location: 'Sector 64, Noida',
    event: 'Greh Pravesh Ceremony',
    rating: 5,
    date: '2024-02-08',
    review: 'We needed pure vegetarian, satvik food for our greh pravesh with Jain options for some guests. Chef24Catering understood our requirements perfectly and delivered exactly what we wanted. The food was fresh, tasty, and the presentation was beautiful. Very happy with the service!',
    image: IMAGES.grehPravesh.section,
  },
  {
    id: 4,
    name: 'Rajesh Kumar',
    location: 'Sector 63, Noida',
    event: 'Office Daily Lunch (Monthly Contract)',
    rating: 5,
    date: '2024-01-30',
    review: 'We\'ve been using Chef24Catering for our office lunch for 6 months now. The consistency in quality is what impressed us most. Fresh food delivered hot every day, with a rotating menu that keeps things interesting. The team handles our varying headcount (40-60 people daily) without any issues.',
    image: IMAGES.parties.corporate,
  },
  {
    id: 5,
    name: 'Meera Joshi',
    location: 'Sector 65, Noida',
    event: 'Birthday Party (50 guests)',
    rating: 4,
    date: '2024-02-14',
    review: 'Great experience overall for my husband\'s 50th birthday party. The food was delicious and everyone loved the starters. Only minor issue was a 15-minute delay in setup, but the team made up for it with excellent service during the event. Would definitely use again!',
    image: IMAGES.parties.birthday,
  },
  {
    id: 6,
    name: 'Vikram Singh',
    location: 'Sector 125, Noida',
    event: 'Corporate Seminar Lunch',
    rating: 5,
    date: '2023-11-25',
    review: 'Ordered packed lunches for a 100-person seminar. The boxes were neatly packed, labeled for veg/Jain options, and delivered right on time. Quality was on par with what you\'d expect at a good restaurant. Perfect solution for corporate training events.',
    image: IMAGES.parties.corporate,
  },
  {
    id: 7,
    name: 'Kavita & Suresh Bansal',
    location: 'Sector 127, Noida',
    event: 'Silver Anniversary Celebration',
    rating: 5,
    date: '2024-01-05',
    review: 'Celebrated our 25th anniversary with 100 close family members. Chef24Catering created a special menu mixing both our family\'s favorite dishes. The live tandoor counter was the highlight! Everything from starter to dessert was perfect. Made our special day even more memorable.',
    image: IMAGES.wedding.tiles[2],
  },
  {
    id: 8,
    name: 'Dr. Amit Verma',
    location: 'Sector 70, Noida',
    event: 'Society Diwali Event',
    rating: 5,
    date: '2023-11-12',
    review: 'As the RWA president, I was responsible for our society Diwali celebration catering (400+ people). Chef24Catering exceeded expectations - great food, efficient service, and they handled the large crowd smoothly. Multiple families have asked me for their contact since then!',
    image: IMAGES.venues[2],
  },
  {
    id: 9,
    name: 'Pooja Mathur',
    location: 'Sector 64, Noida',
    event: 'Kitty Party',
    rating: 5,
    date: '2024-02-20',
    review: 'Hosted my monthly kitty party with Chef24 catering and it was a hit! The pasta counter was amazing, and the presentation of the desserts was Instagram-worthy. My kitty group members were very impressed. Already planning to book them for my daughter\'s birthday.',
    image: IMAGES.parties.kitty,
  },
  {
    id: 10,
    name: 'Ashok Enterprises Team',
    location: 'Sector 63, Noida',
    event: 'Client Meeting Lunch',
    rating: 5,
    date: '2024-02-10',
    review: 'Needed impressive catering for an important client meeting. The Executive package was perfect - elegant presentation, variety of dishes, and the service staff was well-groomed and professional. Made a great impression on our clients. Worth every rupee!',
    image: IMAGES.parties.corporate,
  },
];

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: reviews.map((review, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name,
      },
      datePublished: review.date,
      reviewBody: review.review,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
      },
      itemReviewed: {
        '@type': 'LocalBusiness',
        name: 'Chef24Catering',
      },
    },
  })),
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating ? 'fill-gold text-gold' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={aggregateRatingSchema} />
      <JsonLd data={reviewSchema} />

      <Breadcrumbs items={[{ name: 'Reviews', href: '/reviews/' }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Real reviews from real events. See why families and businesses across Noida
            trust Chef24Catering for their special occasions.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-5xl font-heading font-bold text-gold">
                  {SITE_CONFIG.stats.googleRating}
                </span>
                <Star className="w-10 h-10 fill-gold text-gold" />
              </div>
              <p className="text-white/80">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-heading font-bold text-gold">
                {SITE_CONFIG.stats.eventsServed}+
              </p>
              <p className="text-white/80">Events Completed</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-heading font-bold text-gold">127</p>
              <p className="text-white/80">Written Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={review.image}
                    alt={`${review.event} by ${review.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1">
                    <span className="text-sm font-semibold text-ink">{review.event}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-ink">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-gray-600 mb-4">&quot;{review.review}&quot;</p>
                  <p className="text-sm text-gray-400">
                    {new Date(review.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Review Highlights"
            subtitle="What customers appreciate most about our service"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-xl">
              <p className="text-4xl font-heading font-bold text-accent">98%</p>
              <p className="text-gray-600 mt-2">Would Recommend</p>
            </div>
            <div className="text-center p-6 bg-background rounded-xl">
              <p className="text-4xl font-heading font-bold text-accent">96%</p>
              <p className="text-gray-600 mt-2">On-Time Delivery</p>
            </div>
            <div className="text-center p-6 bg-background rounded-xl">
              <p className="text-4xl font-heading font-bold text-accent">97%</p>
              <p className="text-gray-600 mt-2">Food Quality Rating</p>
            </div>
            <div className="text-center p-6 bg-background rounded-xl">
              <p className="text-4xl font-heading font-bold text-accent">95%</p>
              <p className="text-gray-600 mt-2">Service Staff Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join hundreds of satisfied customers who chose Chef24Catering
          </p>
          <WhatsAppLink variant="primary">Get Your Free Quote</WhatsAppLink>
        </div>
      </section>
    </>
  );
}
