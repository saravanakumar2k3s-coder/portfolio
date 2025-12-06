import React from "react";
import { Link } from "react-scroll";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="hero flex-between" id="home">
      <div className="hero-text">
        <h1>Hi, I’m Saravanakumar</h1>
        <p>Frontend Developer creating modern and responsive websites</p>
         <Link
          to="contact"
          smooth={true}
          duration={500}
          className="button"
        >
          Contact Me
        </Link>
      
      </div>
      <div className="hero-image">
        <img src={profilePic} alt="sk" style={{ borderRadius: "50%" }} />
      </div>
    </section>
  );
};

export default Hero;
