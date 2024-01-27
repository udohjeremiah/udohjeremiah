"use client";

// React
import { useState } from "react";

// Next
import { useSearchParams } from "next/navigation";

// Dependencies
import { toast } from "sonner";

// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const params = useSearchParams();
  const [type, setType] = useState(params.get("type") ?? "general");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      setIsSubmitting(true);

      const time = new Date();
      const timestamp = time.valueOf();
      const previousTimestamp = localStorage.getItem("loops-form-timestamp");

      if (
        previousTimestamp &&
        Number(previousTimestamp) + 60 * 1000 > timestamp
      ) {
        throw new Error("Too many submits, please try again in a little while");
      }

      localStorage.setItem("loops-form-timestamp", timestamp.toString());

      setName("");
      setEmail("");
      setMessage("");
      toast.success("Thanks for getting in touch! We'll respond promptly.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : String(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 w-full max-w-lg space-y-4 rounded-lg border p-4"
    >
      <div className="space-y-1">
        <Label htmlFor="name">Full name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Osayi Eseosa"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="bg-secondary"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          type="text"
          placeholder="osayi@example.com"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="bg-secondary"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Hi there, I'm interested in..."
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="bg-secondary"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="type">Type</Label>
        <Select id="type" required value={type} onValueChange={setType}>
          <SelectTrigger aria-label="Select a type" className="bg-secondary">
            <SelectValue placeholder="Select a type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">Just saying hi!</SelectItem>
            <SelectItem value="contract">Contract work</SelectItem>
            <SelectItem value="advisory">Advisory work</SelectItem>
            <SelectItem value="agency">Agency introduction</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        type="submit"
        disabled={
          isSubmitting ||
          !name.trim() ||
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(email) ||
          !message.trim()
        }
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
