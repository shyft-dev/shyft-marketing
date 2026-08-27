"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/button-link";

const links = [
  { href: "/consulting", label: "CONSULTING" },
  { href: "/education", label: "EDUCATION" },
  { href: "/contact", label: "CONTACT" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 md:h-[84px] md:px-16">
        <Link href="/" aria-label="Shyft home" onClick={() => setOpen(false)}>
          <Image
            src="/logo-h-white.png"
            alt="Shyft"
            width={800}
            height={222}
            priority
            className="block h-[22px] w-auto md:h-[30px]"
          />
        </Link>

        <nav className="hidden items-center gap-11 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`border-b pb-0.5 font-mono text-[13px] tracking-[0.1em] transition-colors ${
                pathname === href
                  ? "border-orange text-orange"
                  : "border-transparent text-sub hover:border-ink hover:text-ink focus-visible:border-ink focus-visible:text-ink"
              }`}
            >
              {label}
            </Link>
          ))}
          <ButtonLink href="/contact" size="sm" variant="orange">
            BOOK AN INTRO CALL
          </ButtonLink>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center md:hidden"
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
            {open ? (
              <path d="M14 14 L30 30 M30 14 L14 30" stroke="#F2EDE6" strokeWidth="2" />
            ) : (
              <path d="M12 18 H32 M12 26 H32" stroke="#F2EDE6" strokeWidth="2" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`flex h-11 items-center font-mono text-[13px] tracking-[0.1em] ${
                pathname === href ? "text-orange" : "text-sub"
              }`}
            >
              {label}
            </Link>
          ))}
          <ButtonLink href="/contact" size="sm" variant="orange" className="mt-3 self-start">
            BOOK AN INTRO CALL
          </ButtonLink>
        </nav>
      ) : null}
    </header>
  );
}
