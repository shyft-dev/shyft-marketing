import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Eyebrow, SectionHeader } from "@/components/section-header";
import { Tri } from "@/components/tri";

export const metadata: Metadata = {
  title: "Education",
  description:
    "AI skills taught in levels — beginner foundations, intermediate agent-first workflows, and expert agent orchestration — for individuals and teams, on your real work.",
};

const tiers = [
  {
    level: "01 · BEGINNER",
    name: "Foundations",
    audience: "For people starting from zero — or from bad habits.",
    highlight: false,
    topics: [
      "What models can and can't do — and why they fail",
      "Prompting that works: context, constraints, iteration",
      "Everyday workflows: writing, research, analysis",
      "Judging output: verification, taste, and staying safe",
    ],
  },
  {
    level: "02 · INTERMEDIATE",
    name: "Working agent-first",
    audience: "For people who use AI daily and want real leverage.",
    highlight: false,
    topics: [
      "Agentic tools: coding assistants, task agents",
      "Breaking work into agent-sized pieces",
      "Review loops: verifying without re-doing the work",
      "Building a personal agent-first workflow",
    ],
  },
  {
    level: "03 · EXPERT",
    name: "Orchestration",
    audience: "For engineers and leads building with agents.",
    highlight: true,
    topics: [
      "Multi-agent design: roles, handoffs, state",
      "Tool design and context management",
      "Guardrails, evals, and observability",
      "Running agentic delivery on a real team",
    ],
  },
];

const formats = [
  {
    name: "Team workshops",
    body: "Hands-on sessions for a whole team — everyone leaves with the same vocabulary and a working setup.",
  },
  {
    name: "Cohort programs",
    body: "A level taught over multiple sessions, with real work between them and feedback on what you produced.",
  },
  {
    name: "1:1 coaching",
    body: "For leads and specialists — focused sessions on your stack, your workflows, your blockers.",
  },
];

export default function EducationPage() {
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
            <Eyebrow>EDUCATION</Eyebrow>
            <h1 className="max-w-[900px] font-display text-[36px] leading-[1.08] font-semibold md:text-[56px] md:leading-[1.06]">
              AI skills, taught in levels.
            </h1>
            <p className="max-w-[660px] text-[15px] leading-relaxed text-sub md:text-lg md:leading-[1.65]">
              For individuals and teams &mdash; from a first serious session with a model
              to orchestrating fleets of agents. Every level is taught on your real work,
              and every level ends with a workflow you keep.
            </p>
          </div>
        </section>

        {/* Tiers */}
        <section className="border-t border-line">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-16 md:gap-14 md:px-16 md:py-24">
            <SectionHeader eyebrow="THE LEVELS" title="Start where you are." />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
              {tiers.map(({ level, name, audience, topics, highlight }) => (
                <div
                  key={level}
                  className={`clip-corner-16 md:clip-corner-18 flex flex-col gap-4 border bg-raised p-6 md:gap-5 md:px-8 md:py-10 ${
                    highlight ? "border-orange" : "border-line"
                  }`}
                >
                  <div
                    className={`font-mono text-[11px] tracking-[0.12em] md:text-xs ${
                      highlight ? "text-orange" : "text-faint"
                    }`}
                  >
                    {level}
                  </div>
                  <h3 className="font-display text-[22px] font-semibold md:text-[26px]">{name}</h3>
                  <p className="text-sm leading-relaxed text-sub md:text-[15px] md:leading-[1.6]">
                    {audience}
                  </p>
                  <ul className="flex flex-col gap-3.5 border-t border-line pt-5">
                    {topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3">
                        <Tri size={9} className="mt-[5px] shrink-0 text-orange" />
                        <span className="text-sm leading-normal text-bright md:text-[15px] md:leading-[1.55]">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="border-t border-line">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-16 md:gap-14 md:px-16 md:py-24">
            <SectionHeader eyebrow="FORMATS" title="Pick the shape that fits." />
            <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-12">
              {formats.map(({ name, body }) => (
                <div key={name} className="flex flex-col gap-2.5 border-t-2 border-step pt-5 md:gap-3.5 md:pt-6">
                  <h3 className="font-display text-[19px] font-semibold md:text-[21px]">{name}</h3>
                  <p className="text-sm leading-relaxed text-sub md:text-[15px] md:leading-[1.65]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Not sure which level?"
          body="Book an intro call and tell us how you work today. We'll place you honestly — even if that means starting simpler than you'd like."
        />
      </main>
      <Footer />
    </div>
  );
}
