import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Beyond The Trainer | Anatomy-Tailored Mechanics. Data-Driven Biochemistry.",
  description:
    "Moving past conventional personal training. Clinical science, quantitative data analytics, and biochemical optimization for ultimate hypertrophy.",
  keywords: [
    "hypertrophy coaching",
    "biomechanics",
    "bloodwork optimization",
    "evidence-based training",
    "sports science",
    "biochemistry",
    "data-driven fitness",
  ],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
