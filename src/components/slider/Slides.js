import React from "react";
import "./Slider.css";
import image1 from '../assets/2.jpg';
import image2 from '../assets/1.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';


const slidesInfo = [
  {
    src:image1,     
    alt: "Project 1",
    desc: "Arquitectura",
  },
  {
    src:
      image2,
    alt: "Project 2",
    desc: "Arquitectura",
  },
  {
    src:
      image3,
    alt: "Project 3",
    desc: "Interiorismo",
  },
  {
    src:
      image4,
    alt: "Project 4",
    desc: "Interiorismo",
  },
  {
    src:
      image5,
    alt: "Project 4",
    desc: "Modelado 3D",
  },
  {
    src:
      image6,
    alt: "Project 4",
    desc: "Modelado 3D",
  },
  
  
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img className="image" src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
