# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Akbar Gym  
**Generated:** 2026-08-21  
**Category:** Premium Boutique Fitness / Local Gym Landing  
**Brand Source:** Official visual identity from public Akbar Gym media (orange + black + white)

---

## Global Rules

### Color Palette (Brand-Aligned Premium Dark)

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Background | `#0A0A0A` | `--color-background` |
| Surface | `#141414` | `--color-surface` |
| Surface Elevated | `#1C1C1C` | `--color-surface-elevated` |
| Border | `#2A2A2A` | `--color-border` |
| Text | `#F5F5F4` | `--color-text` |
| Text Muted | `#A8A29E` | `--color-text-muted` |
| Primary / Brand Orange | `#E86324` | `--color-primary` |
| Primary Hover | `#F97316` | `--color-primary-hover` |
| Warm Neutral | `#E7E5E4` | `--color-warm` |
| CTA | `#E86324` | `--color-cta` |

**Color Notes:** Deep black base + Akbar Gym brand orange (from on-site logo). Single accent only. No neon green. No purple.

### Typography

- **Heading Font:** Barlow Condensed (UI/UX Pro Max Sports/Fitness)
- **Body Font:** Barlow
- **Mood:** athletic, condensed, premium, editorial
- **Google Fonts:** Barlow Condensed + Barlow via `next/font`

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Tight gaps |
| `--space-sm` | `8px` | Icon gaps |
| `--space-md` | `16px` | Standard padding |
| `--space-lg` | `24px` | Section padding |
| `--space-xl` | `32px` | Large gaps |
| `--space-2xl` | `48px` | Section margins |
| `--space-3xl` | `64px` / `5rem+` | Hero / major sections |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.2)` | Subtle |
| `--shadow-md` | `0 8px 24px rgba(0,0,0,0.35)` | Soft elevation |
| `--shadow-lg` | `0 20px 40px rgba(0,0,0,0.45)` | Featured media |

Keep shadows minimal — prefer borders and contrast.

---

## Style Direction

**Primary styles (combined):**
1. **Exaggerated Minimalism** — oversized type, high contrast, intentional whitespace
2. **Editorial Grid / Magazine** — asymmetric compositions, immersive imagery
3. **Dark OLED** — deep black surfaces, high readability

**Not:** Vibrant block gaming UI, glassmorphism overload, neon, generic gym templates

### Page Pattern (Homepage)

Long-form conversion landing:

1. Hero (immersive)
2. Trust strip (verified facts only)
3. About / brand story
4. Facilities (editorial image grid)
5. Training experience
6. Membership
7. Personal training
8. Community (visual, no fake quotes)
9. Gallery
10. Locations
11. Final CTA
12. Footer

**CTA Placement:** Above fold + sticky mobile WhatsApp + final CTA

---

## Component Specs

### Buttons

```css
.btn-primary {
  background: #E86324;
  color: #0A0A0A;
  padding: 14px 28px;
  border-radius: 2px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: background 200ms ease, transform 200ms ease;
  cursor: pointer;
}
.btn-primary:hover { background: #F97316; transform: translateY(-1px); }

.btn-secondary {
  background: transparent;
  color: #F5F5F4;
  border: 1px solid #F5F5F4;
  padding: 14px 28px;
  border-radius: 2px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: border-color 200ms ease, color 200ms ease;
  cursor: pointer;
}
```

### Cards

Prefer editorial media blocks over boxed cards. When interaction requires a card:

```css
.card {
  background: #141414;
  border: 1px solid #2A2A2A;
  border-radius: 4px;
  padding: 28px;
  transition: border-color 200ms ease;
}
.card:hover { border-color: #E86324; }
```

---

## Motion

- Micro-interactions: 150–300ms, ease-out
- Section reveals: subtle fade-up only
- Respect `prefers-reduced-motion`
- No continuous decorative animation
- No bounce / gamified motion

---

## Anti-Patterns (Do NOT Use)

- ❌ Fake stats, fake testimonials, fake awards
- ❌ Unpublished / unverified pricing as current
- ❌ Emojis as icons
- ❌ Excessive glassmorphism / neon glow
- ❌ Purple gradients / SaaS template look
- ❌ Cards everywhere
- ❌ Generic Unsplash gym stock as “Akbar Gym”
- ❌ Missing `cursor:pointer` on clickables
- ❌ Invisible focus states
- ❌ Ignoring reduced motion

---

## Accessibility

- WCAG AA contrast minimum
- Semantic landmarks and heading order
- Keyboard gallery / lightbox
- Visible focus rings (`outline` with brand orange)
- Meaningful alt text for real photos

---

## Pre-Delivery Checklist

- [ ] No emojis as icons (Lucide only)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover transitions 150–300ms
- [ ] Contrast ≥ 4.5:1
- [ ] Focus states visible
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375 / 390 / 430 / 768 / 1024 / 1440
- [ ] No content hidden behind fixed nav / sticky CTA
- [ ] No horizontal scroll on mobile
