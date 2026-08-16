# HANDOFF — Project state & notes for the next session

> **Read this first.** This is a self-contained brief so a fresh chat can pick up
> without re-deriving context. It was last updated after the **portfolio-sync
> session (August 2026)**, which re-verified the reachable product repos against
> their case-study pages, rewrote the ones that had drifted, and added a second
> portfolio family for the art house.
>
> **Repo access is per-session and was narrower this time.** Reachable:
> `Ingredients.help`, `Soma`, `name-laboratory`, `Duke-lume`, `rasveda-labs`.
> **Not reachable:** `lezzgo2`, `Daybreak`, `Quantara` — their pages were left
> exactly as the previous verification left them and are marked *unverified this
> session* below. Do not assume they are still accurate; re-read those repos when
> they are in scope.

## What this website is

**Rasveda Labs** — a brand-house / venture-studio site presenting the parent
company and its portfolio of brands. Dependency-free **static site** (plain
HTML/CSS/JS, no build step). Deployed to **GitHub Pages** on every push to
`main`.

The portfolio is split into **two families** on the home page: *Technology &
consumer ventures* (six) and *Art & culture* (one — Duke&Lume). Each family is a
`.brand-group` heading followed by its own `.brand-grid`; a brand changes family
by moving its `<article>` between the grids.

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

## Current status of each brand

### Family 1 — Technology & consumer ventures (6)

| Brand | Page | Verified vs code | Status on page |
|-------|------|------------------|----------------|
| **LezzGo2** | `brands/lezzgo2.html` | ⚠️ **Not verified this session** (repo out of scope). Last pass: Next.js 16 + Supabase; live-map, ephemeral avatars, temp chat rooms, Live Reporters, privacy-by-design all real | "Working MVP on Supabase" |
| **SŌMA** | `brands/soma.html` | ✅ **Re-verified.** Next.js 15 · React 19 · Prisma/Postgres; deterministic taste engine `ENGINE_VERSION = "v9"`, **895** strains in `src/lib/strain-data.ts`. **No OCR**; OpenAI optional and never touches scores. **New since last pass:** a 21+ age gate with a versioned acknowledgement, email verification / password reset via hashed single-use tokens, account deletion, onboarding by *describing* a flower or an experience (with contradictions surfaced), a Learn section of 8 articles, and the Taste Blender's arc-control redesign | "Functional MVP · pre real-menu validation" |
| **Ingredient.help** | `brands/ingredients.html` | ✅ **Re-verified — page rewritten, it had drifted furthest.** See the note below | "Working product · catalog still small" |
| **Daybreak** | `brands/daybreak.html` | ⚠️ **Not verified this session** (repo out of scope). Last pass: React 18 · Vite · PWA; client-side, tested habit core; Claude Haiku voice parsing optional (bring-your-own key) | "MVP in personal testing" |
| **Quantara** | `brands/quantara.html` | ⚠️ **Not verified this session** (repo out of scope). Last pass: full engine on branch `claude/build-quantara-app-lSA0Y`, **not on `main`** — 9 L1 detectors, ~8 L2 composers, matrix runner 5×3×3, null-test, two audits | "Site under development" |
| **Sianelara** (engine codename *Word Laboratory*) | `brands/sianelara.html` · `styles/sianelara.css` | ✅ **Re-verified, page updated.** Repo `name-laboratory`, now **v0.54.0** (was v0.47.0). Pure-TS meaning-first engine, single `analyzeMeaning()` seam, seeded mulberry32 RNG; **284** tests green across 5 files (page previously said 121). 5 Vercel functions unchanged. **New since last pass:** per-language phonotactics *and* per-language grammatical morphology so each of the 12 species has its own accent; on-device lexicon de-duplication by form and by meaning (a first prototype of "proof of meaning"); **optional Supabase sign-in with cloud lexicon sync under RLS** (this was listed as roadmap on the old page — it has shipped); a measured Capacity benchmark instead of an asserted figure | "Engine + LLM passes run end-to-end" |

### Family 2 — Art & culture (1)

| Brand | Page | Verified vs code | Status on page |
|-------|------|------------------|----------------|
| **Duke&Lume** | `brands/dukelume.html` · `styles/dukelume.css` | ✅ **New this session.** Repo `Duke-lume`: Next.js 15 · React 19 · Tailwind **v4** · framer-motion · next-view-transitions. **49 works across 8 collections** (counted from `src/content/`; the repo README still says "thirty works" — the data wins). Every route built; Vitest content tests + Playwright e2e at desktop and 320px. Contact via Resend, degrading honestly without a key. Commerce fields exist in the model but are unset, and the artwork page prints only what is set | "Complete build · pre-launch" |

**Portfolio count is 7.** Duke&Lume is filed separately on purpose — it is an art
project, not a technology venture, and the two are judged by different measures.

