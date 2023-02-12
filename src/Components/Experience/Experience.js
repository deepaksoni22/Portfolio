import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <articale className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>HTML</h4>
                <small className="text-light">intermediate</small>
              </div>
            </articale>
            <articale className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </articale>
            <articale className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                {" "}
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </articale>
            <articale className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </articale>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ES-6</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;