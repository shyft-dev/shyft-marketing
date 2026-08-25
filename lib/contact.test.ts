import { describe, expect, it } from "bun:test";
import { parseContactSubmission } from "./contact";

function formDataFrom(fields: Record<string, string>) {
  const fd = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    fd.set(key, value);
  }
  return fd;
}

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  company: "Analytical Engines",
  interest: "consulting",
  message: "We want to automate our report pipeline.",
};

describe("parseContactSubmission", () => {
  it("accepts a complete submission", () => {
    const result = parseContactSubmission(formDataFrom(valid));
    expect(result).toEqual({
      ok: true,
      data: {
        name: "Ada Lovelace",
        email: "ada@example.com",
        company: "Analytical Engines",
        interest: "consulting",
        message: "We want to automate our report pipeline.",
        spam: false,
      },
    });
  });

  it("accepts a submission without the optional company and interest", () => {
    const result = parseContactSubmission(
      formDataFrom({ name: valid.name, email: valid.email, message: valid.message }),
    );
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.company).toBe("");
      expect(result.data.interest).toBe("");
    }
  });

  it("rejects a missing name", () => {
    const result = parseContactSubmission(formDataFrom({ ...valid, name: "  " }));
    expect(result).toEqual({ ok: false, error: "Please add your name." });
  });

  it("rejects a missing email", () => {
    const result = parseContactSubmission(formDataFrom({ ...valid, email: "" }));
    expect(result).toEqual({ ok: false, error: "Please add your work email." });
  });

  it("rejects an email without an @", () => {
    const result = parseContactSubmission(formDataFrom({ ...valid, email: "not-an-email" }));
    expect(result).toEqual({
      ok: false,
      error: "That email doesn't look right — mind checking it?",
    });
  });

  it("rejects a missing message", () => {
    const result = parseContactSubmission(formDataFrom({ ...valid, message: "" }));
    expect(result).toEqual({
      ok: false,
      error: "Tell us at least a sentence about what you're after.",
    });
  });

  it("trims whitespace from every field", () => {
    const result = parseContactSubmission(
      formDataFrom({ ...valid, name: "  Ada  ", message: "  hello  " }),
    );
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.name).toBe("Ada");
      expect(result.data.message).toBe("hello");
    }
  });

  it("flags a filled honeypot as spam while still parsing", () => {
    const result = parseContactSubmission(formDataFrom({ ...valid, website: "http://spam.example" }));
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.spam).toBe(true);
    }
  });

  it("caps oversized messages", () => {
    const result = parseContactSubmission(formDataFrom({ ...valid, message: "x".repeat(6000) }));
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.message.length).toBe(5000);
    }
  });
});
