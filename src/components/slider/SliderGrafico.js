import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import slidesGrafico from "./SlidesGrafico";
import "./Slider.css";


const SliderGrafico = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Diseño Grafico</h2>
      </div>

      <Carousel
        arrows
        slidesPerPage={3}
        infinite
        animationSpeed={200}
        centered
        offset={30}
        itemWidth={600}
        slides={slidesGrafico}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 550,
          },
        }}
      />
    </div>
  );
};

export default SliderGrafico;
