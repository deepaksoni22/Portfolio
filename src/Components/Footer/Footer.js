import React from "react";

import "./Footer.css";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <a href="..." className="footer__logo">
        Deepak Soni
      </a>
      <ul className="permalinks">
        <li>
          <a href="...">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.instagram.com/deepaksoni_22/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
        <a href="https://wa.me/919529076013" target="_blank" rel="noreferrer">
          <IoLogoWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/deepak-soni-103822251/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
