import type { ReactNode } from "react";
import BasicBorderedTable from "@/components/tables/BasicBorderedTable";
import StripedRowsTable from "@/components/tables/StripedRowsTable";
import CompactTable from "@/components/tables/CompactTable";
import ResponsiveCardsOnMobile from "@/components/tables/ResponsiveCardsOnMobile";
import WithActionsTable from "@/components/tables/WithActionsTable";
import BasicDarkTable from "@/components/tables/BasicDarkTable";
import SortableTable from "@/components/tables/SortableTable";
import TopControlsSortableTable from "@/components/tables/TopControlsSortableTable";
import FilterableTable from "@/components/tables/FilterableTable";
import MinimalistUI from "@/components/tables/MinimalistUI";

export type TableSnippet = {
  id: string;
  title: string;
  description?: string;
  preview: ReactNode;
  code: string;
  group: "Basic" | "Sorting" | "Filtering";
};

export const tableExamples: TableSnippet[] = [
  {
    id: "basic-shadcn",
    title: "Minimalist UI",
    description: "Simple table using Minimalist UI styles.",
    preview: <MinimalistUI />,
    group: "Basic",
    code: `export default function MinimalistUI() {
  return (
    <div className=\"rounded-lg border\">\n      <table className=\"w-full caption-bottom text-sm\">\n        <thead className=\"[&_tr]:border-b\">\n          <tr className=\"border-b\">\n            <th className=\"text-muted-foreground h-10 px-4 text-left align-middle font-medium\">Name</th>\n            <th className=\"text-muted-foreground h-10 px-4 text-left align-middle font-medium\">Title</th>\n            <th className=\"text-muted-foreground h-10 px-4 text-left align-middle font-medium\">Email</th>\n            <th className=\"text-muted-foreground h-10 px-4 text-left align-middle font-medium\">Role</th>\n          </tr>\n        </thead>\n        <tbody className=\"[&_tr:last-child]:border-0\">\n          <tr className=\"hover:bg-muted/50 border-b transition-colors\">\n            <td className=\"p-4 align-middle\">Lindsay Walton</td>\n            <td className=\"p-4 align-middle\">Front-end Developer</td>\n            <td className=\"p-4 align-middle\">lindsay.walton@example.com</td>\n            <td className=\"p-4 align-middle\">Member</td>\n          </tr>\n          <tr className=\"hover:bg-muted/50 border-b transition-colors\">\n            <td className=\"p-4 align-middle\">Courtney Henry</td>\n            <td className=\"p-4 align-middle\">Designer</td>\n            <td className=\"p-4 align-middle\">courtney.henry@example.com</td>\n            <td className=\"p-4 align-middle\">Admin</td>\n          </tr>\n          <tr className=\"hover:bg-muted/50 border-b transition-colors\">\n            <td className=\"p-4 align-middle\">Tom Cook</td>\n            <td className=\"p-4 align-middle\">Director of Product</td>\n            <td className=\"p-4 align-middle\">tom.cook@example.com</td>\n            <td className=\"p-4 align-middle\">Owner</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>
  );
}
`.trim(),
  },
  {
    id: "basic-bordered",
    title: "Basic Bordered",
    description: "Simple table with borders and striped header.",
    preview: <BasicBorderedTable />,
    group: "Basic",
    code: `
export default function BasicBorderedTable() {
  return (
    <table className="min-w-full border border-gray-200 text-left text-sm text-gray-700">
      <thead className="bg-gray-50 text-gray-600">
        <tr>
          <th className="px-4 py-2 font-medium">Name</th>
          <th className="px-4 py-2 font-medium">Title</th>
          <th className="px-4 py-2 font-medium">Email</th>
          <th className="px-4 py-2 font-medium">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="px-4 py-2">Lindsay Walton</td>
          <td className="px-4 py-2">Front-end Developer</td>
          <td className="px-4 py-2">lindsay.walton@example.com</td>
          <td className="px-4 py-2">Member</td>
        </tr>
        <tr className="border-t bg-gray-50/50">
          <td className="px-4 py-2">Courtney Henry</td>
          <td className="px-4 py-2">Designer</td>
          <td className="px-4 py-2">courtney.henry@example.com</td>
          <td className="px-4 py-2">Admin</td>
        </tr>
        <tr className="border-t">
          <td className="px-4 py-2">Tom Cook</td>
          <td className="px-4 py-2">Director of Product</td>
          <td className="px-4 py-2">tom.cook@example.com</td>
          <td className="px-4 py-2">Owner</td>
        </tr>
      </tbody>
    </table>
  );
}
    `.trim(),
  },

  {
    id: "sortable-basic",
    title: "Sortable Columns",
    description: "Click headers to sort ascending/descending.",
    preview: <SortableTable />,
    group: "Sorting",
    code: `
"use client";

import { useMemo, useState } from "react";

type Person = {
  name: string;
  title: string;
  email: string;
  role: string;
};

type SortKey = keyof Person;
type SortDirection = "asc" | "desc";

const initialData: Person[] = [
  { name: "Lindsay Walton", title: "Front-end Developer", email: "lindsay.walton@example.com", role: "Member" },
  { name: "Courtney Henry", title: "Designer", email: "courtney.henry@example.com", role: "Admin" },
  { name: "Tom Cook", title: "Director of Product", email: "tom.cook@example.com", role: "Owner" },
  { name: "Jacob Jones", title: "Engineering Manager", email: "jacob.jones@example.com", role: "Member" },
];

export default function SortableTable() {
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  function onHeaderClick(key: SortKey) {
    if (key === sortKey) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  }

  const sorted = useMemo(() => {
    const data = [...initialData];
    data.sort((a, b) => {
      const aVal = String(a[sortKey]).toLowerCase();
      const bVal = String(b[sortKey]).toLowerCase();
      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    return data;
  }, [sortKey, sortDirection]);

  function renderSortIcon(key: SortKey) {
    if (key !== sortKey) return (
      <span aria-hidden className="ml-1 select-none text-gray-400">↕</span>
    );
    return (
      <span aria-hidden className="ml-1 select-none text-gray-600">{sortDirection === "asc" ? "▲" : "▼"}</span>
    );
  }

  return (
    <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
      <thead className="bg-gray-50 text-gray-700">
        <tr>
          <th className="px-4 py-2 font-semibold">
            <button
              type="button"
              onClick={() => onHeaderClick("name")}
              className="inline-flex items-center hover:underline"
              aria-sort={sortKey === "name" ? (sortDirection === "asc" ? "ascending" : "descending") : "none"}
            >
              Name {renderSortIcon("name")}
            </button>
          </th>
          <th className="px-4 py-2 font-semibold">
            <button
              type="button"
              onClick={() => onHeaderClick("title")}
              className="inline-flex items-center hover:underline"
              aria-sort={sortKey === "title" ? (sortDirection === "asc" ? "ascending" : "descending") : "none"}
            >
              Title {renderSortIcon("title")}
            </button>
          </th>
          <th className="px-4 py-2 font-semibold">
            <button
              type="button"
              onClick={() => onHeaderClick("email")}
              className="inline-flex items-center hover:underline"
              aria-sort={sortKey === "email" ? (sortDirection === "asc" ? "ascending" : "descending") : "none"}
            >
              Email {renderSortIcon("email")}
            </button>
          </th>
          <th className="px-4 py-2 font-semibold">
            <button
              type="button"
              onClick={() => onHeaderClick("role")}
              className="inline-flex items-center hover:underline"
              aria-sort={sortKey === "role" ? (sortDirection === "asc" ? "ascending" : "descending") : "none"}
            >
              Role {renderSortIcon("role")}
            </button>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {sorted.map((p) => (
          <tr key={p.email}>
            <td className="px-4 py-2">{p.name}</td>
            <td className="px-4 py-2">{p.title}</td>
            <td className="px-4 py-2">{p.email}</td>
            <td className="px-4 py-2">{p.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
    `.trim(),
  },
  {
    id: "sorting-top-controls",
    title: "Sorting Controls on Top",
    description: "Buttons above the table to choose column and direction.",
    preview: <TopControlsSortableTable />,
    group: "Sorting",
    code: `
"use client";

import { useMemo, useState } from "react";

type Person = {
  name: string;
  title: string;
  email: string;
  role: string;
};

type SortKey = keyof Person;
type SortDirection = "asc" | "desc";

const initialData: Person[] = [
  { name: "Lindsay Walton", title: "Front-end Developer", email: "lindsay.walton@example.com", role: "Member" },
  { name: "Courtney Henry", title: "Designer", email: "courtney.henry@example.com", role: "Admin" },
  { name: "Tom Cook", title: "Director of Product", email: "tom.cook@example.com", role: "Owner" },
  { name: "Jacob Jones", title: "Engineering Manager", email: "jacob.jones@example.com", role: "Member" },
];

export default function TopControlsSortableTable() {
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const sorted = useMemo(() => {
    const data = [...initialData];
    data.sort((a, b) => {
      const aVal = String(a[sortKey]).toLowerCase();
      const bVal = String(b[sortKey]).toLowerCase();
      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    return data;
  }, [sortKey, sortDirection]);

  function HeaderButton({ label, keyName }: { label: string; keyName: SortKey }) {
    const isActive = sortKey === keyName;
    return (
      <button
        type="button"
        onClick={() => setSortKey(keyName)}
        className={
          "rounded-md border px-2 py-1 text-xs transition-colors " +
          (isActive
            ? "border-gray-300 bg-gray-100 text-gray-900"
            : "border-transparent bg-white text-gray-700 hover:bg-gray-50")
        }
        aria-pressed={isActive}
      >
        {label}
      </button>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-gray-600">Sort by:</span>
        <HeaderButton label="Name" keyName="name" />
        <HeaderButton label="Title" keyName="title" />
        <HeaderButton label="Email" keyName="email" />
        <HeaderButton label="Role" keyName="role" />
        <div className="ml-2 h-4 w-px bg-gray-200" />
        <button
          type="button"
          onClick={() => setSortDirection((d) => (d === "asc" ? "desc" : "asc"))}
          className="rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-800 hover:bg-gray-50"
        >
          {sortDirection === "asc" ? "Ascending ▲" : "Descending ▼"}
        </button>
      </div>

      <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="px-4 py-2 font-semibold">Name</th>
            <th className="px-4 py-2 font-semibold">Title</th>
            <th className="px-4 py-2 font-semibold">Email</th>
            <th className="px-4 py-2 font-semibold">Role</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sorted.map((p) => (
            <tr key={p.email}>
              <td className="px-4 py-2">{p.name}</td>
              <td className="px-4 py-2">{p.title}</td>
              <td className="px-4 py-2">{p.email}</td>
              <td className="px-4 py-2">{p.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
    `.trim(),
  },
  {
    id: "basic-dark",
    title: "Basic Dark-ready",
    description: "Works in light and dark (no JS).",
    preview: (
      <div className="dark rounded-md bg-background p-3 text-foreground">
        <BasicDarkTable />
      </div>
    ),
    group: "Basic",
    code: `
export default function BasicDarkTable() {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800">
      <table className="min-w-full text-left text-sm text-gray-800 dark:text-gray-200">
        <thead className="bg-gray-100 text-gray-700 dark:bg-neutral-900 dark:text-gray-300">
          <tr>
            <th className="px-4 py-2 font-semibold">Product</th>
            <th className="px-4 py-2 font-semibold">Price</th>
            <th className="px-4 py-2 font-semibold">Stock</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          <tr className="bg-white dark:bg-neutral-950/40">
            <td className="px-4 py-2">Headphones</td>
            <td className="px-4 py-2">$89.00</td>
            <td className="px-4 py-2">In Stock</td>
          </tr>
          <tr className="bg-white dark:bg-neutral-950/60">
            <td className="px-4 py-2">Keyboard</td>
            <td className="px-4 py-2">$129.00</td>
            <td className="px-4 py-2">Low</td>
          </tr>
          <tr className="bg-white dark:bg-neutral-950/40">
            <td className="px-4 py-2">Mouse</td>
            <td className="px-4 py-2">$49.00</td>
            <td className="px-4 py-2">Out</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
    `.trim(),
  },
  {
    id: "striped-rows",
    title: "Striped Rows",
    description: "Alternating row colors for readability.",
    preview: <StripedRowsTable />,
    group: "Basic",
    code: `
export default function StripedRowsTable() {
  return (
    <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 font-semibold text-gray-600">Project</th>
          <th className="px-4 py-2 font-semibold text-gray-600">Status</th>
          <th className="px-4 py-2 font-semibold text-gray-600">Owner</th>
          <th className="px-4 py-2 font-semibold text-gray-600">Due</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr className="odd:bg-white even:bg-gray-50">
          <td className="px-4 py-2">Homepage Redesign</td>
          <td className="px-4 py-2"><span className="inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Complete</span></td>
          <td className="px-4 py-2">Alex</td>
          <td className="px-4 py-2">May 10</td>
        </tr>
        <tr className="odd:bg-white even:bg-gray-50">
          <td className="px-4 py-2">Mobile App</td>
          <td className="px-4 py-2"><span className="inline-flex rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">In Progress</span></td>
          <td className="px-4 py-2">Sam</td>
          <td className="px-4 py-2">Jun 01</td>
        </tr>
        <tr className="odd:bg-white even:bg-gray-50">
          <td className="px-4 py-2">Marketing Campaign</td>
          <td className="px-4 py-2"><span className="inline-flex rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">Queued</span></td>
          <td className="px-4 py-2">Riley</td>
          <td className="px-4 py-2">Jul 15</td>
        </tr>
      </tbody>
    </table>
  );
}
    `.trim(),
  },
  {
    id: "compact",
    title: "Compact",
    description: "Dense spacing for data-heavy tables.",
    preview: <CompactTable />,
    group: "Basic",
    code: `
export default function CompactTable() {
  return (
    <table className="min-w-full border-separate border-spacing-0 text-left text-xs">
      <thead>
        <tr>
          <th className="sticky top-0 bg-white px-3 py-2 font-semibold text-gray-700">ID</th>
          <th className="sticky top-0 bg-white px-3 py-2 font-semibold text-gray-700">Metric</th>
          <th className="sticky top-0 bg-white px-3 py-2 font-semibold text-gray-700">Value</th>
          <th className="sticky top-0 bg-white px-3 py-2 font-semibold text-gray-700">Delta</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-1.5">A-01</td>
          <td className="px-3 py-1.5">Visitors</td>
          <td className="px-3 py-1.5">12,450</td>
          <td className="px-3 py-1.5 text-green-600">+8%</td>
        </tr>
        <tr className="bg-gray-50">
          <td className="px-3 py-1.5">A-02</td>
          <td className="px-3 py-1.5">Signups</td>
          <td className="px-3 py-1.5">1,248</td>
          <td className="px-3 py-1.5 text-red-600">-2%</td>
        </tr>
        <tr>
          <td className="px-3 py-1.5">A-03</td>
          <td className="px-3 py-1.5">Revenue</td>
          <td className="px-3 py-1.5">$32,890</td>
          <td className="px-3 py-1.5 text-green-600">+5%</td>
        </tr>
      </tbody>
    </table>
  );
}
    `.trim(),
  },
  {
    id: "cards-on-mobile",
    title: "Responsive (Cards on Mobile)",
    description:
      "Stacks into cards on small screens using utility classes only.",
    preview: <ResponsiveCardsOnMobile />,
    group: "Basic",
    code: `export default function ResponsiveCardsOnMobile() {
  return (
    <div className="flow-root">
      <div className="py-2">
        <div className="inline-block min-w-full align-middle px-4">
          <table className="hidden min-w-full divide-y divide-gray-200 text-left text-sm sm:table">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 font-semibold text-gray-600">Name</th>
                <th className="px-4 py-2 font-semibold text-gray-600">
                  Amount
                </th>
                <th className="px-4 py-2 font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2">Payment from Olivia Rhye</td>
                <td className="px-4 py-2">$20.00</td>
                <td className="px-4 py-2">Jan 22, 2024</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Payment from Lana Steiner</td>
                <td className="px-4 py-2">$5.00</td>
                <td className="px-4 py-2">Jan 15, 2024</td>
              </tr>
            </tbody>
          </table>
          <ul role="list" className="grid grid-cols-1 gap-3 sm:hidden">
            <li className="rounded-lg border border-gray-200 p-3 break-words">
              <div className="text-sm font-medium text-gray-900">
                Payment from Olivia Rhye
              </div>
              <div className="mt-1 text-sm text-gray-700">$20.00</div>
              <div className="mt-1 text-xs text-gray-500">Jan 22, 2024</div>
            </li>
            <li className="rounded-lg border border-gray-200 p-3 break-words">
              <div className="text-sm font-medium text-gray-900">
                Payment from Lana Steiner
              </div>
              <div className="mt-1 text-sm text-gray-700">$5.00</div>
              <div className="mt-1 text-xs text-gray-500">Jan 15, 2024</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
`.trim(),
  },
  {
    id: "with-actions",
    title: "With Row Actions",
    description: "Action buttons in a trailing column.",
    preview: <WithActionsTable />,
    group: "Basic",
    code: `export default function WithActionsTable() {
  return (
    <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 font-semibold text-gray-600">User</th>
          <th className="px-4 py-2 font-semibold text-gray-600">Role</th>
          <th className="px-4 py-2 font-semibold text-gray-600">Status</th>
          <th className="px-4 py-2" />
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="px-4 py-2">Ava Williams</td>
          <td className="px-4 py-2">Editor</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
              Active
            </span>
          </td>
          <td className="px-4 py-2 text-right">
            <button className="rounded-md border px-2 py-1 text-xs hover:bg-gray-100">
              Edit
            </button>
            <button className="ml-2 rounded-md border px-2 py-1 text-xs hover:bg-gray-100 ">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2">Noah Patel</td>
          <td className="px-4 py-2">Viewer</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-700">
              Invited
            </span>
          </td>
          <td className="px-4 py-2 text-right">
            <button className="rounded-md border px-2 py-1 text-xs hover:bg-gray-100">
              Edit
            </button>
            <button className="ml-2 rounded-md border px-2 py-1 text-xs hover:bg-gray-100">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
`.trim(),
  },

  {
    id: "filtering-basic",
    title: "Filterable (Search input)",
    description: "Client-side text search across multiple fields.",
    preview: <FilterableTable />,
    group: "Filtering",
    code: `"use client";

import { useMemo, useState } from "react";

type Person = {
  name: string;
  title: string;
  email: string;
  role: string;
};

const initialData: Person[] = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
  {
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    role: "Owner",
  },
  {
    name: "Jacob Jones",
    title: "Engineering Manager",
    email: "jacob.jones@example.com",
    role: "Member",
  },
];

export default function FilterableTable() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return initialData;
    return initialData.filter((p) =>
      [p.name, p.title, p.email, p.role].some((v) =>
        v.toLowerCase().includes(q)
      )
    );
  }, [query]);

  return (
    <div className="w-full">
      <div className="mb-2">
        <label htmlFor="filter" className="sr-only">
          Search
        </label>
        <input
          id="filter"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name, title, email, role..."
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400"
        />
      </div>

      <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="px-4 py-2 font-semibold">Name</th>
            <th className="px-4 py-2 font-semibold">Title</th>
            <th className="px-4 py-2 font-semibold">Email</th>
            <th className="px-4 py-2 font-semibold">Role</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filtered.map((p) => (
            <tr key={p.email}>
              <td className="px-4 py-2">{p.name}</td>
              <td className="px-4 py-2">{p.title}</td>
              <td className="px-4 py-2">{p.email}</td>
              <td className="px-4 py-2">{p.role}</td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td
                className="px-4 py-6 text-center text-sm text-gray-500"
                colSpan={4}
              >
                No results
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

    `.trim(),
  },
];
