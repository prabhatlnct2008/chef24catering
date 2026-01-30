import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `Catering Service in Noida (Sector 63-65, 70, 125, 127) | ${SITE_CONFIG.name}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'Premium veg & multi-cuisine catering in Noida. Packages from ₹250/plate. House parties, corporate events, weddings & bhandara. WhatsApp for menu + instant quote.',
  keywords: [
    'catering noida',
    'caterer noida',
    'wedding catering noida',
    'party catering noida',
    'corporate catering noida',
    'veg catering noida',
    'catering sector 63',
    'catering sector 64',
    'catering sector 65',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `Catering Service in Noida | ${SITE_CONFIG.name}`,
    description:
      'Premium veg & multi-cuisine catering in Noida. Packages from ₹250/plate.',
    images: [
      {
        url: 'https://chef24catering.in/images/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Chef24Catering - Premium Catering in Noida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Catering Service in Noida | ${SITE_CONFIG.name}`,
    description:
      'Premium veg & multi-cuisine catering in Noida. Packages from ₹250/plate.',
    images: ['https://chef24catering.in/images/banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <LocalBusinessSchema />
        <Header />
        <main className="pt-20 md:pt-28 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
