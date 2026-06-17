# BotLeague — Design Recreation Plan

## Stack note (important)
The uploaded brief asks for a classic React 18 + Vite + Tailwind 3 + framer-motion scaffold with its own `package.json`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`. This project is already a **TanStack Start + React 19 + Tailwind v4** app. Rather than rip out the working scaffold (which would break the preview), I will:

- Keep the existing TanStack Start scaffold, router, and `src/styles.css` (Tailwind v4 CSS-first config).
- Add the design as a single landing route at `/` (`src/routes/index.tsx`), composed from feature components under `src/components/<Section>/`.
- Use `motion` (framer-motion) and `lucide-react` (install both).
- Deliver the same visual result the brief asks for. If you specifically need a standalone Vite + Tailwind v3 zip instead, say so and I'll restructure.

## Visual direction (locked to the reference)
- Background `#070707`, panel `#0f0f0f`/`#141414`, hairline borders `#1f1f1f`.
- Accent red `#FF2D2D` with soft glow (`box-shadow: 0 0 24px rgba(255,45,45,.45)`).
- Secondary cyan accent for leaderboard chips (`#00C2FF`).
- Typography: Space Grotesk for display + Inter for body, loaded via `<link>` in `__root.tsx` head, registered in `@theme` in `src/styles.css`.
- Glass cards: `bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl`.
- All colors/gradients/shadows defined as tokens in `src/styles.css` (`--accent`, `--accent-glow`, `--surface-1/2`, `--gradient-hero`, `--shadow-glow`). No hardcoded hex in components.

## Sections (top → bottom, matching the screenshot exactly)
1. **Navbar** — sticky, transparent → blurred on scroll. Logo "BOTLEAGUE", links: Events (active, red underline), Programs, Community, Rankings. Right side: ghost `LOGIN` + glowing red `REGISTER NOW`. Mobile hamburger drawer.
2. **Hero** — full-width arena image right side, headline "INDIA'S ULTIMATE ROBOTICS ARENA" (display, tight tracking), sub "Build.Compete.Rank.The National Ecosystem for Robotics Arena", red `CREATE ACCOUNT` + outline `EXPLORE EVENTS`. Top-right LIVE pill ("LIVE: Episode 14 · Bengaluru Regionals  WATCH LIVE"). Fade-up on load.
3. **Competitions & Events** — 3-column dark panel: Live Now (bracket card with mini tournament bracket SVG + "Ongoing" red pill), Upcoming (two event cards Mumbai + Delhi each with Date/Location/Category grid + red REGISTER button), Past Results (three stacked result rows).
4. **User Journey — Your Path to the League** — 4 circular icon nodes connected by red horizontal line, labels STEP 1–4 (Build Your Team / Compete Across India / Earn National Ranking & Value / Join the League). Lucide icons (Wrench, Landmark, Users, UserCheck).
5. **What is BotLeague?** — 2×2 numbered list (1–4) on the left (Structured Events, Digital Identity, National Ranking, Career Pathway) with red numerals; decorative gears/icons cluster on the right.
6. **Categories** — 4 equal glass cards (Mini Makers / Junior Innovators / Young Engineers / Robo Minds) each with icon, title, one-line copy, "LEARN MORE →" link. First card gets subtle gold border highlight to match.
7. **Sports — Competition Disciplines** — 6 image tiles in a 4+2 grid (Robo Race, Line Follower, RC Racing, FPV Drone Racing & Aeromodelling, Robo Hockey, Robo War). Hover zoom + rounded corners. Placeholders generated as moody robotics imagery.
8. **Why Register? — The League Advantage** — left: 4 icon+title+desc rows (National Recognition, Fair Judging, Career Ops, High-Energy Eco). Right: dark "LEADERBOARD" card with rank rows (player avatars + scores), top entry highlighted gold with score "508754", soft glow.
9. **Join the Ecosystem** — 3 sign-up cards (Become In Judge / Volunteer / Community Member) each with Name, Location, Enroll inputs + red `SIGN UP` button.
10. **Sponsors** — 2 rows of 3 logos (NIT Delhi, Indian BIT, NIT Silchar, Robo Company, IIT Bombay, Robo Company) on dark.
11. **Footer** — two columns of quick links ("The Arena / Episodes / National Rankings / Programs / Rulebooks" and "Join the Team / Sponsorships / Help Center / Contact Us / Legal") + Social Media row with YouTube, Instagram, Facebook, Twitter icons.

## Animations (framer-motion)
Subtle only: hero fade-up + stagger, section reveal on `whileInView`, card hover lift (`y: -4`, shadow grow), button tap scale, animated counters on Leaderboard scores, pulsing glow on REGISTER NOW.

## Responsive
- ≥1280: layout as screenshot.
- 768–1279: 2-col grids, hero stacks image below text.
- <768: single column, hamburger nav, bracket card scrolls horizontally, sponsors 2-up.

## File plan
```
src/
  styles.css                 # add tokens, fonts, utilities
  routes/
    __root.tsx               # add Google Fonts <link>, update meta
    index.tsx                # compose all sections
  components/
    Navbar/Navbar.tsx
    Hero/Hero.tsx + LivePill.tsx
    Events/EventsSection.tsx + BracketCard.tsx + EventCard.tsx + PastResultRow.tsx
    Journey/JourneySection.tsx + JourneyStep.tsx
    About/WhatIsBotLeague.tsx
    Categories/CategoriesSection.tsx + CategoryCard.tsx
    Disciplines/DisciplinesSection.tsx + DisciplineTile.tsx
    Advantage/AdvantageSection.tsx + Leaderboard.tsx + AdvantageRow.tsx
    Ecosystem/EcosystemSection.tsx + SignupCard.tsx
    Sponsors/SponsorsSection.tsx
    Footer/Footer.tsx
  hooks/
    useScrolled.ts           # navbar bg toggle
    useCountUp.ts            # leaderboard counters
  assets/                    # 6 generated discipline images + arena hero + sponsor marks
```

## Dependencies to install
`bun add motion lucide-react`

## Image assets
Generated with `imagegen` (fast tier, dark cinematic robotics): arena hero, 6 discipline tiles, 6 sponsor mark placeholders (monochrome crests). Saved as `.jpg` under `src/assets/` and imported.

## Acceptance
- Matches screenshot section order, proportions, colors, and copy.
- Builds clean, no placeholder boilerplate left at `/`.
- Responsive at 1920/1440/768/375 with no horizontal scroll.
- All colors via tokens; no hardcoded `text-white`/hex in components.
