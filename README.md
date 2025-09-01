Ready-to-use, accessible table components built with Tailwind CSS and Modern UI. Browse examples, preview variations, copy the code in one click and use them in your projects. 100% Open Source and Free to use.

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

- Minimal, production-ready examples — includes basic, sorting, and filtering tables
- One-click copy — grab JSX snippets instantly with copy-to-clipboard
- Responsive & dark-mode ready — tables adapt seamlessly to different themes and screens
- Utility-first styling — built entirely with Tailwind CSS v4
- Zero dependencies — just pure React + Tailwind, nothing extra

## Tech Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- Shadcn Components
- MDX (via @next/mdx)
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

Contributions are welcome! To add improvements or a new table example:

1. Fork the repo and create a feature branch.
2. Run locally with `npm run dev`.
3. Add your React component under `src/components/tables/`.
4. Create an MDX wrapper at `src/examples/tables/YourExample.mdx`:

```mdx
import ExampleCard from "@/components/ExampleCard";
import YourExample from "@/components/tables/YourExample";

export const meta = {
  id: "your-example-id",
  title: "Your Example",
  description: "Short description",
  group: "Basic", // or "Sorting" | "Filtering"
  codePath: "src/components/tables/YourExample.tsx",
};

export default function Example() {
  return (
    <ExampleCard title={meta.title} description={meta.description} codePath={meta.codePath}>
      <YourExample />
    </ExampleCard>
  );

}
```

5. Register it in `src/examples/index.ts` by importing the MDX file and pushing its `meta` + default export into the `examples` array.
6. Open a PR with a clear description and before/after screenshots.

## License

MIT. See `LICENSE` for details.
