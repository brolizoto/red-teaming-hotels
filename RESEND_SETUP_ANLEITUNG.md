# Resend Einrichtungsanleitung für Red Teaming Switzerland

Diese Anleitung führt Sie Schritt für Schritt durch die Einrichtung von Resend für das Kontaktformular auf redteaming.ch.

---

## Schritt 1: Resend-Konto erstellen

1. Öffnen Sie [resend.com](https://resend.com) in Ihrem Browser
2. Klicken Sie auf **"Sign Up"** (oben rechts)
3. Registrieren Sie sich mit Ihrer E-Mail-Adresse (z.B. contact@redteaming.ch)
4. Bestätigen Sie Ihre E-Mail-Adresse über den Bestätigungslink
5. Loggen Sie sich in Ihr Resend Dashboard ein

**Kosten:** Resend bietet einen kostenlosen Plan mit 3.000 E-Mails pro Monat (mehr als ausreichend für Kontaktanfragen).

---

## Schritt 2: Domain hinzufügen und verifizieren

### 2.1 Domain in Resend hinzufügen

1. Klicken Sie im Resend Dashboard auf **"Domains"** (linke Seitenleiste)
2. Klicken Sie auf **"Add Domain"**
3. Geben Sie Ihre Domain ein: `redteaming.ch`
4. Klicken Sie auf **"Add"**

### 2.2 DNS-Records kopieren

Nach dem Hinzufügen zeigt Resend Ihnen **3 DNS-Records** an, die Sie bei Ihrem DNS-Provider hinzufügen müssen:

**Beispiel (Ihre Werte werden anders sein):**

| Typ | Name | Wert |
|-----|------|------|
| TXT | `@` | `resend-domain-verify=abc123...` |
| TXT | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3...` |
| TXT | `_dmarc` | `v=DMARC1; p=none;...` |

**Wichtig:** Kopieren Sie diese Werte genau, Sie benötigen sie im nächsten Schritt.

---

## Schritt 3: DNS-Records bei Ihrem Provider hinzufügen

### 3.1 Bei Hostpoint (oder Ihrem DNS-Provider)

1. Loggen Sie sich in Ihr Hostpoint Control Panel ein
2. Navigieren Sie zu **"Domains"** → **"redteaming.ch"** → **"DNS-Einstellungen"**
3. Fügen Sie die 3 DNS-Records aus Resend hinzu:

#### Record 1: Domain-Verifizierung
- **Typ:** TXT
- **Name:** `@` (oder leer lassen, je nach Provider)
- **Wert:** `resend-domain-verify=abc123...` (Ihr Wert aus Resend)
- **TTL:** 3600 (Standard)

#### Record 2: DKIM (E-Mail-Signatur)
- **Typ:** TXT
- **Name:** `resend._domainkey`
- **Wert:** `p=MIGfMA0GCSqGSIb3...` (Ihr Wert aus Resend)
- **TTL:** 3600

#### Record 3: DMARC (E-Mail-Policy)
- **Typ:** TXT
- **Name:** `_dmarc`
- **Wert:** `v=DMARC1; p=none;...` (Ihr Wert aus Resend)
- **TTL:** 3600

4. Speichern Sie alle Records

**Wichtig:** DNS-Änderungen können **15 Minuten bis 48 Stunden** dauern, bis sie weltweit propagiert sind. In der Regel sind sie nach 1-2 Stunden aktiv.

---

## Schritt 4: Domain-Verifizierung in Resend abschließen

1. Gehen Sie zurück zum Resend Dashboard → **"Domains"**
2. Warten Sie 15-30 Minuten nach dem Hinzufügen der DNS-Records
3. Klicken Sie bei `redteaming.ch` auf **"Verify"** oder **"Check DNS"**
4. Wenn die Records korrekt sind, zeigt Resend einen **grünen Haken** ✅ an
5. Status sollte jetzt **"Verified"** sein

**Falls Fehler auftreten:**
- Überprüfen Sie, ob die DNS-Records exakt kopiert wurden (keine Leerzeichen, keine fehlenden Zeichen)
- Warten Sie weitere 30-60 Minuten und versuchen Sie es erneut
- Nutzen Sie [DNS Checker](https://dnschecker.org) um zu prüfen, ob die Records weltweit sichtbar sind

---

## Schritt 5: API-Key erstellen

1. Klicken Sie im Resend Dashboard auf **"API Keys"** (linke Seitenleiste)
2. Klicken Sie auf **"Create API Key"**
3. Geben Sie einen Namen ein: `Red Teaming Contact Form`
4. **Permissions:** Wählen Sie **"Sending access"** (Standard)
5. Klicken Sie auf **"Create"**
6. **Wichtig:** Kopieren Sie den API-Key sofort (er wird nur einmal angezeigt!)
   - Format: `re_xxxxxxxxxxxxxxxxxxxxxxxxxx`

**Sicherheit:** Speichern Sie den Key sicher (z.B. in einem Passwort-Manager). Sie können ihn später nicht mehr einsehen.

---

## Schritt 6: API-Key in Manus hinzufügen

1. Öffnen Sie Ihr Red Teaming Projekt im Manus Management UI
2. Klicken Sie auf das **Einstellungen-Icon** (⚙️) oben rechts
3. Navigieren Sie zu **"Settings"** → **"Secrets"**
4. Klicken Sie auf **"Add Secret"** oder **"+"**
5. Geben Sie ein:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_xxxxxxxxxxxxxxxxxxxxxxxxxx` (Ihr API-Key aus Schritt 5)
6. Klicken Sie auf **"Save"** oder **"Add"**

**Wichtig:** Der Key-Name muss exakt `RESEND_API_KEY` lauten (Großbuchstaben, Unterstrich).

---

## Schritt 7: Testen Sie das Kontaktformular

1. Öffnen Sie Ihre Webseite: [https://redteaming.ch](https://redteaming.ch)
2. Klicken Sie auf **"Gespräch anfragen"** oder navigieren Sie zur Kontakt-Seite
3. Füllen Sie das Formular aus:
   - Name: Ihr Name
   - E-Mail: Ihre Test-E-Mail
   - Telefon: Ihre Telefonnummer
   - Firma: Test GmbH
   - Nachricht: Dies ist ein Test der Kontaktformular-Integration
4. Klicken Sie auf **"Nachricht senden"**
5. Sie sollten eine Bestätigung sehen: "Vielen Dank! Wir melden uns in Kürze bei Ihnen."

### E-Mail überprüfen

1. Öffnen Sie Ihr E-Mail-Postfach: **contact@redteaming.ch**
2. Sie sollten eine E-Mail erhalten mit:
   - **Betreff:** "Neue Kontaktanfrage von [Name]"
   - **Absender:** noreply@redteaming.ch
   - **Inhalt:** Alle Formular-Daten (Name, E-Mail, Telefon, Firma, Nachricht)

**Falls keine E-Mail ankommt:**
- Überprüfen Sie den Spam-Ordner
- Prüfen Sie in Resend Dashboard → **"Logs"**, ob die E-Mail versendet wurde
- Überprüfen Sie, ob der API-Key korrekt in Manus Secrets hinterlegt ist
- Starten Sie den Dev Server neu (falls Sie lokal testen)

---

## Schritt 8: E-Mail-Versand überwachen (Optional)

### Resend Dashboard Logs

1. Gehen Sie zu Resend Dashboard → **"Logs"**
2. Hier sehen Sie alle versendeten E-Mails:
   - **Status:** Delivered, Bounced, Failed
   - **Empfänger:** contact@redteaming.ch
   - **Zeitstempel:** Wann die E-Mail versendet wurde
   - **Details:** Klicken Sie auf eine E-Mail für mehr Informationen

### E-Mail-Statistiken

- **Sent:** Anzahl versendeter E-Mails
- **Delivered:** Erfolgreich zugestellt
- **Bounced:** Fehlgeschlagen (ungültige E-Mail-Adresse)
- **Opened:** Geöffnet (nur wenn Tracking aktiviert)

---

## Troubleshooting

### Problem: Domain-Verifizierung schlägt fehl

**Lösung:**
1. Überprüfen Sie DNS-Records mit [DNS Checker](https://dnschecker.org)
2. Geben Sie `redteaming.ch` ein und wählen Sie **"TXT"** als Record-Typ
3. Prüfen Sie, ob die Resend-Records weltweit sichtbar sind
4. Warten Sie weitere 1-2 Stunden und versuchen Sie es erneut

### Problem: E-Mails kommen nicht an

**Lösung:**
1. Überprüfen Sie Spam-Ordner
2. Prüfen Sie Resend Logs: Wurde die E-Mail versendet?
3. Überprüfen Sie API-Key in Manus Secrets (korrekte Schreibweise?)
4. Testen Sie mit einer anderen E-Mail-Adresse (z.B. Gmail)

### Problem: API-Key funktioniert nicht

**Lösung:**
1. Überprüfen Sie, ob der Key korrekt kopiert wurde (keine Leerzeichen)
2. Erstellen Sie einen neuen API-Key in Resend
3. Ersetzen Sie den alten Key in Manus Secrets
4. Starten Sie den Server neu (falls lokal)

### Problem: "Rate Limit Exceeded"

**Lösung:**
- Resend Free Plan: Max. 100 E-Mails pro Tag
- Upgraden Sie auf einen bezahlten Plan, wenn Sie mehr E-Mails benötigen

---

## Zusammenfassung

Nach erfolgreicher Einrichtung:

✅ Domain redteaming.ch ist in Resend verifiziert  
✅ DNS-Records (TXT, DKIM, DMARC) sind konfiguriert  
✅ API-Key ist in Manus Secrets hinterlegt  
✅ Kontaktformular sendet E-Mails an contact@redteaming.ch  
✅ E-Mails werden von noreply@redteaming.ch versendet  

**Support:**
- Resend Dokumentation: [resend.com/docs](https://resend.com/docs)
- Resend Support: support@resend.com
- Manus Support: [help.manus.im](https://help.manus.im)

---

**Geschätzte Einrichtungszeit:** 30-45 Minuten (inkl. DNS-Propagation)

Viel Erfolg! 🚀
