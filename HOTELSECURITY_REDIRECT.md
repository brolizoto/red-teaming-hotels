# hotelsecurity.ch Domain Redirect Setup

## Übersicht

Die Domain **hotelsecurity.ch** soll per 301-Redirect auf **redteaming.ch/hotels** weiterleiten.

## DNS-Konfiguration

### Option 1: DNS-Ebene (empfohlen)

Konfigurieren Sie bei Ihrem DNS-Provider (z.B. Hostpoint, Cloudflare) einen **301 Permanent Redirect**:

```
hotelsecurity.ch → https://redteaming.ch/hotels
www.hotelsecurity.ch → https://redteaming.ch/hotels
```

### Option 2: Manus Domain Management

1. Gehen Sie im Manus Management UI zu **Settings → Domains**
2. Fügen Sie `hotelsecurity.ch` als Custom Domain hinzu
3. Konfigurieren Sie den Redirect auf `/hotels`

## SEO-Vorteile

- **301 Permanent Redirect**: Suchmaschinen übertragen PageRank von hotelsecurity.ch auf redteaming.ch/hotels
- **Keine Content-Duplikate**: Verhindert Duplicate Content Penalties
- **Konsolidierte SEO-Power**: Alle Backlinks und Rankings fließen in eine Domain

## Canonical URL

Die Hotels-Seite verwendet bereits die korrekte Canonical URL:

```html
<link rel="canonical" href="https://redteaming.ch/hotels" />
```

## Verifikation

Nach Setup testen Sie:

```bash
curl -I https://hotelsecurity.ch
```

Erwartete Response:
```
HTTP/1.1 301 Moved Permanently
Location: https://redteaming.ch/hotels
```

## Monitoring

- Google Search Console: Beide Domains hinzufügen und Redirect-Traffic überwachen
- Analytics: Traffic-Quellen von hotelsecurity.ch tracken
