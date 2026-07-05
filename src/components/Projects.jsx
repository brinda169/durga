import "../assets/styles/projects.css";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects(){

const data=[
{
title:"Portfolio Website",
desc:"Personal portfolio built using React."
},
{
title:"Weather App",
desc:"Weather application using API."
},
{
title:"Todo App",
desc:"Task management application."
}
];

return(
<>
 <section id="projects" className="projects-section">
      <h2 data-aos="fade-up" className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            data-aos="zoom-in"
          >
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

</>);

}

export default Projects;