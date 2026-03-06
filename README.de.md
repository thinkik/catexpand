# CatExpand Erweiterung

> Sprache: **Deutsch** | [English version](README.en.md)

Eine kleine Webanwendung zur Erstellung von MARC-Erweiterungen inklusive Vorschau, Vorlagenverwaltung und JSON-Ausgabe.

## Sprachversionen

- Deutsch (diese Datei): [`README.md`](README.md)
- Deutsch (separate Sprachdatei): [`README.de.md`](README.de.md)
- Englisch: [`README.en.md`](README.en.md)

## Übersicht

Diese Webseite bietet eine benutzerfreundliche Oberfläche zur Erstellung von Erweiterungen für MARC-Datenfelder. Mit Hilfe eines Formulars können Nutzer*innen auf einfache Weise neue Felder (Data Fields) hinzufügen, indem sie:

- Die gewünschte Feldnummer angeben
- Indikatoren (1. und 2. Indikator) spezifizieren
- Unterfelder und Werte (z. B. `$$a`, `$$2 gnd`) eingeben
- Einen Namen für die Erweiterung festlegen

Aus diesen Eingaben wird ein JSON-Objekt generiert, das als Vorlage für MARC-Erweiterungsregeln dienen kann.

## Funktionen der Webseite

- **Formular zum Erstellen von Erweiterungen**:  
  Das Formular enthält folgende Felder:
  - **Feldnummer** (Pflichtfeld)
  - **1. Indikator** (optional)
  - **2. Indikator** (optional)
  - **Eingabe Unterfelder** (Pflichtfeld; z. B. `$$a`, `$$2 gnd`)
  - **Name der Erweiterung** (optional, bei Nichtangabe wird ein Standardname generiert)

- **Erweiterung generieren**:  
  Klick auf den Button **"Erweiterung erstellen"** erzeugt ein JSON-Objekt, welches im unteren Bereich der Seite angezeigt wird. Dieses Objekt beinhaltet eine Regel vom Typ `AddDataFieldRule`, die das definierte MARC-Feld hinzufügt.

- **In Zwischenablage kopieren**:  
  Nach der erfolgreichen Generierung der Erweiterung kann diese per Klick auf **"In Zwischenablage speichern"** kopiert werden, um sie z. B. in Konfigurationsdateien oder andere Anwendungen einzufügen.

- **Vorschau**:  
  Unterhalb des generierten JSON wird eine Vorschau des vollständigen Feldes mit Indikatoren und Unterfeldern angezeigt.

- **Formular zurücksetzen**:  
  Über den Button **"Neue Erweiterung erstellen"** kann das Formular geleert werden, um eine neue Erweiterung anzulegen.

- **Vorlagen speichern/laden**:
  Erzeugte Eingaben können als Vorlage im Browser gespeichert und über eine Auswahlliste wieder geladen werden.

- **Dark Mode**:
  Die Oberfläche unterstützt einen umschaltbaren Hell-/Dunkelmodus.

## Technische Details

- **HTML5 & CSS**:  
  Die Seite verwendet ein responsives Layout, basierend auf einfachen Flexbox-Layouts. Alle Styles sind im `<style>`-Block im `<head>` der HTML-Datei definiert.
  
- **JavaScript**:  
  Die Logik liegt in `index.html` (Formularverhalten/UI) und `parseSubfields.js` (Parser für Unterfelder).

- **Zugänglichkeit**:
  - `aria-live`-Regionen für dynamische Inhalte (z. B. `aria-live="polite"` für die Vorschauen)
  - Verwendung von `required` und `aria-required="true"` bei Pflichtfeldern
  - Fokus-Styles und Tastaturbedienbarkeit

- **Kompatibilität**:  
  Die Seite ist für moderne Browser optimiert und verwendet u. a. `navigator.clipboard.writeText` und `localStorage`. Bei älteren Browsern könnten einzelne Funktionen (z. B. direktes Kopieren in die Zwischenablage oder Vorlagenspeicherung) eingeschränkt sein.

## Verwendung

1. Öffnen Sie die HTML-Datei in einem Browser.
2. Geben Sie mindestens die Feldnummer und die Unterfelder (Feldwert) ein.
3. Klicken Sie auf **"Erweiterung erstellen"**, um die JSON-Ausgabe zu erzeugen.
4. Nutzen Sie den **"In Zwischenablage speichern"**-Button, um die generierte Erweiterung zu kopieren.
5. Mit **"Neue Erweiterung erstellen"** setzen Sie das Formular zurück, um eine weitere Erweiterung anzulegen.
6. Gespeicherte Vorlagen lassen sich über die Auswahlliste laden; die Erweiterung wird dabei automatisch erstellt und angezeigt.

## Projektstruktur

- `index.html` – UI, Styles und Interaktionslogik
- `parseSubfields.js` – Parser für MARC-Unterfelder
- `tests/` – einfache Node.js-Tests für die Parserlogik

## Tests

Um die automatischen Tests auszuführen, wird Node.js benötigt.
Im Verzeichnis `tests` befindet sich ein einfaches Testskript. Die Tests starten Sie mit:

```bash
node tests/run-tests.js
```

## Anpassungen und Erweiterungen

- Die CSS-Variablen im `:root`-Block ermöglichen schnelle Farbanpassungen.
- Die Logik zur Erzeugung der JSON-Struktur kann im Skript entsprechend erweitert oder angepasst werden.
- Die Felder können um weitere MARC-spezifische Eingabehilfen ergänzt werden.

## Lizenz

Dieses Projekt steht unter der **GNU General Public License v3.0**. Der vollständige Lizenztext ist in der Datei `LICENSE` enthalten.

Kurzform (SPDX): `GPL-3.0-only`
