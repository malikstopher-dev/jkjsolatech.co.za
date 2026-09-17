# MIMO MASTER PROMPT — JKJ SOLARTECH & SECURITY INTERNATIONAL UPGRADE

You are rebuilding/upgrading the existing **JKJ Solartech and Security (Pty) Ltd** website.

This is not a greenfield fantasy brand exercise. You must first inspect the current project and preserve real business information, working links and working functionality. Then upgrade the visual system, information architecture, content and responsive experience to an international corporate standard.

---

## 0. WORKING RULE

Before editing anything:

1. Inspect the entire existing project tree.
2. Read the current homepage, About page, service pages, CSS and JavaScript.
3. Identify the existing contact form/backend.
4. Identify all routes that already exist.
5. Identify any current assets that are actually used.
6. Do not delete working pages or functionality simply because they were not included in the handoff ZIP.
7. Create a brief `docs/jkj-rebuild-preflight.md` recording what you found before changing code.

The uploaded handoff pack includes a current-site audit, content, asset map and responsive images. Read these first:
- `README.md`
- `audit/CURRENT_SITE_AUDIT.md`
- `architecture/SITE_STRUCTURE_AND_LAYOUT.md`
- `architecture/ASSET_MAP.md`
- `architecture/SEO_AND_TECHNICAL_NOTES.md`
- all files under `content/`

---

# 1. BUSINESS CONTEXT

**Company:** JKJ Solartech and Security (Pty) Ltd  
**Website:** https://jkjsolatech.co.za  
**South Africa phone:** 084 017 8527  
**E.164:** +27 84 017 8527  
**Email:** info@jkjsolatech.co.za  
**Registration:** 2026/346956/07  
**Base:** Johannesburg, Gauteng, South Africa

An address appears in one existing service page:
**339 Highlands Road, Kensington, Johannesburg, Gauteng**

Do NOT make that address site-wide or add it to structured data until it is confirmed in the current project/business source.

The company was created by **three friends**. One founding partner is travelling/working on business development in the **Democratic Republic of the Congo** to identify markets, projects, partnerships and commercial opportunities.

Important:
- This does NOT mean JKJ has a permanent DRC office.
- Do NOT claim completed DRC projects unless real evidence exists.
- Do NOT claim DRC employees, a warehouse, local registration or branches unless confirmed.
- Use wording such as **“DRC market development”, “developing partnerships”, “expanding opportunities”, “business-development activity in the DRC”**.

---

# 2. BUSINESS POSITIONING

Reposition JKJ as an integrated African technology and infrastructure solutions company, not merely a local electrical contractor.

Core positioning:

> **Integrated energy, security, connectivity and digital solutions for a connected Africa.**

Primary homepage headline:

> **Powering Your World. Protecting Your Future.**

Supporting idea:
JKJ works across the systems that keep modern properties and businesses powered, secure, connected and visible.

The website must feel credible for:
- homeowners
- SMEs
- property owners
- offices
- retailers
- hospitality businesses
- estates and complexes
- churches / places of worship
- commercial sites
- contractors / project partners
- procurement teams
- DRC opportunity partners

---

# 3. REQUIRED SERVICE ARCHITECTURE

The site must include these service categories.

## Energy
1. Solar & Backup Power
2. Electrical Services

## Security & Access
3. CCTV & Smart Surveillance
4. Access Control & Intercoms
5. Automated Gates & Barriers
6. Smart Systems & Automation

## Connectivity & Digital
7. IT, Networking & Fibre
8. Web Design & Graphic Design

## Trade & Expansion
9. Electronics Import & Export
10. DRC Market Development / Partnerships

Use the supplied content files under:
`content/services/`

Do not silently invent additional high-risk or regulated services.

---

# 4. REQUIRED ROUTES

Upgrade existing routes when they already exist. Create missing routes only where necessary.

Required final route plan:

- `index.html`
- `about.html`
- `services.html`
- `service-solar.html`
- `service-electrical.html`
- `service-cctv.html`
- `service-access.html`
- `service-gates.html`
- `service-it.html`
- `service-web-design.html`
- `service-import-export.html`
- `service-smart.html`
- `drc-expansion.html`
- `projects.html`
- `contact.html`
- `privacy.html`

If the current project uses a different route structure, adapt this plan without breaking URLs unnecessarily.

Add redirects only if the hosting setup supports them.

---

# 5. STACK DECISION

The current uploaded project is a lightweight HTML/CSS/JavaScript site.

Unless the actual local codebase has already moved to a framework, **do not migrate this project to React, Next.js, Vue or another framework just for appearance**.

Prefer:
- semantic HTML
- modular CSS
- lightweight vanilla JavaScript
- modern CSS Grid/Flexbox
- CSS custom properties
- progressive enhancement

