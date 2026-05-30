"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { showUnavailableToast } from "@/app/lib/showUnavailableToast";
export default function Portfolio() {
  const handleDetailClick = () => {
    showUnavailableToast();
  };

  const portfolios = [
    {
      id: 1,
      title: "Digipedia",
      image: "/gambar/digipedias.png",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Smartpom BPOM",
      image: "/gambar/smartpom.png",
      category: "Web Development",
    },
    {
      id: 3,
      title: "BPOM Mobile",
      image: "/gambar/bpommobile.png",
      category: "Native Apps Mobile",
    },
    {
      id: 4,
      title: "Atensi BPOM",
      image: "/gambar/atensi.png",
      category: "Web Development",
    },
    {
      id: 5,
      title: "Asian Bulk Logistic K3",
      image: "/gambar/abl2.png",
      category: "Web Development",
    },
    {
      id: 6,
      title: "Eperformance BPOM",
      image: "/gambar/eperformance.png",
      category: "Web Development",
    },
    {
      id: 7,
      title: "Spimker BPOM",
      image: "/gambar/spimker.png",
      category: "Web Development",
    },
    {
      id: 8,
      title: "Ticketing Event Cakrakhan",
      image: "/gambar/festin.png",
      category: "Web Development",
    },
    {
      id: 9,
      title: "Automation Rest Api Generator",
      image: "/gambar/klarks.png",
      category: "Web Development",
    },
  ];
  return (
    <section
      className="w-full py-24 relative overflow-hidden"
      style={{ background: "#f8f9fc" }}
    >
      {}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-24 z-10"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 z-10"
        style={{
          background: "linear-gradient(to top, #ffffff 0%, transparent 100%)",
        }}
      />
      {}
      <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 opacity-[0.05]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#12378C"
            d="M47.1,-57.1C59.3,-46.2,66.6,-29.2,68.4,-12C70.2,5.3,66.5,22.8,57.1,36.4C47.7,50,32.5,59.7,15.5,64.5C-1.5,69.3,-20.4,69.1,-35.4,61.6C-50.4,54.1,-61.5,39.3,-66.3,22.8C-71.1,6.3,-69.6,-11.9,-62,-26.6C-54.5,-41.3,-40.9,-52.5,-26.5,-62.4C-12.1,-72.3,3.1,-80.9,17.1,-77.5C31.1,-74.1,34.9,-68,47.1,-57.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-72 h-72 opacity-[0.05]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#12378C"
            d="M44.5,-56.3C57.1,-45.9,66.5,-30.8,69.7,-14.3C72.9,2.2,69.9,20.1,61.1,34.1C52.3,48.1,37.7,58.2,21.3,63.9C4.9,69.6,-13.3,70.9,-28.8,64.5C-44.3,58.1,-57.1,44,-64.6,27.5C-72.1,11,-74.3,-7.9,-68.3,-24.2C-62.3,-40.5,-48.1,-54.2,-33.3,-63.9C-18.5,-73.6,-3.1,-79.3,10.3,-76.2C23.7,-73.1,31.9,-66.7,44.5,-56.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <style>{`
        .port-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
          box-shadow:
            0 2px 8px rgba(18,55,140,0.06),
            0 8px 28px rgba(18,55,140,0.08),
            0 0 0 1px rgba(18,55,140,0.06);
        }
        .port-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 8px 24px rgba(18,55,140,0.11),
            0 24px 48px rgba(18,55,140,0.13),
            0 0 0 1px rgba(18,55,140,0.09);
        }
        .port-img {
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .port-card:hover .port-img {
          transform: scale(1.05);
        }
        .port-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .port-card:hover .port-overlay {
          opacity: 1;
        }
        .cat-badge {
          transition: background 0.3s, color 0.3s;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 relative z-[1]">
        {}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#12378C] bg-[#e8eef9] px-3 py-1 rounded-[5px] mb-4">
            Portofolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c1633]">
            Kolaborasi Developer
          </h2>
          <p className="text-slate-500 mt-3 text-base max-w-lg mx-auto">
            Beberapa proyek terbaik yang telah kami kerjakan bersama klien kami
          </p>
        </div>
        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="port-card group cursor-pointer bg-white rounded-[5px] overflow-hidden"
            >
              {}
              <div
                className="relative overflow-hidden"
                style={{ height: "200px", background: "#f1f4fa" }}
              >
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  width={600}
                  height={400}
                  className="port-img object-contain w-full h-full p-3"
                />
                {}
                <div
                  className="port-overlay absolute inset-0 flex items-center justify-center"
                  style={{
                    background: "rgba(18,55,140,0.55)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <button
                    type="button"
                    onClick={handleDetailClick}
                    className="text-white text-sm font-semibold tracking-wide border border-white/60 px-4 py-2 rounded-[5px]"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
              {}
              <div className="px-5 py-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-[#0c1633] leading-snug group-hover:text-[#12378C] transition-colors duration-300">
                    {portfolio.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span
                      className="cat-badge inline-block text-[11px] font-semibold px-2.5 py-1 rounded-[5px]"
                      style={{
                        background: "#12378C",
                        color: "#ffffff",
                      }}
                    >
                      {portfolio.category}
                    </span>
                    <span className="inline-block rounded-[5px] bg-green-500 px-2.5 py-1 text-[11px] font-semibold text-white">
                      Publish
                    </span>
                  </div>
                </div>
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-[5px] flex items-center justify-center ml-3 transition-all duration-300 group-hover:bg-[#12378C]"
                  style={{ background: "#eef2fb" }}
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#12378C] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {}
        <div className="flex justify-center">
          <button
            type="button"
            data-coming-soon="true"
            className="group relative mt-12 flex items-center gap-3 px-10 py-4 rounded-[5px] font-bold text-base text-white shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              background: "#12378C",
              boxShadow: "0 8px 24px rgba(18,55,140,0.28)",
            }}
          >
            <span className="pointer-events-none absolute left-1/2 top-0 h-16 w-24 -translate-x-1/2 -translate-y-[72%] overflow-hidden opacity-0 transition-all duration-300 group-hover:-translate-y-[88%] group-hover:opacity-100">
              <svg
                viewBox="0 0 96 64"
                fill="none"
                className="h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M22 50C28 42 36 39 48 39C60 39 68 42 74 50"
                  fill="#ff8a1d"
                  stroke="#0c1633"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle
                  cx="48"
                  cy="27"
                  r="18"
                  fill="#ffd6a5"
                  stroke="#0c1633"
                  strokeWidth="3"
                />
                <path
                  d="M31 24C35 11 48 6 63 16C59 13 56 20 67 24C60 25 48 17 31 24Z"
                  fill="#0c1633"
                />
                <circle cx="41" cy="28" r="2.2" fill="#0c1633" />
                <circle cx="55" cy="28" r="2.2" fill="#0c1633" />
                <path
                  d="M42 38C46 41 51 41 55 38"
                  stroke="#0c1633"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M18 51C18 45 22 42 28 45"
                  stroke="#ffd6a5"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M78 51C78 45 74 42 68 45"
                  stroke="#ffd6a5"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M15 56H81"
                  stroke="#ffffff"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Lihat Semua Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
