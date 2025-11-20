import React from "react";
import "./ProjectCard.css";
import "./Iphoneresponsive.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p><strong>Technologies :</strong> {project.tech}</p>
      <p className="text">{project.description}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Voir le projet
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
