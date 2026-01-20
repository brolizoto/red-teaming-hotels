import { useState } from "react";
import { ArrowRight, AlertTriangle, Shield, Target, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { ContactFormModal } from "@/components/ContactFormModal";
import { UnifiedFooter } from "@/components/UnifiedFooter";

/**
 * Red Teaming for Hotels - Hotels Page
 * Design: Minimalist-Institutional with Swiss typography tradition
 * Color: Red (#E63946) as primary accent, white background, dark gray text
 */

export default function Hotels() {
  const { t, i18n } = useTranslation();
  const [contactFormOpen, setContactFormOpen] = useState(false);

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

        {/* Hero Section with Background Image */}
        <section className="relative overflow-hidden h-[600px] md:h-[700px]">
          <div className="absolute inset-0">
            <img 
              src="/images/hotel-reception-hero.jpg" 
              alt="Hotel reception with staff and guests"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
          </div>
          <div className="container relative z-10 h-full flex items-center">
            <div className="max-w-2xl">
              <div className="accent-line mb-8"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                {t('hotels.hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-12">
                {t('hotels.hero.description')}
              </p>
              <button 
                onClick={() => setContactFormOpen(true)} 
                className="btn-primary flex items-center gap-2 text-sm md:text-base"
              >
                {t('hotels.hero.cta')}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Die unbequeme Wahrheit Section with Image */}
        <section id="about" className="container py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="text-primary" size={32} />
                  </div>
                  <div className="accent-line flex-1"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('hotels.truth.title')}
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  {t('hotels.truth.intro')}
                </p>
                <div className="bg-card border border-border rounded-lg p-6">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('hotels.truth.point1')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('hotels.truth.point2')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('hotels.truth.point3')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('hotels.truth.point4')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('hotels.truth.point5')}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-first md:order-last">
                <img 
                  src="/images/hotel-security-systems.jpg" 
                  alt="Hotel security systems"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Das doppelte Schreckensszenario with Split Image */}
        <section className="container py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <img 
                  src="/images/hotel-system-crisis.jpg" 
                  alt="Hotel system failure during crisis"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-primary" size={32} />
                  </div>
                  <div className="accent-line flex-1"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {t('hotels.scenario.title')}
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  {t('hotels.scenario.question')}
                </p>
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-bold text-foreground mb-2">{t('hotels.scenario.event.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('hotels.scenario.event.description')}</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-bold text-foreground mb-2">{t('hotels.scenario.cyber.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('hotels.scenario.cyber.description')}</p>
                  </div>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="text-sm font-bold text-foreground mb-4">{t('hotels.scenario.consequence.title')}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('hotels.scenario.consequence.point1')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('hotels.scenario.consequence.point2')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('hotels.scenario.consequence.point3')}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>{t('hotels.scenario.consequence.point4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Was wir real prüfen with Images */}
        <section className="container py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="text-primary" size={32} />
                </div>
              </div>
              <div className="accent-line mb-6 mx-auto" style={{width: '4rem'}}></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t('hotels.testing.title')}</h2>
              <p className="text-base text-muted-foreground mb-4 max-w-3xl mx-auto">
                {t('hotels.testing.intro')}
              </p>
              <p className="text-base font-semibold text-foreground max-w-3xl mx-auto">
                {t('hotels.testing.focus')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/images/evacuation-training.jpg" 
                  alt="Evacuation training"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-base font-bold text-foreground">{t('hotels.testing.area1')}</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/images/cyber-phishing-work.jpg" 
                  alt="Cyber security and phishing scenarios"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-base font-bold text-foreground">{t('hotels.testing.area2')}</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/images/hotel-manager-leadership.jpg" 
                  alt="Hotel manager leadership and decision-making"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-base font-bold text-foreground">{t('hotels.testing.area3')}</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/images/it-infrastructure.jpg" 
                  alt="IT infrastructure"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-base font-bold text-foreground">{t('hotels.testing.area4')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Venn-Diagramm */}
            <div className="my-12">
              <img 
                src={i18n.language === 'en' ? '/images/venn-en.png' : '/images/venn-diagram.png'}
                alt={t('hotels.testing.vennAlt')}
                className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-base font-bold text-foreground text-center">
                {t('hotels.testing.quote')}
              </p>
            </div>
          </div>
        </section>

        {/* Unser Ansatz für Hotels */}
        <section id="services" className="container py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="accent-line mb-8 mx-auto" style={{width: '4rem'}}></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('hotels.approach.title')}</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {t('hotels.approach.subtitle')}
              </p>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Red Teaming Basic */}
              <div className="border border-border rounded-lg hover:border-primary transition-colors p-6 md:p-8">
                <h3 className="text-subheading mb-4">{t('hotels.approach.basic.title')}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {t('hotels.approach.basic.subtitle')}
                </p>
                <ul className="space-y-4 text-sm text-muted-foreground mb-8">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('hotels.approach.basic.point1')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('hotels.approach.basic.point2')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('hotels.approach.basic.point3')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('hotels.approach.basic.point4')}</span>
                  </li>
                </ul>
                <p className="text-xs font-bold text-foreground">{t('hotels.approach.basic.idealFor')}</p>
                <p className="text-xs text-muted-foreground">
                  {t('hotels.approach.basic.idealForText')}
                </p>
              </div>

              {/* Red Teaming Advanced */}
              <div className="border border-border rounded-lg hover:border-primary transition-colors bg-card p-6 md:p-8">
                <h3 className="text-subheading mb-4">{t('hotels.approach.advanced.title')}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {t('hotels.approach.advanced.subtitle')}
                </p>
                <ul className="space-y-4 text-sm text-muted-foreground mb-8">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('hotels.approach.advanced.point1')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('hotels.approach.advanced.point2')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('hotels.approach.advanced.point3')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('hotels.approach.advanced.point4')}</span>
                  </li>
                </ul>
                <p className="text-xs font-bold text-foreground">{t('hotels.approach.advanced.idealFor')}</p>
                <p className="text-xs text-muted-foreground">
                  {t('hotels.approach.advanced.idealForText')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Roadmap-Grafik */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-background to-muted/20 border border-border rounded-xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{t('hotels.approach.roadmap.title')}</h3>
                <p className="text-base text-muted-foreground">{t('hotels.approach.roadmap.subtitle')}</p>
              </div>
              
              <div className="my-12">
                <img 
                  src={i18n.language === 'en' ? '/images/roadmap-en.png' : '/images/roadmap.png'}
                  alt={t('hotels.approach.roadmap.alt')}
                  className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ablauf der Zusammenarbeit */}
        <section className="container py-12 md:py-16">
          <div className="accent-line mb-8"></div>
          <h2 className="text-heading mb-12">{t('hotels.process.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-4">01</div>
              <h3 className="font-bold text-foreground mb-2">{t('hotels.process.step1.title')}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{t('hotels.process.step1.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-4">02</div>
              <h3 className="font-bold text-foreground mb-2">{t('hotels.process.step2.title')}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{t('hotels.process.step2.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-4">03</div>
              <h3 className="font-bold text-foreground mb-2">{t('hotels.process.step3.title')}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{t('hotels.process.step3.description')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-4">04</div>
              <h3 className="font-bold text-foreground mb-2">{t('hotels.process.step4.title')}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{t('hotels.process.step4.description')}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card py-16 md:py-24" id="contact">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="accent-line mb-8 mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('hotels.cta.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('hotels.cta.subtitle')}
              </p>
              <button 
                onClick={() => setContactFormOpen(true)} 
                className="btn-primary text-lg px-8 py-4"
              >
                {t('hotels.cta.button')}
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <UnifiedFooter />
      </div>
    </>
  );
}
