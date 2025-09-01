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
