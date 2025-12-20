// Skills.jsx
import React from "react";
import "../App.css";
import { FaJava,FaReact,FaJsSquare,FaHtml5,FaCss3Alt,FaDatabase,FaNodeJs,FaPython, } from "react-icons/fa";
import {SiBootstrap,SiSpringboot,SiC} from "react-icons/si";

const skillsData = [
  { name: "Java", icon: <FaJava />, level: 75 },
  { name: "Python", icon: <FaPython />, level: 60 },
  { name: "C", icon: <SiC />, level: 65 },
  { name: "JavaScript", icon: <FaJsSquare />, level: 80 },
  { name: "HTML5", icon: <FaHtml5 />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
  { name: "React", icon: <FaReact />, level: 70 },
  { name: "Bootstrap", icon: <SiBootstrap />, level: 70 },
  { name: "MySQL", icon: <FaDatabase />, level: 80 },
  { name: "Spring Boot", icon: <SiSpringboot />, level: 65 },
  { name: "Node.js", icon: <FaNodeJs />, level: 45 }

];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span>{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
