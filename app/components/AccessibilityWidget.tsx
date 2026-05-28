"use client";
import { useState } from "react";
import {
  FaWheelchair,
  FaSearchPlus,
  FaSearchMinus,
  FaUnderline,
  FaRedo,
} from "react-icons/fa";
import {
  MdOutlineColorLens,
  MdOutlineContrast,
  MdOutlineWbSunny,
} from "react-icons/md";
import { BsEye } from "react-icons/bs";
export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const toggleClass = (cls: string) => {
    if (typeof window !== "undefined") {
      document.body.classList.toggle(cls);
    }
  };
  const resetAll = () => {
    if (typeof window !== "undefined") {
      document.body.className = "";
    }
  };
  return (
    <>
      {}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-1/3 right-4 z-50 bg-blue-600 text-white p-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
      >
        <FaWheelchair className="text-2xl" />
      </button>
      {}
      {open && (
        <div
          className="
            fixed top-1/4 right-20 z-50 bg-white shadow-2xl rounded-2xl
            p-6 w-64 border border-gray-200 animate-fadeIn
          "
        >
          <h2 className="font-bold text-lg mb-4">Sarana</h2>
          <div className="flex flex-col gap-3">
            <button
              className="acc-btn"
              onClick={() => toggleClass("acc-zoom-in")}
            >
              <FaSearchPlus /> Perbesar Teks
            </button>
            <button
              className="acc-btn"
              onClick={() => toggleClass("acc-zoom-out")}
            >
              <FaSearchMinus /> Perkecil Teks
            </button>
            <button
              className="acc-btn"
              onClick={() => toggleClass("acc-grayscale")}
            >
              <MdOutlineContrast /> Skala Abu-abu
            </button>
            <button
              className="acc-btn"
              onClick={() => toggleClass("acc-invert")}
            >
              <MdOutlineColorLens /> Warna
            </button>
            <button className="acc-btn" onClick={() => toggleClass("acc-blur")}>
              <BsEye /> Klise
            </button>
            <button
              className="acc-btn"
              onClick={() => toggleClass("acc-bright")}
            >
              <MdOutlineWbSunny /> Penerangan
            </button>
            <button
              className="acc-btn"
              onClick={() => toggleClass("acc-underline")}
            >
              <FaUnderline /> Garis Bawah Tautan
            </button>
            <button className="acc-btn" onClick={() => toggleClass("acc-bold")}>
              <span className="font-semibold">T Pertegas Teks</span>
            </button>
            <button className="acc-btn text-red-600" onClick={resetAll}>
              <FaRedo /> Atur Ulang
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        .acc-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          border-radius: 8px;
          transition: 0.2s;
        }
        .acc-btn:hover {
          background: #f3f3f3;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </>
  );
}
