import { SITE_CONFIG, SECTORS } from '@/lib/constants';
import JsonLd from './JsonLd';

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    image: 'https://chef24catering.in/images/logo.jpg',
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.5355',
      longitude: '77.3910',
    },
    url: SITE_CONFIG.url,
    priceRange: '$$',
    servesCuisine: ['Indian', 'Vegetarian', 'Jain'],
    areaServed: SECTORS.map((s) => `Noida ${s.name}`),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '22:00',
    },
  };

  return <JsonLd data={schema} />;
}
