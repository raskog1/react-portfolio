import React from "react";
import Profile from "../components/Profile";
import ProjectSection from "../components/ProjectSection";
import CodingLinkSection from "../components/CodingLinkSection";
import FrontEnd from "../components/FrontTech";
import BackEnd from "../components/BackTech";

import projectList from "../projectList.json";
import links from "../links.json";

function Main() {
  // Only render projects that are set to be featured
  const featured = projectList.filter((project) => project.featured);

  return (
    <>
      <div className="container">
        {/* Row containing main bio section and aside */}
        <div className="row">
          {/* Column containing main bio section and projects */}
          <div className="col-md-12 col-lg-9">
            <Profile />
            <hr />
            {/* Projects section */}
            <section className="projects">
              <h2 className="text-dark">Featured Projects</h2>
              <ProjectSection projects={featured} slider="slider4" />
            </section>
          </div>

          {/* Links aside */}
          <aside className="col-12 col-lg-3 text-dark">
            <div className="tech-skills">
              <FrontEnd />
              <BackEnd />
            </div>
            <div className="coding-links">
              <h3>Support Links for Coding</h3>
              <p>
                Visit the following websites that assisted in developing this
                website
              </p>
              <br />
              <CodingLinkSection links={links} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Main;
