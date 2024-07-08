import Image from "next/image";

import { cn } from "@/lib/utils";

export default function Avatar() {
  return (
    <Image
      src="/avatar.webp"
      alt="Udoh Jeremiah"
      width={64}
      height={96}
      className={cn(
        "m-0 inline aspect-square w-8 -translate-y-0.5 rotate-6 overflow-hidden rounded-md border object-cover",
        "border-neutral-200",
        "dark:border-neutral-700",
      )}
    />
  );
}
