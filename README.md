# reepli-ai-design-tokens

Shared design tokens for the Reepli.ai ecosystem (landing page, dashboard, app).

Single source of truth for colors, typography, spacing, border radii, and shadows.

[![npm](https://img.shields.io/npm/v/reepli-ai-design-tokens)](https://www.npmjs.com/package/reepli-ai-design-tokens)

## Install

```bash
npm install reepli-ai-design-tokens
```

> Le package est heberge sur **npmjs.com** (registre public). Aucune configuration de registre GitHub Packages n'est necessaire.

## Usage

### Tailwind CSS (preset)

```js
// tailwind.config.js
const reepliPreset = require('reepli-ai-design-tokens/tailwind');

module.exports = {
  presets: [reepliPreset],
};
```

### CSS Custom Properties

```css
@import "reepli-ai-design-tokens/css-variables.css";

.my-component {
  color: var(--color-green);
  font-family: var(--font-heading);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card-hover);
}
```

> **Note Turbopack / Next.js 16** : Turbopack ne resout pas les `@import` depuis `node_modules`. Dans le dashboard, on copie le fichier avant le build :
> ```bash
> cp node_modules/reepli-ai-design-tokens/css-variables.css app/design-tokens.css
> ```
> Puis `@import "./design-tokens.css";` dans `globals.css`.

### Raw JSON

```js
const tokens = require('reepli-ai-design-tokens');
console.log(tokens.colors.lime); // '#25D366'
```

### Google Fonts

Les polices utilisees par les tokens doivent etre chargees dans votre projet. Ajoutez cette ligne dans votre `<head>` :

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `green` | `#0F1B2D` | Primary dark |
| `green-mid` | `#1A2D45` | Secondary dark |
| `lime` | `#25D366` | Accent / CTA (WhatsApp green) |
| `ivory` | `#f5f0e8` | Light background alt |
| `warm-white` | `#F8F5EF` | Main background |
| `muted` | `#7A9E8A` | Secondary text |
| `text` | `#1a1a18` | Primary text |
| `card-bg` | `#ffffff` | Card backgrounds |
| `icon-bg` | `#E8F7EE` | Icon backgrounds |
| `icon-color` | `#1A7A4A` | Icon color |
| `section-intro` | `#4A6B58` | Section intro text |
| `feature-text` | `#6A9478` | Feature descriptions |
| `footer-bg` | `#111710` | Footer background |
| `stars` | `#f5b83d` | Star ratings |

### Typography

| Token | Font |
|-------|------|
| `font-heading` | Plus Jakarta Sans |
| `font-body` | Inter |
| `font-accent` | Plus Jakarta Sans |

### Border Radii

| Token | Value |
|-------|-------|
| `default` | 18px |
| `sm` | 10px |
| `full` | 100px |
| `card` | 18px |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `card-hover` | `0 8px 32px rgba(15,27,45,0.08)` | Card hover effect |
| `plan-hover` | `0 12px 44px rgba(15,27,45,0.1)` | Plan card hover |
| `popular` | `0 20px 60px rgba(15,27,45,0.25)` | Popular plan highlight |
| `nav` | `0 2px 20px rgba(15,27,45,0.1)` | Navigation shadow |

## CI / Publish

Le package est publie automatiquement sur [npmjs.com](https://www.npmjs.com/package/reepli-ai-design-tokens) via GitHub Actions quand un fichier source (`tokens.json`, `css-variables.css`, `tailwind-preset.js`, `package.json`) est modifie sur `main`.

Le secret `NPM_TOKEN` doit etre configure dans Settings > Secrets > Actions.

## License

MIT
