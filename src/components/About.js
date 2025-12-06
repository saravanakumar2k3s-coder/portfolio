import React from "react";
// import profilePic from "../assets/profile.jpg";

const About = () => {
  return (
  
<section className="about section" id="about">
  <h2 className="section__title">About Me</h2>
  <span className="section__subtitle">My Introduction</span>

  <div className="about__container">
    <p className="about__description">
      Web developer with extensive knowledge in web technologies and UI/UX design. I build web applications that are scalable, efficient, and provide seamless user experiences. Passionate about learning and solving complex problems through code.
    </p>

    <div className="about__info">
      <div>
        <span className="about__info-title">05+</span><br></br>
        <span className="about__info-name">Known<br/>Technologies</span>
      </div>

      <div>
        <span className="about__info-title">08+</span><br></br>
        <span className="about__info-name">Coures<br/>Certifications</span>
      </div>
      <div>
        <span className="about__info-title">5+</span><br/>
        <span className="about__info-name">Completed<br/>projects</span>
      </div>
     
    </div>

    <div className="about__buttons">
      <a download="" href="Saravanakumar_CV.pdf" className="button">Download CV</a>
    </div>
  </div>
</section>

  );
};

export default About;
