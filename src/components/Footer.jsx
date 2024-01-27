// Lib
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer
      className={cn(
        "flex items-center justify-center border-t px-4 py-6 text-center",
        "sm:px-8",
      )}
    >
      <div className={cn("prose prose-neutral text-xs", "dark:prose-invert")}>
        <p>
          All expressed ideas are solely mine and should not be considered a
          substitute for professional advice. Any losses incurred as a result of
          acting on such ideas are solely the responsibility of the individual
          taking such actions.
        </p>
        <p>&copy; 2024 Udoh Jeremiah. All rights reserved.</p>
      </div>
    </footer>
  );
}
