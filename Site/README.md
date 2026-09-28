# Solar Infra Website (React + Vite)

This is a starter website for a Solar Infra company profile with reusable layout components and multi-page routing.

## Included

- Reusable `Header` and `Footer`
- Route-based pages with React Router
- Responsive sections for company overview content
- Starter contact form UI
- Cloudflare Pages SPA fallback via `public/_redirects`

## Pages

- `/` - Home
- `/about` - About
- `/services` - Services
- `/projects` - Projects
- `/contact` - Contact

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Cloudflare Pages

1. Push this project to GitHub.
2. In Cloudflare dashboard, go to Workers & Pages > Create > Pages > Connect to Git.
3. Select repository and branch.
4. Use these settings:
	- Build command: `npm run build`
	- Build output directory: `dist`
	- Root directory: (leave blank if project is repo root)
5. Deploy.

### Notes

- The `public/_redirects` file enables SPA routing so direct visits to routes like `/projects` work in production.
- Replace placeholder text and contact details in page components before launch.
