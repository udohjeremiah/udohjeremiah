"use client";

// Next
import dynamic from "next/dynamic";

// Lib
import { cn } from "@/lib/utils";

const ReactPlayer = dynamic(
  async () =>
    import(
      /* webpackChunkName: "react-player" */
      "react-player"
    ),
  { ssr: false },
);

export default function Video({ className, ...props }) {
  return (
    <div
      className={cn("relative aspect-video overflow-hidden rounded", className)}
    >
      <ReactPlayer
        {...props}
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0 }}
      />
    </div>
  );
}
