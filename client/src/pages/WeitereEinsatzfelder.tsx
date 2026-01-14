import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { ContactFormModal } from "@/components/ContactFormModal";
import { AlertTriangle, Target, Shield, Users } from "lucide-react";

export default function WeitereEinsatzfelder() {
  const { t } = useTranslation();
  const [contactFormOpen, setContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onRequestCall={() => setContactFormOpen(true)} />

      <ContactFormModal
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h1 className="text-display mb-6">{t('otherFields.hero.title')}</h1>
        <blockquote className="text-xl md:text-2xl italic text-muted-foreground border-l-4 border-primary pl-6 mb-8">
          {t('otherFields.hero.subtitle')}
        </blockquote>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
          {t('otherFields.hero.description')}
        </p>
      </section>

      <div className="section-divider"></div>

      {/* Fields Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Fire Protection */}
          <div className="border border-border rounded-lg p-6 md:p-8 hover:border-primary transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-subheading">{t('otherFields.fire.title')}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('otherFields.fire.description')}
            </p>
            <div className="bg-card border border-border rounded p-4 mb-4">
              <p className="text-xs text-muted-foreground italic">
                {t('otherFields.fire.note')}
              </p>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
          </div>

          {/* Evacuations */}
          <div className="border border-border rounded-lg p-6 md:p-8 hover:border-primary transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-subheading">{t('otherFields.evacuation.title')}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('otherFields.evacuation.description')}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
          </div>

          {/* Crisis Management */}
          <div className="border border-border rounded-lg p-6 md:p-8 hover:border-primary transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-subheading">{t('otherFields.crisis.title')}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('otherFields.crisis.description')}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
          </div>

          {/* Authority Controls */}
          <div className="border border-border rounded-lg p-6 md:p-8 hover:border-primary transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-subheading">{t('otherFields.authority.title')}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('otherFields.authority.description')}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {t('home.cta.title')}
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            {t('home.cta.description')}
          </p>
          <button
            onClick={() => setContactFormOpen(true)}
            className="btn-primary flex items-center gap-2 text-sm md:text-base"
          >
            {t('home.cta.button')}
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="text-primary font-bold text-lg mb-2">{t('nav.brand')}</div>
              <div className="text-sm text-muted-foreground">{t('nav.tagline')}</div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 md:justify-end">
              <div>
                <h3 className="font-bold text-foreground mb-4">{t('footer.location.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('footer.location.address')}<br />
                  {t('footer.location.city')}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-4">{t('footer.contact.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  <a href={`mailto:${t('footer.contact.email')}`} className="hover:text-primary transition-colors">
                    {t('footer.contact.email')}
                  </a><br />
                  <a href={`tel:${t('footer.contact.phone')}`} className="hover:text-primary transition-colors">
                    {t('footer.contact.phone')}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
              <p>{t('footer.copyright')}</p>
              <div className="flex gap-6">
                <button onClick={() => window.location.href = '/imprint'} className="hover:text-primary transition-colors">
                  {t('footer.imprint')}
                </button>
                <button onClick={() => window.location.href = '/privacy'} className="hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
