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
        <span aria-hidden className="ml-1 select-none text-gray-400"></span>
      );
    return (
      <span aria-hidden className="ml-1 select-none text-gray-600">
        {sortDirection === "asc" ? "↑" : "↓"}
      </span>
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
              aria-sort={
                sortKey === "name"
                  ? sortDirection === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
            >
              Name {renderSortIcon("name")}
            </button>
          </th>
          <th className="px-4 py-2 font-semibold">
            <button
              type="button"
              onClick={() => onHeaderClick("title")}
              className="inline-flex items-center hover:underline"
              aria-sort={
                sortKey === "title"
                  ? sortDirection === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
            >
              Title {renderSortIcon("title")}
            </button>
          </th>
          <th className="px-4 py-2 font-semibold">
            <button
              type="button"
              onClick={() => onHeaderClick("email")}
              className="inline-flex items-center hover:underline"
              aria-sort={
                sortKey === "email"
                  ? sortDirection === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
            >
              Email {renderSortIcon("email")}
            </button>
          </th>
          <th className="px-4 py-2 font-semibold">
            <button
              type="button"
              onClick={() => onHeaderClick("role")}
              className="inline-flex items-center hover:underline"
              aria-sort={
                sortKey === "role"
                  ? sortDirection === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
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
