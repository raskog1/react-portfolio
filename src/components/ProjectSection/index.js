import React from "react";
import ProjectCard from "../ProjectCard";

function ProjectSection({ projects, slider }) {
  // Shuffle projects
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <React.Fragment>
      {shuffle(projects).map((project) => (
        <ProjectCard {...{ project, slider }} key={project.id} />
      ))}
    </React.Fragment>
  );
}

export default ProjectSection;
