"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
const words = ["Website", "Aplikasi Mobile"];
export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (subIndex === words[index].length + 1 && !reverse) {
      timeout = setTimeout(() => setReverse(true), 800);
    } else if (subIndex === 0 && reverse) {
      timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 60);
    } else {
      timeout = setTimeout(
        () => setSubIndex((prev) => prev + (reverse ? -1 : 1)),
        reverse ? 60 : 120,
      );
    }
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);
  return (
    <section className="relative w-full text-white overflow-visible bg-[#12378C] pb-44 sm:pb-48 pt-20 sm:pt-24">
      <div
        className="absolute bottom-0 left-0 w-full h-32 sm:h-64 bg-white z-10"
        style={{ clipPath: "ellipse(100% 45% at 50% 100%)" }}
      />
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-4 sm:gap-6">
        <h1 className="relative inline-block text-3xl sm:text-5xl font-bold leading-snug">
          Repository Project
          <svg
            className="absolute left-1/2 -translate-x-1/2 -bottom-4 sm:-bottom-5 w-[220px] sm:w-[320px] h-5 sm:h-6"
            viewBox="0 0 320 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              id="scribble-main-path"
              d="M8 14C36 5 72 20 102 12C132 4 166 18 196 12C226 6 256 18 286 10C300 7 308 8 312 9"
              stroke="#F97316"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="420"
              strokeDashoffset="420"
            >
              <animate
                id="scribble-main"
                attributeName="stroke-dashoffset"
                values="420;0;0"
                keyTimes="0;0.3;1"
                dur="3.4s"
                begin="0s"
                repeatCount="indefinite"
              />
            </path>
            <path
              id="scribble-second-path"
              d="M12 18C42 10 76 22 108 16C142 10 176 20 208 15C238 10 268 20 300 13"
              stroke="#FB923C"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
              strokeDasharray="360"
              strokeDashoffset="360"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="360;0;0"
                keyTimes="0;0.3;1"
                dur="3.4s"
                begin="0.18s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </h1>
        <p className="max-w-2xl text-sm sm:text-lg text-gray-200">
          Download Aplikasi Siap Pakai
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4">
          <button
            onClick={() => window.history.back()}
            className="
              shimmer-btn relative overflow-hidden group
              flex items-center gap-2 bg-orange-500 hover:bg-orange-600
              text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow transition
            "
          >
            <span className="relative z-10 flex items-center gap-2">
              <ChevronLeft className="text-xl" />
              Kembali Ke Halaman Utama
            </span>
            <span
              className="
                pointer-events-none absolute inset-0
                bg-gradient-to-r from-transparent via-white/50 to-transparent
                -translate-x-full opacity-0
                group-hover:opacity-100 group-hover:translate-x-full
                transition duration-700 ease-out
              "
            />
          </button>
        </div>
      </div>
      <div className="absolute left-0 right-0 mx-auto max-w-6xl px-4 sm:px-6 -bottom-20 sm:-bottom-3 z-30">
        <div className="bg-white shadow-xl rounded-2xl py-6 sm:py-10 px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { img: "/gambar/layanan.svg", label: "Website Profil Perusahaan" },
            { img: "/gambar/eccomerce.svg", label: "Toko Online / eCommerce" },
            { img: "/gambar/blog.svg", label: "Blog Pribadi / Personal" },
            { img: "/gambar/donasi.svg", label: "Website Donasi Online" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <Image
                src={item.img}
                alt={item.label}
                width={60}
                height={60}
                className="sm:w-[70px]"
              />
              <p className="text-gray-800 font-semibold text-xs sm:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
