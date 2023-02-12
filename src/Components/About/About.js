import React from "react";
import "./About.css";
import { FaFreeCodeCamp } from "react-icons/fa";
import { BiBusSchool } from "react-icons/bi";
import { GiSchoolBag } from "react-icons/gi";
import { MdOutlineSchool } from "react-icons/md";
import ME from "../../assets/aboutImage.jpg";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about-me-image">
            <img
              id="image"
              // src="https://source.unsplash.com/400x400/?gym"
              src={ME}
              alt="Aboout"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiBusSchool className="about__icon" />
              <h5>73%</h5>
              <small>10th</small>
            </article>
            <article className="about__card">
              <GiSchoolBag className="about__icon" />
              <h5>66%</h5>
              <small>12th</small>
            </article>
            <article className="about__card">
              <MdOutlineSchool className="about__icon" />
              <h5>70%</h5>
              <small>B.C.A</small>
            </article>
            <article className="about__card">
              <FaFreeCodeCamp className="about__icon" />
              <h5>JavaScript</h5>
              <small>Certificate</small>
            </article>
          </div>
          <p>
            I am a software engineer with expertise and keen interest in
            building frontend applications using React, JavaScript, Ajax, HTML,
            CSS , Bootstrap, Github.
          </p>
          <p>
            I have good knowledge and experience in building responsive web
            applications which can target various devices with different screen
            resolutions.
          </p>
          <p>
            I am a quick learner and passionate about learning new technologies.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
