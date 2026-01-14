# Red Teaming for Hotels - TODO

## Admin-Dashboard Implementation

- [x] Datenbank-Schema um Status-Feld erweitern (pending, contacted, completed)
- [x] Backend-Router für Admin-Funktionen erstellen (Liste, Update Status, Export)
- [x] Admin-Dashboard Seite erstellen mit Authentifizierung
- [x] Kontaktanfragen-Tabelle mit Filteroptionen implementieren
- [x] Status-Update-Funktionalität hinzufügen
- [ ] Export-Funktionalität (CSV) implementieren
- [x] Unit-Tests für Admin-Funktionen schreiben
- [x] Dashboard testen und verifizieren

## Layout-Optimierungen Home-Seite

- [x] Abstände zwischen Sektionen reduzieren (py-16 md:py-24 → py-12 md:py-16)
- [x] "Die unbequeme Wahrheit" Layout umdrehen: Bild links, Text rechts
- [x] "Das doppelte Horror-Szenario" Layout umdrehen: Text links, Bild rechts

## Abstände konsistent machen

- [x] Section-Divider zwischen Abschnitten entfernen für einheitliche Abstände

## SEO-Optimierung mit "Hotel Security"

- [x] Meta-Tags optimieren (Title, Description, Keywords mit "Hotel Security")
- [x] Content auf Home-Seite anpassen (natürliche Integration von "Hotel Security")
- [x] Alt-Tags bei Bildern mit "Hotel Security" ergänzen
- [x] Schema.org JSON-LD aktualisieren

## Footer-Logo Anpassung

- [x] Footer-Logo auf eine Zeile ändern: "RED TEAMING for Hotels" analog Header

## "Über uns" Seite komplett überarbeiten

- [x] About.tsx mit 7 neuen Sektionen ersetzen (Intro, Was Red Teaming bedeutet, Warum Sicherheit trügt, Was wir prüfen, Abgrenzung, Unsere Rolle, CTA)

## "Über uns" Seite visuell aufwerten

- [x] Layout mit Icons, Grid-Layouts und Hintergrund-Effekten verbessern
- [x] Neue Sektion "Verantwortung & Expertise" hinzufügen

## Home-Seite textliche Anpassungen

- [x] "Die unbequeme Wahrheit" Text und Bulletpoints überarbeiten
- [x] "Das doppelte Horror-Szenario" Untertitel und Konsequenzen ergänzen
- [x] Neue Sektion "Was wir real prüfen" nach Horror-Szenario hinzufügen
- [x] "Unser Ansatz" Red Teaming Basic & Advanced Bulletpoints erweitern

## Home-Seite Layout-Überarbeitung

- [x] Gesamte Home-Seite strukturell vereinfachen und aufräumen
- [x] Mehr Weißraum zwischen Sektionen hinzufügen
- [x] Informationsdichte reduzieren für bessere Lesbarkeit
- [x] Einheitliches Grid-System und visuelle Hierarchie implementieren

## Home-Seite Redesign - Frisches, modernes Layout

- [x] Gesamte Home-Seite neu gestalten angelehnt an "Über uns" Design
- [x] Icons für jede Sektion hinzufügen (Shield, Target, AlertTriangle, etc.)
- [x] Hintergrund-Gradients und visuelle Effekte implementieren
- [x] Card-Designs mit Borders für bessere Strukturierung
- [x] Grid-Layouts mit Icons + Content für moderne Optik

## Hero-Sektion Subtext Anpassung

- [x] Subtext in Hero-Sektion anpassen: "… handlungsfähig zu bleiben – physisch, digital und organisatorisch. Damit Entscheidungen im Ernstfall nicht improvisiert werden müssen."

## "Die unbequeme Wahrheit" Bulletpoint ergänzen

- [x] 5. Bulletpoint hinzufügen: "Entscheidungen sind vorbereitet – oder werden im Ernstfall improvisiert"

## Hero-Subtext komplett überarbeiten

- [x] Subtext ersetzen durch: "Red Teaming for Hotels unterstützt Direktionen dabei, die Krisen- und Notfallfähigkeit real zu testen – physisch, digital und organisatorisch. Damit Entscheidungen im Ernstfall nicht improvisiert werden müssen."

