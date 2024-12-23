import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Pankaj</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Porjects
            </a>
          </li>
          <li>
            <a href="#Testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/pankaj-maurya-7a9172228/" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Pankaj352" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i class="bx bxl-github"></i>
          </a>
          <a href="https://web.whatsapp.com/" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i class="bx bxl-whatsapp"></i>
          </a>
          <a href="https://www.instagram.com/pankajmaurya352/" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i class="bx bxl-instagram"></i>
          </a>
        </div>
        <span className="footer__copy">&copy;Pankaj Maurya. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
