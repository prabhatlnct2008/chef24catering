import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

interface GenerateMetadataParams {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  image = 'https://chef24catering.in/images/banner.jpg',
}: GenerateMetadataParams): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
