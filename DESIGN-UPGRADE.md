# DESIGN-UPGRADE.md — Homepage UI/UX Overhaul (fix the "pale" look)

The site is structurally done but visually flat: a monochrome cream field where everything is the same value, so nothing pops. This file fixes that — section by section, header to footer. Work through ONE section per session, update the tracker, keep it high-quality. Do NOT flatten everything in one shallow pass.

---

## ⭐ COMPONENT-LEVEL PRIORITY FIXES (from the actual rendered screenshot — DO THESE FIRST)
These issues repeat on EVERY page, so fix them at the shared-component level once and every page inherits the fix. Do this batch before the section-by-section homepage work.

### P1 — Logo (broken)
The logo currently renders as a confusing "OYO"-like squiggle in the header and footer. Fix: use a clean **"MOYO" wordmark** — Inter, weight 800, brand orange `#FF9900` (header on light) / white or orange (footer on dark). If the real `logo.svg` is the squiggle, DON'T use it — use the clean text wordmark until the team supplies a proper logo file. Brand name must read clearly as MOYO.

### P2 — Category card image sizing (the main complaint: "icons bade se card me")
The category PNGs sit inside circles at inconsistent scales — some huge, some tiny, all awkward. Standardize:
- Fixed image container: a `72×72px` (mobile) / `80×80px` (desktop) circle, bg `#FFF7ED` (brand-50), rounded-full.
- Image inside: `object-contain`, with `~14px` internal padding, so EVERY category icon occupies the same visual footprint regardless of its native dimensions. No image touches the circle edge; none looks tiny.
- Same treatment across all 14 cards + the 3 special pages + the Services hub. Uniform, calm, consistent.

### P3 — Card system (all cards look flat/pale — wireframe feel)
Create/upgrade ONE shared card style used everywhere (category cards, difference cards, review cards, blog cards, pillar service blocks):
- Rest: bg white, border `1px #F3F4F6`, radius `16px`, shadow `0 1px 3px rgba(0,0,0,0.04)`, generous internal padding.
- Hover: `-translate-y-1`, border → `#FED7AA`, shadow → `0 12px 30px -10px rgba(255,153,0,0.15)` (warm glow), `transition .3s ease-expo`.
- Category cards: name in `#111827` bold, keyword link in brand orange with an arrow that translates-x on hover.

### P4 — Button system (more presence)
- Primary: **orange gradient** `#FF9900 → #EA580C`, white text, radius 12px, min-h 44px, soft shadow `0 6px 16px -4px rgba(255,153,0,0.4)`, hover slight scale + brighter, `whileTap scale .97`.
- Secondary: white bg, `1.5px` orange border, text `#EA580C`, hover bg `#FFF7ED`.
- Apply to every CTA sitewide (Download App, Book on WhatsApp, Become a Provider, service block CTAs).

### P5 — Icon system (replace placeholder sparkles)
"The MOYO Difference" cards use a generic ✦ sparkle placeholder. Replace with real lucide-react icons in an orange-gradient circle (bg `#FFF7ED`, icon `#EA580C`): ShieldCheck · IndianRupee · Tag · HandCoins · MapPinned · LayoutGrid (per FIX-05). Same for steps, contact methods, footer trust bar. One library, one style.

### P6 — Typography & font-colour contrast
- Headings feel thin/small. Bump: H1 60–72px/800, H2 36–44px/700. Keep one orange keyword per heading.
- Body: ensure secondary text is `#6B7280` (not lighter) and captions `#9CA3AF` — some text currently reads too faint. Never put light-gray text on the cream bg below AA contrast.

### P7 — TrustStrip single-stat fallback
Only "100+ Sectors" shows right now (other stats hidden pending real data) and it looks lonely/broken. Until real stats arrive, render the available stat(s) as an intentional centered feature band (icon + big orange number + label, on a subtle tinted strip) — not one floating stat in dead space. When 3–4 real stats are injected, it becomes the full row with count-up.

