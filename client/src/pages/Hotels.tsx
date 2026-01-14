import { useState } from "react";
import { useLocation } from "wouter";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { ContactFormModal } from "@/components/ContactFormModal";
import { AlertTriangle, Shield, Target, CheckCircle2 } from "lucide-react";

export default function Hotels() {
  const { t } = useTranslation();
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [, navigate] = useLocation();

  const seoData = {
    title: "Hotels | Hotel Security Schweiz",
    description: "Red Teaming for Hotels: Professionelle Hotel Security durch realitätsnahe Prüfung von Krisen- und Notfallfähigkeit.",
    canonical: "https://redteaming.ch/hotels",
    keywords: "Hotel Security, Hotel Sicherheit, Red Teaming Hotels, Krisenmanagement Hotels",
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
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-card py-12 md:py-20">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="accent-line mb-8 mx-auto" style={{width: '4rem'}}></div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                {t('hotels.hero.title')}
              </h1>
              <blockquote className="text-xl md:text-2xl italic text-muted-foreground border-l-4 border-primary pl-6 mb-8">
                {t('hotels.hero.subtitle')}
              </blockquote>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                {t('hotels.hero.description')}
              </p>
              <button 
                onClick={() => setContactFormOpen(true)} 
                className="btn-primary flex items-center gap-2 text-sm md:text-base mx-auto"
              >
                {t('hotels.hero.cta')}
              </button>
            </div>
          </div>
        </section>

        {/* Truth Section */}
        <section className="container py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="text-primary" size={32} />
                </div>
              </div>
              <div className="md:col-span-10">
                <div className="accent-line mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('hotels.truth.title')}
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  {t('hotels.truth.description')}
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
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
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Scenario Section */}
        <section className="container py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="accent-line mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              {t('hotels.scenario.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              {t('hotels.scenario.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-3">{t('hotels.scenario.event.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('hotels.scenario.event.description')}</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-3">{t('hotels.scenario.cyber.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('hotels.scenario.cyber.description')}</p>
              </div>
            </div>

            <div className="bg-card border border-border p-6">
              <p className="text-sm font-bold text-foreground mb-3">{t('hotels.scenario.consequence.title')}</p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• {t('hotels.scenario.consequence.item1')}</li>
                <li>• {t('hotels.scenario.consequence.item2')}</li>
                <li>• {t('hotels.scenario.consequence.item3')}</li>
                <li>• {t('hotels.scenario.consequence.item4')}</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Approach Section */}
        <section className="container py-12 md:py-20">
          <div className="accent-line mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            {t('hotels.approach.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Basic */}
            <div className="border border-border rounded-lg hover:border-primary transition-colors p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('hotels.approach.basic.title')}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t('hotels.approach.basic.subtitle')}
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approach.basic.item1')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approach.basic.item2')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approach.basic.item3')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approach.basic.item4')}</span>
                </li>
              </ul>
              <p className="text-xs font-bold text-foreground">{t('hotels.approach.basic.ideal')}</p>
              <p className="text-xs text-muted-foreground">
                {t('hotels.approach.basic.idealText')}
              </p>
            </div>

            {/* Advanced */}
            <div className="border border-border rounded-lg hover:border-primary transition-colors bg-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('hotels.approach.advanced.title')}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t('hotels.approach.advanced.subtitle')}
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approach.advanced.item1')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approach.advanced.item2')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approach.advanced.item3')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('hotels.approach.advanced.item4')}</span>
                </li>
              </ul>
              <p className="text-xs font-bold text-foreground">{t('hotels.approach.advanced.ideal')}</p>
              <p className="text-xs text-muted-foreground">
                {t('hotels.approach.advanced.idealText')}
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Process Section */}
        <section className="container py-12 md:py-20">
          <div className="accent-line mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            {t('hotels.process.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {['step1', 'step2', 'step3', 'step4'].map((step) => (
              <div key={step} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {t(`hotels.process.${step}.number`)}
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  {t(`hotels.process.${step}.title`)}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {t(`hotels.process.${step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider"></div>

        {/* CTA Section */}
        <section className="container py-12 md:py-20">
          <div className="max-w-2xl">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t('hotels.cta.title')}
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              {t('hotels.cta.description')}
            </p>
            <button 
              onClick={() => setContactFormOpen(true)} 
              className="btn-primary flex items-center gap-2 text-sm md:text-base"
            >
              {t('hotels.cta.button')}
            </button>
          </div>
        </section>

        <div className="section-divider"></div>

        {/* Footer */}
        <footer id="contact" className="bg-card border-t border-border">
          <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <button onClick={() => navigate('/')} className="flex items-center gap-2 mb-2 bg-transparent border-none cursor-pointer hover:opacity-80">
                  <div className="text-primary font-bold text-lg">{t('nav.brand')}</div>
                  <div className="text-sm text-muted-foreground">{t('nav.tagline')}</div>
                </button>
                <p className="text-xs text-muted-foreground mt-4">
                  {t('footer.tagline')}
                </p>
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
                  <button onClick={() => navigate('/imprint')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                    {t('footer.imprint')}
                  </button>
                  <button onClick={() => navigate('/privacy')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                    {t('footer.privacy')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
