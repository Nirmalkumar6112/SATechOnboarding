/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Bg_1.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const certificationsList = [
  {
    title: "Microsoft Learn AI Skills Challenge",
    description: "Learnt about various Cognitive Services in Azure.",
    url: "https://learn.microsoft.com/en-us/users/nirmalkumar6112/",
  },
  {
    title: "Google Cloud Skills Boost",
    description: "Completed various hands-on labs on Google Cloud Platform and secured various skils badges.",
    url: "https://linktr.ee/nirmalkumar6112",
  },
  {
    title: "Competitive Progamming Skills",
    description: "Check out my various CP skills profiles.",
    url: "https://linktr.ee/nirmalkumar6112",
  },
  {
    title: "Wanna explore more about me?",
    description: "Check out my social media profiles in Linktree link tagged.",
    url: "https://linktr.ee/nirmalkumar6112",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover",animation: "1s ease-out 0s 1 slideIn" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {certificationsList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
