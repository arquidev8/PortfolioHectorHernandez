import React from "react";
import "./About.css";
import fotoHector from "../assets/fotoHector.png"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Déjame decirte algo sobre mí</h3>
        <p>
        Desde 2010 tengo experiencia en el área de Arquitectura, diseño gráfico, interiorismo, modelado 3D y visualizaciones. Trabajando para diferentes empresas e instituciones.<br></br><br></br>

        Tengo Dominio de software de modelado 3D profesionales y muy utilizados en la industria. tales como: Blender, 3DMax, Revit, Archicad, Lumion, Unity entre otros. tambien poseo conocimiento en lenguajes de programacion como Python y C#. Estas herramientas me permiten llevar la interaccion con nuestros proyectos al siguiente nivel<br></br><br></br> 

        Desarrollo proyectos de alta calidad utilizando las ultimas tecnologias disponibles en el mercado, ademas de la experiencia en el desarrollo de proyectos arquitectonicos de gran escala, interiorismo y animacion 3D
        </p>
      </div>
      <div className="about-img">
        <img
          src={fotoHector}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
