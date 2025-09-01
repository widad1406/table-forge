import path from "node:path";
import { promises as fs } from "node:fs";
import { cache } from "react";
import TableExample from "@/components/TableExample";

type ExampleCardProps = {
  title: string;
  description: string;
  codePath: string;
  children: React.ReactNode;
};

const readFileCached = cache(async (filePath: string) => {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    console.error(`Failed to read file: ${filePath}`, error);
    return `Error: Could not load code for ${path.basename(filePath)}`;
  }
});

export default async function ExampleCard({
  title,
  description,
  codePath,
  children,
}: ExampleCardProps) {
  const fullPath = path.join(process.cwd(), codePath);
  const code = await readFileCached(fullPath);

  return (
    <TableExample
      title={title}
      description={description}
      preview={children}
      code={code}
    />
  );
}
