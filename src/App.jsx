import { useLocomotive } from "./hooks/locomotive";

import Hero from "./components/Hero";
import Content from "./components/Content";
import CardsGrid from "./components/CardContent";
import Banner1 from "./components/Banner1";
import Data from "./components/Data";
import CarouselSection from "./components/CarasouelSection";
import Banner2 from "./components/Banner2";
import SectionWithFaq from "./components/FaqSection";
import Footer from "./components/Footer";

export default function App() {
  const scrollRef = useLocomotive({
    smooth: true,
    multiplier: 0.8,
    inertia: 0.6,
  });

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="
        w-full
        py-[3vw] px-[1.5vw]
        overflow-hidden
        md:py-[0.4vw] md:px-[1.4vw]
        bg-[#fcf8f1]
      "
    >
      <section data-scroll-section><Hero /></section>
      <section data-scroll-section><Content /></section>
      <section data-scroll-section><CardsGrid /></section>
      <section data-scroll-section><Banner1 /></section>
      <section data-scroll-section><Data /></section>
      <section data-scroll-section><CarouselSection /></section>
      <section data-scroll-section><Banner2 /></section>
      <section data-scroll-section><SectionWithFaq /></section>
      <section data-scroll-section><Footer /></section>
    </div>
  );
}
