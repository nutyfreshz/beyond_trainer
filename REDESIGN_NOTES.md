# Beyond The Trainer — Futuristic Biotech Redesign

This pass follows the selected dark cyan "Futuristic Biotech" concept and uses only assets already present in the project.

## Motion system

- Pointer-reactive hero parallax for the athlete, scan rings, and HUD layer
- Rotating multi-depth scan rings and crosshair
- Animated anatomy scan sweep and mesh shimmer over the hero visual
- Floating glass HUD cards with chart drawing, bar growth, gauge rotation, and light sweeps
- Global cyan particle/network canvas with subtle pointer drift
- Animated gradient headline sheen
- CTA light sweep, glow, hover lift, and tactile press state
- Sticky glass navigation with live scroll-progress beam
- Existing IntersectionObserver scroll reveals retained and visually integrated
- Glass cards now lift and glow consistently across lower sections
- Reduced-motion support retained for accessibility

## Main files changed

- `src/components/landing/hero-section.tsx`
- `src/components/landing/navigation.tsx`
- `src/components/landing/flowing-lines-canvas.tsx`
- `src/app/globals.css`
- Minor cyan-shadow alignment in landing cards

## Notes

The original `public/beyond_trainer.png` is reused and recolored at render time with CSS to fit the cyan biotech direction. No new generated images were added.
