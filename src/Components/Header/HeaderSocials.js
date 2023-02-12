import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/deepak-soni-103822251/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/deepaksoni22"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubSquare />
      </a>
    </div>
  );
}

export default HeaderSocials;
