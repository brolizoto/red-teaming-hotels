import { ArrowRight, Menu, X, Shield, Target, AlertTriangle, CheckCircle2, Users, Layers, FileText } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { SEO } from "@/components/SEO";
import { trpc } from "../lib/trpc";
import { toast } from "sonner";
import { analytics } from "../lib/analytics";

/**
 * Red Teaming - Ansatz/Methodik Seite
 * Branchenunabhängig, fokussiert auf die Red Teaming Methodik
 */

export default function Ansatz() {
  const seoData = {
    title: "Ansatz",
    description: "Red Teaming Methodik: Realitätsnahe Prüfung von Organisationen aus der Perspektive eines echten Ereignisses. Physisch, digital und organisatorisch – nicht entlang von Checklisten, sondern entlang von Risiko und Abhängigkeiten.",
    canonical: "https://redteaming.ch/ansatz",
    keywords: "Red Teaming Methodik, Red Teaming Ansatz, Security Assessment Methodik, Krisenmanagement Methodik, Penetration Test, Physical Security Testing, Cyber Security Assessment"
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
              Unser Ansatz
            </h1>
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6 mb-8">
              <p className="text-xl md:text-2xl font-bold text-foreground italic">
                "Entscheidungsgrundlagen müssen vor einem Sicherheitsereignis erarbeitet sein – nicht erst im Krisenfall."
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
                Was ist Red Teaming?
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                Red Teaming prüft die Resilienz einer Organisation anhand realistischer Ereignisszenarien. Keine Theorie und kein Audit - aber der direkte Weg zu einer umfassende Sicherheitsstrategie, die individuellen Risiken, Abläufen, Abhängigkeiten und Entscheidungswegen im Alltag entspricht.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Im Sicherheitssektor simuliert "Red Team" ein gegnerisches Verhalten, um die eigene Abwehr zu testen. Übertragen auf Organisationen bedeutet das: In Absprache mit der Direktion evaluieren wir die Reaktion auf ein künstlich herbeigeführtes Sicherheitsereignis - physisch, digital und organisatorisch, um ein umfassendes und massgeschneidertes Sicherheitskonzept zu ermöglichen.
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
                Warum Red Teaming?
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                In vielen Organisationen existiert Sicherheit auf dem Papier, aber nicht im Ernstfall. 
                Pläne wurden nie real getestet, Zuständigkeiten sind unklar, Dokumentation ist veraltet.
              </p>
              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Typische Lücken:</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Pläne existieren, wurden aber nie unter realen Bedingungen getestet</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Zuständigkeiten sind unklar oder überschneiden sich</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Dokumentation ist unvollständig, veraltet oder nicht zugänglich</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Abhängigkeiten zwischen Systemen und Prozessen sind nicht bekannt</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Entscheidungswege versagen unter Druck</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg font-bold text-foreground">
                Red Teaming macht diese Lücken sichtbar, bevor sie Schaden verursachen.
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
                  Drei Dimensionen
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  Red Teaming prüft Organisationen entlang von drei Dimensionen, 
                  die im Ernstfall zusammenwirken:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-lg p-6">
                <Shield className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-3">Physisch</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Zutrittskontrolle, Perimeter, Evakuierung, physische Sicherheitskonzepte
                </p>
                <p className="text-xs text-muted-foreground">
                  Wir prüfen, ob physische Sicherheitsmassnahmen unter realen Bedingungen funktionieren, 
                  nicht nur auf dem Papier.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <Target className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-3">Digital</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Phishing, Social Engineering, IT-Infrastruktur, Datensicherheit
                </p>
                <p className="text-xs text-muted-foreground">
                  Wir testen, wie Organisationen auf digitale Angriffe reagieren und 
                  ob IT-Sicherheitskonzepte im Ernstfall greifen.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <Users className="text-primary mb-4" size={32} />
                <h3 className="text-lg font-bold text-foreground mb-3">Organisatorisch</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Krisenmanagement, Kommunikation, Entscheidungswege, Prozesse
                </p>
                <p className="text-xs text-muted-foreground">
                  Wir analysieren, ob Organisationen handlungsfähig bleiben, 
                  wenn Entscheidungen unter Druck getroffen werden müssen.
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
                Wie funktioniert ein Red Teaming Assessment?
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                Ein Red Teaming Assessment folgt einem strukturierten Ablauf, 
                der auf die spezifischen Risiken und Anforderungen der Organisation abgestimmt wird.
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
                  <h3 className="text-lg font-bold text-foreground mb-2">Vorbereitung & Scoping</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Gemeinsam definieren wir Ziele, Scope und Rahmenbedingungen des Assessments. 
                    Welche Szenarien sind relevant? Welche Bereiche sollen geprüft werden? 
                    Welche Einschränkungen gibt es?
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ergebnis: Klares Verständnis der Risiken, Ziele und Erwartungen
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
                  <h3 className="text-lg font-bold text-foreground mb-2">Durchführung</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Wir führen das Assessment unter realen Bedingungen durch, 
                    physisch, digital oder organisatorisch. Dabei simulieren wir realistische Szenarien 
                    und dokumentieren alle Beobachtungen.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ergebnis: Realitätsnahe Prüfung der Sicherheitskonzepte und Prozesse
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
                  <h3 className="text-lg font-bold text-foreground mb-2">Analyse & Bewertung</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Wir analysieren die Ergebnisse und bewerten Schwachstellen nach Risiko und Auswirkung. 
                    Wo sind kritische Lücken? Welche Abhängigkeiten wurden sichtbar? 
                    Was funktioniert bereits gut?
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ergebnis: Klare Priorisierung von Handlungsfeldern
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
                  <h3 className="text-lg font-bold text-foreground mb-2">Reporting & Empfehlungen</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Wir liefern einen detaillierten Bericht mit konkreten, umsetzbaren Empfehlungen. 
                    Keine theoretischen Konzepte, sondern praktische Massnahmen, 
                    die die Handlungsfähigkeit im Ernstfall verbessern.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ergebnis: Handlungsplan mit priorisierten Massnahmen
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
              Red Teaming vs. Audits & Penetration Tests
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              Wie unterscheidet sich Red Teaming von klassischen Audits und Penetration Tests?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-primary" size={24} />
                  <h3 className="text-lg font-bold text-foreground">Red Teaming</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Realitätsnahe Simulation von Ereignissen</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Ganzheitliche Betrachtung (physisch, digital, organisatorisch)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Fokus auf Handlungsfähigkeit im Ernstfall</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Keine Checklisten, sondern szenariobasiert</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Zeigt, was wirklich passiert</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="text-muted-foreground" size={24} />
                  <h3 className="text-lg font-bold text-foreground">Audits & Pen Tests</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>Prüfung entlang von Standards und Checklisten</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>Fokus auf einzelne Bereiche</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>Dokumentation und Compliance-Nachweis</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>Theoretische Bewertung von Massnahmen</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>Zeigt, was dokumentiert ist</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-base text-foreground font-bold mb-2">
                Red Teaming ersetzt keine Audits oder Penetration Tests.
              </p>
              <p className="text-sm text-muted-foreground">
                Es ergänzt sie durch eine realitätsnahe Perspektive: 
                Was passiert wirklich, wenn Theorie auf Praxis trifft?
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
                <a href="mailto:contact@redteaming.ch" className="hover:text-primary transition-colors">
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
