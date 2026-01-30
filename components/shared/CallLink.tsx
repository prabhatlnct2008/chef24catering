import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface CallLinkProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'text';
}

export default function CallLink({
  children,
  className = '',
  variant = 'secondary',
}: CallLinkProps) {
  const variantClasses = {
    primary:
      'bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors',
    secondary:
      'bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors',
    text: 'text-primary hover:text-primary/80 inline-flex items-center gap-2 font-medium transition-colors',
  };

  return (
    <a
      href={`tel:${SITE_CONFIG.phone}`}
      className={`${variantClasses[variant]} ${className}`}
    >
      <Phone className="w-5 h-5" />
      {children || 'Call Now'}
    </a>
  );
}
