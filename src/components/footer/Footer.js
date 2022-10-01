import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>¿En que te puedo Ayudar?</h1>
        <p>Tengo la experiencia y la creatividad para desarrollar tu Proyecto.</p>
      </div>
      <div className="footer-contact">
        <h3>Contactame</h3>
        <a href="https://wa.link/u6i9zt" target="_blank" rel="noreferrer" > <p>Whatsapp : (+58)(0424-357-65-28)</p> </a>
        <p>Y pongámonos manos a la obra</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Diseñado por Hector Hernandez</div>
        <div className="sns-links">
        <a href="https://wa.link/u6i9zt" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com/in/hector-hernandez-bb950322a/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com/hectorcreative8" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://www.facebook.com/hectoralejandro.hernandezrodriguez.3/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
