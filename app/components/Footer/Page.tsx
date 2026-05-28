"use client";
import Image from "next/image";
import {
  Phone,
  Instagram,
  BarChart3,
  Users,
  Eye,
  CalendarDays,
} from "lucide-react";
export default function Footer() {
  const services = [
    "Jasa Pembuatan Website Personal / Blog",
    "Jasa Pembuatan Website Perusahaan",
    "Jasa Pembuatan Website Donasi",
    "Jasa Pembuatan Website Toko Online",
    "Jasa Maintenance Website",
    "Domain Murah",
    "Order Website Murah",
  ];
  const info = [
    "Syarat & Ketentuan",
    "Kebijakan Privasi",
    "Minta Penawaran",
    "Pembayaran",
    "Portfolio",
  ];
  const analytics = [
    { label: "Total Pengunjung", value: "12.540", icon: Users },
    { label: "Pengunjung Hari Ini", value: "320", icon: Eye },
    { label: "Pengunjung Bulan Ini", value: "4.210", icon: CalendarDays },
    { label: "Pengunjung Online", value: "18", icon: BarChart3 },
  ];
  return (
    <footer className="relative w-full bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] pt-20 text-white">
      <div className="pointer-events-none absolute left-0 right-0 -top-[57px] z-10 h-20 overflow-hidden">
        <div className="promo-car">
          <svg
            className="h-16 w-44 drop-shadow-lg"
            viewBox="0 0 220 82"
            fill="none"
            aria-hidden="true"
          >
            <g className="car-smoke">
              <circle cx="24" cy="54" r="5" fill="#111827" opacity="0.55" />
              <circle cx="13" cy="48" r="7" fill="#111827" opacity="0.38" />
              <circle cx="2" cy="42" r="4" fill="#111827" opacity="0.3" />
            </g>
            <g className="car-suspension">
              <path
                d="M78 21H157L190 43V60H36V42L58 37L78 21Z"
                fill="#ff8a1d"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M84 28H114V43H68L84 28Z"
                fill="#dff4ff"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M122 28H151L172 43H122V28Z"
                fill="#dff4ff"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <rect
                x="15"
                y="8"
                width="72"
                height="24"
                rx="6"
                fill="#12378C"
                stroke="#ffffff"
                strokeWidth="3"
              />
              <path
                d="M86 21L72 33"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <text
                x="51"
                y="24"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="10"
                fontWeight="800"
              >
                PROMO
              </text>
            </g>
            <g className="car-wheel" style={{ transformOrigin: "70px 61px" }}>
              <circle cx="70" cy="61" r="12" fill="#0f172a" />
              <circle cx="70" cy="61" r="5" fill="#ffffff" />
              <path
                d="M70 49V73M58 61H82"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
            <g className="car-wheel" style={{ transformOrigin: "158px 61px" }}>
              <circle cx="158" cy="61" r="12" fill="#0f172a" />
              <circle cx="158" cy="61" r="5" fill="#ffffff" />
              <path
                d="M158 49V73M146 61H170"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
            <path
              d="M193 50H205"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <style jsx>{`
        .promo-car {
          position: absolute;
          left: -220px;
          top: 0;
          animation: promoDrive 13s linear infinite;
          will-change: transform;
        }
        .car-suspension {
          animation: suspension 0.75s ease-in-out infinite;
        }
        .car-wheel {
          animation: wheelSpin 0.55s linear infinite;
        }
        .car-smoke {
          animation: smokePuff 0.9s ease-out infinite;
          transform-origin: 24px 54px;
        }
        @keyframes promoDrive {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(100vw + 260px));
          }
        }
        @keyframes suspension {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(2px);
          }
        }
        @keyframes wheelSpin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes smokePuff {
          0% {
            opacity: 0;
            transform: translateX(10px) scale(0.7);
          }
          35% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateX(-18px) translateY(-6px) scale(1.25);
          }
        }
      `}</style>
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-20 h-56 w-full text-white/10"
        viewBox="0 0 1200 220"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M20 210V132H92V210M92 210V78H180V210M180 210V42H292V210M292 210V116H370V210M370 210V64H500V210M500 210V28H610V210M610 210V102H714V210M714 210V56H850V210M850 210V124H940V210M940 210V84H1060V210M1060 210V142H1180V210"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M122 106H142M122 134H142M122 162H142M122 190H142M216 78H236M216 108H236M216 138H236M216 168H236M216 196H236M420 100H440M420 130H440M420 160H440M420 190H440M548 70H568M548 100H568M548 130H568M548 160H568M548 190H568M760 92H780M760 124H780M760 156H780M760 190H780M982 120H1002M982 152H1002M982 188H1002M1104 166H1130M1104 192H1130"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Image
              src="/gambar/logo5.png"
              alt="HeroWebsite Logo"
              width={180}
              height={60}
              className="mb-6"
            />
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold mb-1">Depok - JawaBarat</p>
                <p className="text-gray-200">Jalan Margonda Raya</p>
              </div>
              <p className="text-gray-200 mt-4">
                Senin – Jumat (09.00-17.00 WIB)
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="bg-white rounded-full p-3">
                <Phone className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <p className="text-sm text-gray-300">
                  Chat kami di WhatsApp 7x24
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-6">Layanan</h3>
            <ul className="space-y-3 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-orange-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-6">
              Info Lainnya
            </h3>
            <ul className="space-y-3 text-sm">
              {info.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-6">
              Media Sosial
            </h3>
            <ul className="space-y-3 text-sm mb-8">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-200 hover:text-orange-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" /> Instagram
                </a>
              </li>
            </ul>
            <h3 className="text-xl font-bold text-orange-400 mb-4">
              Analitik Pengunjung
            </h3>
            <div className="space-y-3">
              {analytics.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-md px-4 py-2 border border-white/20"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-orange-300" />
                      <p className="text-sm text-gray-200">{item.label}</p>
                    </div>
                    <span className="text-orange-400 font-bold">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 bg-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <Image
            src="/gambar/payment.png"
            alt="Payment Methods"
            width={1200}
            height={80}
            className="w-full h-auto max-w-5xl"
          />
        </div>
      </div>
      <div className="bg-[#0f172a] py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400">Copyright © 2025 HEROWEBSITE</p>
        </div>
      </div>
    </footer>
  );
}
