'use client';

import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/whatsapp';

interface WhatsAppLinkProps {
  children?: React.ReactNode;
  className?: string;
  message?: string;
  variant?: 'primary' | 'secondary' | 'text';
}

export default function WhatsAppLink({
  children,
  className = '',
  message,
  variant = 'primary',
}: WhatsAppLinkProps) {
  const baseUrl = generateWhatsAppLink();
  const url = message
    ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '919876543210'}?text=${encodeURIComponent(message)}`
    : baseUrl;

  const variantClasses = {
    primary:
      'bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors',
    secondary:
      'bg-white hover:bg-gray-50 text-accent border-2 border-accent px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors',
    text: 'text-accent hover:text-accent/80 inline-flex items-center gap-2 font-medium transition-colors',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children || 'WhatsApp: Get Menu + Quote'}
    </a>
  );
}
