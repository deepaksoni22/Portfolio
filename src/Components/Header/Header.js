import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/ME.png";
import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1>Deepak Soni</h1>
        <h5 className="text-light"> Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#content" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
