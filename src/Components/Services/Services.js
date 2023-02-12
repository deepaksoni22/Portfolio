import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
import { FaAward } from "react-icons/fa";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services___container">
        <article className="service">
          <div className="service__head">
            <h3>React Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating single page, responsive web applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Build neat and managed web applications using reusable react
                components.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating performant web applications using react useMemo /
                useCallbacks. Render once and update as needed.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating web applications with real-time data.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Managing application state using Redux / Context API.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>HTML/CSS/Responsive Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating complex, responsive web applications using flexbox and
                grid.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating attractive and performant we applications using CSS
                animations
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building web applications using Canvas</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>JS Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building applications with real-time data</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating highly interactive applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Building performant applications by caching / local storage.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building web application using OOPS.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Bootstrap</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating responsive layouts using bootstrap grid.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating standard and uniform appearance using bootstrap
                classes.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Controlling visibility for different screen widths.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create web applications using prebuilt bootstrap components.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creating web applications using customized boostrap components.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