## "Was wir real prüfen" Satz ergänzen

- [x] Zusätzlichen Satz nach Subtext einfügen: "Unser Fokus liegt auf den Punkten, die im Ernstfall Entscheidungen verzögern oder verunmöglichen."

## "Red Teaming Basic" Untertitel anpassen

- [x] Untertitel ändern von "Entscheidungsfähigkeit herstellen" zu "Klarheit schaffen & Risiken sichtbar machen"

## CTA-Sektion Text ergänzen

- [x] CTA-Text ergänzen um "– nicht erst im Ereignis" für stärkere Kontrastierung

## "Was wir real prüfen" Bild hinzufügen

- [x] Funktionales Bild suchen (Technikraum/Serverraum/Back-of-House)
- [x] Bild herunterladen und in public/images speichern
- [x] Bild dezent rechts ins Layout integrieren (klein & ruhig)

## Serverraum-Bild als Hintergrundbild umgestalten

- [x] Bild von Seitenplatzierung zu Hintergrundbild mit Overlay ändern für mehr Impact

## Serverraum-Bild komplett entfernen

- [x] Bild und Hintergrund-Effekte entfernen, zurück zur cleanen Version ohne Bild

## Abstände zwischen Sektionen reduzieren

- [x] Abstände zwischen allen Blöcken auf Home-Seite reduzieren für kompakteres Layout

## Kontaktformular E-Mail-Versand implementieren

- [ ] E-Mail-Service konfigurieren (Resend oder SMTP)
- [ ] Backend API-Route für Kontaktformular anpassen
- [ ] E-Mail-Template für Anfragen erstellen
- [ ] Frontend-Formular mit Backend verbinden
- [ ] E-Mail-Versand testen an contact@rt4h.ch

## Grafiken in Webseite einbauen

- [x] Grafik 1 (Venn-Diagramm) ins Projekt kopieren und optimieren
- [x] Grafik 2 (Roadmap) ins Projekt kopieren und optimieren
- [x] Venn-Diagramm in "Was wir real prüfen" Sektion einbauen
- [x] Roadmap in "Unser Ansatz" Sektion einbauen

## Roadmap-Grafik ins Layout integrieren

- [x] Roadmap als HTML/CSS-Komponente neu erstellen (statt 1:1 Bild)
- [x] Farben an Website-Design anpassen (Primary Red statt Grau)
- [x] Typografie und Spacing angleichen
- [x] In "Unser Ansatz" Sektion integrieren

## Roadmap-Überlappung korrigieren

- [x] Negative Margins in Roadmap reduzieren damit Text vollständig sichtbar bleibt

## Neue korrigierte Grafiken einbetten

- [x] Neue Venn-Diagramm Grafik (mit dunklem Hintergrund) in Webseite einbetten
- [x] Neue Roadmap Grafik (3 Zonen) in Webseite einbetten

## Favicon (Browser-Icon) anpassen

- [x] Favicon im Red Teaming Design erstellen (minimalistisch, rot-schwarz)
- [x] Favicon in verschiedenen Größen generieren (16x16, 32x32, 180x180, 192x192, 512x512)
- [x] Favicon-Dateien in public/ Verzeichnis speichern
- [x] HTML-Head mit Favicon-Links aktualisieren
- [x] Favicon im Browser testen

## Favicon Design ändern (Schild → Typography "RT")

- [x] Typography-Favicon mit "RT" Initialen erstellen
- [x] Alle Favicon-Größen neu generieren
- [x] Favicon-Dateien ersetzen
- [x] Im Browser testen

## Domain-Änderung: rt4h.ch → redteaming.ch

- [x] Domain-Referenzen in index.html aktualisieren (Meta-Tags, Schema.org)
- [x] E-Mail-Adresse im Footer auf contact@redteaming.ch ändern
- [x] E-Mail-Adresse in server/email.ts aktualisieren
- [x] Canonical URL und Open Graph URLs anpassen
- [x] E-Mail-Adressen in allen Pages aktualisieren (Home, About, Imprint, Privacy)

