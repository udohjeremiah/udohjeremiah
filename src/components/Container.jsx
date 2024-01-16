import { cn } from "@/lib/utils";

export default function Container({ wide, children }) {
  return (
    <div
      className={cn(
        "container prose prose-neutral mx-auto px-4 py-16",
        "sm:px-8",
        "lg:py-24",
        "dark:prose-invert",
        wide && "max-w-4xl",
      )}
    >
      {children}
    </div>
  );
}
