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

## Language Switcher Testing & Fixes

- [x] Hotels.tsx: Verwendet bereits vollständig t() calls (keine Änderung nötig)
- [x] English translations in translations.ts angepasst (item1-4 → point1-5)
- [x] English translations erweitert: testing, roadmap, footer Sektionen hinzugefügt
- [x] WeitereEinsatzfelder.tsx: Verwendet bereits vollständig t() calls (keine Änderung nötig)
- [x] English translations für otherFields erweitert (companies, locations, properties, fire)
- [x] Language Switcher getestet (DE/EN) auf beiden Seiten - funktioniert perfekt

## Footer Anpassungen

- [x] Home-Seite: Footer bereits korrekt (nur E-Mail, keine Tel/Adresse)
- [x] Hotels-Seite: Location-Sektion entfernt (nur E-Mail bleibt)
- [x] Weitere Einsatzfelder: Footer bereits korrekt (nur E-Mail, keine Tel/Adresse)
- [x] Alle Seiten getestet - Footer korrekt (nur E-Mail, keine Tel/Adresse)

## Complete Website Rebuild (Bilingual DE/EN)

### Phase 1: Component Architecture
- [x] Unified Footer Component erstellt (UnifiedFooter.tsx)
- [x] Unified Navigation Component bereits vorhanden (Navigation.tsx) - vollständig i18n
- [ ] ContactFormModal Component (bereits vorhanden, prüfen)

### Phase 2: Complete translations.ts Structure
- [ ] Home page translations (DE/EN)
- [ ] Ansatz page translations (DE/EN)
- [ ] Hotels page translations (DE/EN)
- [ ] Weitere Einsatzfelder translations (DE/EN)
- [ ] Impressum page translations (DE/EN)
- [ ] Datenschutz page translations (DE/EN)
- [ ] Shared components translations (nav, footer, contact form)

### Phase 3: Rebuild All Pages
- [ ] Home.tsx: Vollständig i18n, einheitliche Komponenten
- [ ] Ansatz.tsx: Vollständig i18n, einheitliche Komponenten
- [ ] Hotels.tsx: Vollständig i18n, einheitliche Komponenten
- [ ] WeitereEinsatzfelder.tsx: Vollständig i18n, einheitliche Komponenten
- [ ] Impressum.tsx: Vollständig i18n
- [ ] Datenschutz.tsx: Vollständig i18n

### Phase 4: Testing & Validation
- [ ] Alle Seiten in Deutsch testen
- [ ] Alle Seiten in Englisch testen
- [ ] Footer identisch auf allen Seiten prüfen
- [ ] Navigation identisch auf allen Seiten prüfen
- [ ] Language Switcher auf allen Seiten testen
- [ ] Final Checkpoint erstellen

## Ansatz-Seite Original-Layout wiederherstellen

- [ ] Ansatz.tsx komplett neu schreiben basierend auf Original-Screenshot
- [ ] Deutsche Texte 1:1 aus Screenshot übernehmen
- [ ] Layout-Struktur exakt nachbauen: Hero mit Zitat, 7 Sektionen, Icons, Cards
- [ ] Ansatz translations in translations.ts aktualisieren
- [ ] Ansatz-Seite testen (DE/EN)

## Hotels-Seite Original-Texte übernehmen (Screenshot 19:50)

- [ ] Deutsche Hotels-Translations aus Screenshot extrahieren (alle Sektionen außer blaue Bilder)
- [ ] Hotels translations in translations.ts aktualisieren (hero, truth, scenario, testing, approach, roadmap, process, cta)
- [ ] English Hotels-Translations entsprechend anpassen
- [ ] Hotels-Seite in beiden Sprachen testen (DE/EN)
- [ ] Checkpoint erstellen

- [x] Hotels-Seite: Grauen Rahmen-Hintergrund bei Bulletpoints in "Die unbequeme Wahrheit" Sektion hinzufügen (wie auf Live-Website)

