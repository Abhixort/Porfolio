# Abhishek Abhigyanam Portfolio

Personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and the App Router. It presents experience, projects, resume, and contact information in a static, recruiter-friendly format.

## Highlights

- Multi-page portfolio with Home, About, Projects, Resume, and Contact sections
- Content-driven setup powered by `data/portfolio.json`
- SEO metadata, sitemap, robots, Open Graph image, favicon, and app icon
- Resume download and inline PDF viewer
- Responsive layout with shared UI components and Tailwind styling
- Vercel Analytics integration

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Geist fonts
- ESLint

## Project Setup

Run these commands from the folder that contains `package.json`.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

If port `3000` is already in use, Next.js may start on `3001` or `3002` instead. The dev server will print the correct local URL in the terminal.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run type-check
```

## Content Model

Most editable content lives in `data/portfolio.json`.

- `meta`: name, role, links, resume path, SEO image path, availability
- `summary`: main professional summary
- `stats`: hero summary cards
- `focusAreas`: value proposition and specialization sections
- `skills`: categorized skill tags
- `experience`: work history, impact, highlights, technologies
- `projects`: featured work, descriptions, problem statements, impact, links
- `education`: academic background and supporting details
- `certifications`: title and focus summaries

## Assets

Current project assets:

- `public/resume.pdf`: resume used by the Resume page and download buttons
- `public/og-image.png`: Open Graph / social sharing image
- `public/projects/financeguard.png`: project cover image
- `public/projects/library-ms.png`: project cover image
- `app/favicon.ico`: browser favicon
- `app/icon.png`: Next.js app icon

If you want to replace the resume, keep the same filename or update `meta.resumeUrl` in `data/portfolio.json`.

## Environment Variables

No environment variables are required for the current version of the site to run locally.

The file `.env.local.example` is included only as a template for optional future integrations such as:

- custom site URL overrides
- contact form delivery with Resend
- optional analytics extensions

If you do not need those integrations, you can run the portfolio without creating `.env.local`.

## Folder Structure

```text
.
+-- app/
�   +-- about/page.tsx
�   +-- contact/page.tsx
�   +-- projects/page.tsx
�   +-- resume/page.tsx
�   +-- favicon.ico
�   +-- globals.css
�   +-- icon.png
�   +-- layout.tsx
�   +-- not-found.tsx
�   +-- page.tsx
�   +-- robots.ts
�   +-- sitemap.ts
+-- components/
+-- data/
�   +-- portfolio.json
+-- lib/
+-- public/
�   +-- og-image.png
�   +-- resume.pdf
�   +-- projects/
+-- next.config.js
+-- package.json
+-- postcss.config.js
+-- tailwind.config.ts
+-- tsconfig.json
```

## Deployment

This project is ready to deploy on Vercel.

Basic flow:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Deploy as a Next.js project.

## Notes

- `next-env.d.ts` should stay committed.
- `package-lock.json` should stay committed.
- `.env.local` should not be committed.
- `public/` assets are part of the application and should be committed.

## License

MIT
