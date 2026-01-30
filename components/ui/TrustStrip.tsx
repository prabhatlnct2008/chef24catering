import { Star, UtensilsCrossed, ShieldCheck, ChefHat } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function TrustStrip() {
  const stats = [
    {
      icon: Star,
      value: `${SITE_CONFIG.stats.googleRating}/5`,
      label: 'Rating',
    },
    {
      icon: UtensilsCrossed,
      value: `${SITE_CONFIG.stats.eventsServed}+`,
      label: 'Events',
    },
    {
      icon: ShieldCheck,
      value: 'Hygienic',
      label: 'Prep',
    },
    {
      icon: ChefHat,
      value: 'Experienced',
      label: 'Team',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-2 text-white/90">
          <stat.icon className="w-5 h-5 text-gold" />
          <span className="font-semibold">{stat.value}</span>
          <span className="text-white/70">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
