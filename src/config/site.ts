import { publicEnv } from './env';

/** Identité du site et liens vers le reste de l'écosystème KSP. */
export const siteConfig = {
  id: 'shop',
  name: 'KSP Shop',
  domain: 'shop.ksp.bj',
  tagline: 'La marketplace du Groupe KSP',
  description:
    'Des boutiques de confiance, un paiement sécurisé et la livraison assurée par KSP : le vendeur est payé une fois la commande livrée.',
  url: publicEnv.siteUrl,
  locale: 'fr_BJ',
  ecosystem: [
    { id: 'portail', label: 'KSP', href: publicEnv.portailUrl },
    { id: 'shop', label: 'KSP Shop', href: publicEnv.shopUrl },
    { id: 'print', label: 'KSP Print', href: publicEnv.printUrl },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Conditions générales', href: '/conditions-generales' },
    { label: 'Confidentialité', href: '/confidentialite' },
  ],
} as const;

export type SiteId = 'portail' | 'shop' | 'print';
