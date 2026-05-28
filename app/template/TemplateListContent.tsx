"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Download,
  ShoppingCart,
  Share2,
  Check,
  Globe,
  Smartphone,
  Package,
  Home,
  ChevronRight,
  Tag,
  Folder,
  TrendingUp,
  Layers,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";
import { items } from "@/app/lib/itemsData";
import type { TemplateItem } from "@/app/lib/itemsData";
import Footer from "../components/Footer/Page";
function formatRupiah(value: number) {
  if (value <= 0) return "Gratis";

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function ItemIcon({ item, size = 18 }: { item: TemplateItem; size?: number }) {
  if (item.iconType === "Smartphone")
    return <Smartphone size={size} className={item.iconColor} />;
  if (item.iconType === "Package")
    return <Package size={size} className={item.iconColor} />;
  return <Globe size={size} className={item.iconColor} />;
}
const FILTERS = [
  { label: "Semua", key: "Semua" },
  { label: "Next.js", key: "Next.js" },
  { label: "Vue.js", key: "Vue.js" },
  { label: "React.js", key: "React.js" },
  { label: "Landing Page", key: "Landing Page" },
  { label: "CRUD", key: "CRUD" },
];
function getCount(key: string) {
  if (key === "Semua") return items.length;
  return items.filter(
    (i) => i.tech === key || i.category === key || i.type === key,
  ).length;
}
const techColors: Record<string, string> = {
  "Next.js": "bg-gray-900 text-white",
  "Vue.js": "bg-emerald-600 text-white",
  "React.js": "bg-sky-500 text-white",
};
async function doShare(item: TemplateItem, onCopied: (slug: string) => void) {
  const url = `${window.location.origin}/template/${item.slug}`;
  const data = { title: `${item.title} — HeroWeb`, text: item.desc, url };
  try {
    if (navigator.share && navigator.canShare?.(data)) {
      await navigator.share(data);
      return;
    }
  } catch {}
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    const el = document.createElement("textarea");
    el.value = url;
    Object.assign(el.style, { position: "fixed", opacity: "0" });
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }
  onCopied(item.slug);
}
function FeaturedCard({
  item,
  isCopied,
  onShare,
}: {
  item: TemplateItem;
  isCopied: boolean;
  onShare: () => void;
}) {
  const isPaid = item.type === "Berbayar";

  return (
    <article className="relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group">
      <div className="flex flex-col md:flex-row">
        <Link
          href={`/template/${item.slug}`}
          className="relative md:w-[45%] h-56 md:h-auto shrink-0 block overflow-hidden"
        >
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/20 hidden md:block" />
          <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-orange-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
            <TrendingUp size={11} />
            UNGGULAN
          </div>
          <span
            className={`absolute top-4 right-4 text-white text-xs px-3 py-1 rounded-full shadow-md font-bold ${
              isPaid ? "bg-orange-500" : "bg-green-500"
            }`}
          >
            {item.badge}
          </span>
        </Link>
        <div className="flex flex-col gap-4 p-6 md:p-8 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                techColors[item.tech] ?? "bg-blue-800 text-white"
              }`}
            >
              {item.tech}
            </span>
            <span className="text-[11px] text-gray-500 font-semibold bg-gray-100 px-2.5 py-1 rounded-full">
              {item.category}
            </span>
            <span
              className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                isPaid
                  ? "bg-orange-100 text-orange-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {formatRupiah(item.price)}
            </span>
          </div>
          <div>
            <Link href={`/template/${item.slug}`}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 hover:text-[#12378C] transition leading-snug">
                {item.title}
              </h2>
            </Link>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed line-clamp-3">
              {item.desc}
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-y-1.5 gap-x-3">
            {item.features.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-1.5 text-xs text-gray-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-100 pt-4 flex gap-2 flex-wrap mt-auto">
            <a
              href="/login"
              className={`flex-1 min-w-[110px] text-white py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition shadow-md hover:shadow-lg ${
                isPaid
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-[#12378C] hover:bg-[#0f2d7a]"
              }`}
            >
              {isPaid ? <ShoppingCart size={15} /> : <Download size={15} />}
              {isPaid ? "Beli Sekarang" : "Download"}
            </a>
            <button
              onClick={onShare}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border font-bold text-sm transition
                ${
                  isCopied
                    ? "bg-green-50 border-green-400 text-green-700"
                    : "bg-white border-gray-300 text-gray-700 hover:border-[#12378C] hover:text-[#12378C]"
                }`}
            >
              {isCopied ? (
                <>
                  <Check size={14} />
                  Tersalin!
                </>
              ) : (
                <>
                  <Share2 size={14} />
                  Bagikan
                </>
              )}
            </button>
            <Link
              href={`/template/${item.slug}`}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 font-bold text-sm transition"
            >
              Detail <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
function RegularCard({
  item,
  isCopied,
  onShare,
}: {
  item: TemplateItem;
  isCopied: boolean;
  onShare: () => void;
}) {
  const isPaid = item.type === "Berbayar";

  return (
    <article className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col group">
      <Link
        href={`/template/${item.slug}`}
        className="relative block h-44 shrink-0 overflow-hidden"
      >
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className={`absolute top-3 right-3 text-white text-[11px] px-2.5 py-1 rounded-full shadow-md font-bold ${
            isPaid ? "bg-orange-500" : "bg-green-500"
          }`}
        >
          {item.badge}
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-black/25 to-transparent" />
      </Link>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              techColors[item.tech] ?? "bg-blue-800 text-white"
            }`}
          >
            {item.tech}
          </span>
          <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full font-semibold">
            {item.category}
          </span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              isPaid
                ? "bg-orange-100 text-orange-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {formatRupiah(item.price)}
          </span>
          <div className="ml-auto bg-gray-100 p-1.5 rounded-full">
            <ItemIcon item={item} size={12} />
          </div>
        </div>
        <Link href={`/template/${item.slug}`}>
          <h3 className="font-bold text-gray-900 text-[15px] leading-snug hover:text-[#12378C] transition line-clamp-2">
            {item.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">
          {item.desc}
        </p>
        <ul className="space-y-1">
          {item.features.slice(0, 3).map((f, i) => (
            <li
              key={i}
              className="flex items-center gap-1.5 text-[11px] text-gray-600"
            >
              <span className="w-1 h-1 rounded-full bg-orange-400 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-100 pt-3 mt-auto flex gap-2">
          <a
            href="/login"
            className={`flex-1 text-white py-2 rounded-xl flex items-center justify-center gap-1.5 font-bold text-xs transition shadow hover:shadow-md ${
              isPaid
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-[#12378C] hover:bg-[#0f2d7a]"
            }`}
          >
            {isPaid ? <ShoppingCart size={12} /> : <Download size={12} />}
            {isPaid ? "Beli" : "Download"}
          </a>
          <button
            onClick={onShare}
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-xl border font-bold text-xs transition
              ${
                isCopied
                  ? "bg-green-50 border-green-400 text-green-700"
                  : "bg-white border-gray-300 text-gray-600 hover:border-[#12378C] hover:text-[#12378C]"
              }`}
          >
            {isCopied ? (
              <>
                <Check size={11} />
                Tersalin!
              </>
            ) : (
              <>
                <Share2 size={11} />
                Bagikan
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
function Sidebar({
  activeFilter,
  onFilter,
}: {
  activeFilter: string;
  onFilter: (f: string) => void;
}) {
  const categoryItems = [
    { label: "Semua", key: "Semua" },
    { label: "Landing Page", key: "Landing Page" },
    { label: "CRUD", key: "CRUD" },
  ];
  const techItems = [
    { label: "Next.js", key: "Next.js" },
    { label: "Vue.js", key: "Vue.js" },
    { label: "React.js", key: "React.js" },
  ];
  return (
    <aside className="flex flex-col gap-5">
      <div className="bg-linear-to-br from-[#12378C] to-[#1e40af] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-orange-400/20" />
        <div className="relative flex items-center gap-3 mb-3">
          <div className="bg-orange-400 p-2 rounded-xl shadow-md">
            <Layers size={18} className="text-white" />
          </div>
          <h3 className="font-bold text-base leading-tight">
            Repositori
            <br />
            <span className="text-orange-300">HeroWeb</span>
          </h3>
        </div>
        <p className="relative text-gray-200 text-xs leading-relaxed mb-4">
          Kumpulan source code website siap pakai. Bebas diunduh & dimodifikasi
          sesuai kebutuhan project Anda.
        </p>
        <div className="relative flex gap-2">
          <Link
            href="/source"
            className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3 py-2.5 rounded-xl transition shadow-md"
          >
            Source Code
          </Link>
          <Link
            href="/"
            className="flex-1 text-center bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-2.5 rounded-xl border border-white/20 transition"
          >
            Beranda
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-5">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
          <div className="bg-[#12378C]/10 p-1.5 rounded-lg">
            <Folder size={15} className="text-[#12378C]" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">Kategori</h3>
        </div>
        <ul className="space-y-1.5">
          {categoryItems.map(({ label, key }) => (
            <li key={key}>
              <button
                onClick={() => onFilter(key)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition
                  ${
                    activeFilter === key
                      ? "bg-[#12378C] text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
              >
                <span>{label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    activeFilter === key
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {getCount(key)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-5">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
          <div className="bg-orange-100 p-1.5 rounded-lg">
            <Tag size={15} className="text-orange-500" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">Teknologi</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {techItems.map(({ label, key }) => (
            <button
              key={key}
              onClick={() => onFilter(key)}
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl transition border
                ${
                  activeFilter === key
                    ? "bg-orange-500 text-white border-orange-500 shadow-md"
                    : `${techColors[key] ?? "bg-gray-100 text-gray-700"} border-transparent opacity-80 hover:opacity-100`
                }`}
            >
              {label}
              <span className="text-[10px] opacity-75">({getCount(key)})</span>
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-5">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
          <div className="bg-green-100 p-1.5 rounded-lg">
            <TrendingUp size={15} className="text-green-600" />
          </div>
          <h3 className="font-bold text-gray-900 text-sm">Template Populer</h3>
        </div>
        <ul className="space-y-3">
          {items.slice(0, 5).map((item, idx) => (
            <li key={item.slug}>
              <Link
                href={`/template/${item.slug}`}
                className="flex items-center gap-3 group"
              >
                <span
                  className={`text-sm font-bold w-5 text-center shrink-0 ${
                    idx === 0
                      ? "text-orange-500"
                      : idx === 1
                        ? "text-gray-400"
                        : idx === 2
                          ? "text-amber-600"
                          : "text-gray-300"
                  }`}
                >
                  {idx + 1}
                </span>
                <div className="relative w-12 h-9 rounded-lg overflow-hidden shrink-0 border border-gray-100 shadow-sm">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-gray-800 group-hover:text-[#12378C] transition line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {item.tech} · {item.badge}
                  </p>
                </div>
                <ArrowRight
                  size={12}
                  className="text-gray-300 group-hover:text-[#12378C] transition shrink-0"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 text-center">
        <div className="text-2xl mb-2">🚀</div>
        <h4 className="font-bold text-gray-900 text-sm mb-1">
          Butuh Website Custom?
        </h4>
        <p className="text-gray-500 text-xs mb-4 leading-relaxed">
          Tim HeroWeb siap membantu membuat website sesuai kebutuhan Anda.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-md"
        >
          Hubungi Kami <ArrowRight size={12} />
        </Link>
      </div>
    </aside>
  );
}
export default function TemplateListContent() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const filtered = items.filter((item) => {
    if (activeFilter === "Semua") return true;
    return (
      item.tech === activeFilter ||
      item.category === activeFilter ||
      item.type === activeFilter
    );
  });
  const featured = filtered[0] ?? null;
  const rest = filtered.slice(1);
  const handleCopied = (slug: string) => {
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="sticky top-0 z-50 bg-[#12378C] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/gambar/logo5.png"
              alt="HeroWebsite"
              width={130}
              height={52}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="hidden sm:flex items-center gap-1 text-gray-300 hover:text-white text-sm font-semibold transition"
            >
              <Home size={13} />
              Home
            </Link>
            <ChevronRight size={13} className="text-gray-500 hidden sm:block" />
            <Link
              href="/source"
              className="hidden sm:block text-gray-300 hover:text-white text-sm font-semibold transition"
            >
              Source
            </Link>
            <ChevronRight size={13} className="text-gray-500 hidden sm:block" />
            <span className="text-orange-400 font-bold text-sm">Template</span>
            <div className="hidden md:flex items-center gap-2 ml-3 pl-3 border-l border-white/20">
              <Link
                href="/source"
                className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-md"
              >
                Source Code
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[3px] bg-linear-to-r from-orange-400 via-orange-500 to-orange-400" />
      </nav>
      <section className="relative bg-[#12378C] text-white pt-12 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-56 h-56 rounded-full bg-orange-500/10 -translate-x-1/3 translate-y-1/3" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-white/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
            <LayoutGrid size={12} />
            Repositori Template Gratis
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Template{" "}
            <span className="text-orange-400 relative">
              Website
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-orange-400/40 rounded-full" />
            </span>
            <span className="block sm:inline"> Siap Pakai</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-lg text-gray-200">
            Koleksi source code website berkualitas — download, modifikasi, dan
            langsung deploy tanpa konfigurasi rumit!
          </p>
          <div className="mt-8 inline-flex items-center gap-0 bg-white/10 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            {[
              { value: `${items.length}`, label: "Template" },
              { value: "3", label: "Teknologi" },
              { value: "100%", label: "Gratis" },
            ].map((s, i) => (
              <div
                key={i}
                className={`px-6 py-4 text-center ${i < 2 ? "border-r border-white/20" : ""}`}
              >
                <p className="text-2xl font-bold text-orange-400">{s.value}</p>
                <p className="text-[11px] text-gray-300 font-semibold mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-8 bg-gray-50"
          style={{ clipPath: "ellipse(100% 100% at 50% 100%)" }}
        />
      </section>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 px-4 py-3 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-2 shrink-0">
              Filter:
            </span>
            {FILTERS.map(({ label, key }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition
                  ${
                    activeFilter === key
                      ? "bg-[#12378C] text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {label}
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                    activeFilter === key
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {getCount(key)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Template tidak ditemukan
            </h3>
            <p className="text-gray-500 text-sm">
              Coba pilih filter lain untuk melihat template.
            </p>
            <button
              onClick={() => setActiveFilter("Semua")}
              className="mt-6 bg-[#12378C] hover:bg-[#0f2d7a] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition shadow-md"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 min-w-0 flex flex-col gap-8">
              {featured && (
                <>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-5 bg-orange-500 rounded-full" />
                    <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                      Template Unggulan
                    </h2>
                  </div>
                  <FeaturedCard
                    item={featured}
                    isCopied={copiedSlug === featured.slug}
                    onShare={() => doShare(featured, handleCopied)}
                  />
                </>
              )}
              {rest.length > 0 && (
                <>
                  <div className="flex items-center gap-3">
                    <span className="w-1 h-5 bg-[#12378C] rounded-full" />
                    <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                      Semua Template
                    </h2>
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-[11px] text-gray-400 font-bold bg-gray-100 px-2.5 py-1 rounded-full">
                      {rest.length} template
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {rest.map((item) => (
                      <RegularCard
                        key={item.slug}
                        item={item}
                        isCopied={copiedSlug === item.slug}
                        onShare={() => doShare(item, handleCopied)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="w-full lg:w-72 xl:w-80 shrink-0">
              <div className="lg:sticky lg:top-20 space-y-5">
                <Sidebar
                  activeFilter={activeFilter}
                  onFilter={setActiveFilter}
                />
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
