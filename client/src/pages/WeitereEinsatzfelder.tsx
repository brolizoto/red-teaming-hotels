import { ArrowRight, Menu, X, Building2, MapPin, Home as HomeIcon, Flame, Shield, Target, Users } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { analytics } from "../lib/analytics";
import { SEO } from "@/components/SEO";
import { trpc } from "../lib/trpc";
import { toast } from "sonner";

/**
 * Weitere Einsatzfelder - Gebündelte Seite für nicht-Hotel Anwendungen
 * Unternehmen, Standorte, private Liegenschaften, Fire Checks
 */

export default function WeitereEinsatzfelder() {
  const seoData = {
    title: "Weitere Einsatzfelder",
    description: "Red Teaming für Unternehmen, Standorte, private Liegenschaften und Fire Checks. Branchenübergreifend einsetzbar überall dort, wo Sicherheit, Krisenbereitschaft und Prozessqualität entscheidend sind.",
    canonical: "https://redteaming.ch/weitere-einsatzfelder",
    keywords: "Red Teaming Unternehmen, Security Assessment, Standortsicherheit, Liegenschaften Sicherheit, Fire Checks, Krisenmanagement, Physical Security"
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    honeypot: '', // Honeypot-Feld (sollte leer bleiben)
    formOpenedAt: 0 // Zeitstempel wann Formular geöffnet wurde
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
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
        setFormData({ name: '', email: '', phone: '', company: '', message: '', honeypot: '', formOpenedAt: 0 });
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
            <button onClick={() => { setContactFormOpen(true); setFormData(prev => ({ ...prev, formOpenedAt: Date.now() })); }} className="btn-primary text-xs">Gespräch anfragen</button>
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
              <button onClick={() => { setContactFormOpen(true); setFormData(prev => ({ ...prev, formOpenedAt: Date.now() })); }} className="btn-primary text-xs w-full">Gespräch anfragen</button>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Form Modal */}
      {contactFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Gespräch anfragen</h2>
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
                  Wir werden Sie in Kürze kontaktieren.
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
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ihr Unternehmen"
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

                <button
                  type="submit"
                  className="w-full btn-primary py-3 font-bold"
                >
                  Gespräch anfragen
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
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="accent-line mb-8"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Weitere Einsatzfelder
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Red Teaming ist branchenübergreifend einsetzbar, überall dort, 
              wo Sicherheit, Krisenbereitschaft und Prozessqualität entscheidend sind.
            </p>
            <p className="text-lg text-muted-foreground">
              Neben der spezialisierten Anwendung in der Hotellerie bieten wir Red Teaming 
              für Unternehmen, Standorte, private Liegenschaften und als Teil physischer 
              Sicherheitsüberprüfungen an.
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
                Unternehmen
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                Red Teaming für Unternehmen prüft die Widerstandsfähigkeit von Organisationen 
                gegenüber physischen, digitalen und organisatorischen Bedrohungen.
              </p>
              <p className="text-base text-muted-foreground mb-6">
                Wir testen Zutrittskontrolle, IT-Sicherheit, Krisenmanagement und 
                Kommunikationswege unter realen Bedingungen, nicht theoretisch, sondern so, 
                wie es ein Angreifer oder ein Notfall tun würde.
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Typische Prüfbereiche:</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Physische Sicherheit: Zutrittskontrolle, Perimeter, Besuchermanagement</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Digitale Sicherheit: Phishing, Social Engineering, IT-Infrastruktur</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Organisatorische Resilienz: Krisenmanagement, Notfallpläne, Kommunikation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Prozessqualität: Abhängigkeiten, Entscheidungswege, Dokumentation</span>
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
                  Standorte & Betriebsstätten
                </h2>
                <p className="text-base text-muted-foreground mb-4">
                  Für Unternehmen mit mehreren Standorten oder kritischen Betriebsstätten 
                  prüfen wir standortspezifische Sicherheitskonzepte und deren Umsetzung.
                </p>
                <p className="text-base text-muted-foreground mb-6">
                  Besonders relevant für Produktionsstandorte, Logistikzentren, 
                  Rechenzentren oder Standorte mit besonderen Sicherheitsanforderungen.
                </p>
                <div className="bg-background border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Fokus:</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Standortspezifische Risiken und Schwachstellen</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Koordination zwischen Standorten im Krisenfall</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Evakuierungskonzepte und Notfallpläne</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Lokale vs. zentrale Sicherheitsverantwortung</span>
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
                Private Liegenschaften
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                Für private Liegenschaften, Wohnanlagen oder Immobilien mit besonderen 
                Sicherheitsanforderungen bieten wir diskrete Red Teaming Assessments an.
              </p>
              <p className="text-base text-muted-foreground mb-6">
                Wir prüfen physische Sicherheitskonzepte, Zutrittskontrolle, 
                Überwachungssysteme und Notfallpläne unter realen Bedingungen.
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Leistungen:</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Diskrete Prüfung physischer Sicherheitsmaßnahmen</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Bewertung von Zutrittskontrolle und Perimeter</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Überprüfung von Überwachungs- und Alarmsystemen</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Notfallplanung und Evakuierungskonzepte</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Checks */}
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
                  Brandschutz
                </h2>
                <p className="text-base text-muted-foreground mb-4">
                  Red Teaming prüft im Rahmen von Assessments Brandschutzmassnahmen aus grundsätzlicher Perspektive, d.h. die Anwendbarkeit von Brandschutzkonzepten, Evakuierungspläne und Alarmierungssysteme.
                </p>
                <p className="text-base text-muted-foreground mb-6">
                  Wichtig: Das Assessment ersetzt keine behördliche Kontrolle, trägt aber zu einer erhöhten Vorbereitung bei.
                </p>
                <div className="bg-background border border-border rounded-lg p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Prüfbereiche:</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Evakuierungswege und Notausgänge (Zugänglichkeit, Beschilderung)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Alarmierungssysteme und Kommunikation im Brandfall</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Brandschutzausrüstung (Feuerlöscher, Sprinkler, Rauchmelder)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span>Praktische Umsetzung von Brandschutzplänen</span>
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
            Gespräch anfragen
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Lassen Sie uns unverbindlich besprechen, wie Red Teaming 
            Ihre Organisation weiterbringen kann.
          </p>
          <button onClick={() => { setContactFormOpen(true); setFormData(prev => ({ ...prev, formOpenedAt: Date.now() })); }} className="btn-primary text-lg px-8 py-4">
            Kontakt aufnehmen
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
                Realitätsnahe Prüfung von Sicherheit, Prozessen und Krisenbereitschaft
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Navigation</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <button onClick={() => navigate('/')} className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer">
                  Home
                </button>
                <button onClick={() => navigate('/ansatz')} className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer">
                  Ansatz
                </button>
                <button onClick={() => navigate('/hotels')} className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer">
                  Hotels
                </button>
                <button onClick={() => navigate('/weitere-einsatzfelder')} className="hover:text-primary transition-colors text-left bg-transparent border-none cursor-pointer">
                  Weitere Einsatzfelder
                </button>
              </div>
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
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2026 Red Teaming. All rights reserved.</p>
            <div className="flex gap-6">
              <button onClick={() => navigate('/impressum')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                Impressum
              </button>
              <button onClick={() => navigate('/datenschutz')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
