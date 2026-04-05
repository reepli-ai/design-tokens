# reepli-ai-design-tokens

Shared design tokens for the Reepli.ai ecosystem (landing page, dashboard, app).

Single source of truth for colors, typography, spacing, border radii, and shadows.

[![npm](https://img.shields.io/npm/v/reepli-ai-design-tokens)](https://www.npmjs.com/package/reepli-ai-design-tokens)

## Install

```bash
npm install reepli-ai-design-tokens
```

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
}
```

### Raw JSON

```js
const tokens = require('reepli-ai-design-tokens');
console.log(tokens.colors.lime); // '#25D366'
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

### Typography

| Token | Font |
|-------|------|
| `font-heading` | Syne |
| `font-body` | DM Sans |
| `font-accent` | Poppins |

### Border Radii

| Token | Value |
|-------|-------|
| `default` | 18px |
| `sm` | 10px |
| `full` | 100px |
| `card` | 18px |

## License

MIT
