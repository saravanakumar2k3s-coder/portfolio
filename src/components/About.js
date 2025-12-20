import React from "react";


const About = () => {
  return (
  
<section className="about section" id="about">
  <h2 className="section__title">About Me</h2>
  <span className="section__subtitle">My Introduction</span>

  <div className="about__container">
    <p className="about__description">
        I'm a passionate Frontend Developer skilled in React, JavaScript, and
          modern UI design. I love creating smooth, responsive, and user-friendly
          web interfaces that solve real-world problems.
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
