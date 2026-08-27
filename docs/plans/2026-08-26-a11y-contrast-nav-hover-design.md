# Nav hover underline + WCAG contrast fixes

**Date:** 2026-08-26
**Status:** Approved
**Scope:** `app/globals.css`, `components/nav.tsx`, `components/footer.tsx`, `components/contact-form.tsx`

## Problem

1. Navbar links only shift text color on hover; the underline is reserved for the
   active page. Hover should also show an underline.
2. The contact form fails WCAG 2.1 AA:
   - Field labels (`text-faint` #77706a, 11px) measure ~3.9:1 on the card
     background — below the 4.5:1 minimum for small text.
   - Input borders (`--color-field`, white at 12% opacity) measure ~1.3:1
     against the card — far below the 3:1 non-text UI minimum.
   - Input fill (`coal`) vs. the card (`raised`) is ~1.04:1, so fields are
     nearly invisible.
   - Placeholders and the "No newsletter…" microcopy also fail at ~4:1.
3. The failing colors are shared theme tokens used across the site (footer,
   eyebrows, section labels), so the fix is site-wide by design.

## Decisions

- **Scope:** fix the theme tokens site-wide rather than patching only the form.
- **Nav hover:** ink-colored underline + brightened text on hover; the orange
  underline remains exclusive to the active page ("you are here").
- **Fields:** lighter fill *and* stronger border, so inputs read as wells.
- **Target:** WCAG 2.1 AA (4.5:1 text, 3:1 non-text UI).

## Design

### 1. Theme tokens (`globals.css`)

| Token | Before | After | Measured |
|---|---|---|---|
| `--color-faint` | `#77706a` | `#8a8378` | ~5.0:1 on card, ~5.2:1 on page (AA ≥ 4.5:1) |
| `--color-field` | `rgba(242,237,230,0.12)` | `rgba(242,237,230,0.38)` | ~3.4:1 on card (AA ≥ 3:1) |
| `--color-well` (new) | — | `#1d1a16` | input fill, lighter than the card |

`--color-faint` fixes in one move: form labels, placeholders, footer tagline,
copyright, all eyebrow/section labels, and the form microcopy. `--color-field`
is meant for form fields only. Review found one other consumer: the homepage
Education-teaser tier cards used `border-field` for a purely decorative border;
they were switched to `border-line` so those hairlines stay faint.

**Deliberately unchanged:** `--color-line` and `--color-row`. They are
decorative separators, not interactive component boundaries, so the 3:1 rule
does not apply and the layered dark aesthetic keeps its hairlines.

### 2. Navbar and link hover

- Desktop nav links get a permanent `border-b pb-0.5`; the border color carries
  state, avoiding the 1px layout jump of adding a border on hover:
  - Default: `border-transparent text-sub`
  - Hover: `border-ink text-ink`
  - Active: `border-orange text-orange` (unchanged)
- The existing `transition-colors` animates border-color, so the underline
  fades in with no extra CSS.
- The same underline fires on `focus-visible` for keyboard parity (WCAG 2.4.7).
- Mobile menu: untouched (no hover on touch; active already reads orange).
- Footer page links: hover adds `underline underline-offset-4` alongside the
  existing brighten-to-ink. Text-decoration fits these proportional links
  better than the nav's bordered mono style.
- The "Message sent." confirmation contains an unstyled `mailto:` link that is
  indistinguishable from body text (WCAG 1.4.1). It gets the site's established
  mailto treatment: `font-mono text-orange hover:text-orange-soft`.

### 3. Contact form

- `fieldClass` (and the textarea) swap `bg-coal` → `bg-well`; `border-field`
  now renders at 38% opacity via the token.
- Focus stays `focus:border-orange` — orange measures ~7.6:1 against the card.
- Labels keep their size and markup; they inherit the fixed `text-faint`.
  Inputs are already wrapped in `<label>` elements.
- Error text (orange, `role="alert"`) and the disabled submit button (exempt
  from contrast rules) are untouched.

## Verification

1. Contrast pairs recomputed against WCAG 2.1 AA (done, values above).
2. `npm run build` passes.
3. Browser pass on `/contact` and the homepage: fields read as fields, nav
   hover and tab focus show the underline, before/after screenshots.
4. Spot-check `/consulting` and `/education` (token change touches their
   eyebrows and footers).
