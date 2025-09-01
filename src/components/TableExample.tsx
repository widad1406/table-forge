"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";

type TableExampleProps = {
  title: string;
  description?: string;
  preview: React.ReactNode;
  code: string;
};

export default function TableExample({
  title,
  description,
  preview,
  code,
}: TableExampleProps) {
  const [copied, setCopied] = useState(false);
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const { theme } = useTheme();

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  const CodeBlock = (
    <SyntaxHighlighter
      language="tsx"
      style={theme === "dark" ? oneDark : oneLight}
      customStyle={{
        margin: 0,
        borderRadius: 8,
        padding: "0.75rem",
        maxHeight: "500px",
      }}
      wrapLongLines
      wrapLines
      showLineNumbers
    >
      {code.trim()}
    </SyntaxHighlighter>
  );

  const PreviewBlock = (
    <div className="overflow-x-auto">
      <div className="min-w-full">{preview}</div>
    </div>
  );

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-3">
        <div>
          <CardTitle className="text-base leading-6">{title}</CardTitle>
          {description ? (
            <CardDescription className="mt-1">{description}</CardDescription>
          ) : null}
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex w-full justify-between">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setTab(tab === "preview" ? "code" : "preview")}
          >
            {tab === "preview" ? "Show Code" : "Show Preview"}
          </Button>
          <Button
            type="button"
            onClick={handleCopy}
            aria-label="Copy JSX"
            variant="outline"
            size="sm"
          >
            {copied ? (
              <Check className="text-emerald-500" />
            ) : (
              <Copy className="size-4" />
            )}
          </Button>
        </div>

        <div className="m-0 pt-4">
          {tab === "preview" ? PreviewBlock : CodeBlock}
        </div>
      </CardContent>
    </Card>
  );
}
