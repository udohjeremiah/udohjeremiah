"use client";

import { cn } from "@/lib/utils";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function MailingListForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();

      const time = new Date();
      const timestamp = time.valueOf();
      const previousTimestamp = localStorage.getItem("loops-form-timestamp");

      if (
        previousTimestamp &&
        Number(previousTimestamp) + 60 * 1000 > timestamp
      ) {
        throw new Error("Too many signups, please try again in a little while");
      }

      localStorage.setItem("loops-form-timestamp", timestamp.toString());

      setIsSubmitting(false);
      setEmail("");
      toast.success("Thanks! We'll be in touch!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : String(error));
    } finally {
      localStorage.setItem("loops-form-timestamp", "");
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
          type="text"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
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
          {isSubmitting ? "Loading..." : "Subscribe"}
        </Button>
      </div>
    </form>
  );
}
