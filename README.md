# TableForge — Copy‑paste Tailwind Table Examples

Ready-to-use, accessible table components built with Next.js and Tailwind CSS. Browse examples, preview variations, and copy the JSX in one click.

<!-- Screenshots -->
<p align="center">
  <img src="public/og_image.png" alt="TableForge preview" width="100%" />
</p>

<p align="center">
  <img src="public/screenshots/01.png" alt="Screenshot 1" width="800" />
</p>

<p align="center">
  <img src="public/screenshots/02.png" alt="Screenshot 2" width="800" />
</p>


## Features

- Minimal, production-ready table examples (basic, sorting, filtering)
- Copy-to-clipboard for JSX code blocks
- Responsive and dark‑mode friendly patterns
- Utility-first styling with Tailwind CSS v4
- TypeScript, React 19, and Next.js App Router

## Tech Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Shadcn
- Vercel Deployment

## Getting Started

Prerequisites: Node.js 18+.

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build and run production
npm run build && npm start
```

Open `http://localhost:3000` in your browser.

## How to Use

- Go to the app, navigate the tabs (Basic / Sorting / Filtering).
- Click "Show Code" then "Copy" to copy the JSX.
- Paste into your project. Adjust data and classes as needed.


## Contribution

Contributions are welcome! To add improvements or new table examples:

1. Fork the repo and create a feature branch.
2. Run locally with `npm run dev`.
3. Add your component under `src/components/tables/`.
4. Add an entry to `src/data/tableExamples.tsx` with its metadata and code.
5. Open a PR with a clear description and before/after screenshots.

## License

MIT. See `LICENSE` for details.
