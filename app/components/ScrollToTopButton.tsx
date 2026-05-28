"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`
        fixed bottom-6 right-6 p-3 rounded-full bg-orange-500 text-white
        shadow-lg transition-all z-50
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-0"}
      `}
    >
      <ArrowUp size={22} />
    </button>
  );
}
