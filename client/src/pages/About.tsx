import { ArrowRight, Menu, X, CheckCircle2, Target, Users, Lightbulb, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

/**
 * Red Teaming for Hotels - About Page
 * Design: Minimalist-Institutional with enhanced visual hierarchy
 * Comprehensive company information and philosophy with visual elements
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

      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-br from-background via-background to-card py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="accent-line mb-8"></div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 max-w-3xl">
            Über uns
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Red Teaming for Hotels versteht sich nicht als klassische Sicherheitsberatung. Unsere Rolle ist es, Klarheit für die Direktion zu schaffen.
          </p>
          <div className="flex gap-4">
            <button onClick={() => setContactFormOpen(true)} className="btn-primary flex items-center gap-2">
              Gespräch anfragen
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
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
            <p className="text-base text-muted-foreground mb-8">
              Nicht theoretisch. Nicht zertifikatsgetrieben. Sondern unter realen Bedingungen und im laufenden Betrieb.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Target, title: "Realistische Prüfung", desc: "Unter echten Bedingungen" },
              { icon: Zap, title: "Handlungsfähigkeit", desc: "Fokus auf praktische Fähigkeit" },
              { icon: Shield, title: "Unabhängig & Diskret", desc: "Neutrale, vertrauliche Prüfung" },
              { icon: CheckCircle2, title: "Klare Grundlagen", desc: "Für Direktionsentscheidungen" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <div className="flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Why Red Teaming */}
      <section className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h2 className="text-heading mb-12">Warum Red Teaming</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary opacity-0 group-hover:opacity-5 rounded-lg transition-opacity"></div>
            <div className="relative border border-border p-8 rounded-lg bg-background group-hover:border-primary transition-colors">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-subheading mb-4">Die Lücke</h3>
              <p className="text-base text-muted-foreground mb-4">
                In vielen Hotels existieren Konzepte, Richtlinien und Notfallpläne.
              </p>
              <p className="text-base text-muted-foreground">
                Im Ernstfall entscheidet jedoch nicht das Papier, sondern die Vorbereitung.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary opacity-0 group-hover:opacity-5 rounded-lg transition-opacity"></div>
            <div className="relative border border-border p-8 rounded-lg bg-card group-hover:border-primary transition-colors">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-subheading mb-4">Unsere Lösung</h3>
              <p className="text-base text-muted-foreground mb-4">
                Red Teaming schliesst die Lücke zwischen Annahme und Realität.
              </p>
              <p className="text-base text-muted-foreground">
                Wir zeigen auf, was im Ernstfall funktioniert – und was nicht.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* How We Work */}
      <section className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h2 className="text-heading mb-12">Wie wir arbeiten</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Diskret & Strukturiert",
              desc: "Unsere Prüfungen erfolgen diskret, strukturiert und unabhängig. Wir testen Handlungsfähigkeit, nicht Compliance."
            },
            {
              step: "02",
              title: "Ganzheitlicher Ansatz",
              desc: "Physische, digitale und organisatorische Aspekte im Zusammenspiel – so wie sie im Ernstfall auftreten."
            },
            {
              step: "03",
              title: "Belastbare Grundlagen",
              desc: "Das Ergebnis ist keine Bewertung, sondern eine belastbare Entscheidungsgrundlage für die Direktion."
            }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="text-6xl font-bold text-primary opacity-10 mb-4">{item.step}</div>
              <h3 className="text-subheading mb-3 relative z-10">{item.title}</h3>
              <p className="text-base text-muted-foreground relative z-10">{item.desc}</p>
              {idx < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* For Whom */}
      <section className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h2 className="text-heading mb-12">Für wen wir arbeiten</h2>
        
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary opacity-5"></div>
          <div className="relative border border-primary border-opacity-20 p-12 md:p-16 bg-gradient-to-br from-card to-background">
            <div className="flex gap-4 mb-6">
              <Users className="w-8 h-8 text-primary flex-shrink-0" />
            </div>
            <p className="text-2xl font-bold text-foreground mb-6">
              Direktionen, Eigentümer und Entscheidungsträger in der gehobenen Hotellerie.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Dort, wo Verantwortung nicht delegierbar ist. Und wo Reputation, Betrieb und Sicherheit untrennbar miteinander verbunden sind.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Verantwortung", value: "Nicht delegierbar" },
                { label: "Fokus", value: "Handlungsfähigkeit" },
                { label: "Ansatz", value: "Ganzheitlich" }
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-primary pl-4">
                  <p className="text-xs font-bold text-primary uppercase">{item.label}</p>
                  <p className="text-lg font-bold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Our Approach */}
      <section className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h2 className="text-heading mb-12">Haltung statt Verkaufsagenda</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              Red Teaming for Hotels arbeitet ohne Verkaufsagenda. Ein erstes Gespräch dient der Einordnung – nicht dem Abschluss.
            </p>
            <p className="text-lg text-muted-foreground">
              Ziel ist es zu klären, ob und wo ein realistischer Prüfbedarf besteht. Und ob Red Teaming der richtige Ansatz dafür ist.
            </p>
          </div>
          <div className="bg-primary rounded-lg p-8 border border-primary relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-sm font-bold text-white uppercase mb-2">Kernwert</p>
              <p className="text-2xl font-bold text-white mb-4">Transparenz von Anfang an</p>
              <p className="text-base text-white opacity-95">
                Wir beraten ehrlich, auch wenn das bedeutet, dass Red Teaming nicht der richtige Weg ist. Ihre Entscheidungsqualität ist wichtiger als unser Auftrag.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Organization */}
      <section className="container py-16 md:py-24">
        <div className="accent-line mb-8"></div>
        <h2 className="text-heading mb-12">Organisation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="group">
            <div className="border border-border rounded-lg p-8 bg-card group-hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-colors">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-subheading mb-4">Operativer Betrieb</h3>
              <p className="text-base text-muted-foreground mb-6">
                Red Teaming for Hotels wird operativ durch die Markwalder Unternehmensgruppe GmbH geführt.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-xs font-bold text-primary uppercase mb-1">Sitz</p>
                <p className="text-lg font-bold text-foreground">Bern, Schweiz</p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="border border-border rounded-lg p-8 bg-background group-hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-subheading mb-4">Verantwortung</h3>
              <p className="text-base text-muted-foreground mb-6">
                Die Verantwortung liegt bei erfahrenen Praktikern aus Sicherheits-, Krisen- und Organisationsumfeldern.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-xs font-bold text-primary uppercase mb-1">Expertise</p>
                <p className="text-lg font-bold text-foreground">Sicherheit & Krisenmanagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="accent-line mb-8"></div>
          <p className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Der nächste Schritt
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Wenn Sie im Ernstfall entscheiden müssen, sollte die Entscheidungsgrundlage vorher existieren. Ein 30-minütiges Gespräch reicht aus, um Klarheit zu schaffen.
          </p>
          <button onClick={() => setContactFormOpen(true)} className="btn-primary flex items-center gap-2 text-base">
            Gespräch anfragen (30 Minuten)
            <ArrowRight size={18} />
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
