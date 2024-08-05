"use client";

import { useFormState, useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";

import { subscribe } from "../actions/subscribe";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "absolute right-0.5 top-0.5 select-none rounded-full bg-green-500 px-6 py-2 text-sm font-medium text-white",
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
      <p className="mb-0 text-neutral-500 dark:text-neutral-400">
        Join an exclusive community of avid readers and receive occasional
        updates on new projects.
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
          className={cn(
            "w-full rounded-full py-2.5 pl-4 pr-[94px] text-sm",
            "bg-neutral-100 text-neutral-950 outline-green-500 placeholder:text-neutral-500",
            "dark:placeholder-text-neutral-600 dark:bg-neutral-900 dark:text-white",
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
