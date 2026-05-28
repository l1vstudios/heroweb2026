"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  {
    ssr: false,
    loading: () => <div className="w-full h-full" />,
  },
);
const steps = [
  {
    id: 1,
    number: "01",
    title: "Order Layanan",
    description:
      "Silahkan order paket jasa pembuatan website yang sesuai dengan kebutuhan bisnis Anda. Jika anda kesulitan untuk memilih paket yang sesuai, silahkan hubungi kami. Kami akan menjadi konsultan terbaik Anda.",
  },
  {
    id: 2,
    number: "02",
    title: "Perencanaan Desain Website",
    description:
      "Kami membuat desain website yang sesuai dengan identitas brand dan kebutuhan perusahaan Anda.",
  },
  {
    id: 3,
    number: "03",
    title: "Pengiriman Konten Website",
    description:
      "Anda mengirimkan teks, gambar, logo, dan materi lainnya untuk website Anda kepada kami.",
  },
  {
    id: 4,
    number: "04",
    title: "Website Publish",
    description:
      "Website Anda dipublikasikan dan siap digunakan. Maintenance dan dukungan teknis tersedia.",
  },
];
export default function Faq() {
  const [open, setOpen] = useState(1);
  const toggle = (i: number) => {
    setOpen((current) => (current === i ? -1 : i));
  };
  return (
    <section className="w-full py-24 bg-[#f5f7fb] relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 opacity-[0.06]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#12378C"
            d="M47.1,-57.1C59.3,-46.2,66.6,-29.2,68.4,-12C70.2,5.3,66.5,22.8,57.1,36.4C47.7,50,32.5,59.7,15.5,64.5C-1.5,69.3,-20.4,69.1,-35.4,61.6C-50.4,54.1,-61.5,39.3,-66.3,22.8C-71.1,6.3,-69.6,-11.9,-62,-26.6C-54.5,-41.3,-40.9,-52.5,-26.5,-62.4C-12.1,-72.3,3.1,-80.9,17.1,-77.5C31.1,-74.1,34.9,-68,47.1,-57.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 opacity-[0.06]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#12378C"
            d="M44.5,-56.3C57.1,-45.9,66.5,-30.8,69.7,-14.3C72.9,2.2,69.9,20.1,61.1,34.1C52.3,48.1,37.7,58.2,21.3,63.9C4.9,69.6,-13.3,70.9,-28.8,64.5C-44.3,58.1,-57.1,44,-64.6,27.5C-72.1,11,-74.3,-7.9,-68.3,-24.2C-62.3,-40.5,-48.1,-54.2,-33.3,-63.9C-18.5,-73.6,-3.1,-79.3,10.3,-76.2C23.7,-73.1,31.9,-66.7,44.5,-56.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <style>{`
        .step-card {
          transition: box-shadow 0.35s ease, background 0.35s ease;
          will-change: box-shadow;
        }
        .step-card.active {
          box-shadow: 0 4px 16px rgba(18,55,140,0.10), 0 16px 48px rgba(18,55,140,0.13), 0 0 0 1.5px rgba(18,55,140,0.12);
        }
        .step-card:not(.active):hover {
          box-shadow: 0 2px 12px rgba(18,55,140,0.07);
        }
        .number-badge {
          transition: background 0.3s, color 0.3s, transform 0.3s;
        }
        .step-card.active .number-badge {
          background: #12378C;
          color: white;
          transform: scale(1.08);
          box-shadow: 0 4px 16px rgba(18,55,140,0.30);
        }
        .step-desc-wrap {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transform: translateY(-4px);
          transition:
            grid-template-rows 0.38s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.28s ease,
            transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: grid-template-rows, opacity, transform;
        }
        .step-desc-wrap.open {
          grid-template-rows: 1fr;
          opacity: 1;
          transform: translateY(0);
        }
        .step-desc-inner {
          overflow: hidden;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="relative flex items-start justify-center pt-6 lg:pt-10">
          <div className="absolute top-0 left-1/2 h-[420px] w-full max-w-[520px] -translate-x-1/2 rounded-3xl bg-[#eaf0fb] opacity-60 lg:h-[500px]" />
          <div className="relative w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center p-2 sm:max-w-[500px] lg:max-w-[540px]">
            <DotLottieReact
              src="https://lottie.host/a44543ca-8747-4269-9beb-e8010b89a66d/Q5YrJo8m99.json"
              loop
              autoplay
              className="w-full h-full drop-shadow-xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 relative">
          <div className="mb-2">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#12378C] bg-[#e8eef9] px-3 py-1 rounded-full mb-3">
              Cara Kerja
            </span>
            <h2 className="text-3xl font-bold text-[#0c1633] leading-snug">
              Bagaimana Proses <br />
              <span className="text-[#12378C]">Pembuatan Website?</span>
            </h2>
          </div>
          <div className="relative flex flex-col gap-3 mt-2">
            <div className="absolute left-[27px] top-10 bottom-10 w-[2px] bg-[#12378C] opacity-10 rounded-full" />
            {steps.map((step) => {
              const isOpen = open === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => toggle(step.id)}
                  className={`step-card ${isOpen ? "active" : ""} relative bg-white rounded-2xl cursor-pointer overflow-hidden`}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300"
                    style={{
                      background: isOpen ? "#12378C" : "transparent",
                    }}
                  />
                  <div className="flex items-start gap-4 p-5 pl-6">
                    <div
                      className="number-badge flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold border-2 mt-0.5"
                      style={{
                        background: isOpen ? undefined : "#f0f4fc",
                        color: isOpen ? undefined : "#12378C",
                        borderColor: isOpen ? "transparent" : "#dde8f8",
                      }}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3
                          className="text-base font-bold leading-snug transition-colors duration-200"
                          style={{ color: isOpen ? "#12378C" : "#1e293b" }}
                        >
                          {step.title}
                        </h3>
                        <div
                          className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
                          style={{
                            background: isOpen ? "#eaf0fb" : "#f8fafc",
                            transform: isOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M3 5L7 9L11 5"
                              stroke={isOpen ? "#12378C" : "#94a3b8"}
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className={`step-desc-wrap ${isOpen ? "open" : ""}`}>
                        <div className="step-desc-inner">
                          <p className="text-sm text-slate-500 mt-2 leading-relaxed pr-2">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
