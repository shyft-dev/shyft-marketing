import Image from "next/image";
import Link from "next/link";

const pages = [
  { href: "/consulting", label: "Consulting" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export function Footer({ bordered = false }: { bordered?: boolean }) {
  return (
    <footer className={bordered ? "border-t border-line" : undefined}>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 pt-14 pb-8 md:gap-12 md:px-16 md:pt-[72px] md:pb-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-16">
          <div className="flex max-w-[360px] flex-col gap-4 md:gap-5">
            <Link href="/" aria-label="Shyft home" className="self-start">
              <Image
                src="/logo-h-white.png"
                alt="Shyft"
                width={800}
                height={222}
                className="block h-[22px] w-auto md:h-[26px]"
              />
            </Link>
            <div className="text-[13px] leading-relaxed text-faint md:text-sm">
              Agent-first consulting &amp; AI education.
            </div>
          </div>
          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-3 md:gap-3.5">
              <div className="font-mono text-[11px] tracking-[0.16em] text-faint">PAGES</div>
              {pages.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[13px] text-sub transition-colors hover:text-ink md:text-sm"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 md:gap-3.5">
              <div className="font-mono text-[11px] tracking-[0.16em] text-faint">CONTACT</div>
              <a
                href="mailto:trenton@shyft.dev"
                className="font-mono text-[13px] text-orange transition-colors hover:text-orange-soft md:text-sm"
              >
                trenton@shyft.dev
              </a>
              <div className="text-[13px] text-sub md:text-sm">shyft.dev</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t border-line pt-5 md:pt-6">
          <div className="font-mono text-[11px] text-faint md:text-xs">&copy; 2026 SHYFT</div>
          <div className="font-mono text-[11px] text-faint md:text-xs">SHYFT.DEV</div>
        </div>
      </div>
    </footer>
  );
}