The site should be easy for Sol to audit and adjust after you finish.

Do not add a heavy animation library unless a specific effect genuinely needs it.

---

# 6. DESIGN DIRECTION

## Overall mood

Premium, international, technical, modern, confident.

Reference qualities:
- black / charcoal luxury technology brand
- architectural editorial layout
- understated gold accents
- high-quality service imagery
- restrained animations
- generous negative space
- strong typography
- clean business credibility

Avoid:
- cheap “electrician template” look
- excessive neon
- dozens of identical cards
- tiny text
- clutter
- giant icon walls
- baked-in fake statistics
- AI-looking pseudo-dashboard sections
- too many gradients
- overuse of glowing borders
- paragraphs sitting loosely with no hierarchy
- every section looking like the same component

## Colour system

Use:
- `#05070A` near black
- `#0B0F14` charcoal
- `#131820` raised charcoal
- `#F5C300` JKJ gold
- `#D9A800` darker warm gold
- `#F5F5F2` off-white
- `#9CA3AF` muted grey

Gold is an accent, not a background for half the site.

## Typography

Recommended:
- Display/headings: Sora, Space Grotesk or Manrope
- Body/UI: Inter or DM Sans

Large clean headlines.
Readable body text.
Do not use condensed/all-caps fonts for paragraphs.

## Layout

- max content width: 1280–1360px
- desktop gutters: 32–48px
- mobile gutters: 20–24px
- major section spacing: 96–140px desktop
- 48–72px mobile
- use asymmetry and image-led editorial sections
- avoid putting every item inside a boxed card

---


## Iconography

Replace the current emoji-based navigation/service symbols with a consistent set of clean inline SVG icons.
Use one restrained visual family only. Prefer inline SVGs or a tiny curated icon set rather than loading a large icon library.

---

# 7. RESPONSIVE ASSETS

Use the supplied processed assets.

## Homepage
Desktop:
`assets/desktop/home-hero-desktop.webp`

Mobile:
`assets/mobile/home-hero-mobile.webp`

## Services
Solar:
- `assets/desktop/solar-power-desktop.webp`
- `assets/mobile/solar-power-mobile.webp`

Electrical:
- `assets/desktop/electrical-services-desktop.webp`
- `assets/mobile/electrical-services-mobile.webp`

CCTV:
- `assets/desktop/cctv-security-desktop.webp`
- `assets/mobile/cctv-security-mobile.webp`

Access:
- `assets/desktop/access-control-desktop.webp`
- `assets/mobile/access-control-mobile.webp`

Gates:
- `assets/desktop/automated-gates-desktop.webp`
- `assets/mobile/automated-gates-mobile.webp`

IT / fibre:
- `assets/desktop/it-fibre-desktop.webp`
- `assets/mobile/it-fibre-mobile.webp`

Web / graphic design:
- `assets/desktop/web-graphic-design-desktop.webp`
- `assets/mobile/web-graphic-design-mobile.webp`

Import / export:
- `assets/desktop/electronics-import-export-desktop.webp`
- `assets/mobile/electronics-import-export-mobile.webp`

DRC:
- `assets/desktop/drc-expansion-desktop.webp`
- `assets/mobile/drc-expansion-mobile.webp`

Founders:
- `assets/desktop/founders-story-desktop.webp`
- `assets/mobile/founders-story-mobile.webp`

Brand:
- `assets/brand/logo-horizontal-transparent.png`
- `assets/brand/logo-emblem-transparent.png`
- `assets/brand/favicon-512.png`

Use `<picture>` when desktop/mobile art direction differs.

The `assets/concepts/` folder contains posters/mockups with baked-in text. They are visual references, NOT normal responsive backgrounds.

---

# 8. NAVIGATION

Desktop nav:

- Home
- Services
- Solutions / Industries
- Projects
- About
- Africa / DRC
- Contact
- gold CTA: Request a Quote

Services should open a premium mega menu grouped as:

ENERGY
- Solar & Backup Power
- Electrical Services

SECURITY & ACCESS
- CCTV & Smart Surveillance
- Access Control & Intercoms
- Automated Gates & Barriers
- Smart Systems & Automation

CONNECTIVITY & DIGITAL
- IT, Networking & Fibre
- Web Design & Graphic Design

TRADE & EXPANSION
- Electronics Import & Export
- DRC Market Development

Mobile:
- clean side drawer or full-screen menu
- accordion service groups
- 48px+ tap targets
- close via button, Escape, overlay tap
- prevent background scroll
- preserve focus accessibility

---

# 9. HOMEPAGE BUILD

Follow this exact structure.

## Section 1 — slim utility bar

Left:
Johannesburg, Gauteng

