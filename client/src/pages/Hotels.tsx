import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, AlertTriangle, Shield, Target, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { analytics } from "@/lib/analytics";

/**
 * Red Teaming for Hotels - Home Page
 * Design: Minimalist-Institutional with Swiss typography tradition
 * Color: Red (#E63946) as primary accent, white background, dark gray text
 * Typography: Playfair Display (serif) for display, Inter (sans) for body
 */

export default function Hotels() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      analytics.trackNavigation(sectionId);
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
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      }, 2000);
    },
    onError: (error) => {
      analytics.trackFormError(error.message);
      toast.error("Fehler beim Senden der Anfrage: " + error.message);
    },
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 bg-background border-b border-border z-50">
        <div className="container flex items-center justify-between py-4 md:py-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 bg-transparent border-none cursor-pointer hover:opacity-80">
            <div className="text-primary font-bold text-base md:text-lg">RED TEAMING</div>
            <div className="text-xs md:text-sm text-muted-foreground">for Hotels</div>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('/')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              Home
            </button>
            <button onClick={() => navigate('/ansatz')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              Ansatz
            </button>
            <button onClick={() => navigate('/hotels')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              Hotels
            </button>
            <button onClick={() => navigate('/weitere-einsatzfelder')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              Weitere Einsatzfelder
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              Kontakt
            </button>
            <button onClick={() => { setContactFormOpen(true); analytics.trackCTAClick('header'); analytics.trackFormOpen(); }} className="btn-primary text-xs">Gespräch anfragen</button>
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
                Home
              </button>
              <button
                onClick={() => navigate('/ansatz')}
                className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Ansatz
              </button>
              <button
                onClick={() => navigate('/hotels')}
                className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Hotels
              </button>
              <button
                onClick={() => navigate('/weitere-einsatzfelder')}
                className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Weitere Einsatzfelder
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Kontakt
              </button>
              <button onClick={() => { setContactFormOpen(true); analytics.trackCTAClick('mobile_menu'); analytics.trackFormOpen(); }} className="btn-primary text-xs w-full">Gespräch anfragen</button>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Form Modal */}
      {contactFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Rückruf vereinbaren</h2>
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
                <p className="text-foreground font-bold mb-2">Vielen Dank!</p>
                <p className="text-sm text-muted-foreground">
                  Wir werden Sie in Kürze kontaktieren, um einen Termin zu vereinbaren.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="ihre@email.ch"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+41 78 XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Hotel / Unternehmen
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ihr Hotel"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Ihre Nachricht..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3 font-bold"
                >
                  Rückruf vereinbaren
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  * Erforderliche Felder
                </p>
              </form>
            )}
          </div>
        </div>
      )}

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
              Wenn Vorbereitung über Schaden entscheidet.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Red Teaming for Hotels unterstützt Direktionen dabei, die Krisen- und Notfallfähigkeit real zu testen, physisch, digital und organisatorisch.<br />
              Damit Entscheidungen im Ernstfall nicht improvisiert werden müssen.
            </p>
            <button onClick={() => { setContactFormOpen(true); analytics.trackCTAClick('hero'); analytics.trackFormOpen(); }} className="btn-primary flex items-center gap-2 text-sm md:text-base mx-auto">
              Gespräch anfragen (30 Minuten)
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Now Section - About */}
      <section id="about" className="container py-12 md:py-20">
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
                Die unbequeme Wahrheit
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                Hotels scheitern im Ernstfall selten an Technik,
                sondern an Führung, Vorbereitung und Realität.
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Pläne existieren, wurden aber nie real getestet</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Zuständigkeiten sind unklar oder nicht bekannt</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Cyber-Vorfälle blockieren operative Abläufe</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>IT-Ausfälle verhindern Evakuation und Kommunikation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Entscheidungen sind vorbereitet, oder werden im Ernstfall improvisiert</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Double Horror Scenario */}
      <section className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="text-primary" size={32} />
              </div>
            </div>
            <div className="md:col-span-10">
              <div className="accent-line mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Das doppelte Horror-Szenario
              </h2>
              <p className="text-base text-muted-foreground mb-8">
                Was passiert, wenn physische und digitale Ereignisse gleichzeitig eintreten?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-2">Ereignis</h3>
                  <p className="text-sm text-muted-foreground">Brand, Evakuation, Sonderlage</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-2">Cyber-Vorfall</h3>
                  <p className="text-sm text-muted-foreground">Phishing, Systemzugriff, Ausfall kritischer Systeme</p>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <p className="text-sm font-bold text-foreground mb-4">Konsequenz:</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>PMS / Schliesssysteme eingeschränkt</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Evakuationslisten nicht verfügbar</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Kommunikation blockiert</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Haftungsfragen ungeklärt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* What We Really Test - NEW SECTION */}
      <section className="container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="text-primary" size={32} />
              </div>
            </div>
            <div className="md:col-span-10">
              <div className="accent-line mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Was wir real prüfen</h2>
              <p className="text-base text-muted-foreground mb-4">
                Wir prüfen Hotels so, wie es ein reales Ereignis tun würde.
                Nicht theoretisch. Nicht zertifikatsgetrieben.
              </p>
              <p className="text-base font-semibold text-foreground mb-8">
                Unser Fokus liegt auf den Punkten, die im Ernstfall Entscheidungen verzögern oder verunmöglichen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm font-bold text-foreground">Physische Sicherheit & Evakuationsfähigkeit</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm font-bold text-foreground">Cyber-Resilienz & Phishing-Szenarien</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm font-bold text-foreground">Entscheidungswege & Führungsfähigkeit</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm font-bold text-foreground">Kritische Abhängigkeiten (IT, Technik, Personal)</p>
                </div>
              </div>
              
              {/* Venn-Diagramm */}
              <div className="my-12">
                <img 
                  src="/images/venn-diagram.png" 
                  alt="Ganzheitliche Hotelsicherheit entsteht in den Schnittstellen: Physische Sicherheit, Digitale Sicherheit und Organisation & Führung" 
                  className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <p className="text-base font-bold text-foreground text-center">
                  Entscheidend ist nicht, ob etwas existiert,
                  sondern ob es im Ernstfall funktioniert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="accent-line mb-8 mx-auto" style={{width: '4rem'}}></div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Unser Ansatz</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Zwei Ansätze, je nach Ausgangslage und Zielsetzung
            </p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Red Teaming Basic */}
          <div className="border border-border rounded-lg hover:border-primary transition-colors p-6 md:p-8">
              <h3 className="text-subheading mb-4">Red Teaming Basic</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Klarheit schaffen & Risiken sichtbar machen
              </p>
              <ul className="space-y-4 text-sm text-muted-foreground mb-8">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Strukturierte Risiko-Standortbestimmung (physisch & digital)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Reale Tests ausgewählter Szenarien</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Erkennung kritischer Cyber- & Phishing-Risiken</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Management Summary mit klaren Prioritäten</span>
              </li>
              </ul>
              <p className="text-xs font-bold text-foreground">IDEAL FÜR:</p>
              <p className="text-xs text-muted-foreground">
                Hotels, die wissen wollen, wo sie stehen, bevor sie vertiefen.
              </p>
          </div>

          {/* Red Teaming Advanced */}
          <div className="border border-border rounded-lg hover:border-primary transition-colors bg-card p-6 md:p-8">
            <h3 className="text-subheading mb-4">Red Teaming Advanced</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Haftungs- & Krisenrisiken aktiv reduzieren
            </p>
            <ul className="space-y-4 text-sm text-muted-foreground mb-8">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Erweiterte Cyber- & Phishing-Szenarien</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Verknüpfung von IT-Ausfällen mit realen Ereignissen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Vertiefte Analyse von Krisenmanagement & Governance</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Detaillierter Entscheid- & Massnahmenplan</span>
              </li>
            </ul>
            <p className="text-xs font-bold text-foreground">IDEAL FÜR:</p>
            <p className="text-xs text-muted-foreground">
              Empfohlen bei erhöhter Sichtbarkeit, Events, komplexer IT oder regulatorischem Druck.
            </p>
          </div>
        </div>
        </div>
        
        {/* Roadmap-Grafik als HTML/CSS-Komponente */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-background to-muted/20 border border-border rounded-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Sicherheit als Führungsaufgabe</h3>
              <p className="text-base text-muted-foreground">Red Teaming macht Entscheidungsfähigkeit entwickelbar</p>
            </div>
            
            
            {/* Roadmap-Grafik */}
              <div className="my-12">
                <img 
                  src="/images/roadmap.png" 
                  alt="Red Teaming Roadmap: Von formaler Sicherheit über getestete Realität zur geführten Sicherheit" 
                  className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            
            {/* Bottom Message */}
            <div className="mt-12 text-center">
              <p className="text-sm md:text-base font-bold text-foreground">
                Red Teaming schafft Entscheidungsfähigkeit, bevor sie gebraucht wird.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container py-12 md:py-16">
        <div className="accent-line mb-8"></div>
        <h2 className="text-heading mb-12">Ablauf der Zusammenarbeit</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { step: "01", title: "Gespräch", desc: "30-minütiges Erstgespräch auf Direktionsstufe" },
            { step: "02", title: "Test", desc: "Diskrete Testphase unter realen Bedingungen" },
            { step: "03", title: "Summary", desc: "Management-Summary & Priorisierung" },
            { step: "04", title: "Entscheid", desc: "Entscheid über nächste Schritte" }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-4">{item.step}</div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-card py-12 md:py-20">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="text-primary" size={32} />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Wenn Sie im Ernstfall entscheiden müssen, sollte die Entscheidungsgrundlage vorher existieren, nicht erst im Ereignis.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Ein 30-minütiges Gespräch reicht, um Klarheit zu schaffen.
            </p>
            <button onClick={() => { setContactFormOpen(true); analytics.trackCTAClick('cta_section'); analytics.trackFormOpen(); }} className="btn-primary flex items-center gap-2 text-sm md:text-base mx-auto">
              Gespräch anfragen
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Contact */}
      <footer id="contact" className="bg-card border-t border-border">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-primary font-bold text-lg">RED TEAMING</div>
                <div className="text-sm text-muted-foreground">for Hotels</div>
              </div>
              <p className="text-xs text-muted-foreground">
                Hotel Security ist heute ein Führungs- und Entscheidungsthema
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 md:justify-end">
              <div>
                <h3 className="font-bold text-foreground mb-4">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Weberstrasse 16<br />
                  CH-3005 Bern
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-4">Contact</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:contact@redteaming.ch" onClick={() => analytics.trackExternalLink('mailto:contact@redteaming.ch')} className="hover:text-primary transition-colors">
                    contact@redteaming.ch
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
              <p>© 2026 Red Teaming for Hotels. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/imprint" onClick={() => analytics.trackNavigation('imprint')} className="hover:text-primary transition-colors">
                  Impressum
                </a>
                <a href="/privacy" onClick={() => analytics.trackNavigation('privacy')} className="hover:text-primary transition-colors">
                  Datenschutz
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
