import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Тело: у Bajazzo-Th строчная кириллица выглядит как безликий светлый гротеск,
// поэтому для чтения — Golos Text (рисован под русский), Bajazzo остаётся
// для капсовых трекнутых подписей.
const golos = Golos_Text({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
  variable: "--font-golos",
  display: "swap",
});

const bigStem = localFont({
  src: "./fonts/BigStem-Regular.woff2",
  variable: "--font-big-stem",
  display: "swap",
});

const bajazzo = localFont({
  src: "./fonts/Bajazzo-Th.woff2",
  variable: "--font-bajazzo-th",
  display: "swap",
});

const description =
  "Q Venture Capital — разработка программного обеспечения в сфере финансовых технологий, трейдинг и венчурные инвестиции в Web3-проекты.";

export const metadata: Metadata = {
  title: {
    default: "Q Venture Capital",
    template: "%s — Q Venture Capital",
  },
  description,
  openGraph: {
    title: "Q Venture Capital",
    description,
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className={`${bigStem.variable} ${bajazzo.variable} ${golos.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
