import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BrokenLinkGuard from "./components/BrokenLinkGuard";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "HeroWeb",
  description: "Jasa Pembuatan Website Murah",
  icons: {
    icon: "/favicon-hw.png",
    shortcut: "/favicon-hw.png",
    apple: "/favicon-hw.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <BrokenLinkGuard />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
