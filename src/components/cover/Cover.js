import React from "react";
import "./Cover.css";
import coverVideo from "../../media/intro.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>HECTOR HERNANDEZ</h1>
      <p>Arquitecto | Diseñador de Interiores | Artista 3D </p>
    </div>
  );
};

export default Cover;