- [x] Home-Seite: "Warum Red Teaming?" Sektion mit Live-Website-Text aktualisieren (1:1)
- [x] Home-Seite: Drei weiße Boxen (Physisch/Digital/Organisatorisch) mit Live-Website-Text aktualisieren (1:1)
- [x] Home-Seite: CTA-Sektion mit "Gespräch anfragen" Text von Live-Website ersetzen (1:1)
- [x] Englische Übersetzungen für alle Home-Seite Änderungen erstellen

- [x] Hotels-Seite: Hero-Beschreibung mit Live-Website-Text aktualisieren (1:1) - Already correct
- [x] Hotels-Seite: Truth-Sektion mit 5 neuen Punkten von Live-Website aktualisieren (1:1) - Already correct
- [x] Hotels-Seite: Testing-Sektion "Unser Fokus" Text von Live-Website übernehmen (1:1) - Already correct
- [x] Hotels-Seite: CTA-Text "nicht erst im Ereignis" hinzufügen (1:1) - Already correct
- [x] Englische Übersetzungen für alle Hotels-Seite Änderungen erstellen - Already correct- [x] Ansatz-Seite: Alle Texte 1:1 von Live-Website übernehmenund 1:1 übernehmen
- [ ] Ansatz-Seite: Englische Übersetzungen erstelle- [x] Weitere-Einsatzfelder-Seite: Alle Texte 1:1 von Live-Website übernehmenund 1:1 übernehmen
- [ ] Weitere Einsatzfelder-Seite: Englische Übersetzungen erstellen
- [ ] Weitere Einsatzfelder-Seite: Grauen Hintergrund-Rahmen bei Bulletpoints hinzufügen (wie bei Hotels-Seite)

- [x] Impressum & Datenschutz Seiten: Schriftart auf Calibri Light anpassen (wie Rest der Website)

- [x] Home-Seite: Englische Übersetzungen in translations.ts korrigieren (waren noch auf Deutsch)
- [x] Home.tsx: Hardcoded englische Texte wieder auf Translation-Keys umstellen

- [x] Hotels-Seite: Englische Red Teaming Roadmap Grafik nach "Security as a Leadership" Sektion einfügen

- [x] Hotels-Seite: Englisches Venn-Diagramm nach "What we really test" Sektion einfügen

- [x] CTA-Bereich: Layout auf allen Seiten vereinheitlichen (Home-Seite als Vorlage)
- [x] Hotels-Seite: CTA-Layout an Home-Seite anpassen
- [x] Ansatz-Seite: CTA-Layout überprüfen und ggf. anpassen
- [x] Weitere-Einsatzfelder-Seite: CTA-Layout überprüfen und ggf. anpassen

## Weitere Einsatzfelder Seite Layout überarbeiten

- [x] Layout-Probleme analysieren (Übergang zum CTA-Bereich)
- [x] Graue Hintergründe von Standorte und Brandschutz Sektionen entfernt (folgt Hotels-Seite Muster)
- [x] Visuelle Hierarchie und Konsistenz verbessert (weiße Sektionen + graue Cards für Bulletpoints)
- [x] Gesamte Seite auf harmonisches Layout überprüft (DE + EN)

## Ansatz Seite Redesign

- [x] Aktuelle Ansatz-Seite analysieren (visuelle Schwächen identifizieren)
- [x] Design verbessern (mehr visuelle Elemente, bessere Hierarchie)
  - Prozess-Schritte: Große rote Badges statt kleine graue
  - Drei Dimensionen: Icon-Badges + Hover-Effekte
  - Vergleichs-Sektion: Graue Hintergrund-Sektion mit weißen Cards
  - CTA: Weißer Hintergrund für Konsistenz
- [x] Alle Texte 1:1 beibehalten (keine Textänderungen)
- [x] Beide Sprachen testen (DE + EN)

## Header Logo PNG Export