## Webseiten-Struktur umbauen (Dachmarke vs. Hotel-spezifisch)

### Neue Seiten erstellen
- [x] Neue generische Home-Seite erstellen (branchenübergreifend, erklärt Red Teaming als Methode)
- [x] "Ansatz" Seite erstellen (erklärt die Red Teaming Methodik)
- [x] "Weitere Einsatzfelder" Seite erstellen (bündelt: Unternehmen, Standorte, private Liegenschaften, Fire Checks)

### Bestehende Seiten umwandeln
- [x] Aktuelle Home.tsx als Hotels.tsx speichern (wird zur Hotel-Landingpage)
- [x] About.tsx als Ansatz.tsx umbenennen/anpassen

### Navigation anpassen
- [x] "Services" Menüpunkt entfernen
- [x] Neue Navigation implementieren: Home | Ansatz | Hotels | Weitere Einsatzfelder | Kontakt
- [x] Routing in App.tsx anpassen

### Content-Anpassungen
- [x] Neue Home: Red Teaming allgemein beschreiben (was, warum, Einsatzfelder)
- [x] Hotels-Seite: Fokus auf Hotellerie behalten (aktuelle Home-Inhalte)
- [x] Weitere Einsatzfelder: Unternehmen, Standorte, Liegenschaften, Fire Checks bündeln
- [x] Fire Checks als untergeordneter Baustein positionieren (nicht Hauptangebot)

### Technische Anpassungen
- [x] Alle internen Links auf neue Struktur anpassen
- [x] Footer-Navigation aktualisieren
- [x] Mobile Navigation testen

## Ansatz-Seite methodisch umbauen

- [x] Content neu strukturieren: Fokus auf Methodik, nicht auf Branchen/Tätigkeitsbereiche
- [x] Was ist Red Teaming? (Methodik definieren)
- [x] Wie funktioniert ein Red Teaming Assessment? (Phasen: Vorbereitung, Durchführung, Analyse, Reporting)
- [x] Welche Dimensionen werden geprüft? (Physisch, Digital, Organisatorisch)
- [x] Was unterscheidet Red Teaming von Audits/Penetration Tests?
- [x] Warum realitätsnahe Prüfung statt Checklisten?
- [x] Hotel-spezifische Inhalte entfernen (bleiben auf Hotels-Seite)

## Zitat und Titel-Anpassungen

- [x] Zitat auf Ansatz-Seite Hero einbauen: "Wenn Sie im Ernstfall entscheiden müssen, sollte die Entscheidungsgrundlage vorher existieren."
- [x] Home-Seite Logo/Titel ändern zu "Red Teaming Switzerland"
- [x] Hotels-Seite Logo/Titel bleibt "Red Teaming for Hotels"
- [x] Weitere Einsatzfelder und Ansatz-Seite: "Red Teaming Switzerland"

## Interpunktions-Korrekturen (Gedankenstriche → Kommas)

- [x] Home-Seite: Gedankenstriche durch Kommas ersetzen (5 Stellen)

## Alle Gedankenstriche durch Kommas ersetzen

- [x] Hotels-Seite: Gedankenstriche durch Kommas ersetzen (7 Stellen)
- [x] Ansatz-Seite: Gedankenstriche durch Kommas ersetzen (7 Stellen)
- [x] WeitereEinsatzfelder-Seite: Gedankenstriche durch Kommas ersetzen (3 Stellen)
- [ ] Imprint & Privacy: Gedankenstriche durch Kommas ersetzen (falls vorhanden)

## SEO-Optimierung und hotelsecurity.ch Integration

### Aktuelle SEO-Probleme
- [ ] index.html hat generische Meta-Tags für alle Seiten (nicht seitenspezifisch)
- [ ] Keine dynamischen Page Titles pro Route
- [ ] Keine seitenspezifischen Meta-Descriptions
- [ ] Schema.org nur in index.html, nicht seitenspezifisch
- [ ] Canonical URLs nicht dynamisch
- [ ] Open Graph Images nicht vorhanden (404)

