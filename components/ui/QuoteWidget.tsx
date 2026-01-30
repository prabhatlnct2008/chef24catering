'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const eventTypes = [
  'House Party',
  'Corporate',
  'Wedding',
  'Bhandara',
  'Greh Pravesh',
  'Other',
];

export default function QuoteWidget() {
  const [eventType, setEventType] = useState('');
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi Chef24Catering 👋 I need catering in Noida. Event: ${eventType || 'Not specified'}. Guests: ${guests || 'Not specified'}. Date: ${date || 'Not specified'}. Veg/Jain: Veg. Please share packages + per-plate price + available menus.`;

    const url = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background rounded-2xl p-6 md:p-8 shadow-lg border border-muted">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-center text-ink mb-2">
            Get a Quick Quote
          </h2>
          <p className="text-center text-gray-600 mb-6">
            No spam — just pricing + menu
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="eventType"
                  className="block text-sm font-medium text-ink mb-1"
                >
                  Event Type
                </label>
                <select
                  id="eventType"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-muted focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                  required
                >
                  <option value="">Select event</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-ink mb-1"
                >
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="e.g., 100"
                  min="1"
                  className="w-full px-4 py-3 rounded-lg border border-muted focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-ink mb-1"
                >
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-muted focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Send on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
