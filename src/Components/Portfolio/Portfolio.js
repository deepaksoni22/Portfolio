import React from "react";
import "./Portfolio.css";

function Portfolio(props) {
  return props.array.map((pName, index) => {
    return (
      <section key={index}>
        <h5>My Recent Work</h5>
        <h2>{Object.keys(pName)}</h2>
        <div key={index} className="container portfolio__container">
          {Object.values(pName)[0].map((val, index) => {
            return (
              <article key={index} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img
                    className="frame"
                    src={val.Image}
                    title="instagramPage"
                  />
                </div>
                <h3>{val.Name}</h3>
                <div className="portfolio__item-cta">
                  {" "}
                  <a href={val.Link} className="btn" target="blank">
                    Live
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Git Code
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  });
}

export default Portfolio;
