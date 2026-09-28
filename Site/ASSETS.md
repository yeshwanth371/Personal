# Asset Map

This project keeps static assets organized by purpose so future updates are easy to find.

## `src/assets/logos/`
Company and client logo files used inside React components.

- `company-logo.png` - Header logo
- `acme_logo.png` - Client logo
- `greenko_logo.png` - Client logo
- `heritage_logo.png` - Client logo
- `meil_logo.jpg` - Client logo
- `rays_power_logo.png` - Client logo
- `sembcorp_logo.png` - Client logo

## `src/assets/images/`
Shared images used in page sections and hero/background visuals.

- `hero.png` - Hero background image

## `public/brochure/`
Downloadable brochure files served directly by the web app.

- `company-profile.pdf` - Download Brochure button target

## `public/`
Root-level public assets served from the site root.

- `favicon.png` - Site favicon
- `icons.svg` - Shared icon sprite

## Notes
- Prefer `src/assets/` for images imported into React components.
- Prefer `public/` for files that must be downloaded directly or referenced by a fixed URL.
- Keep new assets grouped by type to avoid mixing brochure, favicon, and UI images in the same folder.
