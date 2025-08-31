"use client";

import { useMemo, useState } from "react";
import TableExample from "@/components/TableExample";
import { tableExamples } from "@/data/tableExamples";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TablesGallery() {
  const groups = useMemo(() => {
    const unique = Array.from(new Set(tableExamples.map((t) => t.group)));
    return unique;
  }, []);

  const [active, setActive] = useState(groups[0] ?? "");

  return (
    <Tabs
      value={active}
      onValueChange={(value) =>
        setActive(value as "Basic" | "Sorting" | "Filtering")
      }
      className="space-y-4"
    >
      <TabsList className="w-full">
        {groups.map((g) => (
          <TabsTrigger key={g} value={g}>
            {g}
          </TabsTrigger>
        ))}
      </TabsList>

      {groups.map((g) => (
        <TabsContent key={g} value={g} className="m-0">
          <p className="text-sm text-muted-foreground pb-4">
            {tableExamples.filter((t) => t.group === g).length} examples
          </p>
          <div className="grid grid-cols-1 gap-6">
            {tableExamples
              .filter((t) => t.group === g)
              .map((ex) => (
                <TableExample
                  key={ex.id}
                  title={ex.title}
                  description={ex.description}
                  preview={ex.preview}
                  code={ex.code}
                />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
