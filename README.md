# Renzo Tincopa — Portfolio

Personal portfolio site with a pixel-art / neubrutalist visual style. Single-page site featuring a hero, projects, about, reviews (infinite auto-scrolling carousel), and a native `<dialog>` contact/quote modal triggered from "Let's build together" buttons.

## Stack

- [Astro](https://astro.build) 7
- Tailwind CSS 4 (`@tailwindcss/vite`) + custom CSS variables
- TypeScript (component scripts)
- Fonts: Bangers, Bebas Neue, Nunito, JetBrains Mono (Fontsource)

## Commands

```sh
npm install        # install dependencies
npm run dev        # dev server at localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview the production build locally
```

For background dev-server management:

```sh
astro dev --background   # start detached
astro dev status         # check status
astro dev logs           # tail logs
astro dev stop           # stop
```

## Structure

```text
src/
├── components/     # Header, Hero, ProjectsHome, About, Reviews,
│                   # ContactModal, Footer, SocialIcon, Icon
├── layouts/        # Layout.astro (delegated [data-contact] modal trigger)
├── pages/          # index.astro
└── styles/         # theme.css (tokens), index.css, responsive.css
public/             # images, flags, pixel-art assets
```
