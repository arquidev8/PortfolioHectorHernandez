import React from "react";
import "./Slider.css";
import image1 from '../assets/grafico/1.jpg';
import image2 from '../assets/grafico/2.jpg';
import image3 from '../assets/grafico/3.jpg';
import image4 from '../assets/grafico/4.jpg';
import image5 from '../assets/grafico/5.jpg';
import image6 from '../assets/grafico/6.jpg';
import image7 from '../assets/grafico/7.jpg';
import image8 from '../assets/grafico/8.jpg';
import image9 from '../assets/grafico/9.jpg';




const slidesInfo = [
  {
    src:image1,     
    alt: "Project 1",
    desc: "Diseño Grafico",
  },
  {
    src:
      image2,
    alt: "Project 2",
    desc: "Diseño Grafico",
  },
  {
    src:
      image3,
    alt: "Project 3",
    desc: "Diseño Grafico",
  },
  {
    src:
      image4,
    alt: "Project 4",
    desc: "Diseño Grafico",
  },
  {
    src:
      image5,
    alt: "Project 4",
    desc: "Diseño Grafico",
  },
  {
    src:
      image6,
    alt: "Project 4",
    desc: "Diseño Grafico",
  },
  {
    src:
      image7,
    alt: "Project 5",
    desc: "Diseño Grafico",
  },
  {
    src:
      image8,
    alt: "Project 6",
    desc: "Diseño Grafico",
  },
  {
    src:
      image9,
    alt: "Project 7",
    desc: "Diseño Grafico",
  },
  


  
];

const slidesGrafico = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img className="image" src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slidesGrafico;
