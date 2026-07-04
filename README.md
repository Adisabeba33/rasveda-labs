# RasVeda Labs — Website

The official website for **RasVeda Labs**, a brand house and venture studio that
owns and operates a portfolio of consumer and technology brands at the
intersection of sensory experience, science and everyday wellbeing.

> **RasVeda** — from *rasa* (essence, flavour) and *veda* (knowledge):
> *the knowledge of essence.*

## Portfolio

| Brand | Category |
|-------|----------|
| **Lezzgo2** | Food & social discovery |
| **SŌMA** | Sensory sommelier |
| **ingredients.help** | Ingredient transparency |
| **DayBreak** | Wellbeing |
| **Quantara** | Technology / data intelligence |

## Tech

A dependency-free static site — plain HTML, CSS and JavaScript. No build step,
no framework. It can be opened directly in a browser or served by any static
host (GitHub Pages, Netlify, Cloudflare Pages, etc.).

```
.
├── index.html          # Single-page site
├── styles/
│   └── main.css        # All styles (design tokens, layout, components)
├── scripts/
│   └── main.js         # Mobile nav, scroll reveal, small enhancements
└── assets/
    └── favicon.svg      # Logo mark / favicon
```

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit <http://localhost:8000>.

## Editing content

- **Brand copy** lives in the `#brands` section of `index.html`. Each brand is a
  `.brand-card` — update the name, tag and description, and set a per-brand
  accent colour via the inline `style="--accent:#..."`.
- **Colours & type** are defined as CSS custom properties at the top of
  `styles/main.css` (`:root`).
- **Contact email** is set on the CTA button in the `#contact` section.

> Brand descriptions are currently first-draft placeholders — replace them with
> official copy as each brand's positioning is finalised.
