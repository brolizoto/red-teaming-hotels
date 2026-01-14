import { ArrowRight, Shield, Target, AlertTriangle, Layers, FileText } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { ContactFormModal } from "@/components/ContactFormModal";
import { UnifiedFooter } from "@/components/UnifiedFooter";

/**
 * Red Teaming - Ansatz/Methodik Seite
 * Original Layout basierend auf Screenshot
 */

export default function Ansatz() {
  const { t } = useTranslation();
  const [, navigate] = useLocation();
  
  const seoData = {
    title: "Ansatz",
    description: "Red Teaming Methodik: Realitätsnahe Prüfung von Organisationen aus der Perspektive eines echten Ereignisses. Physisch, digital und organisatorisch.",
    canonical: "https://redteaming.ch/ansatz",
    keywords: "Red Teaming Methodik, Red Teaming Ansatz, Security Assessment, Krisenmanagement, Penetration Test"
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
        <section className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="accent-line mb-8"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              {t('approach.hero.title')}
            </h1>
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6">
              <p className="text-lg md:text-xl text-foreground italic">
                {t('approach.hero.quote')}
              </p>
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
                  {t('approach.whatIs.p1')}
                </p>
                <p className="text-base text-muted-foreground">
                  {t('approach.whatIs.p2')}
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
                  {t('approach.why.intro')}
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
                  <p className="text-base text-muted-foreground">
                    {t('approach.dimensions.intro')}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background border border-border rounded-lg p-6">
                  <Shield className="text-primary mb-4" size={32} />
                  <h3 className="text-lg font-bold text-foreground mb-3">{t('approach.dimensions.physical.title')}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('approach.dimensions.physical.desc')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('approach.dimensions.physical.examples')}
                  </p>
                </div>

                <div className="bg-background border border-border rounded-lg p-6">
                  <Target className="text-primary mb-4" size={32} />
                  <h3 className="text-lg font-bold text-foreground mb-3">{t('approach.dimensions.digital.title')}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('approach.dimensions.digital.desc')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('approach.dimensions.digital.examples')}
                  </p>
                </div>

                <div className="bg-background border border-border rounded-lg p-6">
                  <Layers className="text-primary mb-4" size={32} />
                  <h3 className="text-lg font-bold text-foreground mb-3">{t('approach.dimensions.organizational.title')}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('approach.dimensions.organizational.desc')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('approach.dimensions.organizational.examples')}
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
                <p className="text-base text-muted-foreground">
                  {t('approach.process.intro')}
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
                    <h3 className="text-lg font-bold text-foreground mb-2">{t('approach.process.phase1.title')}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('approach.process.phase1.desc')}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t('approach.process.phase1.details')}
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
                    <h3 className="text-lg font-bold text-foreground mb-2">{t('approach.process.phase2.title')}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('approach.process.phase2.desc')}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t('approach.process.phase2.details')}
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
                    <h3 className="text-lg font-bold text-foreground mb-2">{t('approach.process.phase3.title')}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('approach.process.phase3.desc')}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t('approach.process.phase3.details')}
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
                    <h3 className="text-lg font-bold text-foreground mb-2">{t('approach.process.phase4.title')}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('approach.process.phase4.desc')}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t('approach.process.phase4.details')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Red Teaming vs. Audits & Penetration Tests */}
        <section className="container py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="accent-line mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              {t('approach.comparison.title')}
            </h2>
            <p className="text-base text-muted-foreground mb-12 text-center">
              {t('approach.comparison.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Red Teaming Column */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Shield className="text-primary" size={24} />
                  {t('approach.comparison.redTeaming.title')}
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.redTeaming.point1')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.redTeaming.point2')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.redTeaming.point3')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.redTeaming.point4')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.redTeaming.point5')}</span>
                  </li>
                </ul>
              </div>

              {/* Audits & Pen Tests Column */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <AlertTriangle className="text-primary" size={24} />
                  {t('approach.comparison.audits.title')}
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.audits.point1')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.audits.point2')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.audits.point3')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.audits.point4')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('approach.comparison.audits.point5')}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
              <p className="text-sm text-muted-foreground text-center">
                {t('approach.comparison.note')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card py-16 md:py-24" id="contact">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="accent-line mb-8 mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('approach.cta.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('approach.cta.subtitle')}
              </p>
              <button 
                onClick={() => setContactFormOpen(true)}
                className="btn-primary text-lg px-8 py-4"
              >
                {t('approach.cta.button')}
              </button>
            </div>
          </div>
        </section>

        <UnifiedFooter />
      </div>
    </>
  );
}
