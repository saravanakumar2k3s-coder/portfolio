import React from "react";
import "../App.css";

const servicesData = [
  { title: "Web Design", desc: "Responsive and modern web designs" },
  { title: "Frontend Dev", desc: "React, JavaScript, Html , CSS" },
  { title: "Backend Dev", desc: "Java, Springboot , MySQL" },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>My Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
