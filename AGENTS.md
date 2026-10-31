# Project architecture

BEYOND THE BASICS is a single-page student portfolio using TanStack Start, React 19, TypeScript, Vite, and CSS. File routing lives in `src/routes`; the root route supplies metadata, the document shell, shared fixed navigation, and a skip link. The index contains all portfolio sections. The generated route tree must not be edited manually.

## Key directories

- `src/routes/index.tsx`: semantic portfolio sections, hobby/project data, CSS cube component, and native dialog wrapper.
- `src/components/SiteHeader.tsx`: section anchors, IntersectionObserver active states, and an accessible mobile menu.
- `src/components/ContactForm.tsx`: native validation, encoded submissions, pending/error/success states, duplicate prevention, and a 15-second timeout.
- `src/styles.css`: visual tokens, responsive breakpoints, illustrations, and reduced-motion support.
- `src/lib/site.ts`: identity and social sharing metadata.
- `public/contact.html`: static registration for the contact form. Keep field names synchronized with the React form.

## Conventions and decisions

Keep the beginner skill levels realistic and preserve the user's supplied content. Do not invent names, achievements, contact destinations, repository URLs, or live demos. The profile photo is an intentional placeholder. Project previews are CSS illustrations, labeled explicitly. Hobby artwork uses Lucide icons and CSS; no bitmap generation is needed.

Use real anchors for navigation and buttons for actions. Dialogs use the native modal API for focus containment, Escape handling, and focus restoration. Keep browser APIs inside effects and event handlers for SSR safety. Respect reduced-motion preferences and retain visible keyboard focus.

Netlify Forms is enabled by the checked-in feature marker. The form posts to `/contact.html`, a static asset, rather than the SSR route. Only report acceptance after a successful service response; reject unprocessed registration HTML. Never claim notification email delivery. Do not send real test submissions without user authorization.

The content-collections configuration and parsing helpers remain available from the starter for future editorial content, but demo content and extra routes have been removed. The portfolio data is authored directly in the index. No database or authentication is required.

The deployment pipeline performs builds and validation. Do not start development servers or run build/test/typecheck commands during automated implementation runs. Read edited source for verification. For local human development, use pnpm and Node 22.13+ or 24; `netlify dev --port 8889` emulates platform features.
