import Header from "./components/Header/Page";
import Hero from "./components/Hero/Page";
import Pricing from "./components/Pricing/Page";
import Promo from "./components/Promo/Page";
import Roket from "./components/Roket/Page";
import Faq from "./components/Faq/Page";
import Portofolio from "./components/Portofolio/Page";
import Footer from "./components/Footer/Page";
export default function Home() {
  return (
    <>
      <Header />
      <section id="hero"><Hero /></section>
      <section id="promo"><Promo /></section>
      <section id="roket"><Roket /></section>
      <section id="pricing"><Pricing /></section>
      <section id="faq"><Faq /></section>
      <section id="portfolio"><Portofolio /></section>
      <Footer />
    </>
  );
}

