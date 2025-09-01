import { examples } from "@/examples";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TablesGallery() {
  const groups = Array.from(new Set(examples.map((t) => t.group)));

  return (
    <Tabs defaultValue={groups[0]} className="space-y-4">
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
            {examples.filter((t) => t.group === g).length} examples
          </p>
          <div className="grid grid-cols-1 gap-6">
            {examples
              .filter((t) => t.group === g)
              .map((ex) => {
                const Component = ex.Component;
                return <Component key={ex.id} />;
              })}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