**Why ingredients.help was rewritten.** The old page described the product's *first*
identity — "food additives in plain language" with a 30-additive catalog and a
20-rule Laboratory, explicitly "no AI shipped". The repo has moved a long way past
that. It is now **scanner-first**: barcode / photo / brand-name all converging on one
pipeline, three lenses (human food, cosmetics/INCI, pet food), a Claude-written report
whose score is *arithmetic* over five model-rated factors at temperature 0 and which
is validated before display, comparison, a dry-matter shelf for pet food, a diary that
finds cross-product interactions, discovery + confirmation, and a contribution ledger
paying in subscription days. Counted from the repo today: **325** ingredient pages
(317 E-numbered + 8 base foods), **214** interaction rules (engine v1.17.0), **377**
INCI names, **19** allergens, **10** pet hazards, **20** cosmetic concern classes,
**1,115** tests across 94 files. `docs/product-overview.md` in that repo is the best
single source for its copy. Its honest gaps — no billing wired, small verified catalog,
no mobile app, no marketing — are stated on the page and should stay there.

---

## What was done in the last session (portfolio sync, Aug 2026)

1. **Re-read every reachable product repo** — `Ingredients.help`, `Soma`,
   `name-laboratory`, `Duke-lume` — README, `package.json`, source tree, data files,
   tests. Counts in the copy were re-counted from the repositories, not carried over.
2. **Split the portfolio into two families** on the home page (`.brand-group` +
   two `.brand-grid`s), moved the hero stat to `6 technology ventures / 1 art house`,
   and moved the "What's next" card to the end of both grids.
3. **Rewrote `brands/ingredients.html`** for the scanner-first identity. New signature
   visual: the twenty-second ladder (score → verdict → four points → the working) as a
   `.ig-scan` card, plus a counted `.ig-figures` block. The Laboratory risk meter is
   kept but reframed, and its second example is now the tea + wholegrain iron rule
   (verified present, `risk: "low"`) rather than the gum synergy.
4. **Built `brands/dukelume.html` + `styles/dukelume.css`** in the gallery's own
   tokens (paper `#F5F3EF`, surface `#FAF9F6`, bronze `#8B7252`, dark room `#151716`,
   Cormorant Garamond + Inter — the repo comment records that Instrument Serif was
   rejected as too narrow). Signature visual: three real works hung with museum labels.
5. **Updated `brands/soma.html`** (two new feature cards, the age gate, the refreshed
   auth card, a Status section) and **`brands/sianelara.html`** (284 tests, per-language
   accents, lexicon de-duplication, shipped cloud sync, Supabase in the stack).
6. **Verified all five pages** with headless Chromium: no JS errors, no horizontal
   overflow, screenshots reviewed. Fixed a real contrast bug found that way —
   `.dl-prose p` was overriding `.dl-section--dark p` on the dark section.

**Three artwork images** were downscaled from `Duke-lume/public/artworks` to 560px
and saved as `assets/dukelume-*.jpg` (~220 KB total); the gallery's own
`public/brand/wordmark.svg` became `assets/dukelume-mark.svg`.

---

## Conventions for building/editing a case-study page

Each `brands/<brand>.html` is a standalone page that:
- Links its own `../styles/<brand>.css` and Google Fonts for that brand.
- Has a sticky top-bar with a `← Rasveda Labs` back-link to `../index.html#brands`.
- Opens with a hero (logo or inline-SVG mark, eyebrow, H1, lead, `Role / Stack / Status` meta row).
- Follows with product / architecture / features (card grid) / design / stack (chips) / status.
- Includes **one signature visual** (SŌMA's match medallion, LezzGo2's live-map,
  ingredients.help's twenty-second scan card, Duke&Lume's hung wall). Prefer pure
  CSS/SVG; real imagery is fine when the product *is* the imagery, but downscale it
  (Pillow is installable via `pip`; there is no ImageMagick or sharp in the sandbox).
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
plainly (concept / prototype / MVP / working product). Never claim a feature the
code doesn't have (past traps: SŌMA's non-existent "OCR", Quantara's
fully-described-but-absent engine). When a repo and its page disagree, the **code
wins** — or, if code may exist elsewhere, ask the founder before publishing.

Two failure modes, and the second is the one that bites now that the products are
moving fast:

1. **Overclaiming** — the page describes something that isn't built.
2. **Underclaiming** — the page still describes a product the team has outgrown.
   ingredients.help spent this session's rewrite recovering from exactly that: the
   page was honest, tested and a full identity out of date.

Prefer figures you have just counted from the repository over figures inherited from
a previous version of a page or from a repo's own README (Duke&Lume's README says
"thirty works"; the content files hold 49). If a number can't be counted, don't print
a number — "800+ everyday foods" is better than a precise figure you can't defend.

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

- Do **not** put model identifiers in PR titles/bodies/commit messages.

## Nice-to-haves / backlog
- **Re-verify LezzGo2, Daybreak and Quantara** when those repos are in session scope.
  They were not readable during the August 2026 sync and their pages are the oldest
  copy on the site.
- Duke&Lume: the build is finished but not serving publicly. Once `dukelume.com` is
  live, swap the card's "Site under development" note for a live link (same markup as
  the other cards) and update the page's Status section.
- Quantara: merge `claude/build-quantara-app-lSA0Y` to `main` and host it so the
  case-study page's "runs end-to-end" claim maps to a live deployment.
- Custom domain (e.g. `rasveda.com`).
- Per-project "Available for acquisition" one-pagers (founder is exploring selling
  matured MVPs — but the immediate priority is growing users, not selling).
