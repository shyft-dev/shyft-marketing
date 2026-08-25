const MAX_FIELD = 200;
const MAX_MESSAGE = 5000;

export type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  /** true when the hidden honeypot field was filled — drop silently */
  spam: boolean;
};

export type ParseResult =
  | { ok: true; data: ContactSubmission }
  | { ok: false; error: string };

function field(formData: FormData, name: string, max = MAX_FIELD): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function parseContactSubmission(formData: FormData): ParseResult {
  const name = field(formData, "name");
  const email = field(formData, "email");
  const company = field(formData, "company");
  const interest = field(formData, "interest");
  const message = field(formData, "message", MAX_MESSAGE);
  const spam = field(formData, "website") !== "";

  if (!name) {
    return { ok: false, error: "Please add your name." };
  }
  if (!email) {
    return { ok: false, error: "Please add your work email." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "That email doesn't look right — mind checking it?" };
  }
  if (!message) {
    return { ok: false, error: "Tell us at least a sentence about what you're after." };
  }

  return { ok: true, data: { name, email, company, interest, message, spam } };
}
