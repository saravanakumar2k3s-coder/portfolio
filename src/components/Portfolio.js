import React from "react";
import "../App.css";

const projects = [
  { title: "Ecommerce Site", img: "https://via.placeholder.com/300", link: "#" },
  { title: "Portfolio", img: "https://via.placeholder.com/300", link: "#" },
  { title: "Wether App", img: "https://via.placeholder.com/300", link: "#" },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="portfolio-card">
            <img src={project.img} alt={project.title} />
            <h4>{project.title}</h4>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
