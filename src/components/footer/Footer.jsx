import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Erza Juan Bastilla</h1>

        <ul className="footer__list">
          <li>
            <a href="#Home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/erzajuan"
            target="_blank"
            className="footer__social-link"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="http://wa.me/6282134065449"
            target="_blank"
            className="footer__social-link"
            rel="noreferrer"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://youtube.com/bastilla"
            target="_blank"
            className="footer__social-link"
            rel="noreferrer"
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
