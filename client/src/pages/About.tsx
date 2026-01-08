import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

/**
 * Red Teaming for Hotels - About Page
 * Completely redesigned with 7 sections based on provided content
 */

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setContactFormOpen(false);
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 2000);
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
            <button onClick={() => navigate('/')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              Kontakt
            </button>
            <button onClick={() => setContactFormOpen(true)} className="btn-primary text-xs">Gespräch anfragen</button>
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
                onClick={() => navigate('/')}
                className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Kontakt
              </button>
              <button onClick={() => setContactFormOpen(true)} className="btn-primary text-xs w-full">Gespräch anfragen</button>
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

      {/* SECTION 1 – INTRO */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="accent-line mb-8"></div>
          <h1 className="text-display mb-6">
            Über uns
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Red Teaming for Hotels versteht sich nicht als klassische Sicherheitsberatung.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Unsere Rolle ist es, Klarheit für Direktionen zu schaffen – dort, wo Entscheidungen unter Druck getroffen werden müssen.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Wir prüfen Hotels nicht theoretisch, sondern so, wie es ein reales Ereignis tun würde:
            unter realen Bedingungen, im laufenden Betrieb und mit Fokus auf tatsächliche Handlungsfähigkeit.
          </p>
          <button onClick={() => setContactFormOpen(true)} className="btn-primary flex items-center gap-2">
            Gespräch anfragen
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* SECTION 2 – WAS RED TEAMING BEDEUTET */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="accent-line mb-6"></div>
          <h2 className="text-heading mb-6">
            Was Red Teaming für Hotels bedeutet
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Red Teaming ist keine Theorie, kein Audit und kein Zertifikat.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Es ist eine realitätsnahe Prüfung, bei der wir Hotels aus Sicht eines echten Ereignisses betrachten.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Nicht entlang von Checklisten –
            sondern entlang von Risiko, Abläufen, Abhängigkeiten und Entscheidungswegen.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Red Teaming verbindet physische, digitale und organisatorische Aspekte zu einem Gesamtbild:
          </p>
          <p className="text-base font-bold text-foreground">
            Was passiert wirklich, wenn etwas schiefgeht?
          </p>
        </div>
      </section>

      {/* SECTION 3 – WARUM KLASSISCHE SICHERHEIT NICHT REICHT */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="accent-line mb-6"></div>
          <h2 className="text-heading mb-6">
            Warum Sicherheit oft trügt
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            In vielen Hotels existiert Sicherheit auf dem Papier – aber nicht im Ernstfall.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground mb-6">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Pläne existieren, wurden aber nie real getestet</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Zuständigkeiten sind unklar oder überschneiden sich</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Dokumentation ist unvollständig oder veraltet</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Cyber-Vorfälle (z. B. Phishing) blockieren operative Abläufe</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Evakuation, Technik und Kommunikation sind nicht abgestimmt</span>
            </li>
          </ul>
          <p className="text-base font-bold text-foreground">
            Red Teaming macht diese Lücken sichtbar – bevor sie Schaden verursachen.
          </p>
        </div>
      </section>

      {/* SECTION 4 – WAS WIR KONKRET PRÜFEN */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="accent-line mb-6"></div>
          <h2 className="text-heading mb-6">
            Was wir real prüfen
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Unsere Prüfungen orientieren sich an realen Szenarien – nicht an Modellen.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Wir analysieren unter anderem:
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground mb-6">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Physische Sicherheit (Zutritt, Zonen, Perimeter, Evakuation)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Cyber & Phishing (Systemzugriffe, Abhängigkeiten, Reaktionsfähigkeit)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Organisation & Führung (Rollen, Entscheidungswege, Eskalation)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Dokumentation & Nachvollziehbarkeit</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Versicherungs- und Haftungsrelevanz</span>
            </li>
          </ul>
          <p className="text-base font-bold text-foreground">
            Entscheidend ist nicht, ob etwas existiert –
            sondern ob es im Ernstfall funktioniert.
          </p>
        </div>
      </section>

      {/* SECTION 5 – KLARE ABGRENZUNG */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="accent-line mb-6"></div>
          <h2 className="text-heading mb-6">
            Was Red Teaming bewusst nicht ist
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Red Teaming ist:
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground mb-6">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>kein Zertifizierungsprozess</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>kein klassisches IT-Audit</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>keine Beratung aus dem Konferenzraum</span>
            </li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            Red Teaming ist:
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground mb-6">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>realitätsnah</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>unabhängig</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>unangenehm ehrlich</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>auf Entscheidungssicherheit ausgelegt</span>
            </li>
          </ul>
          <p className="text-base font-bold text-foreground">
            Unser Ziel ist Klarheit – nicht Beruhigung.
          </p>
        </div>
      </section>

      {/* SECTION 6 – UNSERE ROLLE */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="accent-line mb-6"></div>
          <h2 className="text-heading mb-6">
            Unsere Rolle
          </h2>
          <p className="text-base text-muted-foreground mb-6">
            Wir unterstützen Direktionen dabei, Risiken vor dem Ereignis zu verstehen –
            nicht danach erklären zu müssen, warum etwas nicht funktioniert hat.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Red Teaming schafft:
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground mb-6">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>belastbare Entscheidungsgrundlagen</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>klare Prioritäten</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Transparenz gegenüber Eigentümern, Versicherern und Behörden</span>
            </li>
          </ul>
          <p className="text-base font-bold text-foreground">
            Kurz: Handlungsfähigkeit, wenn sie zählt.
          </p>
        </div>
      </section>

      {/* SECTION 7 – ABSCHLUSS / CTA */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="accent-line mb-6"></div>
          <h2 className="text-heading mb-6">
            Der nächste Schritt
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Wenn Sie im Ernstfall entscheiden müssen,
            sollte die Entscheidungsgrundlage vorher existieren.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Ein 30-minütiges Gespräch reicht aus, um zu klären,
            ob und wo realistischer Prüfbedarf besteht.
          </p>
          <p className="text-base text-muted-foreground mb-2">
            Kein Verkaufsgespräch.
          </p>
          <p className="text-base text-muted-foreground mb-8">
            Keine Verpflichtung.
          </p>
          <button onClick={() => setContactFormOpen(true)} className="btn-primary flex items-center gap-2">
            Gespräch anfragen (30 Minuten)
            <ArrowRight size={16} />
          </button>
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
                  <a href="mailto:contact@rt4h.ch" className="hover:text-primary transition-colors">
                    contact@rt4h.ch
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
              <p>© 2026 Red Teaming for Hotels. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="/imprint" className="hover:text-primary transition-colors">
                  Impressum
                </a>
                <a href="/privacy" className="hover:text-primary transition-colors">
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
