import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Eyebrow } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're trying to build, automate, or learn. You'll get a straight answer — including \"agents aren't the right fit\" when they aren't.",
};

const nextSteps = [
  {
    index: "01",
    title: "Intro call",
    body: "A short call on your workflows, your team, and whether agent-first fits.",
  },
  {
    index: "02",
    title: "A written read",
    body: "What we'd automate first, what we'd teach, and what we'd leave alone.",
  },
  {
    index: "03",
    title: "Pilot or training",
    body: "A scoped first engagement — one workflow shipped, or one level taught.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        {/* Page hero */}
        <section>
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-6 pt-14 pb-10 md:gap-6 md:px-16 md:pt-[88px] md:pb-16">
            <Eyebrow>CONTACT</Eyebrow>
            <h1 className="font-display text-[36px] leading-[1.08] font-semibold md:text-[56px] md:leading-[1.06]">
              Start the conversation.
            </h1>
            <p className="max-w-[640px] text-[15px] leading-relaxed text-sub md:text-lg md:leading-[1.65]">
              Tell us what you&#39;re trying to build, automate, or learn. You&#39;ll get
              a straight answer &mdash; including &#8220;agents aren&#39;t the right
              fit&#8221; when they aren&#39;t.
            </p>
          </div>
        </section>

        {/* Two column */}
        <section>
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 pt-2 pb-16 md:px-16 md:pt-8 md:pb-24 lg:flex-row lg:gap-[72px]">
            <div className="flex flex-col gap-8 md:gap-10 lg:w-[560px] lg:shrink-0">
              <div className="font-mono text-[13px] tracking-[0.16em] text-faint">
                WHAT HAPPENS NEXT
              </div>
              <div className="flex flex-col gap-7 md:gap-9">
                {nextSteps.map(({ index, title, body }) => (
                  <div key={index} className="flex gap-5 md:gap-6">
                    <div className="w-8 shrink-0 font-mono text-[15px] text-orange">{index}</div>
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <h2 className="font-display text-[18px] font-semibold md:text-xl">{title}</h2>
                      <p className="text-sm leading-relaxed text-sub md:text-[15px] md:leading-[1.65]">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="clip-corner-16 flex flex-col gap-2.5 border border-line bg-raised px-6 py-6 md:px-8 md:py-7">
                <div className="font-mono text-[11px] tracking-[0.16em] text-faint">
                  PREFER EMAIL?
                </div>
                <a
                  href="mailto:trenton@shyft.dev"
                  className="font-mono text-[15px] text-orange transition-colors hover:text-orange-soft md:text-base"
                >
                  trenton@shyft.dev
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer bordered />
    </div>
  );
}
