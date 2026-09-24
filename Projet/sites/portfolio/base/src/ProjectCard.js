import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project, index }) {
  const technologies = project.tech.split(",").map((technology) => technology.trim());

  return (
    <article className="project-card">
      <div className="project-card-topline">
        <span>Projet {String(index + 1).padStart(2, "0")}</span>
        <span className="project-arrow">↗</span>
      </div>
      <div className="project-card-content">
        <h3>{project.name}</h3>
        <div className="project-technologies" aria-label="Technologies utilisées">
          {technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <p>{project.description}</p>
      </div>
      {project.link && (
        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
          <span>Voir le projet</span>
          <span aria-hidden="true">→</span>
        </a>
      )}
    </article>
  );
}

export default ProjectCard;
