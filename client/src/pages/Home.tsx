import { ArrowRight, Menu, X, Shield, Target, Users, Building2, Home as HomeIcon } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { analytics } from "../lib/analytics";
import { SEO } from "@/components/SEO";
import { trpc } from "../lib/trpc";
import { toast } from "sonner";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

/**
 * Red Teaming - Generische Dachmarken-Homepage
 * Beschreibt Red Teaming als Methode branchenübergreifend
 */

export default function Home() {
  const { t } = useTranslation();
  
  const seoData = {
    title: "Red Teaming Switzerland | Sicherheit realistisch testen",
    description: "Red Teaming Switzerland testet Ihre Sicherheit, Prozesse und Krisenbereitschaft realistisch – physisch, digital und organisatorisch. Nicht theoretisch, sondern real.",
    canonical: "https://redteaming.ch/",
    keywords: "Red Teaming, Red Teaming Switzerland, Sicherheitsprüfung, Krisenmanagement, Security Assessment, Penetration Test, Physical Security, Cyber Security, Organisationssicherheit",
    schemaData: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Red Teaming Switzerland",
      "description": "Red Teaming Switzerland: Realitätsnahe Prüfung von Sicherheit, Prozessen und Krisenbereitschaft für Organisationen in der Schweiz.",
      "url": "https://redteaming.ch/",
      "telephone": "+41787401929",
      "email": "contact@redteaming.ch",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Weberstrasse 16",
        "addressLocality": "Bern",
        "postalCode": "3005",
        "addressCountry": "CH"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Switzerland"
      },
      "serviceType": ["Red Teaming", "Security Consulting", "Crisis Management"]
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    turnstileToken: '',
    honeypot: '', // Honeypot-Feld (sollte leer bleiben)
    formOpenedAt: 0 // Zeitstempel wann Formular geöffnet wurde
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [turnstileVerified, setTurnstileVerified] = useState(false);
  const [, navigate] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: (data) => {
      setFormSubmitted(true);
      analytics.trackFormSubmit(true);
      if (data.emailSent) {
        toast.success("Ihre Anfrage wurde erfolgreich versendet!");
      } else {
        toast.warning("Anfrage gespeichert, aber E-Mail konnte nicht versendet werden.");
      }
      setTimeout(() => {
        setContactFormOpen(false);
        setFormSubmitted(false);
        setTurnstileVerified(false);
        setFormData({ name: '', email: '', phone: '', company: '', message: '', turnstileToken: '', honeypot: '', formOpenedAt: 0 });
      }, 2000);
    },
    onError: (error) => {
      analytics.trackFormError(error.message);
      toast.error("Fehler beim Senden der Anfrage: " + error.message);
    },
  });

  const handleTurnstileVerify = (token: string) => {
    setFormData(prev => ({ ...prev, turnstileToken: token }));
    setTurnstileVerified(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileVerified) {
      toast.error(t('contact.verifyNotRobot'));
      return;
    }
    contactMutation.mutate(formData);
  };

  return (
    <>
      <SEO {...seoData} />
      <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 bg-background border-b border-border z-50">
        <div className="container flex items-center justify-between py-4 md:py-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 bg-transparent border-none cursor-pointer hover:opacity-80">
            <div className="text-primary font-bold text-base md:text-lg">RED TEAMING</div>
            <div className="text-xs md:text-sm text-muted-foreground">Switzerland</div>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('/')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              {t('nav.home')}
            </button>
            <button onClick={() => navigate('/ansatz')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              {t('nav.approach')}
            </button>
            <button onClick={() => navigate('/hotels')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              {t('nav.hotels')}
            </button>
            <button onClick={() => navigate('/weitere-einsatzfelder')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              {t('nav.otherFields')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              {t('nav.contact')}
            </button>
            <LanguageSwitcher />
            <button onClick={() => { setContactFormOpen(true); setFormData(prev => ({ ...prev, formOpenedAt: Date.now() })); }} className="btn-primary text-xs">{t('nav.requestCall')}</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container flex flex-col gap-4 py-4">
              <button
                onClick={() => navigate('/')}
                className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => navigate('/ansatz')}
                className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                {t('nav.approach')}
              </button>
              <button
                onClick={() => navigate('/hotels')}
                className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                {t('nav.hotels')}
              </button>
              <button
                onClick={() => navigate('/weitere-einsatzfelder')}
                className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                {t('nav.otherFields')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                {t('nav.contact')}
              </button>
              <LanguageSwitcher />
              <button onClick={() => { setContactFormOpen(true); setFormData(prev => ({ ...prev, formOpenedAt: Date.now() })); }} className="btn-primary text-xs w-full">{t('nav.requestCall')}</button>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Form Modal */}
      {contactFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">{t('contact.title')}</h2>
              <button
                onClick={() => setContactFormOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="text-primary text-4xl mb-4">✓</div>
                <p className="text-foreground font-bold mb-2">{t('contact.thankYou')}</p>
                <p className="text-sm text-muted-foreground">
                  {t('contact.thankYouMessage')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    {t('contact.phone')} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t('contact.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    {t('contact.company')}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t('contact.companyPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                {/* Honeypot-Feld (unsichtbar für Menschen, sichtbar für Bots) */}
                <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                  <label htmlFor="website">Website (bitte leer lassen)</label>
                  <input
                    type="text"
                    id="website"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleFormChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <TurnstileWidget
                  onVerify={handleTurnstileVerify}
                  onError={() => toast.error("Verifizierung fehlgeschlagen. Bitte versuchen Sie es erneut.")}
                />

                <button
                  type="submit"
                  className="w-full btn-primary py-3 font-bold"
                  disabled={!turnstileVerified}
                >
                  {t('contact.submit')}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  {t('contact.required')}
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="accent-line mb-8 mx-auto"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              {t('home.hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate('/ansatz')} className="btn-primary flex items-center gap-2 justify-center">
                {t('home.hero.ctaApproach')}
                <ArrowRight size={16} />
              </button>
              <button onClick={() => { setContactFormOpen(true); setFormData(prev => ({ ...prev, formOpenedAt: Date.now() })); }} className="btn-secondary">
                {t('home.hero.ctaContact')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Was ist Red Teaming */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="accent-line mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {t('home.whatIsRedTeaming.title')}
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              {t('home.whatIsRedTeaming.description1')}
            </p>
            <p>
              {t('home.whatIsRedTeaming.description2')}
            </p>
            <p className="text-xl font-bold text-foreground">
              {t('home.whatIsRedTeaming.question')}
            </p>
          </div>
        </div>
      </section>

      {/* Warum Red Teaming */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="accent-line mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              {t('home.whyRedTeaming.title')}
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground mb-12">
              <p>
                {t('home.whyRedTeaming.description')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-lg p-6">
                <Shield className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2">{t('home.whyRedTeaming.physical')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('home.whyRedTeaming.physicalDesc')}
                </p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <Target className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2">{t('home.whyRedTeaming.digital')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('home.whyRedTeaming.digitalDesc')}
                </p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6">
                <Users className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-2">{t('home.whyRedTeaming.organizational')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('home.whyRedTeaming.organizationalDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Einsatzfelder */}
      <section className="container py-16 md:py-24" id="einsatzfelder">
        <div className="max-w-4xl mx-auto">
          <div className="accent-line mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Einsatzfelder
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
              Red Teaming ist branchenübergreifend einsetzbar, überall dort, 
              wo Sicherheit, Krisenbereitschaft und Prozessqualität entscheidend sind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => navigate('/hotels')}
              className="bg-card border border-border rounded-lg p-8 text-left hover:border-primary transition-colors group"
            >
              <HomeIcon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-foreground mb-3">Hotels</h3>
              <p className="text-muted-foreground mb-4">
                Spezialisiert auf Hotellerie: Gästesicherheit, Reputation, 
                Krisenmanagement und operative Kontinuität.
              </p>
              <div className="flex items-center gap-2 text-primary font-bold">
                Mehr erfahren
                <ArrowRight size={16} />
              </div>
            </button>
            <button
              onClick={() => navigate('/weitere-einsatzfelder')}
              className="bg-card border border-border rounded-lg p-8 text-left hover:border-primary transition-colors group"
            >
              <Building2 className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold text-foreground mb-3">Weitere Einsatzfelder</h3>
              <p className="text-muted-foreground mb-4">
                Unternehmen, Standorte, private Liegenschaften, 
                Fire Checks und weitere Anwendungsbereiche.
              </p>
              <div className="flex items-center gap-2 text-primary font-bold">
                Mehr erfahren
                <ArrowRight size={16} />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-card py-16 md:py-24" id="contact">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="accent-line mb-8 mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('home.cta.description')}
            </p>
            <button onClick={() => { setContactFormOpen(true); setFormData(prev => ({ ...prev, formOpenedAt: Date.now() })); }} className="btn-primary text-lg px-8 py-4">
              {t('home.cta.button')}
            </button>
          </div>
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
                Realitätsnahe Prüfung von Sicherheit, Prozessen und Krisenbereitschaft
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Navigation</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <button onClick={() => navigate('/')} className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer">
                  {t('nav.home')}
                </button>
                <button onClick={() => navigate('/ansatz')} className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer">
                  {t('nav.approach')}
                </button>
                <button onClick={() => navigate('/hotels')} className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer">
                  {t('nav.hotels')}
                </button>
                <button onClick={() => navigate('/weitere-einsatzfelder')} className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer">
                  {t('nav.otherFields')}
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">{t('footer.contact')}</h3>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:contact@redteaming.ch" onClick={() => analytics.trackExternalLink('mailto:contact@redteaming.ch')} className="hover:text-primary transition-colors">
                  contact@redteaming.ch
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>{t('footer.copyright')}</p>
            <div className="flex gap-6">
              <button onClick={() => navigate('/impressum')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                {t('footer.imprint')}
              </button>
              <button onClick={() => navigate('/datenschutz')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                {t('footer.privacy')}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
