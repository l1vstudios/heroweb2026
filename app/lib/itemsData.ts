export interface TemplateItem {
  slug: string;
  title: string;
  desc: string;
  features: string[];
  img: string;
  badge: string;
  link: string;
  category: string;
  tech: string;
  type: string;
  price: number;
  iconType: "Globe" | "Smartphone" | "Package";
  iconColor: string;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const items: TemplateItem[] = [
  {
    slug: "gamecorner",
    title: "GameCorner",
    desc: "Template website gaming modern yang cocok untuk review game, berita esports, katalog game, hingga komunitas gamer. Desainnya dibuat dengan nuansa gelap, visual yang kuat, dan struktur landing page yang mudah dikembangkan untuk kebutuhan portal hiburan digital.",
    features: [
      "Landing page gaming",
      "Section katalog game",
      "UI modern & gelap",
      "Responsive full",
    ],
    img: "/gambar/game.png",
    badge: "Gratis",
    link: "https://www.mediafire.com/file/wmp7ayx90i8d8r3/game.zip/file",
    category: "Landing Page",
    tech: "Next.js",
    type: "Gratis",
    price: 0,
    iconType: "Globe",
    iconColor: "text-blue-600",
  },
  {
    slug: "studio-portfolio",
    title: "Studio Portfolio",
    desc: "Website portofolio modern untuk studio kreatif, fotografer, editor, desainer, dan freelancer yang ingin menampilkan karya secara profesional. Template ini memiliki layout visual yang rapi, section layanan, galeri project, serta tampilan elegan untuk membangun personal branding yang lebih meyakinkan.",
    features: [
      "Portfolio grid",
      "Halaman layanan",
      "Form kontak",
      "Transisi animasi halus",
    ],
    img: "/gambar/studio.png",
    badge: "Berbayar",
    link: "https://www.mediafire.com/file/dq2ni2kvej2kfc3/studio.zip/file",
    category: "Landing Page",
    tech: "Next.js",
    type: "Berbayar",
    price: 99000,
    iconType: "Globe",
    iconColor: "text-green-600",
  },
  {
    slug: "covid-tracker-landing-page",
    title: "Covid Tracker Landing Page",
    desc: "Landing page edukasi kesehatan bertema Covid yang dirancang untuk menampilkan informasi penting, statistik, grafik, dan call-to-action dengan jelas. Cocok digunakan sebagai halaman kampanye, portal informasi publik, atau referensi project edukasi berbasis data dan awareness kesehatan.",
    features: [
      "Statistik realtime",
      "UI edukatif",
      "Ilustrasi modern",
      "SEO ready",
    ],
    img: "/gambar/covid.png",
    badge: "Gratis",
    link: "https://www.mediafire.com/file/iuav0ld5xutrt3k/covid.zip/file",
    category: "Landing Page",
    tech: "Vue.js",
    type: "Gratis",
    price: 0,
    iconType: "Package",
    iconColor: "text-purple-600",
  },
  {
    slug: "landing-page-bisnis",
    title: "Landing Page Bisnis",
    desc: "Landing page bisnis profesional untuk mempromosikan produk, jasa, startup, atau brand personal dengan alur konten yang fokus pada konversi. Template ini menyediakan struktur hero section, benefit, layanan, dan CTA yang jelas sehingga cocok untuk kebutuhan promosi online yang cepat dan efektif.",
    features: [
      "CTA kuat & jelas",
      "Optimasi konversi",
      "Fast load time",
      "Responsive design",
    ],
    img: "/gambar/landing.png",
    badge: "Berbayar",
    link: "https://www.mediafire.com/file/50157pi5nwn6xkz/zinc.zip/file",
    category: "Landing Page",
    tech: "Next.js",
    type: "Berbayar",
    price: 149000,
    iconType: "Globe",
    iconColor: "text-orange-500",
  },
  {
    slug: "online-shop",
    title: "Online Shop",
    desc: "Template website online shop modern dan ringan untuk menampilkan produk, katalog, dan alur pembelian sederhana. Cocok untuk UMKM, toko digital, maupun project ecommerce mini yang membutuhkan tampilan responsif, performa cepat, dan pengalaman belanja yang mudah dipahami pengguna.",
    features: ["UI premium", "Checkout WA", "Fast performance", "Responsive"],
    img: "/gambar/onlineshop.png",
    badge: "Berbayar",
    link: "https://www.mediafire.com/file/hrilcbx90omof09/violet.zip/file",
    category: "CRUD",
    tech: "React.js",
    type: "Berbayar",
    price: 199000,
    iconType: "Smartphone",
    iconColor: "text-sky-600",
  },
  {
    slug: "trip-website",
    title: "Trip Website",
    desc: "Landing page travel yang dirancang untuk mempromosikan paket wisata, destinasi unggulan, dan penawaran liburan secara menarik. Template ini cocok untuk agen perjalanan, tour organizer, atau brand wisata yang ingin menampilkan gambar besar, CTA jelas, serta informasi destinasi dengan layout marketing-ready.",
    features: ["SEO optimized", "CTA menarik", "Gambar HD", "Marketing-ready"],
    img: "/gambar/trip.png",
    badge: "Gratis",
    link: "https://www.mediafire.com/file/6sxdjh511b865ia/trip.zip/file",
    category: "Landing Page",
    tech: "Next.js",
    type: "Gratis",
    price: 0,
    iconType: "Globe",
    iconColor: "text-red-500",
  },
];
