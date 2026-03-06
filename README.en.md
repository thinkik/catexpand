# CatExpand Extension

> Language: **English** | [Deutsche Version](README.de.md)

A small web application for creating MARC extensions, including preview, template management, and JSON output.

## Language Versions

- German (main file): [`README.md`](README.md)
- German (separate language file): [`README.de.md`](README.de.md)
- English (this file): [`README.en.md`](README.en.md)

## Overview

This web page provides a user-friendly interface for creating extensions for MARC data fields. Using a form, users can easily add new fields (data fields) by:

- Entering the desired field number
- Defining indicators (1st and 2nd indicator)
- Entering subfields and values (e.g. `$$a`, `$$2 gnd`)
- Setting a name for the extension

From these inputs, a JSON object is generated that can be used as a template for MARC extension rules.

## Features

- **Extension creation form**  
  The form includes:
  - **Field number** (required)
  - **1st indicator** (optional)
  - **2nd indicator** (optional)
  - **Subfield input** (required; e.g. `$$a`, `$$2 gnd`)
  - **Extension name** (optional; a default name is generated if omitted)

- **Generate extension**  
  Clicking **"Erweiterung erstellen"** generates a JSON object displayed in the lower part of the page. This object contains a rule of type `AddDataFieldRule` that adds the defined MARC field.

- **Copy to clipboard**  
  After successful generation, click **"In Zwischenablage speichern"** to copy the extension, for example into configuration files or other tools.

- **Preview**  
  A full field preview (including indicators and subfields) is shown below the generated JSON.

- **Reset form**  
  Clicking **"Neue Erweiterung erstellen"** clears the form so you can create another extension.

- **Save/load templates**  
  Created inputs can be stored as browser templates and reloaded from a dropdown list.

- **Dark mode**  
  The interface supports a toggleable light/dark mode.

## Technical Details

- **HTML5 & CSS**  
  The page uses a responsive layout based on simple flexbox structures. All styles are defined in the `<style>` block within the HTML `<head>`.

- **JavaScript**  
  Logic is located in `index.html` (form behavior/UI) and `parseSubfields.js` (subfield parser).

- **Accessibility**
  - `aria-live` regions for dynamic content (e.g. `aria-live="polite"` for previews)
  - `required` and `aria-required="true"` for required inputs
  - Focus styles and keyboard accessibility

- **Compatibility**  
  The app is optimized for modern browsers and uses APIs like `navigator.clipboard.writeText` and `localStorage`. In older browsers, some features (e.g. direct clipboard copy or template storage) may be limited.

## Usage

1. Open the HTML file in a browser.
2. Enter at least a field number and subfields (field value).
3. Click **"Erweiterung erstellen"** to generate the JSON output.
4. Use **"In Zwischenablage speichern"** to copy the generated extension.
5. Use **"Neue Erweiterung erstellen"** to reset the form and start a new extension.
6. Load saved templates via the dropdown; the extension is generated and displayed automatically.

## Project Structure

- `index.html` – UI, styles, and interaction logic
- `parseSubfields.js` – parser for MARC subfields
- `tests/` – simple Node.js tests for parser logic

## Tests

Node.js is required to run automated tests. A simple test script is located in `tests`. Run tests with:

```bash
node tests/run-tests.js
```

## Customization and Extension

- CSS variables in the `:root` block allow quick color customization.
- JSON generation logic can be extended or adjusted in the scripts.
- Additional MARC-specific form helpers can be added.

## License

This project is licensed under the **GNU General Public License v3.0**. The full license text is available in `LICENSE`.

Short form (SPDX): `GPL-3.0-only`
