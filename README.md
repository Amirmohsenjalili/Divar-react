# Divar

A Tehran classifieds frontend laid out like [divar.ir](https://divar.ir/s/tehran). Listings come from Divar's public API. This project has no separate backend.

Live demo: [divar-react.amirmohsen-jalili2016.workers.dev](https://divar-react.amirmohsen-jalili2016.workers.dev/)

## Features

- Tehran listing feed with infinite scroll
- Search and category selection
- Place, price, and photo-only filters on loaded posts
- Post page with gallery, description, and a private note
- Light and dark theme

My Divar, chat, and submit-ad are header buttons only. Sign-in and creating a post are not part of this project.

## Stack

- React 18 and Vite
- Redux Toolkit and RTK Query
- React Router
- Tailwind CSS, plus `Button` and `Input`
- nginx to serve the production build in Docker

## Structure

```
src/
  app/            routes and app shell
  pages/          home and post page
  components/
    layout/       header, category menu, sidebar
    post/         card, list, and gallery
    ui/           base components
  services/       Divar requests
  store/          theme and filters
  data/           categories
  styles/         tokens and global styles
```

## Local development

```bash
pnpm install
pnpm start
```

The app opens at [http://localhost:3006](http://localhost:3006). In development, Vite proxies these paths to Divar:

- `POST /api/search` to `https://api.divar.ir/v8/postlist/w/search`
- `GET /api/posts/:token` to `https://api.divar.ir/v8/posts-v2/web/:token`

Scripts:

| Command | What it does |
| --- | --- |
| `pnpm start` | Development server |
| `pnpm build` | Production build in `dist` |
| `pnpm preview` | Preview the production build |

`pnpm preview` does not proxy the API. To see real listings from a production build, use Docker.

## Docker

The image has two stages. Vite builds the app, then nginx serves the files and proxies the API.

```bash
docker compose up --build
```

Open [http://localhost:3006](http://localhost:3006).

Build and run without Compose:

```bash
docker build -t divar .
docker run --rm -p 3006:80 divar
```
