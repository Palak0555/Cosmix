# Trine — Next.js site (split into components)

Same site as before, now broken into one component per section instead of a single file.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

```
app/
  layout.jsx      root layout, imports globals.css, sets page title/description
  page.jsx         composes all the section components in order
  globals.css      every style in the site — colors, type, layout, all sections
components/
  Logo.jsx         the Trine wordmark + icon, used in Nav and Footer
  Nav.jsx          sticky top navigation
  Hero.jsx         headline + subhead + CTAs
  CompareSlider.jsx  the draggable before/after — the only client component,
                     since it needs useState/useRef ("use client" at the top)
  ProblemSolution.jsx  the 3-column problem / need / solution grid
  Pricing.jsx      Launch / Grow / Scale package cards
  Process.jsx      the 4-step "how a project runs" timeline
  Proof.jsx        "currently booking founding clients" panel
  ContactCTA.jsx    closing call-to-action band
  Footer.jsx       bottom nav + copyright
```

## Editing things

- **Colors, fonts, spacing** — all CSS custom properties and rules live in
  `app/globals.css`. Change `--accent`, `--ink`, etc. at the top and it cascades
  everywhere.
- **Copy or pricing** — each component keeps its own content as a small array or
  block of JSX at the top of the file (e.g. `PACKAGES` in `Pricing.jsx`, `STEPS` in
  `Process.jsx`) — edit those directly, no need to touch markup.
- **Before/after images** — `CompareSlider.jsx` currently renders styled mockups.
  Swap the markup inside `.pane.before` / `.pane.after` for real screenshots once
  you have a client site to show.
- **Contact form** — wire the buttons in `ContactCTA.jsx` to a real Calendly link,
  form, or `mailto:`.

Only `CompareSlider.jsx` needs `"use client"` — every other component is a plain
server component, since nothing else uses state or browser APIs.

## Deploying

Stock Next.js app — deploys as-is to Vercel, Netlify, or any Node host.
