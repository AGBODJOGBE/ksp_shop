import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/config/site';
import { getDictionary } from '@/i18n';

/** Fonctionnalités prévues (spécification des fronts). Page d'accueil provisoire, remplacée au lot concerné. */
const PLANNED: ReadonlyArray<{ title: string; text: string }> = [
  {
    title: 'Catalogue et recherche',
    text: 'Trouvez un produit par catégorie, prix ou boutique.',
  },
  {
    title: 'Paiement sécurisé',
    text: 'Mobile Money ou carte ; votre argent est protégé jusqu’à la livraison.',
  },
  {
    title: 'Livraison KSP',
    text: 'Suivez votre commande jusqu’à votre porte.',
  },
  {
    title: 'Espace vendeur',
    text: 'Ouvrez votre boutique, gérez vos produits, commandes et reversements.',
  },
];

export default function HomePage() {
  const t = getDictionary();
  return (
    <>
      <section className="bg-brand-50">
        <Container className="py-16 sm:py-24">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase">{siteConfig.domain}</p>
          <h1 className="text-brand-900 mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            {siteConfig.tagline}
          </h1>
          <p className="text-ink-muted mt-4 max-w-2xl text-lg">{siteConfig.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#bientot" variant="accent">
              {t.common.comingSoon}
            </ButtonLink>
          </div>
        </Container>
      </section>
      <section id="bientot" aria-labelledby="bientot-titre">
        <Container className="py-14">
          <h2 id="bientot-titre" className="text-2xl font-bold">
            {t.common.comingSoon}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PLANNED.map((item) => (
              <li key={item.title} className="border-line rounded-card border p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-ink-muted mt-2 text-sm">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
