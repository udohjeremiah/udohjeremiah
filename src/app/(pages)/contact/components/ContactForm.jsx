"use client";

import { useFormState, useFormStatus } from "react-dom";

import Card from "@/components/Card";
import { Input, Select, Textarea } from "@/components/Form";

import { tw } from "@/lib/utils";

import { contact } from "../actions/contact";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className={tw(
        "rounded-lg px-6 py-2 text-sm font-medium",
        "bg-green-500 text-white",
        "disabled:cursor-not-allowed disabled:opacity-50",
      )}
    >
      {pending ? "Sending..." : "Send message"}
    </button>
  );
};

const typeOptions = [
  {
    value: "general",
    label: "General inquiry",
    subtitle: "I have a job offer / question / feedback.",
  },
  {
    value: "contract",
    label: "Contract work",
    subtitle: "I want to hire you for a project.",
  },
  {
    value: "advisory",
    label: "Advisory work",
    subtitle: "Can you join my board or be an advisor?",
  },
  {
    value: "agency",
    label: "Agency introduction",
    subtitle: "I'm looking for an good design / dev agency.",
  },
];

export default function ContactForm() {
  const [state, formAction] = useFormState(contact, {
    message: "",
  });

  return (
    <Card title="Get in touch">
      <form action={formAction} className="w-full space-y-4 p-4">
        <Input
          label="Full name"
          placeholder="Ruth Oghenekevwe"
          name="name"
          required
          maxLength={180}
        />
        <Input
          label="Email address"
          type="email"
          name="email"
          placeholder="oghenekevwe@example.com"
          pattern=".+@.+\..+"
          required
          maxLength={180}
        />
        <Textarea
          label="Message"
          name="message"
          placeholder="Hi there! I wanted to reach out to you about..."
          required
          maxLength={1000}
        />
        <Select label="Type" name="type" required data={typeOptions} />
        <SubmitButton />
        {state.message && (
          <output aria-live="polite" className="block text-sm">
            {state.message}
          </output>
        )}
      </form>
    </Card>
  );
}
