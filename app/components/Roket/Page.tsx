"use client";
import {
  FaEdit,
  FaUsers,
  FaFileInvoice,
  FaInfoCircle,
  FaUpload,
  FaAdjust,
} from "react-icons/fa";
const services = [
  {
    icon: FaEdit,
    title: "Website Company Profile",
    description:
      "Kami membuat website profesional untuk kebutuhan profil perusahaan agar lebih dipercaya klien.",
  },
  {
    icon: FaUsers,
    title: "Website Toko Online / Ecommerce",
    description:
      "Toko online lengkap dengan fitur keranjang, checkout, dan manajemen produk yang mudah.",
  },
  {
    icon: FaFileInvoice,
    title: "Website Personal / Blog",
    description:
      "Cocok untuk portofolio pribadi, blog, atau branding personal yang terlihat profesional.",
  },
  {
    icon: FaInfoCircle,
    title: "Website Donasi / Crowdfunding",
    description:
      "Sistem donasi online lengkap dengan form donasi, daftar donatur, dan upload bukti pembayaran.",
  },
  {
    icon: FaAdjust,
    title: "Website Layanan Jasa",
    description:
      "Cocok untuk usaha jasa seperti bengkel, salon, kursus, travel, dan lain-lain.",
  },
  {
    icon: FaUpload,
    title: "Custom Website (Sesuai Permintaan)",
    description:
      "Butuh website dengan fitur khusus? Kami bisa membuatkan sesuai kebutuhan bisnis Anda.",
  },
];
export default function Fitur() {
  return (
    <section className="w-full bg-white py-20">
      <div className="text-center max-w-3xl mx-auto px-6 mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0c1633]">
          Layanan Pembuatan Website HeroWeb
        </h2>
        <p className="text-gray-600 text-lg mt-3">
          Beragam layanan terbaik yang kami sediakan untuk kebutuhan website
          Anda
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-white bg-[#fbfdff] p-8 shadow-xl"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#EAF7FF]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-[radial-gradient(circle_at_1px_1px,#bfdbfe_1px,transparent_0)] bg-[length:18px_18px] opacity-40" />
              <div className="relative">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-[#EAF7FF] ring-1 ring-[#bfdbfe] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="text-2xl text-[#0747A6]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#0c1633]">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
