# Truth Section Styling - Live Website Observation

## Beobachtung vom Screenshot (redteaming.ch/hotels)

Die Bulletpoints in der "Die unbequeme Wahrheit" Sektion haben auf der Live-Website einen **hellgrauen Hintergrund-Rahmen** (Card/Box).

### Visuelles Styling:
- Hellgrauer Hintergrund (ähnlich wie `bg-card` oder `bg-gray-50`)
- Leichter Border/Rahmen
- Padding um die Bulletpoints herum
- Alle 5 Bulletpoints sind in EINER Box zusammengefasst

### Aktueller Zustand auf unserer Seite:
- Bulletpoints haben KEINEN Hintergrund
- Bulletpoints stehen direkt im weißen Bereich
- Keine visuelle Abgrenzung/Card

### Zu implementieren:
```tsx
<div className="bg-card border border-border rounded-lg p-6">
  <ul className="space-y-3 text-sm text-muted-foreground">
    {/* Alle 5 Bulletpoints hier */}
  </ul>
</div>
```