Right:
084 017 8527
info@jkjsolatech.co.za
Optional small label: South Africa | DRC opportunities

Keep it elegant and compact.

## Section 2 — sticky navigation

Transparent over hero.
Solid charcoal after scroll.
Logo left.
Navigation right.
Quote CTA.

## Section 3 — hero

Desktop:
80–90vh.

Mobile:
72–82vh.

Use:
`home-hero-*.webp`

Eyebrow:
ENERGY · SECURITY · CONNECTIVITY · DIGITAL

H1:
**Powering Your World. Protecting Your Future.**

Body:
Use `content/pages/HOME.md`.

Primary:
Request a Quote

Secondary:
Explore Services

Do NOT show fake 100+, 50+, 98%, 24/7 or similar metrics.

Use factual credibility cues only.

## Section 4 — factual trust strip

Possible items:
- Registered South African company
- Johannesburg-based
- Integrated multi-service capability
- Nationwide project support subject to scope

## Section 5 — services editorial grid

Do not use 9 equal cards.

Create an editorial bento-like layout with 4 families:
Energy
Security & Access
Connectivity & Digital
Trade & Technology

Each service should have:
- image
- service name
- one short line
- small arrow/link

Use thumbnails from the pack.

On mobile:
one large featured card followed by compact two-column cards where readable.

## Section 6 — integrated solutions

Headline:
**Systems Work Better When They Work Together.**

Show 4–6 combinations from `HOME.md`.

Use a diagrammatic or editorial layout, not a carousel unless there is a clear reason.

## Section 7 — Africa / DRC

Large dark split block.

Use DRC asset.
Copy from:
`content/pages/DRC_EXPANSION.md`

Headline:
**From South Africa to the DRC. Building Opportunity Through Technology.**

CTA:
Discuss a DRC Opportunity

Never call this “our DRC office”.

## Section 8 — sectors

Use clean typographic list, not 10 icon cards.

Residential
Commercial
Retail
Offices
Hospitality
Estates & complexes
Churches / places of worship
Light industrial
Project-based work

## Section 9 — projects

If real portfolio items exist in the actual project, present them with real images/data.

If real items do not exist:
do not fabricate.

Use:
“Project portfolio being prepared. Contact JKJ for relevant references or capability examples.”

## Section 10 — three-friends story

Use founders asset.

Eyebrow:
OUR STORY

Headline:
**Built by Three Friends. Driven by One Bigger Vision.**

Use copy from `content/pages/HOME.md`.

Do not name founders unless names are available in the actual project/source.

## Section 11 — process

Discover
Assess
Design
Quote
Deliver
Support

Use horizontal desktop / vertical mobile.

## Section 12 — final CTA

Headline:
**Have a Project in Mind? Let’s Scope It Properly.**

Buttons:
Request a Quote
WhatsApp JKJ

## Section 13 — footer

Four logical columns:
Company
Services
South Africa
DRC / Partnerships

Include:
registration number
phone
email
privacy
website credit if currently required

---

# 10. SERVICE PAGE DESIGN

All service pages should feel related but not cloned.

Shared structure:
1. cinematic service hero
2. concise intro
3. “What we deliver”
4. typical applications
5. integrated / related solutions
6. small process or “how we approach it”
7. 3–5 relevant FAQs
8. final quote/WhatsApp CTA

Use each service content file.

Do not repeat the phrase “JK Advantage” everywhere.
Do not create six identical benefit cards on every page.

Allow each service page to have one unique visual composition.

---

# 11. ABOUT PAGE

Use:
`content/pages/ABOUT.md`

Structure:
- strong hero
- founders / three-friends story
- why the company combines these capabilities
- principles / values
- South Africa + DRC growth story
- factual company details
- CTA

The page should feel human and credible, not like generic corporate filler.

Do not add founder headshots unless real photos are provided.

---

# 12. DRC PAGE

Use:
`content/pages/DRC_EXPANSION.md`

Purpose:
credibly support the partner who is going into the DRC to seek markets and business.

The page must be useful to potential Congolese partners without overclaiming.

Include:
- what JKJ is exploring
- relevant capabilities
- partnership model
- SA-to-DRC relationship
- RFQ/partnership CTA
- dedicated enquiry type in contact form

Do not include:
- fake Kinshasa address
- fake DRC phone number
- fake DRC clients
- fake DRC projects
- fake importer/distributor licences

Make the architecture translation-ready for French later.
Do not machine-translate the whole site unless specifically asked.

---

# 13. PROJECTS PAGE

Use:
`content/pages/PROJECTS.md`

No fake case studies.

If actual project data exists locally:
build credible case study cards and detail views.

If not:
create a restrained portfolio shell and a CTA for references/capability discussion.

