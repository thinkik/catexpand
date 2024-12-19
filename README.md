# CatExpand Erweiterung Generator

## Beschreibung

Ein webbasiertes Tool zur Erstellung von MARC21 JSON-Erweiterungen für CatExpand. Dieses Tool ermöglicht das Generieren, Speichern, Importieren und Exportieren von Erweiterungsregeln mit einer benutzerfreundlichen Oberfläche.

## Funktionen

- **Tooltips**: Hilfetexte für Eingabefelder zur besseren Verständlichkeit.
- **Inline-Validierung**: Echtzeit-Validierung der Eingaben mit sofortigem Feedback.
- **Download-Funktion**: Möglichkeit, die generierte JSON-Datei herunterzuladen.
- **Dark Mode**: Umschaltbare Licht- und Dunkelmodus für eine angenehmere Benutzererfahrung.
- **Mehrere Regeln**: Unterstützung für die Erstellung und Verwaltung mehrerer Erweiterungsregeln.
- **Import/Export**: Importieren und Exportieren von JSON-Erweiterungen.
- **localStorage**: Speichern von Erweiterungen im Browser für späteren Zugriff.
- **Barrierefreiheit**: Erweiterte ARIA-Attribute und Fokusmanagement für bessere Zugänglichkeit.
- **Internationalisierung**: Unterstützung für Deutsch und Englisch.
- **Syntax-Hervorhebung**: Verbesserte Darstellung des generierten JSON mittels Prism.js.

## Installation

Keine spezielle Installation erforderlich. Folge diesen Schritten, um das Tool zu nutzen:

1. **Download**:
   - Lade das Repository herunter oder klone es mit Git:
     ```bash
     git clone https://github.com/thinkik/catexpand.git
     ```
2. **Öffnen**:
   - Öffne die `catexpand_v1.2.html`-Datei in deinem bevorzugten Webbrowser.

## Nutzung

1. **Sprache wählen**:
   - Wähle die gewünschte Sprache (Deutsch oder Englisch) aus dem Dropdown-Menü oben rechts.

2. **Formular ausfüllen**:
   - **Für welches Feld soll eine Erweiterung erstellt werden**: Gib die dreistellige Feldnummer ein (z.B. `650`).
   - **Erster Indikator**: Gib den ersten Indikator ein (z.B. `0`, `1`, `2` oder lasse es leer).
   - **Zweiter Indikator**: Gib den zweiten Indikator ein (z.B. `0`, `4` oder lasse es leer).
   - **Eingabe Unterfelder**: Gib die Unterfelder im Format `$$a $$2 gnd` ein.
   - **Name der Erweiterung**: Optional. Gib einen Namen für die Erweiterung ein (z.B. `084 RVK`).

3. **Erweiterung erstellen**:
   - Klicke auf **"Erweiterung erstellen"**, um die JSON-Erweiterung zu generieren.

4. **Erweiterung kopieren oder herunterladen**:
   - Klicke auf **"In Zwischenablage speichern"**, um die JSON-Daten zu kopieren.
   - Klicke auf **"Download JSON"**, um die JSON-Datei herunterzuladen.

5. **Formular zurücksetzen**:
   - Klicke auf **"Neue Erweiterung erstellen"**, um das Formular zu leeren und eine neue Regel zu erstellen.

## Features im Detail

### Tooltips
Bewege den Mauszeiger über das Informationssymbol (ℹ️) neben den Eingabefeldern, um zusätzliche Informationen zu erhalten.

### Inline-Validierung
Das Tool überprüft deine Eingaben in Echtzeit und zeigt Fehlermeldungen direkt unter den entsprechenden Feldern an, wenn die Eingaben nicht den Anforderungen entsprechen.

### Dark Mode
Schalte zwischen Hell- und Dunkelmodus um, indem du den Schalter oben rechts betätigst. Die Einstellung wird in deinem Browser gespeichert und bleibt bei zukünftigen Besuchen erhalten.

### Mehrere Regeln
Momentan unterstützt das Tool die Erstellung von einzelnen Regeln. Erweiterungen zur Unterstützung mehrerer Regeln können hinzugefügt werden.

### Import/Export
Die Funktion zum Importieren und Exportieren von JSON-Erweiterungen kann in zukünftigen Versionen integriert werden.

### localStorage
Generierte Erweiterungen werden automatisch im Browser gespeichert. Diese können später über die Funktion `loadFromLocalStorage()` wieder abgerufen werden.

### Barrierefreiheit
Das Tool verwendet ARIA-Attribute und fokussiert automatisch auf wichtige Elemente nach Aktionen, um die Nutzung mit Screenreadern zu erleichtern.

### Internationalisierung
Wechsle einfach zwischen Deutsch und Englisch, um die Benutzeroberfläche in der bevorzugten Sprache zu nutzen.

### Syntax-Hervorhebung
Die generierte JSON-Ausgabe wird mit Prism.js hervorgehoben, um die Lesbarkeit und Verständlichkeit zu verbessern.

## Beiträge

Beiträge zur Verbesserung dieses Tools sind willkommen! Bitte erstelle einen Pull-Request oder melde ein Issue auf [GitHub](https://github.com/dein-benutzername/catexpand).

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Weitere Informationen findest du in der [LICENSE](LICENSE)-Datei.