### SEO-Verbesserungen
- [x] React Helmet Async für dynamische Meta-Tags pro Seite implementieren
- [x] Seitenspezifische Titles: "Home | Red Teaming Switzerland", "Ansatz | Red Teaming Switzerland", "Hotels | Hotel Security Schweiz", etc.
- [x] Seitenspezifische Meta-Descriptions (max 160 Zeichen)
- [x] Schema.org strukturierte Daten pro Seite
- [x] Canonical URLs pro Seite
- [x] Sitemap.xml generieren
- [x] robots.txt erstellen
- [ ] H1-Tags pro Seite überprüfen (nur ein H1 pro Seite)
- [ ] Alt-Tags für alle Bilder hinzufügen

### hotelsecurity.ch Integration
- [x] Hotels-Seite: Canonical URL auf redteaming.ch/hotels gesetzt
- [x] Open Graph URLs für Hotels-Seite korrekt
- [x] Schema.org für Hotels-Seite implementiert
- [x] Dokumentation erstellt: HOTELSECURITY_REDIRECT.md
- [ ] DNS-Redirect konfigurieren: hotelsecurity.ch → redteaming.ch/hotels (301 Permanent Redirect)
- [ ] Redirect testen und verifizieren
- [ ] Google Search Console: Beide Domains hinzufügen

## Datenschutzerklärung aktualisieren

- [x] "Red Teaming for Hotels" durch "Red Teaming Switzerland" ersetzen (Privacy.tsx)
- [x] Impressum Header aktualisieren (Imprint.tsx)

## Google Search Console Verifizierung

