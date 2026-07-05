import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava
} from "react-icons/fa";

import { SiPython } from "react-icons/si";

import "../assets/styles/skills.css";
import { skills } from "../data/skills";

const icons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  Python: <SiPython />,
  Java: <FaJava />,
  Git: <FaGitAlt />
};

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <h2 data-aos="fade-up" className="section-title">
        My Skills
      </h2>

      <div className="skills-container">

        {skills.map((skill) => (

          <div
            key={skill.name}
            className="skill-card"
            data-aos="zoom-in"
          >

            <div
              className="skill-icon"
              style={{ color: skill.color }}
            >
              {icons[skill.name]}
            </div>

            <h3>{skill.name}</h3>

            <div className="progress-bar">

              <div
                className="progress"
                style={{
                  width: `${skill.level}%`,
                  background: skill.color
                }}
              ></div>

            </div>

            <p>{skill.level}%</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;