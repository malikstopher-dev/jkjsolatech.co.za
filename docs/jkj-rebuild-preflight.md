# JKJ Solartech & Security — Rebuild Preflight

## Current Project State

### Existing Routes
- `index.html` — Homepage (current: bulb-themed, electrician template style)
- `about.html` — About page
- `contact.html` — Contact/RFQ page (uses Resend API via `/api/contact`)
- `services.html` — Services hub page
- `service-solar.html` — Solar service page
- `service-electrical.html` — Electrical service page
- `service-cctv.html` — CCTV service page
- `service-gates.html` — Automated gates service page
- `service-access.html` — Access control service page
- `service-smart.html` — Smart systems / networking page
- `thank-you.html` — Thank you page

### Missing Routes (required by master prompt)
- `service-it.html` — IT, Networking & Fibre
- `service-web-design.html` — Web Design & Graphic Design
- `service-import-export.html` — Electronics Import & Export
- `drc-expansion.html` — DRC Market Development
- `projects.html` — Projects/Capability proof
- `privacy.html` — Privacy policy

### Tech Stack
- Static HTML/CSS/JavaScript (no framework)
- Google Fonts: Oswald (headings), DM Sans (body)
- Contact form: Resend API via Vercel serverless function (`api/contact.js`)
- `.env.local` contains `RESEND_API_KEY`
- Form submits to `/api/contact` endpoint

### CSS Architecture
- `styles.css` (2760 lines) — Main stylesheet
- `enhancements.css` (274 lines) — Add-on overrides
- Current palette: dark charcoal (#0A0A0A), deep navy (#0D0D1A), gold (#F5C300)
- Current fonts: Oswald (headings), DM Sans (body)

### JavaScript
- `script.js` (228 lines) — Bulb flash animation, mobile menu, scroll reveal, counters, form
- `enhancements.js` (44 lines) — Active nav, staggered reveal
- Bulb flash transition on every page navigation (to be removed/reduced)

### Business Info (verified)
- Company: JKJ Solartech and Security (Pty) Ltd
- Registration: 2026/346956/07
- Phone: 084 017 8527 (+27 84 017 8527)
- Email: info@jkjsolatech.co.za
- Base: Johannesburg, Gauteng
- Address in one service page: 339 Highlands Road, Kensington, Johannesburg

### Issues Found
1. No mega menu — basic dropdown only
2. No DRC page, no projects page, no privacy page
3. Missing 3 service pages (IT, Web Design, Import/Export)
4. Bulb flash animation delays navigation
5. Fake stats/metrics in hero ("Response within 2 hours", "Clean workmanship every time")
6. Oswald font is condensed/all-caps — not recommended for new design
7. No skip link or aria-expanded on menus
8. No structured data (JSON-LD)
9. Testimonials may be fabricated (need verification)
10. "24/7 Emergency" claims on service pages — unsupported
11. "hundreds of Johannesburg clients" claim — unsupported
12. "50-80% reduction in monthly electricity costs" claim — unsupported
13. Inconsistent footer content across pages
14. Some service pages reference "339 Highlands Road" — needs confirmation before site-wide use

### Image Assets
- `logo.png` — Current logo
- `jkjsolatech-image-pack/` — Contains hero, services, about, gallery images
- No responsive WebP desktop/mobile variants in main project yet
