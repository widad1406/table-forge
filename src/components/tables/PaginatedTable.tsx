"use client";

import { useEffect, useMemo, useState } from "react";

type Person = {
  name: string;
  title: string;
  email: string;
  role: string;
};

const sampleData: Person[] = [
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
  {
    name: "Esther Howard",
    title: "Account Manager",
    email: "esther.howard@example.com",
    role: "Member",
  },
  {
    name: "Cody Fisher",
    title: "Back-end Developer",
    email: "cody.fisher@example.com",
    role: "Admin",
  },
  //... and so on
];

// Create 42 entries
const initialData: Person[] = Array.from({ length: 42 }, (_, index) => {
  const base = sampleData[index % sampleData.length];
  const nameSlug = base.name.toLowerCase().replace(/\s+/g, "");
  return {
    ...base,
    email: `${nameSlug}${index}@example.com`,
  };
});

export default function PaginatedTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalItems = initialData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  useEffect(() => {
    setCurrentPage((p) => Math.min(p, totalPages));
  }, [pageSize, totalPages]);

  const pageData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return initialData.slice(start, end);
  }, [currentPage, pageSize]);

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  function goToFirst() {
    setCurrentPage(1);
  }
  function goToPrev() {
    setCurrentPage((p) => Math.max(1, p - 1));
  }
  function goToNext() {
    setCurrentPage((p) => Math.min(totalPages, p + 1));
  }
  function goToLast() {
    setCurrentPage(totalPages);
  }

  return (
    <div className="w-full">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            Rows per page
          </span>
          <select
            aria-label="Rows per page"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="rounded-md border px-2 py-1 text-xs bg-background text-foreground"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted-foreground">
            Showing {startItem}–{endItem} of {totalItems}
          </span>
          <div className="ml-2 h-4 w-px bg-border" />
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={goToFirst}
              disabled={currentPage === 1}
              className="rounded-md border px-2 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
              aria-label="Go to first page"
            >
              « First
            </button>
            <button
              type="button"
              onClick={goToPrev}
              disabled={currentPage === 1}
              className="rounded-md border px-2 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
              aria-label="Go to previous page"
            >
              ‹ Prev
            </button>
            <span className="px-2 text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <button
              type="button"
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="rounded-md border px-2 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
              aria-label="Go to next page"
            >
              Next ›
            </button>
            <button
              type="button"
              onClick={goToLast}
              disabled={currentPage === totalPages}
              className="rounded-md border px-2 py-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted"
              aria-label="Go to last page"
            >
              Last »
            </button>
          </div>
        </div>
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
          {pageData.map((p) => (
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
