# Current Site Audit — What Mimo Must Preserve, Change or Verify

## What already works

The uploaded current site is a lightweight static HTML/CSS/JavaScript build. It already has:
- responsive viewport setup
- desktop and mobile navigation
- service pages
- CTA buttons
- WhatsApp links
- contact details
- SEO titles/descriptions/canonical URLs
- scroll reveals and interaction scripts
- a registered-company message and company registration number

That base is useful. The upgrade does **not** need an unnecessary framework migration.

## Current uploaded pages reviewed

- `index(2).html`
- `about(2).html`
- `service-electrical.html`
- `service-cctv.html`
- `service-gates.html`
- `service-access.html`
- `enhancements(1).css`
- `enhancements(1).js`
- `script(1).js`
- `package(1).json`
- `package-lock(1).json`
- existing image pack and preview file

## Files referenced by the current site but not present in this upload set

The HTML references several files/pages that were not included in the upload used for this pack:
- `styles.css`
- `services.html`
- `service-solar.html`
- `service-smart.html`
- `contact.html`

Mimo must inspect the actual local project before deleting, replacing or recreating these. If they exist locally, upgrade them in place.

## Main design problems to solve

1. The current site reads like a local contractor site. The upgrade needs a stronger corporate/international visual hierarchy.
2. Service information is spread across repeated card layouts. Replace repetitive card grids with more editorial, image-led sections.
3. The site should express one coherent platform: **energy + security + connectivity + digital + trade**, rather than looking like unrelated services.
4. The brand story is currently generic. The new About section should explain that the business was built by three friends with complementary skills and a shared growth vision.
5. DRC expansion needs a dedicated, credible business-development section/page.
6. The current flash-bulb navigation transition is visually heavy. Reduce it to a subtle optional microinteraction or remove it.
7. Current animations must respect `prefers-reduced-motion`.
8. Keep the site fast. Do not replace a lightweight site with a heavy animation stack without a clear need.

## Claims that require verification before publishing

The uploaded pages contain or imply claims that should not be treated as automatically verified:
- “10+ Years Experience”
- “24/7 Emergency”
- “Certified Team”
- “Certified electricians”
- “Response within 2 hours”
- client testimonials
- any 100+ / 50+ / percentage stats shown in later concept mockups

If JKJ can document them, keep them. Otherwise remove or rewrite in neutral capability language.

## Contact/data consistency

Use:
- Phone: 084 017 8527 / `+27840178527`
- Email: info@jkjsolatech.co.za
- Registration: 2026/346956/07
- Website: https://jkjsolatech.co.za

The address `339 Highlands Road, Kensington, Johannesburg, Gauteng` appears on one service page. Confirm it before making it a site-wide structured-data address.

## Technical rules

- Stay with semantic HTML/CSS/JS unless the existing project itself has already migrated.
- Keep Resend only if the current contact-form backend really uses it.
- Never expose a Resend API key in browser JavaScript.
- Keep WhatsApp links in E.164 form: `https://wa.me/27840178527`.
- Use WebP assets from this pack with `loading="lazy"` below the fold.
- Hero image should use `fetchpriority="high"` and be preloaded only on the homepage.
- Add width/height or `aspect-ratio` to prevent layout shift.
