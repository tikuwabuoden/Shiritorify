---
name: Sonic Flow
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#bccbb9'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#869585'
  outline-variant: '#3d4a3d'
  surface-tint: '#53e076'
  primary: '#53e076'
  on-primary: '#003914'
  primary-container: '#1db954'
  on-primary-container: '#004118'
  inverse-primary: '#006e2d'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c8c6c5'
  on-tertiary: '#303030'
  tertiary-container: '#a2a1a0'
  on-tertiary-container: '#383838'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72fe8f'
  primary-fixed-dim: '#53e076'
  on-primary-fixed: '#002108'
  on-primary-fixed-variant: '#005320'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin: 24px
  gutter: 16px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 24px
---

## Brand & Style

This design system is built for a fast-paced, social music game environment. It blends the dark, immersive aesthetic of modern music streaming with a playful, interactive gaming layer. The brand personality is high-energy, contemporary, and rhythmic.

The design style utilizes **Modern Minimalist Glassmorphism**. It relies on deep blacks and charcoal grays to create a "theatrical" backdrop where music art and the primary green accent can pop. Subtle translucency is applied to floating layers (like player controls or game logs) to maintain a sense of depth and spatial awareness without cluttering the interface. The emotional response should be one of "focused play"—reliable enough for utility, yet vibrant enough for entertainment.

## Colors

The palette is optimized for high-contrast accessibility in a dark environment.

- **Primary (Spotify Green):** Used exclusively for high-priority actions, active states, and progress indicators. It serves as the rhythmic heartbeat of the UI.
- **Surface Tiers:**
    - **Base:** #121212 (Deep Black) for the main application background.
    - **Surface:** #181818 for large containers.
    - **Elevated:** #282828 (Charcoal Gray) for cards, hover states, and input fields.
- **Text & Accents:**
    - **Pure White:** Primary headings and critical information.
    - **Gray (#B3B3B3):** Secondary metadata and labels to reduce visual fatigue.

## Typography

The system uses a pairing of **Plus Jakarta Sans** for headlines to mimic the clean, geometric circularity of modern music brands, and **Inter** for UI elements and body text to ensure maximum legibility at small sizes.

- **Headlines:** Should be bold and tightly tracked to create a strong visual "anchor."
- **Game Logs:** Use `body-md` for standard messages and `label-md` for system-generated game events (e.g., "User A played Song B").
- **Song Titles:** Always use `headline-md` or `label-md` with semi-bold weights to differentiate from artist metadata.

## Layout & Spacing

This design system employs a **Fluid Grid** model with a base-8 rhythm. 

- **Desktop:** 12-column grid with 24px gutters. The layout typically features a fixed sidebar for game navigation and a fluid center for the game board/chat.
- **Mobile:** 4-column grid with 16px margins.
- **Game Log Spacing:** Use `stack-sm` (4px) between a user's consecutive messages and `stack-md` (12px) between different users to create clear visual grouping.
- **Safe Areas:** Ensure a 24px safe area around the persistent "Player Controls" bar at the bottom of the screen.

## Elevation & Depth

Hierarchy is defined through **Tonal Layering** and **Glassmorphism**.

1.  **Level 0 (Base):** #121212. No shadow.
2.  **Level 1 (Cards/Inputs):** #181818. Subtle 1px border (#282828) to define edges.
3.  **Level 2 (Overlays/Modals):** Background blur (20px) with #121212 at 70% opacity. This "Glass" effect is used for the music player bar and the active search dropdown.
4.  **Shadows:** Use large, soft ambient shadows (0px 8px 24px rgba(0,0,0,0.5)) only for floating elements that sit above the primary content grid.

## Shapes

The shape language is consistently rounded to feel approachable and modern.

- **Small Components:** Checkboxes and small tags use 4px (`rounded-sm`).
- **Standard UI:** Buttons, input fields, and song cards use 8px (`rounded-md`).
- **Large Containers:** Game logs and modals use 12px-16px (`rounded-lg`).
- **Avatars/Play Buttons:** Always use full circles (`rounded-full`) to denote interactivity and personhood.

## Components

- **Music Cards:** Feature a prominent album art square (8px radius). Title in White, Artist in Gray. On hover, the background shifts to #282828 and a green "Play" icon appears.
- **Search Bar:** A rounded pill shape with a charcoal background. Use a Spotify Green cursor or focus ring to indicate activity. Icons should be centered vertically.
- **Player Controls:** A persistent glassmorphic bar at the bottom. The progress bar uses a 4px height; the "filled" portion is Spotify Green, while the "track" is a dark gray.
- **Game Logs:** Chat bubbles should be edge-to-edge for system messages, while player entries are distinguished by their avatar. Use a distinct green left-border for "Valid Moves" (correct Shiritori links).
- **Buttons:**
    - **Primary:** Spotify Green background, black text, bold weight.
    - **Secondary:** Transparent background, white border (1px), white text.
- **Chips/Tags:** Used for "Genre" or "Last Letter." Small, capsules with #282828 backgrounds and 12px typography.