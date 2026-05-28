"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FiX } from "react-icons/fi";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuLinks = [
    { name: "Home", target: "hero" },
    { name: "Promo", target: "promo" },
    { name: "Layanan Website", target: "roket" },
    { name: "Harga Website", target: "pricing" },
    { name: "FAQ", target: "faq" },
    { name: "Portfolio", target: "portfolio" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrolled(scrollTop > 10);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };
  return (
    <>
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-300
        ${scrolled ? "bg-[#12378C] shadow-lg shadow-black/20" : "bg-[#12378C]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            src="/gambar/logo5.png"
            alt="HeroWebsite Logo"
            width={170}
            height={80}
          />
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl hover:text-orange-400 transition"
          >
            <HiOutlineViewGrid />
          </button>
        </div>
        <div className="w-full h-[4px] bg-transparent">
          <div
            className="h-full bg-orange-400 transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] flex justify-end">
          <div className="w-72 bg-white h-full shadow-xl p-6 animate-slide-left flex flex-col gap-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-gray-600 hover:text-black text-3xl"
            >
              <FiX />
            </button>
            <nav className="flex flex-col gap-4 font-semibold text-gray-800 text-lg">
              {menuLinks.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleScrollTo(item.target)}
                  className="text-left hover:text-orange-500 transition"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes slide-left {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-left {
          animation: slide-left 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
