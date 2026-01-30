import { SITE_CONFIG } from './constants';

interface WhatsAppMessageParams {
  eventType?: string;
  guests?: string;
  date?: string;
  sector?: string;
  preference?: string;
}

export function generateWhatsAppLink(params?: WhatsAppMessageParams): string {
  const baseUrl = `https://wa.me/${SITE_CONFIG.whatsapp}`;

  if (!params) {
    return `${baseUrl}?text=${encodeURIComponent('Hi Chef24Catering, I would like to know more about your catering services.')}`;
  }

  const { eventType, guests, date, sector, preference } = params;

  const message = `Hi Chef24Catering 👋 I need catering${sector ? ` in ${sector}` : ' in Noida'}. Event: ${eventType || 'Not specified'}. Guests: ${guests || 'Not specified'}. Date: ${date || 'Not specified'}. Veg/Jain: ${preference || 'Veg'}. Please share packages + per-plate price + available menus.`;

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

export function generatePackageWhatsAppLink(packageName: string): string {
  const message = `Hi Chef24Catering, I'm interested in the ${packageName} package. Please share more details and pricing.`;
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}
