import { ArrowRight, Shield, Target, AlertTriangle, CheckCircle2, Layers, Users, FileText } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { ContactFormModal } from "@/components/ContactFormModal";

/**
 * Red Teaming - Ansatz/Methodik Seite
 * Branchenunabhängig, fokussiert auf die Red Teaming Methodik
 */

export default function Ansatz() {
  const { t } = useTranslation();
  const [, navigate] = useLocation();
  
  const seoData = {
    title: "Ansatz",
    description: "Red Teaming Methodik: Realitätsnahe Prüfung von Organisationen aus der Perspektive eines echten Ereignisses. Physisch, digital und organisatorisch – nicht entlang von Checklisten, sondern entlang von Risiko und Abhängigkeiten.",
    canonical: "https://redteaming.ch/ansatz",
    keywords: "Red Teaming Methodik, Red Teaming Ansatz, Security Assessment Methodik, Krisenmanagement Methodik, Penetration Test, Physical Security Testing, Cyber Security Assessment"
  };

  const [contactFormOpen, setContactFormOpen] = useState(false);

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
              {t('approach.hero.title')}
            </h1>
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 mb-8">
              <p className="text-xl md:text-2xl font-bold text-foreground italic">
                {t('approach.hero.quote')}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Was ist Red Teaming */}
      <section className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="text-primary" size={32} />
              </div>
            </div>
            <div className="md:col-span-10">
              <div className="accent-line mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('approach.whatIs.title')}
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                {t('approach.whatIs.description1')}
              </p>
              <p className="text-base text-muted-foreground mb-4">
                {t('approach.whatIs.description2')}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Warum Red Teaming */}
      <section className="container py-12 md:py-16">
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
                {t('approach.why.title')}
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                {t('approach.why.description')}
              </p>
              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-foreground mb-4">{t('approach.why.gapsTitle')}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.why.gap1')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.why.gap2')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.why.gap3')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.why.gap4')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.why.gap5')}</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg font-bold text-foreground">
                {t('approach.why.conclusion')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drei Dimensionen */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Layers className="text-primary" size={32} />
                </div>
              </div>
              <div className="md:col-span-10">
                <div className="accent-line mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('approach.dimensions.title')}
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  {t('approach.dimensions.description')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-lg p-6">
                <Shield className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-3">{t('approach.dimensions.physical')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('approach.dimensions.physicalDesc')}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t('approach.dimensions.physicalDetail')}
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <Target className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-3">{t('approach.dimensions.digital')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('approach.dimensions.digitalDesc')}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t('approach.dimensions.digitalDetail')}
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <Users className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-3">{t('approach.dimensions.organizational')}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('approach.dimensions.organizationalDesc')}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t('approach.dimensions.organizationalDetail')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wie funktioniert Red Teaming */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="text-primary" size={32} />
              </div>
            </div>
            <div className="md:col-span-10">
              <div className="accent-line mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('approach.process.title')}
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                {t('approach.process.description')}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t('approach.process.phase1Title')}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t('approach.process.phase1Desc')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('approach.process.phase1Result')}
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t('approach.process.phase2Title')}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t('approach.process.phase2Desc')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('approach.process.phase2Result')}
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t('approach.process.phase3Title')}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t('approach.process.phase3Desc')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('approach.process.phase3Result')}
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t('approach.process.phase4Title')}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t('approach.process.phase4Desc')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('approach.process.phase4Result')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Teaming vs. Audits */}
      <section className="bg-card py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="accent-line mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              {t('approach.comparison.title')}
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              {t('approach.comparison.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-primary" size={24} />
                  <h3 className="text-lg font-bold text-foreground">{t('approach.comparison.redTeaming')}</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.rt1')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.rt2')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.rt3')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.rt4')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.rt5')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="text-muted-foreground" size={24} />
                  <h3 className="text-lg font-bold text-foreground">{t('approach.comparison.audits')}</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>{t('approach.comparison.audit1')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>{t('approach.comparison.audit2')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>{t('approach.comparison.audit3')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>{t('approach.comparison.audit4')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>{t('approach.comparison.audit5')}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-base text-foreground font-bold mb-2">
                {t('approach.comparison.note')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('approach.comparison.noteDetail')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-16 md:py-24" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <div className="accent-line mb-8 mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('approach.cta.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('approach.cta.description')}
          </p>
          <button onClick={() => setContactFormOpen(true)} className="btn-primary text-lg px-8 py-4">
            {t('approach.cta.button')}
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
                {t('footer.tagline')}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">{t('footer.navigation')}</h3>
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
                <a href="mailto:contact@redteaming.ch" className="hover:text-primary transition-colors">
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
