import { tw } from "@/lib/utils";

export default function Card({ title, children, className }) {
  return (
    <div
      className={tw(
        "flex flex-col rounded-2xl p-1",
        "bg-neutral-100",
        "dark:bg-neutral-900",
      )}
    >
      <p
        className={tw(
          "m-0 block shrink-0 px-4 py-2 text-sm font-medium",
          "text-neutral-900",
          "dark:text-neutral-100",
        )}
      >
        {title}
      </p>
      <div
        className={tw(
          "relative flex-1 overflow-hidden rounded-xl border shadow-sm",
          "border-neutral-200 bg-white",
          "dark:border-neutral-800 dark:bg-neutral-950",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
