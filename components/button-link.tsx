import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

const variants = {
  orange: "bg-orange text-coal hover:bg-orange-soft",
  coal: "bg-coal text-ink hover:text-orange-soft",
} as const;

const arrowColor = {
  orange: "text-coal",
  coal: "text-orange",
} as const;

export function ButtonLink({
  href,
  variant = "orange",
  size = "md",
  children,
  className = "",
}: {
  href: string;
  variant?: keyof typeof variants;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}) {
  const sizing =
    size === "sm"
      ? "h-11 px-6 clip-corner-12"
      : size === "lg"
        ? "h-14 px-8 clip-corner-14"
        : "h-[52px] px-7 clip-corner-14";
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 font-display text-[14px] font-semibold tracking-[0.05em] transition-colors md:text-[15px] ${sizing} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowIcon className={arrowColor[variant]} />
    </Link>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="group inline-flex h-11 items-center gap-2">
      <span className="border-b border-orange pb-[3px] font-mono text-[12px] tracking-[0.08em] text-ink transition-colors group-hover:text-orange-soft md:text-[13px]">
        {children}
      </span>
      <ArrowIcon size={14} className="text-orange" />
    </Link>
  );
}
