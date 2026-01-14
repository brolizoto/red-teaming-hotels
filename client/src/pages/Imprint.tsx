export default function Imprint() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container py-4 flex justify-between items-center">
          <a href="/" className="text-primary font-bold text-lg">
            RED TEAMING <span className="text-sm text-muted-foreground">Switzerland</span>
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
            <h1 className="text-heading mb-12">Impressum</h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-subheading mb-4">Firmenangaben</h2>
                <p className="text-sm text-muted-foreground space-y-2">
                  <div>Markwalder Unternehmensgruppe GmbH</div>
                  <div>Bernastrasse 8</div>
                  <div>3005 Bern</div>
                  <div>Schweiz</div>
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">Kontakt</h2>
                <p className="text-sm text-muted-foreground space-y-2">
                  <div>
                    E-Mail:{' '}
                    <a href="mailto:contact@redteaming.ch" className="text-primary hover:underline">
                      contact@redteaming.ch
                    </a>
                  </div>
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">Unternehmensidentifikation</h2>
                <p className="text-sm text-muted-foreground">
                  UID: CHE-313.293.712
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
