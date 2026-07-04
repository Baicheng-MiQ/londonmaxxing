# londonmaxxing

UK energy performance certificate lookup built with Vite, React, and Tailwind CSS.

## Setup

```bash
npm install
cp .bearer-token.example .bearer-token
```

Add your bearer token to `.bearer-token` (one line, no quotes). The dev server proxy reads this file so the token is not exposed in the browser.

Alternatively, set `EPC_BEARER_TOKEN` in a `.env` file.

## Development

```bash
npm run dev
```

Open the app, enter a UK postcode (e.g. `SW19 7LE`), and choose a property from the results.

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Cloudflare Builds (Git integration)

In the Cloudflare dashboard, under **Settings → Builds**:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |

Do **not** use the default `npx wrangler deploy` — that is for Workers. This project is a static Vite app on **Cloudflare Pages**, so the deploy command must be `npm run deploy` (which runs `wrangler pages deploy`).

### Manual deploy

Run `npx wrangler login` once first, then:

```bash
npm run build
npm run deploy
```









