import React from "react";
import "./Slider.css";
import image1 from '../assets/2.jpg';
import image2 from '../assets/1.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
import image8 from '../assets/8.jpg';
import image9 from '../assets/9.jpg';
import image10 from '../assets/10.jpg';
import image11 from '../assets/11.jpg';
import image12 from '../assets/12.jpg';
import image13 from '../assets/13.jpg';



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
  {
    src:
      image7,
    alt: "Project 5",
    desc: "Arquitectura",
  },
  {
    src:
      image8,
    alt: "Project 6",
    desc: "Arquitectura",
  },
  {
    src:
      image9,
    alt: "Project 7",
    desc: "Arquitectura",
  },
  {
    src:
      image10,
    alt: "Project 8",
    desc: "Arquitectura",
  },
  {
    src:
      image11,
    alt: "Project 9",
    desc: "Arquitectura",
  },
  {
    src:
      image12,
    alt: "Project 10",
    desc: "Arquitectura",
  },
  {
    src:
      image13,
    alt: "Project 11",
    desc: "Arquitectura",
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
