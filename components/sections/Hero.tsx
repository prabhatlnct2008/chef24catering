import Image from 'next/image';
import WhatsAppLink from '@/components/shared/WhatsAppLink';
import CallLink from '@/components/shared/CallLink';
import TrustStrip from '@/components/ui/TrustStrip';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  showTrustStrip?: boolean;
  showCTA?: boolean;
  microcopy?: string;
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  showTrustStrip = true,
  showCTA = true,
  microcopy,
  children,
}: HeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}

        {showTrustStrip && (
          <div className="mt-8">
            <TrustStrip />
          </div>
        )}

        {showCTA && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppLink variant="primary">
              Get Menu + Price Per Plate
            </WhatsAppLink>
            <CallLink variant="secondary">Call Now for Availability</CallLink>
          </div>
        )}

        {microcopy && (
          <p className="mt-6 text-sm text-white/70 max-w-xl mx-auto">
            {microcopy}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
