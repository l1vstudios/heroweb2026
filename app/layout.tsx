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
    icon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=64&h=64&q=80",
    shortcut:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=64&h=64&q=80",
    apple:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=180&h=180&q=80",
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
