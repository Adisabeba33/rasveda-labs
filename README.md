# Rasveda Labs — Website

The official website for **Rasveda Labs**, a brand house and venture studio that
owns and operates a portfolio of consumer and technology brands at the
intersection of sensory experience, science and everyday wellbeing.

> **Rasveda** — from *rasa* (essence, flavour) and *veda* (knowledge):
> *the knowledge of essence.*

## Portfolio

The portfolio is presented in two families on the home page.

**Technology & consumer ventures**

| Brand | Category |
|-------|----------|
| **LezzGo2** | Live-map social |
| **SŌMA** | Sensory sommelier |
| **Ingredient.help** | Scan & verdict — food, cosmetics, pet food |
| **PULSE** | Social walkie-talkie — live voice, pager, team map & radio |
| **Daybreak** | Voice & AI planner |
| **Quantara** | Market intelligence |
| **Sianelara** | Institute of Meaning |

**Art & culture**

| Brand | Category |
|-------|----------|
| **Duke&Lume** | Digital art gallery |

Duke&Lume is deliberately not filed with the ventures: it is a body of work, not a
product, and it is judged on the work rather than on shipped features.

## Tech

A dependency-free static site — plain HTML, CSS and JavaScript. No build step,
no framework. It can be opened directly in a browser or served by any static
host (GitHub Pages, Netlify, Cloudflare Pages, etc.).

```
.
├── index.html            # Home: hero, philosophy, portfolio grid, approach, contact
├── brands/<brand>.html   # One case-study page per brand
├── styles/
│   ├── main.css          # Home-page styles (dark saffron theme)
│   └── <brand>.css       # One stylesheet per brand — its own identity
├── scripts/
│   └── main.js           # Mobile nav, scroll reveal, small enhancements
└── assets/               # Logos, marks, favicon, case-study imagery
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

## Deployment (GitHub Pages)

The repo ships with a GitHub Actions workflow (`.github/workflows/pages.yml`)
that deploys the site on every push to `main`.

**One-time setup:** in the repository, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**. After that, each push to
`main` publishes automatically; the live URL appears in the workflow run and
under Settings → Pages.

A `.nojekyll` file is included so Pages serves the files as-is without Jekyll
processing.

## Editing content

- **Brand copy** lives in the `#brands` section of `index.html`. Each brand is a
  `.brand-card` — update the name, tag and description, and set a per-brand
  accent colour via the inline `style="--accent:#..."`.
- **Colours & type** are defined as CSS custom properties at the top of
  `styles/main.css` (`:root`).
- **Categories** are `.brand-group` blocks between the grids. A brand moves family
  by moving its `<article>` into the other `.brand-grid`.
- **Contact email** is set on the CTA button in the `#contact` section.

> **Copy is verified against the product repositories, not written from memory.**
> When a repo and its case-study page disagree, the code wins. Label the real
> stage plainly (concept / prototype / MVP / working product) and never claim a
> feature the code doesn't have. See `HANDOFF.md` for the last verification pass.
