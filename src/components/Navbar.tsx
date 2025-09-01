import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Heart, Table } from "lucide-react";

export default function Navbar() {
  return (
    <header>
      <div className="mx-auto max-w-[60rem] px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 text-foreground">
          <Table className="size-5" aria-hidden="true" />
          <span className="text-lg leading-none font-bold">TableForge</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary">
            <Link
              href="https://buymeacoffee.com/sainianmol0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy me a coffee"
            >
              Buy me a coffee{" "}
              <Heart className="size-4 text-red-600 fill-red-600" />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
