"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactActionState } from "@/app/contact/actions";
import { ArrowIcon, CheckIcon, ChevronDownIcon } from "@/components/icons";

const fieldClass =
  "h-12 w-full border border-field bg-well px-4 text-[15px] text-ink outline-none placeholder:text-faint focus:border-orange";

const labelClass = "font-mono text-[11px] tracking-[0.16em] text-faint";

const initialState: ContactActionState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  if (state.status === "sent") {
    return (
      <div className="clip-corner-18 md:clip-corner-20 flex grow flex-col items-start justify-center gap-4 border border-line bg-raised p-6 md:gap-5 md:px-10 md:py-11">
        <CheckIcon />
        <h2 className="font-display text-[22px] font-semibold md:text-[26px]">Message sent.</h2>
        <p className="max-w-[420px] text-[15px] leading-relaxed text-sub">
          It lands with a person, not a pipeline. Expect a reply from{" "}
          <a
            href="mailto:trenton@shyft.dev"
            className="font-mono text-orange transition-colors hover:text-orange-soft"
          >
            trenton@shyft.dev
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="clip-corner-18 md:clip-corner-20 flex grow flex-col gap-5 border border-line bg-raised p-6 md:gap-6 md:px-10 md:py-11"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <label className="flex flex-col gap-2.5">
          <span className={labelClass}>NAME</span>
          <input type="text" name="name" autoComplete="name" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-2.5">
          <span className={labelClass}>WORK EMAIL</span>
          <input type="email" name="email" autoComplete="email" className={fieldClass} />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <label className="flex flex-col gap-2.5">
          <span className={labelClass}>COMPANY</span>
          <input type="text" name="company" autoComplete="organization" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-2.5">
          <span className={labelClass}>I&#39;M INTERESTED IN</span>
          <div className="relative">
            <select name="interest" defaultValue="" className={`${fieldClass} appearance-none pr-10`}>
              <option value="" disabled>
                Consulting / Education / Both
              </option>
              <option value="consulting">Consulting</option>
              <option value="education">Education</option>
              <option value="both">Both</option>
            </select>
            <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
              <ChevronDownIcon />
            </span>
          </div>
        </label>
      </div>
      <label className="flex flex-col gap-2.5">
        <span className={labelClass}>MESSAGE</span>
        <textarea
          name="message"
          rows={5}
          placeholder="What are you trying to automate — or learn?"
          className="w-full resize-none border border-field bg-well px-4 py-3.5 text-[15px] text-ink outline-none placeholder:text-faint focus:border-orange"
        />
      </label>
      {/* honeypot — humans never see or fill this */}
      <label className="absolute -left-[9999px] size-px overflow-hidden" aria-hidden="true">
        <span>Leave this field empty</span>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      {state.status === "error" ? (
        <p className="font-mono text-[13px] text-orange" role="alert">
          {state.error}
        </p>
      ) : null}
      <div className="mt-1 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <p className="text-[13px] leading-normal text-faint">
          No newsletter, no drip sequence. A person reads this.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="clip-corner-14 inline-flex h-[52px] shrink-0 items-center justify-center gap-2.5 self-start bg-orange px-8 font-display text-[15px] font-semibold tracking-[0.05em] text-coal transition-colors hover:bg-orange-soft disabled:opacity-70 md:self-auto"
        >
          <span>{pending ? "SENDING…" : "SEND"}</span>
          <ArrowIcon className="text-coal" />
        </button>
      </div>
    </form>
  );
}
