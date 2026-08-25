import { Tri } from "@/components/tri";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-orange">
      <Tri size={12} className="hidden md:block" />
      <Tri size={10} className="md:hidden" />
      <div className="font-mono text-[11px] tracking-[0.14em] md:text-[13px] md:tracking-[0.16em]">
        {children}
      </div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-[28px] leading-[1.12] font-semibold md:text-[42px] md:leading-[1.1]">
        {title}
      </h2>
    </div>
  );
}
