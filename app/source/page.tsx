import Header from "../components/Header/Page";
// import Faq from "../components/Faq/Page";
import Hero from "../components/Hero2/Page";
import List from "../components/List/Page";

import Footer from "../components/Footer/Page";

export default function SourcePage() {
  return (
    <>
      <Header />
      <section id="source-hero">
        <Hero />
      </section>
      <section id="List">
        <List />
      </section>
      {/*<section id="faq"><Faq /></section>*/}
      <Footer />
    </>
  );
}
