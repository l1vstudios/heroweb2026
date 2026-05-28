import { items } from "@/app/lib/itemsData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ShoppingCart,
  CheckCircle2,
  Home,
  ChevronRight,
  Layers,
  Tag,
  LayoutGrid,
} from "lucide-react";
import ShareButton from "./ShareButton";
import FeedbackWidget from "./FeedbackWidget";
import Footer from "../../components/Footer/Page";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const techColors: Record<string, string> = {
  "Next.js": "bg-gray-900 text-white",
  "Vue.js": "bg-emerald-600 text-white",
  "React.js": "bg-sky-500 text-white",
};

function formatRupiah(value: number) {
  if (value <= 0) return "Gratis";

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((i) => i.slug === slug);
  if (!item) return { title: "Tidak Ditemukan | HeroWeb" };
  const ogImageUrl = `${BASE_URL}${item.img}`;
  return {
    title: `${item.title} | HeroWeb`,
    description: item.desc,
    openGraph: {
      title: `${item.title} — HeroWeb`,
      description: item.desc,
      url: `${BASE_URL}/template/${item.slug}`,
      siteName: "HeroWeb",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: item.title }],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title} — HeroWeb`,
      description: item.desc,
      images: [ogImageUrl],
    },
  };
}
export default async function TemplateDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((i) => i.slug === slug);
  if (!item) notFound();
  const related = items.filter((i) => i.slug !== slug).slice(0, 3);
  const techColor = techColors[item.tech] ?? "bg-blue-800 text-white";
  const isPaid = item.type === "Berbayar";
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="sticky top-0 z-50 bg-[#12378C] shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/gambar/logo5.png"
              alt="HeroWebsite"
              width={130}
              height={52}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Link
              href="/"
              className="hidden sm:flex items-center gap-1 text-gray-300 hover:text-white text-sm font-semibold transition shrink-0"
            >
              <Home size={13} />
              Home
            </Link>
            <ChevronRight
              size={13}
              className="text-gray-500 hidden sm:block shrink-0"
            />
            <Link
              href="/source"
              className="hidden sm:block text-gray-300 hover:text-white text-sm font-semibold transition shrink-0"
            >
              Template
            </Link>
            <ChevronRight
              size={13}
              className="text-gray-500 hidden sm:block shrink-0"
            />
            <span className="text-orange-400 font-bold text-sm truncate max-w-[120px] sm:max-w-[200px]">
              {item.title}
            </span>
          </div>
        </div>
        <div className="h-[3px] bg-linear-to-r from-orange-400 via-orange-500 to-orange-400" />
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="flex-1 min-w-0 flex flex-col gap-6">
            <nav className="flex items-center gap-1.5 text-sm text-gray-400 flex-wrap">
              <Link
                href="/"
                className="hover:text-[#12378C] transition font-medium"
              >
                Home
              </Link>
              <ChevronRight size={13} />
              <Link
                href="/source"
                className="hover:text-[#12378C] transition font-medium"
              >
                Template
              </Link>
              <ChevronRight size={13} />
              <span className="text-gray-900 font-bold truncate">
                {item.title}
              </span>
            </nav>

            <div className="bg-white rounded-[5px] shadow-md border border-gray-200 overflow-hidden">
              <div className="relative w-full aspect-video bg-gray-100">
                <Image
                  src={item.img}
                  alt={`Preview ${item.title}`}
                  fill
                  className="object-contain p-2 sm:p-4"
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>
            </div>

            <div className="bg-white rounded-[5px] shadow-md border border-gray-200 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-5 bg-orange-500 rounded-full" />
                <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  Tentang Template
                </h2>
              </div>
              <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="bg-white rounded-[5px] shadow-md border border-gray-200 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-5 bg-[#12378C] rounded-full" />
                <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  Fitur Utama
                </h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-[5px] px-4 py-3 hover:border-[#12378C]/30 hover:bg-blue-50/40 transition"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-700 font-semibold text-sm">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-[5px] shadow-md border border-gray-200 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-5 bg-orange-500 rounded-full" />
                <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  Info Teknis
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                  {
                    label: "Teknologi",
                    value: item.tech,
                    icon: <Tag size={16} className="text-[#12378C]" />,
                  },
                  {
                    label: "Kategori",
                    value: item.category,
                    icon: <LayoutGrid size={16} className="text-orange-500" />,
                  },
                  {
                    label: "Lisensi",
                    value: item.type,
                    icon: <CheckCircle2 size={16} className="text-green-500" />,
                  },
                  {
                    label: "Harga",
                    value: formatRupiah(item.price),
                    icon: (
                      <ShoppingCart size={16} className="text-orange-500" />
                    ),
                  },
                ].map(({ label, value, icon }) => (
                  <div
                    key={label}
                    className="bg-gray-50 border border-gray-100 rounded-[5px] p-4 text-center flex flex-col items-center gap-2"
                  >
                    <div className="bg-white p-2 rounded-[5px] shadow-sm">
                      {icon}
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {label}
                    </p>
                    <p className="text-sm font-bold text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
              <FeedbackWidget slug={item.slug} />
            </div>
            <div className="lg:hidden flex gap-3">
              <a
                href="/login"
                className={`flex-1 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition shadow-md ${
                  isPaid
                    ? "bg-orange-500 hover:bg-orange-600"
                    : "bg-[#12378C] hover:bg-[#0f2d7a]"
                }`}
              >
                {isPaid ? <ShoppingCart size={16} /> : <Download size={16} />}
                {isPaid ? "Beli Sekarang" : "Download"}
              </a>
              <ShareButton
                slug={item.slug}
                title={item.title}
                desc={item.desc}
                variant="light"
              />
            </div>
          </article>
          <div className="w-full lg:w-72 xl:w-80 shrink-0">
            <div className="lg:sticky lg:top-20 flex flex-col gap-5">
              <div className="bg-linear-to-br from-[#12378C] to-[#1e40af] rounded-[5px] p-6 text-white shadow-xl relative overflow-hidden">
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${techColor}`}
                    >
                      {item.tech}
                    </span>
                    <span
                      className={`text-white text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        isPaid ? "bg-orange-500" : "bg-green-500"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span className="bg-white/10 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                      {formatRupiah(item.price)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed mt-1 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                  <div className="border-t border-white/20" />
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Teknologi
                      </p>
                      <p className="text-sm font-bold text-white mt-0.5">
                        {item.tech}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Kategori
                      </p>
                      <p className="text-sm font-bold text-white mt-0.5">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-white/20" />
                  <a
                    href="/login"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition shadow-md hover:shadow-lg"
                  >
                    {isPaid ? (
                      <ShoppingCart size={16} />
                    ) : (
                      <Download size={16} />
                    )}
                    {isPaid ? "Beli Sekarang" : "Download Source Code"}
                  </a>
                  <ShareButton
                    slug={item.slug}
                    title={item.title}
                    desc={item.desc}
                    variant="dark"
                  />
                </div>
              </div>
              <div className="bg-white rounded-[5px] shadow-md border border-gray-200 p-5">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                  <div className="bg-[#12378C]/10 p-1.5 rounded-lg">
                    <Layers size={15} className="text-[#12378C]" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">
                    Template Lainnya
                  </h3>
                </div>
                <ul className="space-y-4">
                  {related.map((rel) => (
                    <li key={rel.slug}>
                      <Link
                        href={`/template/${rel.slug}`}
                        className="block group rounded-[5px] border border-gray-100 bg-gray-50 overflow-hidden hover:bg-white hover:shadow-md transition"
                      >
                        <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                          <Image
                            src={rel.img}
                            alt={rel.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 320px"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-sm font-bold text-gray-800 group-hover:text-[#12378C] transition line-clamp-2">
                            {rel.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {rel.tech} · {rel.badge}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/source"
                  className="mt-4 flex items-center justify-center gap-1.5 text-xs font-bold text-[#12378C] hover:text-orange-500 transition pt-3 border-t border-gray-100"
                >
                  Lihat Semua Template
                  <ChevronRight size={12} />
                </Link>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-[5px] p-5 text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  Butuh Website Custom?
                </h4>
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                  Tim HeroWeb siap membantu membuat website sesuai kebutuhan
                  Anda.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-md"
                >
                  Hubungi Kami <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
