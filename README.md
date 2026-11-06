# Argus-v2

Argus rebuilt from scratch, one small pull request at a time: an AI back office that guards a PayPal merchant account.

![CI](https://github.com/praveendataguy/Argus-v2/actions/workflows/ci.yml/badge.svg)

## Project layout

| Folder | What it is |
| --- | --- |
| `server/` | Express API in TypeScript (port 8787) |
| `web/` | React app built with Vite (port 5173) |
| `.github/workflows/ci.yml` | CI: install, typecheck and build on every PR |

## Run it locally

```bash
npm install
npm run dev:server   # terminal 1
npm run dev:web      # terminal 2, then open http://localhost:5173
```

## Checks (the same ones CI runs)

```bash
npm run typecheck
npm run build
```

## How changes land

`master` is never pushed to directly. Every change goes on its own branch, opens a pull request, waits for green CI, and is then reviewed and merged.
