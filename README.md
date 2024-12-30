# CatExpand Erweiterung

## Übersicht

Diese Webseite bietet eine benutzerfreundliche Oberfläche zur Erstellung von Erweiterungen für MARC-Datenfelder. Mit Hilfe eines Formulars können Nutzer*innen auf einfache Weise neue Felder (Data Fields) hinzufügen, indem sie:

- Die gewünschte Feldnummer angeben
- Indikatoren (1. und 2. Indikator) spezifizieren
- Unterfelder und Werte (z. B. `$$a`, `$$2 gnd`) eingeben
- Einen Namen für die Erweiterung festlegen

Aus diesen Eingaben wird ein JSON-Objekt generiert, welches als Vorlage für MARC-Erweiterungsregeln dienen kann.

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

## Technische Details

- **HTML5 & CSS**:  
  Die Seite verwendet ein responsives Layout, basierend auf einfachen Flexbox-Layouts. Alle Styles sind im `<style>`-Block im `<head>` der HTML-Datei definiert.
  
- **JavaScript**:  
  Ein Skript (im `<script>`-Tag am Seitenende) steuert die Formularvalidierung, Generierung der JSON-Ausgabe, das Kopieren in die Zwischenablage sowie das Anzeigen von Hinweismeldungen.  

- **Zugänglichkeit**:
  - `aria-live`-Regionen für dynamische Inhalte (z. B. `aria-live="polite"` für die Vorschauen)
  - Verwendung von `required` und `aria-required="true"` bei Pflichtfeldern
  - Fokus-Styles und Tastaturbedienbarkeit

- **Kompatibilität**:  
  Die Seite ist für moderne Browser optimiert und verwendet `fetch()`-ähnliche APIs (hier: `navigator.clipboard.writeText`). Bei älteren Browsern könnten einige Funktionen (wie das direkte Kopieren in die Zwischenablage) nicht zur Verfügung stehen.

## Verwendung

1. Öffnen Sie die HTML-Datei in einem Browser.
2. Geben Sie mindestens die Feldnummer und die Unterfelder (Feldwert) ein.
3. Klicken Sie auf **"Erweiterung erstellen"**, um die JSON-Ausgabe zu erzeugen.
4. Nutzen Sie den **"In Zwischenablage speichern"**-Button, um die generierte Erweiterung zu kopieren.
5. Mit **"Neue Erweiterung erstellen"** setzen Sie das Formular zurück, um eine weitere Erweiterung anzulegen.

## Anpassungen und Erweiterungen

- Die CSS-Variablen im `:root`-Block ermöglichen schnelle Farbanpassungen.
- Die Logik zur Erzeugung der JSON-Struktur kann im Skript entsprechend erweitert oder angepasst werden.
- Die Felder können um weitere MARC-spezifische Eingabehilfen ergänzt werden.

## Lizenz

GPL-3.0 license 
Die Nutzung des Codes und der Webseite ist frei. Bitte beachten Sie, dass für den Einsatz in produktiven Umgebungen ggf. Anpassungen an den generierten Regeln notwendig sind.
