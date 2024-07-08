import { cn } from "@/lib/utils";

export default function Location() {
  const timezone = process.env.NEXT_PUBLIC_TIMEZONE;
  const location = process.env.NEXT_PUBLIC_LOCATION;

  if (!timezone || !location) {
    return null;
  }

  return (
    <>
      {location}{" "}
      <div
        className={cn(
          "not-prose inline-flex scale-[0.8] overflow-hidden rounded-md border align-text-bottom shadow-[0_1px_8px_0_rgba(0,0,0,0.04)] md:scale-100",
          "border-neutral-200",
          "dark:border-neutral-700",
        )}
      >
        <span
          className={cn(
            "px-2 py-1.5 text-sm font-medium shadow-[inset_0_-2px_5px_0_rgba(0,0,0,0.07)]",
            "bg-neutral-100",
            "dark:bg-neutral-800",
          )}
        >
          🌤️
        </span>{" "}
        <span
          className={cn(
            "px-2 py-1.5 text-sm font-medium shadow-[inset_0_-2px_5px_0_rgba(0,0,0,0.07)]",
            "bg-white",
            "dark:bg-neutral-800",
          )}
        >
          {new Intl.DateTimeFormat("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            timezone,
          }).format(new Date())}
        </span>
      </div>
    </>
  );
}
