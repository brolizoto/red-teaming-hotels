import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

/**
 * Red Teaming for Hotels - About Page
 * Design: Minimalist-Institutional
 * Comprehensive company information and philosophy
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
      <section className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h1 className="text-display mb-6">Über uns</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Red Teaming for Hotels versteht sich nicht als klassische Sicherheitsberatung. Unsere Rolle ist es, Klarheit für die Direktion zu schaffen.
        </p>
      </section>

      <div className="section-divider"></div>

      {/* Our Role */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="accent-line mb-6"></div>
            <h2 className="text-heading mb-6">Unsere Rolle</h2>
            <p className="text-base text-muted-foreground mb-4">
              Wir prüfen Hotels realistisch – so, wie ein echtes Ereignis es tun würde.
            </p>
            <p className="text-base text-muted-foreground">
              Nicht theoretisch. Nicht zertifikatsgetrieben. Sondern unter realen Bedingungen und im laufenden Betrieb.
            </p>
          </div>
          <div className="bg-card border border-border p-8">
            <h3 className="font-bold text-foreground mb-4">Kernprinzipien</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Realistische Prüfung unter echten Bedingungen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Fokus auf Handlungsfähigkeit, nicht Compliance</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Unabhängige und diskrete Prüfungen</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Klare Entscheidungsgrundlagen für die Direktion</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Why Red Teaming */}
      <section className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h2 className="text-heading mb-8">Warum Red Teaming</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="border border-border p-8">
            <h3 className="text-subheading mb-4">Die Lücke</h3>
            <p className="text-base text-muted-foreground mb-4">
              In vielen Hotels existieren Konzepte, Richtlinien und Notfallpläne.
            </p>
            <p className="text-base text-muted-foreground">
              Im Ernstfall entscheidet jedoch nicht das Papier, sondern die Vorbereitung.
            </p>
          </div>
          <div className="border border-border p-8 bg-card">
            <h3 className="text-subheading mb-4">Unsere Lösung</h3>
            <p className="text-base text-muted-foreground mb-4">
              Red Teaming schliesst die Lücke zwischen Annahme und Realität.
            </p>
            <p className="text-base text-muted-foreground">
              Wir zeigen auf, was im Ernstfall funktioniert – und was nicht. Bevor Entscheidungen unter Zeitdruck, medialer Aufmerksamkeit oder wirtschaftlichem Druck getroffen werden müssen.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* How We Work */}
      <section className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h2 className="text-heading mb-12">Wie wir arbeiten</h2>
        
        <div className="space-y-8">
          <div className="border-l-4 border-primary pl-8">
            <h3 className="text-subheading mb-3">Diskret, strukturiert und unabhängig</h3>
            <p className="text-base text-muted-foreground">
              Unsere Prüfungen erfolgen diskret, strukturiert und unabhängig. Wir testen keine Compliance, sondern Handlungsfähigkeit.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-8">
            <h3 className="text-subheading mb-3">Ganzheitlicher Ansatz</h3>
            <p className="text-base text-muted-foreground">
              Dabei betrachten wir physische, digitale und organisatorische Aspekte nicht isoliert, sondern im Zusammenspiel – so, wie sie im Ernstfall auftreten.
            </p>
          </div>
          
          <div className="border-l-4 border-primary pl-8">
            <h3 className="text-subheading mb-3">Belastbare Entscheidungsgrundlage</h3>
            <p className="text-base text-muted-foreground">
              Das Ergebnis ist keine Bewertung, sondern eine belastbare Entscheidungsgrundlage.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* For Whom */}
      <section className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h2 className="text-heading mb-6">Für wen wir arbeiten</h2>
        
        <div className="bg-card border border-border p-8 md:p-12">
          <p className="text-lg text-muted-foreground mb-6">
            Unsere Arbeit richtet sich an Direktionen, Eigentümer und Entscheidungsträger in der gehobenen Hotellerie.
          </p>
          <p className="text-lg text-muted-foreground">
            Dort, wo Verantwortung nicht delegierbar ist. Und wo Reputation, Betrieb und Sicherheit untrennbar miteinander verbunden sind.
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Our Approach */}
      <section className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h2 className="text-heading mb-12">Haltung statt Verkaufsagenda</h2>
        
        <div className="max-w-2xl">
          <p className="text-base text-muted-foreground mb-6">
            Red Teaming for Hotels arbeitet ohne Verkaufsagenda. Ein erstes Gespräch dient der Einordnung – nicht dem Abschluss.
          </p>
          <p className="text-base text-muted-foreground mb-6">
            Ziel ist es zu klären, ob und wo ein realistischer Prüfbedarf besteht. Und ob Red Teaming der richtige Ansatz dafür ist.
          </p>
          <div className="bg-primary bg-opacity-10 border border-primary border-opacity-20 p-6">
            <p className="text-sm text-foreground font-bold">Transparenz von Anfang an</p>
            <p className="text-sm text-muted-foreground mt-2">
              Wir beraten ehrlich, auch wenn das bedeutet, dass Red Teaming nicht der richtige Weg ist.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Organization */}
      <section className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h2 className="text-heading mb-12">Organisation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-subheading mb-4">Operativer Betrieb</h3>
            <p className="text-base text-muted-foreground mb-6">
              Red Teaming for Hotels wird operativ durch die Markwalder Unternehmensgruppe GmbH geführt.
            </p>
            <div className="bg-card border border-border p-6">
              <p className="text-sm font-bold text-foreground mb-2">Sitz</p>
              <p className="text-sm text-muted-foreground">Bern, Schweiz</p>
            </div>
          </div>
          <div>
            <h3 className="text-subheading mb-4">Verantwortung</h3>
            <p className="text-base text-muted-foreground mb-6">
              Die Verantwortung liegt bei erfahrenen Praktikern aus Sicherheits-, Krisen- und Organisationsumfeldern.
            </p>
            <div className="bg-card border border-border p-6">
              <p className="text-sm font-bold text-foreground mb-2">Expertise</p>
              <p className="text-sm text-muted-foreground">Sicherheit, Krisenmanagement, Organisationsentwicklung</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Der nächste Schritt
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Wenn Sie im Ernstfall entscheiden müssen, sollte die Entscheidungsgrundlage vorher existieren. Ein 30-minütiges Gespräch reicht aus, um Klarheit zu schaffen.
          </p>
          <button onClick={() => setContactFormOpen(true)} className="btn-primary flex items-center gap-2 text-sm md:text-base">
            Gespräch anfragen (30 Minuten)
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
