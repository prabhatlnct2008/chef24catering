import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import WhatsAppLink from '@/components/shared/WhatsAppLink';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="font-heading text-6xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl font-semibold text-ink mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
          been moved or doesn&apos;t exist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <WhatsAppLink variant="secondary">Contact Us</WhatsAppLink>
        </div>

        <div className="mt-8 pt-8 border-t border-muted">
          <p className="text-sm text-gray-600 mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pricing/"
              className="text-accent hover:text-accent/80 font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/menu/"
              className="text-accent hover:text-accent/80 font-medium"
            >
              Menu
            </Link>
            <Link
              href="/gallery/"
              className="text-accent hover:text-accent/80 font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/contact/"
              className="text-accent hover:text-accent/80 font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
