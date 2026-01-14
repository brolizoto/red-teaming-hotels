import { useAuth } from "@/_core/hooks/useAuth";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation } from '@/components/Navigation';
import { ContactFormModal } from '@/components/ContactFormModal';
import { SEO } from "@/components/SEO";

export default function WeitereEinsatzfelder() {
  const { t } = useTranslation();
  const [contactFormOpen, setContactFormOpen] = useState(false);
  
  const seoData = {
    title: t('otherFields.hero.title'),
    description: t('otherFields.hero.description'),
    canonical: "https://redteaming.ch/weitere-einsatzfelder",
  };

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation onRequestCall={() => setContactFormOpen(true)} />
        <ContactFormModal isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />

        {/* Hero Section */}
        <section className="container py-16 md:py-24">
          <div className="accent-line mb-8"></div>
          <h1 className="text-display mb-6">{t('otherFields.hero.title')}</h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-3xl">
            {t('otherFields.hero.subtitle')}
          </p>
          <p className="text-base text-muted-foreground mb-8 max-w-3xl">
            {t('otherFields.hero.description')}
          </p>
        </section>

        <div className="section-divider"></div>

        {/* Fire Protection */}
        <section className="container py-16 md:py-24">
          <div className="accent-line mb-8"></div>
          <h2 className="text-heading mb-6">{t('otherFields.fire.title')}</h2>
          <p className="text-base text-muted-foreground mb-6 max-w-3xl">
            {t('otherFields.fire.description')}
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground max-w-2xl mb-6">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.fire.item1')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.fire.item2')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.fire.item3')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.fire.item4')}</span>
            </li>
          </ul>
          <div className="bg-card border border-border p-6 rounded-lg max-w-2xl">
            <p className="text-xs text-muted-foreground">
              <span className="font-bold">{t('otherFields.fire.note').split(':')[0]}:</span>
              {' ' + t('otherFields.fire.note').split(':')[1]}
            </p>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Evacuation */}
        <section className="container py-16 md:py-24">
          <div className="accent-line mb-8"></div>
          <h2 className="text-heading mb-6">{t('otherFields.evacuation.title')}</h2>
          <p className="text-base text-muted-foreground mb-6 max-w-3xl">
            {t('otherFields.evacuation.description')}
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground max-w-2xl">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.evacuation.item1')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.evacuation.item2')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.evacuation.item3')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.evacuation.item4')}</span>
            </li>
          </ul>
        </section>

        <div className="section-divider"></div>

        {/* Crisis Management */}
        <section className="container py-16 md:py-24">
          <div className="accent-line mb-8"></div>
          <h2 className="text-heading mb-6">{t('otherFields.crisis.title')}</h2>
          <p className="text-base text-muted-foreground mb-6 max-w-3xl">
            {t('otherFields.crisis.description')}
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground max-w-2xl">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.crisis.item1')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.crisis.item2')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.crisis.item3')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.crisis.item4')}</span>
            </li>
          </ul>
        </section>

        <div className="section-divider"></div>

        {/* Authority Controls */}
        <section className="container py-16 md:py-24">
          <div className="accent-line mb-8"></div>
          <h2 className="text-heading mb-6">{t('otherFields.authority.title')}</h2>
          <p className="text-base text-muted-foreground mb-6 max-w-3xl">
            {t('otherFields.authority.description')}
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground max-w-2xl">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.authority.item1')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.authority.item2')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.authority.item3')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('otherFields.authority.item4')}</span>
            </li>
          </ul>
        </section>

        <div className="section-divider"></div>

        {/* Footer */}
        <footer id="contact" className="bg-card border-t border-border">
          <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="text-primary font-bold text-lg mb-2">RED TEAMING</div>
                <div className="text-sm text-muted-foreground">{t('footer.tagline')}</div>
              </div>
              <div className="flex flex-col md:flex-row gap-12 md:gap-16 md:justify-end">
                <div>
                  <h3 className="font-bold text-foreground mb-4">{t('footer.location')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('footer.address')}<br />
                    {t('footer.city')}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-4">{t('footer.contact')}</h3>
                  <p className="text-sm text-muted-foreground">
                    <a href="mailto:contact@redteaming.ch" className="hover:text-primary transition-colors">
                      contact@redteaming.ch
                    </a><br />
                    <a href="tel:+41787401929" className="hover:text-primary transition-colors">
                      +41 78 740 19 29
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
                <p>{t('footer.copyright')}</p>
                <div className="flex gap-6">
                  <a href="/imprint" className="hover:text-primary transition-colors">
                    {t('footer.imprint')}
                  </a>
                  <a href="/privacy" className="hover:text-primary transition-colors">
                    {t('footer.privacy')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
