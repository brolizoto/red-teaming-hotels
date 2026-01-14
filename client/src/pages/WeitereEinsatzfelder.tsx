import { useState } from "react";
import { Building2, MapPin, Home as HomeIcon, Flame } from "lucide-react";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { ContactFormModal } from "@/components/ContactFormModal";

/**
 * Weitere Einsatzfelder - Gebündelte Seite für nicht-Hotel Anwendungen
 * Unternehmen, Standorte, private Liegenschaften, Fire Checks
 */

export default function WeitereEinsatzfelder() {
  const { t } = useTranslation();
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const seoData = {
    title: "Weitere Einsatzfelder",
    description: "Red Teaming für Unternehmen, Standorte, private Liegenschaften und Fire Checks. Branchenübergreifend einsetzbar überall dort, wo Sicherheit, Krisenbereitschaft und Prozessqualität entscheidend sind.",
    canonical: "https://redteaming.ch/weitere-einsatzfelder",
    keywords: "Red Teaming Unternehmen, Security Assessment, Standortsicherheit, Liegenschaften Sicherheit, Fire Checks, Krisenmanagement, Physical Security"
  };

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation onRequestCall={() => setContactFormOpen(true)} />
        <ContactFormModal 
          isOpen={contactFormOpen} 
          onClose={() => setContactFormOpen(false)} 
        />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="accent-line mb-8"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                {t('otherFields.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                {t('otherFields.hero.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground">
                {t('otherFields.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Unternehmen */}
        <section className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="text-primary" size={32} />
                </div>
              </div>
              <div className="md:col-span-10">
                <div className="accent-line mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('otherFields.companies.title')}
                </h2>
                <p className="text-base text-muted-foreground mb-4">
                  {t('otherFields.companies.intro')}
                </p>
                <p className="text-base text-muted-foreground mb-6">
                  {t('otherFields.companies.description')}
                </p>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">{t('otherFields.companies.areasTitle')}</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('otherFields.companies.area1')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('otherFields.companies.area2')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('otherFields.companies.area3')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('otherFields.companies.area4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Standorte */}
        <section className="bg-card py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2 flex justify-center md:justify-start">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={32} />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <div className="accent-line mb-6"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t('otherFields.locations.title')}
                  </h2>
                  <p className="text-base text-muted-foreground mb-4">
                    {t('otherFields.locations.intro')}
                  </p>
                  <p className="text-base text-muted-foreground mb-6">
                    {t('otherFields.locations.description')}
                  </p>
                  <div className="bg-background border border-border rounded-lg p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">{t('otherFields.locations.focusTitle')}</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>{t('otherFields.locations.focus1')}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>{t('otherFields.locations.focus2')}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>{t('otherFields.locations.focus3')}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>{t('otherFields.locations.focus4')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Private Liegenschaften */}
        <section className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <HomeIcon className="text-primary" size={32} />
                </div>
              </div>
              <div className="md:col-span-10">
                <div className="accent-line mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('otherFields.properties.title')}
                </h2>
                <p className="text-base text-muted-foreground mb-4">
                  {t('otherFields.properties.intro')}
                </p>
                <p className="text-base text-muted-foreground mb-6">
                  {t('otherFields.properties.description')}
                </p>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">{t('otherFields.properties.servicesTitle')}</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('otherFields.properties.service1')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('otherFields.properties.service2')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('otherFields.properties.service3')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('otherFields.properties.service4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brandschutz */}
        <section className="bg-card py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2 flex justify-center md:justify-start">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Flame className="text-primary" size={32} />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <div className="accent-line mb-6"></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t('otherFields.fire.title')}
                  </h2>
                  <p className="text-base text-muted-foreground mb-4">
                    {t('otherFields.fire.intro')}
                  </p>
                  <p className="text-base text-muted-foreground mb-6">
                    {t('otherFields.fire.note')}
                  </p>
                  <div className="bg-background border border-border rounded-lg p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">{t('otherFields.fire.areasTitle')}</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>{t('otherFields.fire.area1')}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>{t('otherFields.fire.area2')}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>{t('otherFields.fire.area3')}</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span>{t('otherFields.fire.area4')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container py-16 md:py-24" id="contact">
          <div className="max-w-2xl mx-auto text-center">
            <div className="accent-line mb-8 mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('otherFields.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('otherFields.cta.subtitle')}
            </p>
            <button 
              onClick={() => setContactFormOpen(true)} 
              className="btn-primary text-lg px-8 py-4"
            >
              {t('otherFields.cta.button')}
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t border-border">
          <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-primary font-bold text-lg">RED TEAMING</div>
                  <div className="text-sm text-muted-foreground">Switzerland</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('otherFields.footer.tagline')}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-4">{t('otherFields.footer.navigation')}</h3>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <a href="/" className="hover:text-primary transition-colors">
                    {t('otherFields.footer.home')}
                  </a>
                  <a href="/ansatz" className="hover:text-primary transition-colors">
                    {t('otherFields.footer.approach')}
                  </a>
                  <a href="/hotels" className="hover:text-primary transition-colors">
                    {t('otherFields.footer.hotels')}
                  </a>
                  <a href="/weitere-einsatzfelder" className="hover:text-primary transition-colors">
                    {t('otherFields.footer.otherFields')}
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-4">{t('otherFields.footer.contact')}</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:contact@redteaming.ch" className="hover:text-primary transition-colors">
                    contact@redteaming.ch
                  </a>
                </p>
              </div>
            </div>
            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
              <p>{t('otherFields.footer.copyright')}</p>
              <div className="flex gap-6">
                <a href="/imprint" className="hover:text-primary transition-colors">
                  {t('otherFields.footer.imprint')}
                </a>
                <a href="/privacy" className="hover:text-primary transition-colors">
                  {t('otherFields.footer.privacy')}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
