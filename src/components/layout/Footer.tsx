import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        © {new Date().getFullYear()}{" "}
        <Link
          href="https://github.com/AnmolSaini16/table-forge"
          target="_blank"
          rel="noopener noreferrer"
        >
          TableForge
        </Link>
      </div>
    </footer>
  );
}
