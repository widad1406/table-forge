"use client";

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
