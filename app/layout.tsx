import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Мишагина Ольга Юрьевна — Репетитор по математике ОГЭ",
  description: "Профессиональная подготовка к ОГЭ по математике. 10 лет опыта, индивидуальный подход, онлайн и очно. Помогаю ученикам уверенно сдать экзамен.",
  keywords: ["репетитор по математике", "подготовка к ОГЭ", "математика ОГЭ", "репетитор ОГЭ", "онлайн репетитор"],
  openGraph: {
    title: "Мишагина Ольга Юрьевна — Репетитор по математике ОГЭ",
    description: "Профессиональная подготовка к ОГЭ по математике. 10 лет опыта, индивидуальный подход.",
    type: "website",
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
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
