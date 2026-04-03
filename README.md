# @reepli-ai/design-tokens

Shared design tokens for the Reepli.ai ecosystem (landing page, dashboard, app).

Single source of truth for colors, typography, spacing, border radii, and shadows.

## Install

```bash
npm install @reepli-ai/design-tokens --registry=https://npm.pkg.github.com
```

Or add to `.npmrc`:
```
@reepli-ai:registry=https://npm.pkg.github.com
```

Then:
```bash
npm install @reepli-ai/design-tokens
```

## Usage

### Tailwind CSS (preset)
```js
// tailwind.config.js
const reepliPreset = require('@reepli-ai/design-tokens/tailwind');
module.exports = {
  presets: [reepliPreset],
};
```

### CSS Custom Properties
```css
@import "@reepli-ai/design-tokens/css";
.my-component {
  color: var(--color-green);
  font-family: var(--font-heading);
}
```

### Raw JSON
```js
const tokens = require('@reepli-ai/design-tokens');
console.log(tokens.colors.lime); // '#25D366'
```
