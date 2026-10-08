# Project rules
- Keep the experimental Three.js hero room in a standalone background component with resource cleanup and reduced-motion support, so background changes never affect hero copy or portfolio playback.
- Keep portfolio project data and playback behavior separate from presentation changes so redesigns preserve video order and modal support.
- Define portfolio colors, typography, and visual effects in the global stylesheet and use semantic tokens in site components so the visual direction remains consistent.
- Use the shared Button component for site actions and navigation controls so focus and interaction states remain consistent.
- Apply scroll reveals to individual content targets, not layout wrappers or dialogs, so staggered motion cannot disturb gallery geometry or playback overlays.
- Build the portfolio as a media-first dark showroom with one mixed-format Selected Cuts mosaic driven by reusable project data, because landscape and short-form work should coexist without duplicating playback content.- Keep the AI project matcher self-contained (src/features/project-matcher + supabase/functions/project-matcher, one line in App.tsx) so it can be removed without touching other sections.
