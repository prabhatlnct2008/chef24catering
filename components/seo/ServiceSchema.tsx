import { SITE_CONFIG } from '@/lib/constants';
import JsonLd from './JsonLd';

interface ServiceSchemaProps {
  name: string;
  description: string;
  price?: number;
}

export default function ServiceSchema({
  name,
  description,
  price = SITE_CONFIG.pricing.starting,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_CONFIG.url}/#business`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Noida',
    },
    description,
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: price.toString(),
        priceCurrency: 'INR',
        unitText: 'per plate',
      },
    },
  };

  return <JsonLd data={schema} />;
}
