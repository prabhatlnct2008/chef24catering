'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQSchema from '@/components/seo/FAQSchema';
import { SITE_CONFIG } from '@/lib/constants';

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'What is the starting price per plate in Noida?',
    answer: `Packages start from ₹${SITE_CONFIG.pricing.starting}/plate depending on menu and guest count.`,
  },
  {
    question: 'Do you provide Jain catering?',
    answer:
      'Yes — no onion, no garlic options are available with advance notice.',
  },
  {
    question: 'Do you provide service staff and buffet setup?',
    answer: 'Yes — staff and setup are included as per package/service type.',
  },
  {
    question: 'How do we book?',
    answer:
      "Send date + guests + location on WhatsApp. We'll share menus + pricing and confirm availability.",
  },
];

interface FAQProps {
  faqs?: FAQItem[];
  title?: string;
}

export default function FAQ({ faqs = defaultFAQs, title = 'FAQs' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-background">
      <FAQSchema faqs={faqs} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-ink pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
