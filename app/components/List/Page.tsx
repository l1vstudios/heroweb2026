"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  ShoppingCart,
  Globe,
  Smartphone,
  Package,
  Code2,
  ChevronDown,
  Share2,
  Check,
} from "lucide-react";
import { useState } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { items } from "@/app/lib/itemsData";
import type { TemplateItem } from "@/app/lib/itemsData";
const categories = [
  "Semua",
  "Laravel",
  "Next.js",
  "Python",
  "Gratis",
  "Berbayar",
  "Flutter",
  "React Native",
];
function formatRupiah(value: number) {
  if (value <= 0) return "Gratis";

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function ItemIcon({ item }: { item: TemplateItem }) {
  if (item.iconType === "Smartphone") {
    return <Smartphone className={item.iconColor} />;
  }
  if (item.iconType === "Package") {
    return <Package className={item.iconColor} />;
  }
  return <Globe className={item.iconColor} />;
}
export default function ListPage() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const filteredItems = items.filter((item) => {
    if (activeTab === "Semua") return true;
    return (
      item.category === activeTab ||
      item.tech === activeTab ||
      item.type === activeTab
    );
  });
  const handleSelectCategory = (cat: string) => {
    setActiveTab(cat);
    setIsDropdownOpen(false);
  };
  const handleShare = async (item: TemplateItem) => {
    const shareUrl = `${window.location.origin}/template/${item.slug}`;
    const shareData = {
      title: `${item.title} — HeroWeb`,
      text: item.desc,
      url: shareUrl,
    };
    try {
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare(shareData)
      ) {
        await navigator.share(shareData);
        return;
      }
    } catch {}
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedSlug(item.slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = shareUrl;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopiedSlug(item.slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-[100px] md:pt-10">
      <div className="max-w-6xl mx-auto">
        {}
        <div className="hidden md:flex justify-center mb-8">
          <div className="bg-white shadow-lg rounded-2xl px-4 py-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`
                  inline-flex items-center gap-2 mx-1 px-5 py-2 rounded-2xl border text-sm font-medium transition
                  ${
                    activeTab === cat
                      ? "bg-blue-800 border-blue-800 text-white shadow-md"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                <div className="p-1.5 bg-gray-100 rounded-full">
                  {cat === "Semua" ? (
                    <HiOutlineViewGrid size={16} className="text-blue-600" />
                  ) : (
                    <Code2 size={16} className="text-red-500" />
                  )}
                </div>
                {cat}
              </button>
            ))}
          </div>
        </div>
        {}
        <div className="md:hidden mb-8">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white shadow-lg rounded-2xl px-5 py-3 flex items-center justify-between border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-gray-100 rounded-full">
                  {activeTab === "Semua" ? (
                    <HiOutlineViewGrid size={16} className="text-blue-600" />
                  ) : (
                    <Code2 size={16} className="text-red-500" />
                  )}
                </div>
                <span className="font-medium text-gray-800">{activeTab}</span>
              </div>
              <ChevronDown
                className={`text-gray-600 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden z-10 max-h-80 overflow-y-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleSelectCategory(cat)}
                    className={`
                      w-full px-5 py-3 flex items-center gap-3 text-left transition
                      ${
                        activeTab === cat
                          ? "bg-blue-50 text-blue-800"
                          : "text-gray-700 hover:bg-gray-50"
                      }
                    `}
                  >
                    <div className="p-1.5 bg-gray-100 rounded-full">
                      {cat === "Semua" ? (
                        <HiOutlineViewGrid
                          size={16}
                          className="text-blue-600"
                        />
                      ) : (
                        <Code2 size={16} className="text-red-500" />
                      )}
                    </div>
                    <span className="font-medium">{cat}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredItems.length === 0 && (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <div className="w-full bg-white border border-gray-300 shadow-md rounded-xl p-10 text-center">
                <p className="text-gray-700 text-lg font-semibold">
                  Maaf, source code dengan kategori ini kosong.
                </p>
              </div>
            </div>
          )}
          {filteredItems.map((item, i) => {
            const isCopied = copiedSlug === item.slug;
            const isPaid = item.type === "Berbayar";
            return (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-xl transition overflow-hidden"
              >
                <Link
                  href={`/template/${item.slug}`}
                  className="relative block w-full h-48 group overflow-hidden"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <span
                    className={`absolute top-3 right-3 text-white text-xs px-3 py-1 rounded-full shadow ${
                      isPaid ? "bg-orange-500" : "bg-green-500"
                    }`}
                  >
                    {item.badge}
                  </span>
                </Link>
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="self-start px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full shadow">
                      {item.tech}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isPaid ? "text-orange-600" : "text-green-600"
                      }`}
                    >
                      {formatRupiah(item.price)}
                    </span>
                  </div>
                  <Link
                    href={`/template/${item.slug}`}
                    className="flex flex-col gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gray-100 rounded-full">
                        <ItemIcon item={item} />
                      </div>
                      <h2 className="font-semibold text-gray-800 text-lg group-hover:text-blue-800 transition">
                        {item.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                    <ul className="text-gray-600 text-sm list-disc ml-5">
                      {item.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </Link>
                  {}
                  <div className="mt-3 flex gap-2">
                    <a
                      href="/login"
                      className={`flex-1 text-white py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition ${
                        isPaid
                          ? "bg-orange-500 hover:bg-orange-600"
                          : "bg-blue-800 hover:bg-blue-900"
                      }`}
                    >
                      {isPaid ? (
                        <ShoppingCart className="w-5 h-5" />
                      ) : (
                        <Download className="w-5 h-5" />
                      )}
                      {isPaid ? "Beli Sekarang" : "Download"}
                    </a>
                    <button
                      onClick={() => handleShare(item)}
                      title="Bagikan URL"
                      className={`
                        flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border font-semibold text-sm transition
                        ${
                          isCopied
                            ? "bg-green-50 border-green-400 text-green-700"
                            : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                        }
                      `}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4" />
                          <span>Bagikan</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
