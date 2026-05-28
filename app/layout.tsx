import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "./components/ScrollToTopButton";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "HeroWeb",
  description: "Jasa Pembuatan Website Murah",
  icons: {
    icon: "https://api.iconify.design/mdi/web.svg?color=white&v=2",
    shortcut: "https://api.iconify.design/mdi/web.svg?color=white&v=2",
    apple: "https://api.iconify.design/mdi/web.svg?color=white&v=2",
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
        <ScrollToTopButton />
      </body>
    </html>
  );
}
