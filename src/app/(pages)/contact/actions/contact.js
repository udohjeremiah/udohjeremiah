"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { resend } from "@/lib/resend";
import { parseError } from "@/lib/utils";

if (!process.env.RESEND_FROM || !process.env.RESEND_TO) {
  throw new Error(
    "RESEND_FROM and RESEND_TO environment variables are not set",
  );
}

export async function contact(previousState, formData) {
  const schema = z.object({
    name: z.string().min(1).max(255),
    email: z.string().email(),
    message: z.string().min(1).max(1000),
    type: z.enum(["general", "contract", "advisory", "agency"]),
  });

  const data = schema.parse(Object.fromEntries(formData));

  try {
    const response = await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: process.env.RESEND_TO,
      subject: `New ${data.type} message from ${data.name}`,
      reply_to: data.email,
      text: data.message,
    });

    if (response.error) {
      throw new Error(response.error.message);
    }

    revalidatePath("/contact");

    return { message: "Thanks! Your message has been sent." };
  } catch (error) {
    const errorMessage = parseError(error);

    return { message: errorMessage };
  }
}
