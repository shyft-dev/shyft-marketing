import Image from "next/image";
import { ButtonLink } from "@/components/button-link";

export function CtaBand({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden bg-orange">
      <Image
        src="/mark-dark.png"
        alt=""
        width={900}
        height={1364}
        className="absolute -top-16 -right-20 w-[300px] opacity-10 md:-top-[140px] md:-right-[60px] md:w-[560px]"
      />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-6 py-16 md:flex-row md:items-center md:justify-between md:gap-12 md:px-16 md:py-24">
        <div className="flex flex-col gap-4 md:max-w-[760px]">
          <h2 className="font-display text-[30px] leading-[1.1] font-semibold text-coal md:text-[46px] md:leading-[1.08]">
            {title}
          </h2>
          <p className="text-[15px] leading-relaxed text-coal/75 md:text-[17px]">{body}</p>
        </div>
        <ButtonLink href="/contact" variant="coal" size="lg" className="self-start md:shrink-0 md:self-auto">
          BOOK AN INTRO CALL
        </ButtonLink>
      </div>
    </section>
  );
}