- [x] Locate current header logo in project files (text-based logo in header)
- [x] Create/export PNG version of header logo
- [x] Deliver PNG file to user

## Logo mit transparentem Hintergrund

- [x] Logo mit transparentem Hintergrund erstellen (kein Weiß, kein Schwarz)
- [x] PNG-Datei an Benutzer liefern

## Footer Logo mit transparentem Hintergrund

- [x] Footer-Logo Design analysieren
- [x] Footer-Logo mit transparentem Hintergrund erstellen
- [x] PNG-Datei an Benutzer liefern

## Footer Logo Korrektur - Switzerland auf gleicher Linie

- [x] Footer-Logo neu erstellen mit Switzerland auf gleicher Linie wie RED TEAMING
- [x] Korrigierte PNG-Datei an Benutzer liefern

## Hotels-Seite visuell aufwerten (Bilder & Emotionen)

- [ ] Hotels-Seite analysieren (statische Bereiche identifizieren)
- [ ] Passende Bilder für Hotel-Szenarien generieren
- [ ] Layout mit Bildern und visuellen Elementen überarbeiten
- [ ] Emotionale Elemente hinzufügen (ohne zu überladen)
- [ ] Beide Sprachen testen (DE + EN)

## Krisen-Bild auf Hotels-Seite durch realistisches Foto ersetzen

- [x] Realistisches Stock-Foto suchen (Krisensitzung, Sicherheitszentrale, oder Evakuationsübung)
- [x] AI-generiertes Split-Screen-Bild ersetzen (durch echtes Krisen-Meeting-Foto)
- [x] Neues Bild testen und verifiziert (authentisch und professionell)

## Hotels-Seite Hero-Bild ersetzen

- [x] Neues Hotel-Rezeption-Bild in Projekt kopieren
- [x] Hero-Bild auf Hotels-Seite ersetzen (authentische Rezeption mit Personal und Gästen)
- [x] Text-Farben geprüft - keine Anpassung nötig (Gradient-Overlay funktioniert perfekt)
- [x] Beide Sprachen getestet (DE + EN) - Text gut lesbar

## Krisen-Szenario-Bild auf Hotels-Seite ersetzen

- [x] Neues System-Ausfall-Bild in Projekt kopieren
- [x] Krisen-Bild beim "Doppelte Schreckensszenario" ersetzt (System-Ausfall mit Manager am Telefon)
- [x] Farben und Layout geprüft - keine Anpassung nötig (rote Fehlermeldung passt perfekt zum Design)
- [x] Beide Sprachen getestet (DE + EN) - Bild illustriert Dual-Krise perfekt

## Cyber-Resilienz-Bild auf Hotels-Seite ersetzen

- [x] Neues Phishing/Cyber-Bild in Projekt kopieren
- [x] Cyber-Security-Bild bei "Was wir real prüfen" ersetzt (Person mit Laptop + Smartphone)
- [x] Layout geprüft - keine Anpassung nötig (passt perfekt ins Grid)
- [x] Beide Sprachen getestet (DE + EN) - Bild illustriert Phishing-Szenarien authentisch

## Führungsfähigkeit-Bild auf Hotels-Seite ersetzen

- [x] Neues Hotelmanager-Bild in Projekt kopieren
- [x] Führungs-Bild bei "Was wir real prüfen" ersetzt (Hotelmanager mit Tablet in Lobby)
- [x] Layout/Farben geprüft - keine Anpassung nötig (warme Töne passen perfekt)
- [x] Beide Sprachen getestet (DE + EN) - Bild illustriert Führungsfähigkeit authentisch

## IT-Abhängigkeiten-Bild auf Hotels-Seite ersetzen

- [x] Neues Server-Raum-Bild mit IT-Personal in Projekt kopieren
- [x] IT-Infrastruktur-Bild bei "Was wir real prüfen" ersetzt (zwei IT-Professionals vor Server-Rack)
- [x] Layout/Farben geprüft - keine Anpassung nötig (helle, professionelle Töne passen perfekt)
- [x] Beide Sprachen getestet (DE + EN) - Bild illustriert IT/Technik/Personal-Abhängigkeiten authentisch

