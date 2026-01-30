import { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import FAQSchema from '@/components/seo/FAQSchema';
import { SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Frequently Asked Questions | Catering in Noida | Chef24Catering',
  description:
    'Find answers to common questions about catering services in Noida. Pricing, booking, menu options, dietary requirements, and more. Chef24Catering FAQ.',
  path: '/faq/',
});

const faqCategories = [
  {
    title: 'Pricing & Packages',
    faqs: [
      {
        question: 'What is the starting price per plate for catering in Noida?',
        answer: `Our packages start from ₹${SITE_CONFIG.pricing.essential}/plate for basic catering. The exact price depends on menu selection, guest count, and service requirements. We offer three main packages: Essential (₹${SITE_CONFIG.pricing.essential}/plate), Signature (₹${SITE_CONFIG.pricing.signature}/plate), and Royal (₹${SITE_CONFIG.pricing.royal}/plate).`,
      },
      {
        question: 'Is GST included in your catering prices?',
        answer: 'Yes, all our quoted prices are inclusive of GST. There are no hidden charges. The price we quote is the final price you pay.',
      },
      {
        question: 'Do you charge extra for service staff?',
        answer: 'Basic service is included in all packages. For premium packages (Signature and Royal), dedicated uniformed service staff is included. For Essential package, service staff can be added at ₹300-500 per staff member depending on event duration.',
      },
      {
        question: 'What is your minimum order requirement?',
        answer: 'Minimum order is 20 plates for buffet catering with setup, or 15 plates for delivery-only orders. For live counters and premium setups, minimum is 50 guests.',
      },
      {
        question: 'Do you offer discounts for large events?',
        answer: 'Yes, we offer volume discounts for events with 100+ guests. Corporate clients with monthly contracts also receive 10-15% discount on regular prices. Contact us for a custom quote.',
      },
      {
        question: 'What is your cancellation and refund policy?',
        answer: 'Cancellation 7+ days before event: Full refund minus 10% processing fee. 3-7 days before: 50% refund. Less than 3 days: No refund, but we can reschedule to another date within 30 days subject to availability.',
      },
    ],
  },
  {
    title: 'Booking & Process',
    faqs: [
      {
        question: 'How far in advance should I book catering?',
        answer: 'We recommend booking 1-2 weeks in advance for small events (under 50 guests) and 2-4 weeks for larger events. For weddings and major functions, 1-2 months advance booking is advisable, especially during wedding season (October-February).',
      },
      {
        question: 'How do I book your catering service?',
        answer: 'Simply WhatsApp us with your event date, guest count, and location. We\'ll send you menu options and pricing. Once you confirm the menu, we take a 30% advance to block your date. Balance is paid on the day of the event.',
      },
      {
        question: 'Do you offer same-day or emergency catering?',
        answer: 'Yes, for events up to 50 guests, we can accommodate same-day requests if you order before 10 AM. Availability depends on our current bookings. Emergency catering may have a 10-15% surcharge.',
      },
      {
        question: 'Can I customize the menu?',
        answer: 'Absolutely! Our menus are fully customizable. You can mix dishes from different packages, add special items, request specific recipes, or create an entirely custom menu. We\'ll work with you to create the perfect menu for your event.',
      },
      {
        question: 'Do you provide tasting before booking?',
        answer: 'For events of 100+ guests or wedding bookings, we offer a paid tasting session (₹2000-3000 for 2-4 people) which is adjusted against the final bill upon confirmation. For smaller events, we can arrange tasting at our facility.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major payment methods: Cash, UPI (Google Pay, PhonePe, Paytm), Bank Transfer (NEFT/IMPS), and Cheque (for corporate clients). Credit/debit cards accepted for advance payment.',
      },
    ],
  },
  {
    title: 'Menu & Dietary Options',
    faqs: [
      {
        question: 'Do you offer Jain catering (no onion, no garlic)?',
        answer: 'Yes, we specialize in Jain catering. Our Jain menu excludes onion, garlic, and root vegetables. We use separate utensils for Jain food preparation to avoid cross-contamination. Many families in Noida regularly order our Jain menu.',
      },
      {
        question: 'Do you provide non-vegetarian catering?',
        answer: 'Currently, we specialize in vegetarian and Jain catering only. This allows us to maintain the highest standards of hygiene and taste. For events requiring non-veg options, we can recommend trusted partners.',
      },
      {
        question: 'Can you accommodate allergies and dietary restrictions?',
        answer: 'Yes, we can accommodate most dietary restrictions including gluten-free, nut-free, dairy-free, and low-oil/low-spice options. Please inform us at the time of booking so we can plan accordingly.',
      },
      {
        question: 'What live counters do you offer?',
        answer: 'Popular live counters include: Chaat Counter (papdi, tikki, dahi bhalla), Tandoor Counter (naan, kulcha, roti), Pasta/Chinese Counter, Dosa Counter, Pav Bhaji Counter, and Dessert Counters (jalebi, kulfi, ice cream). Each counter requires minimum 50 guests.',
      },
      {
        question: 'Do you provide beverages and drinks?',
        answer: 'Yes, we offer welcome drinks, mocktails, fresh juices, lassi, chaas, and hot beverages (tea, coffee). Soft drinks and packaged water can also be arranged. Alcohol service is not provided.',
      },
      {
        question: 'Can you replicate a specific dish or family recipe?',
        answer: 'Yes! If you have a special family recipe or want to replicate a dish from a specific restaurant, share the details with us. Our chefs will do their best to recreate it. Trial runs can be arranged for complex recipes.',
      },
    ],
  },
  {
    title: 'Service & Setup',
    faqs: [
      {
        question: 'Do you provide crockery, cutlery, and serving equipment?',
        answer: 'Yes, we provide complete setup including chafing dishes, serving spoons, buffet tables, buffet runners, and basic crockery. Premium crockery and themed setups are available at additional cost.',
      },
      {
        question: 'How many service staff do you provide per guest?',
        answer: 'Standard ratio is 1 service staff per 30-40 guests for buffet service. For seated service or premium events, we recommend 1 staff per 15-20 guests. We can adjust based on your event requirements.',
      },
      {
        question: 'Do you handle setup and cleanup?',
        answer: 'Yes, our team arrives 1-2 hours before serving time for complete setup. After the event, we handle full cleanup of the catering area, pack our equipment, and ensure the space is left clean. Disposal of food waste is also handled by us.',
      },
      {
        question: 'Can you cater at any venue?',
        answer: 'Yes, we cater at homes, apartments, society common areas, farmhouses, banquet halls, offices, terraces, and outdoor locations. We bring all necessary equipment. For venues without kitchen access, we prepare food at our facility and transport in insulated containers.',
      },
      {
        question: 'What if there are more guests than expected?',
        answer: 'We always prepare 5-10% extra food as buffer. For larger variations, inform us at least 4-6 hours before serving time, and we can adjust quantities. Last-minute additions may be possible depending on the menu items.',
      },
      {
        question: 'How do you ensure food stays fresh and hot?',
        answer: 'We use insulated food transport containers, chafing dishes with fuel burners for hot food, and proper cold chain for items requiring refrigeration. Food is prepared as close to serving time as possible to ensure maximum freshness.',
      },
    ],
  },
  {
    title: 'Corporate & Regular Catering',
    faqs: [
      {
        question: 'Do you offer daily office lunch catering?',
        answer: 'Yes, we offer daily, weekly, and monthly office lunch subscriptions. Menu rotates to avoid repetition. Minimum order is 10 meals per day. Corporate clients get dedicated account managers and flexible payment terms.',
      },
      {
        question: 'Can you provide packed lunch boxes for seminars?',
        answer: 'Yes, we offer hygienic packed meals in disposable or returnable containers. Options include thali-style boxes, biryani boxes, and combo meal boxes. Labels can include dietary information (Jain/Regular) for easy distribution.',
      },
      {
        question: 'Do you cater for corporate events on weekends?',
        answer: 'Yes, we cater for corporate events any day of the week. Weekend events, team outings, annual days, and off-site meetings are common. Early booking recommended for weekend dates.',
      },
      {
        question: 'Can you set up food stalls for corporate carnivals?',
        answer: 'Yes, we can set up multiple food stalls/counters for corporate carnivals and large events. Each stall is manned by our staff and can have themed presentation. Perfect for annual days, family days, and festival celebrations.',
      },
    ],
  },
  {
    title: 'Wedding & Large Events',
    faqs: [
      {
        question: 'Do you handle catering for all wedding functions?',
        answer: 'Yes, we cater for all wedding-related functions: Engagement, Roka, Haldi, Mehendi, Sangeet, Wedding Day, and Reception. Each function can have a different menu tailored to its vibe and guest count.',
      },
      {
        question: 'Can you coordinate with wedding planners and decorators?',
        answer: 'Absolutely. We regularly work with wedding planners and decorators in Noida. We coordinate on timing, setup space, color themes for buffet presentation, and overall event flow. Seamless coordination is our priority.',
      },
      {
        question: 'Do you provide catering at destination weddings?',
        answer: 'Yes, we can travel for destination weddings within NCR and nearby areas (up to 100km from Noida). For farther destinations, additional charges for travel and accommodation apply. Advance planning is essential.',
      },
      {
        question: 'What\'s included in your wedding catering packages?',
        answer: 'Wedding packages include: Menu planning consultation, food preparation, complete buffet setup, uniformed service staff, crockery and serving equipment, live counters (as selected), and post-event cleanup. Decoration of buffet area is included in premium packages.',
      },
    ],
  },
];

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap((category) => category.faqs);

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={allFaqs} />

      <Breadcrumbs items={[{ name: 'FAQ', href: '/faq/' }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about our catering services. Can&apos;t find your answer?
            WhatsApp us anytime!
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-background border-b border-muted sticky top-20 md:top-28 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((category) => (
              <a
                key={category.title}
                href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-ink hover:bg-accent hover:text-white transition-colors"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category) => (
            <div
              key={category.title}
              id={category.title.toLowerCase().replace(/\s+/g, '-')}
              className="mb-16 scroll-mt-40"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-ink mb-6">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-background rounded-xl shadow-sm group"
                  >
                    <summary className="p-6 cursor-pointer font-semibold text-ink flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-accent group-open:rotate-180 transition-transform flex-shrink-0">
                        ▼
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Still Have Questions?"
            subtitle="We're here to help. Reach out to us anytime."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppLink variant="primary">WhatsApp Us</WhatsAppLink>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Explore More"
            subtitle="Learn more about our services and offerings"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/pricing/"
              className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Pricing & Packages
              </h3>
              <p className="text-gray-600">
                View detailed pricing for all our catering packages and add-ons.
              </p>
            </Link>
            <Link
              href="/menu/"
              className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                Full Menu
              </h3>
              <p className="text-gray-600">
                Explore our complete menu with veg, Jain, and live counter options.
              </p>
            </Link>
            <Link
              href="/about/"
              className="bg-background rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                About Us
              </h3>
              <p className="text-gray-600">
                Learn about our story, team, and commitment to quality.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
