import type { ReactNode } from "react";
import BasicBorderedTable from "@/components/tables/BasicBorderedTable";
import StripedRowsTable from "@/components/tables/StripedRowsTable";
import CompactTable from "@/components/tables/CompactTable";
import ResponsiveCardsOnMobile from "@/components/tables/ResponsiveCardsOnMobile";
import WithActionsTable from "@/components/tables/WithActionsTable";
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
    title: "Minimalist",
    description: "Simple table using Minimalist theme.",
    preview: <MinimalistUI />,
    group: "Basic",
    code: `export default function MinimalistUI() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="border-b">
            <th className="text-muted-foreground h-10 px-4 text-left align-middle font-medium">
              Name
            </th>
            <th className="text-muted-foreground h-10 px-4 text-left align-middle font-medium">
              Title
            </th>
            <th className="text-muted-foreground h-10 px-4 text-left align-middle font-medium">
              Email
            </th>
            <th className="text-muted-foreground h-10 px-4 text-left align-middle font-medium">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          <tr className="hover:bg-muted/50 border-b transition-colors">
            <td className="p-4 align-middle">Lindsay Walton</td>
            <td className="p-4 align-middle">Front-end Developer</td>
            <td className="p-4 align-middle">lindsay.walton@example.com</td>
            <td className="p-4 align-middle">Member</td>
          </tr>
          <tr className="hover:bg-muted/50 border-b transition-colors">
            <td className="p-4 align-middle">Courtney Henry</td>
            <td className="p-4 align-middle">Designer</td>
            <td className="p-4 align-middle">courtney.henry@example.com</td>
            <td className="p-4 align-middle">Admin</td>
          </tr>
          <tr className="hover:bg-muted/50 border-b transition-colors">
            <td className="p-4 align-middle">Tom Cook</td>
            <td className="p-4 align-middle">Director of Product</td>
            <td className="p-4 align-middle">tom.cook@example.com</td>
            <td className="p-4 align-middle">Owner</td>
          </tr>
        </tbody>
      </table>
    </div>
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
    code: `export default function BasicBorderedTable() {
  return (
    <table className="min-w-full border text-left text-sm">
      <thead className="bg-muted text-muted-foreground">
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
        <tr className="border-t">
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
    code: `"use client";

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
    if (key !== sortKey)
      return (
        <span
          aria-hidden
          className="ml-1 select-none text-muted-foreground"
        ></span>
      );
    return (
      <span aria-hidden className="ml-1 select-none text-foreground">
        {sortDirection === "asc" ? "↑" : "↓"}
      </span>
    );
  }

  return (
    <table className="min-w-full divide-y divide-border text-left text-sm">
      <thead className="bg-muted text-muted-foreground">
        <tr>
          <th className="px-4 py-2 font-semibold">
            <button
              type="button"
              onClick={() => onHeaderClick("name")}
              className="inline-flex items-center group"
              aria-sort={
                sortKey === "name"
                  ? sortDirection === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
            >
              <span className="group-hover:underline">Name</span>{" "}
              {renderSortIcon("name")}
            </button>
          </th>
          <th className="px-4 py-2 font-semibold">
            <button
              type="button"
              onClick={() => onHeaderClick("title")}
              className="inline-flex items-center group"
              aria-sort={
                sortKey === "title"
                  ? sortDirection === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
            >
              <span className="group-hover:underline">Title</span>{" "}
              {renderSortIcon("title")}
            </button>
          </th>
          <th className="px-4 py-2 font-semibold">
            <button
              type="button"
              onClick={() => onHeaderClick("email")}
              className="inline-flex items-center group"
              aria-sort={
                sortKey === "email"
                  ? sortDirection === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
            >
              <span className="group-hover:underline">Email</span>{" "}
              {renderSortIcon("email")}
            </button>
          </th>
          <th className="px-4 py-2 font-semibold">
            <button
              type="button"
              onClick={() => onHeaderClick("role")}
              className="inline-flex items-center group"
              aria-sort={
                sortKey === "role"
                  ? sortDirection === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
            >
              <span className="group-hover:underline"> Role</span>{" "}
              {renderSortIcon("role")}
            </button>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
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
    code: `"use client";

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

  function HeaderButton({
    label,
    keyName,
  }: {
    label: string;
    keyName: SortKey;
  }) {
    const isActive = sortKey === keyName;
    return (
      <button
        type="button"
        onClick={() => setSortKey(keyName)}
        className={
          "rounded-md border px-2 py-1 text-xs transition-colors " +
          (isActive
            ? "border-input bg-input/40 text-foreground"
            : "border-transparent bg-background text-muted-foreground hover:bg-muted")
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
        <span className="text-xs font-medium text-muted-foreground">
          Sort by:
        </span>
        <HeaderButton label="Name" keyName="name" />
        <HeaderButton label="Title" keyName="title" />
        <HeaderButton label="Email" keyName="email" />
        <HeaderButton label="Role" keyName="role" />
        <div className="ml-2 h-4 w-px bg-border" />
        <button
          type="button"
          onClick={() =>
            setSortDirection((d) => (d === "asc" ? "desc" : "asc"))
          }
          className="rounded-md border px-2 py-1 text-xs text-foreground hover:bg-muted"
          aria-label="Toggle sort direction"
          aria-live="polite"
        >
          {sortDirection === "asc" ? "Ascending ↑" : "Descending ↓"}
        </button>
      </div>

      <table className="min-w-full divide-y divide-border text-left text-sm">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="px-4 py-2 font-semibold">Name</th>
            <th className="px-4 py-2 font-semibold">Title</th>
            <th className="px-4 py-2 font-semibold">Email</th>
            <th className="px-4 py-2 font-semibold">Role</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
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
    id: "striped-rows",
    title: "Striped Rows",
    description: "Alternating row colors for readability.",
    preview: <StripedRowsTable />,
    group: "Basic",
    code: `export default function StripedRowsTable() {
  return (
    <table className="min-w-full divide-y divide-border text-left text-sm">
      <thead className="bg-muted">
        <tr>
          <th className="px-4 py-2 font-semibold text-muted-foreground">
            Project
          </th>
          <th className="px-4 py-2 font-semibold text-muted-foreground">
            Status
          </th>
          <th className="px-4 py-2 font-semibold text-muted-foreground">
            Owner
          </th>
          <th className="px-4 py-2 font-semibold text-muted-foreground">Due</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        <tr className="odd:bg-none even:bg-muted">
          <td className="px-4 py-2">Homepage Redesign</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-500">
              Complete
            </span>
          </td>
          <td className="px-4 py-2">Alex</td>
          <td className="px-4 py-2">May 10</td>
        </tr>
        <tr className="odd:bg-none even:bg-muted">
          <td className="px-4 py-2">Mobile App</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">
              In Progress
            </span>
          </td>
          <td className="px-4 py-2">Sam</td>
          <td className="px-4 py-2">Jun 01</td>
        </tr>
        <tr className="odd:bg-none even:bg-muted">
          <td className="px-4 py-2">Marketing Campaign</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
              Queued
            </span>
          </td>
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
    code: `export default function CompactTable() {
  return (
    <table className="min-w-full border-separate border-spacing-0 text-left text-xs">
      <thead>
        <tr>
          <th className="sticky top-0  px-3 py-2 font-semibold text-foreground">
            ID
          </th>
          <th className="sticky top-0 px-3 py-2 font-semibold text-foreground">
            Metric
          </th>
          <th className="sticky top-0 px-3 py-2 font-semibold text-foreground">
            Value
          </th>
          <th className="sticky top-0 px-3 py-2 font-semibold text-foreground">
            Delta
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-1.5">A-01</td>
          <td className="px-3 py-1.5">Visitors</td>
          <td className="px-3 py-1.5">12,450</td>
          <td className="px-3 py-1.5 text-green-600">+8%</td>
        </tr>
        <tr className="bg-muted">
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
          <table className="hidden min-w-full divide-y divide-border text-left text-sm sm:table">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-2 font-semibold text-muted-foreground">
                  Name
                </th>
                <th className="px-4 py-2 font-semibold text-muted-foreground">
                  Amount
                </th>
                <th className="px-4 py-2 font-semibold text-muted-foreground">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
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
            <li className="rounded-lg border p-3 break-words">
              <div className="text-sm font-medium text-foreground">
                Payment from Olivia Rhye
              </div>
              <div className="mt-1 text-sm text-foreground">$20.00</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Jan 22, 2024
              </div>
            </li>
            <li className="rounded-lg border p-3 break-words">
              <div className="text-sm font-medium text-foreground">
                Payment from Lana Steiner
              </div>
              <div className="mt-1 text-sm text-foreground">$5.00</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Jan 15, 2024
              </div>
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
    <table className="min-w-full divide-y divide-border text-left text-sm">
      <thead className="bg-muted">
        <tr>
          <th className="px-4 py-2 font-semibold text-muted-foreground">
            User
          </th>
          <th className="px-4 py-2 font-semibold text-muted-foreground">
            Role
          </th>
          <th className="px-4 py-2 font-semibold text-muted-foreground">
            Status
          </th>
          <th className="px-4 py-2" />
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        <tr>
          <td className="px-4 py-2">Ava Williams</td>
          <td className="px-4 py-2">Editor</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-secondary px-2 py-0.5 text-xs font-medium  text-emerald-500">
              Active
            </span>
          </td>
          <td className="px-4 py-2 text-right">
            <button className="rounded-md border px-2 py-1 text-xs hover:bg-muted">
              Edit
            </button>
            <button className="ml-2 rounded-md border px-2 py-1 text-xs hover:bg-muted ">
              Delete
            </button>
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2">Noah Patel</td>
          <td className="px-4 py-2">Viewer</td>
          <td className="px-4 py-2">
            <span className="inline-flex rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-orange-500">
              Invited
            </span>
          </td>
          <td className="px-4 py-2 text-right">
            <button className="rounded-md border px-2 py-1 text-xs hover:bg-muted">
              Edit
            </button>
            <button className="ml-2 rounded-md border px-2 py-1 text-xs hover:bg-muted">
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
          className="w-full rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground outline-none"
        />
      </div>

      <table className="min-w-full divide-y divide-border text-left text-sm">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="px-4 py-2 font-semibold">Name</th>
            <th className="px-4 py-2 font-semibold">Title</th>
            <th className="px-4 py-2 font-semibold">Email</th>
            <th className="px-4 py-2 font-semibold">Role</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
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
                className="px-4 py-6 text-center text-sm text-muted-foreground"
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
