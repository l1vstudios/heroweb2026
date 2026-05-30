"use client";
import Image from "next/image";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FiFile } from "react-icons/fi";
import {
  SiGithub,
  SiGo,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiPython,
  SiReact,
  SiVuedotjs,
} from "react-icons/si";
export default function Hero() {
  const techIcons = [
    { icon: SiPhp, label: "PHP" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: SiReact, label: "React" },
    { icon: SiVuedotjs, label: "Vue" },
    { icon: SiLaravel, label: "Laravel" },
    { icon: SiPython, label: "Python" },
    { icon: SiGo, label: "Golang" },
    { icon: SiGithub, label: "GitHub" },
  ];
  const techSlotDuration = 3;
  const techCycleDuration = techIcons.length * techSlotDuration;
  return (
    <section className="relative w-full text-white overflow-visible bg-[#12378C] pb-44 sm:pb-48 pt-8 sm:pt-10">
      <style>{`
        .hero-ufo {
          animation: ufoFloat 8s ease-in-out infinite;
        }
        .hero-jet-a {
          animation: jetFlyA 12s ease-in-out infinite;
        }
        .hero-jet-b {
          animation: jetFlyB 16s ease-in-out infinite 4s;
        }
        .jet-smoke {
          animation: smokeFade 1.4s ease-in-out infinite;
        }
        .rocket-flight {
          animation: rocketLaunch 5.2s ease-in-out infinite;
          transform-origin: 82px 120px;
        }
        .hero-rocket {
          animation: rocketShake 0.22s ease-in-out infinite;
          transform-origin: 72px 42px;
        }
        .rocket-boom {
          transform: translateY(-98px);
          transform-origin: 82px 48px;
        }
        .boom-burst {
          animation: rocketBurst 5.2s ease-in-out infinite;
          opacity: 0;
          transform-origin: 82px 48px;
        }
        .boom-text {
          animation: kapanText 5.2s ease-in-out infinite;
          opacity: 0;
          font-size: 24px;
        }
        .boom-subtext {
          font-size: 16px;
        }
        @media (max-width: 640px) {
          .boom-text {
            font-size: 18px;
          }
          .boom-subtext {
            font-size: 11px;
          }
        }
        .rocket-smoke-a {
          animation: rocketSmokeLeft 1.2s ease-out infinite;
        }
        .rocket-smoke-b {
          animation: rocketSmokeCenter 1.2s ease-out infinite 0.2s;
        }
        .rocket-smoke-c {
          animation: rocketSmokeRight 1.2s ease-out infinite 0.4s;
        }
        .ufo-scan {
          animation: ufoScan 2.4s ease-in-out infinite;
          transform-origin: 90px 70px;
        }
        .ufo-tech {
          animation: techRise ${techCycleDuration}s ease-in-out infinite;
          opacity: 0;
        }
        .data-wire {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: wireConnect 4.8s ease-in-out infinite;
        }
        .data-wire:nth-of-type(2) { animation-delay: 0.2s; }
        .data-wire:nth-of-type(3) { animation-delay: 0.4s; }
        .data-wire:nth-of-type(4) { animation-delay: 0.6s; }
        .data-wire:nth-of-type(5) { animation-delay: 0.8s; }
        .data-wire:nth-of-type(6) { animation-delay: 1s; }
        .data-hub {
          animation: hubPulse 1.8s ease-in-out infinite;
        }
        .data-node {
          animation: nodeReveal 4.8s ease-in-out infinite;
          opacity: 0.22;
          transform-box: fill-box;
          transform-origin: center;
        }
        .title-scribble {
          stroke-dasharray: 430;
          stroke-dashoffset: 430;
          animation: scribbleDraw 3.2s ease-in-out infinite;
        }
        .title-scribble-soft {
          stroke-dasharray: 360;
          stroke-dashoffset: 360;
          animation: scribbleDrawSoft 3.2s ease-in-out infinite 0.18s;
        }
        .data-light {
          animation: dataBlink 1.6s ease-in-out infinite;
        }
        .data-light:nth-of-type(2) {
          animation-delay: 0.3s;
        }
        .data-light:nth-of-type(3) {
          animation-delay: 0.6s;
        }
        @keyframes ufoFloat {
          0%, 100% { transform: translate(0, 0) rotate(-3deg); }
          35% { transform: translate(24px, -16px) rotate(4deg); }
          70% { transform: translate(-18px, 10px) rotate(-1deg); }
        }
        @keyframes jetFlyA {
          0% { transform: translate(-18vw, 126px) rotate(-8deg); opacity: 0; }
          12% { opacity: 1; }
          34% { transform: translate(24vw, 92px) rotate(7deg); opacity: 1; }
          52% { transform: translate(38vw, -32px) rotate(-18deg); opacity: 0; }
          100% { transform: translate(118vw, -40px) rotate(-18deg); opacity: 0; }
        }
        @keyframes jetFlyB {
          0% { transform: translate(112vw, 238px) scaleX(-1) rotate(6deg); opacity: 0; }
          10% { opacity: 0.9; }
          34% { transform: translate(76vw, 226px) scaleX(-1) rotate(-7deg); opacity: 0.9; }
          54% { transform: translate(62vw, 18px) scaleX(-1) rotate(18deg); opacity: 0; }
          100% { transform: translate(-24vw, 12px) scaleX(-1) rotate(18deg); opacity: 0; }
        }
        @keyframes smokeFade {
          0%, 100% { opacity: 0.25; transform: translateX(0) scale(0.9); }
          50% { opacity: 0.65; transform: translateX(-8px) scale(1.08); }
        }
        @keyframes rocketLaunch {
          0%, 18% { opacity: 1; transform: translate(0, 0); }
          22% { transform: translate(1px, -2px); }
          34% { transform: translate(-1px, -34px); }
          52% { opacity: 1; transform: translate(1px, -92px) scale(0.82); }
          58%, 100% { opacity: 0; transform: translate(0, -110px) scale(0.5); }
        }
        @keyframes rocketShake {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(1px, -1px); }
        }
        @keyframes rocketBurst {
          0%, 55% { opacity: 0; transform: scale(0.3); }
          60%, 68% { opacity: 1; transform: scale(1); }
          76%, 100% { opacity: 0; transform: scale(1.18); }
        }
        @keyframes kapanText {
          0%, 66% { opacity: 0; transform: translateY(8px) scale(0.88); }
          72%, 88% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-4px) scale(1.04); }
        }
        @keyframes rocketSmokeLeft {
          0% { opacity: 0.85; transform: translate(0, 0) scale(0.45); }
          60% { opacity: 0.55; }
          100% { opacity: 0; transform: translate(-18px, 48px) scale(1.7); }
        }
        @keyframes rocketSmokeCenter {
          0% { opacity: 0.85; transform: translate(0, 0) scale(0.45); }
          60% { opacity: 0.55; }
          100% { opacity: 0; transform: translate(0, 54px) scale(1.85); }
        }
        @keyframes rocketSmokeRight {
          0% { opacity: 0.85; transform: translate(0, 0) scale(0.45); }
          60% { opacity: 0.55; }
          100% { opacity: 0; transform: translate(18px, 48px) scale(1.7); }
        }
        @keyframes ufoScan {
          0%, 100% { opacity: 0.12; transform: scaleY(0.55); }
          45% { opacity: 0.42; transform: scaleY(1); }
          70% { opacity: 0.22; transform: scaleY(0.75); }
        }
        @keyframes techRise {
          0%, 0.8% { opacity: 0; transform: translateY(38px) scale(0.72); }
          2%, 5.6% { opacity: 1; }
          8.3%, 100% { opacity: 0; transform: translateY(-42px) scale(1); }
        }
        @keyframes wireFlow {
          to { stroke-dashoffset: -22; }
        }
        @keyframes wireConnect {
          0%, 14% { stroke-dashoffset: 1; opacity: 0.2; }
          28%, 62% { stroke-dashoffset: 0; opacity: 0.55; }
          78%, 100% { stroke-dashoffset: 1; opacity: 0.2; }
        }
        @keyframes dataBlink {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }
        @keyframes hubPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes nodeReveal {
          0%, 16% { opacity: 0.22; transform: scale(0.9); }
          24%, 54% { opacity: 1; transform: scale(1); }
          70%, 100% { opacity: 0.22; transform: scale(0.9); }
        }
        @keyframes scribbleDraw {
          0%, 15% { stroke-dashoffset: 430; opacity: 0; }
          35%, 78% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -430; opacity: 0; }
        }
        @keyframes scribbleDrawSoft {
          0%, 20% { stroke-dashoffset: 360; opacity: 0; }
          42%, 76% { stroke-dashoffset: 0; opacity: 0.55; }
          100% { stroke-dashoffset: -360; opacity: 0; }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-visible hidden sm:block">
        <svg
          className="absolute bottom-32 left-3 h-32 w-40 overflow-visible text-white/90 sm:bottom-40 sm:left-10 sm:h-40 sm:w-52"
          viewBox="0 0 180 190"
          fill="none"
          aria-hidden="true"
        >
          <g className="rocket-flight">
            <g
              className="rocket-smoke-a"
              style={{ transformOrigin: "64px 140px" }}
            >
              <circle cx="64" cy="140" r="13" fill="white" opacity="0.65" />
              <circle cx="52" cy="154" r="10" fill="white" opacity="0.45" />
              <circle cx="68" cy="164" r="12" fill="white" opacity="0.38" />
            </g>
            <g
              className="rocket-smoke-b"
              style={{ transformOrigin: "82px 140px" }}
            >
              <circle cx="82" cy="140" r="15" fill="white" opacity="0.7" />
              <circle cx="82" cy="158" r="18" fill="white" opacity="0.46" />
              <circle cx="82" cy="176" r="14" fill="white" opacity="0.36" />
            </g>
            <g
              className="rocket-smoke-c"
              style={{ transformOrigin: "100px 140px" }}
            >
              <circle cx="100" cy="140" r="13" fill="white" opacity="0.65" />
              <circle cx="112" cy="154" r="10" fill="white" opacity="0.45" />
              <circle cx="96" cy="164" r="12" fill="white" opacity="0.38" />
            </g>
            <g className="hero-rocket">
              <path
                d="M84 16C103 30 111 50 106 78C102 99 91 113 82 120C72 112 61 97 58 76C54 48 64 28 84 16Z"
                fill="white"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M84 16C94 24 101 34 104 46H64C68 33 74 23 84 16Z"
                fill="#ff8a1d"
              />
              <circle
                cx="82"
                cy="65"
                r="12"
                fill="#dff4ff"
                stroke="#12378C"
                strokeWidth="4"
              />
              <path d="M59 82L35 106L62 101L70 89L59 82Z" fill="#ff8a1d" />
              <path d="M105 82L128 106L102 101L94 89L105 82Z" fill="#ff8a1d" />
              <path d="M70 112L82 136L95 112H70Z" fill="#ff8a1d" />
              <path
                d="M70 47H96"
                stroke="#12378C"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.4"
              />
            </g>
          </g>
          <g className="rocket-boom">
            <g className="boom-burst">
              <circle cx="82" cy="48" r="28" fill="#ff8a1d" opacity="0.22" />
              <circle cx="82" cy="48" r="18" fill="#ffffff" opacity="0.3" />
              <path
                d="M82 12V25M82 71V84M46 48H59M105 48H118M57 23L66 32M99 64L108 73M107 23L98 32M65 64L56 73"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
            <text
              className="boom-text"
              x="82"
              y="42"
              textAnchor="middle"
              fill="#ffffff"
              fontWeight="900"
            >
              #KapanLagi
              <tspan className="boom-subtext" x="82" dy="23">
                Punya Website Sendiri
              </tspan>
            </text>
          </g>
        </svg>
        <div className="hero-ufo absolute right-[8%] top-10 h-32 w-36 overflow-visible text-white/90 sm:h-40 sm:w-48">
          <svg
            viewBox="0 0 180 178"
            fill="none"
            aria-hidden="true"
            className="h-full w-full overflow-visible"
          >
            <ellipse cx="90" cy="58" rx="58" ry="18" fill="currentColor" />
            <path
              d="M56 55C61 32 74 20 91 20C108 20 121 32 126 55H56Z"
              fill="currentColor"
              opacity="0.72"
            />
            <ellipse cx="90" cy="62" rx="78" ry="16" fill="currentColor" />
            <circle cx="58" cy="63" r="4" fill="#12378C" opacity="0.55" />
            <circle cx="90" cy="66" r="4" fill="#12378C" opacity="0.55" />
            <circle cx="122" cy="63" r="4" fill="#12378C" opacity="0.55" />
            <path
              d="M56 79L40 104M90 82V108M124 79L140 104"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.18"
            />
            <path
              className="ufo-scan"
              d="M66 72H114L154 170H26L66 72Z"
              fill="currentColor"
              opacity="0.28"
            />
          </svg>
          <div className="absolute left-1/2 top-[70%] h-16 w-16 -translate-x-1/2">
            {techIcons.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <Icon
                  key={tech.label}
                  aria-label={tech.label}
                  className="ufo-tech absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow"
                  style={{ animationDelay: `${i * techSlotDuration}s` }}
                />
              );
            })}
          </div>
        </div>
        {["hero-jet-a", "hero-jet-b"].map((className) => (
          <svg
            key={className}
            className={`${className} absolute left-0 top-0 h-16 w-44 text-white/90`}
            viewBox="0 0 220 86"
            fill="none"
            aria-hidden="true"
          >
            <g className="jet-smoke">
              <circle cx="24" cy="46" r="8" fill="white" opacity="0.28" />
              <circle cx="10" cy="52" r="12" fill="white" opacity="0.18" />
              <circle cx="-4" cy="44" r="7" fill="white" opacity="0.22" />
            </g>
            <path
              d="M42 45L124 18C142 12 170 18 204 34L122 48L70 70L82 50L42 45Z"
              fill="currentColor"
            />
            <path
              d="M95 39L132 64L113 67L72 48L95 39Z"
              fill="currentColor"
              opacity="0.78"
            />
            <path d="M123 18L103 3L94 28" fill="currentColor" opacity="0.85" />
            <path
              d="M154 32H184"
              stroke="#12378C"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.42"
            />
          </svg>
        ))}
        <svg
          className="absolute bottom-30 right-2 h-28 w-40 text-white/85 sm:bottom-38 sm:right-10 sm:h-36 sm:w-52"
          viewBox="0 0 240 170"
          fill="none"
          aria-hidden="true"
        >
          {[
            "M120 88L68 47",
            "M120 88L172 47",
            "M120 88L56 116",
            "M120 88L184 116",
            "M120 88L120 42",
            "M120 88L120 128",
          ].map((d) => (
            <path
              key={d}
              className="data-wire"
              d={d}
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.45"
            />
          ))}
          {[
            { x: 34, y: 20, w: 42, h: 34, label: ".com" },
            { x: 164, y: 20, w: 42, h: 34, label: ".id" },
            { x: 22, y: 106, w: 42, h: 34, label: ".ai" },
            { x: 176, y: 106, w: 42, h: 34, label: ".io" },
            { x: 99, y: 8, w: 42, h: 34, label: ".dev" },
            { x: 99, y: 128, w: 42, h: 34, label: ".store" },
          ].map((node, i) => (
            <g
              className="data-node"
              key={`${node.x}-${node.y}`}
              style={{ animationDelay: `${i * 0.25 + 0.65}s` }}
            >
              <rect
                x={node.x}
                y={node.y}
                width={node.w}
                height={node.h}
                rx="7"
                fill="currentColor"
                opacity={i % 2 === 0 ? 0.82 : 0.68}
              />
              <text
                x={node.x + node.w / 2}
                y={node.y + 21}
                textAnchor="middle"
                fill="#12378C"
                fontSize={node.label.length > 4 ? "8" : "10"}
                fontWeight="900"
              >
                {node.label}
              </text>
              <circle
                className="data-light"
                cx={node.x + node.w - 9}
                cy={node.y + node.h - 8}
                r="3.5"
                fill="#ff8a1d"
              />
            </g>
          ))}
          <g className="data-hub" style={{ transformOrigin: "120px 88px" }}>
            <circle
              cx="120"
              cy="88"
              r="22"
              fill="currentColor"
              opacity="0.95"
            />
            <circle cx="120" cy="88" r="10" fill="#ff8a1d" opacity="0.9" />
          </g>
        </svg>
      </div>
      
      <div
        className="absolute bottom-0 left-0 w-full h-32 sm:h-64 bg-white z-10"
        style={{ clipPath: "ellipse(100% 45% at 50% 100%)" }}
      />
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-4 sm:gap-6">
        <p className="text-base sm:text-lg font-medium">
          <span className="text-orange-400">
            Kami Memiliki Pengalaman & Profesionalitas
          </span>
          <br />
          <span className="text-white">
            Dan Tidak Menerima Pembuatan Website Judi Online
          </span>
        </p>
        <h1 className="relative inline-block text-2xl sm:text-5xl font-bold leading-snug">
          Jasa Pembuatan Website
          <svg
            className="hidden sm:block absolute -bottom-4 left-1/2 h-5 w-[88%] -translate-x-1/2 text-orange-400 sm:-bottom-6 sm:h-7"
            viewBox="0 0 420 36"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="title-scribble"
              d="M8 22C74 8 138 8 204 18C270 28 336 30 412 12"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              className="title-scribble-soft"
              d="M44 27C116 18 190 19 260 25C310 29 356 26 392 20"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>
        </h1>
        <p className="max-w-2xl text-sm sm:text-lg text-gray-200">
          Wujudkan impian Anda untuk memiliki website dengan fitur lengkap,
          biaya murah dan pengerjaan yang cepat.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4">
          <button
            onClick={() =>
              (window.location.href =
                "mailto:brainsoftdev@proton.me?subject=Halo%20HeroWeb%20-%20Mau%20Bikin%20Website&body=Halo%20HeroWeb,%0A%0ASaya%20ingin%20konsultasi%20untuk%20pembuatan%20website.%0A%0ANama:%0ANo%20WA:%0AKebutuhan%20Website:%0A")
            }
            className="shimmer-btn relative overflow-hidden group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow transition"
          >
            <span className="relative z-10 flex items-center text-center gap-2">
              <HiOutlineViewGrid className="text-xl" />
              Bikin Website Sekarang Juga
            </span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition duration-700 ease-out" />
          </button>
          <a
            href="/source"
            className="shimmer-btn relative overflow-hidden group flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-[#12378C] px-6 sm:px-8 py-3 rounded-full font-semibold transition"
          >
            <span className="relative z-10 flex w-full items-center justify-center gap-2 text-center">
              <FiFile className="text-xl" />
              Repository Project
            </span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition duration-700 ease-out" />
          </a>
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
