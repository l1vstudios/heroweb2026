"use client";
import { useState } from "react";
import { Share2, Check } from "lucide-react";
export default function ShareButton({
  slug,
  title,
  desc,
  variant = "dark",
}: {
  slug: string;
  title: string;
  desc: string;
  variant?: "dark" | "light";
}) {
  const [copied, setCopied] = useState(false);
  const handleShare = async () => {
    const url = `${window.location.origin}/template/${slug}`;
    const data = { title: `${title} — HeroWeb`, text: desc, url };
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
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  if (variant === "light") {
    return (
      <button
        onClick={handleShare}
        className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border font-bold text-sm transition
          ${
            copied
              ? "bg-green-50 border-green-400 text-green-700"
              : "bg-white border-gray-300 text-gray-700 hover:border-[#12378C] hover:text-[#12378C]"
          }`}
      >
        {copied ? (
          <>
            <Check size={15} />
            Tersalin!
          </>
        ) : (
          <>
            <Share2 size={15} />
            Bagikan
          </>
        )}
      </button>
    );
  }
  return (
    <button
      onClick={handleShare}
      className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border font-bold text-sm transition
        ${
          copied
            ? "bg-green-500/20 border-green-400 text-green-300"
            : "bg-white/10 border-white/30 text-white hover:bg-white/20"
        }`}
    >
      {copied ? (
        <>
          <Check size={15} />
          Tersalin!
        </>
      ) : (
        <>
          <Share2 size={15} />
          Bagikan URL
        </>
      )}
    </button>
  );
}
