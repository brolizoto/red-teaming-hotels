import { ArrowRight, Target, AlertTriangle, Layers, FileText, Shield } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { ContactFormModal } from "@/components/ContactFormModal";
import { UnifiedFooter } from "@/components/UnifiedFooter";

/**
 * Red Teaming - Ansatz/Methodik Seite
 * Redesigned for better visual appeal while keeping text 1:1
 */

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button
        className="w-full text-left flex items-center justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {question}
        </span>
        <span className={`text-primary text-xl font-bold flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {open && (
        <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

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

        {/* Vier Dimensionen */}
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

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <p className="text-base text-foreground">
                  {t('approach.dimensions.statement')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Digitaler Sicherheitsprozess */}
        <section className="container py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="text-primary" size={32} />
                </div>
              </div>
              <div className="md:col-span-10">
                <div className="accent-line mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t('approach.digitalProcess.title')}
                </h2>
                <p className="text-base text-muted-foreground">
                  {t('approach.digitalProcess.subtitle')}
                </p>
              </div>
            </div>

            {/* 4-Step Process */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-card border border-primary/30 rounded-xl p-6 h-full">
                  <p className="text-xs font-bold text-primary tracking-widest mb-1">{t('approach.digitalProcess.step1.label')}</p>
                  <h3 className="text-base font-bold text-foreground mb-3">{t('approach.digitalProcess.step1.title')}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t('approach.digitalProcess.step1.description')}</p>
                </div>
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="text-primary" size={16} />
                </div>
              </div>
              {/* Step 2 */}
              <div className="relative">
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <p className="text-xs font-bold text-primary tracking-widest mb-1">{t('approach.digitalProcess.step2.label')}</p>
                  <h3 className="text-base font-bold text-foreground mb-3">{t('approach.digitalProcess.step2.title')}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t('approach.digitalProcess.step2.description')}</p>
                </div>
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="text-primary" size={16} />
                </div>
              </div>
              {/* Step 3 */}
              <div className="relative">
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <p className="text-xs font-bold text-primary tracking-widest mb-1">{t('approach.digitalProcess.step3.label')}</p>
                  <h3 className="text-base font-bold text-foreground mb-3">{t('approach.digitalProcess.step3.title')}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t('approach.digitalProcess.step3.description')}</p>
                </div>
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="text-primary" size={16} />
                </div>
              </div>
              {/* Step 4 */}
              <div>
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <p className="text-xs font-bold text-primary tracking-widest mb-1">{t('approach.digitalProcess.step4.label')}</p>
                  <h3 className="text-base font-bold text-foreground mb-3">{t('approach.digitalProcess.step4.title')}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t('approach.digitalProcess.step4.description')}</p>
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
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{t('approach.process.phase1.title')}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('approach.process.phase1.desc')}
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      {t('approach.process.phase1.details')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{t('approach.process.phase2.title')}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('approach.process.phase2.desc')}
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      {t('approach.process.phase2.details')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{t('approach.process.phase3.title')}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('approach.process.phase3.desc')}
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      {t('approach.process.phase3.details')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{t('approach.process.phase4.title')}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('approach.process.phase4.desc')}
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      {t('approach.process.phase4.details')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Red Teaming vs. Audits & Penetration Tests */}
        <section className="bg-card py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="accent-line mb-8 mx-auto"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                {t('approach.comparison.title')}
              </h2>
              <p className="text-base text-muted-foreground mb-12 text-center">
                {t('approach.comparison.subtitle')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Red Teaming Column */}
                <div className="bg-background border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {t('approach.comparison.redTeaming.title')}
                    </h3>
                  </div>
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
                <div className="bg-background border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {t('approach.comparison.audits.title')}
                    </h3>
                  </div>
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
          </div>
        </section>

        {/* Gründerteam */}
        <section className="container py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="accent-line mb-6 mx-auto" style={{width: '4rem'}}></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {t('approach.founders.title')}
              </h2>
              <p className="text-base text-muted-foreground">
                {t('approach.founders.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Roger Büschlen */}
              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">RB</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{t('approach.founders.roger.name')}</h3>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wide">{t('approach.founders.roger.role')}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {t('approach.founders.roger.focus')}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('approach.founders.roger.bio')}
                </p>
              </div>

              {/* Romain Markwalder */}
              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">RM</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{t('approach.founders.romain.name')}</h3>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wide">{t('approach.founders.romain.role')}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {t('approach.founders.romain.focus')}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('approach.founders.romain.bio')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/30" id="faq">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="accent-line mb-8"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('approach.faq.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                {t('approach.faq.subtitle')}
              </p>
              <div className="space-y-0 divide-y divide-border">
                {[
                  { q: t('approach.faq.q1'), a: t('approach.faq.a1') },
                  { q: t('approach.faq.q2'), a: t('approach.faq.a2') },
                  { q: t('approach.faq.q3'), a: t('approach.faq.a3') },
                  { q: t('approach.faq.q4'), a: t('approach.faq.a4') },
                  { q: t('approach.faq.q5'), a: t('approach.faq.a5') },
                ].map((item, idx) => (
                  <FAQItem key={idx} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16 md:py-24" id="contact">
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
        </section>

        <UnifiedFooter />
      </div>
    </>
  );
}
