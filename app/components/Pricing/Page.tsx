"use client";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Pricing() {
  const packages = [
    {
      title: "Blog Pribadi",
      price: "Rp 2.000.000",
      desc: "Cocok untuk anda yang hobi menulis seperti berita atau opini pribadi.",
      features: [
        "Wajib Menggunakan DP 50%",
        "Desain Profesional",
        "1x Revisi Desain",
        "Free Setup 2 Konten / Artikel",
        "Gratis Domain (*.com)",
        "Gratis SSL Selamanya",
        "Mobile Friendly",
        "SEO Basic"
      ]
    },
    {
      title: "Website Kompro",
      price: "Rp 2.500.000",
      desc: "Cocok untuk bisnis perusahaan atau konsultan.",
      features: [
        "Wajib Menggunakan DP 50%",
        "Desain Profesional",
        "1x Revisi Desain",
        "Gratis Maintenance",
        "Gratis Domain (*.com) *",
        "Gratis SSL Selamanya",
        "Mobile Friendly",
        "SEO Basic"
      ]
    },
    {
      title: "Toko Online",
      price: "Rp 8.500.000",
      desc: "Cocok untuk UMKM seperti fashion, kuliner dan lainnya.",
      features: [
        "Wajib Menggunakan DP 50%",
        "Kelola Produk Di Panel Admin",
        "Support Checkout langsung",
        "Desain Premium",
        "1x Revisi Desain",
        "Integrasi Cek Ongkir",
        "Integrasi Cek Resi",
        "Stok Realtime",
        "Include Sanitasi & Proteksi Malware / Backdoor",
        "Tracking Barang",
        "Pembayaran Otomatis",
        "Gratis Domain (*.com) *",
        "Gratis SSL Selamanya",
        "Mobile Friendly",
        "SEO Basic"
      ]
    },
    {
      title: "Website Donasi",
      price: "Rp 3.000.000",
      desc: "Cocok untuk yayasan, masjid, sekolah & organisasi nirlaba.",
      features: [
        "Wajib Menggunakan DP 50%",
        "Desain Modern",
        "1x Revisi Desain",
        "Pembayaran Otomatis",
        "Gratis Domain (*.com) *",
        "Gratis SSL Selamanya",
        "Mobile Friendly",
        "SEO Basic"
      ]
    }
  ];

  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggle = (i: number) => {
    setExpanded(prev => ({ ...prev, [i]: !prev[i] }));
  };

  const order = (title: string, price: string) => {
    const subject = encodeURIComponent(`Order ${title}`);
    const body = encodeURIComponent(
      `Halo HeroWeb,\n\nSaya ingin memesan paket:\n- Paket: ${title}\n- Harga: ${price}\n\nMohon informasi lebih lanjut.`
    );

    window.location.assign(
      `mailto:brainsoftdev@proton.me?subject=${subject}&body=${body}`
    );
  };

  return (
    <section className="w-full bg-[#f7f9fc] py-20">
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0c1633]">Harga Jasa Pembuatan Website</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">Pilih paket sesuai kebutuhan Anda</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {packages.map((item, i) => {
          const isOpen = expanded[i];
          const limited = item.features.slice(0, 5);
          const full = item.features;
          const show = isOpen ? full : limited;

          return (
            <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="relative overflow-hidden bg-[#1A3DBE] px-5 py-7 text-center text-white">
                <svg
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-full w-full text-white/20"
                  viewBox="0 0 360 120"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20 112V76H46V112M46 112V54H82V112M82 112V34H124V112M124 112V66H154V112M154 112V42H204V112M204 112V26H244V112M244 112V60H282V112M282 112V78H340V112"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M62 70H70M62 84H70M62 98H70M98 52H106M98 68H106M98 84H106M98 100H106M172 60H180M172 76H180M172 92H180M220 44H228M220 60H228M220 76H228M220 92H228M260 76H268M260 92H268M304 92H314"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm opacity-90">Mulai Dari</p>
                </div>
              </div>

              <div className="p-8 text-center">
                <p className="text-4xl font-bold text-blue-800">{item.price}</p>
                <p className="text-xs text-gray-500 mt-1">*Tidak Include Maintenance</p>

                <ul className="mt-6 space-y-3 text-gray-700">
                  {show.map((f, idx) => <li key={idx}>{f}</li>)}
                </ul>

                {full.length > 5 && (
                  <button
                    onClick={() => toggle(i)}
                    className="text-blue-600 font-semibold mt-3 hover:underline"
                  >
                    {isOpen ? "Sembunyikan" : "Lihat Semua"}
                  </button>
                )}

                <button
                  onClick={() => order(item.title, item.price)}
                  className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition flex items-center gap-2 mx-auto"
                >
                  Pesan Sekarang
                  <FiArrowRight className="text-xl" />
                </button>

                <p className="text-gray-500 text-sm mt-4">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
