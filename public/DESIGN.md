---
name: Industrial Street Elite
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e2bfb0'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#a98a7d'
  outline-variant: '#5a4136'
  surface-tint: '#ffb694'
  primary: '#ffb694'
  on-primary: '#571f00'
  primary-container: '#ff6a00'
  on-primary-container: '#571f00'
  inverse-primary: '#a14000'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#c6c7c2'
  on-tertiary: '#2f312e'
  tertiary-container: '#989995'
  on-tertiary-container: '#2f312e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb694'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7b2f00'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 84px
    fontWeight: '400'
    lineHeight: 84px
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.02em
  subheading-md:
    fontFamily: Archivo Narrow
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0.1em
  body-lg:
    fontFamily: Archivo Narrow
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style

The design system for this premium streetwear brand embodies an **Industrial-Brutalist** aesthetic. It is engineered for a target audience that values urban utility, high-performance materials, and high-fashion exclusivity. The UI evokes a sense of raw power and technical precision, mirroring the grit of London’s urban landscape.

The visual direction utilizes high-contrast transitions, oversized typography, and a "mechanical" layout philosophy. It balances the darkness of the city with the vibrant energy of orange safety accents and the luxury of metallic gold, creating a digital experience that feels as structured and durable as the garments themselves.

## Colors

The palette is rooted in a deep, absolute black canvas to establish a premium, high-contrast atmosphere. 

- **Primary (Safety Orange):** Reserved strictly for actionable elements (CTAs), live status indicators, and critical highlights. It signals urgency and utility.
- **Secondary (Heritage Gold/Cream):** Derived from the brand mark, used for subtle storytelling, premium labels, and decorative dividers to inject "old-world" luxury into the industrial setting.
- **Surface (Neutral Cream/Light Grey):** Specifically used for product cards and modular content blocks. This creates a "lightbox" effect, ensuring the physical apparel—often dark in color—is perfectly visible and separated from the dark UI background.
- **Text:** Headlines use pure white for maximum impact. Secondary metadata uses a mid-range grey to maintain hierarchy.

## Typography

Typography is the structural backbone of this design system. It uses a three-tier font strategy to reinforce the industrial narrative:

1.  **Impact Tier (Anton):** Used for massive, uppercase displays. This font mimics bold warehouse signage and heavy-duty branding.
2.  **Utility Tier (Archivo Narrow):** A condensed sans-serif used for body text and navigation. Its narrow profile allows for efficient data density, crucial for product specs and long descriptions.
3.  **Technical Tier (Space Mono):** Used for labels, SKUs, pricing, and "technical data" feel. This reinforces the "supply company" aesthetic.

**Formatting Rule:** All headlines and subheadings must be set in Uppercase with generous letter-spacing (tracking) to evoke high-end editorial streetwear layouts.

## Layout & Spacing

This design system employs a **Rigid Grid** model inspired by architectural blueprints. 

- **Desktop:** A 12-column grid with wide 64px outer margins to create a "letterboxed" cinematic feel. 
- **Mobile:** A 4-column grid with tight 16px margins to maximize screen real estate for product imagery.
- **Rhythm:** Spacing follows an 8px base unit. However, section breaks should be "uncomfortably" large (128px+) to create a sense of scale and luxury.
- **Visual Breaks:** Use thin 1px borders (using the Heritage Gold color at 20% opacity) instead of empty space to separate content blocks, reinforcing the industrial structure.

## Elevation & Depth

Depth is conveyed through **Hard Layers** rather than soft shadows. 

- **Level 0 (Base):** Absolute Black (#000000).
- **Level 1 (Modules):** High-contrast cream (#F5F5F0) blocks that "pop" forward without shadows.
- **Overlays:** Use a 90% opacity black backdrop blur for navigation menus and modals to maintain focus while keeping the urban texture visible beneath.
- **Outlines:** High-visibility strokes. Active states for inputs or cards should use a 2px solid Safety Orange border rather than a glow or shadow. This maintains the "raw" industrial look.

## Shapes

The shape language is strictly **Sharp (0px)**. 

In keeping with the industrial and brutalist aesthetic, there are no rounded corners in the design system. Every button, image container, and input field features 90-degree angles. This communicates precision, structural integrity, and a non-conformist attitude. Product images should be cropped into strict rectangles or squares to maintain this geometric rigor.

## Components

- **Buttons:** Primary buttons are solid Safety Orange with black Anton text (uppercase). They feature no rounding. Secondary buttons are transparent with a 2px white or gold border.
- **Product Cards:** The background is the neutral cream (#F5F5F0). The image sits flush at the top. The product title (Anton) and price (Space Mono) are placed in a high-density info bar at the bottom.
- **Input Fields:** Bottom-border only (2px white) for a minimalist, "form-fill" look. Label text sits above in Space Mono.
- **Chips/Badges:** Small rectangular blocks with solid black backgrounds and white Space Mono text, used for "Limited Edition" or "New Drop" tags.
- **Lists:** Separated by 1px horizontal lines across the full container width, reminiscent of industrial manifests.
- **Scrollbars:** Custom-styled to be thin, Safety Orange tracks on the black background to serve as a constant brand touchpoint during navigation.