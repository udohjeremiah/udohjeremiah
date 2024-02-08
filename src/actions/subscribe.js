"use server";

// Lib
import { resend } from "@/lib/resend";

export const subscribe = async (email) => {
  if (!process.env.RESEND_AUDIENCE_ID) {
    throw new Error("RESEND_AUDIENCE_ID environment variable is not set");
  }

  try {
    const data = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    return {};
  } catch (error) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
};
