# Airconco Unit Directory

Internal directory of air-conditioning units for surveyors. Browse, search and filter
indoor units, outdoor units and multi-splits; click any unit for full specs, pricing,
spec-sheet PDF and its corresponding outdoor unit.

Built with [Astro](https://astro.build) as a fully static site — no backend, no database,
free to host on Vercel.

## Updating the unit data

The three CSVs in [`data/`](data/) are the single source of truth:

- `data/indoor.csv` — indoor units (the `Corresponding Outdoor Unit` column links each one to an outdoor model)
- `data/outdoor.csv` — single-split outdoor units
- `data/multi.csv` — multi-split outdoor units

To update: **replace the CSV file(s) with a fresh export (same column headers), commit and push.**
Vercel rebuilds automatically and the site reflects the new data in ~1 minute.

Notes on the data handling:

- Trailing asterisks on model numbers (e.g. `FTXM35A*`) are stripped for display — they
  only exist to disambiguate duplicate rows in the CSV.
- Discount % is deliberately not shown; retail and trade prices are.
- A photo cell containing two URLs glued together (a known issue on some silver-colour
  rows) is treated as missing and shows a placeholder.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Deploying to Vercel (free)

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Astro — accept the defaults and deploy.

Every push to `main` redeploys automatically.