### P8 — Footer app badges (broken)
Store badges render as broken images. Re-check the badge asset paths in `/public/badges/`; use the official Apple/Google SVG/PNG badges, linked to the real store URLs (in FIX-02).

Once P1–P8 are done at the component level, every page improves at once. THEN proceed to the section-by-section homepage polish below, and finally apply the same visual language to inner pages.

---

## DESIGN NORTH STAR (why it looks pale → the fix)
1. **Value contrast.** Right now every section is light cream. Introduce contrast: keep warm sections, but add at least ONE dark charcoal (#0A0A0A) section and ONE rich orange-gradient section so the page has rhythm and depth. Pale = everything the same lightness. Fix = vary the value.
2. **More orange, with intent.** Brand #FF9900 barely appears. Use it boldly on: primary CTAs (gradient), stat numbers, highlighted words in headings, icon circles, hover states, and the CTA band. Not everywhere — but far more than now.
3. **Bigger, bolder type.** Headings are thin/small. Bump the scale hard (hero H1 to ~60–72px desktop, weight 800, tight leading). Make headings commanding.
4. **Real card depth.** Cards look like wireframe boxes. Give them soft-but-present shadows, hover lift, warm borders, and imagery. Use the `cardHover` warm-glow shadow token on hover.
5. **Imagery, not emptiness.** Bigger category images, real hero visual, lifestyle feel. Fill dead whitespace with visuals or tighten it.
6. **More motion.** Scroll reveals, count-ups, staggered grids, floating elements, hover micro-interactions, animated gradient on the CTA. Tasteful but present. (Respect prefers-reduced-motion.)
7. **Tighten spacing.** Remove big empty vertical gaps; every section should feel intentional and full.

## GLOBAL CHANGES (apply once, affect whole page)
- **Type scale (Inter):** H1 60–72/1.05/800 · H2 36–44/1.1/700 · H3 22–24/600 · body 16–17/1.6. Highlighted keyword in headings = brand orange.
- **Color usage:** page `#FEFCFA`; alternate with white and `#FDF8F3`; add one `#0A0A0A` dark section (Provider or a stats band) and one orange-gradient band (CTA). Stat numbers, active states, icon circles → orange.
- **Depth system:** cards get `shadow-card` at rest, `shadow-cardHover` + `-translate-y-1` + border `#FED7AA` on hover, `ease-expo`, radius 16px. Buttons radius 12px, primary = orange gradient (`#FF9900`→`#EA580C`) + soft shadow.
- **Section dividers:** use the wavy `SectionDivider` before the footer; elsewhere use bg-value changes, not empty gaps.
- **Motion:** Framer Motion is installed — use `<Reveal>` / `<StaggerGroup>` on every section; add count-up, floating badges, hover states, animated CTA gradient. Keep it GPU-friendly (transform/opacity only).

---

## SECTION-BY-SECTION (header → footer)

### 0. Pre-fix (unblock build)
In `app/become-a-provider/page.tsx` ~line 127, `pillar.title` doesn't exist on the PILLARS type — change to `pillar.name`. Fix any other `.title`/`.name` mismatches so `next build` passes.

### 1. Header
- Real `logo.svg` (not text). Nav links get an animated orange underline on hover + an active-page indicator (orange).
- "Download App" button: orange gradient + soft shadow + subtle hover scale — make it the clear focal action.
- Frosted sticky; shrink height + stronger shadow after ~40px scroll (animate the transition).

### 2. Hero (biggest impact — fix this first after header)
- **Left:** huge bold H1 (~64px, weight 800), keyword phrase in orange. Stronger subhead (muted, 18px). Two CTAs: primary orange-gradient "Download the App" + secondary outline "Book on WhatsApp". Trust chips row with lucide icons.
- **Right:** a real device/app mockup frame with a screenshot (or a clean styled device if no asset), with 2–3 floating trust-badge cards (icon + label: "Verified Expert", "4.9★", "Under 5 min") that gently bob.
- **Background:** warm gradient (cream→white) with LARGER, more-present orange/amber blurred blobs that slowly drift; optional subtle dot/grid pattern for texture. Not a flat cream rectangle.
- **Motion:** staggered fade-up on load (chip→H1→sub→buttons), blobs drift, badges bob.

### 3. Trust Strip
- Make it a distinct band (subtle tint or top/bottom hairline borders).
- Big BOLD ORANGE numbers with count-up-on-scroll. lucide icons in orange (#FFF7ED) circles. Thin separators between the 4 stats.

### 4. Browse by Category (14 cards)
- Bigger cards; make the real category image the hero of each card (prominent, not a tiny circle). Name bold below, keyword link in orange with an arrow that slides right on hover.
- Hover: lift + warm shadow + border `#FED7AA` + slight image scale.
- Staggered reveal on scroll. Equal-height grid, generous gaps.

### 5. The MOYO Difference (6 cards)
- Icon in an orange-gradient circle. Bold title, muted body. Card depth + hover.
- 3×2 grid; stagger-reveal. Add a subtle accent (thin orange top-border or corner) so they're not plain boxes.

### 6. MOYO vs The Alternatives (comparison table)
- Redesign so MOYO visually WINS: highlight the MOYO column (orange-tint bg, orange border, a "Recommended" pill on top). Checks in green/orange, X's in muted red. On mobile, switch to stacked cards. This should feel persuasive, not like a spreadsheet.

### 7. How MOYO Works (5 steps)
- Big faint step numerals behind each card (orange at ~8% opacity). Connect steps with a dotted line/arrow path (desktop). Icons in orange. Steps stagger-reveal in sequence. Center the "Book Your First Service" CTA below as a gradient button.

### 8. Popular in Noida
- Upgrade plain chips into either small image cards (with the category image) or a slow auto-scrolling marquee of services (pause on hover). Add life to this quiet band.

### 9. Reviews ("Trusted by Noida Homeowners")
- Star rating in amber, avatar (colored initial circle), name + sector tag, a subtle quote-mark accent. Card depth. Optional slow carousel/marquee. (Real reviews come from data injection; keep hidden until then per FIX-01.)

### 10. Become a Provider band
- Make it a distinct RICH section — dark charcoal `#0A0A0A` OR orange gradient — with a photo/illustration on one side and a strong CTA. This is a key value-contrast moment on the page. Currently it's a pale afterthought.

### 11. FAQ
- Category filter pills on top. Smooth accordion (animated height + chevron rotate). Comfortable spacing, max-width for readability. Orange active states.

### 12. Final CTA Band
- Rich orange gradient (`#FF9900`→`#EA580C`), big bold white heading, primary white button + secondary outline, trust badges. Add a slow animated gradient shimmer. This is the closing punch — make it bold.

### 13. Footer
- Dark, with real logo (light variant), tidy 4-column layout, social icons with orange hover, real app-store badges, and the trust bar. Generous spacing.

---

## RULES (unchanged, every time)
- Every page stays SSR — motion in isolated `"use client"` wrappers; content stays in server HTML.
- Only brand tokens from 01-BRAND-GUIDELINES.md. Primary #FF9900. No new random colors (the dark #0A0A0A and warm tints are already in the token set).
- One icon library: lucide-react.
- Never invent stats/reviews/prices/NAP — those stay on graceful-hide until the user injects data.
- Respect prefers-reduced-motion.
- Don't break existing SEO, schema, or internal links.

## WORKFLOW
Do the homepage in this order, one section (or a tight pair) per session, updating a "Design Upgrade" checklist in FIXES-BUILD-STATUS.md as you go: Header+Hero → Trust Strip+Categories → Difference+Comparison → Steps+Popular → Reviews+Provider → FAQ+CTA+Footer. After the homepage is polished to this standard, apply the same visual language to the inner pages (pillars, about, contact, blog).
