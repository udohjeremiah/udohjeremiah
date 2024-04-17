"use client";

// React
import { useState } from "react";

// Dependencies
import { toast } from "sonner";

// Actions
import { subscribe } from "@/actions/subscribe";

// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Lib
import { cn } from "@/lib/utils";

export default function MailingListForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();

      setIsSubmitting(true);

      const time = new Date();
      const timestamp = time.valueOf();
      const previousTimestamp = localStorage.getItem("loops-form-timestamp");

      if (
        previousTimestamp &&
        Number(previousTimestamp) + 30 * 1000 > timestamp
      ) {
        throw new Error("Too many submits, please try again in a little while");
      }

      const { error } = await subscribe(email);

      if (error) {
        throw new Error(error);
      }

      localStorage.setItem("loops-form-timestamp", timestamp.toString());

      setEmail("");
      toast.success("Thanks for subscribing! We'll be in touch!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : String(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="mt-8 space-y-1 rounded-lg border p-4"
    >
      <Label htmlFor="email">Email address</Label>
      <div
        className={cn(
          "flex w-full max-w-lg flex-col gap-2",
          "sm:flex-row",
          "sm:items-center",
        )}
      >
        <Input
          id="email"
          type="text"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="bg-secondary"
        />
        <Button
          type="submit"
          disabled={
            isSubmitting ||
            !email.trim() ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(email)
          }
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
    </form>
  );
}
