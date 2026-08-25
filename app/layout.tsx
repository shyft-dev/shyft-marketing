import type { Metadata, Viewport } from "next";
import { Archivo, Chakra_Petch, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shyft — Agent-first consulting & AI education",
    template: "%s — Shyft",
  },
  description:
    "Shyft is an agent-first consultancy. We design and ship agentic systems that carry real work — then train your people to operate and extend them, from first prompt to full orchestration.",
};

export const viewport: Viewport = {
  themeColor: "#0d0b09",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${chakra.variable} ${archivo.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
