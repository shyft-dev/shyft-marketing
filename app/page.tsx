import { ButtonLink, TextLink } from "@/components/button-link";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";
import { DeliveryIcon, EducationIcon, WorkflowIcon } from "@/components/icons";
import { Nav } from "@/components/nav";
import { OrchestrationDiagram } from "@/components/orchestration-diagram";
import { Eyebrow, SectionHeader } from "@/components/section-header";

const offers = [
  {
    index: "01",
    icon: <DeliveryIcon />,
    title: "Agent-first delivery",
    body: "We build your product or internal tooling the way we work ourselves: agents carrying the repetitive 80%, humans on the judgment calls. You get working software — and the workflow that produced it.",
  },
  {
    index: "02",
    icon: <WorkflowIcon />,
    title: "Agentic workflows & orchestration",
    body: "We map your processes and rebuild them as multi-agent pipelines — with the right handoffs, guardrails, and human review gates, so the automation is one you can actually trust.",
  },
  {
    index: "03",
    icon: <EducationIcon />,
    title: "AI education",
    body: "Structured training from beginner to expert: prompting fundamentals, daily AI workflows, and advanced agent orchestration — taught on your real work, not toy demos.",
  },
];

const steps = [
  {
    label: "01 / AUDIT",
    body: "We sit with your team and find where agents actually fit — and where they don't.",
  },
  {
    label: "02 / PILOT",
    body: "One workflow, rebuilt agent-first and put into production. Small enough to ship fast, real enough to matter.",
  },
  {
    label: "03 / TRAIN",
    body: "Your people learn to run, review, and extend the system — at whatever level they start from.",
  },
  {
    label: "04 / SCALE",
    body: "More workflows, less of us. The goal is a team that doesn't need consultants.",
  },
];

const tiers = [
  {
    level: "01 · BEGINNER",
    name: "Foundations",
    body: "What models can and can't do, prompting that works, and everyday AI workflows you'll actually keep.",
    highlight: false,
  },
  {
    level: "02 · INTERMEDIATE",
    name: "Working agent-first",
    body: "Agentic tools, breaking work into agent-sized pieces, and review loops that keep quality up.",
    highlight: false,
  },
  {
    level: "03 · EXPERT",
    name: "Orchestration",
    body: "Designing multi-agent systems: tools, context, guardrails, evals — and running agentic delivery on a team.",
    highlight: true,
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main>
        {/* Hero */}
        <section className="hero-lines">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 py-14 md:px-16 md:py-24 lg:flex-row lg:items-center lg:gap-[72px]">
            <div className="flex flex-col gap-5 md:gap-7 lg:w-[680px] lg:shrink-0">
              <Eyebrow>AGENT-FIRST CONSULTING &amp; EDUCATION</Eyebrow>
              <h1 className="font-display text-[38px] leading-[1.08] font-semibold tracking-[-0.01em] md:text-[52px] md:leading-[1.05] lg:text-[68px] lg:leading-[1.04]">
                Put agents to work. Learn to run them.
              </h1>
              <p className="max-w-[560px] text-[15px] leading-relaxed text-sub md:text-lg md:leading-[1.65]">
                Shyft is an agent-first consultancy. We design and ship agentic systems
                that carry real work in your business &mdash; then train your people to
                operate and extend them, from first prompt to full orchestration.
              </p>
              <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-center md:gap-7">
                <ButtonLink href="/contact">BOOK AN INTRO CALL</ButtonLink>
                <TextLink href="/education">EXPLORE THE TRAINING PATHS</TextLink>
              </div>
            </div>
            <div className="hidden grow md:block">
              <OrchestrationDiagram />
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="border-t border-line">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-16 md:gap-14 md:px-16 md:py-24">
            <SectionHeader eyebrow="WHAT WE DO" title="Three ways to work with us." />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
              {offers.map(({ index, icon, title, body }) => (
                <div
                  key={index}
                  className="clip-corner-16 md:clip-corner-18 flex flex-col gap-3 border border-line bg-raised p-6 md:gap-5 md:px-8 md:py-9"
                >
                  <div className="flex items-center justify-between">
                    {icon}
                    <div className="font-mono text-[11px] text-faint md:text-xs">{index}</div>
                  </div>
                  <h3 className="font-display text-[19px] font-semibold md:text-[22px]">{title}</h3>
                  <p className="text-sm leading-relaxed text-sub md:text-[15px] md:leading-[1.65]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-line">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-16 md:gap-14 md:px-16 md:py-24">
            <SectionHeader eyebrow="PROCESS" title="From audit to autonomy." />
            <div className="grid grid-cols-1 gap-7 md:grid-cols-4 md:gap-8">
              {steps.map(({ label, body }, i) => (
                <div
                  key={label}
                  className={`flex flex-col gap-3 border-t-2 pt-5 md:gap-4 md:pt-6 ${
                    i === 0 ? "border-orange" : "border-step"
                  }`}
                >
                  <div
                    className={`font-mono text-[13px] tracking-[0.12em] ${
                      i === 0 ? "text-orange" : "text-ink"
                    }`}
                  >
                    {label}
                  </div>
                  <p className="text-sm leading-relaxed text-sub md:text-[15px] md:leading-[1.65]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education teaser */}
        <section className="border-t border-line">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-16 md:gap-14 md:px-16 md:py-24">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeader eyebrow="EDUCATION" title="AI skills, taught in levels." />
              <div className="md:pb-1.5">
                <TextLink href="/education">SEE FULL CURRICULA</TextLink>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6">
              {tiers.map(({ level, name, body, highlight }) => (
                <div
                  key={level}
                  className={`flex flex-col gap-2 border p-6 md:gap-3.5 md:p-8 ${
                    highlight ? "border-orange" : "border-field"
                  }`}
                >
                  <div
                    className={`font-mono text-[11px] tracking-[0.12em] md:text-xs ${
                      highlight ? "text-orange" : "text-faint"
                    }`}
                  >
                    {level}
                  </div>
                  <h3 className="font-display text-[20px] font-semibold md:text-2xl">{name}</h3>
                  <p className="text-sm leading-relaxed text-sub md:text-[15px] md:leading-[1.65]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          title="Ready to work agent-first?"
          body="Book an intro call. We'll tell you honestly whether an agent-first approach fits your work — and where we'd start."
        />
      </main>
      <Footer />
    </div>
  );
}
