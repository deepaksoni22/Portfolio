import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/deepak-soni-103822251/"
        target="_blank"
        rel="linkedin"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/deepaksoni22" target="_blank" rel="github">
        <FaGithubSquare />
      </a>
    </div>
  );
}

export default HeaderSocials;