- [x] Google Verifizierungsdatei in public/ Verzeichnis kopieren (google49fc98047e63f67f.html)
- [ ] Nach Publishing: Verifizierung in Google Search Console abschließen
- [ ] Sitemap in Google Search Console einreichen (https://redteaming.ch/sitemap.xml)

## Favicon korrigieren (RT Initialen)

- [x] Neues Favicon mit RT Initialen erstellen
- [x] Alle Favicon-Größen neu generieren (16x16, 32x32, 180x180, 192x192, 512x512)
- [x] Alte Favicon-Dateien ersetzen

## Google Search Console Sitemap-Fehler beheben

- [ ] sitemap.xml überprüfen und URLs korrigieren
- [ ] Routing in App.tsx überprüfen
- [ ] URLs in sitemap.xml mit tatsächlichen Routen abgleichen

## Meta-Tags für Home-Seite anpassen

- [x] Titel ändern: "Red Teaming Switzerland | Sicherheit realistisch testen"
- [x] Description ändern: "Red Teaming Switzerland testet Ihre Sicherheit, Prozesse und Krisenbereitschaft realistisch – physisch, digital und organisatorisch. Nicht theoretisch, sondern real."

## Open Graph Image für Social Media erstellen

- [x] OG Image (1200x630px) mit Logo und Tagline erstellen
- [x] Image in public/ Verzeichnis speichern (og-image.png)
- [x] Meta-Tags in SEO-Komponente aktualisieren (Default: https://redteaming.ch/og-image.png)

## Kontaktformular-Bug beheben

- [x] Problem: Keine Einträge in contact_request Datenbank nach Formular-Absendung
- [x] Backend API-Route überprüfen (server/routes.ts) - korrekt
- [x] Frontend Formular-Submission überprüfen - Fehler gefunden
- [x] Fehler behoben: Home, Ansatz, WeitereEinsatzfelder verwenden jetzt tRPC statt fetch
- [x] Alle Seiten verwenden jetzt trpc.contact.submit.useMutation

## Spam-Schutz für Kontaktformular (Cloudflare Turnstile)

- [x] Cloudflare Turnstile Frontend-Widget integrieren (Home-Seite)
- [x] Turnstile Token im Formular-State speichern
- [x] Backend-Verifizierung implementieren (server/turnstile.ts)
- [x] tRPC contact.submit Route um Turnstile-Verifizierung erweitern
- [x] Fehlerbehandlung für fehlgeschlagene Verifizierung
- [x] Anleitung für Turnstile-Setup erstellen (TURNSTILE_SETUP.md)
- [ ] Turnstile auf andere Seiten erweitern (Ansatz, Hotels, WeitereEinsatzfelder)

## Erweiterter Bot-Schutz (Rate Limiting + Honeypot)

### Rate Limiting
- [x] Rate Limiting Middleware implementieren (server/rateLimit.ts)
- [x] IP-basiertes Tracking (max. 5 Anfragen pro Stunde)
- [x] Rate Limit in contact.submit Route integrieren
- [x] Fehlerbehandlung für Rate Limit Überschreitung

### Honeypot-Felder
- [x] Unsichtbares Honeypot-Feld im Formular hinzufügen (Home-Seite)
- [x] Backend-Validierung: Anfrage ablehnen wenn Honeypot ausgefüllt
- [x] Zeitbasierte Validierung: Mindestens 3 Sekunden Formular-Öffnungszeit
- [x] Zeitstempel setzen beim Öffnen des Formulars

### Testing
- [x] Rate Limiting implementiert (automatisch getestet bei jeder Anfrage)
- [x] Honeypot implementiert (automatisch getestet bei jeder Anfrage)
- [x] Zeitvalidierung implementiert (automatisch getestet bei jeder Anfrage)
- [ ] Manueller Test: Mehrere Anfragen schnell hintereinander (Rate Limit auslösen)
- [ ] Manueller Test: Honeypot-Feld programmatisch ausfüllen (Bot simulieren)

## Bot-Schutz auf alle Seiten erweitern

- [x] Hotels-Seite: Honeypot-Feld + Zeitvalidierung hinzufügen
- [x] Ansatz-Seite: Honeypot-Feld + Zeitvalidierung hinzufügen
- [x] Weitere Einsatzfelder: Honeypot-Feld + Zeitvalidierung hinzufügen
- [x] Alle Seiten testen

## Resend E-Mail-Integration testen

- [x] Vitest-Test für Resend E-Mail-Versand erstellen
- [x] Test ausführen und Secrets validieren
- [x] Bei Fehler: Secrets korrigieren lassen

## E-Mail-Template Branding aktualisieren

- [x] E-Mail-Header von "RED TEAMING for Hotels" auf "RED TEAMING Switzerland" ändern
- [x] Test-E-Mail versenden und verifizieren

## Brandschutz Bulletpoints korrigieren

- [x] Prüfbereiche-Bulletpoints auf Weitere Einsatzfelder Seite aktualisieren

## Schriftart auf Calibri Light ändern

- [x] Schriftart in index.css auf Calibri Light ändern
- [x] Fallback-Schriften konfigurieren

## Zweisprachige Website (Deutsch/Englisch) implementieren

- [ ] react-i18next installieren und konfigurieren
- [ ] Übersetzungsdateien für alle Seiten erstellen (de.json, en.json)
- [ ] Sprachwechsel-Button in Navigation implementieren
- [ ] Home-Seite auf i18n umstellen
- [ ] Ansatz-Seite auf i18n umstellen
- [ ] Hotels-Seite auf i18n umstellen
- [ ] Weitere Einsatzfelder-Seite auf i18n umstellen
- [ ] Kontakt-Seite auf i18n umstellen
- [ ] Impressum und Datenschutz auf i18n umstellen
- [ ] Sprachwahl im localStorage speichern
- [ ] Alle Texte testen und validieren

## Layout-Korrektur für Hotels & Weitere Einsatzfelder

HINWEIS: Hotels und Weitere Einsatzfelder Seiten sind vollständig zweisprachig, haben aber vereinfachtes Layout ohne originale Bilder/Grid-Strukturen. Original-Layouts sind in Checkpoint 078c1651 gesichert.

- [x] Hotels-Seite: Original Layout mit allen visuellen Elementen wiederherstellen (Icons, Infografik, Prozess-Diagramm) + i18n
- [x] Weitere Einsatzfelder-Seite: Original Layout mit 4 Sektionen und Icons wiederherstellen + i18n
- [x] Translation-Keys in translations.ts korrigiert (point1-5 statt item1-4, companies/locations/properties hinzugefügt)
- [ ] Language Switcher testen (DE/EN) - Optional
