import { useAuth } from "@/_core/hooks/useAuth";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation } from '@/components/Navigation';
import { ContactFormModal } from '@/components/ContactFormModal';
import { SEO } from "@/components/SEO";

export default function Hotels() {
  const { t } = useTranslation();
  const [contactFormOpen, setContactFormOpen] = useState(false);
  
  const seoData = {
    title: t('hotels.hero.title'),
    description: t('hotels.hero.description'),
    canonical: "https://redteaming.ch/hotels",
    keywords: "Hotel Security, Hotel Sicherheit, Red Teaming Hotels, Krisenmanagement Hotels",
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
          <h1 className="text-display mb-6">{t('hotels.hero.title')}</h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-3xl">
            {t('hotels.hero.subtitle')}
          </p>
          <p className="text-base text-muted-foreground mb-8 max-w-3xl">
            {t('hotels.hero.description')}
          </p>
        </section>

        <div className="section-divider"></div>

        {/* Truth Section */}
        <section className="container py-16 md:py-24">
          <div className="accent-line mb-8"></div>
          <h2 className="text-heading mb-6">{t('hotels.truth.title')}</h2>
          <p className="text-base text-muted-foreground mb-6 max-w-3xl">
            {t('hotels.truth.description')}
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground max-w-2xl">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('hotels.truth.item1')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('hotels.truth.item2')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('hotels.truth.item3')}</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>{t('hotels.truth.item4')}</span>
            </li>
          </ul>
        </section>

        <div className="section-divider"></div>

        {/* Nightmare Scenario */}
        <section className="container py-16 md:py-24">
          <div className="accent-line mb-8"></div>
          <h2 className="text-heading mb-6">{t('hotels.nightmare.title')}</h2>
          <p className="text-base text-muted-foreground mb-8 max-w-3xl">
            {t('hotels.nightmare.description')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="border border-border p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">{t('hotels.nightmare.event')}</h3>
              <p className="text-sm text-muted-foreground">{t('hotels.nightmare.eventDesc')}</p>
            </div>
            <div className="border border-border p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">{t('hotels.nightmare.cyber')}</h3>
              <p className="text-sm text-muted-foreground">{t('hotels.nightmare.cyberDesc')}</p>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-lg max-w-2xl">
            <p className="text-sm font-bold text-foreground mb-3">{t('hotels.nightmare.consequence')}</p>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>• {t('hotels.nightmare.item1')}</li>
              <li>• {t('hotels.nightmare.item2')}</li>
              <li>• {t('hotels.nightmare.item3')}</li>
              <li>• {t('hotels.nightmare.item4')}</li>
            </ul>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Approaches Section */}
        <section className="container py-16 md:py-24">
          <div className="accent-line mb-8"></div>
          <h2 className="text-heading mb-12">{t('hotels.approaches.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Basic */}
            <div className="border border-border rounded-lg hover:border-primary transition-colors p-6 md:p-8">
              <h3 className="text-subheading mb-4">{t('hotels.approaches.basic.title')}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t('hotels.approaches.basic.subtitle')}
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approaches.basic.item1')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approaches.basic.item2')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approaches.basic.item3')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approaches.basic.item4')}</span>
                </li>
              </ul>
              <p className="text-xs font-bold text-foreground">{t('hotels.approaches.basic.idealFor')}</p>
              <p className="text-xs text-muted-foreground">
                {t('hotels.approaches.basic.idealDesc')}
              </p>
            </div>

            {/* Advanced */}
            <div className="border border-border rounded-lg hover:border-primary transition-colors bg-card p-6 md:p-8">
              <h3 className="text-subheading mb-4">{t('hotels.approaches.advanced.title')}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t('hotels.approaches.advanced.subtitle')}
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approaches.advanced.item1')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approaches.advanced.item2')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approaches.advanced.item3')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approaches.advanced.item4')}</span>
                </li>
              </ul>
              <p className="text-xs font-bold text-foreground">{t('hotels.approaches.advanced.idealFor')}</p>
              <p className="text-xs text-muted-foreground">
                {t('hotels.approaches.advanced.idealDesc')}
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Process Section */}
        <section className="container py-16 md:py-24">
          <div className="accent-line mb-8"></div>
          <h2 className="text-heading mb-12">{t('hotels.process.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: t('hotels.process.step1'), desc: t('hotels.process.step1Desc') },
              { step: "02", title: t('hotels.process.step2'), desc: t('hotels.process.step2Desc') },
              { step: "03", title: t('hotels.process.step3'), desc: t('hotels.process.step3Desc') },
              { step: "04", title: t('hotels.process.step4'), desc: t('hotels.process.step4Desc') }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider"></div>

        {/* CTA Section */}
        <section className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t('hotels.cta.title')}
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              {t('hotels.cta.description')}
            </p>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Footer */}
        <footer id="contact" className="bg-card border-t border-border">
          <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="text-primary font-bold text-lg mb-2">RED TEAMING</div>
                <div className="text-sm text-muted-foreground">{t('footer.tagline')}</div>
                <p className="text-xs text-muted-foreground mt-4">
                  {t('hotels.footer.tagline')}
                </p>
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
