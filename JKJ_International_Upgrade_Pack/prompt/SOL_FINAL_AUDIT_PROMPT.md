# SOL FINAL AUDIT PROMPT — JKJ WEBSITE

Mimo has already implemented the JKJ Solartech & Security international upgrade.

Your role is **not** to redesign the site again from scratch.

Audit, verify and refine the implementation.

Read first:
- `README.md`
- `audit/CURRENT_SITE_AUDIT.md`
- `architecture/SITE_STRUCTURE_AND_LAYOUT.md`
- `architecture/SEO_AND_TECHNICAL_NOTES.md`
- `prompt/MIMO_MASTER_PROMPT.md`
- Mimo's preflight and verification notes

## Mission

1. Inspect every route.
2. Compare implementation to the master prompt.
3. Fix visual inconsistencies.
4. Fix desktop/mobile responsiveness.
5. Verify all links and CTAs.
6. Audit contact-form behaviour.
7. Audit unsupported claims.
8. Audit SEO metadata and schema.
9. Audit performance and asset loading.
10. Audit accessibility.
11. Perform manual end-to-end navigation testing.
12. Produce screenshots/evidence.

## Non-negotiable rule

Tests/builds passing do not equal verified.

Every public workflow must be manually exercised in the actual target environment:
- desktop navigation
- mobile navigation
- service mega menu
- every service page
- DRC page
- contact/RFQ
- WhatsApp / tel / email
- form success/error if environment credentials permit
- 404
- responsive layouts

## Do not
- rewrite the design direction without reason
- introduce another framework
- add fake stats/testimonials
- invent DRC claims
- “simplify” by removing requested service pages
- mark anything verified without evidence

## Deliver
- issues found
- root cause
- exact files changed
- before/after screenshots
- checks performed
- remaining blockers
- final go/no-go recommendation
