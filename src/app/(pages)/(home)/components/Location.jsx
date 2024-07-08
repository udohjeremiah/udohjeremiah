"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export default function Location() {
  const location = process.env.NEXT_PUBLIC_LOCATION;
  const timezone = process.env.NEXT_PUBLIC_TIMEZONE;

  const [currentTime, setCurrentTime] = useState(
    new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: timezone,
    }).format(new Date()),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: timezone,
        }).format(new Date()),
      );
    }, 60000);

    return () => clearInterval(interval);
  }, [timezone]);

  if (!location || !timezone) {
    return null;
  }

  return (
    <>
      {location}{" "}
      <div
        className={cn(
          "not-prose inline-flex scale-[0.8] items-center gap-2 overflow-hidden rounded-md border px-2 py-1.5 align-text-bottom shadow-[0_1px_8px_0_rgba(0,0,0,0.04)] md:scale-100",
          "border-neutral-200 bg-neutral-100",
          "dark:border-neutral-700 dark:bg-neutral-800",
        )}
      >
        <span className="text-sm font-medium shadow-[inset_0_-2px_5px_0_rgba(0,0,0,0.07)]">
          🌤️
        </span>{" "}
        <span className="text-sm font-medium shadow-[inset_0_-2px_5px_0_rgba(0,0,0,0.07)]">
          {currentTime}
        </span>
      </div>
    </>
  );
}
