# Cloudflare Turnstile Setup-Anleitung

Cloudflare Turnstile ist ein kostenloser, DSGVO-konformer Spam-Schutz für Webformulare (Alternative zu reCAPTCHA). Diese Anleitung erklärt, wie Sie Turnstile für Ihr Kontaktformular einrichten.

## Warum Turnstile?

- **Kostenlos**: Unbegrenzte Anfragen ohne Kosten
- **DSGVO-konform**: Keine Cookies, keine Tracking-Daten
- **Benutzerfreundlich**: Keine nervigen Bilderrätsel
- **Schnell**: Verifizierung in < 1 Sekunde
- **Effektiv**: Blockiert 99% der Spam-Bots

## Schritt 1: Cloudflare-Konto erstellen

1. Gehen Sie zu [cloudflare.com](https://www.cloudflare.com)
2. Klicken Sie auf "Sign Up" (oben rechts)
3. Erstellen Sie ein kostenloses Konto mit Ihrer E-Mail-Adresse

## Schritt 2: Turnstile-Site erstellen

1. Melden Sie sich in Ihrem Cloudflare-Dashboard an
2. Navigieren Sie zu **Turnstile** im linken Menü (unter "Security")
3. Klicken Sie auf **"Add Site"**
4. Füllen Sie das Formular aus:
   - **Site name**: `Red Teaming Switzerland`
   - **Domain**: `redteaming.ch`
   - **Widget Mode**: `Managed` (empfohlen)
5. Klicken Sie auf **"Create"**

## Schritt 3: Site Key und Secret Key kopieren

Nach der Erstellung sehen Sie zwei Keys:

- **Site Key** (öffentlich): Beginnt mit `0x...` → Für Frontend
- **Secret Key** (geheim): Beginnt mit `0x...` → Für Backend

**Wichtig**: Kopieren Sie beide Keys sofort, der Secret Key wird nur einmal angezeigt!

## Schritt 4: Keys in Manus Secrets hinzufügen

### Frontend Site Key:

1. Öffnen Sie Manus Management UI → **Settings → Secrets**
2. Klicken Sie auf **"Add Secret"**
3. Name: `VITE_TURNSTILE_SITE_KEY`
4. Value: Ihr Site Key (z.B. `0x4AAA...`)
5. Klicken Sie auf **"Save"**

### Backend Secret Key:

1. Klicken Sie erneut auf **"Add Secret"**
2. Name: `TURNSTILE_SECRET_KEY`
3. Value: Ihr Secret Key (z.B. `0x4BBB...`)
4. Klicken Sie auf **"Save"**

## Schritt 5: Server neu starten

Nach dem Hinzufügen der Secrets müssen Sie den Development Server neu starten:

1. Öffnen Sie Manus Management UI → **Dashboard**
2. Klicken Sie auf **"Restart Server"** (oder warten Sie auf automatischen Neustart)

## Schritt 6: Testen

1. Öffnen Sie Ihre Webseite: `https://redteaming.ch`
2. Klicken Sie auf **"Gespräch anfragen"**
3. Füllen Sie das Formular aus
4. **Turnstile-Widget** sollte erscheinen (kleines Cloudflare-Logo)
5. Klicken Sie auf das Widget → Automatische Verifizierung
6. Submit-Button wird aktiviert → Formular absenden

**Erwartetes Verhalten:**
- ✅ Turnstile-Widget erscheint vor dem Submit-Button
- ✅ Nach erfolgreicher Verifizierung wird der Button aktiviert
- ✅ Formular wird erfolgreich abgesendet
- ✅ Eintrag erscheint in der Datenbank (Management UI → Database)

## Troubleshooting

### Problem: Turnstile-Widget erscheint nicht

**Lösung:**
1. Prüfen Sie, ob `VITE_TURNSTILE_SITE_KEY` in Secrets vorhanden ist
2. Server neu starten (Secrets werden nur beim Start geladen)
3. Browser-Cache leeren (Strg+Shift+R)

### Problem: "Spam-Schutz-Verifizierung fehlgeschlagen"

**Lösung:**
1. Prüfen Sie, ob `TURNSTILE_SECRET_KEY` in Secrets vorhanden ist
2. Stellen Sie sicher, dass der Secret Key korrekt kopiert wurde (keine Leerzeichen)
3. Prüfen Sie in Cloudflare Dashboard → Turnstile → Analytics, ob Anfragen ankommen

### Problem: Formular funktioniert ohne Turnstile

**Lösung:**
- Das ist normal! Wenn keine Keys konfiguriert sind, wird die Verifizierung übersprungen (Development Mode)
- Für Produktion **müssen** beide Keys konfiguriert sein

### Problem: "Invalid site key"

**Lösung:**
1. Prüfen Sie, ob die Domain in Cloudflare Turnstile korrekt eingetragen ist: `redteaming.ch`
2. Für lokale Tests können Sie `localhost` als zusätzliche Domain hinzufügen

## Turnstile auf andere Seiten erweitern

Aktuell ist Turnstile nur auf der **Home-Seite** integriert. Um es auf andere Seiten (Ansatz, Hotels, WeitereEinsatzfelder) zu erweitern:

1. Öffnen Sie die entsprechende Seite (z.B. `client/src/pages/Hotels.tsx`)
2. Importieren Sie die Komponente:
   ```typescript
   import { TurnstileWidget } from "@/components/TurnstileWidget";
   ```
3. Fügen Sie Token-State hinzu:
   ```typescript
   const [turnstileVerified, setTurnstileVerified] = useState(false);
   ```
4. Fügen Sie `turnstileToken` zum formData hinzu:
   ```typescript
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     phone: '',
     company: '',
     message: '',
     turnstileToken: '' // NEU
   });
   ```
5. Fügen Sie Verify-Handler hinzu:
   ```typescript
   const handleTurnstileVerify = (token: string) => {
     setFormData(prev => ({ ...prev, turnstileToken: token }));
     setTurnstileVerified(true);
   };
   ```
6. Erweitern Sie `handleFormSubmit`:
   ```typescript
   const handleFormSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     if (!turnstileVerified) {
       toast.error("Bitte bestätigen Sie, dass Sie kein Roboter sind.");
       return;
     }
     contactMutation.mutate(formData);
   };
   ```
7. Fügen Sie Widget vor Submit-Button ein:
   ```tsx
   <TurnstileWidget
     onVerify={handleTurnstileVerify}
     onError={() => toast.error("Verifizierung fehlgeschlagen.")}
   />
   <button type="submit" disabled={!turnstileVerified}>
     Gespräch anfragen
   </button>
   ```

## Monitoring

Überwachen Sie Turnstile-Performance im Cloudflare Dashboard:

1. Cloudflare Dashboard → **Turnstile**
2. Wählen Sie Ihre Site: `Red Teaming Switzerland`
3. **Analytics** zeigt:
   - Anzahl Verifizierungen
   - Erfolgsrate
   - Blockierte Anfragen
   - Geografische Verteilung

## Kosten

Cloudflare Turnstile ist **komplett kostenlos** für unbegrenzte Anfragen. Es gibt keine versteckten Kosten oder Limits.

## Support

Bei Problemen:
- Cloudflare Turnstile Dokumentation: [developers.cloudflare.com/turnstile](https://developers.cloudflare.com/turnstile)
- Cloudflare Community: [community.cloudflare.com](https://community.cloudflare.com)
