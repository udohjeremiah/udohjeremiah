"use client";

import { useFormState, useFormStatus } from "react-dom";

import { tw } from "@/lib/utils";

import { subscribe } from "../actions/subscribe";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={tw(
        "absolute right-0.5 top-0.5 select-none rounded-full px-6 py-2 text-sm font-medium",
        "bg-green-500 text-white",
        "disabled:cursor-not-allowed disabled:opacity-50",
      )}
    >
      {pending ? "Joining..." : "Join"}
    </button>
  );
}

export default function Newsletter() {
  const [state, formAction] = useFormState(subscribe, {
    message: "",
  });

  return (
    <div className="space-y-2">
      <p className={tw("mb-0", "text-neutral-500", "dark:text-neutral-400")}>
        Join a community of readers and receive occasional updates on new
        developments. No spam, I promise!
      </p>
      <form action={formAction} className="relative max-w-96">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          aria-label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="oghenekevwe@example.com"
          pattern=".+@.+\..+"
          required
          className={tw(
            "w-full rounded-full py-2.5 pl-4 pr-[94px] text-sm",
            "bg-neutral-100 text-neutral-950 outline-green-500",
            "placeholder:text-neutral-500",
            "dark:bg-neutral-900 dark:text-white dark:placeholder:text-neutral-600",
          )}
        />
        <SubmitButton />
      </form>
      {state.message && (
        <output aria-live="polite" className="m-0 mt-4 block text-sm">
          {state.message}
        </output>
      )}
    </div>
  );
}
