import TablesGallery from "@/components/TablesGallery";
import { Button } from "@/components/ui/button";
import { Code2, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-2xl px-4 pt-12 pb-6">
        <div className="text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl tracking-tight leading-tight">
            Beautiful, reusable table components
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a curated collection of table designs built with Tailwind
            CSS and modern UI. Copy, customize, and use them in your projects.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="#gallery">
                <Code2 />
                Browse gallery
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="https://github.com/AnmolSaini16/table-forge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star
                  className="size-4 text-yellow-500 fill-yellow-500"
                  aria-hidden="true"
                />
                Star on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <main id="gallery" className="mx-auto max-w-5xl py-20 scroll-mt-20 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight pb-1">
          Tables Gallery
        </h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Check out the gallery to see the tables in action
        </p>
        <TablesGallery />
      </main>
    </>
  );
}
