"use server";

// Components
import ContactEmail from "@/emails/ContactEmail";

// Lib
import { resend } from "@/lib/resend";

export const contact = async ({ name, email, message, type }) => {
  if (!process.env.RESEND_FROM) {
    throw new Error("RESEND_FROM environment variable is not set");
  }

  if (!process.env.RESEND_TO) {
    throw new Error("RESEND_TO environment variable is not set");
  }

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: process.env.RESEND_TO,
      subject: "Contact form submission",
      reply_to: email,
      react: ContactEmail({ name, email, message, type }),
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    return {};
  } catch (error) {
    return { error: error instanceof Error ? error.message : String(error) };
  }
};
