// Skills.jsx
import React from "react";
import "../App.css";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from "react-icons/fa";

const skillsData = [
  { name: "Java", icon: <FaNodeJs />, level: 85 },
  { name: "React", icon: <FaReact />, level: 90 },
  { name: "JavaScript", icon: <FaJsSquare />, level: 95 },
  { name: "HTML5", icon: <FaHtml5 />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
  { name: "MySQL", icon: <FaDatabase />, level: 80 },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
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
