import React from "react";
import ProjectCard from "../ProjectCard";

function ProjectSection(props) {
  return (
    <React.Fragment>
      {props.projects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </React.Fragment>
  );
}

export default ProjectSection;
