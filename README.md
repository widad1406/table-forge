# TableForge — Copy‑paste Tailwind Table Examples

Ready-to-use, accessible table components built with Next.js and Tailwind CSS. Browse examples, preview variations, and copy the JSX in one click.

> Add your screenshots below. The first image is already using `public/og_image.png`. Replace or add more under `public/screenshots/`.

<!-- Screenshots -->
<p align="center">
  <img src="public/og_image.png" alt="TableForge preview" width="900" />
</p>

<!-- Add more screenshots in a simple grid -->
<p align="center">
  <img src="public/screenshots/01.png" alt="Screenshot 1" width="280" />
  <img src="public/screenshots/02.png" alt="Screenshot 2" width="280" />
  <img src="public/screenshots/03.png" alt="Screenshot 3" width="280" />
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
- Radix UI primitives (Tabs)
- `lucide-react` icons
- Lightweight UI primitives in `src/components/ui/*`

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

There are two easy ways to use the table examples:

1. Copy from the Gallery (recommended)

- Go to the app, navigate the tabs (Basic / Sorting / Filtering).
- Click "Show Code" then "Copy" to copy the JSX.
- Paste into your project. Adjust data and classes as needed.

2. Import components directly

- Each example lives in `src/components/tables/`.
- Import and render in your page/component:

```tsx
import BasicBorderedTable from "@/components/tables/BasicBorderedTable";

export default function Page() {
  return (
    <div className="p-6">
      <BasicBorderedTable />
    </div>
  );
}
```

If you add a new table, add the component under `src/components/tables/` and register it in `src/data/tableExamples.tsx` (set `id`, `title`, `description`, `group`, `preview`, and `code`). It will automatically appear in the gallery.

## Contribution

Contributions are welcome! To add improvements or new table examples:

1. Fork the repo and create a feature branch.
2. Run locally with `npm run dev`.
3. Add your component under `src/components/tables/`.
4. Add an entry to `src/data/tableExamples.tsx` with its metadata and code.
5. Include or update screenshots under `public/screenshots/` and reference them above.
6. Open a PR with a clear description and before/after screenshots.

## License

MIT. See `LICENSE` for details.
