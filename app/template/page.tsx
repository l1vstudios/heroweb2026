import type { Metadata } from "next";
import TemplateListContent from "./TemplateListContent";
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  title: "Template Website Gratis | HeroWeb",
  description:
    "Koleksi template website siap pakai — Next.js, React.js, Vue.js. Download source code gratis dan langsung deploy!",
  openGraph: {
    title: "Template Website Gratis — HeroWeb",
    description:
      "Koleksi template website siap pakai — Next.js, React.js, Vue.js. Download source code gratis dan langsung deploy!",
    url: `${BASE_URL}/template`,
    siteName: "HeroWeb",
    images: [
      {
        url: `${BASE_URL}/gambar/game.png`,
        width: 1200,
        height: 630,
        alt: "Template Website HeroWeb",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Template Website Gratis — HeroWeb",
    description:
      "Koleksi template website siap pakai. Download source code gratis dan langsung deploy!",
    images: [`${BASE_URL}/gambar/game.png`],
  },
};
export default function TemplatePage() {
  return <TemplateListContent />;
}
