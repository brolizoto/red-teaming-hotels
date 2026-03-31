import { useState } from "react";
import { ArrowRight, AlertTriangle, Shield, Target, CheckCircle2, Award, RefreshCw, TrendingUp, X } from "lucide-react";
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
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029639105/7RP23gxa5ieCqbojNjMkFW/hotel-reception-hero_78804535.jpg" 
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
        <section id="about" className="container py-10 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="text-primary" size={28} />
                  </div>
                  <div className="accent-line flex-1"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                  {t('hotels.truth.title')}
                </h2>
                <p className="text-base text-muted-foreground mb-5">
                  {t('hotels.truth.intro')}
                </p>
                <div className="bg-card border border-border rounded-lg p-5">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {[1,2,3,4,5].map(i => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{t(`hotels.truth.point${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-first md:order-last">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029639105/7RP23gxa5ieCqbojNjMkFW/hotel-security-systems_2fc767ce.jpg" 
                  alt="Hotel security systems"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Das doppelte Schreckensszenario */}
        <section className="container py-10 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663029639105/7RP23gxa5ieCqbojNjMkFW/hotel-system-crisis_80cc689b.jpg" 
                  alt="Hotel system failure during crisis"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-primary" size={28} />
                  </div>
                  <div className="accent-line flex-1"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                  {t('hotels.scenario.title')}
                </h2>
                <p className="text-base text-muted-foreground mb-5">
                  {t('hotels.scenario.question')}
                </p>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-bold text-foreground mb-1.5">{t('hotels.scenario.event.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('hotels.scenario.event.description')}</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-bold text-foreground mb-1.5">{t('hotels.scenario.cyber.title')}</h3>
                    <p className="text-sm text-muted-foreground">{t('hotels.scenario.cyber.description')}</p>
                  </div>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                  <p className="text-sm font-bold text-foreground mb-3">{t('hotels.scenario.consequence.title')}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[1,2,3,4].map(i => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{t(`hotels.scenario.consequence.point${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Was wir real prüfen */}
        <section className="container py-10 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="text-primary" size={28} />
                </div>
              </div>
              <div className="accent-line mb-5 mx-auto" style={{width: '4rem'}}></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('hotels.testing.title')}</h2>
              <p className="text-base text-muted-foreground mb-3 max-w-3xl mx-auto">
                {t('hotels.testing.intro')}
              </p>
              <p className="text-base font-semibold text-foreground max-w-3xl mx-auto">
                {t('hotels.testing.focus')}
              </p>
            </div>
            
            {/* Image cards with stronger overlay for readability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {[
                { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029639105/7RP23gxa5ieCqbojNjMkFW/evacuation-training_8fa01d87.jpg", alt: "Evacuation training", key: "area1" },
                { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029639105/7RP23gxa5ieCqbojNjMkFW/cyber-phishing-work_9cbf9a5c.jpg", alt: "Cyber security and phishing scenarios", key: "area2" },
                { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029639105/7RP23gxa5ieCqbojNjMkFW/hotel-manager-leadership_b43db4c6.jpg", alt: "Hotel manager leadership", key: "area3" },
                { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029639105/7RP23gxa5ieCqbojNjMkFW/it-personnel-server-room_9a26c99c.jpg", alt: "IT personnel and server infrastructure", key: "area4" },
              ].map(({ src, alt, key }) => (
                <div key={key} className="relative overflow-hidden rounded-lg shadow-md group">
                  <img 
                    src={src}
                    alt={alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Stronger gradient overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-6">
                      <p className="text-base font-bold text-white">{t(`hotels.testing.${key}`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Venn-Diagramm */}
            <div className="mb-10">
              <img 
                src={i18n.language === 'en' 
                  ? 'https://d2xsxph8kpxj0f.cloudfront.net/310419663029639105/7RP23gxa5ieCqbojNjMkFW/venn-4-en-SRc4HuarTT694xpMQPAreG.png' 
                  : 'https://d2xsxph8kpxj0f.cloudfront.net/310419663029639105/7RP23gxa5ieCqbojNjMkFW/venn-4-de-mWzNJRJXargWxpCAC9Qbxc.png'}
                alt={t('hotels.testing.vennAlt')}
                className="w-full max-w-3xl mx-auto rounded-lg shadow-sm"
                loading="lazy"
              />
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
              <p className="text-base font-bold text-foreground text-center">
                {t('hotels.testing.quote')}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            ANGEBOTSBEREICH: Abo + Einmalige Standortbestimmung
            ============================================================ */}
        <section id="services" className="py-10 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <div className="accent-line mb-6 mx-auto" style={{width: '4rem'}}></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t('hotels.approach.title')}</h2>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  {t('hotels.approach.subtitle')}
                </p>
              </div>

              {/* Two Option Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">

                {/* Karte 1: Das Abo (empfohlen) */}
                <div className="relative border-2 border-primary rounded-xl bg-background shadow-md overflow-hidden">
                  {/* Top accent bar */}
                  <div className="h-1.5 w-full bg-primary"></div>
                  <div className="p-8">
                    {/* Badge */}
                    <div className="inline-flex mb-5">
                      <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
                        {t('hotels.approach.abo.badge')}
                      </span>
                    </div>

                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{t('hotels.approach.abo.title')}</h3>
                        <p className="text-sm text-primary font-semibold mt-1">{t('hotels.approach.abo.subtitle')}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {t('hotels.approach.abo.description')}
                    </p>

                    <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                      {[1,2,3,4,5].map(i => (
                        <li key={i} className="flex gap-3 items-start">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={16} />
                          <span>{t(`hotels.approach.abo.point${i}`)}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Certificate badge inline */}
                    <div className="flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-lg p-4 mb-5">
                      <img src="/certified-badge.svg" alt="Operational Trust Certified Hotel" className="w-14 h-14 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wide">Operational Trust Certified Hotel</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{i18n.language === 'en' ? 'Certificate issued after successful assessment' : 'Zertifikat nach erfolgreichem Assessment'}</p>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1">{t('hotels.approach.abo.idealFor')}</p>
                      <p className="text-xs text-muted-foreground">{t('hotels.approach.abo.idealForText')}</p>
                    </div>
                  </div>
                </div>

                {/* Karte 2: Einmalige Standortbestimmung */}
                <div className="border border-border rounded-xl bg-background shadow-sm overflow-hidden hover:border-primary/40 transition-colors">
                  {/* Top accent bar (lighter) */}
                  <div className="h-1.5 w-full bg-border"></div>
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-5 mt-0">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="text-foreground/60" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{t('hotels.approach.standortbestimmung.title')}</h3>
                        <p className="text-sm text-muted-foreground font-semibold mt-1">{t('hotels.approach.standortbestimmung.subtitle')}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {t('hotels.approach.standortbestimmung.description')}
                    </p>

                    <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-foreground/50 flex-shrink-0 mt-0.5" size={16} />
                        <span>{t('hotels.approach.standortbestimmung.point1')}</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-foreground/50 flex-shrink-0 mt-0.5" size={16} />
                        <span>{t('hotels.approach.standortbestimmung.point2')}</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="text-foreground/50 flex-shrink-0 mt-0.5" size={16} />
                        <span>{t('hotels.approach.standortbestimmung.point3')}</span>
                      </li>
                      <li className="flex gap-3 items-start text-muted-foreground/60">
                        <X className="text-muted-foreground/40 flex-shrink-0 mt-0.5" size={16} />
                        <span>{t('hotels.approach.standortbestimmung.point4')}</span>
                      </li>
                    </ul>

                    {/* Spacer to align footer with Abo card */}
                    <div className="bg-muted/40 rounded-lg p-4 mb-5">
                      <p className="text-xs text-muted-foreground text-center italic">
                        {i18n.language === 'en' 
                          ? 'No certificate, no ongoing monitoring — a clear starting point.' 
                          : 'Kein Zertifikat, kein laufendes Monitoring — ein klarer Ausgangspunkt.'}
                      </p>
                    </div>

                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1">{t('hotels.approach.standortbestimmung.idealFor')}</p>
                      <p className="text-xs text-muted-foreground">{t('hotels.approach.standortbestimmung.idealForText')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3-Phasen-Modell — stronger visual */}
              <div className="bg-foreground/[0.03] border border-border rounded-xl p-8 md:p-10">
                <div className="text-center mb-8">
                  <div className="accent-line mb-5 mx-auto" style={{width: '3rem'}}></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{t('hotels.approach.phases.title')}</h3>
                  <p className="text-base text-muted-foreground max-w-2xl mx-auto">{t('hotels.approach.phases.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
                  {/* Phase 1 */}
                  <div className="relative flex flex-col">
                    <div className="bg-background border-2 border-primary/40 rounded-xl p-6 h-full mx-2 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                          <CheckCircle2 className="text-white" size={22} />
                        </div>
                        <div>
                          <p className="text-xs font-black text-primary tracking-widest uppercase">{t('hotels.approach.phases.phase1.label')}</p>
                          <p className="text-xs text-muted-foreground font-medium">{t('hotels.approach.phases.phase1.period')}</p>
                        </div>
                      </div>
                      <h4 className="text-base font-bold text-foreground mb-2">{t('hotels.approach.phases.phase1.title')}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t('hotels.approach.phases.phase1.description')}</p>
                    </div>
                    {/* Arrow connector */}
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-primary rounded-full items-center justify-center shadow">
                      <ArrowRight className="text-white" size={14} />
                    </div>
                    {/* Mobile down arrow */}
                    <div className="flex md:hidden justify-center my-2">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <ArrowRight className="text-primary rotate-90" size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="relative flex flex-col">
                    <div className="bg-background border border-border rounded-xl p-6 h-full mx-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="text-primary" size={22} />
                        </div>
                        <div>
                          <p className="text-xs font-black text-primary tracking-widest uppercase">{t('hotels.approach.phases.phase2.label')}</p>
                          <p className="text-xs text-muted-foreground font-medium">{t('hotels.approach.phases.phase2.period')}</p>
                        </div>
                      </div>
                      <h4 className="text-base font-bold text-foreground mb-2">{t('hotels.approach.phases.phase2.title')}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t('hotels.approach.phases.phase2.description')}</p>
                    </div>
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-primary/60 rounded-full items-center justify-center shadow">
                      <ArrowRight className="text-white" size={14} />
                    </div>
                    <div className="flex md:hidden justify-center my-2">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                        <ArrowRight className="text-primary rotate-90" size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="flex flex-col">
                    <div className="bg-background border border-border rounded-xl p-6 h-full mx-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <RefreshCw className="text-primary" size={22} />
                        </div>
                        <div>
                          <p className="text-xs font-black text-primary tracking-widest uppercase">{t('hotels.approach.phases.phase3.label')}</p>
                          <p className="text-xs text-muted-foreground font-medium">{t('hotels.approach.phases.phase3.period')}</p>
                        </div>
                      </div>
                      <h4 className="text-base font-bold text-foreground mb-2">{t('hotels.approach.phases.phase3.title')}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t('hotels.approach.phases.phase3.description')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roadmap-Grafik */}
              <div className="mt-10">
                <div className="bg-background border border-border rounded-xl p-8 md:p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{t('hotels.approach.roadmap.title')}</h3>
                    <p className="text-base text-muted-foreground">{t('hotels.approach.roadmap.subtitle')}</p>
                  </div>
                  <img 
                    src={i18n.language === 'en' 
                      ? 'https://d2xsxph8kpxj0f.cloudfront.net/310419663029639105/7RP23gxa5ieCqbojNjMkFW/roadmap-warm-en_c347869b.png' 
                      : 'https://d2xsxph8kpxj0f.cloudfront.net/310419663029639105/7RP23gxa5ieCqbojNjMkFW/roadmap-warm-de_64ef8ef4.png'}
                    alt={t('hotels.approach.roadmap.alt')}
                    className="w-full max-w-5xl mx-auto rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zertifikat-Sektion */}
        <section className="container py-10 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="flex justify-center md:justify-start">
                <img 
                  src="/certified-badge.svg" 
                  alt="Operational Trust Certified Hotel Badge"
                  className="w-52 h-52 md:w-64 md:h-64"
                />
              </div>
              <div>
                <div className="accent-line mb-5"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {i18n.language === 'en' ? 'Operational Trust Certified Hotel' : 'Operational Trust Certified Hotel'}
                </h2>
                <p className="text-base text-muted-foreground mb-5 leading-relaxed">
                  {i18n.language === 'en' 
                    ? 'Hotels that successfully complete the initial assessment receive the "Operational Trust Certified Hotel" certificate. It documents that operational security has been tested under realistic conditions — physically, digitally and organisationally.' 
                    : 'Hotels, die das initiale Assessment erfolgreich abschliessen, erhalten das Zertifikat "Operational Trust Certified Hotel". Es dokumentiert, dass die operative Sicherheit unter realistischen Bedingungen geprüft wurde — physisch, digital und organisatorisch.'}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {i18n.language === 'en'
                    ? 'The certificate is valid for 12 months and is renewed annually as part of the subscription. It serves as verifiable proof for management, owners and insurers.'
                    : 'Das Zertifikat gilt für 12 Monate und wird im Rahmen des Abos jährlich erneuert. Es dient als nachweisbarer Beleg gegenüber Direktion, Eigentümern und Versicherern.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ablauf der Zusammenarbeit */}
        <section className="bg-muted/30 py-10 md:py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="accent-line mb-6"></div>
              <h2 className="text-heading mb-10">{t('hotels.process.title')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="relative">
                    <div className="text-center bg-background rounded-xl p-6 border border-border shadow-sm h-full">
                      <div className="text-4xl md:text-5xl font-black text-primary mb-4 leading-none">
                        {String(i).padStart(2, '0')}
                      </div>
                      <h3 className="font-bold text-foreground mb-2 text-sm md:text-base">{t(`hotels.process.step${i}.title`)}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{t(`hotels.process.step${i}.description`)}</p>
                    </div>
                    {i < 4 && (
                      <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-5 h-5 bg-primary/20 rounded-full items-center justify-center">
                        <ArrowRight className="text-primary" size={12} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card py-14 md:py-20" id="contact">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="accent-line mb-8 mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
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
