# HANDOFF — Task for the next session

> **Read this first.** This file is a self-contained brief so a fresh chat can
> pick up the work without re-deriving context. It was written at the end of a
> previous session where the Rasveda Labs website was built, but the five
> product repos were **not reachable** from that session (the `add_repo`
> approval never came through and GitHub access was scoped to `rasveda-labs`
> only).

## The goal of the next session

Add the six repositories below to the session, then **walk through each of the
five product repos, read the actual code**, and use what you find to write
**accurate, factual descriptions** of each project — what it is, its real
current state (MVP / prototype / in-progress / what actually works vs. stub),
the real stack, and the notable features. Then **update this website** so the
brand copy and case-study pages reflect the code, not just the founder's
written brief.

### Repositories to add (owner: `Adisabeba33`)

| Repo | Brand | Notes |
|------|-------|-------|
| `Adisabeba33/rasveda-labs` | — | **This** website repo (already in scope) |
| `Adisabeba33/Soma` | SŌMA | TypeScript |
| `Adisabeba33/Daybreak` | Daybreak | TypeScript |
| `Adisabeba33/Quantara` | Quantara | TypeScript. GitHub description: "Market behavior intelligence engine for adaptive AI trading analysis." |
| `Adisabeba33/lezzgo2` | LezzGo2 | TypeScript |
| `Adisabeba33/Ingredients.help` | ingredients.help | TypeScript. GitHub description: "Ingredients explained in plain language." |

Add them via the session's repo/source picker (or `add_repo`) before starting.

---

## What this website is

**Rasveda Labs** — a brand-house / venture-studio site. It presents the parent
company and its portfolio of brands. Dependency-free **static site** (plain
HTML/CSS/JS, no build step). Deployed to **GitHub Pages** on every push to
`main`.

- **Live:** https://adisabeba33.github.io/rasveda-labs/
- **Deploy:** `.github/workflows/pages.yml` (runs on push to `main`; `.nojekyll` present)
- Name is written **"Rasveda Labs"** (not "RasVeda").

### File structure

```
index.html              # Home: hero, philosophy, brand portfolio grid, approach, contact
styles/main.css         # Home-page styles (dark saffron theme)
scripts/main.js         # Home-page nav / scroll-reveal
assets/favicon.svg
assets/<brand>-logo.png # One logo per brand
brands/<brand>.html     # One case-study page per brand
styles/<brand>.css      # One stylesheet per brand (its own identity)
```

---

## Current status of each brand (as of this handoff)

| Brand | Home card | Case-study page | Logo asset | Accent | Identity of its page |
|-------|-----------|-----------------|------------|--------|----------------------|
| **Daybreak** | ✅ real copy | ✅ `brands/daybreak.html` | ✅ `daybreak-logo.png` | `#c8763c` | Light "Soft Sunrise OS" — cream, Playfair Display + Cormorant Garamond, terracotta |
| **SŌMA** | ✅ real copy | ✅ `brands/soma.html` | ✅ `soma-logo.png` | `#c8a76a` | Gilded champagne-gold on espresso-dark, Fraunces + Inter |
| **Quantara** | ✅ real copy | ✅ `brands/quantara.html` | ✅ `quantara-logo.png` | `#8b5cf6` | Technical, deep-ink, blue→violet→magenta gradient, Space Grotesk + Inter + JetBrains Mono |
| **LezzGo2** | ✅ real copy | ✅ `brands/lezzgo2.html` | ✅ `lezzgo2-logo.png` | `#22d3ee` | Live night-map, cyan→violet, Sora + Inter, animated pulsing map |
| **ingredients.help** | ⚠️ **placeholder** | ❌ **none yet** | ❌ **none** | `#34d399` | — (needs to be created) |

The four existing case-study pages were written **from the founder's text
brief**, not from the code. The next session should **verify them against the
actual repos and correct anything inaccurate** (state, stack versions, feature
claims, "status" lines).

---

## Concrete task list for the next session

1. **Add all six repos** to the session.
2. For **each of the five product repos**, read: `README`, `package.json`
   (deps, scripts, versions), top-level folder structure, key source dirs,
   tests, and any `docs/`. Determine:
   - What the project actually is (one-paragraph plain description).
   - Real current state: prototype / MVP / functional / which parts are stubs.
   - Real stack + notable libraries + versions.
   - The genuinely implemented features (vs. aspirational ones in the brief).
3. **Correct the four existing case-study pages** (`brands/daybreak.html`,
   `soma.html`, `quantara.html`, `lezzgo2.html`) and their home cards where the
   code contradicts the current copy — especially the **Status** sections and
   stack/version chips.
4. **Build `brands/ingredients.help` → `brands/ingredients.html`** (+ its own
   `styles/ingredients.css`) in the same pattern as the others, in a fitting
   identity (fresh/clean/transparent — the accent `#34d399` green is a good
   starting point). Update the home card (`index.html`, the `<!-- ingredients.help -->`
   article) with a real "View case study" link, and fix the footer link
   (currently `#brands`). If a logo exists in its repo or is provided, add it as
   `assets/ingredients-logo.png`; otherwise design a clean type-based hero.
5. Keep a **truthful tone** — label real state honestly (MVP / in testing /
   prototype). Do not overstate.

### How to build a case-study page (conventions to match)

Each `brands/<brand>.html` is a standalone page that:
- Links its own `../styles/<brand>.css` and Google Fonts for that brand.
- Has a sticky top-bar with a `← Rasveda Labs` back-link to `../index.html#brands`.
- Opens with a hero: the brand **logo** (`../assets/<brand>-logo.png`), a
  mono/eyebrow label, an H1, a lead paragraph, and a `Role / Stack / Status`
  meta row.
- Follows with sections describing the product, its architecture/engine,
  features (card grid), design language, stack (chips), and status.
- Often includes **one signature visual** built in pure CSS/SVG (e.g. SŌMA's
  animated per-sense match medallion, Quantara's 5-layer stack + causal chain,
  LezzGo2's animated pulsing live-map). Build a fitting one for ingredients.help.
- Ends with a CTA + footer, and a small inline `reveal` IntersectionObserver
  script (copy from any existing page). Respect `prefers-reduced-motion`.
- Each brand page carries its **own visual identity** (colors, fonts) — do not
  reuse the dark saffron home theme.

### Logo-on-page technique (learned)
- Logo on a matching background → use `mix-blend-mode`. Daybreak logo (cream bg)
  uses `multiply`; LezzGo2 logo (black bg) uses `screen`.
- Gradient-on-white logo (Quantara) sits in a white rounded "plaque".

---

## Deploy / git workflow (used in the previous session)

The previous session's PRs (#1–#6) are all **merged**. Treat new work as fresh:

```bash
git fetch origin main
git checkout -B claude/rasveda-labs-website-sl30di origin/main   # keep this branch name
# ...make changes...
git add -A && git commit -m "..."
git push -u origin claude/rasveda-labs-website-sl30di
```

Then open a PR to `main` and merge it (Pages auto-deploys on merge). Verify each
page renders with a headless Chromium screenshot before shipping (the sandbox
proxy blocks Google Fonts — that console error is expected and harmless; fonts
load fine on the live site).

- Commit trailers used:
  `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`
- Do **not** put model identifiers in PR titles/bodies/commit messages.

## Nice-to-haves / backlog (optional, if asked)
- Custom domain (e.g. `rasveda.com`).
- An About/Contact expansion.
- Per-project "Available for acquisition" one-pagers (founder is exploring
  selling matured MVPs on Acquire.com / Flippa / Tiny Acquisitions — but the
  immediate priority is growing users, not selling).