## Blaue Grafiken auf Hotels-Seite anpassen

- [x] Blaue Grafiken identifiziert (Venn-Diagramm mit Navy-Blau)
- [x] Grafiken farblich angepasst und durch warme Versionen ersetzt
  - Heller beiger Hintergrund (#FAF8F5) statt Navy-Blau
  - Warme graue Kreise (#E8E0D5) statt kaltes Blau
  - Gedämpftes Rot (#E63946) für Zentral-Bereich
  - Minimalistische Icons im Swiss Design
- [x] Warme, gedämpfte Farbpalette beibehalten (konsistent mit Fotos)
- [x] Beide Sprachen getestet (DE + EN) - Farben harmonieren perfekt mit Fotos

## Zweite blaue Grafik unter "Sicherheit als Führungsaufgabe" ersetzen

- [ ] Grafik unter "Sicherheit als Führungsaufgabe" lokalisieren
- [ ] Warme Version der Grafik erstellen (beige/grau/rot statt blau)
- [ ] Blaue Grafik durch warme Version ersetzen
- [ ] Beide Sprachen testen (DE + EN)


## Sprachenmix in Roadmap-Grafiken korrigieren

- [x] Deutsche Roadmap-Grafik komplett auf Deutsch übersetzen (Zone 1/2/3 Titel, alle Bulletpoints, alle Beschriftungen)
- [x] Englische Roadmap-Grafik überprüfen (muss 100% Englisch sein)
- [x] Beide Grafiken in Hotels.tsx testen
- [x] Checkpoint speichern


## E-Mail-Zustellung über Resend korrigieren (DMARC/SPF/DKIM)

- [x] email.ts Datei öffnen und sendContactNotification Funktion lokalisieren
- [x] From-Adresse korrigieren: bleibt contact@redteaming.ch (verifizierte Domain)
- [x] Reply-To Feld setzen: contact@redteaming.ch
- [x] To-Adresse verifizieren: contact@redteaming.ch
- [x] Änderungen testen
- [x] Checkpoint speichern

## Safari/Firefox Browser-Kompatibilität

- [x] CSS auf Safari-inkompatible Features prüfen (backdrop-filter, oklch, @property)
- [x] postcss-preset-env installiert: oklch() Farben werden zu rgb() Fallbacks konvertiert
- [x] @vitejs/plugin-legacy installiert: JS-Polyfills für ältere Browser
- [x] -webkit-backdrop-filter in index.css ergänzt
- [x] backdrop-filter in Imprint.tsx, Privacy.tsx, NotFound.tsx mit inline style überarbeitet
- [x] Alle 13 Tests bestehen weiterhin
- [x] Checkpoint speichern

## Social Engineering als 4. Pfeiler im Venn-Diagramm

- [x] Neues Venn-Diagramm (4 Kreise: PHY, ORG, DIG, SOC) auf Deutsch generieren
- [x] Neues Venn-Diagramm (4 Kreise) auf Englisch generieren
- [x] Neue Diagramme direkt auf CDN gespeichert (webdev-static-assets)
- [x] Hotels.tsx: Venn-Diagramm-Referenzen auf neue CDN-URLs aktualisiert
- [x] translations.ts: vennAlt in DE und EN mit Social Engineering ergänzt
- [ ] Checkpoint speichern

## Social Engineering als 4. Pfeiler auf Home-Seite (Warum Red Teaming?)

- [x] Home.tsx: 4. Karte "Social Engineering" im Warum-Red-Teaming-Abschnitt hinzugefügt (4-Spalten-Grid)
- [x] translations.ts: socialEngineering + socialEngineeringDesc in DE und EN ergänzt
- [ ] Checkpoint speichern
