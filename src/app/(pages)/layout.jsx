import { tw } from "@/lib/utils";

export default function PagesLayout({ children }) {
  return (
    <main className={tw("px-4 pb-32 pt-16", "sm:pt-32")}>
      <div
        className={tw(
          "prose prose-neutral prose-green mx-auto space-y-12",
          "dark:prose-invert",
        )}
      >
        {children}
      </div>
    </main>
  );
}
