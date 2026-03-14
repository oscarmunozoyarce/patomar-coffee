import { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import "./Carousel.css";

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [
    "https://patomarcoffee.cl/wp-content/uploads/elementor/thumbs/IMG_7695-scaled-qtnwbkkwh88yz532jpiiyo64eewwpfyxkb03dv3prk.webp",
    "https://patomarcoffee.cl/wp-content/uploads/elementor/thumbs/IMG_7687-scaled-qtnwc2fu32xf3qd4nf8fs1nvoqgvroxtyrebi4d8hc.webp",
    "https://patomarcoffee.cl/wp-content/uploads/elementor/thumbs/IMG_7564-scaled-qtnwcm6g2lofvjkgg5rlqeok5trl9c471h3ikxjyuo.webp",
    "https://patomarcoffee.cl/wp-content/uploads/elementor/thumbs/3941166B-8978-4363-B2B7-AF667A1256F8-scaled-qtnw82mj1fgjre60z72iojycss5q202wezl12sagxc.webp",
    "https://patomarcoffee.cl/wp-content/uploads/elementor/thumbs/IMG_7806-scaled-qtnw8p6nlgbfi199bgtkce9f212j6qkgi38olfd0s0.webp",
    "https://patomarcoffee.cl/wp-content/uploads/elementor/thumbs/IMG_7803-scaled-qtnw9asxyn50x2dut85zfqt0pw3z3rya928umsgysw.webp",
    "https://patomarcoffee.cl/wp-content/uploads/elementor/thumbs/IMG_7801-scaled-qtnw9qs76tqwefqn7x2n44rutfx7qmppz9c3sht9v4.webp",
    "https://patomarcoffee.cl/wp-content/uploads/elementor/thumbs/IMG_7754-scaled-qtnwa7palue27f22h4dxd0i5idltl6kw1l2ufh46r4.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-bg">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={3}
        itemsToScroll={1}
        speed={500}
        easing="ease"
        forwardBtnProps={{
          className: "carousel-arrow carousel-arrow-right",
          children: ">",
        }}
        backwardBtnProps={{
          className: "carousel-arrow carousel-arrow-left",
          children: "<",
        }}
      >
        {slides.map((src, i) => (
          <div key={i} className="carousel-slide">
            <img src={src} />
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
