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
