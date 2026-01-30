'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import CallLink from '@/components/shared/CallLink';
import { IMAGES } from '@/lib/constants';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/menu/', label: 'Menu' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={IMAGES.logo}
              alt="Chef24Catering Logo"
              width={150}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <WhatsAppLink variant="primary">Get Quote</WhatsAppLink>
            <CallLink variant="secondary">Call Now</CallLink>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-ink"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <p className="hidden md:block text-center text-sm text-gray-600 pb-2 border-t border-muted pt-2">
          Quick response • Transparent pricing • Hygienic setup
        </p>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-muted">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-muted">
              <WhatsAppLink variant="primary">Get Quote</WhatsAppLink>
              <CallLink variant="secondary">Call Now</CallLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
