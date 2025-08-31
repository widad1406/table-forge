import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// 1200x630
export async function GET(_req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#0b0b0b",
            color: "#ffffff",
            padding: "64px",
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            TableForge
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 30,
              opacity: 0.85,
            }}
          >
            Beautiful, reusable table components built with Tailwind CSS and
            modern UI. Browse, copy, and customize for your projects.
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
