# Nav Hover Underline + WCAG Contrast Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add an underline hover state to nav/footer links and bring the contact form (and shared theme tokens) up to WCAG 2.1 AA contrast.

**Architecture:** All contrast fixes flow from three token changes in `app/globals.css` (Tailwind v4 `@theme inline` block); components then get small class-string edits. No markup structure, content, or logic changes anywhere.

**Tech Stack:** Next.js 16.3.2 (App Router), Tailwind CSS v4 (CSS-first `@theme` config — no tailwind.config file), Bun (`bun run build`, `bun run lint`, `bun test`).

**Design doc:** `docs/plans/2026-08-26-a11y-contrast-nav-hover-design.md` — contains the measured contrast ratios behind every value below.

**Notes for the executor:**
- Work directly on the `main` checkout — no worktree (owner's instruction).
- These are styling-only changes. Verification is build + lint + existing tests + a visual browser pass, NOT new unit tests. Do not write tests that assert class strings.
- Per `AGENTS.md`: this Next.js version differs from training data. These tasks touch no Next.js APIs (only class strings and CSS), so no docs reading is required. If a task ever grows beyond that, read the relevant guide in `node_modules/next/dist/docs/` first.
- Running `next dev` re-adds a generated block to `AGENTS.md`. If `AGENTS.md` shows as modified after the browser-verification task, include it in that task's commit — that keeps the tree clean.
- Commit messages in this repo are plain sentence case (e.g. "Build shyft.dev marketing site") — no `feat:`/`fix:` prefixes.

---

### Task 1: Theme tokens

**Files:**
- Modify: `app/globals.css:3-23` (the `@theme inline` block)

**Step 1: Edit the tokens**

In `app/globals.css`, make exactly these three changes:

1. Change `--color-faint`:

```css
/* before */
  --color-faint: #77706a;
/* after */
  --color-faint: #8a8378;
```

2. Change `--color-field`:

```css
/* before */
  --color-field: rgba(242, 237, 230, 0.12);
/* after */
  --color-field: rgba(242, 237, 230, 0.38);
```

3. Add `--color-well` directly below `--color-raised` (it's a solid surface color, so it belongs with the surfaces):

```css
  --color-raised: #14110d;
  --color-well: #1d1a16;
```

Do NOT touch `--color-line`, `--color-row`, or `--color-step` — the design deliberately keeps decorative hairlines faint.

**Step 2: Verify the build**

Run: `bun run build`
Expected: compiles successfully, all pages generate, exit code 0.

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "Lighten faint text and strengthen field borders for WCAG AA"
```

---

### Task 2: Nav hover underline

**Files:**
- Modify: `components/nav.tsx:38-42` (desktop link className only)

**Step 1: Edit the desktop link classes**

In `components/nav.tsx`, the desktop nav (`<nav className="hidden items-center gap-11 md:flex">`) renders links with this className:

```tsx
className={`font-mono text-[13px] tracking-[0.1em] transition-colors ${
  pathname === href
    ? "border-b border-orange pb-0.5 text-orange"
    : "text-sub hover:text-ink"
}`}
```

Replace it with:

```tsx
className={`border-b pb-0.5 font-mono text-[13px] tracking-[0.1em] transition-colors ${
  pathname === href
    ? "border-orange text-orange"
    : "border-transparent text-sub hover:border-ink hover:text-ink focus-visible:border-ink focus-visible:text-ink"
}`}
```

Why this shape: `border-b pb-0.5` is now permanent on every link so the underline appearing on hover doesn't shift layout by 1px; only the border *color* changes per state. `transition-colors` already animates border-color, so the underline fades in with no extra CSS. `focus-visible:` gives keyboard users the same affordance (WCAG 2.4.7).

Do NOT touch the mobile menu block (`{open ? (...)}`) — no hover on touch, and active already reads orange there.

**Step 2: Verify**

Run: `bun run lint && bun run build`
Expected: no lint errors, build succeeds.

**Step 3: Commit**

```bash
git add components/nav.tsx
git commit -m "Underline nav links on hover and keyboard focus"
```

---

### Task 3: Footer link hover underline

**Files:**
- Modify: `components/footer.tsx:36` (the `pages.map` link className)

**Step 1: Edit the footer page links**

In `components/footer.tsx`, the PAGES column links have:

```tsx
className="text-[13px] text-sub transition-colors hover:text-ink md:text-sm"
```

Replace with:

```tsx
className="text-[13px] text-sub underline-offset-4 transition-colors hover:text-ink hover:underline focus-visible:underline md:text-sm"
```

Text-decoration (not border) is correct here — these are proportional-width text links, unlike the nav's bordered mono links. Leave the mailto link and everything else in the footer alone (the `text-faint` items were already fixed by Task 1's token change).

**Step 2: Verify**

Run: `bun run lint && bun run build`
Expected: clean.

**Step 3: Commit**

```bash
git add components/footer.tsx
git commit -m "Underline footer page links on hover"
```

---

### Task 4: Contact form field fill + sent-state mailto link

**Files:**
- Modify: `components/contact-form.tsx:7-8` (fieldClass), `:73` (textarea className), `:24` (sent-state mailto link)

**Step 1: Swap the input fill from coal to well**

The shared `fieldClass` constant:

```tsx
const fieldClass =
  "h-12 w-full border border-field bg-coal px-4 text-[15px] text-ink outline-none placeholder:text-faint focus:border-orange";
```

becomes:

```tsx
const fieldClass =
  "h-12 w-full border border-field bg-well px-4 text-[15px] text-ink outline-none placeholder:text-faint focus:border-orange";
```

The textarea has its own className (it doesn't use `fieldClass`); apply the same single swap there — `bg-coal` → `bg-well`:

```tsx
className="w-full resize-none border border-field bg-well px-4 py-3.5 text-[15px] text-ink outline-none placeholder:text-faint focus:border-orange"
```

**Step 2: Style the sent-state mailto link**

In the `state.status === "sent"` block, the bare link:

```tsx
<a href="mailto:trenton@shyft.dev">trenton@shyft.dev</a>
```

becomes (matches the mailto treatment used in `footer.tsx` and `app/contact/page.tsx`):

```tsx
<a
  href="mailto:trenton@shyft.dev"
  className="font-mono text-orange transition-colors hover:text-orange-soft"
>
  trenton@shyft.dev
</a>
```

This fixes WCAG 1.4.1 — the link was visually indistinguishable from surrounding paragraph text.

Nothing else in the form changes: labels/placeholders were fixed by Task 1, error text and disabled button were already compliant.

**Step 3: Verify**

Run: `bun run lint && bun run build && bun test`
Expected: all clean; the existing `lib/contact.test.ts` tests still pass (they test logic, untouched by this work).

**Step 4: Commit**

```bash
git add components/contact-form.tsx
git commit -m "Make contact form fields visible and style sent-state email link"
```

---

### Task 5: Visual verification pass

**Files:**
- None modified (except possibly `AGENTS.md` — see note below).

**Step 1: Start the dev server**

Run: `bun run dev` (background). Note the port (default 3000).

**Step 2: Check each page in a browser**

Use the browser tools (load via ToolSearch per the session instructions) against `http://localhost:3000`:

1. **Homepage `/`** — hover each nav link: light underline + brightened text appears, no layout shift. Footer links underline on hover.
2. **`/contact`** — the four form fields plus textarea read as visible "wells" (lighter fill, clear border). Labels ("NAME", "WORK EMAIL", …) are readable. Tab through the form: orange focus border is obvious. Tab through the nav: underline appears on focus.
3. **Active state** — on `/contact`, the CONTACT nav link has the orange underline while hovering a *different* link shows the light underline (the two states must be distinguishable).
4. **`/consulting` and `/education`** — spot-check eyebrows, section labels, and footer: slightly lighter gray text, nothing broken.

Take a screenshot of `/contact` for the record.

**Step 3: Stop the dev server and check the tree**

Run: `git status`
If `AGENTS.md` shows as modified (the `next dev` generator re-adds its block), commit it:

```bash
git add AGENTS.md
git commit -m "Recommit AGENTS.md block regenerated by next dev"
```

Expected final state: clean tree, all five tasks committed.
