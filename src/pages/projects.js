import React from "react";
import ProjectSection from "../components/ProjectSection";
import projectList from "../projectList.json";

function Projects() {
  return (
    <>
      <div className="container">
        <section className="projects">
          <h2 className="text-dark">Project Library</h2>
          <ProjectSection projects={projectList} slider="" />
        </section>
      </div>
    </>
  );
}

export default Projects;
