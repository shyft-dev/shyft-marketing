"use server";

import { Resend } from "resend";
import { parseContactSubmission } from "@/lib/contact";

export type ContactActionState = {
  status: "idle" | "sent" | "error";
  error?: string;
};

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "trenton@shyft.dev";
// Resend only allows onboarding@resend.dev until shyft.dev is verified as a
// sending domain — set CONTACT_FROM_EMAIL once that's done.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Shyft Website <onboarding@resend.dev>";

export async function sendContactMessage(
  _prev: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const parsed = parseContactSubmission(formData);
  if (!parsed.ok) {
    return { status: "error", error: parsed.error };
  }

  const { name, email, company, interest, message, spam } = parsed.data;
  if (spam) {
    return { status: "sent" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set; message not sent.");
    return {
      status: "error",
      error: "Sending is temporarily down — email trenton@shyft.dev directly instead.",
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `Website inquiry — ${name}${interest ? ` (${interest})` : ""}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Interested in: ${interest || "—"}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Contact form: Resend rejected the message.", error);
    return {
      status: "error",
      error: "Something went wrong on our side — email trenton@shyft.dev directly instead.",
    };
  }

  return { status: "sent" };
}
