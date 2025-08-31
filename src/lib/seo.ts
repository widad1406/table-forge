export type SiteConfig = {
  name: string;
  description: string;
  siteUrl: string;
  keywords: string;
  social: {
    twitter: string;
    github: string;
  };
  category: string;
};

export const siteConfig: SiteConfig = {
  name: "TableForge - Beautiful, reusable table components built with Tailwind CSS and modern UI.",
  description:
    "Beautiful, reusable table components built with Tailwind CSS and modern UI. Browse, copy, and customize for your projects. 100% Open Source and Free to use.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  keywords: [
    "tables",
    "data tables",
    "react tables",
    "tailwind table",
    "table components",
    "ui components",
    "shadcn ui",
    "tailwind css",
    "modern ui",
    "html table",
    "nextjs table",
    "grid table",
    "grid snippet",
    "table snippet",
    "modern table",
    "responsive table",
    "modern grid table",
    "web table",
    "web grid",
    "react table components",
    "nextjs",
    "typescript",
    "shadcn table",
    "copy paste components",
    "dashboard table",
    "admin table",
    "sortable table",
    "filterable table",
    "responsive data table",
    "table pagination",
    "table ui kit",
    "table gallery",
    "table templates",
    "data grid",
    "grid components",
    "component library",
    "open source components",
    "frontend ui",
    "sticky header table",
    "row selection",
    "bulk actions",
    "dark mode table",
  ].join(", "),
  social: {
    twitter: "@sainianmol16",
    github: "https://github.com/sainianmol16",
  },
  category: [
    "UI Components",
    "Table Components",
    "Data Tables",
    "React",
    "Next.js",
    "Tailwind CSS",
    "shadcn/ui",
    "Frontend",
    "Developer Tools",
    "Open Source",
    "Admin",
    "Dashboard",
    "Data Grid",
    "Templates",
  ].join(", "),
};

export function absoluteUrl(path: string) {
  const base = siteConfig.siteUrl?.replace(/\/$/, "") || "";
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
}
