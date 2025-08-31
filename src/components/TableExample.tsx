"use client";

import { Check, Copy, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-3">
        <div>
          <CardTitle className="text-base leading-6">{title}</CardTitle>
          {description ? (
            <CardDescription className="mt-1">{description}</CardDescription>
          ) : null}
        </div>
        <Button type="button" onClick={handleCopy} aria-label="Copy JSX">
          {copied ? (
            <>
              Copied
              <Check className="text-emerald-500" />
            </>
          ) : (
            <>
              Copy
              <Copy className="size-4" />
            </>
          )}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-full">{preview}</div>
        </div>
      </CardContent>
      <div className="border-t">
        <details className="group p-4">
          <Button asChild variant="link" size="sm">
            <summary className="inline-flex cursor-pointer select-none items-center gap-1">
              Show Code
              <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
            </summary>
          </Button>
          <pre className="mt-3 overflow-x-auto rounded-md bg-muted p-3 text-xs text-foreground ">
            <code>{code.trim()}</code>
          </pre>
        </details>
      </div>
    </Card>
  );
}
