"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { resend } from "@/lib/resend";
import { parseError } from "@/lib/utils";

if (!process.env.RESEND_AUDIENCE_ID) {
  throw new Error("RESEND_AUDIENCE_ID environment variable is not set");
}

export async function subscribe(previousState, formData) {
  const schema = z.object({
    email: z.string().email(),
  });

  const data = schema.parse(Object.fromEntries(formData));

  try {
    // const response = await resend.contacts.create({
    //   email: data.email,
    //   unsubscribed: false,
    //   audienceId: process.env.RESEND_AUDIENCE_ID,
    // });
    // if (response.error) {
    //   throw new Error(response.error.message);
    // }
    // revalidatePath("/");
    // return { message: "Subscribed!" };

    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
      message:
        "Thank you for your interest. Our newsletter feature is coming soon!",
    };
  } catch (error) {
    const message = parseError(error);

    return { message };
  }
}
