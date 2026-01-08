import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

/**
 * Red Teaming for Hotels - Home Page
 * Design: Minimalist-Institutional with Swiss typography tradition
 * Color: Red (#E63946) as primary accent, white background, dark gray text
 * Typography: Playfair Display (serif) for display, Inter (sans) for body
 */

export default function Home() {
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
    // Here you would typically send the form data to a backend
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
          <div className="flex items-center gap-2">
            <div className="text-primary font-bold text-base md:text-lg">RED TEAMING</div>
            <div className="text-xs md:text-sm text-muted-foreground">for Hotels</div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('/about')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
              Über uns
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
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
                onClick={() => navigate('/about')}
                className="text-sm hover:text-primary transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Über uns
              </button>
              <button
                onClick={() => scrollToSection('services')}
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
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[600px] md:min-h-[700px]">
          {/* Text Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-16 md:py-24 bg-background">
            <div className="accent-line mb-8"></div>
            <h1 className="text-display mb-6">
              Wenn Vorbereitung über Schaden entscheidet.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-md">
              Red Teaming für Hotels unterstützt Direktionen dabei, Krisen- und Notfallfähigkeit real zu testen – physisch, digital und organisatorisch.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setContactFormOpen(true)} className="btn-primary flex items-center gap-2 text-sm md:text-base">
                Gespräch anfragen (30 Minuten)
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:block bg-gray-100 overflow-hidden">
            <img
              src="/images/hero-hotel-lobby.jpg"
              alt="Modern hotel lobby with minimalist design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Now Section - About */}
      <section id="about" className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:gap-16 items-center">
          <div>
            <div className="accent-line mb-6"></div>
            <h2 className="text-heading mb-6">
              Die unbequeme Wahrheit
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Sicherheit scheitert selten an Technik – sondern an Führung, Vorbereitung und Realität.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Pläne existieren, werden aber nie real getestet</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Zuständigkeiten sind unklar</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Dokumentation ist unvollständig</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>IT-Ausfälle blockieren Krisenabläufe</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 overflow-hidden h-64 md:h-full min-h-96 rounded-lg">
            <img
              src="/images/security-corridor.jpg"
              alt="Hotel corridor with security systems"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* The Double Horror Scenario */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:gap-16 items-center">
          <div className="bg-gray-100 overflow-hidden h-64 md:h-full min-h-96 order-2 md:order-1 rounded-lg">
            <img
              src="/images/crisis-management.jpg"
              alt="Crisis management and decision-making"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="accent-line mb-6"></div>
            <h2 className="text-heading mb-6">
              Das doppelte Horror-Szenario
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              Was passiert, wenn zwei Dinge gleichzeitig eintreten?
            </p>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-bold text-foreground mb-2">Ereignis</h3>
                <p className="text-sm text-muted-foreground">Brand, Evakuation, Sonderlage</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Cyber-Vorfall</h3>
                <p className="text-sm text-muted-foreground">Phishing, Systemverlust</p>
              </div>
            </div>
            <div className="bg-card border border-border p-6">
              <p className="text-sm font-bold text-foreground mb-3">Konsequenz:</p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• PMS / Schliesssysteme eingeschränkt</li>
                <li>• Evakuationslisten nicht verfügbar</li>
                <li>• Kommunikation blockiert</li>
                <li>• Versicherer verlangt Nachweise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Services Section */}
      <section id="services" className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h2 className="text-heading mb-12">Unser Ansatz</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Red Teaming Basic */}
          <div className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors">
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img
                src="/images/hero-hotel-lobby.jpg"
                alt="Red Teaming Basic Service"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-subheading mb-4">Red Teaming Basic</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Entscheidungsfähigkeit herstellen
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Strukturierte Risiko- & Schutz-Standortbestimmung</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Reale Tests ausgewählter Szenarien</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Bewertung von Notfall- & Evakuationsfähigkeit</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Management Summary mit klaren Prioritäten</span>
              </li>
              </ul>
              <p className="text-xs font-bold text-foreground">IDEAL FÜR:</p>
              <p className="text-xs text-muted-foreground">
                Hotels, die wissen wollen, wo sie stehen – bevor sie vertiefen.
              </p>
            </div>
          </div>

          {/* Red Teaming Advanced */}
          <div className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors bg-card">
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img
                src="/images/security-corridor.jpg"
                alt="Red Teaming Advanced Service"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8">
            <h3 className="text-subheading mb-4">Red Teaming Advanced</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Haftungs- & Krisenrisiken aktiv reduzieren
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground mb-8">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Erweiterte Szenarien & 24h-Betrachtung</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Integrierte physische & digitale Eintrittspunkte</span>
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
      </section>

      <div className="section-divider"></div>

      {/* Process Section */}
      <section className="container py-16 md:py-24">
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

      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Wenn Sie im Ernstfall entscheiden müssen, sollte die Entscheidungsgrundlage vorher existieren.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Ein 30-minütiges Gespräch reicht, um Klarheit zu schaffen.
          </p>
          <button onClick={() => setContactFormOpen(true)} className="btn-primary flex items-center gap-2 text-sm md:text-base">
            Gespräch anfragen
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Footer - Contact */}
      <footer id="contact" className="bg-card border-t border-border">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div>
              <div className="text-primary font-bold text-lg mb-2">RED TEAMING</div>
              <div className="text-sm text-muted-foreground">for Hotels</div>
              <p className="text-xs text-muted-foreground mt-4">
                Hotel Security ist heute ein Führungs- und Entscheidungs­thema
              </p>
            </div>
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
                </a><br />
                <a href="tel:+41787401929" className="hover:text-primary transition-colors">
                  +41 78 740 19 29
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
            <p>© 2026 Red Teaming for Hotels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
