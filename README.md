# BEYOND THE BASICS

A responsive personal portfolio for a first-year Bachelor of Science in Computer Science student. It shares a learning journey, beginner skills, six interests, three projects, personal goals, and a philosophy grounded in the fundamentals.

Built with React 19, TypeScript, TanStack Start, Vite, Tailwind CSS, custom CSS, and Lucide icons. Netlify Forms handles contact submissions. The illustrations and project previews use CSS and icons, so there are no large image downloads. Project previews are illustrative; no source repositories or live demos are implied.

## Run locally

Use Node 22.13+ or Node 24 and pnpm:

```sh
pnpm install
pnpm dev
```

To emulate Netlify features, use `netlify dev --port 8889`. Contact submissions are processed on the deployed Netlify site with form detection enabled. Ordinary local previews do not deliver messages. The activation marker is included in `.netlify/features/netlify-forms`.

## Edit the portfolio

- `src/routes/index.tsx`: page sections, hobbies, projects, and detail dialog.
- `src/styles.css`: colors, typography, illustrations, motion, and responsive layouts.
- `src/components/SiteHeader.tsx`: fixed navigation and mobile menu.
- `src/components/ContactForm.tsx`: form fields and request handling.
- `src/lib/site.ts`: site title and share description.
- `public/contact.html`: static form registration for Netlify.

Replace the marked profile illustration with a personal photo when available. Email, GitHub, and social profiles are visibly marked as coming soon until real destinations are supplied. All portfolio navigation and detail cards work without those optional profiles.
