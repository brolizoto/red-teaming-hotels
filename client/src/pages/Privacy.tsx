export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container py-4 flex justify-between items-center">
          <a href="/" className="text-primary font-bold text-lg">
            RED TEAMING <span className="text-sm text-muted-foreground">for Hotels</span>
          </a>
          <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Zurück
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="accent-line mb-8"></div>
            <h1 className="text-heading mb-12">Datenschutz</h1>

            <div className="space-y-8 text-sm text-muted-foreground">
              <div>
                <h2 className="text-subheading mb-4">Verantwortlichkeit</h2>
                <p>
                  Verantwortlich für die Datenverarbeitung ist die Markwalder Unternehmensgruppe GmbH, Weiheregasse 16, 3005 Bern.
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">Datenerfassung</h2>
                <p>
                  Wir erfassen Ihre Daten nur, wenn Sie diese freiwillig über unser Kontaktformular bereitstellen. Dies umfasst Name, E-Mail, Telefon und Unternehmen.
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">Datennutzung</h2>
                <p>
                  Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme verwendet. Wir geben Ihre Daten nicht an Dritte weiter.
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">Datenspeicherung</h2>
                <p>
                  Ihre Daten werden nur so lange gespeichert, wie es für die Bearbeitung Ihrer Anfrage notwendig ist. Danach werden sie gelöscht.
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">Ihre Rechte</h2>
                <p>
                  Sie haben das Recht, Ihre Daten zu korrigieren, zu löschen oder die Verarbeitung zu widerrufen. Kontaktieren Sie uns unter{' '}
                  <a href="mailto:contact@rt4h.ch" className="text-primary hover:underline">
                    contact@rt4h.ch
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">Cookies</h2>
                <p>
                  Diese Website verwendet keine Tracking-Cookies. Nur technisch notwendige Cookies werden verwendet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="container py-8 text-center text-xs text-muted-foreground">
          <p>© 2026 Red Teaming for Hotels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
