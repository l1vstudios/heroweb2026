"use client";
import dynamic from "next/dynamic";
import { FaWhatsapp } from "react-icons/fa";
const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  {
    ssr: false,
    loading: () => <div className="w-full max-w-[500px] h-[360px]" />,
  },
);
export default function Promo() {
  return (
    <section className="w-full py-16 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-5">
          <p className="text-orange-500 font-semibold text-lg mt-8 sm:mt-2">
            Jasa Pembuatan Website Di Depok
          </p>
          <h2 className="text-4xl font-bold leading-snug text-[#0c1633]">
            Bikin Website Baru Anda Hanya Dalam 24 Jam
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Jadikan bisnis Anda lebih berkembang bersama jasa pembuatan website
            Depok yang menawarkan harga murah serta didukung oleh tim
            profesional dan berpengalaman di bidangnya.
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "mailto:brainsoftdev@proton.me?subject=Konsultasi%20Website&body=Halo%20HeroWeb,%0ASaya%20ingin%20konsultasi%20website.")
            }
            className="
              relative overflow-hidden group
              flex items-center gap-3
              bg-orange-500 hover:bg-orange-600
              text-white px-8 py-3 rounded-full
              font-semibold shadow-md transition w-fit
            "
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaWhatsapp className="text-2xl" />
              Request Buat Website Custom
            </span>
            <span
              className="
                pointer-events-none absolute inset-0
                bg-gradient-to-r from-transparent via-white/60 to-transparent
                -translate-x-full opacity-0
                group-hover:opacity-100 group-hover:translate-x-full
                transition duration-700 ease-out
              "
            />
          </button>
        </div>
        <DotLottieReact
          src="https://lottie.host/3442ef1a-411b-4425-b7ad-dd1bf8023966/lIgLTKSjuN.json"
          loop
          autoplay
          style={{ width: "100%", maxWidth: "500px", height: "100%" }}
        />
      </div>
      {}
      <section className="w-full bg-[#f7f7f7] py-6">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c1633] mb-4">
            Jasa Pembuatan Website Terbaik No #1 di Depok
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            HeroWebsite adalah layanan jasa pembuatan website nomor 1 di Depok.
            HeroWebsite membantu pelaku bisnis, UMKM, instansi perusahaan dan
            pendidikan yang berada di Depok maupun di luar kota untuk membangun
            website cepat, aman, dan hemat biaya.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            HeroWebsite menawarkan pembuatan{" "}
            <a href="#" className="text-blue-700 font-semibold hover:underline">
              Company Profile
            </a>
            ,{" "}
            <a href="#" className="text-blue-700 font-semibold hover:underline">
              Toko Online
            </a>
            , Blog,{" "}
            <a href="#" className="text-blue-700 font-semibold hover:underline">
              Website Donasi
            </a>{" "}
            dan masih banyak lagi.
          </p>
        </div>
        <p className="text-blue-700 text-center py-5 text-2xl font-bold">
          Dipercaya Oleh
        </p>
        {}
        <div className="w-full flex justify-center mt-6 mb-2">
          <div className="bg-white shadow-lg border border-gray-200 w-[92%] md:w-[70%] py-6 px-6 rounded-xl">
            {}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
              <img src="/gambar/infakin.png" className="logo" alt="Infakin" />
              <img
                src="/gambar/digipediasx.webp"
                className="logo"
                alt="Digipedia"
              />
              <img src="/gambar/Logo_ABL.png" className="logo" alt="ABL" />
              <img src="/gambar/badanpom.png" className="logo" alt="BPOM" />
            </div>
            <style jsx>{`
              .logo {
                height: 50px;
                width: auto;
                object-fit: contain;
                opacity: 0.9;
                transition: 0.3s;
              }
              .logo:hover {
                opacity: 1;
              }
            `}</style>
          </div>
        </div>
      </section>
    </section>
  );
}
