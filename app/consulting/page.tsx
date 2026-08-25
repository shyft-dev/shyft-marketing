import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";
import { CheckIcon } from "@/components/icons";
import { Nav } from "@/components/nav";
import { Eyebrow, SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Agent-first consulting, end to end: agentic workflow design, agent orchestration, build & integration, and enablement — shipped as working pipelines your team owns.",
};

const offerings = [
  {
    index: "01",
    title: "Agentic workflow design",
    body: "We map a process end to end, then redesign it agent-first: which agents do what, where handoffs happen, and where a human signs off. You get a blueprint you could hand to any builder — including us.",
  },
  {
    index: "02",
    title: "Agent orchestration",
    body: "Multi-agent pipelines with real engineering behind them: tool design, context management, state, retries, failure handling — and evals that tell you it's actually working.",
  },
  {
    index: "03",
    title: "Build & integration",
    body: "Wiring agents into the stack you already have — APIs, data, permissions, observability — so the system runs in your world, not in a demo.",
  },
  {
    index: "04",
    title: "Enablement & handover",
    body: "Playbooks, docs, and hands-on training. We're done when your team extends the system without calling us.",
  },
];

const principles = [
  {
    title: "Ship in weeks",
    body: "A pilot in production beats a quarter of strategy. We bias to working software early — then improve it where it runs.",
  },
  {
    title: "Humans on judgment",
    body: "Agents carry the repetitive load. Decisions with consequences keep a person in the loop — by design, not by accident.",
  },
  {
    title: "Everything observable",
    body: "If you can't see what an agent did and why, you can't trust it. Logging and evals are part of the build, not an add-on.",
  },
  {
    title: "Built to hand over",
    body: "Every engagement ends with your team owning the system. Dependence on us is a bug, not a business model.",
  },
];

const pilotIncludes = [
  "Process map & agent blueprint",
  "Working pipeline, in production",
  "Guardrails, logging & an eval suite",
  "Team training on the system",
  "Handover docs & playbooks",
];

export default function ConsultingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main>
        {/* Page hero */}
        <section className="relative overflow-hidden">
          <Image
            src="/mark-white.png"
            alt=""
            width={600}
            height={909}
            className="absolute -top-[120px] -right-20 w-[520px] opacity-[0.04]"
          />
          <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-6 py-14 md:gap-6 md:px-16 md:py-24">
            <Eyebrow>CONSULTING</Eyebrow>
            <h1 className="max-w-[900px] font-display text-[36px] leading-[1.08] font-semibold md:text-[56px] md:leading-[1.06]">
              Agent-first, end to end.
            </h1>
            <p className="max-w-[660px] text-[15px] leading-relaxed text-sub md:text-lg md:leading-[1.65]">
              From the first process map to a production system your team owns. We
              don&#39;t sell decks &mdash; we ship working pipelines, and leave behind a
              team that can run them.
            </p>
          </div>
        </section>

        {/* Offerings */}
        <section className="border-t border-line">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-16 md:gap-12 md:px-16 md:py-24">
            <SectionHeader eyebrow="WHAT WE TAKE ON" title="Four kinds of work." />
            <div className="flex flex-col">
              {offerings.map(({ index, title, body }, i) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 gap-3 border-t border-row py-7 md:grid-cols-[120px_380px_minmax(0,1fr)] md:gap-8 md:py-9 ${
                    i === offerings.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="font-mono text-sm text-orange md:text-[15px]">{index}</div>
                  <h3 className="font-display text-[20px] leading-tight font-semibold md:text-2xl md:leading-[1.25]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-sub md:text-base md:leading-[1.65]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="border-t border-line">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-16 md:gap-14 md:px-16 md:py-24">
            <SectionHeader eyebrow="HOW WE WORK" title="Opinionated, and honest about it." />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {principles.map(({ title, body }) => (
                <div
                  key={title}
                  className="clip-corner-16 md:clip-corner-18 flex flex-col gap-2.5 border border-line bg-raised p-6 md:gap-3.5 md:px-8 md:py-9"
                >
                  <h3 className="font-display text-[19px] font-semibold md:text-[21px]">{title}</h3>
                  <p className="text-sm leading-relaxed text-sub md:text-[15px] md:leading-[1.65]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The pilot */}
        <section className="border-t border-line">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-16 md:px-16 md:py-24 lg:flex-row lg:gap-[72px]">
            <div className="flex flex-col gap-4 md:gap-6 lg:w-[560px] lg:shrink-0">
              <Eyebrow>THE PILOT</Eyebrow>
              <h2 className="font-display text-[28px] leading-[1.12] font-semibold md:text-[42px] md:leading-[1.1]">
                What a first engagement includes.
              </h2>
              <p className="text-[15px] leading-relaxed text-sub md:text-base md:leading-[1.65]">
                We start with one workflow that&#39;s painful, frequent, and measurable
                &mdash; and take it all the way to production.
              </p>
            </div>
            <div className="flex grow flex-col md:pt-2">
              {pilotIncludes.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-4 py-5 ${
                    i === pilotIncludes.length - 1 ? "" : "border-b border-row"
                  }`}
                >
                  <CheckIcon />
                  <div className="text-[15px] md:text-base">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Bring us a workflow."
          body="The painful, frequent, measurable kind. We'll tell you what an agent-first version looks like — and whether it's worth building."
        />
      </main>
      <Footer />
    </div>
  );
}