---

# 14. CONTACT / RFQ

Use:
`content/pages/CONTACT.md`

Create a polished RFQ form with:
- name
- company
- phone
- email
- country
- city/project location
- service
- project type
- timeline
- budget range optional
- message
- DRC partnership option

Keep direct phone and WhatsApp actions visible.

If Resend currently exists:
1. inspect implementation
2. preserve or refactor securely
3. API key must remain server-side
4. show loading, success and error states
5. spam protection/honeypot
6. accessible validation

Do not claim the form works unless you actually test it.

---

# 15. SEO

Preserve current canonical strategy.

Each page:
- unique `<title>`
- unique meta description
- canonical
- OG title
- OG description
- OG image
- one H1
- sensible heading hierarchy
- internal links
- useful alt text

Use:
`architecture/SEO_AND_TECHNICAL_NOTES.md`

Structured data:
- Organization
- appropriate LocalBusiness / ProfessionalService
- Service pages

No fake aggregate rating.
No fake review schema.
No address schema until address confirmed.

---

# 16. PERFORMANCE

This must remain fast.

Target:
- no unnecessary framework runtime
- responsive WebP images
- lazy load below the fold
- explicit image dimensions/aspect-ratio
- preload only the homepage hero
- defer non-critical JS
- avoid large autoplay videos
- avoid huge third-party libraries
- avoid loading all service hero images on homepage at full resolution

Use CSS for most motion.

---

# 17. ACCESSIBILITY

Mandatory:
- keyboard accessible nav and menus
- visible focus states
- semantic buttons/links
- proper form labels
- alt text
- sufficient contrast
- no hover-only information
- `aria-expanded` for mobile/mega menus
- `prefers-reduced-motion`
- skip link

---

# 18. CURRENT ANIMATION CLEANUP

The existing site uses a bulb flash transition on HTML navigation.

Do NOT keep a large flash every time the visitor changes pages.

Either:
- remove it completely, or
- reduce it to a tiny logo glow / 150ms microinteraction

No navigation delay should make the site feel slower.

Scroll reveals should be subtle and progressive.

---

# 19. CLAIMS / LEGAL ACCURACY

Critical.

Do not publish unsupported:
- 100+ clients
- 50+ projects
- 98% satisfaction
- 24/7 support
- “10+ years”
- certified/authorised installer status
- registered electrician claims
- specific brand partnerships
- guaranteed savings
- false testimonials
- DRC office/location/staff/projects
- import/export licences that are not proven

The existing code contains some aggressive claims. Treat them as “verify before publish”, not facts.

If uncertain, use neutral wording and record the issue in:
`docs/jkj-content-verification-needed.md`

---

# 20. RESPONSIVE REQUIREMENTS

Manually inspect at minimum:
- 360×800
- 390×844
- 430×932
- 768×1024
- 1024×768
- 1366×768
- 1440×900
- 1920×1080

Check:
- no horizontal scroll
- no clipped headings
- nav fully usable
- hero CTA visible
- text line length readable
- service grids make sense
- DRC section not cramped
- footer readable
- form usable with keyboard/mobile
- images use correct crop

---

# 21. MANUAL FUNCTIONAL VERIFICATION

A build passing is NOT enough.

Manually test:
- every primary nav link
- every service link
- mobile menu
- mega menu
- quote buttons
- WhatsApp buttons
- phone links
- email links
- contact form
- successful form submission if backend credentials/environment permit
- validation errors
- 404 behaviour
- keyboard navigation
- responsive layouts
- reduced-motion preference

Capture screenshots of:
- homepage desktop
- homepage mobile
- services desktop
- one service desktop
- one service mobile
- DRC page desktop
- DRC page mobile
- contact desktop/mobile

Put evidence in:
`docs/jkj-rebuild-verification/`

If screenshots cannot be produced in your environment, say so clearly instead of claiming verification.

---

# 22. FINAL OUTPUT FROM MIMO

When finished, respond with:

## A. Summary
What was rebuilt.

## B. Files changed/created
Exact list.

## C. Routes
Final route list.

## D. Claims removed/flagged
List anything you deliberately did not publish.

## E. Verification
Exact checks performed.

## F. Remaining items for Sol
Only genuine final-polish items, not unfinished core work.

Do not say “complete” if any requested route or major mobile workflow is unfinished.

---

# 23. QUALITY BAR

The final website should visually sit closer to a premium international energy/security/technology company than a generic local-service template.

It should feel:
- expensive but not flashy
- confident but not exaggerated
- technical but easy to understand
- African in ambition without cliché
- credible for a Johannesburg homeowner
- credible for a business/procurement contact
- credible for a potential DRC partner

Build the full experience now. Do not stop at a homepage mockup.
