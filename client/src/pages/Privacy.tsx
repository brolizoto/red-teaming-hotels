export default function Privacy() {
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
            <h1 className="text-heading mb-12">Datenschutzerklärung</h1>

            <div className="space-y-8 text-sm text-muted-foreground">
              <p className="text-base">
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den geltenden gesetzlichen Datenschutzvorschriften der Schweiz (DSG).
              </p>

              <div>
                <h2 className="text-subheading mb-4">1. Verantwortliche Stelle</h2>
                <p className="space-y-1">
                  <div>Red Teaming Switzerland</div>
                  <div>Markwalder Unternehmensgruppe GmbH</div>
                  <div>Bernastrasse 8</div>
                  <div>CH-3005 Bern</div>
                  <div>UID: CHE-313.293.712</div>
                  <div>
                    E-Mail:{' '}
                    <a href="mailto:contact@redteaming.ch" className="text-primary hover:underline">
                      contact@redteaming.ch
                    </a>
                  </div>
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
                <p className="mb-4">
                  Wir verarbeiten personenbezogene Daten nur, wenn Sie uns diese freiwillig zur Verfügung stellen, insbesondere:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>bei der Kontaktaufnahme per E-Mail</li>
                  <li>über ein Kontaktformular</li>
                  <li>bei der Anfrage eines Gesprächstermins</li>
                </ul>
                <p className="mb-4">Zu den verarbeiteten Daten können gehören:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>Inhalt Ihrer Anfrage</li>
                </ul>
                <p className="mt-4">
                  Diese Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage und zur Kommunikation mit Ihnen verwendet.
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">3. Zweck der Datenverarbeitung</h2>
                <p className="mb-4">Die Verarbeitung Ihrer Daten erfolgt zu folgenden Zwecken:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Beantwortung von Anfragen</li>
                  <li>Terminvereinbarung und Kommunikation</li>
                  <li>Einordnung eines möglichen Prüfbedarfs</li>
                </ul>
                <p className="mt-4">
                  Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht, ausser wenn dies zur technischen Abwicklung notwendig ist oder gesetzlich vorgeschrieben wird.
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">4. Hosting der Website</h2>
                <p>
                  Unsere Website wird bei Manus gehostet. Manus verarbeitet Daten in unserem Auftrag und stellt den technischen Betrieb der Website sicher. Dabei können technisch notwendige Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt des Zugriffs, Browsertyp) erfasst werden. Diese Daten dienen ausschliesslich der Sicherstellung eines stabilen und sicheren Betriebs der Website.
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">5. Cookies und Tracking</h2>
                <p className="mb-4">Unsere Website verwendet keine Tracking- oder Marketing-Cookies.</p>
                <p className="mb-4">Es werden keine Profile erstellt und kein Nutzerverhalten ausgewertet.</p>
                <p>
                  Technisch notwendige Cookies können eingesetzt werden, um die Funktionalität der Website sicherzustellen.
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">6. Dauer der Speicherung</h2>
                <p>
                  Personenbezogene Daten werden nur so lange gespeichert, wie dies für die Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">7. Ihre Rechte</h2>
                <p className="mb-4">Sie haben jederzeit das Recht:</p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Auskunft über die zu Ihrer Person gespeicherten Daten zu erhalten</li>
                  <li>die Berichtigung unrichtiger Daten zu verlangen</li>
                  <li>die Löschung Ihrer Daten zu verlangen, sofern keine gesetzlichen Pflichten entgegenstehen</li>
                </ul>
                <p>
                  Anfragen richten Sie bitte an:{' '}
                  <a href="mailto:contact@redteaming.ch" className="text-primary hover:underline">
                    contact@redteaming.ch
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-subheading mb-4">8. Änderungen</h2>
                <p>
                  Diese Datenschutzerklärung kann bei Bedarf angepasst werden, insbesondere bei Änderungen der gesetzlichen Vorgaben oder der Website-Funktionalität. Es gilt jeweils die aktuelle Version auf dieser Website.
                </p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">Stand: Januar 2026</p>
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
