# BINV design system

## Reference and selection

Selected on 2026-11-21 from the free public getdesign.md directory:
https://getdesign.md/linear.app/design-md

Source analysis: https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/linear.app
The source repository is MIT-licensed; see DESIGN-REFERENCE-LICENSE.txt.
This is an independent BINV adaptation, not Linear's official design system.

Linear was selected over Vercel, Raycast and Spotify for its restrained dark
surfaces, clear text hierarchy and consistent spacing. Do not copy Linear's
branding, proprietary fonts, product illustrations or marketing claims.

## Preserve BINV

- Keep the existing V symbol, Unbounded wordmark and blue horizon.
- Use Pretendard for Korean and interface text.
- Retain Hero, Now, Notes, Music, Idea Bank and About content and order.
- Retain the light Notes reading section as an intentional BINV contrast.
- Keep real music thumbnails and verified video links; album imagery supplies color.
- Preserve JSON-driven content updates and the click-to-load Spotify player.
- Do not add fictitious clients, testimonials, results or professional credentials.

## Implementation

Base styles: site.css and redesign.css. Applied system: linear.css.
Shared palette: canvas #0b0e12, surface #11151b, hover #171c24,
text #f0f1f3, secondary #a3a9b5, border #282c34, accent #547fd5.

Use a 4px spacing rhythm, 24/32px panel padding, 96px desktop section spacing,
64px on mobile and a 1280px maximum container including horizontal padding.
Main copy uses 16px, navigation/actions use 14px and secondary metadata 13px.
Headings use weights 500–600. Corners use 8–12px, with one-pixel borders.
Use flat charcoal surfaces rather than atmospheric glow or drop shadows.

Keep the established editorial layout. Use panels only for current-work grouping
and playable releases, not every paragraph. Avoid decorative dots, generic AI
gradients, gold accents, serif rebranding, excessive cards and arrow-suffixed links.
Provide visible keyboard focus, respect reduced-motion preferences and check
320px, 390px, 768px and desktop widths after visual changes.
