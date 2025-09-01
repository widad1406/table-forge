"use client";

import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  duotoneLight,
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

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }, [code]);

  const CodeBlock = (
    <SyntaxHighlighter
      language="tsx"
      style={theme === "dark" ? vscDarkPlus : duotoneLight}
      customStyle={{
        margin: 0,
        borderRadius: "var(--radius)",
        padding: "0.75rem",
        maxHeight: "500px",
        border: "1px solid var(--border)",
      }}
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
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex w-full justify-between items-center">
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
            size="icon"
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
