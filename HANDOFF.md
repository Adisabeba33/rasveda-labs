# HANDOFF — Project state & notes for the next session

> **Read this first.** This is a self-contained brief so a fresh chat can pick up
> without re-deriving context. It was last updated after the session that
> **verified every product repo against its case-study page and made the site
> match the real code**. The five product repos *were* reachable this time and
> were read in full.

## What this website is

**Rasveda Labs** — a brand-house / venture-studio site presenting the parent
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
assets/<brand>-logo.png # One logo per brand (ingredients.help has no raster — inline SVG on its page)
brands/<brand>.html     # One case-study page per brand
styles/<brand>.css      # One stylesheet per brand (its own identity)
```

---

## Current status of each brand (verified against code)

| Brand | In portfolio | Case-study page | Verified vs code | Honest status on page |
|-------|--------------|-----------------|------------------|-----------------------|
| **LezzGo2** | ✅ | `brands/lezzgo2.html` | ✅ Next.js 16 + Supabase; live-map, ephemeral avatars, temp chat rooms, Live Reporters, privacy-by-design all real | "Working MVP on Supabase" |
| **SŌMA** | ✅ | `brands/soma.html` | ✅ Next.js 15 · React 19 · Prisma/Postgres; deterministic taste engine (ENGINE_VERSION v9), **895** strains, real auth. **No OCR**; OpenAI optional & never scores | "Functional MVP · pre real-menu validation" |
| **ingredients.help** | ✅ | `brands/ingredients.html` | ✅ Next.js 14 · React 18 · Supabase (optional); deterministic 20-rule interaction engine, 30 additives, "no data ≠ safe". No AI shipped | "Working MVP" |
| **Daybreak** | ✅ | `brands/daybreak.html` | ✅ React 18 · Vite · PWA; client-side, tested habit core. Claude Haiku voice parsing is **optional (bring-your-own key)** | "MVP in personal testing" |
| **Quantara** | ❌ **pulled** | `brands/quantara.html` (kept, **unlinked**) | ⚠️ Repo is **empty** — only a one-line `README.md` + `.gitignore`, one "Initial commit". The detailed engine on the page is **not in the repo** | — (removed from portfolio) |

**Portfolio count is now 4** (hero stat + "Four distinct labels" copy). If Quantara
gets real code (or the founder confirms it lives in a private/local repo), re-add its
card to the `index.html` brand grid + footer, bump the counts back to 5, and re-link
`brands/quantara.html` — but first correct that page's unverifiable specifics
(e.g. "80+ smoke assertions", exact detector counts) against whatever code actually exists.

---

## What was done in the last session

1. **Read all five product repos** (`Soma`, `Daybreak`, `Quantara`, `lezzgo2`,
   `Ingredients.help`) — README, `package.json`, source tree, tests, migrations.
2. **Built the ingredients.help case study** from scratch (`brands/ingredients.html`
   + `styles/ingredients.css`) in the product's **real** "soft laboratory" identity
   (paper `#F7F5EE`, sage `#5C8E54`, mint `#A8D5BA`, Fraunces + Inter). Signature
   visual: a four-step **risk meter** (Low→Moderate→Elevated→High) with two real
   encoded interactions (benzoate + vitamin C → benzene; guar + xanthan synergy).
   Home card + footer link wired.
3. **Corrected the other pages** where code contradicted copy — see the table above.
4. **Pulled Quantara** from the portfolio (empty repo); page kept but unlinked.
5. Verified every page with a headless-Chromium full-page screenshot.

---

## Conventions for building/editing a case-study page

Each `brands/<brand>.html` is a standalone page that:
- Links its own `../styles/<brand>.css` and Google Fonts for that brand.
- Has a sticky top-bar with a `← Rasveda Labs` back-link to `../index.html#brands`.
- Opens with a hero (logo or inline-SVG mark, eyebrow, H1, lead, `Role / Stack / Status` meta row).
- Follows with product / architecture / features (card grid) / design / stack (chips) / status.
- Includes **one signature visual** in pure CSS/SVG (SŌMA's match medallion, LezzGo2's
  live-map, ingredients.help's risk meter).
- Ends with a CTA + footer and a small inline `reveal` IntersectionObserver script
  (copy from any page). Respect `prefers-reduced-motion`.
- Carries its **own visual identity** — do not reuse the dark saffron home theme.
- **Match the real product's palette + fonts** (read the repo's `tailwind.config`/
  `globals.css`/`layout.tsx`) rather than inventing one.

### Logo-on-page technique
- Logo on a matching background → `mix-blend-mode` (Daybreak cream → `multiply`; LezzGo2 black → `screen`).
- Gradient-on-white logo (Quantara) → white rounded "plaque".
- No raster logo (ingredients.help) → build a clean inline-SVG mark in the brand colors.

---

## Truthfulness rule (important)

The whole point of this site is **honest** portfolio copy. Label real state
plainly (concept / prototype / MVP / in testing). Never claim a feature the code
doesn't have (the two big traps found last time: SŌMA's non-existent "OCR", and
Quantara's fully-described-but-absent engine). When a repo and its page disagree,
the **code wins** — or, if code may exist elsewhere, ask the founder before publishing.

---

## Deploy / git workflow

PRs from earlier sessions are merged. Treat new work as fresh:

```bash
git fetch origin main
git checkout -B claude/<your-branch> origin/main
# ...make changes...
git add -A && git commit -m "..."
git push -u origin claude/<your-branch>
```

Then open a PR to `main` and merge it (Pages auto-deploys on merge). Verify each
page with a headless Chromium screenshot before shipping (the sandbox proxy blocks
Google Fonts — that `ERR_CONNECTION_RESET` console error is expected and harmless;
fonts load fine on the live site).

- Commit trailer: `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`
- Do **not** put model identifiers in PR titles/bodies/commit messages.

## Nice-to-haves / backlog
- Quantara: build (or locate) the real engine, then restore its portfolio card.
- Custom domain (e.g. `rasveda.com`).
- Per-project "Available for acquisition" one-pagers (founder is exploring selling
  matured MVPs — but the immediate priority is growing users, not selling).
