import React from "react";
import "../App.css";
import portfolioImg from "../assets/portfolio.png";
import weatherapp from "../assets/weather.png"

const projects = [
  { title: "Ecommerce Site", img: "https://via.placeholder.com/300", link: "#" },
  { title: "Personal Portfolio", img: portfolioImg, link: "https://portfolio-iota-bice-14.vercel.app/" },
  { title: "Wether App", img: weatherapp, link: "https://weather-app0-theta.vercel.app/" },

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
